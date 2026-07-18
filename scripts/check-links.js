/* check-links.js — verify every local href/src in every HTML page resolves. */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const SKIP_DIR = new Set(['node_modules', 'scripts', 'docs', '.claude', '.git', 'deploy', 'i18n']);

function htmlFiles(dir, base = '') {
  let out = [];
  for (const n of fs.readdirSync(dir)) {
    if (SKIP_DIR.has(n)) continue;
    const abs = path.join(dir, n);
    if (fs.statSync(abs).isDirectory()) out = out.concat(htmlFiles(abs, base + n + '/'));
    else if (n.endsWith('.html')) out.push(base + n);
  }
  return out;
}

const pages = htmlFiles(ROOT);
let problems = 0, checked = 0;
const attrRe = /(?:href|src)\s*=\s*["']([^"']+)["']/gi;

pages.forEach(page => {
  const html = fs.readFileSync(path.join(ROOT, page), 'utf8');
  let m;
  const seen = new Set();
  while ((m = attrRe.exec(html))) {
    let link = m[1].trim();
    if (seen.has(link)) continue; seen.add(link);
    if (/^(https?:|mailto:|tel:|javascript:|data:|#)/i.test(link)) continue;
    let target = link.split('#')[0].split('?')[0];
    if (!target) continue;
    let abs;
    if (target.startsWith('/')) abs = path.join(ROOT, target);
    else abs = path.join(ROOT, path.dirname(page), target);
    checked++;
    if (!fs.existsSync(abs)) { problems++; console.log('  ✗ [' + page + '] -> ' + link); }
  }
});

console.log('\nChecked ' + checked + ' local links across ' + pages.length + ' pages.');
console.log(problems === 0 ? '✓ All local links resolve.' : ('✗ ' + problems + ' broken link(s).'));
process.exit(problems ? 1 : 0);
