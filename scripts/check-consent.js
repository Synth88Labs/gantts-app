/* ============================================================
   check-consent.js — analytics must not load before consent.

   THE FAILURE THIS CATCHES

   Analytics used to be injected as the first thing in every <head>, so
   cookies were set before anyone was asked. A banner added on top of
   that is decoration: the thing it claims to control has already
   happened. privacy.html now states plainly that no request is made to
   Google until you accept, so a single page carrying the old
   unconditional tag would make a published promise false.

   That regression is easy to reintroduce — a generator that still has
   the old snippet, a hand-edited page, a partial rebuild — and it is
   invisible on the page itself. Nothing looks wrong; the banner still
   appears; the cookies are just already there.

   So: no HTML file may reference googletagmanager directly, and every
   page with a <head> must carry the gate instead.
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SKIP = new Set(['node_modules', '.git', 'deploy', 'docs', 'scripts', 'test', 'i18n']);
const GATE = 'js/consent.js';

let errors = 0, gated = 0, checked = 0;
const direct = [], missing = [];

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const abs = path.join(dir, name);
    if (fs.statSync(abs).isDirectory()) { walk(abs); continue; }
    if (!name.endsWith('.html')) continue;

    const rel = path.relative(ROOT, abs).split(path.sep).join('/');
    const html = fs.readFileSync(abs, 'utf8');
    checked++;

    // The gate loads gtag from JS, so any reference in the MARKUP means
    // something is loading it unconditionally again.
    if (/<script[^>]+googletagmanager\.com/i.test(html)) direct.push(rel);

    if (!/<head[^>]*>/i.test(html)) continue;
    if (html.includes(GATE)) gated++; else missing.push(rel);
  }
}

console.log('\nConsent gate\n');
walk(ROOT);

if (direct.length) {
  console.error(`  ✗ ${direct.length} page(s) load googletagmanager directly from markup —`);
  console.error('    these set cookies before the visitor is asked, and privacy.html says they do not:');
  direct.slice(0, 8).forEach((f) => console.error('      ' + f));
  errors += direct.length;
}
if (missing.length) {
  console.error(`  ✗ ${missing.length} page(s) with a <head> are missing ${GATE}:`);
  missing.slice(0, 8).forEach((f) => console.error('      ' + f));
  errors += missing.length;
}

/* The banner has to speak every language the site does. It is the one
   piece of UI a visitor cannot dismiss without reading, so an English
   banner on a Chinese page is the worst place for a missing string. */
const consent = fs.readFileSync(path.join(ROOT, 'js', 'consent.js'), 'utf8');
for (const loc of ['en', 'es', 'fr', 'de', 'pt', 'zh']) {
  if (!new RegExp('\\n\\s{4}' + loc + ':\\s*\\{').test(consent)) {
    console.error(`  ✗ js/consent.js has no banner copy for "${loc}"`);
    errors++;
  }
}

/* Declining must be as easy as accepting. This cannot be fully checked
   statically, but giving the two buttons different widths is the usual
   way it goes wrong, so assert the rule that keeps them equal is still
   present.

   The rule lives in js/consent.js, not a stylesheet: the banner injects
   its own CSS because /app.html loads styles.css while the marketing
   pages load site.css, and the banner rendered completely unstyled in
   the editor when its rules lived in only one of them. */
if (!/\.consent-btn\{[^}]*min-width:\s*116px/.test(consent)) {
  console.error('  ✗ js/consent.js no longer forces equal width on the consent buttons —');
  console.error('    a decline that is smaller than the accept is not a free choice.');
  errors++;
}

/* The banner must not depend on a host stylesheet. If someone moves the
   rules back out into site.css, /app.html silently loses them again. */
if (!/id\s*=\s*'consentStyles'|consentStyles/.test(consent) || !/\.consent\{position:fixed/.test(consent)) {
  console.error('  ✗ js/consent.js no longer carries its own styles — the banner will render');
  console.error('    unstyled on /app.html, which loads styles.css rather than site.css.');
  errors++;
}

/* A consent prompt must not be able to hide itself. Sliding in from
   translateY(100%) means that if the animation never advances (a
   throttled background tab), the banner rests entirely below the fold
   and the visitor is never actually asked. */
if (/@keyframes consent-in\{from\{transform:translateY\(100%\)/.test(consent)) {
  console.error('  ✗ the consent banner animates in from translateY(100%) — if the animation');
  console.error('    does not run, it rests off-screen and nobody is ever asked. Use a small offset.');
  errors++;
}

console.log(`  ${checked} HTML file(s) checked, ${gated} carrying the gate`);
console.log('  6 locale(s) of banner copy, equal-prominence rule present');

if (errors) { console.error(`\n✗ ${errors} consent problem(s).\n`); process.exit(1); }
console.log('\n✓ no page loads analytics before consent.\n');
