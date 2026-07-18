#!/usr/bin/env node
/* ============================================================
   gen-guide-pages.js — build guide posts from new-guides.js.

   Mirrors the hand-authored posts in /blog/: same chrome, same schema
   role (BlogPosting + FAQPage + BreadcrumbList). Hand-written posts
   are never touched.

   Usage: node scripts/gen-guide-pages.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const { G } = require('./new-guides.js');
const { FOOTER } = require('./footer.js');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'blog');
const ORIGIN = 'https://gantts.app';
const V = 'v=22';
const GH = 'https://github.com/Synth88Labs/gantts-app';

const attr = (s) => String(s).replace(/&(?!(amp|lt|gt|quot|#\d+);)/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const strip = (s) => String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

// Resolve a related post's real title from disk so links cannot go stale.
function postTitle(slug, fallback) {
  const f = path.join(OUT, slug + '.html');
  if (!fs.existsSync(f)) return null;
  const m = fs.readFileSync(f, 'utf8').match(/<h1>([^<]+)<\/h1>/i);
  return m ? m[1].trim() : fallback;
}
function tplTitle(slug) {
  const f = path.join(ROOT, 'templates', slug + '.html');
  if (!fs.existsSync(f)) return null;
  const m = fs.readFileSync(f, 'utf8').match(/<h1>([^<]+)<\/h1>/i);
  return m ? m[1].trim() : null;
}

function langSwitcher(slug) {
  const opts = [`<option value="/blog/${slug}.html" selected>English</option>`]
    .concat(['es', 'fr', 'de', 'pt', 'zh'].map((c, i) =>
      `<option value="/${c}/blog/index.html">${['Español', 'Français', 'Deutsch', 'Português', '简体中文'][i]}</option>`));
  return `<select class="lang-select" data-lang-nav aria-label="Language" title="Language" onchange="if(this.value)location.href=this.value">\n          ${opts.join('\n          ')}\n        </select>`;
}

const nav = (slug) => `  <header class="nav">
    <div class="container nav-inner">
      <a class="nav-logo" href="/index.html" aria-label="gantts.app home">
        <img class="brand-mark" src="/assets/logo-mark.svg" alt="" width="30" height="30" />
        <span class="brand-word">gantts<b>.app</b></span>
      </a>
      <nav class="nav-links" id="navLinks" aria-label="Primary">
        <a href="/app.html">Gantt Maker</a>
        <a href="/templates.html">Templates</a>
        <a href="/blog/index.html">Guides</a>
      </nav>
      <div class="nav-spacer"></div>
      <div class="nav-cta">
        ${langSwitcher(slug)}
        <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle dark mode">🌙</button>
        <a class="btn btn-primary" href="/app.html">Open the app</a>
        <button class="nav-burger" aria-label="Menu">☰</button>
      </div>
    </div>
  </header>`;


function schema(slug, d) {
  const url = `${ORIGIN}/blog/${slug}.html`;
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting', '@id': url + '#post',
        headline: d.h1, description: strip(d.metaDesc), url,
        inLanguage: 'en',
        datePublished: d.date, dateModified: d.date,
        image: ORIGIN + '/assets/og-image.png',
        author: { '@type': 'Organization', name: 'gantts.app', url: ORIGIN + '/' },
        publisher: {
          '@type': 'Organization', '@id': ORIGIN + '/#org', name: 'gantts.app',
          url: ORIGIN + '/', logo: { '@type': 'ImageObject', url: ORIGIN + '/assets/logo-mark.svg' },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: ORIGIN + '/' },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: ORIGIN + '/blog/index.html' },
          { '@type': 'ListItem', position: 3, name: d.h1, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: d.faq.map(([q, a]) => ({
          '@type': 'Question', name: strip(q),
          acceptedAnswer: { '@type': 'Answer', text: strip(a) },
        })),
      },
    ],
  });
}

function page(slug, d) {
  const url = `${ORIGIN}/blog/${slug}.html`;
  const body = d.sections.map(([h, html], i) =>
    `      <h2 id="s${i + 1}">${h}</h2>\n${html.split('\n').map(l => '      ' + l.trim()).join('\n')}`).join('\n\n');

  const related = d.related
    .map(([s, fb]) => ({ s, t: postTitle(s, fb) }))
    .filter(x => x.t)
    .map(x => `        <li><a href="/blog/${x.s}.html">${x.t}</a></li>`).join('\n');

  const tpls = (d.tpl || [])
    .map(s => ({ s, t: tplTitle(s) }))
    .filter(x => x.t)
    .map(x => `        <li><a href="/templates/${x.s}.html">${x.t}</a></li>`).join('\n');

  const faq = d.faq.map(([q, a], i) =>
    `        <details${i === 0 ? ' open' : ''}><summary>${q}</summary><p>${a}</p></details>`).join('\n');

  const dateLabel = new Date(d.date + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${attr(d.metaTitle)} | gantts.app</title>
  <meta name="description" content="${attr(d.metaDesc)}" />
  <meta name="robots" content="index,follow,max-image-preview:large" />
  <link rel="canonical" href="${url}" />
  <meta name="theme-color" content="#6c4cf1" />
  <link rel="icon" href="/assets/logo-mark.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="gantts.app" />
  <meta property="og:title" content="${attr(d.metaTitle)}" />
  <meta property="og:description" content="${attr(d.metaDesc)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${ORIGIN}/assets/og-image.png" />
  <meta property="article:published_time" content="${d.date}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${attr(d.metaTitle)}" />
  <meta name="twitter:description" content="${attr(d.metaDesc)}" />
  <meta name="twitter:image" content="${ORIGIN}/assets/og-image.png" />
  <link rel="stylesheet" href="/css/site.css?${V}" />
  <script type="application/ld+json">${schema(slug, d)}</script>
</head>
<body>
${nav(slug)}

  <article class="container narrow" style="padding-top:40px">
    <div class="crumbs"><a href="/index.html">Home</a> › <a href="/blog/index.html">Guides</a> › ${d.h1}</div>
    <h1>${d.h1}</h1>
    <p class="lead">${d.lead}</p>
    <p class="post-meta"><time datetime="${d.date}">${dateLabel}</time> · gantts.app</p>

    <figure class="fig">
      <figcaption>${d.figIntro}</figcaption>
      ${d.figure}
    </figure>

    <div class="prose">
${body}

      <div class="callout">${d.callout}</div>

      <h2 id="templates">Templates that use this</h2>
      <ul>
${tpls}
        <li><a href="/templates.html">Browse all Gantt chart templates</a></li>
      </ul>

      <h2 id="related">Keep reading</h2>
      <ul>
${related}
      </ul>

      <h2 id="faq">Frequently asked questions</h2>
      <div class="faq">
${faq}
      </div>
    </div>
  </article>

  <section class="cta-band">
    <div class="container">
      <h2>Try it on your own plan</h2>
      <p>gantts.app is a free Gantt chart maker that runs in your browser. No account, no download, no watermark on exports.</p>
      <a class="btn btn-white btn-lg" href="/app.html">Open the free editor</a>
    </div>
  </section>

${FOOTER}
  <script src="/js/site.js?${V}"></script>
</body>
</html>
`;
}

let n = 0;
for (const [slug, d] of Object.entries(G)) {
  fs.writeFileSync(path.join(OUT, slug + '.html'), page(slug, d), 'utf8');
  console.log(`  ✓ blog/${slug}.html — ${d.metaTitle}`);
  n++;
}
console.log(`\n✓ ${n} guide(s) generated. Hand-authored posts untouched.\n`);
