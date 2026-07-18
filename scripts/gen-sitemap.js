/* gen-sitemap.js — scan .html files and emit sitemap.xml
   Run: node scripts/gen-sitemap.js

   Emits xhtml:link hreflang annotations for pages that have localized
   variants. Google accepts hreflang in the page head or in the sitemap;
   the sitemap form is what Search Console's international reporting
   reads, so both are emitted. */
const fs = require('fs');
const path = require('path');
const { LOCALES } = require('../i18n/content.js');

const ROOT = path.join(__dirname, '..');
const BASE = 'https://gantts.app';
const DATE = new Date().toISOString().slice(0, 10);

const LOCALE_RE = /^(es|fr|de|pt|zh)\//;
// `deploy/` is a build artifact holding a full copy of the site —
// walking it would list every URL twice.
const SKIP = new Set(['node_modules', 'scripts', 'docs', '.claude', '.git', 'deploy',
  'i18n', 'templates/files', 'templates/img']);

const priority = (rel) => rel === 'index.html' ? '1.0'
  : rel === 'app.html' || rel === 'templates.html' ? '0.9'
  : /^(es|fr|de|pt|zh)\/index\.html$/.test(rel) ? '0.9'
  : rel.startsWith('templates/') ? '0.8'
  : rel.startsWith('blog/') ? '0.7'
  : '0.5';

function walk(dir, base) {
  let out = [];
  for (const name of fs.readdirSync(dir)) {
    const abs = path.join(dir, name);
    const rel = (base ? base + '/' : '') + name;
    if (SKIP.has(rel) || SKIP.has(name)) continue;
    const st = fs.statSync(abs);
    if (st.isDirectory()) out = out.concat(walk(abs, rel));
    else if (name.endsWith('.html') && name !== '404.html') out.push(rel.replace(/\\/g, '/'));
  }
  return out;
}

// index.html maps to a trailing-slash URL, not the filename.
function toUrl(rel) {
  if (rel === 'index.html') return BASE + '/';
  if (rel.endsWith('/index.html')) return BASE + '/' + rel.slice(0, -'index.html'.length);
  return BASE + '/' + rel;
}

// Strip any leading locale segment to get the logical page id.
function logicalSub(rel) {
  const m = rel.match(/^(es|fr|de|pt|zh)\/(.*)$/);
  const sub = m ? m[2] : rel;
  return sub === 'index.html' ? '' : sub;
}

const pages = walk(ROOT, '').sort();

// Which logical pages actually have localized variants on disk?
const localizedSubs = new Set();
for (const p of pages) if (LOCALE_RE.test(p)) localizedSubs.add(logicalSub(p));

function altLinks(rel) {
  const sub = logicalSub(rel);
  if (!localizedSubs.has(sub)) return '';
  const enUrl = sub === '' ? BASE + '/' : BASE + '/' + sub;
  const rows = [`    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>`];
  for (const l of LOCALES) {
    const f = `${l.code}/${sub || 'index.html'}`;
    if (!fs.existsSync(path.join(ROOT, f))) continue;
    rows.push(`    <xhtml:link rel="alternate" hreflang="${l.hreflang}" href="${toUrl(f)}"/>`);
  }
  rows.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>`);
  return '\n' + rows.join('\n');
}

const urls = pages.map(p =>
  `  <url>\n    <loc>${toUrl(p)}</loc>${altLinks(p)}\n    <lastmod>${DATE}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority(p)}</priority>\n  </url>`
).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml);

const localized = pages.filter(p => LOCALE_RE.test(p)).length;
console.log(`sitemap.xml written — ${pages.length} URLs (${localized} localized, ${localizedSubs.size} hreflang cluster(s))`);
