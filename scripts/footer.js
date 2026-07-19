/* ============================================================
   footer.js — single source of truth for the English footer.

   Previously the same markup was duplicated in fix-site-meta.js,
   gen-template-pages.js and gen-guide-pages.js. That is how the
   column headings drifted apart in the first place ("Templates" vs
   "Popular templates"), so all three now import from here.

   Links are emitted only if the target file exists, so the footer
   cannot accumulate dead links as content moves.
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const GH = 'https://github.com/Synth88Labs/gantts-app';

const has = (p) => fs.existsSync(path.join(ROOT, p.replace(/^\//, '')));
const link = (href, label, cls) =>
  (href.startsWith('http') || has(href)) ? `<a href="${href}"${cls ? ` class="${cls}"` : ''}>${label}</a>` : '';

const FOOTER = `  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="nav-logo" href="/" aria-label="gantts.app home">
            <img class="brand-mark" src="/assets/logo-mark.svg" alt="" width="28" height="28" />
            <span class="brand-word">gantts<b>.app</b></span>
          </a>
          <p>The free Gantt chart maker that runs in your browser. No account, no upload — your plan stays on your machine.</p>
          <a class="footer-cta" href="/app.html">Open the Gantt maker →</a>
          <p class="footer-byline">A project by <a class="footer-ext" href="https://synth88.com" rel="noopener">Synth88 Labs</a></p>
        </div>
        <div>
          <h4>Templates</h4>
          ${link('/templates.html', 'All templates')}
          ${link('/templates/excel.html', 'Excel')}
          ${link('/templates/powerpoint.html', 'PowerPoint')}
          ${link('/templates/construction.html', 'Construction')}
          ${link('/templates/project-management.html', 'Project management')}
        </div>
        <div>
          <h4>Guides</h4>
          ${link('/blog/', 'All guides')}
          ${link('/blog/what-is-a-gantt-chart.html', 'What is a Gantt chart?')}
          ${link('/blog/critical-path-method.html', 'Critical path method')}
          ${link('/blog/gantt-chart-dependencies.html', 'Dependency types')}
          ${link('/blog/gantt-chart-mistakes.html', 'Common mistakes')}
        </div>
        <div>
          <h4>Company</h4>
          ${link('/about.html', 'About')}
          ${link('/contact.html', 'Contact')}
          ${link('/terms.html', 'Terms of use')}
          ${link('/privacy.html', 'Privacy')}
          ${link('/accessibility.html', 'Accessibility')}
          ${link(GH, 'GitHub', 'footer-ext')}
        </div>
      </div>
      <div class="footer-bottom">
        <span>© <span class="year">2026</span> gantts.app · Free forever, no sign up.</span>
        <span>Built as a static site — nothing you plan leaves your browser.</span>
      </div>
    </div>
  </footer>`;

module.exports = { FOOTER, GH };
