#!/usr/bin/env node
/* ============================================================
   build-deploy.js — assemble a clean upload bundle for the host.

   Copies only what the live site needs into deploy/, then writes
   deploy-gantts-app.zip for uploading via the hosting control panel File Manager.

   Deliberately EXCLUDES node_modules, scripts, docs, package files
   and markdown — none of that should ever be publicly served.

   Usage:  node scripts/build-deploy.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'deploy');
const ZIP = path.join(ROOT, 'deploy-gantts-app.zip');

// Everything the live site serves. Locale dirs are listed explicitly so a
// new language cannot be silently left out of the upload.
const INCLUDE_DIRS = ['assets', 'blog', 'css', 'js', 'templates', 'es', 'fr', 'de', 'pt', 'zh'];
const INCLUDE_FILES = [
  '.htaccess',
  '404.html', 'about.html', 'app.html', 'index.html', 'privacy.html', 'templates.html',
  'contact.html', 'terms.html',
  'robots.txt', 'sitemap.xml', 'sitemap.xsl', 'site.webmanifest', 'sw.js',
  // Google's favicon crawler and many older clients only ever request
  // the root path, ignoring <link rel="icon">. Rebuild: npm run gen:favicon
  'favicon.ico',
  // IndexNow ownership proof — must be reachable at the site root
  'b7dddc1da15c113759ec72b4e49e446c.txt',
];

function rimraf(p) { if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true }); }

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc); else acc.push(p);
  }
  return acc;
}

function human(bytes) {
  if (bytes > 1024 * 1024) return (bytes / 1024 / 1024).toFixed(1) + ' MB';
  return (bytes / 1024).toFixed(0) + ' KB';
}

// ---- build ----
rimraf(OUT);
fs.mkdirSync(OUT, { recursive: true });

let missing = [];
for (const f of INCLUDE_FILES) {
  const src = path.join(ROOT, f);
  if (!fs.existsSync(src)) { missing.push(f); continue; }
  fs.copyFileSync(src, path.join(OUT, f));
}
for (const d of INCLUDE_DIRS) {
  const src = path.join(ROOT, d);
  if (!fs.existsSync(src)) { missing.push(d + '/'); continue; }
  copyDir(src, path.join(OUT, d));
}

if (missing.length) {
  console.error('✗ Missing expected files: ' + missing.join(', '));
  process.exit(1);
}

// templates/files holds generated .xlsx/.pptx/.csv and is NOT in git —
// they are build artefacts. A fresh clone therefore has none, and without
// this guard the bundle would ship happily with every download 404ing.
const filesDir = path.join(OUT, 'templates', 'files');
const dl = fs.existsSync(filesDir) ? fs.readdirSync(filesDir) : [];
// three downloads per template: .xlsx, .pptx, .csv
const expectedDl = Object.keys(require('./gen-templates.js').SLUGS).length * 3;
if (dl.length < expectedDl) {
  console.error(`✗ templates/files has ${dl.length} file(s), expected ${expectedDl}.`);
  console.error('  These are generated artefacts and are not tracked in git.');
  console.error('  Run:  npm run gen:templates\n');
  process.exit(1);
}

// ---- safety net: nothing private should have slipped in ----
const files = walk(OUT);
const forbidden = files.filter(f => {
  const rel = path.relative(OUT, f).replace(/\\/g, '/');
  return /(^|\/)node_modules\//.test(rel)
      || /(^|\/)scripts\//.test(rel)
      || /(^|\/)docs\//.test(rel)
      || /\.md$/i.test(rel)
      || /^package(-lock)?\.json$/.test(rel);
});
if (forbidden.length) {
  console.error('✗ Bundle contains files that must not be published:');
  forbidden.forEach(f => console.error('   ' + path.relative(OUT, f)));
  process.exit(1);
}

const totalBytes = files.reduce((n, f) => n + fs.statSync(f).size, 0);
const htmlCount = files.filter(f => f.endsWith('.html')).length;

// ---- zip ----
// NOT PowerShell's Compress-Archive: on Windows PowerShell 5.1 it writes entry
// names with backslashes, which violates the ZIP spec. the hosting control panel extracts on Linux
// and would create files literally named "assets\logo.svg" instead of folders.
// Building the archive directly lets us force forward slashes.
rimraf(ZIP);
let zipped = false;
const psFile = path.join(ROOT, '.zip-bundle.ps1');
const ps = [
  'Add-Type -AssemblyName System.IO.Compression.FileSystem',
  `$src = '${OUT}'`,
  `$archive = [System.IO.Compression.ZipFile]::Open('${ZIP}','Create')`,
  'Get-ChildItem -Path $src -Recurse -File -Force | ForEach-Object {',
  "  $rel = $_.FullName.Substring($src.Length + 1).Replace('\\','/')",
  '  [void][System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, $_.FullName, $rel)',
  '}',
  '$archive.Dispose()',
].join('\r\n');
try {
  fs.writeFileSync(psFile, ps, 'utf8');
  execSync(`powershell -NoProfile -ExecutionPolicy Bypass -File "${psFile}"`, { stdio: 'pipe' });
  zipped = fs.existsSync(ZIP);
} catch (e) {
  console.warn('⚠ Could not create the zip automatically: ' + String(e.message).split('\n')[0]);
} finally {
  if (fs.existsSync(psFile)) fs.unlinkSync(psFile);
}

console.log('');
console.log('✓ Deploy bundle ready');
console.log('  folder : deploy/');
console.log('  files  : ' + files.length + ' (' + htmlCount + ' HTML pages)');
console.log('  size   : ' + human(totalBytes));
if (zipped) console.log('  zip    : deploy-gantts-app.zip (' + human(fs.statSync(ZIP).size) + ')');
console.log('');
console.log('  Upload the ZIP into <document-root> via the hosting control panel File Manager, then Extract.');
console.log('  Make sure hidden files are visible so .htaccess lands too.');
console.log('');
