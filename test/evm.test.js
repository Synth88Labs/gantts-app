/* ============================================================
   evm.test.js — S-curve and earned value.

   The arithmetic here is easy to get plausibly wrong: every quantity
   is a number, none of them look obviously bad, and a chart will draw
   a confident line through whatever you hand it. These assertions
   exist so a wrong curve fails the build instead of a status meeting.

   The most important group is "no actuals" — see the comment there.
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
global.window = {};
new Function(fs.readFileSync(path.join(ROOT, 'js/util.js'), 'utf8'))();
global.U = window.U;
new Function(fs.readFileSync(path.join(ROOT, 'js/calendar.js'), 'utf8'))();
global.Cal = window.Cal;
new Function(fs.readFileSync(path.join(ROOT, 'js/evm.js'), 'utf8'))();
const EVM = window.EVM;

let fail = 0, run = 0;
function eq(got, want, label) {
  run++;
  if (String(got) !== String(want)) {
    fail++;
    console.error(`  ✗ ${label}\n      got  ${got}\n      want ${want}`);
  }
}
const near = (got, want, label, tol) => eq(Math.abs(got - want) < (tol || 1e-6), true,
  `${label} (got ${got}, want ~${want})`);

const task = (o) => Object.assign(
  { type: 'task', progress: 0, cost: 0, spent: 0, deps: [], parentId: null }, o);

/* A calendar-free project keeps the arithmetic checkable by hand. */
const proj = (tasks, extra) => Object.assign({
  tasks,
  settings: { calendar: { enabled: false, workdays: [1, 2, 3, 4, 5], holidays: {} } },
  baseline: null,
}, extra || {});

/* ---------------- basis selection ---------------- */
{
  const noCost = EVM.compute(proj([
    task({ id: 'a', start: '2026-01-05', end: '2026-01-09' }),
  ]), '2026-01-05');
  eq(noCost.basis, 'duration', 'no costs anywhere → duration basis');

  const withCost = EVM.compute(proj([
    task({ id: 'a', start: '2026-01-05', end: '2026-01-09', cost: 100 }),
  ]), '2026-01-05');
  eq(withCost.basis, 'cost', 'any cost present → cost basis');
  eq(withCost.bac, 100, 'BAC is the sum of leaf costs');
}

/* ---------------- no actuals: the honesty constraint ----------------

   If AC were derived from progress, AC would equal EV by construction,
   so CPI would be exactly 1.00 and CV exactly 0 — for every project,
   always. These assertions pin the metrics to null instead, so a
   caller cannot render a reassuring number nobody computed. */
{
  const r = EVM.compute(proj([
    task({ id: 'a', start: '2026-01-05', end: '2026-01-09', cost: 100, progress: 50 }),
  ]), '2026-01-09');

  eq(r.hasActuals, false, 'no spent values → hasActuals false');
  eq(r.metrics.ac, null, 'AC is null, not inferred from progress');
  eq(r.metrics.cv, null, 'CV is null without actuals');
  eq(r.metrics.cpi, null, 'CPI is null without actuals — never a fabricated 1.00');
  eq(r.metrics.eac, null, 'EAC is null without a CPI to forecast from');
  eq(r.metrics.vac, null, 'VAC is null without actuals');
  eq(r.actual, null, 'the actual-cost series is null, not a copy of earned');

  // Schedule side still works — it needs no cost data at all.
  eq(r.metrics.ev, 50, 'EV = budget x progress');
  eq(r.metrics.spi != null, true, 'SPI is available without actuals');
}

/* ---------------- actuals present ---------------- */
{
  const r = EVM.compute(proj([
    task({ id: 'a', start: '2026-01-05', end: '2026-01-09', cost: 100, progress: 50, spent: 80 }),
  ]), '2026-01-09');

  eq(r.hasActuals, true, 'a spent value turns actuals on');
  eq(r.metrics.ac, 80, 'AC comes from task.spent');
  eq(r.metrics.ev, 50, 'EV = 100 x 50%');
  eq(r.metrics.cv, -30, 'CV = EV - AC = 50 - 80');
  near(r.metrics.cpi, 0.625, 'CPI = 50/80');
  near(r.metrics.eac, 160, 'EAC = BAC/CPI = 100/0.625');
  near(r.metrics.vac, -60, 'VAC = BAC - EAC');
}

/* ---------------- groups are not double-counted ---------------- */
{
  const r = EVM.compute(proj([
    task({ id: 'g', type: 'group', start: '2026-01-05', end: '2026-01-16', cost: 300 }),
    task({ id: 'a', parentId: 'g', start: '2026-01-05', end: '2026-01-09', cost: 100 }),
    task({ id: 'b', parentId: 'g', start: '2026-01-12', end: '2026-01-16', cost: 200 }),
  ]), '2026-01-05');

  eq(r.bac, 300, 'BAC counts leaves only — the group total is a roll-up, not extra budget');
  eq(EVM.leaves(r === null ? [] : [
    task({ id: 'g', type: 'group' }), task({ id: 'a', parentId: 'g' }),
  ]).length, 1, 'a parent is excluded even when its type is not "group"');
}

/* ---------------- schedule variance ---------------- */
{
  // Two 5-day tasks, 100 each. As of the end of task A, plan says A is done.
  const tasks = [
    task({ id: 'a', start: '2026-01-05', end: '2026-01-09', cost: 100 }),
    task({ id: 'b', start: '2026-01-12', end: '2026-01-16', cost: 100 }),
  ];

  const behind = EVM.compute(proj(tasks.map(t => Object.assign({}, t))), '2026-01-09');
  near(behind.metrics.pv, 100, 'PV at the end of task A is A\'s full budget');
  eq(behind.metrics.ev, 0, 'nothing reported done → EV 0');
  eq(behind.metrics.sv, -100, 'SV = 0 - 100, a full task behind');
  eq(behind.metrics.spi, 0, 'SPI 0 when nothing is done');
  eq(EVM.verdict(behind.metrics).key, 'behind', 'verdict reads behind');

  const onTrack = EVM.compute(proj([
    task({ id: 'a', start: '2026-01-05', end: '2026-01-09', cost: 100, progress: 100 }),
    task({ id: 'b', start: '2026-01-12', end: '2026-01-16', cost: 100 }),
  ]), '2026-01-09');
  near(onTrack.metrics.spi, 1, 'SPI 1 when done exactly as planned');
  eq(EVM.verdict(onTrack.metrics).key, 'ontrack', 'verdict reads on track');
}

/* ---------------- the curves ---------------- */
{
  const r = EVM.compute(proj([
    task({ id: 'a', start: '2026-01-05', end: '2026-01-09', cost: 100, progress: 100 }),
    task({ id: 'b', start: '2026-01-12', end: '2026-01-16', cost: 100 }),
  ]), '2026-01-09');

  // Cumulative series must never go down.
  let mono = true;
  for (let i = 1; i < r.planned.length; i++) if (r.planned[i] < r.planned[i - 1] - 1e-9) mono = false;
  eq(mono, true, 'the planned curve is monotonically non-decreasing');

  near(r.planned[r.planned.length - 1], 200, 'the planned curve ends at BAC');

  // Earned and actual must not be drawn past the status date.
  const iAfter = r.dates.findIndex(d => U.parse(d) > U.parse('2026-01-09'));
  eq(iAfter > -1, true, 'the axis extends past the status date');
  eq(r.earned[iAfter], null, 'the earned curve stops at the status date');
  eq(r.earned[r.dates.indexOf('2026-01-09')] != null, true, 'earned is drawn up to the status date');
  eq(r.earnedIsReconstructed, true, 'the caller is told the earned curve is reconstructed');
}

/* ---------------- baseline drives planned value ---------------- */
{
  const tasks = [task({ id: 'a', start: '2026-01-12', end: '2026-01-16', cost: 100 })];
  const noBase = EVM.compute(proj(tasks), '2026-01-09');
  eq(noBase.plannedFrom, 'current', 'without a baseline, current dates are the plan');
  eq(noBase.metrics.pv, 0, 'task has not started under current dates → PV 0');

  // Same task, but the baseline said it should already be finished.
  const withBase = EVM.compute(proj(tasks, {
    baseline: { savedAt: '2026-01-01', tasks: { a: { start: '2026-01-05', end: '2026-01-09', progress: 0 } } },
  }), '2026-01-09');
  eq(withBase.plannedFrom, 'baseline', 'a baseline is preferred as the plan');
  near(withBase.metrics.pv, 100, 'PV follows the baseline dates, not the slipped ones');
  eq(withBase.metrics.sv, -100, 'the slip shows up as negative SV — the point of a baseline');
}

/* ---------------- working calendar ---------------- */
{
  const withCal = {
    tasks: [task({ id: 'a', start: '2026-01-05', end: '2026-01-16', cost: 100 })],
    settings: { calendar: { enabled: true, workdays: [1, 2, 3, 4, 5], holidays: {} } },
    baseline: null,
  };
  const r = EVM.compute(withCal, '2026-01-16');
  eq(r.dates.length, 10, 'the axis skips weekends when a calendar is active');
  eq(r.dates.indexOf('2026-01-10'), -1, 'Saturday is not on the axis');
  near(r.planned[r.planned.length - 1], 100, 'budget still fully spreads across working days only');
}

/* ---------------- degenerate input ---------------- */
{
  const empty = EVM.compute(proj([]), '2026-01-05');
  eq(empty.empty, true, 'an empty project reports empty rather than throwing');
  eq(empty.metrics, null, 'no metrics for an empty project');

  const zeroCost = EVM.compute(proj([
    task({ id: 'a', start: '2026-01-05', end: '2026-01-09', cost: 0 }),
  ]), '2026-01-05');
  eq(zeroCost.basis, 'duration', 'an explicit zero cost is not "has costs"');
  eq(zeroCost.bac > 0, true, 'duration basis still produces a non-zero BAC');
}

if (fail) {
  console.error(`\n✗ evm: ${fail} of ${run} assertion(s) failed.\n`);
  process.exit(1);
}
console.log(`✓ evm — ${run} assertions passed.`);
