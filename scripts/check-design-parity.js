#!/usr/bin/env node
/* ============================================================
   check-design-parity.js — localized pages must use the same
   styled structure as their English counterparts.

   WHY THIS EXISTS

   The localized template cards emitted a bare <img>, <h3> and <p> with
   no wrappers. Every rule in site.css hangs off .tpl-thumb, .tpl-body
   and .tpl-tags, so those cards lost their image sizing, their 16/18px
   padding and their text colours — the headings and descriptions
   inherited the anchor's purple. It looked broken in every language
   except English, and counting cards (which I did) did not catch it,
   because the cards were all present. Only the markup differed.

   So this compares the CSS CLASS VOCABULARY of each localized page
   against the English original. A class used in English and absent in a
   locale means that locale is missing styled structure.

   Some divergence is legitimate — the English homepage has bespoke hero
   and bento sections the localized pages deliberately do not copy — so
   only the shared component classes listed below are enforced.

   Usage: node scripts/check-design-parity.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const { LOCALES } = require('../i18n/content.js');

const ROOT = path.join(__dirname, '..');

// Components that must look identical in every language.
const REQUIRED = {
  'templates.html': ['tpl-card', 'tpl-thumb', 'tpl-body', 'tpl-tags', 'tag', 'head-l', 'head-l-note', 'cta-band', 'btn-white'],
  '': ['cta-band', 'btn-white'],
  'blog/index.html': ['card-link'],
};

const classesIn = (file) => {
  const s = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const out = new Set();
  for (const m of s.matchAll(/class="([^"]+)"/g)) m[1].split(/\s+/).forEach(c => c && out.add(c));
  return out;
};

let errors = 0;
console.log('\ndesign parity check\n');

for (const [sub, required] of Object.entries(REQUIRED)) {
  for (const l of LOCALES) {
    const rel = `${l.code}/${sub || 'index.html'}`;
    if (!fs.existsSync(path.join(ROOT, rel))) continue;
    const have = classesIn(rel);
    const missing = required.filter(c => !have.has(c));
    if (missing.length) {
      console.error(`  ✗ ${rel} — missing styled structure: ${missing.join(', ')}`);
      errors++;
    }
  }
}

/* A purple button on the purple .cta-band gradient is invisible; the
   band is designed for .btn-white. This was live in every locale. */
for (const l of LOCALES) {
  for (const sub of ['index.html', 'templates.html']) {
    const rel = `${l.code}/${sub}`;
    if (!fs.existsSync(path.join(ROOT, rel))) continue;
    const s = fs.readFileSync(path.join(ROOT, rel), 'utf8');
    for (const m of s.matchAll(/<section class="cta-band">([\s\S]{0,400}?)<\/section>/g)) {
      if (/class="btn btn-primary/.test(m[1])) {
        console.error(`  ✗ ${rel} — btn-primary inside .cta-band (purple on purple); use btn-white`);
        errors++;
      }
    }
  }
}

/* Page-level class presence is not enough: stripping the wrappers off a
   SINGLE card still leaves the classes present via its 40 siblings, and
   an earlier version of this check passed a deliberately broken card
   for exactly that reason. Every card must carry its own structure. */
for (const l of LOCALES) {
  const rel = `${l.code}/templates.html`;
  if (!fs.existsSync(path.join(ROOT, rel))) continue;
  const s = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  const cards = s.split('<a class="tpl-card"').slice(1);
  cards.forEach((c, i) => {
    const body = c.split('</a>')[0];
    const need = ['tpl-thumb', 'tpl-body', 'tpl-tags'];
    const missing = need.filter(n => !body.includes(n));
    if (missing.length) {
      console.error(`  ✗ ${rel} card #${i + 1} — missing ${missing.join(', ')}`);
      errors++;
    }
  });
}

console.log('');
if (errors) {
  console.error(`✗ design parity: ${errors} problem(s). Localized pages must reuse the English components.\n`);
  process.exit(1);
}
console.log('✓ design parity — localized pages use the same components as English.\n');
