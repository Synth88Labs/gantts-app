#!/usr/bin/env node
/* ============================================================
   check-asset-version.js — a changed asset must get a new ?v=.

   WHY THIS EXISTS

   Every page links css/site.css and js/site.js with a ?v=N cache
   buster. Change the file without changing N and returning visitors
   keep the old copy from cache — the change is live for you and
   invisible to everyone who has been to the site before.

   This has happened twice, both times found by accident:

     - .tpl-hero shipped without a bump; caught only because a German
       page measured its preview at the SVG's untouched natural width.
     - .promo shipped without a bump; caught only because the German
       banner rendered unstyled.

   Both times the fix was trivial and the detection was luck. Nothing
   in the build knew the rule, so it stayed a matter of remembering.

   HOW IT WORKS

   The content hash of each versioned asset is recorded in
   .asset-versions.json alongside the version the HTML currently
   claims. If an asset's hash changed but its version did not, the
   build fails and prints the exact next version to use.

   Run with --update to accept the current state, which is what you do
   after bumping the version deliberately.
   ============================================================ */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const STATE = path.join(ROOT, '.asset-versions.json');

/* The assets that carry a ?v= in the HTML. Add a row here when a new
   versioned asset appears — an asset nobody records is an asset nobody
   protects. */
const ASSETS = [
  { file: 'css/site.css', query: 'site.css' },
  { file: 'js/site.js', query: 'site.js' },
];

const sha = (p) => crypto.createHash('sha1')
  .update(fs.readFileSync(p)).digest('hex').slice(0, 12);

/* The version actually referenced by the built pages, not the one the
   generator constant claims — the pages are what visitors fetch. */
function versionInPages(queryName) {
  const seen = new Set();
  const SKIP = new Set(['node_modules', '.git', 'deploy', 'docs', '.claude', 'scripts']);
  const re = new RegExp(queryName.replace('.', '\\.') + '\\?v=(\\d+)', 'g');
  (function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
      if (SKIP.has(name)) continue;
      const abs = path.join(dir, name);
      if (fs.statSync(abs).isDirectory()) { walk(abs); continue; }
      if (!name.endsWith('.html')) continue;
      const html = fs.readFileSync(abs, 'utf8');
      let m;
      while ((m = re.exec(html))) seen.add(m[1]);
    }
  })(ROOT);
  return [...seen];
}

const update = process.argv.includes('--update');
const prev = fs.existsSync(STATE) ? JSON.parse(fs.readFileSync(STATE, 'utf8')) : {};
const next = {};
const errors = [];

console.log('Asset version check\n');

for (const { file, query } of ASSETS) {
  const abs = path.join(ROOT, file);
  if (!fs.existsSync(abs)) { errors.push(`${file} — missing`); continue; }

  const hash = sha(abs);
  const versions = versionInPages(query);

  /* Split versions are their own bug: some pages would get the new
     asset and some the old, which is how site.js sat at v=21 on 38
     pages while 147 were on v=23. */
  if (versions.length > 1) {
    errors.push(`${file} — pages disagree on the version: ${versions.map(v => 'v=' + v).join(', ')}`
      + '\n      every page must reference the same one');
  }
  const version = versions[0] || null;
  if (!version) { errors.push(`${file} — no page references it with ?v=`); continue; }

  next[file] = { hash, version };
  const was = prev[file];

  if (was && was.hash !== hash && was.version === version) {
    errors.push(`${file} — content changed but ?v=${version} did not.`
      + `\n      Returning visitors will keep the cached copy and never see the change.`
      + `\n      Bump to v=${Number(version) + 1} in the three generators and across the HTML, then rebuild.`);
  }
  const changed = was && was.hash !== hash;
  console.log(`  ${changed ? '~' : ' '} ${file.padEnd(16)} v=${version}  ${hash}${changed ? '  (content changed)' : ''}`);
}

if (errors.length && !update) {
  console.error('\n✗ asset version check failed:\n');
  for (const e of errors) console.error('  ✗ ' + e);
  process.exit(1);
}

fs.writeFileSync(STATE, JSON.stringify(next, null, 2) + '\n');
console.log(update ? '\n✓ asset versions recorded (--update).'
  : '\n✓ asset versions — every changed asset carries a new ?v=.');
