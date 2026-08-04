/* inject-freshness.js — ensure every English content page's JSON-LD carries
   a dateModified (git-based freshness) and a Speakable node.

   Why this exists: template/guide pages come from TWO sources — most are
   emitted by gen-template-pages.js / gen-guide-pages.js (which already add
   these), but ~22 templates and ~8 guides are hand-authored static HTML the
   generators never touch. Their localized variants (built by gen-i18n.js)
   already get the signals; only the English originals lag. Rather than
   hand-edit 30 varied files, this idempotent pass normalises all of them.

   Idempotent: a page already carrying dateModified + speakable is left
   byte-for-byte unchanged, so it is safe to run on every build (and does
   not disturb the generated pages).

   Run: node scripts/inject-freshness.js   (or via npm build, after gen:pages)
*/
const fs = require('fs');
const path = require('path');
const { lastModified } = require('./git-dates.js');

const ROOT = path.join(__dirname, '..');
const LD_RE = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/;
const primaryTypes = new Set(['WebPage', 'Article', 'BlogPosting', 'TechArticle']);

function metaOf(html, re) { const m = html.match(re); return m ? m[1] : null; }

function processFile(rel) {
  const abs = path.join(ROOT, rel);
  const html = fs.readFileSync(abs, 'utf8');
  const block = html.match(LD_RE);
  if (!block) return false;

  let data;
  try { data = JSON.parse(block[1]); } catch (e) { console.warn('  ! unparseable JSON-LD:', rel); return false; }
  const graph = Array.isArray(data['@graph']) ? data['@graph'] : [data];

  const isGuide = rel.startsWith('blog/');
  const selector = isGuide ? ['h1', '.lead', '#key-takeaways'] : ['h1', '.lead'];
  const modified = lastModified(rel);
  let changed = false;

  let node = graph.find(n => primaryTypes.has(n['@type']) ||
    (Array.isArray(n['@type']) && n['@type'].some(t => primaryTypes.has(t))));

  if (!node) {
    // Templates typically have only Breadcrumb/HowTo/FAQ — give them a WebPage.
    const canonical = metaOf(html, /<link rel="canonical" href="([^"]+)"/);
    const title = (metaOf(html, /<title>([^<]*)<\/title>/) || '').replace(/\s*\|\s*gantts\.app\s*$/i, '').trim();
    const desc = metaOf(html, /<meta name="description" content="([^"]*)"/) || '';
    if (!canonical) return false;
    node = {
      '@type': 'WebPage', '@id': canonical + '#webpage',
      name: title, url: canonical, description: desc, inLanguage: 'en',
    };
    graph.unshift(node);
    changed = true;
  }
  if (!node.dateModified) { node.dateModified = modified; changed = true; }
  if (!node.speakable) {
    node.speakable = { '@type': 'SpeakableSpecification', cssSelector: selector };
    changed = true;
  }
  if (!changed) return false;

  const out = data['@graph'] ? data : (graph.length === 1 ? graph[0] : { ...data, '@graph': graph });
  if (data['@graph']) data['@graph'] = graph;
  const rebuilt = html.replace(LD_RE, `<script type="application/ld+json">${JSON.stringify(out)}</script>`);
  fs.writeFileSync(abs, rebuilt);
  return true;
}

let scanned = 0, patched = 0;
for (const sub of ['templates', 'blog']) {
  for (const f of fs.readdirSync(path.join(ROOT, sub))) {
    if (!f.endsWith('.html') || f === 'index.html') continue;
    scanned++;
    if (processFile(`${sub}/${f}`)) patched++;
  }
}
console.log(`inject-freshness: ${scanned} English page(s) scanned, ${patched} patched (rest already had dateModified + speakable).`);
