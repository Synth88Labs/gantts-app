/* inject-takeaways.js, insert the "key takeaways" block into the HAND-AUTHORED
   English guides, which the generators never touch (see
   [[content-generation-split]]). Generated English guides get the block from
   gen-guide-pages.js and localized ones from gen-i18n.js; this closes the gap
   for the 8 static guides.

   Idempotent: skips any page that already carries id="key-takeaways", so it is
   safe on every build and leaves generated guides alone. The block is inserted
   as the first child of the first <div class="prose">, matching the generators.

   Run: node scripts/inject-takeaways.js   (via npm build, after gen:pages)
*/
const fs = require('fs');
const path = require('path');
const Takeaways = require('../i18n/takeaways.js');

const ROOT = path.join(__dirname, '..');
const BLOG = path.join(ROOT, 'blog');
const PROSE = '<div class="prose">';

let scanned = 0, patched = 0;
for (const f of fs.readdirSync(BLOG)) {
  if (!f.endsWith('.html') || f === 'index.html') continue;
  const slug = f.replace(/\.html$/, '');
  if (!Takeaways.has(slug, 'en')) continue;   // no data for this guide
  scanned++;
  const abs = path.join(BLOG, f);
  const html = fs.readFileSync(abs, 'utf8');
  if (html.includes('id="key-takeaways"')) continue;   // already present (generated)
  const i = html.indexOf(PROSE);
  if (i === -1) { console.warn('  ! no .prose in', f); continue; }
  const at = i + PROSE.length;
  const block = '\n' + Takeaways.render(slug, 'en');
  fs.writeFileSync(abs, html.slice(0, at) + block + html.slice(at));
  patched++;
}
console.log(`inject-takeaways: ${scanned} guide(s) with data scanned, ${patched} hand-authored guide(s) patched (generated ones already carry the block).`);
