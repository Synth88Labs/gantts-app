#!/usr/bin/env node
/* ============================================================
   check-i18n-keys.js — every data-i18n key must exist.

   WHY THIS EXISTS

   I18N.apply() OVERWRITES an element's text with I18N.t(key), and t()
   returns the key itself when it is missing from both the locale and
   the English fallback. So a data-i18n attribute pointing at a key
   nobody defined does not fall back to the hand-written English in the
   markup — it replaces it with the raw key.

   Three buttons shipped like that and stayed live: the toolbar read
   "📆 app.calendar" and "👥 app.workload", and the export menu offered
   "exp.mspdi". In EVERY language including English, because the English
   dictionary was missing them too. The fallback text sitting right
   there in app.html made it invisible in code review — you read
   `<span data-i18n="app.calendar">Calendar</span>` and see "Calendar".

   Nothing in the build knew the rule, and it is not the kind of thing
   you notice on a page you have looked at a hundred times.

   WHAT IT CHECKS

     1. Every data-i18n* key in app.html exists in the `en` dictionary.
        Fatal — this is the bug above.
     2. Every locale defines every key `en` defines. Reported, not
        fatal: a missing translation degrades to English, which is
        acceptable; a missing KEY does not.
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const LOCALES = ['es', 'fr', 'de', 'pt', 'zh'];

const html = fs.readFileSync(path.join(ROOT, 'app.html'), 'utf8');
const src = fs.readFileSync(path.join(ROOT, 'js/i18n.js'), 'utf8');

const used = [...new Set(
  [...html.matchAll(/data-i18n(?:-html|-ph|-title)?="([^"]+)"/g)].map(m => m[1])
)].sort();

/* Slice each locale block out of the source rather than executing it —
   i18n.js touches document and localStorage at load. */
function blockFor(code) {
  const start = src.indexOf(`\n    ${code}: {`);
  if (start < 0) return null;
  const rest = src.slice(start + 1);
  // the block ends at the next locale, or at the closing of D
  const next = rest.search(/\n    (?:en|es|fr|de|pt|zh): \{|\n  \};/);
  return rest.slice(0, next < 0 ? rest.length : next);
}

const blocks = {};
for (const code of ['en', ...LOCALES]) {
  const b = blockFor(code);
  if (!b) {
    console.error(`✗ no ${code} block found in js/i18n.js`);
    process.exit(1);
  }
  blocks[code] = b;
}

const has = (code, key) => blocks[code].includes(`'${key}':`) || blocks[code].includes(`"${key}":`);

console.log('i18n key check\n');

// ---- 1. fatal: a key used in markup that nobody defines ----
const undefinedKeys = used.filter(k => !has('en', k));
if (undefinedKeys.length) {
  console.error('✗ These keys are referenced by data-i18n in app.html but are not defined in the');
  console.error('  `en` dictionary. They will render as the RAW KEY — in every language,');
  console.error('  including English. The fallback text in the markup does not save you:');
  console.error('  I18N.apply() overwrites it.\n');
  undefinedKeys.forEach(k => console.error('    ' + k));
  console.error('\n  Add them to the en block in js/i18n.js (and translate them).');
  process.exit(1);
}

// ---- 2. reported: keys English has that a locale does not ----
const enKeys = [...new Set([...blocks.en.matchAll(/['"]([a-z]+\.[a-zA-Z]+)['"]\s*:/g)].map(m => m[1]))];
let gaps = 0;
console.log(`  ${used.length} data-i18n key(s) in app.html — all defined.`);
console.log(`  ${enKeys.length} key(s) in the en dictionary.\n`);
for (const code of LOCALES) {
  const missing = enKeys.filter(k => !has(code, k));
  gaps += missing.length;
  const done = enKeys.length - missing.length;
  console.log(`    ${code}: ${done}/${enKeys.length}`
    + (missing.length ? `  — ${missing.length} fall back to English: ${missing.slice(0, 5).join(', ')}${missing.length > 5 ? '…' : ''}` : ''));
}

console.log(`\n✓ i18n keys — nothing renders as a raw key`
  + (gaps ? `; ${gaps} translation(s) still to fill.` : '; all locales complete.'));
