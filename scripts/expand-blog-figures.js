#!/usr/bin/env node
/* ============================================================
   expand-blog-figures.js — figure tokens for the HAND-AUTHORED guides.

   The seven generated guides get their diagrams from the content model,
   expanded per locale by gen-guide-pages.js and gen-i18n.js. The other
   eight English guides are hand-written HTML that no generator touches
   by design, so a <!--FIG:name--> token in one of them would ship to the
   page as an invisible HTML comment and the diagram would simply be
   absent. This closes that gap.

   RE-RUNNABLE ON PURPOSE

   It replaces two things: a raw <!--FIG:name|caption--> token, and any
   figure this script produced earlier (marked with data-fig). So when a
   diagram's geometry changes in guide-figures.js, re-running updates
   every published copy instead of leaving the old drawing frozen in the
   HTML. A one-shot replacer would have made these eight pages the only
   place a stale diagram could hide.

   English only — these pages exist only in English. Their translations
   are model entries and are handled by gen-i18n.js, which draws each
   diagram in the reader's language.

   Usage: node scripts/expand-blog-figures.js [--dry]
   ============================================================ */
const fs = require('fs');
const path = require('path');
const Figures = require('../i18n/guide-figures.js');

const ROOT = path.join(__dirname, '..');
const DIR = path.join(ROOT, 'blog');
const DRY = process.argv.includes('--dry');
const GENERATED = new Set(Object.keys(require('./new-guides.js').G));

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function render(name, caption) {
  const fn = Figures.BY_NAME[name];
  if (!fn) return null;
  const cap = (caption || '').trim();
  return `<figure class="fig fig-inline" data-fig="${esc(name)}"${cap ? ` data-cap="${esc(cap)}"` : ''}>`
    + fn(Figures.LABELS.en, cap || name)
    + (cap ? `<figcaption>${esc(cap)}</figcaption>` : '')
    + '</figure>';
}

const TOKEN = /<!--\s*FIG:([a-z]+)\s*(?:\|([^>]*?))?\s*-->/g;
// Previously-expanded blocks, so geometry changes propagate.
const EXPANDED = /<figure class="fig fig-inline" data-fig="([a-z]+)"(?: data-cap="([^"]*)")?>[\s\S]*?<\/figure>/g;

let files = 0, added = 0, refreshed = 0, unknown = [];

for (const f of fs.readdirSync(DIR)) {
  if (!f.endsWith('.html') || f === 'index.html') continue;
  const slug = f.slice(0, -5);
  if (GENERATED.has(slug)) continue;          // generated; never hand-edit

  const file = path.join(DIR, f);
  const before = fs.readFileSync(file, 'utf8');

  let after = before.replace(EXPANDED, (whole, name, cap) => {
    const out = render(name, cap ? cap.replace(/&quot;/g, '"').replace(/&amp;/g, '&') : '');
    if (!out) { unknown.push(`${slug}: ${name}`); return whole; }
    if (out !== whole) refreshed++;
    return out;
  });

  after = after.replace(TOKEN, (whole, name, cap) => {
    const out = render(name, cap);
    if (!out) { unknown.push(`${slug}: ${name}`); return whole; }
    added++;
    return out;
  });

  if (after !== before) {
    files++;
    if (!DRY) fs.writeFileSync(file, after);
    console.log(`  ${DRY ? '· ' : '✓ '}${slug}`);
  }
}

console.log(`\n  ${added} token(s) expanded, ${refreshed} existing figure(s) refreshed, ${files} file(s) ${DRY ? 'would change' : 'written'}`);

if (unknown.length) {
  console.error('\n✗ token(s) naming no archetype — these would ship as invisible comments:');
  unknown.forEach((u) => console.error('    ' + u));
  process.exit(1);
}
