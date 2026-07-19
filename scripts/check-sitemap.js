#!/usr/bin/env node
/* ============================================================
   check-sitemap.js — validate sitemap.xml before it ships.

   A sitemap fails quietly: Google drops URLs it cannot fetch and
   ignores fields it cannot trust, and nothing in the build tells you.
   This makes the failure loud.

   Checks:
     1. every <loc> resolves to a file that actually exists
     2. no duplicate <loc> values
     3. no URL is excluded by robots.txt
     4. lastmod is a valid ISO date, not in the future
     5. lastmod is not identical across every URL (the bug that
        prompted this file — a uniform date means the field is
        generated rather than true, and Google learns to ignore it)
     6. hreflang clusters in the sitemap are reciprocal and complete
     7. every localized page on disk appears in the sitemap
     8. 404.html is NOT listed

   Usage: node scripts/check-sitemap.js
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BASE = 'https://gantts.app';
const SITEMAP = path.join(ROOT, 'sitemap.xml');

let errors = 0, warnings = 0;
const err = (m) => { console.error('  ✗ ' + m); errors++; };
const warn = (m) => { console.warn('  ⚠ ' + m); warnings++; };

if (!fs.existsSync(SITEMAP)) {
  console.error('\n✗ sitemap.xml missing — run: node scripts/gen-sitemap.js\n');
  process.exit(1);
}
const xml = fs.readFileSync(SITEMAP, 'utf8');

console.log('\nsitemap check\n');

// Well-formedness, cheaply: tag balance on the elements we care about.
const openUrls = (xml.match(/<url>/g) || []).length;
const closeUrls = (xml.match(/<\/url>/g) || []).length;
if (openUrls !== closeUrls) err(`unbalanced <url> tags: ${openUrls} open, ${closeUrls} closed`);
if (!/^<\?xml version="1\.0" encoding="UTF-8"\?>/.test(xml)) err('missing or malformed XML declaration');
if (!xml.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) err('missing sitemap namespace');

// URL -> local file
function urlToFile(url) {
  let p = url.replace(BASE, '');
  if (p === '' || p === '/') return 'index.html';
  p = p.replace(/^\//, '');
  if (p.endsWith('/')) p += 'index.html';
  return p;
}

const blocks = xml.split('<url>').slice(1).map(b => b.split('</url>')[0]);
const locs = [];
const lastmods = [];
const altsByLoc = {};

for (const b of blocks) {
  const loc = (b.match(/<loc>([^<]+)<\/loc>/) || [])[1];
  if (!loc) { err('a <url> block has no <loc>'); continue; }
  locs.push(loc);

  const lm = (b.match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1];
  if (!lm) warn(`${loc} — no <lastmod>`);
  else lastmods.push({ loc, lm });

  altsByLoc[loc] = [...b.matchAll(/hreflang="([^"]+)"\s+href="([^"]+)"/g)]
    .map(m => ({ hreflang: m[1], url: m[2] }));

  if (!loc.startsWith(BASE + '/') && loc !== BASE + '/') err(`${loc} — not an absolute URL on ${BASE}`);
  if (/[<>"& ]/.test(loc)) err(`${loc} — contains a character that must be XML-escaped`);
}

// 1. every loc resolves to a real file
for (const loc of locs) {
  const f = urlToFile(loc);
  if (!fs.existsSync(path.join(ROOT, f))) err(`${loc} — no file at ${f}`);
}

// 2. duplicates
const seen = new Set();
for (const loc of locs) {
  if (seen.has(loc)) err(`duplicate <loc>: ${loc}`);
  seen.add(loc);
}

// 3. robots.txt disallows
const robotsPath = path.join(ROOT, 'robots.txt');
if (fs.existsSync(robotsPath)) {
  const disallow = fs.readFileSync(robotsPath, 'utf8')
    .split('\n').map(l => l.trim())
    .filter(l => /^Disallow:/i.test(l))
    .map(l => l.replace(/^Disallow:\s*/i, '').trim())
    .filter(Boolean);
  for (const loc of locs) {
    const p = loc.replace(BASE, '') || '/';
    for (const d of disallow) {
      if (d !== '/' && p.startsWith(d)) err(`${loc} — listed in sitemap but blocked by robots.txt (${d})`);
    }
  }
  if (!/Sitemap:\s*https?:\/\//i.test(fs.readFileSync(robotsPath, 'utf8'))) {
    warn('robots.txt does not point at the sitemap');
  }
} else warn('no robots.txt found');

// 4 + 5. lastmod sanity
const today = new Date().toISOString().slice(0, 10);
const distinct = new Set();
for (const { loc, lm } of lastmods) {
  if (!/^\d{4}-\d{2}-\d{2}(T|$)/.test(lm)) err(`${loc} — lastmod "${lm}" is not a valid ISO date`);
  else {
    if (lm.slice(0, 10) > today) err(`${loc} — lastmod ${lm} is in the future`);
    distinct.add(lm.slice(0, 10));
  }
}
if (lastmods.length > 5 && distinct.size === 1) {
  warn(`every URL has the same lastmod (${[...distinct][0]}). ` +
    'That usually means it is stamped at build time rather than reflecting real changes, ' +
    'and Google will stop trusting the field.');
}

// 6. hreflang clusters must be reciprocal
for (const [loc, alts] of Object.entries(altsByLoc)) {
  if (!alts.length) continue;
  if (!alts.some(a => a.url === loc)) err(`${loc} — hreflang set does not include itself`);
  const xd = alts.filter(a => a.hreflang === 'x-default');
  if (xd.length !== 1) err(`${loc} — ${xd.length} x-default entries (must be exactly 1)`);
  for (const a of alts) {
    if (a.hreflang === 'x-default') continue;
    const back = altsByLoc[a.url];
    if (!back) { err(`${loc} — names ${a.url} as an alternate, but that URL is not in the sitemap`); continue; }
    if (!back.some(x => x.url === loc)) err(`NOT RECIPROCAL — ${loc} names ${a.url}, which does not name it back`);
  }
}

// 7. every localized page on disk is listed
const localeDirs = ['es', 'fr', 'de', 'pt', 'zh'];
let onDisk = 0, listed = 0;
for (const code of localeDirs) {
  const dir = path.join(ROOT, code);
  if (!fs.existsSync(dir)) continue;
  const walk = (d, base) => {
    for (const name of fs.readdirSync(d)) {
      const abs = path.join(d, name);
      if (fs.statSync(abs).isDirectory()) { walk(abs, base + '/' + name); continue; }
      if (!name.endsWith('.html')) continue;
      onDisk++;
      const rel = base + '/' + name;
      const url = name === 'index.html' ? `${BASE}${rel.replace(/index\.html$/, '')}` : BASE + rel;
      if (seen.has(url)) listed++;
      else err(`${rel} exists on disk but is not in the sitemap (expected ${url})`);
    }
  };
  walk(dir, '/' + code);
}

// 8. no 404
if (locs.some(l => l.endsWith('/404.html'))) err('404.html must not be listed in the sitemap');

console.log(`  ${locs.length} URLs · ${Object.values(altsByLoc).filter(a => a.length).length} with hreflang · ` +
  `${listed}/${onDisk} localized pages listed · ${distinct.size} distinct lastmod date(s)`);

console.log('');
if (errors) {
  console.error(`✗ sitemap: ${errors} error(s), ${warnings} warning(s).\n`);
  process.exit(1);
}
console.log(`✓ sitemap valid — ${locs.length} URLs.${warnings ? ' ' + warnings + ' warning(s).' : ''}\n`);
