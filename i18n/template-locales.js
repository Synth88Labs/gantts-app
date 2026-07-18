/* ============================================================
   template-locales.js — which template detail pages exist in which
   language. Single source of truth for two scripts that must agree:

     gen-i18n.js          writes /<code>/templates/<slug>.html
     gen-template-pages.js writes the English page, which has to carry
                           the *reciprocal* hreflang back

   Google discards a hreflang cluster where the pages do not point at
   each other, so these two must never be computed independently.

   A locale appears for a slug only when a real translation exists.
   Partial coverage is fine — a three-page cluster is valid; a cluster
   pointing at pages that do not exist is not.
   ============================================================ */
const es = require('./templates-es.js');

const BY_LOCALE = { es: es.T };
const UI = { es: es.UI };

/** Locale codes that have a real translation of this template. */
function localesFor(slug) {
  return Object.keys(BY_LOCALE).filter((code) => Boolean(BY_LOCALE[code][slug]));
}

/** Every slug translated into at least one language. */
function translatedSlugs() {
  const out = new Set();
  for (const code of Object.keys(BY_LOCALE)) Object.keys(BY_LOCALE[code]).forEach((s) => out.add(s));
  return [...out].sort();
}

module.exports = { BY_LOCALE, UI, localesFor, translatedSlugs };
