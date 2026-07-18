#!/usr/bin/env node
/* ============================================================
   check-seo-i18n.js — enforce full SEO markup on localized pages.

   check-seo.js only looks at title/description length and whether
   any JSON-LD exists. That is not enough for a multilingual site: a
   localized page can pass it while quietly missing the entity graph,
   og:locale, or a self-referencing canonical — all of which cost
   rankings in that market and none of which are visible on screen.

   Enforced per localized page:
     - title and meta description present, within SERP display limits
     - canonical is self-referencing and matches the file's own URL
     - <html lang> matches the locale
     - og:locale set, og:locale:alternate lists the siblings
     - og:title/description/url/image + twitter:title/description/image
     - JSON-LD parses, uses @graph, and contains Organization +
       WebSite with the shared @ids so all languages resolve to one
       brand entity rather than five
     - inLanguage declared and matching the locale
     - description differs from the English original (i.e. actually
       translated, not copy-pasted)

   Usage: node scripts/check-seo-i18n.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const { LOCALES } = require('../i18n/content.js');

const ROOT = path.join(__dirname, '..');
const ORIGIN = 'https://gantts.app';
const SUBS = ['', 'templates.html', 'blog/index.html'];
// Limits are in Latin-equivalent units, not raw characters. Google
// truncates by pixel width, and a CJK glyph occupies roughly two Latin
// character widths — so counting characters flags perfectly good
// Chinese copy as "thin" and would push us to pad it pointlessly.
const TITLE_MAX = 60, DESC_MIN = 70, DESC_MAX = 160;
const CJK = /[　-鿿＀-￯]/;
const displayLen = (s) => [...String(s)].reduce((n, ch) => n + (CJK.test(ch) ? 2 : 1), 0);

let errors = 0, warnings = 0, checked = 0;
const err = (f, m) => { console.error(`  ✗ ${f} — ${m}`); errors++; };
const warn = (f, m) => { console.warn(`  ⚠ ${f} — ${m}`); warnings++; };

const meta = (html, attr, name) => {
  const re = new RegExp(`<meta\\s+${attr}=["']${name}["']\\s+content=["']([^"']*)["']`, 'i');
  const m = html.match(re); return m ? m[1] : null;
};
const metaAll = (html, attr, name) => {
  const re = new RegExp(`<meta\\s+${attr}=["']${name}["']\\s+content=["']([^"']*)["']`, 'gi');
  return [...html.matchAll(re)].map(m => m[1]);
};

// English descriptions, to catch untranslated copies.
const enDesc = {};
for (const sub of SUBS) {
  const f = sub === '' ? 'index.html' : sub;
  if (fs.existsSync(path.join(ROOT, f))) {
    enDesc[sub] = meta(fs.readFileSync(path.join(ROOT, f), 'utf8'), 'name', 'description');
  }
}

console.log('\nLocalized SEO check\n');

for (const loc of LOCALES) {
  for (const sub of SUBS) {
    const rel = `${loc.code}/${sub || 'index.html'}`;
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) { err(rel, 'file missing'); continue; }
    checked++;
    const html = fs.readFileSync(abs, 'utf8');
    const expectUrl = sub === '' ? `${ORIGIN}/${loc.code}/` : `${ORIGIN}/${loc.code}/${sub}`;

    // title / description
    const title = (html.match(/<title>([^<]*)<\/title>/i) || [])[1];
    if (!title) err(rel, 'no <title>');
    else if (displayLen(title) > TITLE_MAX) warn(rel, `title ${displayLen(title)} display units (>${TITLE_MAX}, will truncate in SERPs)`);

    const desc = meta(html, 'name', 'description');
    if (!desc) err(rel, 'no meta description');
    else {
      if (displayLen(desc) > DESC_MAX) warn(rel, `description ${displayLen(desc)} display units (>${DESC_MAX})`);
      if (displayLen(desc) < DESC_MIN) warn(rel, `description only ${displayLen(desc)} display units (<${DESC_MIN}, thin)`);
      if (enDesc[sub] && desc === enDesc[sub]) err(rel, 'description is identical to the English one — not translated');
    }

    // canonical must point at itself
    const canon = (html.match(/<link rel=["']canonical["']\s+href=["']([^"']+)["']/i) || [])[1];
    if (!canon) err(rel, 'no canonical');
    else if (canon !== expectUrl) err(rel, `canonical is ${canon}, expected ${expectUrl}`);

    // html lang
    const lang = (html.match(/<html[^>]*\slang=["']([^"']+)["']/i) || [])[1];
    if (lang !== loc.hreflang) err(rel, `<html lang="${lang}"> should be "${loc.hreflang}"`);

    // robots
    if (!meta(html, 'name', 'robots')) warn(rel, 'no robots meta');

    // Open Graph / Twitter
    for (const [attr, name] of [['property', 'og:title'], ['property', 'og:description'],
      ['property', 'og:url'], ['property', 'og:image'], ['property', 'og:locale'],
      ['name', 'twitter:title'], ['name', 'twitter:description'], ['name', 'twitter:image']]) {
      if (!meta(html, attr, name)) err(rel, `missing ${name}`);
    }
    const ogLocale = meta(html, 'property', 'og:locale');
    if (ogLocale && ogLocale !== loc.ogLocale) err(rel, `og:locale is ${ogLocale}, expected ${loc.ogLocale}`);
    const ogUrl = meta(html, 'property', 'og:url');
    if (ogUrl && ogUrl !== expectUrl) err(rel, `og:url is ${ogUrl}, expected ${expectUrl}`);
    const alts = metaAll(html, 'property', 'og:locale:alternate');
    if (alts.length < LOCALES.length) warn(rel, `only ${alts.length} og:locale:alternate tag(s)`);

    // structured data
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => m[1]);
    if (!blocks.length) { err(rel, 'no JSON-LD'); continue; }
    let data;
    try { data = JSON.parse(blocks[0]); } catch (e) { err(rel, 'JSON-LD does not parse: ' + e.message.slice(0, 60)); continue; }
    const nodes = data['@graph'] || [data];
    if (!data['@graph']) warn(rel, 'JSON-LD is not an @graph');
    const types = nodes.map(n => n['@type']);
    if (!types.includes('Organization')) err(rel, 'JSON-LD missing Organization node');
    if (!types.includes('WebSite')) err(rel, 'JSON-LD missing WebSite node');
    const org = nodes.find(n => n['@type'] === 'Organization');
    if (org && org['@id'] !== ORIGIN + '/#org') {
      err(rel, `Organization @id is ${org['@id']} — must be shared across locales so all languages map to one entity`);
    }
    const page = nodes.find(n => /Page$/.test(n['@type'] || ''));
    if (!page) err(rel, 'JSON-LD has no *Page node');
    else if (page.inLanguage !== loc.hreflang) err(rel, `JSON-LD inLanguage is ${page.inLanguage}, expected ${loc.hreflang}`);
  }
}

console.log('');
if (errors) {
  console.error(`✗ ${errors} error(s), ${warnings} warning(s) across ${checked} localized page(s).\n`);
  process.exit(1);
}
console.log(`✓ Localized SEO complete — ${checked} page(s) across ${LOCALES.length} locales.${warnings ? ' ' + warnings + ' warning(s).' : ''}\n`);
