/* ============================================================
   views.test.js — lookahead and milestone filtering.

   The assertion that matters most is "overlap, not containment": a
   long task already in progress must appear in the window. Getting
   that wrong produces a lookahead that looks plausible and silently
   omits the work actually happening on site.
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
global.window = {};
new Function(fs.readFileSync(path.join(ROOT, 'js/util.js'), 'utf8'))();
global.U = window.U;
new Function(fs.readFileSync(path.join(ROOT, 'js/views.js'), 'utf8'))();
const Views = window.Views;

let fail = 0, run = 0;
function eq(got, want, label) {
  run++;
  if (String(got) !== String(want)) {
    fail++;
    console.error(`  ✗ ${label}\n      got  ${got}\n      want ${want}`);
  }
}

const t = (id, start, end, o) => Object.assign(
  { id, name: id, start, end, type: 'task', parentId: null, deps: [] }, o || {});

// Monday 2026-07-20 is the anchor for most cases below.
const MONDAY = '2026-07-20';

/* ---------------- window arithmetic ---------------- */
{
  // A Thursday must snap back to the Monday of its week.
  const w = Views.window({ mode: 'lookahead', weeks: 3, anchor: null }, '2026-07-23');
  eq(w.start, MONDAY, 'the window snaps back to Monday');
  eq(w.end, '2026-08-09', '3 weeks is 21 calendar days, inclusive');

  const pinned = Views.window({ mode: 'lookahead', weeks: 2, anchor: '2026-09-07' }, '2026-07-23');
  eq(pinned.start, '2026-09-07', 'a pinned anchor overrides today');
  eq(pinned.end, '2026-09-20', '2 weeks from the pinned Monday');

  // Sunday belongs to the week that started the previous Monday.
  eq(Views.window({ mode: 'lookahead', weeks: 1 }, '2026-07-26').start, MONDAY,
    'Sunday snaps back to the preceding Monday, not forward');
}

/* ---------------- overlap, not containment ---------------- */
{
  const rows = [
    t('before', '2026-06-01', '2026-06-30'),           // wholly before
    t('spanning', '2026-05-01', '2026-12-01'),         // straddles the whole window
    t('starts-inside', '2026-08-05', '2026-09-30'),    // starts in, ends after
    t('ends-inside', '2026-06-01', '2026-07-22'),      // starts before, ends in
    t('inside', '2026-07-27', '2026-07-31'),           // wholly inside
    t('after', '2026-09-01', '2026-09-05'),            // wholly after
    t('touch-start', '2026-07-01', MONDAY),            // ends exactly on day 1
    t('touch-end', '2026-08-09', '2026-08-20'),        // starts exactly on the last day
  ];
  const view = { mode: 'lookahead', weeks: 3, anchor: MONDAY };
  const got = Views.apply(rows, rows, view, MONDAY).rows.map(r => r.id);

  eq(got.includes('spanning'), true, 'a long in-progress task IS in the window (overlap, not containment)');
  eq(got.includes('starts-inside'), true, 'a task starting inside is included');
  eq(got.includes('ends-inside'), true, 'a task ending inside is included');
  eq(got.includes('inside'), true, 'a task wholly inside is included');
  eq(got.includes('touch-start'), true, 'a task ending exactly on the first day is included');
  eq(got.includes('touch-end'), true, 'a task starting exactly on the last day is included');
  eq(got.includes('before'), false, 'a task wholly before is excluded');
  eq(got.includes('after'), false, 'a task wholly after is excluded');
}

/* ---------------- ancestors are kept as context ---------------- */
{
  const rows = [
    t('g1', '2026-07-01', '2026-08-30', { type: 'group' }),
    t('g2', '2026-07-01', '2026-08-30', { type: 'group', parentId: 'g1' }),
    t('work', '2026-07-27', '2026-07-31', { parentId: 'g2' }),
    t('other', '2026-01-01', '2026-01-05', { parentId: 'g2' }),
  ];
  const r = Views.apply(rows, rows, { mode: 'lookahead', weeks: 3, anchor: MONDAY }, MONDAY);
  const ids = r.rows.map(x => x.id);

  eq(ids.join(','), 'g1,g2,work', 'both ancestors are kept, the out-of-window sibling is not');
  eq(r.rows.find(x => x.id === 'g1')._context, true, 'an ancestor is flagged as context');
  eq(r.rows.find(x => x.id === 'work')._context, undefined, 'a matching task is not flagged as context');

  // The flag must never touch the original objects, or it would be saved.
  eq(rows.find(x => x.id === 'g1')._context, undefined,
    'the source task is not mutated — _context must never reach storage');
}

/* ---------------- row order is preserved ---------------- */
{
  const rows = [
    t('c', '2026-07-27', '2026-07-28'),
    t('a', '2026-07-21', '2026-07-22'),
    t('b', '2026-07-29', '2026-07-30'),
  ];
  const got = Views.apply(rows, rows, { mode: 'lookahead', weeks: 3, anchor: MONDAY }, MONDAY).rows.map(r => r.id);
  eq(got.join(','), 'c,a,b', 'filtering never reorders — the plan keeps its authored order');
}

/* ---------------- milestone mode ---------------- */
{
  const rows = [
    t('g', '2026-01-01', '2026-12-31', { type: 'group' }),
    t('task', '2026-03-01', '2026-03-10', { parentId: 'g' }),
    t('ms1', '2026-03-10', '2026-03-10', { type: 'milestone', parentId: 'g' }),
    t('ms2', '2026-09-01', '2026-09-01', { type: 'milestone' }),
  ];
  const got = Views.apply(rows, rows, { mode: 'milestones', weeks: 3 }, MONDAY).rows;
  const ids = got.map(r => r.id);

  eq(ids.join(','), 'g,ms1,ms2', 'only milestones, plus the group that holds one');
  eq(got.find(r => r.id === 'g')._context, true, 'the group is context, not a milestone');
  eq(ids.includes('task'), false, 'ordinary tasks are excluded');

  // Milestone mode ignores dates entirely — a milestone years away still shows.
  eq(ids.includes('ms2'), true, 'milestone mode is not date-filtered');
}

/* ---------------- mode 'all' is a pass-through ---------------- */
{
  const rows = [t('a', '2026-01-01', '2026-01-02'), t('b', '2026-09-01', '2026-09-02')];
  const r = Views.apply(rows, rows, { mode: 'all', weeks: 3 }, MONDAY);
  eq(r.rows, rows, 'mode "all" returns the identical array, not a copy');
  eq(r.window, null, 'no window in mode "all"');
  eq(Views.active({ mode: 'all' }), false, 'mode "all" is not active');
}

/* ---------------- settings normalisation ---------------- */
{
  eq(Views.of({}).mode, 'all', 'a project with no view settings defaults to all');
  eq(Views.of({ settings: { view: { mode: 'nonsense' } } }).mode, 'all', 'an unknown mode falls back to all');
  eq(Views.of({ settings: { view: { mode: 'lookahead', weeks: 0 } } }).weeks, 3, 'zero weeks falls back to 3');
  eq(Views.of({ settings: { view: { mode: 'lookahead', weeks: 999 } } }).weeks, 52, 'weeks is capped at 52');
  eq(Views.of({ settings: { view: { mode: 'lookahead', weeks: 6 } } }).weeks, 6, 'a sane week count is kept');
}

/* ---------------- malformed data does not hang ---------------- */
{
  // A parentId cycle would loop forever without the guard.
  const rows = [
    t('a', '2026-07-27', '2026-07-28', { parentId: 'b' }),
    t('b', '2026-07-27', '2026-07-28', { parentId: 'a', type: 'group' }),
  ];
  const got = Views.apply(rows, rows, { mode: 'lookahead', weeks: 3, anchor: MONDAY }, MONDAY);
  eq(got.rows.length >= 1, true, 'a parentId cycle terminates instead of hanging');

  // Missing dates must not throw.
  const noDates = [t('x', null, null)];
  eq(Views.apply(noDates, noDates, { mode: 'lookahead', weeks: 3, anchor: MONDAY }, MONDAY).rows.length, 0,
    'a task with no dates is excluded rather than crashing the render');
}

if (fail) {
  console.error(`\n✗ views: ${fail} of ${run} assertion(s) failed.\n`);
  process.exit(1);
}
console.log(`✓ views — ${run} assertions passed.`);
