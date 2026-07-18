#!/usr/bin/env node
/* ============================================================
   add-verification.js — insert search-engine verification meta tags.

   Both Google Search Console and Bing Webmaster Tools offer an
   HTML-meta-tag verification method. Paste the token values here and
   the tags go into index.html (site root is all either one checks).

   These tokens are NOT secrets — they only prove you control the site,
   and they are publicly visible in the page source either way.

   Usage:
     node scripts/add-verification.js --google=TOKEN
     node scripts/add-verification.js --bing=TOKEN
     node scripts/add-verification.js --google=TOK1 --bing=TOK2
     node scripts/add-verification.js --status
   ============================================================ */
const fs = require('fs');
const path = require('path');

const INDEX = path.join(__dirname, '..', 'index.html');
const args = process.argv.slice(2);

const arg = (name) => {
  const hit = args.find(a => a.startsWith('--' + name + '='));
  return hit ? hit.split('=').slice(1).join('=').trim() : null;
};

let html = fs.readFileSync(INDEX, 'utf8');

const PROVIDERS = {
  google: { meta: 'google-site-verification', label: 'Google Search Console' },
  bing:   { meta: 'msvalidate.01',            label: 'Bing Webmaster Tools' },
};

if (args.includes('--status') || !args.length) {
  console.log('\nVerification tag status in index.html:\n');
  for (const [k, p] of Object.entries(PROVIDERS)) {
    const m = html.match(new RegExp(`<meta\\s+name=["']${p.meta}["']\\s+content=["']([^"']*)["']`, 'i'));
    console.log(`  ${p.label.padEnd(24)} ${m ? '✓ ' + m[1] : '— not set'}`);
  }
  console.log('\nUsage: node scripts/add-verification.js --google=TOKEN --bing=TOKEN\n');
  process.exit(0);
}

let changed = 0;
for (const [k, p] of Object.entries(PROVIDERS)) {
  const token = arg(k);
  if (!token) continue;
  if (/["'<>]/.test(token)) {
    console.error(`✗ ${p.label}: token contains invalid characters — paste only the content="..." value.`);
    process.exit(1);
  }
  const tag = `<meta name="${p.meta}" content="${token}" />`;
  const existing = new RegExp(`\\s*<meta\\s+name=["']${p.meta}["'][^>]*>`, 'i');
  if (existing.test(html)) {
    html = html.replace(existing, '\n  ' + tag);
    console.log(`✓ ${p.label}: updated`);
  } else {
    // sit right after <head> so crawlers see it immediately
    html = html.replace(/<head>/i, '<head>\n  ' + tag);
    console.log(`✓ ${p.label}: added`);
  }
  changed++;
}

if (!changed) {
  console.error('✗ Nothing to do. Pass --google=TOKEN and/or --bing=TOKEN (or --status).');
  process.exit(1);
}

fs.writeFileSync(INDEX, html, 'utf8');
console.log('\nWrote index.html. Rebuild the bundle and re-upload:');
console.log('  node scripts/build-deploy.js\n');
