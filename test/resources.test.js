#!/usr/bin/env node
/* ============================================================
   resources.test.js — assertions for workload / over-allocation.

   Over-allocation is a claim about someone's week. Getting it wrong in
   either direction is costly: a false alarm trains people to ignore the
   warning, and a miss defeats the point of having it. The double-count
   cases (groups, milestones) are the ones most likely to break in a
   refactor, so they are pinned here.

   Run: node test/resources.test.js   (also runs in npm run check)
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
global.window = {};
new Function(fs.readFileSync(path.join(ROOT, 'js/util.js'), 'utf8'))();
global.U = window.U;
new Function(fs.readFileSync(path.join(ROOT, 'js/calendar.js'), 'utf8'))();
global.Cal = window.Cal;
new Function(fs.readFileSync(path.join(ROOT, 'js/resources.js'), 'utf8'))();
const R = window.Resources;

let fail = 0, run = 0;
function eq(got, want, label) {
  run++;
  if (String(got) !== String(want)) {
    fail++;
    console.error(`  ✗ ${label}\n      got  ${got}\n      want ${want}`);
  }
}

const task = (o) => Object.assign({ type: 'task', progress: 0, deps: [] }, o);
const project = { settings: {} };

// ---- a single assignment ----
{
  const tasks = [task({ id: 'a', name: 'A', assignee: 'Priya', start: '2026-07-20', end: '2026-07-24' })];
  const load = R.compute(tasks, project, null);
  eq(load.names.join(','), 'Priya', 'one assignee found');
  eq(load.byName.Priya.peak, 100, 'peak is 100% for one full-time task');
  eq(load.anyOver, false, 'one task is not over-allocation');
  eq(R.on(load, 'Priya', '2026-07-22'), 100, 'mid-task day reads 100%');
  eq(R.on(load, 'Priya', '2026-07-27'), 0, 'a day outside the task reads 0%');
}

// ---- overlapping assignments: the whole point ----
{
  const tasks = [
    task({ id: 'a', name: 'A', assignee: 'Priya', start: '2026-07-20', end: '2026-07-24' }),
    task({ id: 'b', name: 'B', assignee: 'Priya', start: '2026-07-22', end: '2026-07-28' }),
  ];
  const load = R.compute(tasks, project, null);
  eq(load.byName.Priya.peak, 200, 'two overlapping tasks peak at 200%');
  eq(load.anyOver, true, 'that is flagged as over-allocated');
  eq(R.on(load, 'Priya', '2026-07-21'), 100, 'before the overlap: 100%');
  eq(R.on(load, 'Priya', '2026-07-23'), 200, 'inside the overlap: 200%');
  eq(R.on(load, 'Priya', '2026-07-27'), 100, 'after the overlap: 100%');
  eq(load.byName.Priya.over.join(','), '2026-07-22,2026-07-23,2026-07-24',
    'exactly the overlapping days are flagged');
}

// ---- part-time units ----
{
  const tasks = [
    task({ id: 'a', assignee: 'Sam', units: 50, start: '2026-07-20', end: '2026-07-24' }),
    task({ id: 'b', assignee: 'Sam', units: 50, start: '2026-07-20', end: '2026-07-24' }),
  ];
  const load = R.compute(tasks, project, null);
  eq(load.byName.Sam.peak, 100, 'two half-time tasks sum to exactly full');
  eq(load.anyOver, false, 'and that is not over-allocation');
}

// ---- groups and milestones must not double-count ----
{
  const tasks = [
    task({ id: 'g', type: 'group', assignee: 'Priya', start: '2026-07-20', end: '2026-07-24' }),
    task({ id: 'a', assignee: 'Priya', start: '2026-07-20', end: '2026-07-24' }),
    task({ id: 'm', type: 'milestone', assignee: 'Priya', start: '2026-07-22', end: '2026-07-22' }),
  ];
  const load = R.compute(tasks, project, null);
  eq(load.byName.Priya.taskCount, 1, 'group and milestone rows are excluded');
  eq(load.byName.Priya.peak, 100, 'so the rollup does not double-count the child');
  eq(load.anyOver, false, 'and no false over-allocation is reported');
}

// ---- unassigned and blank names are ignored ----
{
  const tasks = [
    task({ id: 'a', start: '2026-07-20', end: '2026-07-24' }),
    task({ id: 'b', assignee: '   ', start: '2026-07-20', end: '2026-07-24' }),
    task({ id: 'c', assignee: 'Lee', start: '2026-07-20', end: '2026-07-24' }),
  ];
  const load = R.compute(tasks, project, null);
  eq(load.names.join(','), 'Lee', 'unassigned and whitespace-only names are skipped');
}

// ---- non-working days ----
{
  const cal = { enabled: true, workdays: [1, 2, 3, 4, 5], holidays: {} };
  // Mon 20 Jul 2026 → Fri 31 Jul, spanning a weekend
  const tasks = [task({ id: 'a', assignee: 'Ana', start: '2026-07-20', end: '2026-07-31' })];
  const withCal = R.compute(tasks, project, cal);
  const withoutCal = R.compute(tasks, project, null);
  eq(withCal.byName.Ana.days.has('2026-07-25'), false, 'Saturday carries no load');
  eq(withoutCal.byName.Ana.days.has('2026-07-25'), true, 'without a calendar it does');
  eq(withCal.byName.Ana.days.size, 10, '12 calendar days is 10 working days');
}

// ---- per-person capacity override ----
{
  const p = { settings: { capacities: { Jo: 50 } } };
  const tasks = [task({ id: 'a', assignee: 'Jo', start: '2026-07-20', end: '2026-07-24' })];
  const load = R.compute(tasks, p, null);
  eq(load.byName.Jo.capacity, 50, 'capacity override is read');
  eq(load.anyOver, true, 'a full-time task over-books a half-time person');
  eq(load.byName.Jo.over.length, 5, 'on every day of the task');
}

// ---- tasksOn names the culprits ----
{
  const tasks = [
    task({ id: 'a', name: 'Design', assignee: 'Priya', start: '2026-07-20', end: '2026-07-24' }),
    task({ id: 'b', name: 'Build', assignee: 'Priya', start: '2026-07-22', end: '2026-07-28' }),
    task({ id: 'c', name: 'Other', assignee: 'Sam', start: '2026-07-22', end: '2026-07-28' }),
  ];
  const names = R.tasksOn(tasks, 'Priya', '2026-07-23').map(t => t.name).sort().join(',');
  eq(names, 'Build,Design', 'both colliding tasks are identified');
  eq(R.tasksOn(tasks, 'Priya', '2026-07-27').length, 1, 'and only the live one outside the overlap');
}

// ---- guards ----
{
  const tasks = [task({ id: 'a', assignee: 'X', start: '2026-07-24', end: '2026-07-20' })];
  const load = R.compute(tasks, project, null);   // end before start must not hang
  eq(load.byName.X.days.size, 0, 'an end-before-start task contributes nothing');
  eq(R.summary(R.compute([], project, null)), 'No one is assigned yet.', 'empty summary reads sensibly');
}

if (fail) {
  console.error(`\n✗ resources: ${fail} of ${run} assertion(s) failed.\n`);
  process.exit(1);
}
console.log(`✓ resources — ${run} assertions passed.`);
