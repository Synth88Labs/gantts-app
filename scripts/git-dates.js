/* git-dates.js — last content-change date per file, from git history.

   Shared by the schema builders (gen-template-pages, gen-i18n) so a page's
   JSON-LD dateModified reflects when its content actually last changed —
   the same honest, per-file signal gen-sitemap.js already uses for
   <lastmod>. History is walked once and memoised; the first (most recent)
   commit date seen for a path wins. Untracked/brand-new files fall back to
   today. `new Date()` is fine here — this is a build script, not a
   deterministic workflow. */
const { execSync } = require('child_process');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const TODAY = new Date().toISOString().slice(0, 10);
let MAP = null;

function load() {
  if (MAP) return MAP;
  MAP = Object.create(null);
  try {
    const out = execSync('git log --pretty=format:%cs --name-only --diff-filter=AM',
      { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
    let date = null;
    for (const line of out.split('\n')) {
      const t = line.trim();
      if (!t) continue;
      if (/^\d{4}-\d{2}-\d{2}$/.test(t)) { date = t; continue; }
      if (date && !(t in MAP)) MAP[t] = date;  // first hit = most recent
    }
  } catch (e) {
    /* history unavailable (shallow clone, etc.) — everything falls to today */
  }
  return MAP;
}

// relPath is repo-relative with forward slashes, e.g. 'templates/foo.html'.
function lastModified(relPath) {
  const m = load();
  return m[relPath.replace(/\\/g, '/')] || TODAY;
}

module.exports = { lastModified };
