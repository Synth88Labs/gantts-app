#!/usr/bin/env node
/* ============================================================
   build-deploy.js — assemble a clean upload bundle for Namecheap.

   Copies only what the live site needs into deploy/, then writes
   deploy-gantts-app.zip for uploading via cPanel File Manager.

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

// Everything the live site serves.
const INCLUDE_DIRS = ['assets', 'blog', 'css', 'js', 'templates'];
const INCLUDE_FILES = [
  '.htaccess',
  '404.html', 'about.html', 'app.html', 'index.html', 'privacy.html', 'templates.html',
  'robots.txt', 'sitemap.xml', 'site.webmanifest', 'sw.js',
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
// names with backslashes, which violates the ZIP spec. cPanel extracts on Linux
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
console.log('  Upload the ZIP into public_html via cPanel File Manager, then Extract.');
console.log('  Make sure hidden files are visible so .htaccess lands too.');
console.log('');
