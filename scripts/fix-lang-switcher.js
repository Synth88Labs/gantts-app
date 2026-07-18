#!/usr/bin/env node
/* ============================================================
   fix-lang-switcher.js — make every English content page use the
   navigating language switcher, and stop loading runtime i18n.

   WHY: content pages now have real localized URLs (/es/, /fr/, ...).
   Leaving i18n.js on the English pages meant a stored language
   preference would repaint the chrome — so /index.html could serve
   lang="en" with a Spanish nav and an "Abrir la app" button, while
   its hreflang pointed elsewhere. One URL, one language.

   app.html KEEPS runtime i18n: it is an application UI, not an
   indexable document, and switching language there should not
   navigate away from the user's work.

   Idempotent.
   Usage: node scripts/fix-lang-switcher.js
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SKIP_DIRS = new Set(['node_modules', 'scripts', 'docs', '.claude', '.git', 'deploy',
  'i18n', 'es', 'fr', 'de', 'pt', 'zh', 'templates/files', 'templates/img']);
const SKIP_FILES = new Set(['app.html', '404.html']);

// Depth-aware: a page at /blog/x.html still links to /es/blog/x.html
// only if that page exists; otherwise the switcher points at the
// locale home, which is better than a 404.
const LOCALES = [
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'pt', name: 'Português' },
  { code: 'zh', name: '简体中文' },
];

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

function switcherFor(rel) {
  const sub = rel === 'index.html' ? '' : rel;
  const enHref = '/' + sub;
  const opts = [`<option value="${enHref}" selected>English</option>`];
  for (const l of LOCALES) {
    // link to the localized twin when it exists, else that locale's home
    const twin = path.join(ROOT, l.code, sub || 'index.html');
    const href = fs.existsSync(twin) ? `/${l.code}/${sub}` : `/${l.code}/`;
    opts.push(`<option value="${href}">${l.name}</option>`);
  }
  return '<select class="lang-select" data-lang-nav aria-label="Language" title="Language" '
       + 'onchange="if(this.value)location.href=this.value">\n          '
       + opts.join('\n          ') + '\n        </select>';
}

let switchers = 0, i18nRemoved = 0;

for (const rel of walk(ROOT)) {
  const abs = path.join(ROOT, rel);
  let html = fs.readFileSync(abs, 'utf8');
  const before = html;

  // 1. replace an empty/legacy lang-select with a navigating one
  const emptySelect = /<select class="lang-select"(?![^>]*data-lang-nav)[^>]*>\s*<\/select>/;
  if (emptySelect.test(html)) {
    html = html.replace(emptySelect, switcherFor(rel));
    switchers++;
  }

  // 2. drop the runtime i18n script from content pages
  const i18nTag = /\s*<script src="\/js\/i18n\.js(\?[^"]*)?"><\/script>/;
  if (i18nTag.test(html)) {
    html = html.replace(i18nTag, '');
    i18nRemoved++;
  }

  if (html !== before) fs.writeFileSync(abs, html, 'utf8');
}

console.log(`✓ ${switchers} navigating switcher(s) installed; i18n.js removed from ${i18nRemoved} content page(s).`);
console.log('  app.html untouched — it keeps runtime i18n on purpose.');
