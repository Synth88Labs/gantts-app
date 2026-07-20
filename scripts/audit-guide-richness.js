/* ============================================================
   audit-guide-richness.js — what a guide actually GIVES the reader.

   check-content-depth.js already compares word counts, and it passes
   today. It passed while the localized guides were thin, too, because
   word count is a proxy for effort, not for usefulness: a page can hit
   its word target with more prose and still contain no example the
   reader can copy, no numbers to follow, and one diagram.

   So this counts the things a reader can actually USE:

     fig   inline <svg> diagrams (the illustration count)
     tbl   <table> — comparison and worked-number blocks
     step  <ol> — tutorials and procedures, the "show me how" bit
     ex    worked examples, detected by the marker class we emit
     num   concrete figures (dates, days, %, currency) in the body

   A guide with 1200 words, one diagram and zero tables is not the same
   product as a guide with 1200 words, four diagrams, a worked example
   and a step-by-step. Word count cannot tell them apart. This can.
   ============================================================ */

const path = require('path');

const LOCALES = ['en', 'es', 'fr', 'de', 'pt', 'zh'];

function load(loc) {
  if (loc === 'en') {
    const out = {};
    Object.assign(out, require('./new-guides.js').G);

    /* The other eight English guides are hand-authored pages, not model
       entries, so `require` cannot see them. They were invisible to this
       audit entirely — which is how eight 2000-word guides sat with one
       diagram and no worked example while the report showed nothing
       wrong. Read them off disk and synthesise an entry so they are
       measured by exactly the same rules. */
    const fs = require('fs');
    const dir = path.join(__dirname, '..', 'blog');
    for (const f of fs.readdirSync(dir)) {
      if (!f.endsWith('.html') || f === 'index.html') continue;
      const slug = f.slice(0, -5);
      if (out[slug]) continue;                       // generated; already loaded
      const html = fs.readFileSync(path.join(dir, f), 'utf8');
      /* Capture from <article>, NOT from <div class="prose">. The hero
         <figure class="fig"> sits between them, so a prose-only capture
         reports every hand-authored page as having zero diagrams when
         each has one. */
      const m = html.match(/<article[^>]*>([\s\S]*?)<\/article>/);
      if (m) out[slug] = { _handAuthored: true, sections: [['', m[1]]] };
    }
    return out;
  }
  const m = require(path.join('..', 'i18n', `guides-${loc}.js`));
  return m.G || m;
}

/* Body text of one guide entry, concatenated. Fields differ slightly
   between the generated model and the localized files, so take every
   string we can find rather than naming them. */
function bodyOf(entry) {
  const parts = [];
  const walk = (v) => {
    if (typeof v === 'string') parts.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') Object.values(v).forEach(walk);
  };
  ['lead', 'figIntro', 'figure', 'sections', 'callout', 'faq'].forEach((f) => {
    if (entry[f] !== undefined) walk(entry[f]);
  });
  return parts.join('\n');
}

function words(html) {
  const text = html.replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/<[^>]+>/g, ' ');
  // CJK has no spaces; count glyphs and scale to a comparable "word".
  const cjk = (text.match(/[㐀-鿿豈-﫿]/g) || []).length;
  const latin = (text.replace(/[㐀-鿿豈-﫿]/g, ' ')
    .match(/[A-Za-zÀ-ÿ0-9][A-Za-zÀ-ÿ0-9'’-]*/g) || []).length;
  return latin + Math.round(cjk / 1.7);
}

/* The localized guide files carry NO `figure` field — the diagram is
   drawn per locale at build time by guide-figures.js. Counting <svg>
   in the source therefore reports 0 for every locale and 1 for
   English, which is an artefact of where the markup lives, not a real
   difference. Resolve the figure the same way the generator does. */
const Figures = require('../i18n/guide-figures.js');

function metrics(entry, slug, loc) {
  const html = bodyOf(entry);
  /* In-prose diagrams are <!--FIG:name--> tokens, not <svg> — they are
     expanded per locale at build time. Counting only <svg> reported
     every deepened guide as having one diagram when it had four. */
  let fig = (html.match(/<svg\b/g) || []).length + Figures.tokensIn(html).length;
  if (loc !== 'en' && Figures.figure(slug, loc, '')) fig += 1;
  return {
    words: words(html),
    fig,
    tbl: (html.match(/<table\b/g) || []).length,
    step: (html.match(/<ol\b/g) || []).length,
    ex: (html.match(/class="[^"]*\bworked\b/g) || []).length,
    num: (html.replace(/<[^>]+>/g, ' ')
      .match(/\b\d+(?:[.,]\d+)?\s*(?:%|days?|weeks?|jours?|Tage?|días?|dias?|天|周|€|\$|£)/gi) || []).length,
  };
}

const data = {};
/* Do NOT swallow a load failure. An earlier version caught it and used
   {} instead, so a guide file that threw was reported as "0 pages below
   the floor" — a clean pass produced by there being nothing to check. */
LOCALES.forEach((loc) => { data[loc] = load(loc); });

const slugs = Object.keys(data.en);

console.log('\nGuide richness — what each page gives the reader');
console.log('  fig=diagrams  tbl=tables  step=<ol> tutorials  ex=worked examples  num=concrete figures\n');

let thin = 0;
const FLOOR = { fig: 2, tbl: 1, step: 1, ex: 1 };

for (const slug of slugs) {
  console.log('  ' + slug);
  for (const loc of LOCALES) {
    const e = data[loc][slug];
    if (!e) { console.log('    ' + loc + '   — missing'); continue; }
    const m = metrics(e, slug, loc);
    const short = Object.entries(FLOOR).filter(([k, v]) => m[k] < v).map(([k]) => k);
    if (short.length) thin++;
    console.log(
      '    ' + loc.padEnd(4) +
      String(m.words).padStart(5) + 'w  ' +
      'fig ' + m.fig + '  tbl ' + m.tbl + '  step ' + m.step +
      '  ex ' + m.ex + '  num ' + String(m.num).padStart(2) +
      (short.length ? '   ← no ' + short.join(', ') : '')
    );
  }
  console.log('');
}

console.log('  ' + thin + ' guide/locale page(s) below the richness floor ' +
  '(' + Object.entries(FLOOR).map(([k, v]) => k + '≥' + v).join(', ') + ')');

/* Report-only until every page clears the floor, then enforce. Passing
   --strict makes it a gate; `npm run check:richness` sets it once the
   localized rebuild has landed. Gating early would just mean a red
   suite that everyone learns to ignore, which is how the 55% depth
   floor ended up tolerating 55%. */
if (process.argv.includes('--strict') && thin) {
  console.error('\n✗ ' + thin + ' page(s) below the richness floor.\n');
  process.exit(1);
}
console.log('');
