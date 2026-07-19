#!/usr/bin/env node
/* ============================================================
   msproject.test.js — MSPDI import/export assertions.

   The failure mode this guards against is not a crash. A wrong link
   type or a wrong lag unit produces a file that opens perfectly in MS
   Project and describes a different plan — dependencies reversed,
   lags a thousand times too small. Nothing in the UI would show it.

   So the link type codes are asserted against their literal MS Project
   values, and the whole model is round-tripped and compared field by
   field.

   Run: node test/msproject.test.js   (also runs in npm run check)
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
global.window = {};
const MSProject = require(path.join(ROOT, 'js/msproject.js'));

/* The browser has DOMParser; node does not. Rather than pull in a
   dependency, a small parser shim covers the subset the importer uses:
   getElementsByTagName, textContent, querySelector('parsererror') and
   documentElement.nodeName. If the importer ever needs more of the DOM
   than this, the shim will throw rather than quietly return nothing. */
function parseXml(src) {
  const stack = [];
  let rootEl = null;
  const mk = (name) => ({
    nodeName: name, children: [], textContent: '',
    getElementsByTagName(tag) {
      const out = [];
      (function walk(n) {
        n.children.forEach(c => { if (tag === '*' || c.nodeName === tag) out.push(c); walk(c); });
      })(this);
      return out;
    },
  });
  const re = /<([A-Za-z0-9_:.-]+)([^>]*?)(\/?)>|<\/([A-Za-z0-9_:.-]+)>|([^<]+)/g;
  let m;
  while ((m = re.exec(src))) {
    if (m[1]) {
      const el = mk(m[1]);
      if (stack.length) stack[stack.length - 1].children.push(el); else rootEl = el;
      if (!m[3]) stack.push(el);
    } else if (m[4]) {
      stack.pop();
    } else if (m[5] && stack.length) {
      const t = m[5].replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'").replace(/&amp;/g, '&');
      stack[stack.length - 1].textContent += t;
    }
  }
  return {
    documentElement: rootEl,
    querySelector: () => null,
    getElementsByTagName: (t) => (rootEl ? (rootEl.nodeName === t ? [rootEl] : []).concat(rootEl.getElementsByTagName(t)) : []),
  };
}
global.DOMParser = function () { this.parseFromString = (s) => parseXml(s); };

let fail = 0, run = 0;
function eq(got, want, label) {
  run++;
  if (String(got) !== String(want)) {
    fail++;
    console.error(`  ✗ ${label}\n      got  ${got}\n      want ${want}`);
  }
}
function ok(cond, label) { eq(cond ? 'true' : 'false', 'true', label); }

/* ---- link type codes ------------------------------------------------
   These are MS Project's literal values. They are NOT in the order the
   four types are normally listed, which is exactly why they are pinned
   here: a "tidy-up" that alphabetises them would reverse dependencies
   in every exported file. */
eq(MSProject.LINK_TYPE.FF, 0, 'FF is 0');
eq(MSProject.LINK_TYPE.FS, 1, 'FS is 1');
eq(MSProject.LINK_TYPE.SF, 2, 'SF is 2');
eq(MSProject.LINK_TYPE.SS, 3, 'SS is 3');
['FF', 'FS', 'SF', 'SS'].forEach(t => eq(MSProject.LINK_TYPE_REV[MSProject.LINK_TYPE[t]], t, `${t} round-trips through the code table`));

/* ---- durations ------------------------------------------------------ */
eq(MSProject.duration(1), 'PT8H0M0S', '1 day is 8 working hours');
eq(MSProject.duration(3), 'PT24H0M0S', '3 days is 24 working hours, not 72');
eq(MSProject.duration(0), 'PT0H0M0S', 'milestone is zero');
eq(MSProject.parseDuration('PT24H0M0S'), 3, 'parse 24h back to 3 days');
eq(MSProject.parseDuration('PT8H0M0S'), 1, 'parse 8h back to 1 day');
eq(MSProject.parseDuration('not a duration'), null, 'garbage duration returns null');

/* ---- lag units ------------------------------------------------------
   Tenths of a minute. One working day = 8h = 480 min = 4800 tenths. */
eq(MSProject.lagToTenths(1), 4800, '1 day lag is 4800 tenths of a minute');
eq(MSProject.lagToTenths(0), 0, 'no lag is 0');
eq(MSProject.lagToTenths(2.5), 12000, '2.5 day lag');
eq(MSProject.tenthsToLag(4800), 1, '4800 tenths back to 1 day');
eq(MSProject.tenthsToLag(0), 0, '0 back to 0');

/* ---- a project that exercises every mapped feature ------------------ */
const project = {
  name: 'Interop <test> & sample',
  settings: { calendar: { enabled: true, workdays: [1, 2, 3, 4, 5], holidays: {} } },
  tasks: [
    { id: 'g1', name: 'Phase one', start: '2026-08-03', end: '2026-08-14', type: 'group', parentId: null, progress: 0, assignee: '', notes: '', deps: [] },
    { id: 't1', name: 'Design', start: '2026-08-03', end: '2026-08-05', type: 'task', parentId: 'g1', progress: 100, assignee: 'Ana', notes: 'first note', deps: [] },
    { id: 't2', name: 'Build', start: '2026-08-06', end: '2026-08-12', type: 'task', parentId: 'g1', progress: 40, assignee: 'Bo', notes: '', deps: [{ from: 't1', type: 'FS', lag: 0 }] },
    { id: 't3', name: 'Review', start: '2026-08-06', end: '2026-08-07', type: 'task', parentId: 'g1', progress: 0, assignee: 'Ana', notes: '', deps: [{ from: 't2', type: 'SS', lag: 1 }] },
    { id: 'm1', name: 'Signed off', start: '2026-08-14', end: '2026-08-14', type: 'milestone', parentId: null, progress: 0, assignee: '', notes: '', deps: [{ from: 't2', type: 'FF', lag: 2 }] },
  ],
};

const xml = MSProject.export(project);

// structure
ok(/^<\?xml version="1\.0"/.test(xml), 'starts with an XML declaration');
ok(xml.includes('xmlns="http://schemas.microsoft.com/project"'), 'declares the MSPDI namespace');
eq((xml.match(/<Task>/g) || []).length, 5, 'exports one Task per task');
eq((xml.match(/<Resource>/g) || []).length, 2, 'one Resource per distinct assignee');
eq((xml.match(/<Assignment>/g) || []).length, 3, 'one Assignment per assigned non-group task');

// escaping — the project name contains < > &
ok(xml.includes('Interop &lt;test&gt; &amp; sample'), 'project name is XML-escaped');
ok(!/<Name>Interop <test>/.test(xml), 'raw angle brackets do not leak into the document');

// no timezone suffix on dates
ok(!/\d{2}:\d{2}:\d{2}Z/.test(xml), 'no Z suffix — MSPDI dates are local');
ok(xml.includes('<Start>2026-08-03T08:00:00</Start>'), 'start is local 08:00');

// flags
ok(/<UID>1<\/UID>[\s\S]*?<Summary>1<\/Summary>/.test(xml), 'group exports as Summary');
ok(/<Name>Signed off<\/Name>[\s\S]*?<Milestone>1<\/Milestone>/.test(xml), 'milestone exports as Milestone');

// outline levels: group at 1, its children at 2, top-level milestone at 1
eq(MSProject.outlineLevel(project.tasks[0], { g1: project.tasks[0] }), 1, 'group is level 1');
const byId = {}; project.tasks.forEach(t => byId[t.id] = t);
eq(MSProject.outlineLevel(project.tasks[1], byId), 2, 'child of group is level 2');
eq(MSProject.outlineLevel(project.tasks[4], byId), 1, 'top-level milestone is level 1');

/* ---- round trip ----------------------------------------------------- */
const back = MSProject.import(xml);

eq(back.name, 'Interop <test> & sample', 'project name survives the round trip unescaped');
eq(back.tasks.length, 5, 'all five tasks come back');
eq(back.warnings.length, 0, 'a clean file produces no warnings');

const R = {}; back.tasks.forEach(t => R[t.name] = t);
eq(R['Design'].start, '2026-08-03', 'start date survives');
eq(R['Design'].end, '2026-08-05', 'finish date survives');
eq(R['Design'].progress, 100, 'percent complete survives');
eq(R['Design'].assignee, 'Ana', 'assignment maps back to an assignee');
eq(R['Design'].notes, 'first note', 'notes survive');
eq(R['Phase one'].type, 'group', 'Summary comes back as a group');
eq(R['Signed off'].type, 'milestone', 'Milestone comes back as a milestone');
eq(R['Design'].parentId, R['Phase one'].id, 'OutlineLevel rebuilt the parent link');
eq(R['Signed off'].parentId, null, 'top-level task has no parent');

// the part most likely to be silently wrong
eq(R['Build'].deps.length, 1, 'Build keeps its predecessor');
eq(R['Build'].deps[0].type, 'FS', 'FS survives the numeric code');
eq(R['Build'].deps[0].from, R['Design'].id, 'predecessor points at the right task');
eq(R['Review'].deps[0].type, 'SS', 'SS survives — code 3, not 1');
eq(R['Review'].deps[0].lag, 1, 'a one-day lag comes back as one day, not 4800');
eq(R['Signed off'].deps[0].type, 'FF', 'FF survives — code 0');
eq(R['Signed off'].deps[0].lag, 2, 'two-day lag round-trips');

/* ---- hostile and malformed input ------------------------------------ */
let threw = '';
try { MSProject.import('<html><body>not a project</body></html>'); } catch (e) { threw = e.message; }
ok(/not an MS Project/i.test(threw), 'non-MSPDI XML is rejected with a clear message');

threw = '';
try { MSProject.import('<Project xmlns="http://schemas.microsoft.com/project"><Tasks></Tasks></Project>'); } catch (e) { threw = e.message; }
ok(/No tasks/i.test(threw), 'a project with no tasks is rejected');

/* The project-summary row. MS Project puts one at UID 0 / OutlineLevel
   0 for the whole plan. Both shapes are tested because the NAMED one is
   what real files contain, and matching only the blank-name variant let
   it through — importing a phantom top-level task and reparenting the
   entire plan beneath it. */
const blankSummary = xml.replace('<Tasks>', `<Tasks>
      <Task><UID>0</UID><ID>0</ID><Name></Name><OutlineLevel>0</OutlineLevel><Summary>1</Summary><Start>2026-08-03T08:00:00</Start><Finish>2026-08-14T17:00:00</Finish></Task>`);
eq(MSProject.import(blankSummary).tasks.length, 5, 'an unnamed project-summary row is skipped');

const namedSummary = xml.replace('<Tasks>', `<Tasks>
      <Task><UID>0</UID><ID>0</ID><Name>Interop test</Name><OutlineLevel>0</OutlineLevel><Summary>1</Summary><Start>2026-08-03T08:00:00</Start><Finish>2026-08-14T17:00:00</Finish></Task>`);
const namedOut = MSProject.import(namedSummary);
eq(namedOut.tasks.length, 5, 'a NAMED project-summary row is skipped too');
ok(namedOut.tasks.every(t => t.name !== 'Interop test'), 'the summary row does not appear as a task');
eq(namedOut.tasks.filter(t => t.parentId === null).length,
   back.tasks.filter(t => t.parentId === null).length,
   'the summary row does not reparent the plan beneath itself');

/* A link to a task that was skipped must be dropped, with a warning —
   not left dangling to produce a broken schedule. */
const danglingLink = xml.replace('<PredecessorUID>2</PredecessorUID>', '<PredecessorUID>999</PredecessorUID>');
const dangled = MSProject.import(danglingLink);
ok(dangled.warnings.some(w => /dependency/i.test(w)), 'a dangling dependency warns');
ok(dangled.tasks.every(t => t.deps.every(d => dangled.tasks.some(x => x.id === d.from))),
  'no dependency survives pointing at a task that is not present');

/* An unknown link type should degrade to FS with a warning rather than
   silently producing an undefined type. */
const weirdType = xml.replace('<Type>3</Type>', '<Type>9</Type>');
const weird = MSProject.import(weirdType);
ok(weird.warnings.some(w => /Unknown link type/i.test(w)), 'unknown link type warns');
ok(weird.tasks.every(t => t.deps.every(d => ['FS', 'SS', 'FF', 'SF'].indexOf(d.type) >= 0)),
  'unknown link type degrades to a valid type');

/* A task with no start date cannot be scheduled; it is skipped loudly
   rather than defaulting to today and quietly inventing a plan. */
const noStart = xml.replace('<Start>2026-08-06T08:00:00</Start>', '<Start></Start>');
const skipped = MSProject.import(noStart);
ok(skipped.warnings.some(w => /no start date/i.test(w)), 'a task without a start date warns');

console.log(fail
  ? `\n✗ msproject — ${fail} of ${run} assertions failed.`
  : `✓ msproject — ${run} assertions passed.`);
process.exit(fail ? 1 : 0);
