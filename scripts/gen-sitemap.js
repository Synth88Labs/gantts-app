/* ============================================================
   gen-sitemap.js — scan .html files and emit sitemap.xml

   Run: node scripts/gen-sitemap.js

   Emits xhtml:link hreflang annotations for pages that have localized
   variants. Google accepts hreflang in the page head or in the sitemap;
   the sitemap form is what Search Console's international reporting
   reads, so both are emitted.

   THREE THINGS THIS FILE DELIBERATELY GETS RIGHT

   1. lastmod is PER PAGE and comes from git, not from `new Date()`.
      The old version stamped today's date on all 105 URLs on every
      build, which told Google that every page on the site changed
      every time anything was deployed. Google only trusts lastmod when
      it is consistently accurate; a sitemap where all the dates move
      together teaches it to ignore the field entirely. Git's last
      commit date for a file is the honest answer — and because the
      generators rewrite files with identical content, git correctly
      reports no change when nothing actually changed.

   2. changefreq and priority are NOT emitted. Google ignores both, and
      the old values carried no information anyway: every page claimed
      "weekly", and priority was a hardcoded guess that even disagreed
      between the English and Spanish halves of the same hreflang
      cluster (0.8 vs 0.5 for one template). Fewer bytes, no fiction.

   3. An XSL stylesheet is referenced so opening the sitemap in a
      browser shows a readable table instead of a wall of raw XML.
      Crawlers ignore it entirely.
   ============================================================ */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { LOCALES } = require('../i18n/content.js');

const ROOT = path.join(__dirname, '..');
const BASE = 'https://gantts.app';

const LOCALE_RE = /^(es|fr|de|pt|zh)\//;
// `deploy/` is a build artifact holding a full copy of the site —
// walking it would list every URL twice.
const SKIP = new Set(['node_modules', 'scripts', 'docs', '.git', 'deploy',
  'i18n', 'templates/files', 'templates/img', 'test']);

/* Last commit date per file, in one pass.

   Calling `git log` once per URL would be 105 process spawns; this
   walks the history once and keeps the first (most recent) date seen
   for each path. */
function gitDates() {
  const map = Object.create(null);
  let out;
  try {
    out = execSync('git log --pretty=format:%cs --name-only --diff-filter=AM',
      { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  } catch (e) {
    console.warn('  ⚠ git history unavailable — falling back to file mtime');
    return null;
  }
  let date = null;
  for (const line of out.split('\n')) {
    const t = line.trim();
    if (!t) continue;
    if (/^\d{4}-\d{2}-\d{2}$/.test(t)) { date = t; continue; }
    if (date && !(t in map)) map[t] = date;   // first hit wins = most recent
  }
  return map;
}

const DATES = gitDates();
const mtime = (rel) => {
  try { return fs.statSync(path.join(ROOT, rel)).mtime.toISOString().slice(0, 10); }
  catch (e) { return new Date().toISOString().slice(0, 10); }
};
function lastmod(rel) {
  const key = rel.replace(/\\/g, '/');
  if (DATES && DATES[key]) return DATES[key];
  return mtime(key);   // untracked or brand new
}

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
  /* Must go through toUrl(), not string concatenation. `blog/index.html`
     is canonicalised to /blog/ in <loc>, so building the English
     alternate by hand produced hreflang pointing at /blog/index.html —
     a URL that is not canonical and is not in the sitemap, which breaks
     the whole cluster. Caught by check-sitemap.js. */
  const enUrl = toUrl(sub === '' ? 'index.html' : sub);
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
  `  <url>\n    <loc>${toUrl(p)}</loc>${altLinks(p)}\n    <lastmod>${lastmod(p)}</lastmod>\n  </url>`
).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml);

// ---- report ----
const localized = pages.filter(p => LOCALE_RE.test(p)).length;
const dates = {};
pages.forEach(p => { const d = lastmod(p); dates[d] = (dates[d] || 0) + 1; });
const spread = Object.keys(dates).sort();

console.log(`sitemap.xml written — ${pages.length} URLs (${localized} localized, ${localizedSubs.size} hreflang cluster(s))`);
console.log(`  lastmod: ${spread.length} distinct date(s) ` +
  (spread.length === 1 ? `(${spread[0]}) — expected once history diversifies` : `${spread[0]} … ${spread[spread.length - 1]}`));
if (!DATES) console.log('  (dates came from file mtime, not git)');
