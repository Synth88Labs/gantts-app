#!/usr/bin/env node
/* ============================================================
   fix-site-meta.js — sitewide footer links + schema for the
   "normal" pages that had none.

   SCHEMA STRATEGY (one type per page role — mixing them tells
   Google the wrong thing about what a URL is):
     app.html          -> SoftwareApplication   (the tool)
     templates.html    -> CollectionPage + ItemList (the hub)
     templates/*.html  -> HowTo + FAQPage       (do-this-then-that)
     blog/*.html       -> BlogPosting + FAQPage (editorial)
     about.html        -> AboutPage
     contact.html      -> ContactPage
     terms/privacy     -> WebPage
   Only the last group was missing, so only it is injected here.

   Also appends Contact / Terms / GitHub to every footer.

   Idempotent — safe to run repeatedly.
   Usage: node scripts/fix-site-meta.js
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const ORIGIN = 'https://gantts.app';
const GH = 'https://github.com/Synth88Labs/gantts-app';
const EMAIL = 'synth88labs@gmail.com';
const SKIP = new Set(['node_modules', 'scripts', 'docs', '.claude', '.git', 'deploy', 'i18n',
  'es', 'fr', 'de', 'pt', 'zh', 'templates/files', 'templates/img']);

function walk(dir, base = '') {
  let out = [];
  for (const n of fs.readdirSync(dir)) {
    const rel = (base ? base + '/' : '') + n;
    if (SKIP.has(n) || SKIP.has(rel)) continue;
    const abs = path.join(dir, n);
    if (fs.statSync(abs).isDirectory()) out = out.concat(walk(abs, rel));
    else if (n.endsWith('.html')) out.push(rel.replace(/\\/g, '/'));
  }
  return out;
}

const publisher = {
  '@type': 'Organization',
  name: 'gantts.app',
  url: ORIGIN + '/',
  logo: ORIGIN + '/assets/logo-mark.svg',
  email: EMAIL,
  sameAs: [GH],
};

function crumbs(name, url) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: ORIGIN + '/' },
      { '@type': 'ListItem', position: 2, name, item: url },
    ],
  };
}

// Only pages whose role was previously unlabelled.
const NORMAL_PAGES = {
  'about.html': { type: 'AboutPage', name: 'About gantts.app', desc: 'Who builds gantts.app and why it is free.' },
  'privacy.html': { type: 'WebPage', name: 'Privacy Policy — gantts.app', desc: 'How gantts.app handles your data: it never leaves your browser.' },
};

let schemaAdded = 0, footersFixed = 0;

for (const rel of walk(ROOT)) {
  const abs = path.join(ROOT, rel);
  let html = fs.readFileSync(abs, 'utf8');
  const before = html;

  // ---- 1. schema for normal pages that have none ----
  const spec = NORMAL_PAGES[rel];
  if (spec && !/application\/ld\+json/.test(html)) {
    const url = `${ORIGIN}/${rel}`;
    const ld = {
      '@context': 'https://schema.org',
      '@type': spec.type,
      name: spec.name,
      url,
      description: spec.desc,
      isPartOf: { '@type': 'WebSite', name: 'gantts.app', url: ORIGIN + '/' },
      publisher,
      breadcrumb: crumbs(spec.name.split(' — ')[0], url),
    };
    const block = `  <script type="application/ld+json">\n  ${JSON.stringify(ld, null, 2).split('\n').join('\n  ')}\n  </script>\n`;
    html = html.replace(/(\s*<link rel="stylesheet")/, '\n' + block + '$1');
    schemaAdded++;
  }

  // ---- 2. footer: add Contact / Terms / GitHub ----
  // Match the existing "About · Privacy" tail and replace wholesale so
  // re-running cannot duplicate entries.
  const footerRe = /<span><a href="\/about\.html">About<\/a>[\s\S]*?<\/span>/;
  const newFooter = `<span><a href="/about.html">About</a> · <a href="/contact.html">Contact</a> · <a href="/terms.html">Terms</a> · <a href="/privacy.html">Privacy</a> · <a href="${GH}" rel="noopener">GitHub</a></span>`;
  if (footerRe.test(html) && !html.includes('/terms.html')) {
    html = html.replace(footerRe, newFooter);
    footersFixed++;
  }

  if (html !== before) fs.writeFileSync(abs, html, 'utf8');
}

console.log(`✓ schema added to ${schemaAdded} page(s); ${footersFixed} footer(s) updated.`);
