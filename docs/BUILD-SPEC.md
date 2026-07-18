# gantts.app — Page Build Spec (READ FIRST)

You are building static HTML pages for **gantts.app**, a free, no-login, browser-based Gantt chart maker. Pages are plain HTML using the shared stylesheet `/css/site.css` and `/js/site.js`. **Use absolute root paths** (`/app.html`, `/assets/logo.svg`, `/css/site.css`) since the site is served from the domain root. Look at `/index.html` (the homepage) as the canonical reference for structure, classes, tone, and quality.

## Non-negotiables
- The product's angle is **100% free · no sign up · no login · runs in your browser · export to PDF/PNG/Excel/PowerPoint · automatic critical path**. Weave these naturally.
- Primary CTA is always **`/app.html`** ("Open the Gantt maker", "Make a Gantt chart free", etc.). Every page must link to `/app.html` at least twice and to `/templates.html` once.
- Internal-link generously between guides and templates (hub-and-spoke).
- Write genuinely useful, accurate, non-fluffy content. Target the keyword but read naturally. E-E-A-T: be honest and specific.
- Every page: unique `<title>` (<60 chars), `<meta name="description">` (<155 chars), `<link rel="canonical">`, Open Graph tags, and appropriate JSON-LD.
- Responsive is handled by site.css — just use its classes (`.container`, `.prose`, `.narrow`, `.grid`, `.card`, `.faq`, `.tpl-grid`, `.crumbs`, `.toc`, `.cta-band`, `.btn`, `.btn-primary`, `.callout`).
- Use real, sensible content. Do NOT invent fake statistics, fake reviews, or fake author bios. For article author, use "The gantts.app team". Use `datePublished` "2026-07-14" and `dateModified` "2026-07-14".

## HEAD boilerplate (fill the ALL-CAPS placeholders)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TITLE_UNDER_60_CHARS</title>
  <meta name="description" content="META_DESCRIPTION_UNDER_155" />
  <link rel="canonical" href="https://gantts.app/CANONICAL_PATH" />
  <meta name="theme-color" content="#3b82f6" />
  <link rel="icon" href="/assets/logo-mark.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
  <meta property="og:type" content="OG_TYPE" /> <!-- "article" for blog, "website" otherwise -->
  <meta property="og:site_name" content="gantts.app" />
  <meta property="og:title" content="OG_TITLE" />
  <meta property="og:description" content="OG_DESC" />
  <meta property="og:url" content="https://gantts.app/CANONICAL_PATH" />
  <meta property="og:image" content="https://gantts.app/assets/og-image.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="stylesheet" href="/css/site.css" />
  <!-- PAGE JSON-LD HERE -->
</head>
<body>
```

## NAV (paste verbatim right after `<body>`)
```html
<header class="nav">
  <div class="container nav-inner">
    <a class="nav-logo" href="/index.html" aria-label="gantts.app home">
      <img class="logo-light" src="/assets/logo.svg" alt="gantts.app" width="200" height="30" />
      <img class="logo-dark" src="/assets/logo-white.svg" alt="gantts.app" width="200" height="30" />
    </a>
    <nav class="nav-links" id="navLinks" aria-label="Primary">
      <a href="/app.html">Gantt Maker</a>
      <a href="/templates.html">Templates</a>
      <a href="/blog/index.html">Guides</a>
      <a href="/blog/what-is-a-gantt-chart.html">What is a Gantt chart?</a>
      <a href="/blog/best-free-gantt-chart-software.html">Compare</a>
    </nav>
    <div class="nav-spacer"></div>
    <div class="nav-cta">
      <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle dark mode">🌙</button>
      <a class="btn btn-primary" href="/app.html">Open the app →</a>
      <button class="nav-burger" aria-label="Menu">☰</button>
    </div>
  </div>
</header>
```

## FOOTER (paste verbatim before `</body>`, then the script tag)
```html
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="nav-logo" href="/index.html" aria-label="gantts.app home">
          <img class="logo-light" src="/assets/logo.svg" alt="gantts.app" width="180" height="27" />
          <img class="logo-dark" src="/assets/logo-white.svg" alt="gantts.app" width="180" height="27" />
        </a>
        <p style="margin-top:12px">The free, no-login Gantt chart maker. Plan projects, see the critical path, and export to PDF, PNG, Excel &amp; PowerPoint — right in your browser.</p>
      </div>
      <div><h4>Product</h4><a href="/app.html">Gantt Chart Maker</a><a href="/templates.html">Templates</a><a href="/app.html">Import CSV / JSON</a><a href="/app.html">Export PDF / Excel / PPT</a></div>
      <div><h4>Guides</h4><a href="/blog/what-is-a-gantt-chart.html">What is a Gantt chart?</a><a href="/blog/how-to-make-a-gantt-chart.html">How to make one</a><a href="/blog/gantt-chart-in-excel.html">Gantt chart in Excel</a><a href="/blog/critical-path-method.html">Critical path method</a></div>
      <div><h4>Templates</h4><a href="/templates/excel.html">Excel template</a><a href="/templates/powerpoint.html">PowerPoint template</a><a href="/templates/construction.html">Construction</a><a href="/templates/marketing.html">Marketing</a></div>
    </div>
    <div class="footer-bottom">
      <span>© <span class="year">2026</span> gantts.app · Free forever, no sign up.</span>
      <span><a href="/about.html">About</a> · <a href="/privacy.html">Privacy</a></span>
    </div>
  </div>
</footer>
<script src="/js/site.js"></script>
</body>
</html>
```

## Article page body pattern (for /blog/* pages)
```html
<article class="container narrow" style="padding-top:40px">
  <div class="crumbs"><a href="/index.html">Home</a> › <a href="/blog/index.html">Guides</a> › PAGE NAME</div>
  <h1>H1_HERE</h1>
  <p class="post-meta"><span>By the gantts.app team</span><span>Updated July 14, 2026</span><span>N min read</span></p>
  <p class="lead">One-paragraph intro that answers the query fast (good for featured snippet).</p>
  <div class="toc"><strong>On this page</strong><ol><li><a href="#slug">Section</a></li>...</ol></div>
  <div class="prose">
    <h2 id="slug">Section…</h2>
    ...
    <!-- include a .callout with a CTA to /app.html somewhere mid-article -->
    <div class="callout"><strong>Skip the manual work.</strong> Build this free in your browser with the <a href="/app.html">gantts.app Gantt maker</a> — then export to Excel, PowerPoint, PDF or PNG. No sign up.</div>
    ...
    <h2 id="faq">Frequently asked questions</h2>
    <div class="faq"> <details>…</details> ... </div>
  </div>
</article>
<!-- CTA band before footer -->
<section><div class="container"><div class="cta-band"><h2>Make your Gantt chart now</h2><p>Free, no sign up. Add tasks, dependencies and critical path, then export.</p><a class="btn btn-white btn-lg" href="/app.html">Open the Gantt maker →</a></div></div></section>
```
Article JSON-LD must include `BlogPosting` (headline, description, author {"@type":"Person"/"Organization","name":"The gantts.app team"}, datePublished, dateModified, image, mainEntityOfPage) + `BreadcrumbList` + `FAQPage` (matching the visible FAQ). For how-to articles also include a `HowTo` with numbered `HowToStep`s that match the visible steps.

Keep visible FAQ text identical to FAQPage schema text.
