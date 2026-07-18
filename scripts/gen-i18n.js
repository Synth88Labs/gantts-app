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
const { LOCALES, CHROME, HOME } = require('../i18n/content.js');

const ROOT = path.join(__dirname, '..');
const ORIGIN = 'https://gantts.app';
const CSS_V = 'v=11';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* Which sub-pages exist in a given locale. Until templates.html and
   blog/ are localized, their nav links must fall back to English —
   linking to a 404 is worse than linking across languages. */
const LOCALIZED_PAGES = { '': true };
function localHref(code, sub) {
  return LOCALIZED_PAGES[sub] ? `/${code}/${sub}` : `/${sub}`;
}

/* Every language variant of one logical page, for hreflang.
   `enPath` is the English URL; localized live under /<code>/<sub>. */
function altUrls(sub) {
  const alts = [{ hreflang: 'en', url: ORIGIN + '/' + sub }];
  LOCALES.forEach(l => alts.push({ hreflang: l.hreflang, url: `${ORIGIN}/${l.code}/${sub}` }));
  alts.push({ hreflang: 'x-default', url: ORIGIN + '/' + sub });
  return alts;
}

function hreflangTags(sub) {
  return altUrls(sub).map(a => `  <link rel="alternate" hreflang="${a.hreflang}" href="${a.url}" />`).join('\n');
}

/* Switcher is a <select> of real links — changing it navigates.
   Keeping it a form control matches the existing site chrome. */
function langSwitcher(currentCode, sub) {
  const opt = (code, label, url) =>
    `<option value="${url}"${code === currentCode ? ' selected' : ''}>${esc(label)}</option>`;
  const opts = [opt('en', 'English', '/' + sub)]
    .concat(LOCALES.map(l => opt(l.code, l.name, `/${l.code}/${sub}`)))
    .join('');
  return `<select class="lang-select" data-lang-nav aria-label="${esc(CHROME[currentCode].langLabel)}" onchange="if(this.value)location.href=this.value">${opts}</select>`;
}

function header(code, sub) {
  const c = CHROME[code];
  const p = '/' + code;
  return `  <header class="site-header">
    <div class="container nav">
      <a class="brand" href="${p}/" aria-label="gantts.app">
        <img src="/assets/logo-mark.svg" width="30" height="30" alt="" />
        <span class="brand-word">gantts<b>.app</b></span>
      </a>
      <nav class="nav-links" id="navLinks" aria-label="Primary">
        <a href="/app.html">${esc(c.nav.maker)}</a>
        <a href="${localHref(code, "templates.html")}">${esc(c.nav.templates)}</a>
        <a href="${localHref(code, "blog/index.html")}">${esc(c.nav.guides)}</a>
      </nav>
      <div class="nav-spacer"></div>
      <div class="nav-cta">
        ${langSwitcher(code, sub)}
        <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle dark mode">🌙</button>
        <a class="btn btn-primary" href="/app.html">${esc(c.nav.open)}</a>
        <button class="nav-burger" aria-label="Menu">☰</button>
      </div>
    </div>
  </header>`;
}

function footer(code) {
  const c = CHROME[code];
  const p = '/' + code;
  return `  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <span class="brand-word">gantts<b>.app</b></span>
        <p class="footer-tag">${esc(c.footer.tagline)}</p>
      </div>
      <div>
        <h4>${esc(c.footer.product)}</h4>
        <a href="/app.html">${esc(c.nav.maker)}</a>
        <a href="${localHref(code, "templates.html")}">${esc(c.nav.templates)}</a>
      </div>
      <div>
        <h4>${esc(c.footer.resources)}</h4>
        <a href="${localHref(code, "blog/index.html")}">${esc(c.nav.guides)}</a>
      </div>
      <div>
        <h4>${esc(c.footer.company)}</h4>
        <a href="/about.html">${esc(c.footer.about)}</a>
        <a href="/privacy.html">${esc(c.footer.privacy)}</a>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© <span class="year">2026</span> gantts.app · ${esc(c.footer.rights)}</span>
    </div>
  </footer>`;
}

/* FAQPage schema in the page's own language — these are eligible for
   rich results per-locale, so it is worth emitting for each. */
function faqSchema(faq) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  });
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

  return `<!DOCTYPE html>
<html lang="${loc.hreflang}" dir="${loc.dir}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(t.title)}</title>
  <meta name="description" content="${esc(t.description)}" />
  <link rel="canonical" href="${url}" />
${hreflangTags(sub)}
  <meta name="theme-color" content="#6c4cf1" />
  <link rel="icon" href="/assets/logo-mark.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="gantts.app" />
  <meta property="og:locale" content="${loc.ogLocale}" />
  <meta property="og:title" content="${esc(t.ogTitle)}" />
  <meta property="og:description" content="${esc(t.description)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${ORIGIN}/assets/og-image.png" />
  <meta name="twitter:card" content="summary_large_image" />

  <link rel="stylesheet" href="/css/site.css?${CSS_V}" />
  <script type="application/ld+json">${faqSchema(t.faq)}</script>
</head>
<body>
${header(code, sub)}

  <section class="hero3">
    <div class="hero3-bg" aria-hidden="true"></div>
    <div class="container">
      <div class="hero3-head">
        <span class="kicker"><i></i> <span>${esc(t.kicker)}</span></span>
        <h1>${t.h1}</h1>
        <p class="hero3-sub">${esc(t.sub)}</p>
        <div class="hero3-cta">
          <a class="btn btn-primary btn-lg" href="/app.html">${esc(t.cta1)}</a>
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
      <a class="btn btn-primary btn-lg" href="/app.html">${esc(t.ctaBtn)}</a>
    </div>
  </section>

${footer(code)}
  <script src="/js/site.js?${CSS_V}"></script>
</body>
</html>
`;
}

// ---- build ----
let written = 0;
for (const loc of LOCALES) {
  const dir = path.join(ROOT, loc.code);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), renderHome(loc), 'utf8');
  written++;
  console.log(`  ✓ /${loc.code}/index.html   ${HOME[loc.code].title.slice(0, 52)}…`);
}

console.log(`\n✓ Rendered ${written} localized page(s) across ${LOCALES.length} locales.`);
console.log('  English pages at the site root were not touched.');
console.log('  Next: node scripts/gen-sitemap.js && node scripts/check-links.js\n');
