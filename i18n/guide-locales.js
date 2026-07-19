/* ============================================================
   guide-locales.js — which guides exist in which language.

   Same contract as i18n/template-locales.js, and for the same reason:
   the English page's reciprocal hreflang and the localized page must be
   computed from ONE source, or Google silently discards the cluster.

   Note that the English guides are a mix — four are generated from
   scripts/new-guides.js and eight are hand-authored HTML — so the
   reciprocal tags are injected by scripts/fix-guide-hreflang.js rather
   than only by the generator.
   ============================================================ */
const es = require('./guides-es.js');

const BY_LOCALE = { es: es.G };
const UI = { es: es.UI };

/** Locale codes with a real translation of this guide. */
function localesFor(slug) {
  return Object.keys(BY_LOCALE).filter((code) => Boolean(BY_LOCALE[code][slug]));
}

/** Every guide translated into at least one language. */
function translatedSlugs() {
  const out = new Set();
  for (const code of Object.keys(BY_LOCALE)) Object.keys(BY_LOCALE[code]).forEach((s) => out.add(s));
  return [...out].sort();
}

module.exports = { BY_LOCALE, UI, localesFor, translatedSlugs };
