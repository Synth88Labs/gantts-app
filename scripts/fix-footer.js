#!/usr/bin/env node
/* ============================================================
   fix-footer.js — rewrite the footer on every English page.

   The old footer had five defects, each repeated across 89 pages:

   1. /app.html appeared THREE times with different anchor text
      ("Gantt Chart Maker", "Import CSV / JSON", "Export PDF / Excel /
      PPT"). Two of those read like links to feature pages that do not
      exist, and sitewide keyword-varied links to a single URL is a
      pattern search engines discount at best.
   2. Column taxonomy drifted: most pages said "Templates", the hub
      said "Popular templates", localized pages used a different set
      entirely (Producto / Recursos / Empresa).
   3. Trust links lived in the bottom bar on English pages but in a
      grid column on localized ones.
   4. No hub links — no way to reach /templates.html or /blog/ from
      the columns that list their children.
   5. The 480px breakpoint duplicated the 820px one, so phones never
      got a single-column footer. (Fixed in site.css.)

   Every link in the new footer is distinct and resolves.

   Idempotent.
   Usage: node scripts/fix-footer.js
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const GH = 'https://github.com/Synth88Labs/gantts-app';
const SKIP_DIRS = new Set(['node_modules', 'scripts', 'docs', '.git', 'deploy',
  'i18n', 'es', 'fr', 'de', 'pt', 'zh', 'templates/files', 'templates/img']);
const SKIP_FILES = new Set(['app.html', '404.html']);

function walk(dir, base = '') {
  let out = [];
  for (const n of fs.readdirSync(dir)) {
    const rel = (base ? base + '/' : '') + n;
    if (SKIP_DIRS.has(n) || SKIP_DIRS.has(rel)) continue;
    const abs = path.join(dir, n);
    if (fs.statSync(abs).isDirectory()) out = out.concat(walk(abs, rel));
    else if (n.endsWith('.html') && !SKIP_FILES.has(rel)) out.push(rel.replace(/\\/g, '/'));
  }
  return out;
}

const { FOOTER } = require('./footer.js');

let changed = 0, skipped = 0;
for (const rel of walk(ROOT)) {
  const abs = path.join(ROOT, rel);
  const html = fs.readFileSync(abs, 'utf8');
  const re = /[ \t]*<footer class="footer">[\s\S]*?<\/footer>/;
  if (!re.test(html)) { skipped++; continue; }
  const next = html.replace(re, FOOTER);
  if (next !== html) { fs.writeFileSync(abs, next, 'utf8'); changed++; }
}

const links = (FOOTER.match(/<a /g) || []).length;
const targets = [...FOOTER.matchAll(/href="([^"]+)"/g)].map(m => m[1]);
const dupes = targets.filter((t, i) => targets.indexOf(t) !== i);

console.log(`✓ footer rewritten on ${changed} page(s); ${skipped} without a matching footer.`);
console.log(`  ${links} links, ${new Set(targets).size} unique targets` + (dupes.length ? ` — DUPLICATES: ${dupes}` : ', no duplicates'));
