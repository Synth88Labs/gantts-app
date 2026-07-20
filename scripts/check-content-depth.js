#!/usr/bin/env node
/* ============================================================
   check-content-depth.js — do translated readers get the same article?

   WHY THIS EXISTS

   Heading parity was being used as the measure of whether a localized
   guide matched its English original, and it is a bad one. It was
   satisfied while the localized guides carried roughly a THIRD of the
   words: same headings, same structure, a quarter of the substance
   under each one. Several localized guides even had MORE headings than
   English while having a third of the content, so the metric did not
   just miss the problem — it reported the opposite.

   The reader-facing question is not "are there the same number of
   sections" but "does someone reading in German learn as much as
   someone reading in English". This measures that.

   HOW IT MEASURES

   Body words inside <div class="prose">, as a percentage of the English
   original. Chinese has no spaces, so CJK glyphs are counted and scaled
   — a Chinese character carries roughly 1.6 English words' worth of
   meaning at these text lengths, which is close enough to compare
   against and far better than counting whitespace-delimited runs (that
   would report every Chinese page as nearly empty).

   REPORTS, DOES NOT FAIL

   Some variance is healthy: a good localized article is not a
   word-for-word translation, and a tighter language should read
   shorter. The floor exists to catch an article that is a stub wearing
   a full article's outline. Raise FLOOR as the backlog clears.
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const LOCALES = ['es', 'fr', 'de', 'pt', 'zh'];
const FLOOR = 80;          // below this, the localized reader is short-changed

/* WHY 80 AND NOT 55.
   The floor sat at 55 for a long time and the Chinese pages sat at
   55-68 — passing, because the bar had been set to whatever was true
   at the time rather than to what a reader needs. A floor that only
   ever describes the status quo is not a check.

   Every localized guide now runs 90-190% of its English original, so 80
   has real headroom. There was briefly a LEGACY exemption list for the
   eight hand-authored guides awaiting their second pass; it has been
   deleted because the list is empty. If you find yourself adding one
   back, give it an expiry and print it on every run — visible debt is
   the only kind that gets paid. */
const floorFor = () => FLOOR;

function bodyText(file) {
  if (!fs.existsSync(file)) return null;
  const html = fs.readFileSync(file, 'utf8');
  const m = html.match(/<div class="prose">([\s\S]*?)<\/article>/);
  if (!m) return null;
  return m[1].replace(/<[^>]+>/g, ' ');
}

function size(text, code) {
  if (code === 'zh') {
    const cjk = (text.match(/[一-鿿]/g) || []).length;
    return Math.round(cjk / 1.6);
  }
  return (text.match(/\S+/g) || []).length;
}

const slugs = fs.readdirSync(path.join(ROOT, 'blog'))
  .filter(f => f.endsWith('.html') && f !== 'index.html')
  .map(f => f.slice(0, -5))
  .sort();

console.log('Content depth check — localized guides vs their English original\n');

const thin = [];
let compared = 0;

for (const slug of slugs) {
  const enText = bodyText(path.join(ROOT, 'blog', slug + '.html'));
  if (!enText) continue;
  const en = size(enText, 'en');
  if (!en) continue;

  const cells = [];
  for (const code of LOCALES) {
    const t = bodyText(path.join(ROOT, code, 'blog', slug + '.html'));
    if (t === null) { cells.push('   - '); continue; }
    const pct = Math.round((size(t, code) / en) * 100);
    compared++;
    if (pct < floorFor(slug)) thin.push({ slug, code, pct, floor: floorFor(slug) });
    cells.push(String(pct).padStart(4) + '%');
  }
  console.log(`  ${slug.padEnd(34)} ${String(en).padStart(5)}w  ${cells.join(' ')}`);
}

console.log(`\n  ${LOCALES.join('    ')}   (percentage of the English word count)`);
console.log(`  ${compared} localized guide(s) compared, floor ${FLOOR}%.`);

if (thin.length) {
  const bySlug = {};
  for (const t of thin) (bySlug[t.slug] = bySlug[t.slug] || []).push(`${t.code} ${t.pct}%`);
  console.log(`\n  ⚠ ${thin.length} below the floor — these readers get a stub with a full article's outline:`);
  for (const [slug, list] of Object.entries(bySlug)) {
    console.log(`      ${slug.padEnd(34)} ${list.join(', ')}`);
  }
  console.log('\n  Not a build failure: a localized article is not a word-for-word');
  console.log('  translation and some variance is right. Fix by adding SUBSTANCE to the');
  console.log('  existing sections in i18n/guides-<code>.js, not by adding headings.');
} else {
  console.log('\n✓ every localized guide carries comparable depth to its English original.');
}
