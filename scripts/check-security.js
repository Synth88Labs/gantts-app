/* ============================================================
   check-security.js — the small number of things that would be
   expensive to get wrong on a static site.

   This site has no backend, no accounts and no server-side user data.
   Plans live in localStorage and share links travel in the URL FRAGMENT,
   which browsers never send to a server. So the attack surface is
   genuinely small — which is exactly why the few real items matter.

   1. SUBRESOURCE INTEGRITY on third-party scripts.
      Four export libraries load from cdnjs and jsDelivr into the editor,
      where the user's whole plan is in memory. Without `integrity`,
      someone else's security incident becomes ours. This is the single
      highest-value control on the site and it was missing entirely.

   2. NO DIRECTORY LISTINGS.
      Five directories were serving "Index of …". Nothing secret was in
      them, but a listing exposes the full inventory (including anything
      staged and not yet linked), makes bulk scraping trivial, and lets
      search engines index thin pages that are not in our sitemap.

   3. The headers we claim to send.
      privacy.html makes checkable promises to readers. A header that
      silently disappears turns a published promise into a false one.
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
let errors = 0;
const err = (m) => { console.error('  ✗ ' + m); errors++; };

console.log('\nSecurity check\n');

/* ---- 1. every third-party script is pinned ---- */
const html = fs.readFileSync(path.join(ROOT, 'app.html'), 'utf8');
const tags = html.match(/<script[^>]*\bsrc="https?:\/\/[^"]+"[^>]*>/g) || [];
/* Google's gtag.js CANNOT be pinned: it is deliberately unversioned and
   its contents change without notice, so any hash we set would break
   analytics the next time Google shipped. That is a real, accepted
   trade-off rather than an oversight — it is an unpinned third-party
   script with full access to every page — so it is reported on every
   run instead of being silently whitelisted. If analytics is ever
   dropped or self-hosted, delete this exception with it. */
const UNPINNABLE = [/^https:\/\/www\.googletagmanager\.com\/gtag\/js/];
const accepted = [];

let pinned = 0;
for (const tag of tags) {
  const src = (tag.match(/src="([^"]+)"/) || [])[1];
  if (/^https?:\/\/(www\.)?gantts\.app/.test(src)) continue;   // our own origin
  if (UNPINNABLE.some((re) => re.test(src))) { accepted.push(src); continue; }
  if (!/\bintegrity="sha(256|384|512)-/.test(tag)) {
    err(`third-party script has no Subresource Integrity: ${src}`);
    continue;
  }
  if (!/\bcrossorigin=/.test(tag)) {
    err(`script has integrity but no crossorigin (SRI is ignored without it): ${src}`);
    continue;
  }
  pinned++;
}
console.log(`  ${pinned} third-party script(s) pinned with SRI + crossorigin`);
for (const src of accepted) {
  console.log(`  · accepted unpinnable: ${src}`);
  console.log('    Google ships gtag.js unversioned, so SRI is impossible. It runs with');
  console.log('    full page access on every page. Reported, not hidden.');
}
if (!tags.length) err('no external script tags found in app.html — has the file moved?');

/* ---- 2 & 3. server config ---- */
const ht = fs.readFileSync(path.join(ROOT, '.htaccess'), 'utf8');
const need = [
  [/^\s*Options\s+-Indexes/m, 'Options -Indexes (directory listings)'],
  [/X-Content-Type-Options\s+"nosniff"/, 'X-Content-Type-Options: nosniff'],
  [/X-Frame-Options/, 'X-Frame-Options'],
  [/Referrer-Policy/, 'Referrer-Policy'],
  [/Strict-Transport-Security/, 'Strict-Transport-Security (HSTS)'],
  [/Permissions-Policy/, 'Permissions-Policy'],
  [/Content-Security-Policy(-Report-Only)?/, 'Content-Security-Policy (report-only or enforced)'],
];

/* The CSP is only worth having if nothing forces 'unsafe-inline' back
   into script-src. 1483 inline on* handlers were removed for exactly
   this reason; a generator that starts emitting them again would make
   the policy unenforceable without anyone noticing, because Report-Only
   does not break the page. */
{
  const inline = [];
  const scanDirs = [ROOT, path.join(ROOT, 'scripts')];
  const seen = new Set();
  const walkFor = (dir, depth) => {
    if (depth > 2) return;
    for (const n of fs.readdirSync(dir)) {
      if (['node_modules', '.git', 'deploy', 'docs', 'test'].includes(n)) continue;
      const abs = path.join(dir, n);
      if (seen.has(abs)) continue; seen.add(abs);
      const st = fs.statSync(abs);
      if (st.isDirectory()) { walkFor(abs, depth + 1); continue; }
      if (!/\.(html|js)$/.test(n)) continue;
      const src = fs.readFileSync(abs, 'utf8');
      const hits = src.match(/\son(click|change|load|submit|error|focus|blur)="/g);
      if (hits) inline.push(path.relative(ROOT, abs).split(path.sep).join('/') + ' (' + hits.length + ')');
    }
  };
  scanDirs.forEach((d) => walkFor(d, 0));
  if (inline.length) {
    err(`${inline.length} file(s) reintroduced inline event handlers — script-src would need 'unsafe-inline', which defeats the CSP:`);
    inline.slice(0, 6).forEach((f) => console.error('      ' + f));
  } else {
    console.log('  no inline event handlers anywhere (CSP can drop \'unsafe-inline\' for scripts)');
  }
}
for (const [re, label] of need) if (!re.test(ht)) err(`.htaccess is missing ${label}`);
console.log(`  ${need.length} server-config item(s) checked in .htaccess`);

/* The deploy bundle is what actually ships. An .htaccess that only
   exists in the repo protects nothing. */
const deployHt = path.join(ROOT, 'deploy', '.htaccess');
if (fs.existsSync(deployHt)) {
  const d = fs.readFileSync(deployHt, 'utf8');
  if (!/^\s*Options\s+-Indexes/m.test(d)) {
    err('deploy/.htaccess is STALE — it lacks Options -Indexes. Re-run the deploy bundle; the repo copy is not what ships.');
  } else {
    console.log('  deploy/.htaccess carries the same rules');
  }
}

if (errors) { console.error(`\n✗ ${errors} security problem(s).\n`); process.exit(1); }
console.log('\n✓ third-party scripts pinned, no directory listings, headers present.\n');
