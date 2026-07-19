#!/usr/bin/env node
/* ============================================================
   add-analytics.js — put the Google Analytics tag in every <head>.

   WHY THIS IS A POST-BUILD STEP AND NOT FIVE EDITS

   Pages come from several places: hand-authored HTML at the root,
   scripts/gen-i18n.js for the five locales, gen-template-pages.js and
   gen-guide-pages.js for the generated content. Pasting the snippet
   into each generator means four copies of a measurement ID that must
   never disagree, and a fifth the day someone adds a page type.

   So it runs last, over the built tree, and is IDEMPOTENT — it looks
   for the measurement ID before inserting, so running it twice does
   not produce two tags (which would double every pageview and quietly
   halve every conversion rate).

   POSITION MATTERS. Google asks for it "as the first item in <head>",
   and it goes immediately after <head> here rather than before </head>
   so that a slow stylesheet cannot delay the tag.

   The tag is async, so it never blocks the first paint.
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const ID = 'G-3ZFCTKWL1D';
const SKIP = new Set(['node_modules', '.git', 'deploy', 'docs', 'scripts', 'test', 'i18n']);

const SNIPPET = `
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=${ID}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${ID}');
  </script>`;

let added = 0, already = 0, noHead = [];

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const abs = path.join(dir, name);
    if (fs.statSync(abs).isDirectory()) { walk(abs); continue; }
    if (!name.endsWith('.html')) continue;

    const rel = path.relative(ROOT, abs).split(path.sep).join('/');
    let html = fs.readFileSync(abs, 'utf8');

    // Idempotent: a second tag would double every pageview.
    if (html.includes(ID)) { already++; continue; }

    const m = html.match(/<head[^>]*>/i);
    if (!m) { noHead.push(rel); continue; }

    const at = m.index + m[0].length;
    html = html.slice(0, at) + SNIPPET + html.slice(at);
    fs.writeFileSync(abs, html, 'utf8');
    added++;
  }
}

walk(ROOT);

console.log('Analytics tag\n');
console.log(`  measurement ID ${ID}`);
console.log(`  ${added} page(s) tagged, ${already} already had it.`);
if (noHead.length) {
  console.log(`\n  ⚠ ${noHead.length} HTML file(s) have no <head> and were skipped:`);
  noHead.slice(0, 5).forEach(f => console.log('      ' + f));
}
console.log('\n✓ analytics tag present on every page with a <head>.');
