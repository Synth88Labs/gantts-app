#!/usr/bin/env node
/* ftp-rm.js — remove a directory tree from the FTP root.
   Deliberately narrow: refuses anything that is not an explicit,
   non-root path, and lists what it is about to delete first.
   Usage: node scripts/ftp-rm.js /home --yes */
const ftp = require('basic-ftp');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const env = {};
for (const l of fs.readFileSync(path.join(ROOT, '.env'), 'utf8').split(/\r?\n/)) {
  const m = l.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
  if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
}

const target = process.argv[2];
const yes = process.argv.includes('--yes');

if (!target || target === '/' || target === '.' || target === '') {
  console.error('✗ Refusing: pass an explicit sub-path, never the root.\n');
  process.exit(1);
}

(async () => {
  const c = new ftp.Client(30000);
  try {
    await c.access({
      host: env.FTP_HOST, user: env.FTP_USER, password: env.FTP_PASS,
      port: Number(env.FTP_PORT || 21), secure: true,
      secureOptions: { rejectUnauthorized: env.FTP_ALLOW_BAD_CERT !== '1' },
    });
    await c.cd(target);
    const listing = await c.list();
    console.log(`\n${target} contains ${listing.length} entr${listing.length === 1 ? 'y' : 'ies'}:`);
    console.log('  ' + listing.map(f => f.name + (f.isDirectory ? '/' : '')).join('  '));
    if (!yes) {
      console.log('\n(dry run — pass --yes to delete)\n');
      c.close();
      return;
    }
    await c.cd('/');
    await c.removeDir(target);
    const after = (await c.list()).map(f => f.name);
    console.log(`\n✓ Removed ${target}`);
    console.log('  root now: ' + (after.join(' ') || '(empty)') + '\n');
  } catch (e) {
    console.error('✗ ' + e.message);
    process.exitCode = 1;
  } finally { c.close(); }
})();
