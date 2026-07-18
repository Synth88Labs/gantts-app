#!/usr/bin/env node
/* ============================================================
   check-hreflang.js — validate the hreflang cluster.

   hreflang annotations must be RECIPROCAL. If /es/ names / as its
   English alternate but / does not name /es/ in return, Google
   discards the entire cluster and no localized page benefits. This
   is the single most common way hreflang implementations silently
   fail, so it gets its own check rather than living in check-seo.

   Also verifies:
     - every referenced alternate URL resolves to a real local file
     - exactly one x-default per page
     - self-reference present (a page must list itself)
     - <html lang> matches the page's own hreflang

   Usage: node scripts/check-hreflang.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const { LOCALES } = require('../i18n/content.js');

const ROOT = path.join(__dirname, '..');
const ORIGIN = 'https://gantts.app';

// Map a public URL back to the file that should serve it.
function urlToFile(url) {
  let p = url.replace(ORIGIN, '');
  if (p === '' || p === '/') return 'index.html';
  p = p.replace(/^\//, '');
  if (p.endsWith('/')) p += 'index.html';
  return p;
}

function readAlternates(file) {
  const html = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const out = [];
  const re = /<link\s+rel=["']alternate["']\s+hreflang=["']([^"']+)["']\s+href=["']([^"']+)["']/gi;
  let m;
  while ((m = re.exec(html))) out.push({ hreflang: m[1], url: m[2] });
  const langM = html.match(/<html[^>]*\slang=["']([^"']+)["']/i);
  return { alts: out, htmlLang: langM ? langM[1] : null };
}

// Pages that form a cluster: English original + each localized variant.
const CLUSTERS = [
  { sub: '', en: 'index.html' },
  { sub: 'templates.html', en: 'templates.html' },
  { sub: 'blog/index.html', en: 'blog/index.html' },
  { sub: 'about.html', en: 'about.html' },
  { sub: 'contact.html', en: 'contact.html' },
  { sub: 'terms.html', en: 'terms.html' },
  { sub: 'privacy.html', en: 'privacy.html' },
];

let errors = 0, warnings = 0, checked = 0;
const err = (m) => { console.error('  ✗ ' + m); errors++; };
const warn = (m) => { console.warn('  ⚠ ' + m); warnings++; };

console.log('\nhreflang cluster check\n');

for (const cluster of CLUSTERS) {
  const members = [{ code: 'en', file: cluster.en, url: ORIGIN + '/' + cluster.sub }];
  for (const l of LOCALES) {
    members.push({ code: l.code, hreflang: l.hreflang, file: `${l.code}/${cluster.sub || 'index.html'}`, url: `${ORIGIN}/${l.code}/${cluster.sub}` });
  }

  console.log(`Cluster: /${cluster.sub || ''}  (${members.length} members)`);

  for (const m of members) {
    const abs = path.join(ROOT, m.file);
    if (!fs.existsSync(abs)) { err(`${m.file} — file missing`); continue; }
    checked++;

    const { alts, htmlLang } = readAlternates(m.file);
    if (!alts.length) { err(`${m.file} — no hreflang tags at all`); continue; }

    // self-reference
    const selfHl = m.code === 'en' ? 'en' : m.hreflang;
    if (!alts.some(a => a.hreflang === selfHl)) {
      err(`${m.file} — missing self-reference (hreflang="${selfHl}")`);
    }

    // x-default exactly once
    const xd = alts.filter(a => a.hreflang === 'x-default');
    if (xd.length === 0) warn(`${m.file} — no x-default`);
    else if (xd.length > 1) err(`${m.file} — ${xd.length} x-default tags (must be exactly 1)`);

    // <html lang> should match its own hreflang
    if (htmlLang && htmlLang !== selfHl) {
      warn(`${m.file} — <html lang="${htmlLang}"> but hreflang self is "${selfHl}"`);
    }

    // every alternate must resolve to a real file
    for (const a of alts) {
      const target = urlToFile(a.url);
      if (!fs.existsSync(path.join(ROOT, target))) {
        err(`${m.file} — hreflang="${a.hreflang}" points at ${a.url} but ${target} does not exist`);
      }
    }

    // RECIPROCITY: everyone this page names must name this page back
    for (const a of alts) {
      if (a.hreflang === 'x-default') continue;
      const target = urlToFile(a.url);
      if (!fs.existsSync(path.join(ROOT, target))) continue;
      const back = readAlternates(target).alts;
      if (!back.some(b => b.url === m.url)) {
        err(`NOT RECIPROCAL — ${m.file} points to ${a.url}, but ${target} does not point back to ${m.url}`);
      }
    }
  }
}

console.log('');
if (errors) {
  console.error(`✗ ${errors} error(s), ${warnings} warning(s) across ${checked} page(s).`);
  console.error('  Google ignores non-reciprocal hreflang clusters entirely.\n');
  process.exit(1);
}
console.log(`✓ hreflang valid — ${checked} page(s) checked, all reciprocal.${warnings ? ' ' + warnings + ' warning(s).' : ''}\n`);
