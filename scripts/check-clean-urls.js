#!/usr/bin/env node
/* ============================================================
   check-clean-urls.js — one page, one address.

   A directory index is addressed by its directory: /, /blog/,
   /de/blog/. The index.html form is a filesystem detail and must never
   appear in anything we publish — not in an href, not in a canonical,
   not in og:url, not in a hreflang, not in a JSON-LD @id or breadcrumb
   item, not in an <option value>, not in the sitemap.

   WHY THIS EXISTS

   The site has had this bug three separate times, each caught only
   after it shipped:

     / vs /index.html          366 links
     /blog/ vs /blog/index.html 308 links
     canonical, og:url, hreflang, JSON-LD and switcher options   125 URLs

   Each fix was correct and each was partial, because the audit was
   done by grepping for the shape that had just been noticed. The last
   one hid twelve more occurrences from its own scan merely by putting
   a space after the JSON key's colon.

   The cost is real: a canonical pointing at index.html names a URL
   that .htaccess 301s away, so the two addresses keep splitting
   ranking signal — the exact problem the canonicalisation was for.

   So this is not a grep for a known shape. It fails on ANY published
   index.html reference, in any of the file types we ship.
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SKIP = new Set(['node_modules', '.git', 'deploy', 'docs', 'scripts']);

/* Anything that addresses a page. Deliberately broad: it is easier to
   add an exemption than to notice a form nobody thought to grep for. */
const PATTERNS = [
  { what: 'href',      re: /href=["'][^"']*index\.html(?:[?#][^"']*)?["']/gi },
  { what: 'canonical', re: /rel=["']canonical["']\s+href=["'][^"']*index\.html[^"']*["']/gi },
  { what: 'og:url',    re: /og:url["']\s+content=["'][^"']*index\.html[^"']*["']/gi },
  { what: 'hreflang',  re: /hreflang=["'][^"']*["']\s+href=["'][^"']*index\.html[^"']*["']/gi },
  { what: 'json-ld',   re: /"(?:@id|item|url)"\s*:\s*"[^"]*index\.html[^"]*"/gi },
  { what: 'option',    re: /<option\s+value=["'][^"']*index\.html[^"']*["']/gi },
  { what: 'sitemap',   re: /<loc>[^<]*index\.html[^<]*<\/loc>/gi },
];

/* app.html is an application shell, not an indexable document, and the
   404 page is served by the server rather than linked. Neither carries
   a canonical we care about — but they are still scanned, because a
   stale link inside them is just as wrong. No exemptions today. */
const EXEMPT = [];

let scanned = 0;
const findings = [];

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const abs = path.join(dir, name);
    if (fs.statSync(abs).isDirectory()) { walk(abs); continue; }
    if (!/\.(html|xml)$/i.test(name)) continue;

    const rel = path.relative(ROOT, abs).split(path.sep).join('/');
    if (EXEMPT.includes(rel)) continue;
    scanned++;

    const html = fs.readFileSync(abs, 'utf8');
    for (const { what, re } of PATTERNS) {
      for (const m of html.matchAll(re)) {
        findings.push({ rel, what, snippet: m[0].slice(0, 90) });
      }
    }
  }
}

walk(ROOT);

console.log('Clean-URL check\n');
if (!findings.length) {
  console.log(`✓ clean URLs — ${scanned} file(s), no index.html in any published reference.`);
  process.exit(0);
}

const byFile = {};
for (const f of findings) (byFile[f.rel] = byFile[f.rel] || []).push(f);
for (const [rel, list] of Object.entries(byFile)) {
  console.log(`  ${rel}`);
  for (const f of list) console.log(`    ✗ ${f.what}: ${f.snippet}`);
}
console.log(`\n✗ ${findings.length} index.html reference(s) in ${Object.keys(byFile).length} file(s).`);
console.log('  A directory index is addressed by its directory. Emit /blog/, not /blog/index.html.');
process.exit(1);
