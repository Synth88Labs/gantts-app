/* ============================================================
   ics.test.js — iCalendar export.

   Each group here corresponds to one of the four failure modes in the
   ics.js header. All four produce a file that imports successfully and
   is wrong, which is why they are pinned rather than eyeballed.
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
global.window = {};
new Function(fs.readFileSync(path.join(ROOT, 'js/util.js'), 'utf8'))();
global.U = window.U;
new Function(fs.readFileSync(path.join(ROOT, 'js/ics.js'), 'utf8'))();
const ICS = window.ICS;

let fail = 0, run = 0;
function eq(got, want, label) {
  run++;
  if (String(got) !== String(want)) {
    fail++;
    console.error(`  ✗ ${label}\n      got  ${JSON.stringify(String(got))}\n      want ${JSON.stringify(String(want))}`);
  }
}

const STAMP = '20260719T101500Z';
const proj = (tasks, name) => ({ name: name || 'Test plan', tasks, settings: {} });
const task = (o) => Object.assign(
  { type: 'task', progress: 0, deps: [], assignee: '', notes: '' }, o);

/* Unfold a folded file the way a parser does, so assertions can look
   at logical lines rather than physical ones. */
const unfold = (text) => text.replace(/\r\n /g, '');
const lines = (text) => unfold(text).split('\r\n');

/* ---------------- structure ---------------- */
{
  const { text, count } = ICS.build(proj([
    task({ id: 't1', name: 'Research', start: '2026-01-05', end: '2026-01-09' }),
  ]), { stamp: STAMP });

  const L = lines(text);
  eq(L[0], 'BEGIN:VCALENDAR', 'starts with BEGIN:VCALENDAR');
  eq(L.includes('VERSION:2.0'), true, 'declares VERSION:2.0');
  eq(L.includes('END:VCALENDAR'), true, 'ends the calendar');
  eq(/PRODID:/.test(text), true, 'has a PRODID');
  eq(L.includes('X-WR-CALNAME:Test plan'), true, 'names the calendar so it is not "Untitled"');
  eq(count, 1, 'reports how many events it wrote');
  eq(L.includes('DTSTAMP:' + STAMP), true, 'DTSTAMP is the injected value');
}

/* ---------------- rule 1: DTEND is exclusive ---------------- */
{
  const { text } = ICS.build(proj([
    task({ id: 't1', name: 'Week', start: '2026-01-05', end: '2026-01-09' }),
  ]), { stamp: STAMP });
  const L = lines(text);

  eq(L.includes('DTSTART;VALUE=DATE:20260105'), true, 'DTSTART is the first day');
  eq(L.includes('DTEND;VALUE=DATE:20260110'), true,
    'DTEND is the day AFTER the last day — an inclusive end would show the task a day short');
  eq(L.includes('DTEND;VALUE=DATE:20260109'), false, 'DTEND is never the inclusive end date');
}

/* ---------------- milestones ---------------- */
{
  const { text } = ICS.build(proj([
    task({ id: 'm1', name: 'Launch', type: 'milestone', start: '2026-02-02', end: '2026-02-02' }),
  ]), { stamp: STAMP });
  const L = lines(text);

  eq(L.includes('DTSTART;VALUE=DATE:20260202'), true, 'milestone starts on its day');
  eq(L.includes('DTEND;VALUE=DATE:20260203'), true,
    'a milestone still spans one day — a zero-length event is dropped by some clients');
  eq(L.includes('CATEGORIES:MILESTONE'), true, 'milestones are categorised');
  eq(/SUMMARY:◆ Launch/.test(unfold(text)), true, 'milestones are marked in the summary');
}

/* ---------------- rule 3: CRLF everywhere ---------------- */
{
  const { text } = ICS.build(proj([
    task({ id: 't1', name: 'A', start: '2026-01-05', end: '2026-01-06' }),
  ]), { stamp: STAMP });

  eq(/[^\r]\n/.test(text), false, 'there is no bare LF anywhere — Outlook rejects those');
  eq(text.endsWith('\r\n'), true, 'the file ends with CRLF');
}

/* ---------------- rule 4: stable UIDs ---------------- */
{
  const p = proj([task({ id: 't_abc123', name: 'A', start: '2026-01-05', end: '2026-01-06' })]);
  const a = ICS.build(p, { stamp: STAMP }).text;
  const b = ICS.build(p, { stamp: '20260720T101500Z' }).text;

  const uidOf = (t) => lines(t).find(l => l.startsWith('UID:'));
  eq(uidOf(a), 'UID:t_abc123@gantts.app', 'the UID derives from the task id');
  eq(uidOf(a), uidOf(b), 'the UID is stable across exports — otherwise re-import duplicates everything');
}

/* ---------------- text escaping ---------------- */
{
  const { text } = ICS.build(proj([
    task({
      id: 't1', name: 'Phase 1; design, review\\build',
      start: '2026-01-05', end: '2026-01-06',
      notes: 'Line one\nLine two',
    }),
  ]), { stamp: STAMP });
  const u = unfold(text);

  eq(/SUMMARY:Phase 1\\; design\\, review\\\\build/.test(u), true,
    'semicolon, comma and backslash are escaped in the right order');
  eq(/Line one\\nLine two/.test(u), true, 'newlines become a literal \\n');
  /* The unfolded DESCRIPTION must carry the escape sequence and no
     real line break — a raw newline inside a value terminates the
     property early and silently truncates the description. */
  const descLine = lines(text).find(l => l.startsWith('DESCRIPTION:'));
  eq(descLine.indexOf('\\n') > -1, true, 'the description keeps its escaped newlines');
  eq(descLine.indexOf('\r') < 0 && descLine.indexOf('\n') < 0, true,
    'no raw line break survives inside the value');
}

/* ---------------- rule 2: folding at 75 octets ---------------- */
{
  const longAscii = 'A'.repeat(200);
  const { text } = ICS.build(proj([
    task({ id: 't1', name: longAscii, start: '2026-01-05', end: '2026-01-06' }),
  ]), { stamp: STAMP });

  for (const line of text.split('\r\n')) {
    const bytes = new TextEncoder().encode(line).length;
    eq(bytes <= 75, true, `every physical line is <= 75 octets (found ${bytes})`);
  }
  eq(unfold(text).includes('SUMMARY:' + longAscii), true, 'unfolding restores the original value exactly');
}

/* ---------------- rule 2, the hard half: multi-byte characters ---------------- */
{
  // CJK is 3 bytes per character; a naive length check folds far too late.
  const cjk = '项目管理计划'.repeat(20);
  const { text } = ICS.build(proj([
    task({ id: 't1', name: cjk, start: '2026-01-05', end: '2026-01-06' }),
  ]), { stamp: STAMP });

  for (const line of text.split('\r\n')) {
    const bytes = new TextEncoder().encode(line).length;
    eq(bytes <= 75, true, `CJK folds by octets, not characters (found ${bytes})`);
  }
  eq(unfold(text).includes('SUMMARY:' + cjk), true,
    'no multi-byte character was split across a fold — the text survives intact');

  // Accented Latin: 2 bytes each, a different boundary case.
  const accents = 'Révision spécifications détaillées ' .repeat(4);
  const r2 = ICS.build(proj([
    task({ id: 't2', name: accents, start: '2026-01-05', end: '2026-01-06' }),
  ]), { stamp: STAMP }).text;
  for (const line of r2.split('\r\n')) {
    eq(new TextEncoder().encode(line).length <= 75, true, 'accented Latin folds correctly');
  }
  eq(unfold(r2).includes(accents.trim()) || unfold(r2).includes(accents), true,
    'accented text survives folding');
}

/* ---------------- filtering ---------------- */
{
  const tasks = [
    task({ id: 'g', name: 'Group', type: 'group', start: '2026-01-05', end: '2026-01-30' }),
    task({ id: 't', name: 'Task', start: '2026-01-05', end: '2026-01-09' }),
    task({ id: 'm', name: 'Milestone', type: 'milestone', start: '2026-01-30', end: '2026-01-30' }),
  ];

  eq(ICS.build(proj(tasks), { stamp: STAMP }).count, 2, 'groups are excluded by default');
  eq(ICS.build(proj(tasks), { stamp: STAMP, includeGroups: true }).count, 3, 'groups can be included');
  eq(ICS.build(proj(tasks), { stamp: STAMP, includeTasks: false }).count, 1, 'tasks can be excluded');
  eq(ICS.build(proj(tasks), { stamp: STAMP, includeMilestones: false }).count, 1, 'milestones can be excluded');

  // A task with no dates must be skipped, not emitted with "undefined".
  const bad = ICS.build(proj([task({ id: 'x', name: 'No dates', start: null, end: null })]), { stamp: STAMP });
  eq(bad.count, 0, 'a task with no dates is skipped');
  eq(/undefined|NaN/.test(bad.text), false, 'no undefined or NaN leaks into the file');
}

/* ---------------- BEGIN/END nesting balances ---------------- */
{
  const { text } = ICS.build(proj([
    task({ id: 'a', name: 'A', start: '2026-01-05', end: '2026-01-06' }),
    task({ id: 'b', name: 'B', start: '2026-01-07', end: '2026-01-08' }),
  ]), { stamp: STAMP });
  const L = lines(text);
  eq(L.filter(l => l === 'BEGIN:VEVENT').length, 2, 'two events opened');
  eq(L.filter(l => l === 'END:VEVENT').length, 2, 'two events closed');
}

if (fail) {
  console.error(`\n✗ ics: ${fail} of ${run} assertion(s) failed.\n`);
  process.exit(1);
}
console.log(`✓ ics — ${run} assertions passed.`);
