#!/usr/bin/env node
/* ftp-inspect.js — list remote directories, to work out where the FTP
   account is actually rooted. Read-only; writes nothing.
   Usage: node scripts/ftp-inspect.js [path ...] */
const ftp = require('basic-ftp');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const env = {};
for (const l of fs.readFileSync(path.join(ROOT, '.env'), 'utf8').split(/\r?\n/)) {
  const m = l.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
  if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
}

const paths = process.argv.slice(2).length ? process.argv.slice(2)
  : ['/', '/<document-root>', '/home'];

(async () => {
  const c = new ftp.Client(30000);
  try {
    await c.access({
      host: env.FTP_HOST, user: env.FTP_USER, password: env.FTP_PASS,
      port: Number(env.FTP_PORT || 21), secure: true,
      secureOptions: { rejectUnauthorized: env.FTP_ALLOW_BAD_CERT !== '1' },
    });
    for (const p of paths) {
      try {
        await c.cd(p);
        const l = await c.list();
        const dirs = l.filter(f => f.isDirectory).map(f => f.name + '/');
        const files = l.filter(f => !f.isDirectory).map(f => f.name);
        console.log(`\n${p}  — ${l.length} entries`);
        if (dirs.length) console.log('  dirs:  ' + dirs.slice(0, 14).join(' '));
        if (files.length) console.log('  files: ' + files.slice(0, 14).join(' '));
      } catch (e) {
        console.log(`\n${p}  — ${e.message.split('\n')[0].slice(0, 60)}`);
      }
    }
  } catch (e) {
    console.error('✗ ' + e.message);
    process.exitCode = 1;
  } finally { c.close(); }
})();
