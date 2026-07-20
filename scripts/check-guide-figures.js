/* ============================================================
   check-guide-figures.js — keep diagrams localized.

   THE BUG THIS EXISTS TO PREVENT

   guide-figures.js was written because the localized guide pages were
   rendering the ENGLISH diagram. Every label inside it — "Finish →
   Start", "Today", "Baseline" — stayed English for the German,
   Spanish, French, Portuguese and Chinese reader. A translated article
   wrapped around an untranslated illustration reads worse than one
   with no illustration at all.

   Nothing caught it. Word counts were fine. Heading parity was fine.
   The failure lived inside an <svg>, where every text check we own is
   blind.

   So: a localized guide body may NOT contain a literal <svg>. It uses
   a <!--FIG:name--> token, which the generator expands per locale.
   This check enforces that, and also fails on a token naming an
   archetype that does not exist — otherwise the token survives to the
   published page as an HTML comment and the diagram is simply absent,
   which is exactly as invisible as the original bug.
   ============================================================ */

const path = require('path');
const Figures = require(path.join(__dirname, '..', 'i18n', 'guide-figures.js'));

const LOCALES = ['es', 'fr', 'de', 'pt', 'zh'];
const known = new Set(Object.keys(Figures.BY_NAME));

let errors = 0;
const err = (m) => { console.error('  ✗ ' + m); errors++; };

function bodies(entry) {
  const out = [];
  const walk = (v) => {
    if (typeof v === 'string') out.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') Object.values(v).forEach(walk);
  };
  ['lead', 'sections', 'callout', 'faq'].forEach((f) => { if (entry[f] !== undefined) walk(entry[f]); });
  return out;
}

console.log('\nGuide figures — localized diagrams, not inherited ones\n');

/* English is allowed a literal <svg> in the `figure` field only; its
   section bodies follow the same token rule so both generators stay
   interchangeable. */
const sets = { en: require('./new-guides.js').G };
LOCALES.forEach((loc) => {
  const m = require(path.join('..', 'i18n', `guides-${loc}.js`));
  sets[loc] = m.G || m;
});

let tokens = 0;
for (const [loc, set] of Object.entries(sets)) {
  for (const [slug, entry] of Object.entries(set)) {
    for (const html of bodies(entry)) {
      if (/<svg\b/.test(html)) {
        err(`${loc}/${slug}: literal <svg> in a section body — use a <!--FIG:name--> token so the diagram is drawn in ${loc}, not inherited from English`);
      }
      for (const name of Figures.tokensIn(html)) {
        tokens++;
        if (!known.has(name)) {
          err(`${loc}/${slug}: <!--FIG:${name}--> names no archetype; it would ship to the page as an invisible comment`);
        }
      }
    }
  }
}

/* Every archetype must render in every locale. A LABELS key missing
   from one locale prints "undefined" inside the diagram, which no
   HTML-level check can see either. */
for (const name of known) {
  for (const loc of ['en', ...LOCALES]) {
    const svg = Figures.expand(`<!--FIG:${name}-->`, loc);
    if (!/^<figure/.test(svg)) err(`archetype ${name} failed to render for ${loc}`);
    if (/undefined/.test(svg)) err(`archetype ${name} has a missing LABELS key for ${loc} — it renders the word "undefined"`);
  }
}

console.log(`  ${known.size} archetype(s) × 6 locales checked, ${tokens} figure token(s) in guide bodies\n`);

if (errors) {
  console.error(`✗ ${errors} figure problem(s).\n`);
  process.exit(1);
}
console.log('✓ every guide diagram is drawn in the reader’s language.\n');
