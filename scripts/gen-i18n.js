#!/usr/bin/env node
/* ============================================================
   gen-i18n.js — render localized static pages from i18n/content.js.

   WHY STATIC PAGES INSTEAD OF CLIENT-SIDE TEXT SWAPPING:
   A JS language toggle repaints one URL. Google indexes one version
   of one URL (the English default, since Googlebot has no
   localStorage), and hreflang requires distinct URLs to point at.
   So a toggle produces zero international search traffic. Real
   localized URLs + hreflang is the only thing that ranks abroad.

   Emits:  /es/index.html  /fr/index.html  /de/index.html
           /pt/index.html  /zh/index.html
   Each with translated <title>/description, its own canonical,
   reciprocal hreflang (including x-default -> English), and a
   language switcher that NAVIGATES rather than toggles.

   The English pages at the site root stay hand-authored and are
   never overwritten by this script.

   Usage: node scripts/gen-i18n.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const {
  LOCALES, CHROME, HOME,
  TEMPLATES, TEMPLATE_LABELS, TEMPLATE_GROUPS,
  BLOG, BLOG_SLUGS, BLOG_LABELS,
} = require('../i18n/content.js');
const { SITE, SITE_PAGES } = require('../i18n/site-pages.js');
const { APP } = require('../i18n/content.js');
const { BY_LOCALE: TPL_I18N, UI: TPL_UI, localesFor } = require('../i18n/template-locales.js');
const { T: TPL_EN } = require('./new-templates.js');
const { CARDS: TPL_CARDS } = require('../i18n/template-cards.js');
const { ICONS: GUIDE_ICONS, DESC: GUIDE_DESC } = require('../i18n/guide-cards.js');
const { BY_LOCALE: GUIDE_I18N, UI: GUIDE_UI, localesFor: guideLocalesFor } = require('../i18n/guide-locales.js');
const { G: GUIDE_EN } = require('./new-guides.js');

const ROOT = path.join(__dirname, '..');
const ORIGIN = 'https://gantts.app';
const CSS_V = 'v=22';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* Which sub-pages exist in a given locale. Until templates.html and
   blog/ are localized, their nav links must fall back to English —
   linking to a 404 is worse than linking across languages. */
const LOCALIZED_PAGES = { '': true, 'templates.html': true, 'blog/index.html': true,
  'about.html': true, 'contact.html': true, 'terms.html': true, 'privacy.html': true,
  // renderApp() writes /<code>/app.html for every locale, so the nav and
  // every CTA must send readers there. Omitting it meant a Spanish page
  // showed "Abrir la aplicación" and then dropped the reader into the
  // English editor — the single most visited link on the site.
  'app.html': true };
/* index.html is an implementation detail of the filesystem, never a
   URL we link to: /blog/ and /blog/index.html served identical content
   at two addresses, exactly like / and /index.html did. */
const cleanUrl = (p) => p.replace(/(^|\/)index\.html$/, '$1');
function localHref(code, sub) {
  return LOCALIZED_PAGES[sub] ? cleanUrl(`/${code}/${sub}`) : cleanUrl(`/${sub}`);
}

/* Every language variant of one logical page, for hreflang.
   `enPath` is the English URL; localized live under /<code>/<sub>. */
/* `only` narrows the cluster to locales that actually have the page.
   Template detail pages are translated one at a time, and naming a URL
   that does not exist invalidates the entire cluster, not just that
   row. Defaults to every locale, which is right for the hubs. */
function altUrls(sub, only) {
  const codes = only || LOCALES.map(l => l.code);
  const alts = [{ hreflang: 'en', url: ORIGIN + '/' + sub }];
  LOCALES.filter(l => codes.includes(l.code))
    .forEach(l => alts.push({ hreflang: l.hreflang, url: `${ORIGIN}/${l.code}/${sub}` }));
  alts.push({ hreflang: 'x-default', url: ORIGIN + '/' + sub });
  return alts;
}

function hreflangTags(sub, only) {
  return altUrls(sub, only).map(a => `  <link rel="alternate" hreflang="${a.hreflang}" href="${a.url}" />`).join('\n');
}

/* Switcher is a <select> of real links — changing it navigates.
   Keeping it a form control matches the existing site chrome. */
function langSwitcher(currentCode, sub, only) {
  const opt = (code, label, url) =>
    `<option value="${url}"${code === currentCode ? ' selected' : ''}>${esc(label)}</option>`;
  // Locales without this page send the reader to their own home page
  // instead of a 404 — see altUrls().
  const has = (code) => !only || only.includes(code);
  const opts = [opt('en', 'English', '/' + sub)]
    .concat(LOCALES.map(l => opt(l.code, l.name, has(l.code) ? `/${l.code}/${sub}` : `/${l.code}/`)))
    .join('');
  return `<select class="lang-select" data-lang-nav aria-label="${esc(CHROME[currentCode].langLabel)}" onchange="if(this.value)location.href=this.value">${opts}</select>`;
}

/* Markup must mirror the English pages exactly — site.css styles
   .nav / .nav-inner / .nav-logo. Using invented class names here left
   the header as a non-flex block, stacking brand, links and buttons
   into three rows at 124px tall. */
function header(code, sub, only) {
  const c = CHROME[code];
  const p = '/' + code;
  return `  <header class="nav">
    <div class="container nav-inner">
      <a class="nav-logo" href="${p}/" aria-label="gantts.app">
        <img class="brand-mark" src="/assets/logo-mark.svg" width="30" height="30" alt="" />
        <span class="brand-word">gantts<b>.app</b></span>
      </a>
      <nav class="nav-links" id="navLinks" aria-label="Primary">
        <a href="${localHref(code, 'app.html')}">${esc(c.nav.maker)}</a>
        <a href="${localHref(code, "templates.html")}">${esc(c.nav.templates)}</a>
        <a href="${localHref(code, "blog/index.html")}">${esc(c.nav.guides)}</a>
        <a href="${guideHrefFor(code, 'what-is-a-gantt-chart')}">${esc(c.nav.what)}</a>
      </nav>
      <div class="nav-spacer"></div>
      <div class="nav-cta">
        ${langSwitcher(code, sub, only)}
        <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle dark mode">🌙</button>
        <a class="btn btn-primary" href="${localHref(code, 'app.html')}">${esc(c.nav.open)}</a>
        <button class="nav-burger" aria-label="Menu">☰</button>
      </div>
    </div>
  </header>`;
}

/* Footer deep-links used to be hardcoded to the English pages. Once the
   Spanish translations existed, that left 300 links pointing out of the
   locale from inside the Spanish site — five targets repeated across
   sixty pages. Both helpers fall back to English when a translation
   does not exist, which is still the right answer for fr/de/pt/zh. */
function tplHref(code, slug) {
  return localesFor(slug).includes(code) ? `/${code}/templates/${slug}.html` : `/templates/${slug}.html`;
}
function guideHrefFor(code, slug) {
  return guideLocalesFor(slug).includes(code) ? `/${code}/blog/${slug}.html` : `/blog/${slug}.html`;
}

function footer(code) {
  const c = CHROME[code];
  const p = '/' + code;
  const L = (sub, label) => `<a href="${localHref(code, sub)}">${esc(label)}</a>`;
  return `  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="nav-logo" href="${p}/" aria-label="gantts.app">
            <img class="brand-mark" src="/assets/logo-mark.svg" alt="" width="28" height="28" />
            <span class="brand-word">gantts<b>.app</b></span>
          </a>
          <p>${esc(c.footer.tagline)}</p>
          <a class="footer-cta" href="${localHref(code, 'app.html')}">${esc(c.nav.open)} →</a>
          <p class="footer-byline">${esc(c.footer.byline).replace('Synth88 Labs', '<a class="footer-ext" href="https://synth88.com" rel="noopener">Synth88 Labs</a>')}</p>
        </div>
        <div>
          <h4>${esc(c.nav.templates)}</h4>
          ${L('templates.html', c.footer.allTemplates)}
          <a href="${tplHref(code, 'excel')}">Excel</a>
          <a href="${tplHref(code, 'powerpoint')}">PowerPoint</a>
          <a href="${tplHref(code, 'construction')}">${esc(c.footer.construction)}</a>
        </div>
        <div>
          <h4>${esc(c.nav.guides)}</h4>
          ${L('blog/index.html', c.footer.allGuides)}
          <a href="${guideHrefFor(code, 'what-is-a-gantt-chart')}">${esc(c.nav.what)}</a>
          <a href="${guideHrefFor(code, 'critical-path-method')}">${esc(c.footer.cpm)}</a>
        </div>
        <div>
          <h4>${esc(c.footer.company)}</h4>
          ${L('about.html', c.footer.about)}
          ${L('contact.html', c.footer.contact)}
          ${L('terms.html', c.footer.terms)}
          ${L('privacy.html', c.footer.privacy)}
          <a class="footer-ext" href="https://github.com/Synth88Labs/gantts-app" rel="noopener">GitHub</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© <span class="year">2026</span> gantts.app · ${esc(c.footer.rights)}</span>
        <span>${esc(c.footer.staticNote)}</span>
      </div>
    </div>
  </footer>`;
}

/* ---------------- SEO ----------------
   Localized pages get the same depth of markup as the English ones,
   not a stripped-down head. Two things matter especially here:

   - The Organization/WebSite entity graph must be present per locale
     with stable @ids, so every language resolves to ONE brand entity
     rather than five unrelated ones.
   - og:locale:alternate lists the sibling languages, which is what
     social platforms use to pick a localized preview.
*/
const ORG_ID = ORIGIN + '/#org';
const SITE_ID = ORIGIN + '/#website';

function orgNode() {
  return {
    '@type': 'Organization', '@id': ORG_ID,
    name: 'gantts.app', url: ORIGIN + '/',
    logo: ORIGIN + '/assets/logo-mark.svg',
    email: 'synth88labs@gmail.com',
    sameAs: ['https://github.com/Synth88Labs/gantts-app'],
    // Ties gantts.app to its parent brand as one entity graph, so signals
    // earned by either accrue to a recognisable organisation rather than
    // two unrelated names that happen to share a footer link.
    parentOrganization: {
      '@type': 'Organization',
      name: 'Synth88 Labs',
      url: 'https://synth88.com',
    },
  };
}
function siteNode(loc) {
  return {
    '@type': 'WebSite', '@id': SITE_ID,
    url: ORIGIN + '/', name: 'gantts.app',
    inLanguage: loc.hreflang,
    publisher: { '@id': ORG_ID },
  };
}
function breadcrumb(loc, trail) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem', position: i + 1, name: t.name, item: t.url,
    })),
  };
}
/* Wraps page-specific nodes in the shared entity graph. */
function graph(loc, nodes) {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': [orgNode(), siteNode(loc), ...nodes] });
}

function ogLocaleAlternates(loc, only) {
  return LOCALES.filter(l => l.code !== loc.code && (!only || only.includes(l.code)))
    .map(l => `  <meta property="og:locale:alternate" content="${l.ogLocale}" />`)
    .concat([`  <meta property="og:locale:alternate" content="en_US" />`])
    .join('\n');
}

/* One head builder for every localized page, so a hub can never drift
   into having thinner metadata than the homepage. */
function seoHead(loc, sub, meta, ldJson, only) {
  const url = sub === '' ? `${ORIGIN}/${loc.code}/` : `${ORIGIN}/${loc.code}/${sub}`;
  return `  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(meta.title)}</title>
  <meta name="description" content="${esc(meta.description)}" />
  <meta name="robots" content="index,follow,max-image-preview:large" />
  <link rel="canonical" href="${url}" />
${hreflangTags(sub, only)}
  <meta name="theme-color" content="#6c4cf1" />
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" href="/assets/logo-mark.svg" type="image/svg+xml" />
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16.png" />
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <link rel="preload" href="/assets/fonts/bricolage.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="/assets/fonts/inter.woff2" as="font" type="font/woff2" crossorigin />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="gantts.app" />
  <meta property="og:locale" content="${loc.ogLocale}" />
${ogLocaleAlternates(loc, only)}
  <meta property="og:title" content="${esc(meta.ogTitle || meta.title)}" />
  <meta property="og:description" content="${esc(meta.description)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${ORIGIN}/assets/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${esc(meta.h1 || meta.title)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(meta.ogTitle || meta.title)}" />
  <meta name="twitter:description" content="${esc(meta.description)}" />
  <meta name="twitter:image" content="${ORIGIN}/assets/og-image.png" />

  <link rel="stylesheet" href="/css/site.css?${CSS_V}" />
  <script type="application/ld+json">${ldJson}</script>
`;
}

function renderHome(loc) {
  const code = loc.code;
  const t = HOME[code];
  const sub = '';
  const url = `${ORIGIN}/${code}/`;

  const bars = `
        <div class="fbar v r1" style="--s:1;--w:5"><span>${esc(t.bars.add)}</span></div>
        <div class="fbar i r2" style="--s:4;--w:6"><span>${esc(t.bars.link)}</span></div>
        <div class="fbar o r3" style="--s:8;--w:5"><span>${esc(t.bars.cp)}</span></div>
        <div class="fbar p r4" style="--s:6;--w:4"><span>${esc(t.bars.ms)}</span></div>
        <div class="fmile r4" style="--s:10" aria-hidden="true"></div>
        <div class="fbar g r5" style="--s:9;--w:6"><span>${esc(t.bars.export)}</span></div>`;

  const features = t.features.map(f => `        <article class="bento-item">
          <div class="bento-txt">
            <h3>${esc(f.h)}</h3>
            <p>${esc(f.p)}</p>
          </div>
        </article>`).join('\n');

  const faq = t.faq.map(f => `        <details class="faq-item">
          <summary>${esc(f.q)}</summary>
          <p>${esc(f.a)}</p>
        </details>`).join('\n');

  const ld = graph(loc, [
    {
      '@type': 'WebPage', '@id': `${ORIGIN}/${code}/#webpage`,
      url: `${ORIGIN}/${code}/`, name: t.title, description: t.description,
      inLanguage: loc.hreflang, isPartOf: { '@id': SITE_ID },
      about: { '@id': ORIGIN + '/#software' },
    },
    {
      '@type': 'SoftwareApplication', '@id': ORIGIN + '/#software',
      name: 'gantts.app', applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web browser', url: ORIGIN + '/app.html',
      inLanguage: loc.hreflang,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      publisher: { '@id': ORG_ID },
    },
    {
      '@type': 'FAQPage', '@id': `${ORIGIN}/${code}/#faq`, inLanguage: loc.hreflang,
      mainEntity: t.faq.map(f => ({
        '@type': 'Question', name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]);

  const body = `  <section class="hero3">
    <div class="hero3-bg" aria-hidden="true"></div>
    <div class="container">
      <div class="hero3-head">
        <span class="kicker"><i></i> <span>${esc(t.kicker)}</span></span>
        <h1>${t.h1}</h1>
        <p class="hero3-sub">${esc(t.sub)}</p>
        <div class="hero3-cta">
          <a class="btn btn-primary btn-lg" href="${localHref(code, 'app.html')}">${esc(t.cta1)}</a>
          <a class="hero3-link" href="${localHref(code, 'templates.html')}">${esc(t.cta2)}</a>
        </div>
      </div>

      <div class="hero3-bars" role="img" aria-label="${esc(t.featH2)}">
        <div class="hero3-today" aria-hidden="true"></div>${bars}
      </div>

      <p class="hero3-meta">${esc(t.meta)}</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="head-l">
        <div>
          <span class="label">${esc(t.featLabel)}</span>
          <h2>${esc(t.featH2)}</h2>
        </div>
        <p class="head-l-note">${esc(t.featNote)}</p>
      </div>
      <div class="bento">
${features}
      </div>
    </div>
  </section>

  ${t.steps ? `<section class="section">
    <div class="container narrow">
      <h2>${esc(t.stepsH2)}</h2>
      <ol class="how-steps">
${t.steps.map(([h, p]) => `        <li><strong>${esc(h)}</strong> — ${esc(p)}</li>`).join('\n')}
      </ol>
    </div>
  </section>` : ''}

  ${t.tplH2 ? `<section class="section section-alt">
    <div class="container narrow">
      <h2>${esc(t.tplH2)}</h2>
      <p>${esc(t.tplP)}</p>
      <a class="btn btn-primary" href="${localHref(code, 'templates.html')}">${esc(t.tplBtn)}</a>
    </div>
  </section>` : ''}

  ${t.why ? `<section class="section">
    <div class="container">
      <h2>${esc(t.whyH2)}</h2>
      <div class="grid grid-3">
${t.why.map(([h, p]) => `        <div class="card"><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join('\n')}
      </div>
    </div>
  </section>` : ''}

  <section class="section section-alt">
    <div class="container narrow">
      <h2>${esc(t.faqH2)}</h2>
      <div class="faq">
${faq}
      </div>
    </div>
  </section>

  <section class="cta-band">
    <div class="container">
      <h2>${esc(t.ctaH2)}</h2>
      <p>${esc(t.ctaP)}</p>
      <a class="btn btn-white btn-lg" href="${localHref(code, 'app.html')}">${esc(t.ctaBtn)}</a>
    </div>
  </section>`;

  return shell(loc, '', t, body, ld);
}

/* Every localized page routes through here, so none can end up with a
   thinner head than another. */
function shell(loc, sub, meta, bodyHtml, ldJson, only) {
  return `<!DOCTYPE html>
<html lang="${loc.hreflang}" dir="${loc.dir}">
<head>
${seoHead(loc, sub, meta, ldJson, only)}</head>
<body>
${header(loc.code, sub, only)}

${bodyHtml}

${footer(loc.code)}
  <script src="/js/site.js?${CSS_V}"></script>
</body>
</html>
`;
}

/* Templates hub. CollectionPage + ItemList mirrors the English hub's
   schema role — the localized page is the same kind of thing. */
function renderTemplates(loc) {
  const code = loc.code;
  const t = TEMPLATES[code];
  const labels = TEMPLATE_LABELS[code];
  const sub = 'templates.html';

  // Card links land on the localized detail page where one exists —
  // that is the whole point of translating them. The rest stay English.
  const cardHref = (s) => localesFor(s).includes(code)
    ? `/${code}/templates/${s}.html` : `/templates/${s}.html`;

  /* Card blurbs come from the translated template entry itself, so a
     locale gets richer cards exactly as its translations land. The
     English hub carries a one-line description under every card; without
     this the localized hub was a wall of bare labels — 319 words against
     the English 1,288, which is a materially worse page for the reader
     and a thin one for Google. */
  const blurb = (s) => {
    // A fully translated template carries its own blurb; otherwise fall
    // back to the shared one-liner table, so a locale gets a usable hub
    // long before all 41 detail pages are translated.
    const d = (TPL_I18N[code] || {})[s];
    return (d && d.card) || ((TPL_CARDS[code] || {})[s]) || '';
  };

  const groups = TEMPLATE_GROUPS.map(g => {
    /* Markup must match the English hub EXACTLY. The localized cards
       used to emit a bare <img>, <h3> and <p> with no wrappers, so they
       lost every rule that hangs off .tpl-thumb (aspect ratio and
       object-fit — the image rendered at its natural size, small and
       left-aligned), .tpl-body (the 16px/18px padding, i.e. the missing
       indent) and .tpl-body h3/p (the text colours, so both inherited
       the anchor's purple). The download badges were missing too. */
    const cards = g.slugs.map(s => `          <a class="tpl-card" href="${cardHref(s)}"><div class="tpl-thumb"><img src="/templates/img/${s}.svg" alt="${esc(labels[s])}" loading="lazy"></div><div class="tpl-body"><h3>${esc(labels[s])}</h3><p>${blurb(s)}</p><div class="tpl-tags"><span class="tag excel">Excel</span> <span class="tag ppt">PPT</span> <span class="tag csv">CSV</span></div></div></a>`).join('\n');
    /* .head-l is a flex row: heading on the left, note on the right.
       The note was being emitted on its own, so it kept the 380px
       max-width from .head-l-note but lost the layout — orphaning a
       narrow paragraph under the heading instead of sitting beside it. */
    return `      <section class="section">
        <div class="head-l"><div><h2>${esc(t[g.key])}</h2></div>${t.catNote ? `<p class="head-l-note">${esc(t.catNote)}</p>` : ''}</div>
        <div class="tpl-grid">
${cards}
        </div>
      </section>`;
  }).join('\n');

  const allSlugs = TEMPLATE_GROUPS.flatMap(g => g.slugs);
  const url = `${ORIGIN}/${code}/${sub}`;
  const ldNodes = [];
  if (t.faq) ldNodes.push({
    '@type': 'FAQPage', inLanguage: loc.hreflang,
    mainEntity: t.faq.map(([q, a]) => ({
      '@type': 'Question', name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  });
  const ld = graph(loc, [
    {
      '@type': 'CollectionPage', '@id': url + '#webpage',
      name: t.h1, url, description: t.description,
      inLanguage: loc.hreflang, isPartOf: { '@id': SITE_ID },
      breadcrumb: breadcrumb(loc, [
        { name: 'gantts.app', url: `${ORIGIN}/${code}/` },
        { name: t.h1, url },
      ]),
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: allSlugs.length,
        itemListElement: allSlugs.map((s, i) => ({
          '@type': 'ListItem', position: i + 1,
          name: labels[s], url: ORIGIN + cardHref(s),
        })),
      },
    },
  ].concat(ldNodes));

  const body = `  <article class="container" style="padding-top:44px">
    <h1>${esc(t.h1)}</h1>
    <p class="lead">${esc(t.lead)}</p>
    <p>${esc(t.intro)}</p>
    <p class="crumbs"><small>${esc(t.noteEn)}</small></p>
${groups}
    ${t.howSteps ? `<section class="section">
      <h2>${esc(t.howH2)}</h2>
      <ol class="how-steps">
${t.howSteps.map(([h, p]) => `        <li><strong>${esc(h)}</strong> — ${esc(p)}</li>`).join('\n')}
      </ol>
    </section>` : ''}

    ${t.faq ? `<section class="section">
      <h2>${esc(t.faqH2)}</h2>
      <div class="faq">
${t.faq.map(([q, a], i) => `        <details${i === 0 ? ' open' : ''}><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n')}
      </div>
    </section>` : ''}

    <section class="cta-band">
      <div class="container">
        <h2>${esc(t.ctaH2)}</h2>
        <p>${esc(t.ctaP)}</p>
        <a class="btn btn-white btn-lg" href="${localHref(code, 'app.html')}">${esc(t.ctaBtn)}</a>
      </div>
    </section>
  </article>`;

  return shell(loc, sub, t, body, ld);
}

/* ---------------- Localized template detail pages ----------------

   Same schema role as the English page (BreadcrumbList + HowTo +
   FAQPage), same layout, translated copy. The schedule data, preview
   image and download files are language-independent and shared with
   the English page — only the prose differs, so a Spanish reader gets
   the same spreadsheet, described in Spanish.

   Rendered only for slugs with a real translation in
   i18n/template-locales.js. */
function renderTemplateDetail(loc, slug) {
  const code = loc.code;
  const d = TPL_I18N[code][slug];
  const en = TPL_EN[slug];
  const ui = TPL_UI[code];
  const sub = `templates/${slug}.html`;
  const url = `${ORIGIN}/${code}/${sub}`;
  const only = localesFor(slug);
  const strip = (s) => String(s).replace(/<[^>]+>/g, '');

  const phases = d.phases.map(([h, p]) => `        <li><strong>${h}</strong> — ${p}</li>`).join('\n');
  const custom = d.customize.map(c => `        <li>${c}</li>`).join('\n');
  const tips = d.tips.map(t => `        <li>${t}</li>`).join('\n');
  const faq = d.faq.map(([q, a], i) =>
    `        <details${i === 0 ? ' open' : ''}><summary>${esc(q)}</summary><p>${a}</p></details>`).join('\n');

  // Related pages resolve to the localized version when it exists,
  // and fall back to English rather than being dropped — a cross-link
  // in the wrong language still beats no cross-link.
  /* Related links come from the Spanish entry when it declares them,
     otherwise from the English content model. Most template pages are
     hand-authored HTML with no entry in new-templates.js at all, so
     reading en.related unconditionally threw for exactly those pages. */
  const relatedSrc = d.related || (en && en.related) || [];
  const related = relatedSrc.map(r => {
    const slugRef = Array.isArray(r) ? r[0] : r;
    const label = Array.isArray(r) ? r[1] : null;
    const localized = TPL_I18N[code][slugRef];
    const text = label || (localized ? localized.h1 : (TPL_EN[slugRef] ? TPL_EN[slugRef].h1 : slugRef));
    return `        <li><a href="${localized ? `/${code}/templates/${slugRef}.html` : `/templates/${slugRef}.html`}">${esc(text)}</a></li>`;
  }).join('\n');

  const ld = graph(loc, [
    {
      '@type': 'WebPage', '@id': url + '#webpage',
      name: d.metaTitle, url, description: d.metaDesc,
      inLanguage: loc.hreflang, isPartOf: { '@id': SITE_ID },
      breadcrumb: breadcrumb(loc, [
        { name: ui.home, url: `${ORIGIN}/${code}/` },
        { name: ui.templates, url: `${ORIGIN}/${code}/templates.html` },
        { name: d.h1, url },
      ]),
    },
    {
      '@type': 'HowTo',
      name: ui.howTo(d.h1),
      description: strip(d.metaDesc),
      inLanguage: loc.hreflang,
      step: d.customize.slice(0, 5).map((c, i) => ({
        '@type': 'HowToStep', position: i + 1, name: strip(c).slice(0, 70), text: strip(c),
      })),
    },
    {
      '@type': 'FAQPage',
      inLanguage: loc.hreflang,
      mainEntity: d.faq.map(([q, a]) => ({
        '@type': 'Question', name: strip(q),
        acceptedAnswer: { '@type': 'Answer', text: strip(a) },
      })),
    },
  ]);

  const body = `  <article class="container narrow" style="padding-top:40px">
    <div class="crumbs"><a href="/${code}/">${esc(ui.home)}</a> › <a href="/${code}/templates.html">${esc(ui.templates)}</a> › ${esc(d.h1)}</div>
    <h1>${esc(d.h1)}</h1>
    <p class="lead">${d.lead}</p>

    <p><img src="/templates/img/${slug}.svg" alt="${esc(ui.imgAlt)}" style="width:100%;height:auto;margin:20px 0" /></p>

    <div class="dl-row">
      <a class="btn btn-primary" href="/templates/files/${slug}.xlsx" download>⬇ ${esc(ui.xlsx)}</a>
      <a class="btn" href="/templates/files/${slug}.pptx" download>⬇ ${esc(ui.pptx)}</a>
      <a class="btn" href="/templates/files/${slug}.csv" download>⬇ ${esc(ui.csv)}</a>
      <a class="btn btn-primary" href="/${code}/app.html?csv=${slug}">✎ ${esc(ui.edit)}</a>
    </div>

    <div class="prose">
      <h2 id="whats-included">${esc(ui.included)}</h2>
      <p>${d.intro}</p>
      <ul>
${phases}
      </ul>

      <div class="callout">${d.callout}</div>

      <h2 id="customize">${esc(ui.customize)}</h2>
      <ol>
${custom}
      </ol>

      <h2 id="tips">${esc(ui.tips)}</h2>
      <ul>
${tips}
      </ul>

      <h2 id="related">${esc(ui.related)}</h2>
      <ul>
${related}
        <li><a href="/${code}/templates.html">${esc(ui.browseAll)}</a></li>
      </ul>
      <p class="crumbs"><small>${esc(ui.enNote)}</small></p>

      <h2 id="faq">${esc(ui.faq)}</h2>
      <div class="faq">
${faq}
      </div>
    </div>
  </article>

  <section class="cta-band">
    <div class="container">
      <h2>${esc(ui.ctaH2)}</h2>
      <p>${esc(ui.ctaP)}</p>
      <a class="btn btn-white btn-lg" href="/${code}/app.html?csv=${slug}">${esc(ui.ctaBtn)}</a>
    </div>
  </section>`;

  return shell(loc, sub, { title: `${d.metaTitle} | gantts.app`, description: d.metaDesc, h1: d.h1 }, body, ld, only);
}


/* ---------------- Localized guides ----------------

   BlogPosting + FAQPage, mirroring the English guide's schema role.
   The SVG figure is inherited from the English guide where one exists:
   the diagrams are language-independent shapes, and re-authoring them
   per locale would be a maintenance trap. Guides without a generated
   English model simply have no figure. */
function renderGuide(loc, slug) {
  const code = loc.code;
  const d = GUIDE_I18N[code][slug];
  const ui = GUIDE_UI[code];
  const en = GUIDE_EN[slug];
  const sub = `blog/${slug}.html`;
  const url = `${ORIGIN}/${code}/${sub}`;
  const only = guideLocalesFor(slug);
  const strip = (s) => String(s).replace(/<[^>]+>/g, '');

  const body = d.sections.map(([h, html], i) =>
    `      <h2 id="s${i + 1}">${esc(h)}</h2>\n${html}`).join('\n');

  const faq = d.faq.map(([q, a], i) =>
    `        <details${i === 0 ? ' open' : ''}><summary>${esc(q)}</summary><p>${a}</p></details>`).join('\n');

  // Related guides resolve to the localized version when it exists and
  // fall back to English otherwise — a cross-link in the wrong language
  // still beats no cross-link.
  const related = (d.related || []).map(([rslug, label]) => {
    const localized = GUIDE_I18N[code][rslug];
    return `        <li><a href="${localized ? `/${code}/blog/${rslug}.html` : `/blog/${rslug}.html`}">${esc(label)}</a></li>`;
  }).join('\n');

  const figure = en && en.figure
    ? `    <figure class="fig">\n      <p>${esc(d.figIntro || '')}</p>\n      ${en.figure}\n    </figure>`
    : '';

  const ld = graph(loc, [
    {
      '@type': 'BlogPosting', '@id': url + '#post',
      headline: d.h1, description: d.metaDesc, url,
      inLanguage: loc.hreflang,
      datePublished: d.date, dateModified: d.date,
      isPartOf: { '@id': SITE_ID },
      publisher: { '@id': ORG_ID },
      author: { '@id': ORG_ID },
      mainEntityOfPage: url,
      breadcrumb: breadcrumb(loc, [
        { name: ui.home, url: `${ORIGIN}/${code}/` },
        { name: ui.guides, url: `${ORIGIN}/${code}/blog/` },
        { name: d.h1, url },
      ]),
    },
    {
      '@type': 'FAQPage',
      inLanguage: loc.hreflang,
      mainEntity: d.faq.map(([q, a]) => ({
        '@type': 'Question', name: strip(q),
        acceptedAnswer: { '@type': 'Answer', text: strip(a) },
      })),
    },
  ]);

  const html = `  <article class="container narrow" style="padding-top:40px">
    <div class="crumbs"><a href="/${code}/">${esc(ui.home)}</a> › <a href="/${code}/blog/">${esc(ui.guides)}</a></div>
    <h1>${esc(d.h1)}</h1>
    <p class="lead">${d.lead}</p>
    <!-- English guides carry a byline/date/reading-time line and an
         on-this-page list; the localized ones had neither, so a reader
         landed on a wall of prose with no way to scan it. -->
    <p class="post-meta"><span>${esc(ui.byline || 'gantts.app')}</span><span>${esc(ui.updated)} ${esc(d.date)}</span><span>${Math.max(3, Math.round(d.sections.reduce((n, sx) => n + String(sx[1]).replace(/<[^>]+>/g, ' ').split(/\s+/).length, 0) / 200))} ${esc(ui.readingTime)}</span></p>
    <div class="toc"><strong>${esc(ui.onThisPage || ui.related)}</strong>
      <ol>
${d.sections.map(([h], i) => `        <li><a href="#s${i + 1}">${esc(h)}</a></li>`).join('\n')}
      </ol>
    </div>

${figure}

    <div class="prose">
${body}

      <div class="callout">${d.callout}</div>

      <h2 id="faq">${esc(ui.faq)}</h2>
      <div class="faq">
${faq}
      </div>

      <h2 id="related">${esc(ui.related)}</h2>
      <ul>
${related}
        <li><a href="/${code}/blog/">${esc(ui.backToGuides)}</a></li>
      </ul>
      <p class="crumbs"><small>${esc(ui.enNote)}</small></p>
    </div>
  </article>

  <section class="cta-band">
    <div class="container">
      <h2>${esc(ui.ctaH2)}</h2>
      <p>${esc(ui.ctaP)}</p>
      <a class="btn btn-white btn-lg" href="/${code}/app.html">${esc(ui.ctaBtn)}</a>
    </div>
  </section>`;

  return shell(loc, sub, { title: `${d.metaTitle} | gantts.app`, description: d.metaDesc, h1: d.h1 }, html, ld, only);
}

/* Guides index — a list of English articles with localized labels. */
function renderBlogIndex(loc) {
  const code = loc.code;
  const b = BLOG[code];
  const labels = BLOG_LABELS[code];
  const sub = 'blog/index.html';

  const guideHref = (s) => guideLocalesFor(s).includes(code)
    ? `/${code}/blog/${s}.html` : `/blog/${s}.html`;
  /* English renders icon + title + description. The localized cards used
     to be title + "read the guide →" and nothing else, which made the
     guides index look like a thinner product in every language but one. */
  const gdesc = (GUIDE_DESC[code] || {});
  const items = BLOG_SLUGS.map(s => `        <a class="card card-link" href="${guideHref(s)}">
          <div class="ic">${GUIDE_ICONS[s] || '📄'}</div>
          <h3>${esc(labels[s])}</h3>
          <p>${esc(gdesc[s] || '')}</p>
        </a>`).join('\n');

  const url = `${ORIGIN}/${code}/${sub}`;
  const ld = graph(loc, [
    {
      '@type': 'CollectionPage', '@id': url + '#webpage',
      name: b.h1, url, description: b.description,
      inLanguage: loc.hreflang, isPartOf: { '@id': SITE_ID },
      breadcrumb: breadcrumb(loc, [
        { name: 'gantts.app', url: `${ORIGIN}/${code}/` },
        { name: b.h1, url },
      ]),
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: BLOG_SLUGS.length,
        itemListElement: BLOG_SLUGS.map((s, i) => ({
          '@type': 'ListItem', position: i + 1,
          name: labels[s], url: ORIGIN + guideHref(s),
        })),
      },
    },
  ]);

  /* Matches the English page: real breadcrumb, then a .section-head
     carrying the eyebrow, h1 and lead. The localized version had no
     breadcrumb at all and reused .crumbs to style the English-fallback
     note, which is both a missing element and a misuse of the class. */
  const body = `  <article class="container narrow" style="padding-top:44px">
    <div class="crumbs"><a href="/${code}/">${esc(CHROME[code].nav.home || 'gantts.app')}</a> › ${esc(CHROME[code].nav.guides)}</div>
    <div class="section-head" style="text-align:left">
      <span class="eyebrow">${esc(b.eyebrow || CHROME[code].nav.guides)}</span>
      <h1>${esc(b.h1)}</h1>
      <p class="lead">${esc(b.lead)}</p>
    </div>
    ${b.noteEn ? `<p class="locale-note"><small>${esc(b.noteEn)}</small></p>` : ''}
    <div class="grid grid-3">
${items}
    </div>
  </article>`;

  return shell(loc, sub, b, body, ld);
}


/* Trust pages. Terms and privacy carry a localized note saying the
   English text governs — see i18n/site-pages.js for why. */
function renderSitePage(loc, key) {
  const code = loc.code;
  const d = SITE[code][key];
  const sub = key + '.html';
  const url = `${ORIGIN}/${code}/${sub}`;
  const isLegal = key === 'terms' || key === 'privacy';
  const type = key === 'about' ? 'AboutPage' : key === 'contact' ? 'ContactPage' : 'WebPage';

  const ld = graph(loc, [{
    '@type': type, '@id': url + '#webpage',
    name: d.title, url, description: d.description,
    inLanguage: loc.hreflang, isPartOf: { '@id': SITE_ID },
    breadcrumb: breadcrumb(loc, [
      { name: 'gantts.app', url: `${ORIGIN}/${code}/` },
      { name: d.h1, url },
    ]),
  }]);

  const body = `  <article class="container narrow" style="padding-top:44px">
    <div class="crumbs"><a href="/${code}/">gantts.app</a> › ${esc(d.h1)}</div>
    <h1>${esc(d.h1)}</h1>
    <p class="lead">${esc(d.lead)}</p>
${isLegal ? '    <p class="crumbs"><small>' + esc(SITE[code].legalNote) + '</small></p>\n' : ''}    ${d.callout ? `<div class="callout">${d.callout}</div>` : ''}
    <div class="prose">
${d.body.map(([h, html]) => `      <h2>${esc(h)}</h2>\n      ${html}`).join('\n')}
    </div>
  </article>

  ${key === 'about' ? `<section class="section"><div class="container"><div class="cta-band">
    <h2>${esc(TEMPLATES[code].ctaH2)}</h2>
    <p>${esc(TEMPLATES[code].ctaP)}</p>
    <a class="btn btn-white btn-lg" href="${localHref(code, 'app.html')}">${esc(CHROME[code].nav.open)} →</a>
  </div></div></section>` : ''}`;

  return shell(loc, sub, d, body, ld);
}


/* The app, per locale.
   Transforms the hand-authored app.html rather than duplicating it, so the
   editor itself can never drift between languages. Only the head, the
   <html> element, the home links and the language switcher change — the
   application markup is untouched. */
function renderApp(loc) {
  const code = loc.code;
  const a = APP[code];
  const sub = 'app.html';
  const url = `${ORIGIN}/${code}/${sub}`;
  let h = fs.readFileSync(path.join(ROOT, 'app.html'), 'utf8');

  // data-app-lang tells js/i18n.js which language to boot in; it takes
  // precedence over localStorage so the URL decides.
  h = h.replace('<html lang="en">', `<html lang="${loc.hreflang}" data-app-lang="${code}">`);
  h = h.replace(/<title>[^<]*<\/title>/, `<title>${esc(a.title)}</title>`);
  h = h.replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(a.description)}" />`);
  // Strip the English page's own hreflang block first — otherwise the
  // locale copy carries two full sets and two x-default tags, which
  // invalidates the whole cluster.
  h = h.replace(/^\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*" \/>\r?\n/gm, "");
  h = h.replace(/<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${url}" />
${hreflangTags(sub)}`);

  // og/twitter should describe this locale's page
  h = h.replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${esc(a.title)}" />`);
  h = h.replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${esc(a.description)}" />`);
  h = h.replace(/<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${url}" />
  <meta property="og:locale" content="${loc.ogLocale}" />`);

  // home links stay inside the locale
  h = h.split('href="/"').join(`href="/${code}/"`);

  // The hand-authored app.html predates the localized-page SEO standard,
  // so bring the copies up to it: robots, twitter card, og:locale
  // alternates, and the shared entity graph with inLanguage.
  const ld = graph(loc, [
    {
      '@type': 'WebPage', '@id': url + '#webpage',
      name: a.title, url, description: a.description,
      inLanguage: loc.hreflang, isPartOf: { '@id': SITE_ID },
      about: { '@id': ORIGIN + '/#software' },
    },
    {
      '@type': 'SoftwareApplication', '@id': ORIGIN + '/#software',
      name: 'gantts.app', applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web browser', url: ORIGIN + '/app.html',
      inLanguage: loc.hreflang,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      publisher: { '@id': ORG_ID },
    },
  ]);
  h = h.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">${ld}</script>`);

  const extra = [
    `  <meta name="robots" content="index,follow,max-image-preview:large" />`,
    ogLocaleAlternates(loc),
    `  <meta name="twitter:title" content="${esc(a.title)}" />`,
    `  <meta name="twitter:description" content="${esc(a.description)}" />`,
    `  <meta name="twitter:image" content="${ORIGIN}/assets/og-image.png" />`,
  ].join('\n');
  h = h.replace('</head>', extra + '\n</head>');

  // navigating switcher, consistent with every other page on the site
  h = h.replace(/<select class="lang-select"[^>]*><\/select>/, langSwitcher(code, sub));

  return h;
}

// ---- build ----
let written = 0;
for (const loc of LOCALES) {
  const dir = path.join(ROOT, loc.code);
  fs.mkdirSync(path.join(dir, 'blog'), { recursive: true });

  fs.writeFileSync(path.join(dir, 'index.html'), renderHome(loc), 'utf8');
  fs.writeFileSync(path.join(dir, 'templates.html'), renderTemplates(loc), 'utf8');
  fs.writeFileSync(path.join(dir, 'blog', 'index.html'), renderBlogIndex(loc), 'utf8');
  for (const key of ['about', 'contact', 'terms', 'privacy']) {
    fs.writeFileSync(path.join(dir, key + '.html'), renderSitePage(loc, key), 'utf8');
  }
  fs.writeFileSync(path.join(dir, 'app.html'), renderApp(loc), 'utf8');
  written += 8;
  console.log(`  ✓ /${loc.code}/  ·  /${loc.code}/templates.html  ·  /${loc.code}/blog/`);

  const gslugs = Object.keys(GUIDE_I18N[loc.code] || {});
  if (gslugs.length) {
    fs.mkdirSync(path.join(dir, 'blog'), { recursive: true });
    for (const slug of gslugs) {
      fs.writeFileSync(path.join(dir, 'blog', slug + '.html'), renderGuide(loc, slug), 'utf8');
      written++;
    }
    console.log(`    + ${gslugs.length} translated guide(s) under /${loc.code}/blog/`);
  }

  const slugs = Object.keys(TPL_I18N[loc.code] || {});
  if (slugs.length) {
    fs.mkdirSync(path.join(dir, 'templates'), { recursive: true });
    for (const slug of slugs) {
      fs.writeFileSync(path.join(dir, 'templates', slug + '.html'), renderTemplateDetail(loc, slug), 'utf8');
      written++;
    }
    console.log(`    + ${slugs.length} translated template page(s) under /${loc.code}/templates/`);
  }
}

console.log(`\n✓ Rendered ${written} localized page(s) across ${LOCALES.length} locales.`);
console.log('  English pages at the site root were not touched.');
console.log('  Next: node scripts/gen-sitemap.js && node scripts/check-hreflang.js\n');
