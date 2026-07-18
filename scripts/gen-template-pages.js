#!/usr/bin/env node
/* ============================================================
   gen-template-pages.js — build landing pages for the generated
   templates in new-templates.js.

   Mirrors the hand-authored template pages exactly: same markup, same
   nav/footer, and the same schema role (HowTo + FAQPage +
   BreadcrumbList) that check-seo and Google already expect from
   /templates/*. Hand-written pages are never touched.

   Usage: node scripts/gen-template-pages.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const { T } = require('./new-templates.js');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'templates');
const ORIGIN = 'https://gantts.app';
const V = 'v=15';
const GH = 'https://github.com/Synth88Labs/gantts-app';

const esc = (s) => String(s).replace(/&(?!(amp|lt|gt|quot|#\d+|nbsp);)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// copy fields intentionally contain inline markup, so only escape attributes
const attr = (s) => String(s).replace(/&(?!(amp|lt|gt|quot|#\d+);)/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const strip = (s) => String(s).replace(/<[^>]+>/g, '');

/* Related links resolve against what is actually on disk rather than a
   hardcoded list. The hardcoded version silently dropped valid
   cross-links (content-calendar, product-launch...), quietly thinning
   internal linking on every generated page. */
const titleCase = (slug) => slug.replace(/-/g, ' ').replace(/\w/g, c => c.toUpperCase());
function relatedLabel(slug) {
  if (T[slug]) return T[slug].h1;
  const f = path.join(OUT, slug + '.html');
  if (!fs.existsSync(f)) return null;
  const m = fs.readFileSync(f, 'utf8').match(/<h1>([^<]+)<\/h1>/i);
  return m ? m[1].trim() : titleCase(slug) + ' template';
}

function langSwitcher(slug) {
  const sub = `templates/${slug}.html`;
  const opts = [`<option value="/${sub}" selected>English</option>`]
    .concat(['es', 'fr', 'de', 'pt', 'zh'].map((c, i) =>
      `<option value="/${c}/">${['Español', 'Français', 'Deutsch', 'Português', '简体中文'][i]}</option>`));
  return `<select class="lang-select" data-lang-nav aria-label="Language" title="Language" onchange="if(this.value)location.href=this.value">\n          ${opts.join('\n          ')}\n        </select>`;
}

function nav(slug) {
  return `  <header class="nav">
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
}

const FOOTER = `  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="nav-logo" href="/index.html" aria-label="gantts.app home">
            <img class="brand-mark" src="/assets/logo-mark.svg" alt="" width="30" height="30" />
            <span class="brand-word">gantts<b>.app</b></span>
          </a>
          <p style="margin-top:12px">The free, no-login Gantt chart maker. Plan projects, see the critical path, and export to PDF, PNG, Excel &amp; PowerPoint — right in your browser.</p>
        </div>
        <div><h4>Product</h4><a href="/app.html">Gantt Chart Maker</a><a href="/templates.html">Templates</a><a href="/app.html">Import CSV / JSON</a><a href="/app.html">Export PDF / Excel / PPT</a></div>
        <div><h4>Guides</h4><a href="/blog/what-is-a-gantt-chart.html">What is a Gantt chart?</a><a href="/blog/how-to-make-a-gantt-chart.html">How to make one</a><a href="/blog/gantt-chart-in-excel.html">Gantt chart in Excel</a><a href="/blog/critical-path-method.html">Critical path method</a></div>
        <div><h4>Templates</h4><a href="/templates/excel.html">Excel template</a><a href="/templates/powerpoint.html">PowerPoint template</a><a href="/templates/construction.html">Construction</a><a href="/templates/marketing.html">Marketing</a></div>
      </div>
      <div class="footer-bottom">
        <span>© <span class="year">2026</span> gantts.app · Free forever, no sign up.</span>
        <span><a href="/about.html">About</a> · <a href="/contact.html">Contact</a> · <a href="/terms.html">Terms</a> · <a href="/privacy.html">Privacy</a> · <a href="${GH}" rel="noopener">GitHub</a></span>
      </div>
    </div>
  </footer>`;

function schema(slug, d) {
  const url = `${ORIGIN}/templates/${slug}.html`;
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: ORIGIN + '/' },
          { '@type': 'ListItem', position: 2, name: 'Templates', item: ORIGIN + '/templates.html' },
          { '@type': 'ListItem', position: 3, name: d.h1, item: url },
        ],
      },
      {
        '@type': 'HowTo',
        name: `How to use the ${strip(d.title).toLowerCase()} template`,
        description: strip(d.metaDesc),
        inLanguage: 'en',
        step: d.customize.slice(0, 5).map((c, i) => ({
          '@type': 'HowToStep', position: i + 1, name: strip(c).slice(0, 70), text: strip(c),
        })),
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
  const url = `${ORIGIN}/templates/${slug}.html`;
  const phases = d.phases.map(([h, p]) => `        <li><strong>${h}</strong> — ${p}</li>`).join('\n');
  const custom = d.customize.map(c => `        <li>${c}</li>`).join('\n');
  const tips = d.tips.map(t => `        <li>${t}</li>`).join('\n');
  const related = d.related
    .map(r => ({ r, label: relatedLabel(r) }))
    .filter(x => x.label)
    .map(x => `        <li><a href="/templates/${x.r}.html">${x.label}</a></li>`).join('\n');
  const faq = d.faq.map(([q, a], i) =>
    `        <details${i === 0 ? ' open' : ''}><summary>${q}</summary><p>${a}</p></details>`).join('\n');

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
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="gantts.app" />
  <meta property="og:title" content="${attr(d.metaTitle)}" />
  <meta property="og:description" content="${attr(d.metaDesc)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${ORIGIN}/assets/og-image.png" />
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
    <div class="crumbs"><a href="/index.html">Home</a> › <a href="/templates.html">Templates</a> › ${esc(d.h1)}</div>
    <h1>${esc(d.h1)}</h1>
    <p class="lead">${d.lead}</p>

    <p><img src="/templates/img/${slug}.svg" alt="Preview of the ${attr(strip(d.title).toLowerCase())} template showing phases across a timeline" style="width:100%;height:auto;margin:20px 0" /></p>

    <div class="dl-row">
      <a class="btn btn-primary" href="/templates/files/${slug}.xlsx" download>⬇ Excel (.xlsx)</a>
      <a class="btn" href="/templates/files/${slug}.pptx" download>⬇ PowerPoint</a>
      <a class="btn" href="/templates/files/${slug}.csv" download>⬇ CSV</a>
      <a class="btn btn-primary" href="/app.html?csv=${slug}">✎ Edit online free</a>
    </div>

    <div class="prose">
      <h2 id="whats-included">What's included</h2>
      <p>${d.intro}</p>
      <ul>
${phases}
      </ul>

      <div class="callout">${d.callout}</div>

      <h2 id="customize">How to customize it</h2>
      <ol>
${custom}
      </ol>

      <h2 id="tips">Scheduling tips</h2>
      <ul>
${tips}
      </ul>

      <h2 id="related">Related templates</h2>
      <ul>
${related}
        <li><a href="/templates.html">Browse all Gantt chart templates</a></li>
      </ul>

      <h2 id="faq">Frequently asked questions</h2>
      <div class="faq">
${faq}
      </div>
    </div>
  </article>

  <section class="cta-band">
    <div class="container">
      <h2>Plan it online — free</h2>
      <p>Open this template in the editor, drag the bars to fit your dates, and export to PDF, Excel or PowerPoint. No account, no watermark.</p>
      <a class="btn btn-white btn-lg" href="/app.html?csv=${slug}">Open the free editor</a>
    </div>
  </section>

${FOOTER}
  <script src="/js/site.js?${V}"></script>
</body>
</html>
`;
}

let n = 0;
for (const [slug, d] of Object.entries(T)) {
  fs.writeFileSync(path.join(OUT, slug + '.html'), page(slug, d), 'utf8');
  console.log(`  ✓ templates/${slug}.html — ${d.metaTitle}`);
  n++;
}
console.log(`\n✓ ${n} template page(s) generated. Hand-authored pages untouched.\n`);
