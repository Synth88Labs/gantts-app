#!/usr/bin/env node
/* ============================================================
   check-template-i18n.js — starter-template strings stay translatable.

   WHY THIS EXISTS

   js/template-i18n.js is keyed by the ENGLISH STRING. That choice keeps
   the template definitions in templates.js readable — they are terse
   literal arrays and threading a key through each one would defeat the
   point of the shorthand — but it buys that readability with a real
   fragility: rename a task in templates.js and every translation of it
   silently stops matching. Nothing breaks, no error appears, the app
   just quietly serves English to five languages.

   That is exactly the class of failure this project keeps finding after
   it ships, so it gets a check instead of a convention.

   Fails when a user-visible string in templates.js has no entry in
   template-i18n.js. Reports (does not fail on) entries that are still
   blank, so partial translation is visible without blocking a build.
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const src = fs.readFileSync(path.join(ROOT, 'js/templates.js'), 'utf8');
const i18nSrc = fs.readFileSync(path.join(ROOT, 'js/template-i18n.js'), 'utf8');

/* Load the map without a DOM. template-i18n.js assigns to `window`, so
   give it one. */
const sandbox = { window: {} };
new Function('window', i18nSrc)(sandbox.window);
const TI = sandbox.window.TemplateI18N;

const LOCALES = ['es', 'fr', 'de', 'pt', 'zh'];

/* The same shapes the extractor used. Kept deliberately narrow — a
   pattern that matched too much would report noise and get ignored,
   which is worse than not checking. */
const found = new Set();
for (const m of src.matchAll(/\['([^']+)',\s*-?\d+/g)) found.add(m[1]);      // task names
for (const m of src.matchAll(/who:\s*'([^']+)'/g)) found.add(m[1]);          // role names
for (const m of src.matchAll(/name:\s*'([^']+)',\s*\n?\s*desc/g)) found.add(m[1]);
for (const m of src.matchAll(/desc:\s*'([^']+)'/g)) found.add(m[1]);

console.log('Template i18n check\n');

const known = new Set(TI.keys);
const missing = [...found].filter(s => !known.has(s));

if (missing.length) {
  console.error('✗ These strings appear in templates.js but have no entry in js/template-i18n.js:\n');
  missing.forEach(s => console.error('    ' + JSON.stringify(s)));
  console.error('\n  They will render in English in every language.');
  console.error('  Add them to the map (all five locales) and translate them.');
  process.exit(1);
}

/* Orphans are the other half of the rename problem: an entry nobody
   uses any more. Not fatal — it hurts nothing — but it is dead weight
   and a signal that a rename happened without the map following. */
const orphans = TI.keys.filter(k => !found.has(k));

let blanks = 0;
const perLocale = {};
for (const code of LOCALES) {
  const m = TI.T[code] || {};
  const empty = TI.keys.filter(k => !m[k]);
  perLocale[code] = empty.length;
  blanks += empty.length;
}

console.log(`  ${found.size} user-visible string(s) in templates.js, all present in the map.`);
for (const code of LOCALES) {
  const done = TI.keys.length - perLocale[code];
  const pct = Math.round((done / TI.keys.length) * 100);
  console.log(`    ${code}: ${done}/${TI.keys.length} translated (${pct}%)`
    + (perLocale[code] ? '  — the rest fall back to English' : ''));
}
if (orphans.length) {
  console.log(`\n  ${orphans.length} unused entr(ies) — probably a renamed task:`);
  orphans.slice(0, 8).forEach(s => console.log('    ' + JSON.stringify(s)));
}

console.log(`\n✓ template i18n — every template string is translatable`
  + (blanks ? `; ${blanks} slot(s) still to fill.` : '.'));
