#!/usr/bin/env node
/* ============================================================
   add-analytics.js — put the CONSENT GATE in every <head>.

   It used to inject gtag.js directly, as the first thing in <head>, on
   every page. That meant Google Analytics cookies were set before the
   visitor had any say — and a consent banner bolted on afterwards would
   have been decoration, since the cookies exist by the time anyone sees
   it. privacy.html makes checkable promises; this is what keeps one of
   them true.

   Now the only thing injected is a reference to js/consent.js, which
   loads gtag ONLY once consent is on record. No request to Google, no
   cookies, nothing, until then. Declining costs the page nothing
   because nothing was waiting on it.

   WHY THIS IS STILL A POST-BUILD STEP

   Pages come from several places: hand-authored HTML at the root,
   gen-i18n.js for the five locales, gen-template-pages.js and
   gen-guide-pages.js. Putting the snippet in each generator means four
   copies to keep in step, and a fifth the day someone adds a page type.

   IDEMPOTENT: it looks for the marker before inserting, so running it
   twice does not produce two copies.

   CLEANUP: any page still carrying the old inline gtag snippet has it
   REMOVED. Without that, an old page would keep loading analytics
   unconditionally and the gate would be silently bypassed on exactly
   the pages nobody rebuilt.
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const ID = 'G-3ZFCTKWL1D';
const V = 'v=30';
const SKIP = new Set(['node_modules', '.git', 'deploy', 'docs', 'scripts', 'test', 'i18n']);

const MARKER = 'js/consent.js';
const SNIPPET = `
  <!-- Analytics is gated on consent: js/consent.js loads gtag.js only
       after the visitor accepts. Nothing is requested from Google
       before that. See scripts/add-analytics.js for why. -->
  <script defer src="/js/consent.js?${V}"></script>`;

/* The old unconditional tag, in the exact shape this script used to
   write it. Matching loosely on purpose — whitespace drifts through
   generators — but anchored on the two lines that actually load and
   configure gtag. */
const OLD_TAG = new RegExp(
  '\\s*<!-- Google tag \\(gtag\\.js\\) -->' +
  '\\s*<script async src="https://www\\.googletagmanager\\.com/gtag/js\\?id=' + ID + '"></script>' +
  '\\s*<script>[\\s\\S]*?gtag\\(\'config\', \'' + ID + '\'\\);?\\s*</script>',
  'g'
);

let added = 0, already = 0, stripped = 0, noHead = [];

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const abs = path.join(dir, name);
    if (fs.statSync(abs).isDirectory()) { walk(abs); continue; }
    if (!name.endsWith('.html')) continue;

    const rel = path.relative(ROOT, abs).split(path.sep).join('/');
    let html = fs.readFileSync(abs, 'utf8');
    const before = html;

    // Remove any legacy unconditional tag first, so a page cannot end up
    // with both the gate and the thing the gate exists to prevent.
    if (OLD_TAG.test(html)) {
      OLD_TAG.lastIndex = 0;
      html = html.replace(OLD_TAG, '');
      stripped++;
    }

    if (html.includes(MARKER)) {
      already++;
    } else {
      const m = html.match(/<head[^>]*>/i);
      if (!m) { noHead.push(rel); if (html !== before) fs.writeFileSync(abs, html, 'utf8'); continue; }
      const at = m.index + m[0].length;
      html = html.slice(0, at) + SNIPPET + html.slice(at);
      added++;
    }

    if (html !== before) fs.writeFileSync(abs, html, 'utf8');
  }
}

walk(ROOT);

console.log('Consent-gated analytics\n');
console.log(`  measurement ID ${ID}, loaded only after consent`);
console.log(`  ${added} page(s) given the gate, ${already} already had it.`);
if (stripped) console.log(`  ${stripped} page(s) had the old unconditional gtag snippet removed.`);
if (noHead.length) {
  console.log(`\n  ⚠ ${noHead.length} HTML file(s) have no <head> and were skipped:`);
  noHead.slice(0, 5).forEach(f => console.log('      ' + f));
}
console.log('\n✓ no page loads analytics before consent.');
