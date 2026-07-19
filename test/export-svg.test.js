/* ============================================================
   export-svg.test.js

   This is the only exporter with tests, because it is the only one
   that does not need a DOM. The rest of the export path runs through
   html2canvas and a live document, which is exactly why none of it is
   covered — worth remembering before adding another exporter that
   reaches for the DOM when it does not have to.

   The assertions concentrate on two things that fail silently:
   geometry against the date axis (a bar one day short still looks like
   a chart), and XML validity (a task named "R&D" produces a file that
   every parser rejects, and the user finds out somewhere else).
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
global.window = {};
new Function(fs.readFileSync(path.join(ROOT, 'js/util.js'), 'utf8'))();
global.U = window.U;
new Function(fs.readFileSync(path.join(ROOT, 'js/calendar.js'), 'utf8'))();
global.Cal = window.Cal;
new Function(fs.readFileSync(path.join(ROOT, 'js/export-svg.js'), 'utf8'))();
const SVG = window.ExportSvg;

let fail = 0, run = 0;
function eq(got, want, label) {
  run++;
  if (String(got) !== String(want)) {
    fail++;
    console.error(`  ✗ ${label}\n      got  ${got}\n      want ${want}`);
  }
}

const task = (o) => Object.assign(
  { type: 'task', progress: 0, deps: [], parentId: null, assignee: '', color: '#2563eb' }, o);
const proj = (tasks, name) => ({ name: name || 'Test', tasks, settings: {} });
const OPTS = { today: '2026-08-05', dayW: 12 };

/* ---------------- a well-formed document ---------------- */
{
  const r = SVG.build(proj([
    task({ id: 'a', name: 'Research', start: '2026-08-03', end: '2026-08-07' }),
  ]), OPTS);

  eq(/^<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg"/.test(r.svg), true, 'starts with a namespaced <svg>');
  eq(r.svg.trim().endsWith('</svg>'), true, 'closes the root element');
  eq(/width="\d+" height="\d+"/.test(r.svg), true, 'has explicit pixel dimensions');
  eq(/viewBox="0 0 \d+ \d+"/.test(r.svg), true, 'has a viewBox so it scales');
  eq(r.width > 0 && r.height > 0, true, 'reports its size');
  eq(r.svg.includes('<foreignObject'), false,
    'contains NO foreignObject — that renders in a browser and nowhere else');

  // Every tag opened is closed. Crude, but catches the common breakage.
  const opens = (r.svg.match(/<(svg|g|text|title)\b/g) || []).length;
  const closes = (r.svg.match(/<\/(svg|g|text|title)>/g) || []).length;
  eq(opens, closes, 'paired tags balance');
}

/* ---------------- geometry: the inclusive-end trap ----------------

   Our `end` is INCLUSIVE. A one-day task must therefore be one day
   wide, not zero, and a five-day task five days wide. Getting this
   wrong makes every bar exactly one day short — which still looks
   like a perfectly good chart. */
{
  const oneDay = SVG.build(proj([
    task({ id: 'a', name: 'A', start: '2026-08-03', end: '2026-08-03' }),
  ]), OPTS);
  const w1 = Number(/<rect x="[\d.]+" y="[\d.]+" width="([\d.]+)" height="16"/.exec(oneDay.svg)[1]);
  eq(Math.round(w1), 12, 'a one-day task is exactly one day wide (dayW=12)');

  const fiveDay = SVG.build(proj([
    task({ id: 'a', name: 'A', start: '2026-08-03', end: '2026-08-07' }),
  ]), OPTS);
  const w5 = Number(/<rect x="[\d.]+" y="[\d.]+" width="([\d.]+)" height="16"/.exec(fiveDay.svg)[1]);
  eq(Math.round(w5), 60, 'a five-day task is five days wide, not four');

  // A later task must start further right, by exactly the day delta.
  const two = SVG.build(proj([
    task({ id: 'a', name: 'A', start: '2026-08-03', end: '2026-08-03' }),
    task({ id: 'b', name: 'B', start: '2026-08-10', end: '2026-08-10' }),
  ]), OPTS);
  const xs = [...two.svg.matchAll(/<rect x="([\d.]+)" y="[\d.]+" width="[\d.]+" height="16"/g)]
    .map(m => Number(m[1]));
  eq(xs.length, 2, 'both bars drawn');
  eq(Math.round(xs[1] - xs[0]), 7 * 12, 'seven days apart maps to seven day-widths');
}

/* ---------------- XML escaping ---------------- */
{
  const r = SVG.build(proj([
    task({ id: 'a', name: 'R&D <phase 1> "core" & \'more\'', start: '2026-08-03', end: '2026-08-05' }),
  ], 'A & B <Ltd>'), OPTS);

  eq(/&amp;/.test(r.svg), true, 'ampersands are escaped');
  eq(/&lt;phase/.test(r.svg), true, 'angle brackets are escaped');
  // No raw & that is not the start of an entity — this is what breaks parsers.
  eq(/&(?!amp;|lt;|gt;|quot;|apos;|#)/.test(r.svg), false,
    'no bare ampersand survives anywhere in the document');
  eq(/<text[^>]*>[^<]*<phase/.test(r.svg), false, 'no raw < inside text content');
}

/* ---------------- milestones, groups, progress ---------------- */
{
  const r = SVG.build(proj([
    task({ id: 'g', name: 'Phase', type: 'group', start: '2026-08-03', end: '2026-08-14' }),
    task({ id: 't', name: 'Work', parentId: 'g', start: '2026-08-03', end: '2026-08-07', progress: 50 }),
    task({ id: 'm', name: 'Done', type: 'milestone', start: '2026-08-14', end: '2026-08-14' }),
  ]), OPTS);

  eq(/<polygon points="[\d.]+,[\d.]+ [\d.]+,[\d.]+ [\d.]+,[\d.]+ [\d.]+,[\d.]+" fill=/.test(r.svg), true,
    'a milestone is a four-point diamond');
  eq(r.svg.includes('font-weight="700"'), true, 'a group name is bold');
  eq(/opacity="0.22"/.test(r.svg), true, 'progress is drawn as an overlay');

  /* A milestone shows no finish date — it is a point in time, not a
     span. Tested in isolation, because in the project above the GROUP
     legitimately ends on the same date and would mask this. */
  const msOnly = SVG.build(proj([
    task({ id: 'm', name: 'Done', type: 'milestone', start: '2026-08-14', end: '2026-08-14' }),
  ]), OPTS);
  const cells = [...msOnly.svg.matchAll(/font-size="10.5"[^>]*>([^<]*)<\/text>/g)].map(m => m[1]);
  eq(cells.filter(x => x === '2026-08-14').length, 1, 'the milestone date appears once (start), not twice');
  eq(cells.filter(x => x === '').length, 1, 'and its finish cell is empty');
}

/* ---------------- critical path is not colour alone ---------------- */
{
  const crit = new Set(['a']);
  const r = SVG.build(proj([
    task({ id: 'a', name: 'A', start: '2026-08-03', end: '2026-08-12' }),
    task({ id: 'b', name: 'B', start: '2026-08-03', end: '2026-08-12' }),
  ]), Object.assign({}, OPTS, { critical: crit }));

  eq(/stroke="#ea580c"/.test(r.svg), true, 'the critical bar gets a stroke');
  eq(/stroke="#ffffff" stroke-width="1.2" opacity="0.55"/.test(r.svg), true,
    'and a hatch, so it survives greyscale and print — WCAG 1.4.1');

  const plain = SVG.build(proj([task({ id: 'b', name: 'B', start: '2026-08-03', end: '2026-08-12' })]), OPTS);
  eq(/stroke="#ffffff" stroke-width="1.2"/.test(plain.svg), false, 'a non-critical bar has no hatch');
}

/* ---------------- dependencies ---------------- */
{
  const r = SVG.build(proj([
    task({ id: 'a', name: 'A', start: '2026-08-03', end: '2026-08-07' }),
    task({ id: 'b', name: 'B', start: '2026-08-10', end: '2026-08-14', deps: [{ from: 'a', type: 'FS', lag: 0 }] }),
  ]), OPTS);

  eq(/<path d="M [\d.]+ [\d.]+ L [\d.]+ [\d.]+ L [\d.]+ [\d.]+ L [\d.]+ [\d.]+" fill="none"/.test(r.svg), true,
    'a dependency is an orthogonal connector');
  eq((r.svg.match(/<polygon points="[\d.]+,[\d.]+ [\d.]+,[\d.]+ [\d.]+,[\d.]+" fill="#94a3b8"/g) || []).length, 1,
    'with exactly one arrowhead');

  // A dependency naming a task that is not in the export must not draw.
  const dangling = SVG.build(proj([
    task({ id: 'b', name: 'B', start: '2026-08-10', end: '2026-08-14', deps: [{ from: 'nope', type: 'FS', lag: 0 }] }),
  ]), OPTS);
  eq(/fill="none" stroke="#94a3b8"/.test(dangling.svg), false, 'a dangling dependency draws nothing');
  eq(/NaN|undefined/.test(dangling.svg), false, 'and leaks no NaN into the geometry');
}

/* ---------------- weekends and today ---------------- */
{
  const r = SVG.build(proj([
    task({ id: 'a', name: 'A', start: '2026-08-03', end: '2026-08-14' }),
  ]), Object.assign({}, OPTS, { today: '2026-08-05' }));

  eq(/fill="#f1f5f9"/.test(r.svg), true, 'non-working days are shaded');
  eq(/stroke="#ef4444"[^>]*stroke-dasharray/.test(r.svg), true, 'today is a dashed rule');
  eq(r.svg.includes('>today<'), true, 'and is labelled');

  // Today outside the range must not be drawn at a nonsense x.
  const far = SVG.build(proj([
    task({ id: 'a', name: 'A', start: '2026-08-03', end: '2026-08-14' }),
  ]), Object.assign({}, OPTS, { today: '2030-01-01' }));
  eq(far.svg.includes('>today<'), false, 'a today outside the range is omitted rather than clamped');
}

/* ---------------- long names are clipped, not overflowed ---------------- */
{
  const long = 'A extremely long task name that would otherwise run straight across the chart area and over the bars';
  const r = SVG.build(proj([task({ id: 'a', name: long, start: '2026-08-03', end: '2026-08-07' })]), OPTS);
  eq(r.svg.includes(long), false, 'the full over-long name is not emitted');
  eq(r.svg.includes('…'), true, 'it is truncated with an ellipsis');
}

/* ---------------- degenerate input ---------------- */
{
  const empty = SVG.build(proj([]), OPTS);
  eq(empty.empty, true, 'an empty project reports empty');
  eq(/^<svg/.test(empty.svg), true, 'and still returns a valid document rather than throwing');

  // Tasks without dates are skipped, not drawn at NaN.
  const undated = SVG.build(proj([
    task({ id: 'a', name: 'No dates', start: null, end: null }),
    task({ id: 'b', name: 'Real', start: '2026-08-03', end: '2026-08-05' }),
  ]), OPTS);
  eq(/NaN/.test(undated.svg), false, 'no NaN reaches the output');
  eq(undated.svg.includes('Real'), true, 'the dated task still renders');
  eq(undated.svg.includes('No dates'), false, 'the undated one is omitted');
}

/* ---------------- determinism ---------------- */
{
  // Same input, same bytes — otherwise the output cannot be diffed or cached.
  const p = proj([task({ id: 'a', name: 'A', start: '2026-08-03', end: '2026-08-07' })]);
  eq(SVG.build(p, OPTS).svg === SVG.build(p, OPTS).svg, true, 'the same project produces identical bytes');
}

if (fail) {
  console.error(`\n✗ export-svg: ${fail} of ${run} assertion(s) failed.\n`);
  process.exit(1);
}
console.log(`✓ export-svg — ${run} assertions passed.`);
