# gantts.app — Free Online Gantt Chart Maker

A **100% free, no-login, browser-based** Gantt chart maker **plus** a full SEO
content site (homepage, guides, and a downloadable template library). Everything
is static HTML/CSS/vanilla-JS — no backend, no database, no build step — so it
deploys to **Namecheap shared hosting** by simply uploading files.

Live target domain: **gantts.app**

---

## 🚀 Run locally

Serve the folder with any static server (don't open via `file://`):

```bash
cd "Gantt Chart Site"
python -m http.server 8080
# then open http://127.0.0.1:8080
```

(Node alt: `npx serve .`)

---

## 🗺 Site map

| URL | Purpose |
|-----|---------|
| `/index.html` | Marketing homepage (targets "free online gantt chart maker") |
| `/app.html` | The interactive Gantt chart maker (the tool) |
| `/templates.html` | Template library hub |
| `/templates/*.html` | 10 template landing pages (excel, powerpoint, google-sheets, simple, construction, software-development, marketing, event-planning, project-management, research) |
| `/templates/files/*` | Downloadable `.xlsx`, `.pptx`, `.csv` for each template |
| `/blog/*.html` | 8 SEO guides + a guides hub |
| `/about.html`, `/privacy.html`, `/404.html` | Supporting pages |
| `/sitemap.xml`, `/robots.txt`, `/site.webmanifest`, `/sw.js` | SEO + PWA |

Deep-link into the editor with a template preloaded: `/app.html?tpl=construction`
(keys: `software`, `marketing`, `event`, `construction`, `product`, `blank`).

---

## ✨ The app (`/app.html`)

**Editing** — drag to move/resize bars, % progress handle, drag-to-link
dependencies (FS/SS/FF/SF), milestones, collapsible phase groups, indent/outdent,
row drag-reorder, WBS numbering, undo/redo, autosave, multiple projects.

**Power features**
- **Automatic critical path** (CPM) highlighting — free
- **Command palette** — `Ctrl/⌘ K` runs any action by name
- **Present mode** — `F` for a clean full-screen timeline (great in meetings)
- **✨ Paste to Gantt** — paste a plain-text outline and it auto-detects
  durations `(3d/2w)`, phases `#`, milestones `!`, and `after X` dependencies
- **Dark mode** — OS-aware + manual toggle
- **Tips tour** — coach marks on first visit + a floating 💡 button
- **PWA / offline** — installable, app shell cached by `sw.js`

**Import / Export** — PNG, PDF, **Excel (.xlsx)**, **PowerPoint (.pptx)**, CSV,
JSON backup, print, and a **shareable link** (whole chart encoded in the URL, no
server). Import from CSV / JSON.

---

## 🌐 Deploy to Namecheap shared hosting

Because it's a static site, deployment is just uploading files.

1. cPanel → **File Manager** → `public_html`.
2. Upload **everything EXCEPT** `node_modules/`, `scripts/`, `docs/`,
   `package.json`, `package-lock.json`, `.gitignore` (these are dev-only).
   The simple way: zip the project without those folders, upload, Extract.
   **Do upload:** `index.html`, `app.html`, `templates.html`, `about.html`,
   `privacy.html`, `404.html`, `sitemap.xml`, `robots.txt`, `site.webmanifest`,
   `sw.js`, `.htaccess`, and the `assets/`, `css/`, `js/`, `blog/`, `templates/`
   folders (including `templates/files/` and `templates/img/`).
3. Enable **AutoSSL** (free HTTPS) in cPanel, then uncomment the "Force HTTPS"
   block in `.htaccess`.
4. Submit `https://gantts.app/sitemap.xml` in Google Search Console.

### Optional: fully offline exports
The export libraries (jsPDF, html2canvas, SheetJS, PptxGenJS) load from a CDN in
`app.html`. To make export work with zero external requests, download those four
files into a `vendor/` folder and repoint the `<script>` tags.

---

## 🛠 Regenerating assets (dev only)

These Node scripts require the dev dependencies (`npm install`):

```bash
node scripts/gen-templates.js   # rebuild /templates/files/*.{xlsx,pptx,csv}
node scripts/gen-thumbs.js      # rebuild /templates/img/*.svg thumbnails
node scripts/gen-assets.js      # rebuild favicons + og-image.png from the logo
node scripts/gen-sitemap.js     # rebuild sitemap.xml from the .html files
node scripts/check-links.js     # verify every internal link/asset resolves
node scripts/check-seo.js       # verify titles/descriptions/JSON-LD on every page
```

---

## 📁 Structure

```
index.html app.html templates.html about.html privacy.html 404.html
sitemap.xml robots.txt site.webmanifest sw.js .htaccess
assets/   logo(.svg/-white/-mark), favicons, og-image.png, template none
css/      site.css (marketing)   styles.css (app)
js/       site.js (marketing)  +  app modules: util, model, schedule, render,
          interactions, exports, templates, features, app
blog/     index + 8 SEO guides
templates/  10 landing pages  +  files/ (downloads)  +  img/ (thumbnails)
scripts/  dev generators & checkers (do NOT deploy)
docs/     research + build spec (do NOT deploy)
```

No framework, no build step. Plain HTML/CSS/JS on purpose — runs anywhere.

---

## 🔒 Privacy

No backend, no accounts. Projects are saved in the browser's localStorage.
Shareable links encode data in the URL (nothing stored on a server).

## 📄 Licensing

Two licences, deliberately split:

| | Licence |
|---|---|
| **Source code** — `js/`, `css/`, `sw.js`, `scripts/` (build & checks) | [MIT](LICENSE) |
| **Site content** — template pages & files, guides, translations, content models, brand assets | [All rights reserved](LICENSE-CONTENT.md) |

The code is open because the product's core claim is that your project data
never leaves your browser — publishing the source is how that gets verified
rather than just asserted.

The downloadable `.xlsx` / `.pptx` / `.csv` templates are free to use in your
own projects, commercial ones included. The written content and content
models are not licensed for republication. See
[LICENSE-CONTENT.md](LICENSE-CONTENT.md) for the specifics.
