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
/* Detail pages are generated per slug, so rather than enumerate them the
   check compares each localized page against its English original and
   reports any styled class the English page uses and the locale does
   not. This is what caught the guides missing post-meta and the toc,
   and the about page missing its CTA band. */
const DETAIL_PAIRS = [
  ['templates', (s) => `templates/${s}.html`],
  ['blog', (s) => `blog/${s}.html`],
];

const REQUIRED = {
  'templates.html': ['tpl-card', 'tpl-thumb', 'tpl-body', 'tpl-tags', 'tag', 'head-l', 'head-l-note', 'cta-band', 'btn-white'],
  /* The homepage closes with .cta2, not .cta-band — the two are
     different treatments and English has only ever used cta2 here.
     Requiring cta-band on the homepage meant this checker demanded a
     component English does not have, so it passed while the localized
     homepages carried the wrong one and failed the moment they were
     corrected. Requirements are now taken from what English renders. */
  '': ['cta2', 'btn-white', 'faq2', 'faq2-side', 'faq2-list', 'bento-visual', 'hero3-ruler'],
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

/* THE HOMEPAGE.

   Previously exempt, and that exemption is exactly why the localized
   homepages went months with no feature icons, no template cards and
   four of six feature cells — nobody was checking.

   It is not enforced identically, because the English homepage really
   does carry bespoke sections the localized pages deliberately do not
   copy. But "some divergence is legitimate" is not a licence for any
   divergence, so the accepted set is written down here and everything
   else fails. A new gap cannot hide behind the old ones.

   To adopt one of these, build it in renderHome and delete the entry. */
const ACCEPTED_HOMEPAGE_DIVERGENCE = new Set([
  // hero illustration internals — bespoke to the English page
  'hero3-ruler', 'on-today', 'bento-visual',
  // (adopted: flow, flow-n, split, split-copy, checks, band, head-l-cta
  //  are now built in renderHome and therefore enforced)
  // two-column FAQ layout; localized uses the single-column .faq
  'faq2', 'faq2-side', 'faq2-list',
  // alternate CTA treatment and section-header link variants
  'cta2', 'head-l-link',
]);

for (const l of LOCALES) {
  const loc = `${l.code}/index.html`;
  if (!fs.existsSync(path.join(ROOT, loc))) continue;
  const have = classesIn(loc);
  const missing = [...classesIn('index.html')]
    .filter(c => !have.has(c) && !ACCEPTED_HOMEPAGE_DIVERGENCE.has(c));
  if (missing.length) {
    console.error(`  ✗ ${loc} — homepage missing vs English: ${missing.join(', ')}`);
    console.error('    Either build it in renderHome, or add it to ACCEPTED_HOMEPAGE_DIVERGENCE with a reason.');
    errors++;
  }
}

/* Compare every localized detail page against its English original. */
const T = require('../i18n/template-locales.js');
const G = require('../i18n/guide-locales.js');
for (const [dir, reg] of [['templates', T], ['blog', G]]) {
  for (const slug of reg.translatedSlugs()) {
    const en = `${dir}/${slug}.html`;
    if (!fs.existsSync(path.join(ROOT, en))) continue;
    for (const code of reg.localesFor(slug)) {
      const loc = `${code}/${dir}/${slug}.html`;
      if (!fs.existsSync(path.join(ROOT, loc))) continue;
      const missing = [...classesIn(en)].filter(c => !classesIn(loc).has(c));
      if (missing.length) {
        console.error(`  ✗ ${loc} — missing vs English: ${missing.join(', ')}`);
        errors++;
      }
    }
  }
}

/* And the trust pages, which are not slug-driven. */
for (const l of LOCALES) {
  for (const page of ['about.html', 'contact.html', 'terms.html', 'privacy.html']) {
    const loc = `${l.code}/${page}`;
    if (!fs.existsSync(path.join(ROOT, loc))) continue;
    const missing = [...classesIn(page)].filter(c => !classesIn(loc).has(c));
    if (missing.length) {
      console.error(`  ✗ ${loc} — missing vs English: ${missing.join(', ')}`);
      errors++;
    }
  }
}

console.log('');
if (errors) {
  console.error(`✗ design parity: ${errors} problem(s). Localized pages must reuse the English components.\n`);
  process.exit(1);
}
console.log('✓ design parity — localized pages use the same components as English.\n');
