/* ============================================================
   mermaid-gantt.test.js

   Round-tripping our own export proves only self-consistency — the
   msproject work already taught that lesson the hard way, where a
   summary-row bug survived a clean round-trip and only showed up
   against a file written by the real tool. So the parser is tested
   against diagrams written the way people actually write them: the
   Mermaid documentation's own example, a fenced README block, tasks
   that omit their start date, and `after` chains.
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
global.window = {};
new Function(fs.readFileSync(path.join(ROOT, 'js/util.js'), 'utf8'))();
global.U = window.U;
new Function(fs.readFileSync(path.join(ROOT, 'js/calendar.js'), 'utf8'))();
global.Cal = window.Cal;
new Function(fs.readFileSync(path.join(ROOT, 'js/mermaid-gantt.js'), 'utf8'))();
const MG = window.MermaidGantt;

let fail = 0, run = 0;
function eq(got, want, label) {
  run++;
  if (String(got) !== String(want)) {
    fail++;
    console.error(`  ✗ ${label}\n      got  ${got}\n      want ${want}`);
  }
}

const byName = (tasks, n) => tasks.find(t => t.name === n);

/* ---------------- a diagram in the documented style ---------------- */
{
  const src = `
gantt
    title A Gantt Diagram
    dateFormat YYYY-MM-DD
    excludes weekends
    section Design
    Research           :done, res, 2026-01-05, 5d
    Wireframes         :active, wf, after res, 8d
    Sign-off           :milestone, ms, 2026-01-23, 0d
    section Build
    Implementation     :impl, after wf, 10d
`;
  const r = MG.parse(src);

  eq(r.title, 'A Gantt Diagram', 'title is read');
  eq(r.excludesWeekends, true, '"excludes weekends" is detected');

  const groups = r.tasks.filter(t => t.type === 'group');
  eq(groups.length, 2, 'each section becomes a group');
  eq(groups[0].name, 'Design', 'section name is kept');

  const res = byName(r.tasks, 'Research');
  eq(res.start, '2026-01-05', 'explicit start date');
  // 5d from Jan 5 covers Jan 5,6,7,8,9 — inclusive end is the 9th, not the 10th.
  eq(res.end, '2026-01-09', 'a 5d duration is INCLUSIVE of the start day');
  eq(res.progress, 100, '"done" imports as 100%');
  eq(res.parentId, groups[0].id, 'task is parented to its section');

  const wf = byName(r.tasks, 'Wireframes');
  eq(wf.progress, 50, '"active" imports as 50%');
  eq(wf.deps.length, 1, '"after res" creates a dependency');
  eq(wf.deps[0].from, res.id, 'the dependency points at the right predecessor');
  eq(wf.deps[0].type, 'FS', 'after == finish-to-start');
  /* Jan 10 is a Saturday. The diagram says "excludes weekends", so a
     successor to a task ending Friday starts on the MONDAY — and its
     8d duration is eight WORKING days, not eight calendar days. The
     first version of this test asserted Jan 10 and shipped a parser
     that put tasks on weekends in a file that forbids them. */
  eq(wf.start, '2026-01-12', 'an "after" task skips the weekend when the diagram excludes weekends');
  eq(wf.end, '2026-01-21', '8 WORKING days from Mon Jan 12');

  const ms = byName(r.tasks, 'Sign-off');
  eq(ms.type, 'milestone', '"milestone" tag sets the type');
  eq(ms.start, ms.end, 'a milestone is zero-length');

  eq(byName(r.tasks, 'Implementation').parentId, groups[1].id, 'the second section captures its own tasks');

  // The 50% guess must be surfaced, not silently applied.
  eq(r.warnings.some(w => /active/i.test(w) && /50/.test(w)), true,
    'the "active -> 50%" guess is reported as a warning');

  // Group spans are derived from children.
  eq(groups[0].start, '2026-01-05', 'group start is the earliest child start');
  eq(groups[0].end, '2026-01-23', 'group end is the latest child end');
}

/* ---------------- no derived date lands on an excluded day ----------------

   The specific dates above are easy to "fix" by adjusting a constant.
   This asserts the property they exist to protect. */
{
  const r = MG.parse(`
gantt
    excludes weekends
    section S
    A :a, 2026-01-02, 3d
    B :b, after a, 4d
    C :c, 5d
    D :d, after b, 2d
`);
  const bad = r.tasks
    .filter(t => t.type !== 'group')
    .filter(t => U.isWeekend(t.start) || U.isWeekend(t.end));
  eq(bad.map(t => t.name + '@' + t.start + '..' + t.end).join(',') || 'none', 'none',
    'no derived task starts or ends on a weekend when the diagram excludes them');
}

/* ---------------- an explicit date is honoured as written ---------------- */
{
  // The author typed a Saturday. Silently moving it would be the wrong
  // kind of helpful — only DERIVED dates get snapped.
  const r = MG.parse(`
gantt
    excludes weekends
    section S
    A :a, 2026-01-10, 1d
`);
  eq(byName(r.tasks, 'A').start, '2026-01-10', 'an explicitly typed date is kept even if it is a weekend');
}

/* ---------------- crit is not trusted ---------------- */
{
  const r = MG.parse(`
gantt
    section S
    A :crit, done, a, 2026-01-05, 3d
`);
  const a = byName(r.tasks, 'A');
  eq(a.progress, 100, 'done still applies alongside crit');
  eq('critical' in a, false, 'crit is not imported — criticality is computed, not asserted');
}

/* ---------------- fenced block from a README ---------------- */
{
  const r = MG.parse('Some prose.\n\n```mermaid\ngantt\n    section S\n    A :a, 2026-02-02, 4d\n```\n\nMore prose.');
  eq(r.tasks.filter(t => t.type !== 'group').length, 1, 'a fenced block is unwrapped');
  eq(byName(r.tasks, 'A').start, '2026-02-02', 'dates survive unwrapping');
}

/* ---------------- omitted start continues from the previous task ---------------- */
{
  const r = MG.parse(`
gantt
    section S
    First  :f, 2026-03-02, 3d
    Second :s, 2d
`);
  eq(byName(r.tasks, 'First').end, '2026-03-04', 'first task: 3d inclusive');
  eq(byName(r.tasks, 'Second').start, '2026-03-05', 'a task with only a duration continues from the previous end');
  eq(byName(r.tasks, 'Second').end, '2026-03-06', '2d inclusive');
}

/* ---------------- bad input fails loudly ---------------- */
{
  let threw = '';
  try { MG.parse('flowchart TD\n  A --> B'); } catch (e) { threw = e.message; }
  eq(/mermaid gantt/i.test(threw), true, 'a non-gantt diagram is rejected with a useful message');

  threw = '';
  try { MG.parse('gantt\n    title Empty\n'); } catch (e) { threw = e.message; }
  eq(/no tasks/i.test(threw), true, 'a gantt block with no tasks is rejected');

  const r = MG.parse('gantt\n    section S\n    A :a, 2026-01-05, 3d\n    B :b, after nope, 2d\n');
  eq(r.warnings.some(w => /nope/.test(w)), true, 'a dangling "after" reference is warned about, not silently dropped');
}

/* ---------------- export ---------------- */
{
  const project = {
    name: 'Launch: phase 2, final',      // deliberately full of syntax breakers
    settings: { calendar: { enabled: true, workdays: [1, 2, 3, 4, 5], holidays: {} } },
    tasks: [
      { id: 'g1', name: 'Design', type: 'group', parentId: null, start: '2026-01-05', end: '2026-01-16', deps: [] },
      { id: 't1', name: 'Research', type: 'task', parentId: 'g1', start: '2026-01-05', end: '2026-01-09', progress: 100, deps: [] },
      { id: 't2', name: 'Wireframes', type: 'task', parentId: 'g1', start: '2026-01-12', end: '2026-01-16', progress: 40, deps: [{ from: 't1', type: 'FS', lag: 0 }] },
      { id: 't3', name: 'Ship', type: 'milestone', parentId: null, start: '2026-01-19', end: '2026-01-19', progress: 0, deps: [] },
    ],
  };

  const out = MG.export(project, { critical: new Set(['t1', 't2']) });

  eq(/^gantt\n/.test(out), true, 'output starts with the gantt keyword');
  eq(out.includes('dateFormat YYYY-MM-DD'), true, 'a dateFormat is declared');
  eq(out.includes('excludes weekends'), true, 'a Mon-Fri calendar emits "excludes weekends"');
  eq(out.includes('section Design'), true, 'groups become sections');
  eq(/title Launch phase 2 final/.test(out), true, 'colons and commas are stripped from the title');
  eq(out.includes(':done, crit, t1,'), true, '100% exports as done, and criticality is emitted');
  eq(out.includes('active'), true, '40% exports as active');
  eq(out.includes('after t1'), true, 'a zero-lag FS dep exports as "after"');
  eq(/Ship\s+:milestone/.test(out), true, 'a milestone is tagged');
  eq(out.includes('0d'), true, 'a milestone has zero duration');

  // Round-trip: the export must parse back.
  const back = MG.parse(out);
  eq(back.tasks.filter(t => t.type !== 'group').length, 3, 'the export parses back to the same task count');
  eq(byName(back.tasks, 'Research').progress, 100, 'done survives the round trip');
  eq(byName(back.tasks, 'Research').start, '2026-01-05', 'dates survive the round trip');
  eq(byName(back.tasks, 'Ship').type, 'milestone', 'milestone type survives the round trip');
  eq(byName(back.tasks, 'Wireframes').deps.length, 1, 'the dependency survives the round trip');
}

/* ---------------- a lagged or non-FS dep falls back to a date ---------------- */
{
  const project = {
    name: 'P', settings: {},
    tasks: [
      { id: 'a', name: 'A', type: 'task', parentId: null, start: '2026-01-05', end: '2026-01-09', progress: 0, deps: [] },
      { id: 'b', name: 'B', type: 'task', parentId: null, start: '2026-01-14', end: '2026-01-16', progress: 0, deps: [{ from: 'a', type: 'FS', lag: 2 }] },
      { id: 'c', name: 'C', type: 'task', parentId: null, start: '2026-01-05', end: '2026-01-07', progress: 0, deps: [{ from: 'a', type: 'SS', lag: 0 }] },
    ],
  };
  const out = MG.export(project, {});
  eq(out.includes('after a'), false, 'a lagged FS and an SS link cannot be expressed as "after"');
  eq(out.includes('2026-01-14'), true, 'the lagged task falls back to its absolute date, which stays correct');
  eq(out.includes('2026-01-05'), true, 'the SS task falls back to its absolute date');
}

if (fail) {
  console.error(`\n✗ mermaid-gantt: ${fail} of ${run} assertion(s) failed.\n`);
  process.exit(1);
}
console.log(`✓ mermaid-gantt — ${run} assertions passed.`);
