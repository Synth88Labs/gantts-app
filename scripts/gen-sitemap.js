/* gen-sitemap.js — scan .html files and emit sitemap.xml
   Run: node scripts/gen-sitemap.js */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const BASE = 'https://gantts.app';
const DATE = '2026-07-15';
const SKIP = new Set(['node_modules', 'scripts', 'docs', '.claude', 'templates/files', 'templates/img']);

const priority = (rel) => rel === 'index.html' ? '1.0'
  : rel === 'app.html' || rel === 'templates.html' ? '0.9'
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

const pages = walk(ROOT, '').sort();
const urls = pages.map(p => {
  const loc = p === 'index.html' ? BASE + '/' : BASE + '/' + p;
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${DATE}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority(p)}</priority>\n  </url>`;
}).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml);
console.log('sitemap.xml written with', pages.length, 'pages');
pages.forEach(p => console.log(' ', p));
