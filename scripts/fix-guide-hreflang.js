#!/usr/bin/env node
/* ============================================================
   fix-guide-hreflang.js — reciprocal hreflang on English pages.

   Covers BOTH guides and template detail pages.

   Eight of the twelve English guides are hand-authored HTML and four
   are generated, so there is no single generator that can own their
   <head>. This walks the English blog pages and injects (or refreshes)
   the hreflang block for any guide that has a translation, driven by
   i18n/guide-locales.js so it can never disagree with what was
   actually written.

   Idempotent: the block is delimited by markers and replaced wholesale
   on each run, so running it twice does not stack duplicates — which
   would silently invalidate the cluster.

   Usage: node scripts/fix-guide-hreflang.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const { LOCALES } = require('../i18n/content.js');
const G = require('../i18n/guide-locales.js');
const T = require('../i18n/template-locales.js');

/* Two families of page, one problem: in each, some English originals are
   generated and some are hand-authored HTML, so no single generator can
   own their <head>. 22 template pages had no hreflang at all until this
   was generalised — caught by check-hreflang, not by eye. */
const FAMILIES = [
  { dir: 'blog', reg: G, label: 'guide' },
  { dir: 'templates', reg: T, label: 'template' },
];

const ROOT = path.join(__dirname, '..');
const ORIGIN = 'https://gantts.app';
const START = '  <!-- hreflang:start -->';
const END = '  <!-- hreflang:end -->';

function block(dir, reg, slug) {
  const codes = reg.localesFor(slug);
  if (!codes.length) return '';
  const en = `${ORIGIN}/${dir}/${slug}.html`;
  const rows = [`  <link rel="alternate" hreflang="en" href="${en}" />`];
  for (const code of codes) {
    const l = LOCALES.find(x => x.code === code);
    rows.push(`  <link rel="alternate" hreflang="${l.hreflang}" href="${ORIGIN}/${code}/${dir}/${slug}.html" />`);
  }
  rows.push(`  <link rel="alternate" hreflang="x-default" href="${en}" />`);
  return [START, ...rows, END].join('\n');
}

/** Remove every START…END block, however many have accumulated. */
function stripBlocks(html) {
  const s = START.trim(), e = END.trim();
  for (;;) {
    const i = html.indexOf(s);
    if (i < 0) return html;
    const j = html.indexOf(e, i);
    if (j < 0) return html.slice(0, i);          // truncated block: drop the tail
    let end = j + e.length;
    if (html[end] === '\r') end++;
    if (html[end] === '\n') end++;
    // also swallow the indentation before the marker
    let start = i;
    while (start > 0 && (html[start - 1] === ' ' || html[start - 1] === '\t')) start--;
    html = html.slice(0, start) + html.slice(end);
  }
}

let touched = 0, skipped = 0;
for (const fam of FAMILIES) {
 for (const slug of fam.reg.translatedSlugs()) {
  const rel = `${fam.dir}/${slug}.html`;
  const file = path.join(ROOT, fam.dir, slug + '.html');
  if (!fs.existsSync(file)) { console.warn(`  ⚠ ${rel} not found`); continue; }
  let html = fs.readFileSync(file, 'utf8');
  const b = block(fam.dir, fam.reg, slug);

  /* Drop any previous block, then any stray hreflang links that predate
     the markers, so we never end up with two competing sets.

     Deliberately NOT a RegExp built from the marker strings. The first
     version did exactly that with '[\s\S]*?' written inside a plain JS
     string, where \s collapses to s — the pattern silently became
     [sS]*? and never matched, so every build stripped the links but
     left the markers behind and appended a fresh block. Running it
     twice produced three marker pairs. Index splicing has no escaping
     surface to get wrong. */
  html = stripBlocks(html);
  html = html.replace(/^[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*" \/>\r?\n/gm, '');

  const canon = html.match(/^[ \t]*<link rel="canonical"[^>]*>\r?\n/m);
  if (!canon) { console.warn(`  ⚠ ${rel} has no canonical to anchor to`); skipped++; continue; }

  const next = html.replace(canon[0], canon[0] + b + '\n');

  // Refuse to write something we would have to clean up next run.
  const starts = (next.match(/hreflang:start/g) || []).length;
  if (starts !== 1) {
    console.error(`  ✗ ${rel} — would contain ${starts} hreflang blocks; not written`);
    process.exitCode = 1;
    continue;
  }

  if (next !== fs.readFileSync(file, 'utf8')) {
    fs.writeFileSync(file, next, 'utf8');
    touched++;
    console.log(`  ✓ ${rel} — ${fam.reg.localesFor(slug).join(', ')}`);
  }
 }
}
console.log(`\n✓ hreflang injected: ${touched} page(s) updated${skipped ? `, ${skipped} skipped` : ''}.\n`);
