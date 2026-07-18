#!/usr/bin/env node
/* ============================================================
   calendar.test.js — assertions for working-day arithmetic.

   This maths sits under every date the app produces, and an
   off-by-one here is invisible in the UI but wrong in every export.
   The Easter and nth-weekday cases are checked against known real
   dates so a "clever" refactor cannot quietly break them.

   Run: node test/calendar.test.js   (also runs in npm run check)
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
global.window = {};
new Function(fs.readFileSync(path.join(ROOT, 'js/util.js'), 'utf8'))();
global.U = window.U;
new Function(fs.readFileSync(path.join(ROOT, 'js/calendar.js'), 'utf8'))();
const Cal = window.Cal;

let fail = 0, run = 0;
function eq(got, want, label) {
  run++;
  if (String(got) !== String(want)) {
    fail++;
    console.error(`  ✗ ${label}\n      got  ${got}\n      want ${want}`);
  }
}

const cal = { enabled: true, workdays: [1, 2, 3, 4, 5], holidays: {} };

// Easter — checked against known Western dates
eq(Cal.easter(2024), '2024-03-31', 'Easter 2024');
eq(Cal.easter(2025), '2025-04-20', 'Easter 2025');
eq(Cal.easter(2026), '2026-04-05', 'Easter 2026');
eq(Cal.easter(2027), '2027-03-28', 'Easter 2027');
eq(Cal.easter(2030), '2030-04-21', 'Easter 2030');

// nth weekday of month
eq(Cal.nthDow(2026, 11, 4, 4), '2026-11-26', 'US Thanksgiving 2026 = 4th Thu Nov');
eq(Cal.nthDow(2026, 5, 1, -1), '2026-05-25', 'Memorial Day 2026 = last Mon May');
eq(Cal.nthDow(2026, 9, 1, 1), '2026-09-07', 'Labor Day 2026 = 1st Mon Sep');
eq(Cal.nthDow(2026, 1, 1, 3), '2026-01-19', 'MLK Day 2026 = 3rd Mon Jan');

// The bug this module exists to fix: 10 days from a Thursday
eq(U.endFrom('2026-07-16', 10), '2026-07-25', 'calendar-day maths lands on a Saturday');
eq(Cal.endFrom('2026-07-16', 10, cal), '2026-07-29', '10 working days from Thu ends Wed');
eq(U.dow(Cal.endFrom('2026-07-16', 10, cal)), 3, 'and that end date is a Wednesday');

// duration must invert endFrom
eq(Cal.duration('2026-07-16', '2026-07-29', cal), 10, 'duration inverts endFrom');
eq(Cal.duration('2026-07-18', '2026-07-19', cal), 0, 'a pure weekend is zero working days');
eq(Cal.duration('2026-07-20', '2026-07-20', cal), 1, 'single working day is 1');

// rolling and shifting
eq(Cal.nextWorking('2026-07-18', cal, 1), '2026-07-20', 'Sat rolls forward to Mon');
eq(Cal.nextWorking('2026-07-18', cal, -1), '2026-07-17', 'Sat rolls back to Fri');
eq(Cal.shift('2026-07-17', 1, cal), '2026-07-20', '+1 working day from Fri is Mon');
eq(Cal.shift('2026-07-20', -1, cal), '2026-07-17', '-1 working day from Mon is Fri');
eq(Cal.shift('2026-07-20', 0, cal), '2026-07-20', 'zero lag is a no-op');

// holidays
const h = { enabled: true, workdays: [1, 2, 3, 4, 5], holidays: { '2026-07-20': 'Test' } };
eq(Cal.isWorking('2026-07-20', h), false, 'a holiday is not a working day');
eq(Cal.endFrom('2026-07-17', 2, h), '2026-07-21', 'holidays are skipped');

// moving a bar preserves its working length
const moved = Cal.moveKeepingDuration({ start: '2026-07-16', end: '2026-07-29' }, '2026-08-03', cal);
eq(Cal.duration(moved.start, moved.end, cal), 10, 'moving a task preserves working duration');

// degradation and guards — none of these may hang
const none = { enabled: true, workdays: [], holidays: {} };
eq(Cal.isWorking('2026-07-18', none), true, 'no workdays selected degrades to all-working');
eq(Cal.endFrom('2026-07-16', 5, none), '2026-07-20', 'and endFrom falls back to calendar days');
const off = { enabled: false, workdays: [1, 2, 3, 4, 5], holidays: {} };
eq(Cal.endFrom('2026-07-16', 10, off), '2026-07-25', 'disabled calendar preserves old behaviour');
eq(Cal.duration('2026-07-16', '2026-07-25', off), 10, 'disabled duration preserves old behaviour');
const allWork = { enabled: true, workdays: [0, 1, 2, 3, 4, 5, 6], holidays: {} };
eq(Cal.active(allWork), false, 'a 7-day week is not an active constraint');

// presets produce plausible, non-empty sets
eq(Object.keys(Cal.preset('US', 2026)).length >= 10, true, 'US preset has holidays');
eq(Cal.preset('GB', 2026)['2026-04-03'], 'Good Friday', 'GB Good Friday 2026 is computed');
eq(Object.keys(Cal.presetRange('FR', 2026, 2028)).length >= 30, true, 'multi-year presets accumulate');

if (fail) {
  console.error(`\n✗ calendar: ${fail} of ${run} assertion(s) failed.\n`);
  process.exit(1);
}
console.log(`✓ calendar — ${run} assertions passed.`);
