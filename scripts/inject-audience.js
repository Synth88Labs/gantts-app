/* inject-audience.js — insert the "Who uses this template" block into the
   HAND-AUTHORED English template pages the generators never touch (see
   [[content-generation-split]]). Generated English templates get it from
   gen-template-pages.js and localized ones from gen-i18n.js.

   Placement mirrors the generators: immediately before the first
   <div class="callout"> that follows the "What's included" section, which every
   template page carries. Idempotent — skips any page already containing
   id="who-uses-this", so it is safe on every build and leaves generated pages
   untouched.

   Run: node scripts/inject-audience.js   (via npm build, after gen:pages)
*/
const fs = require('fs');
const path = require('path');
const Audience = require('../i18n/template-audience.js');

const ROOT = path.join(__dirname, '..');
const TPL = path.join(ROOT, 'templates');
const CALLOUT = '<div class="callout"';

let scanned = 0, patched = 0, missing = 0;
for (const f of fs.readdirSync(TPL)) {
  if (!f.endsWith('.html')) continue;
  const slug = f.replace(/\.html$/, '');
  if (!Audience.has(slug, 'en')) { missing++; continue; }
  scanned++;
  const abs = path.join(TPL, f);
  const html = fs.readFileSync(abs, 'utf8');
  if (html.includes('id="who-uses-this"')) continue;   // already present (generated)
  const anchor = html.indexOf('id="whats-included"');
  const at = anchor === -1 ? html.indexOf(CALLOUT) : html.indexOf(CALLOUT, anchor);
  if (at === -1) { console.warn('  ! no callout anchor in', f); continue; }
  const block = Audience.render(slug, 'en') + '\n      ';
  fs.writeFileSync(abs, html.slice(0, at) + block + html.slice(at));
  patched++;
}
console.log(`inject-audience: ${scanned} template(s) with data scanned, ${patched} hand-authored patched, ${missing} without data yet.`);
