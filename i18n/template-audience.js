/* template-audience.js, "Who uses this template" answer block for template
   detail pages. Turns a download page into a helpful answer page and gives AI
   answer engines an extractable who/when statement.

   ONE source of truth for all 6 languages, same design as [[takeaways]]:
     - scripts/gen-template-pages.js → generated English templates (78)
     - scripts/gen-i18n.js           → localized templates (es/fr/de/pt/zh)
     - scripts/inject-audience.js    → hand-authored English templates (22)

   Content is bulky (100 templates × 6 languages), so it lives in per-language
   JSON files under i18n/audience/ that are authored/written by native passes,
   not inlined here. Each file is { slug: 'one short paragraph', ... }. Missing
   file or slug → render() returns '' so partial coverage degrades gracefully. */
const fs = require('fs');
const path = require('path');

const HEADING = {
  en: 'Who uses this template', es: 'Quién usa esta plantilla',
  fr: 'Qui utilise ce modèle', de: 'Wer diese Vorlage nutzt',
  pt: 'Quem usa este modelo', zh: '谁会用这个模板',
};

const DIR = path.join(__dirname, 'audience');
function load(lang) {
  try { return JSON.parse(fs.readFileSync(path.join(DIR, lang + '.json'), 'utf8')); }
  catch (e) { return {}; }
}
const LANGS = { en: load('en'), es: load('es'), fr: load('fr'), de: load('de'), pt: load('pt'), zh: load('zh') };

const esc = (s) => String(s).replace(/&(?!(amp|lt|gt|quot|#\d+);)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// HTML block for a template+lang, or '' if none. Inline HTML in the paragraph
// is allowed (kept as-is); only the heading is escaped.
function render(slug, lang) {
  const text = (LANGS[lang] || {})[slug];
  if (!text) return '';
  const heading = HEADING[lang] || HEADING.en;
  return `      <div class="callout" id="who-uses-this" role="note">
        <p class="takeaways-title"><strong>${esc(heading)}</strong></p>
        <p>${text}</p>
      </div>`;
}

function has(slug, lang) { return !!(LANGS[lang] || {})[slug]; }
function count(lang) { return Object.keys(LANGS[lang] || {}).length; }

module.exports = { HEADING, render, has, count };
