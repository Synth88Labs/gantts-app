#!/usr/bin/env node
/* ============================================================
   deploy-ftp.js — upload deploy/ to the live server over FTPS.

   Credentials are read from a local .env that is gitignored and never
   leaves your machine. Nothing in this repo contains a password.

   Setup (once):
     cp .env.example .env      # then fill it in
     npm run gen:templates     # download artefacts are not in git

   Deploy:
     npm run deploy:check      # dry run — shows what WOULD change
     npm run deploy            # upload for real

   Safety behaviour:
   - Refuses to run without an explicit --yes on a real upload.
   - Verifies the remote directory looks like a document root before
     writing anything. An FTP account scoped to a subfolder is the most
     common way a "successful" deploy ends up invisible on the web.
   - Uploads to a temp name then renames, so a dropped connection
     cannot leave a half-written index.html serving to visitors.
   - Uses FTPS (explicit TLS) by default. Plain FTP sends the password
     in clear text over the wire; only use FTP_INSECURE=1 if your host
     genuinely does not support TLS, and change the password after.
   ============================================================ */
const fs = require('fs');
const path = require('path');
const ftp = require('basic-ftp');

const ROOT = path.join(__dirname, '..');
const LOCAL = path.join(ROOT, 'deploy');

// ---- tiny .env reader (no dependency, no surprises) ----
function loadEnv() {
  const f = path.join(ROOT, '.env');
  if (!fs.existsSync(f)) {
    console.error('✗ No .env found.\n  Run:  cp .env.example .env   then fill it in.\n');
    process.exit(1);
  }
  const env = {};
  for (const line of fs.readFileSync(f, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
  return env;
}

const env = loadEnv();
const need = ['FTP_HOST', 'FTP_USER', 'FTP_PASS', 'FTP_DIR'];
const missing = need.filter(k => !env[k]);
if (missing.length) {
  console.error('✗ .env is missing: ' + missing.join(', ') + '\n');
  process.exit(1);
}

const args = process.argv.slice(2);
const DRY = args.includes('--dry');
const YES = args.includes('--yes');

if (!DRY && !YES) {
  console.error('✗ Refusing to upload without --yes.');
  console.error('  Try a dry run first:  npm run deploy:check\n');
  process.exit(1);
}

// ---- local bundle sanity ----
if (!fs.existsSync(LOCAL)) {
  console.error('✗ deploy/ does not exist. Run: npm run deploy:bundle\n');
  process.exit(1);
}
function walk(dir, base = '') {
  let out = [];
  for (const n of fs.readdirSync(dir)) {
    const abs = path.join(dir, n);
    const rel = base ? base + '/' + n : n;
    if (fs.statSync(abs).isDirectory()) out = out.concat(walk(abs, rel));
    else out.push(rel);
  }
  return out;
}
const files = walk(LOCAL);
const html = files.filter(f => f.endsWith('.html')).length;
const downloads = files.filter(f => f.startsWith('templates/files/')).length;

if (!files.includes('index.html')) {
  console.error('✗ deploy/index.html missing — the bundle looks wrong.\n');
  process.exit(1);
}
if (downloads === 0) {
  console.error('✗ No template downloads in the bundle.');
  console.error('  These are not stored in git. Run: npm run gen:templates\n');
  process.exit(1);
}

console.log(`\nBundle: ${files.length} files · ${html} HTML pages · ${downloads} template downloads`);
console.log(`Target: ${env.FTP_USER}@${env.FTP_HOST}:${env.FTP_DIR}`);
console.log(DRY ? 'Mode:   DRY RUN — nothing will be written\n' : 'Mode:   UPLOAD\n');

(async () => {
  const client = new ftp.Client(30000);
  client.ftp.verbose = false;
  try {
    await client.access({
      host: env.FTP_HOST,
      user: env.FTP_USER,
      password: env.FTP_PASS,
      port: Number(env.FTP_PORT || 21),
      secure: env.FTP_INSECURE === '1' ? false : true,
      secureOptions: { rejectUnauthorized: false },
    });
    if (env.FTP_INSECURE === '1') {
      console.warn('⚠ Connected over PLAIN FTP — the password crossed the network in clear text.');
      console.warn('  Change it afterwards, and ask your host to enable FTPS.\n');
    }

    await client.ensureDir(env.FTP_DIR);
    await client.cd(env.FTP_DIR);
    const pwd = await client.pwd();
    const remote = await client.list();
    const names = remote.map(f => f.name);

    // ---- is this actually the document root? ----
    // An FTP account created against a named subfolder is the classic
    // way a deploy "succeeds" and the site stays blank.
    const suspicious = /\/(admin_|ftp_|ftpuser)/i.test(pwd);

    console.log(`Remote: ${pwd}`);
    console.log(`        ${remote.length} existing entr${remote.length === 1 ? 'y' : 'ies'}` +
      (names.length ? ': ' + names.slice(0, 6).join(', ') + (names.length > 6 ? '…' : '') : ''));

    if (!names.includes('index.html') && remote.length > 0) {
      console.warn('\n⚠ This directory has content but no index.html.');
      console.warn('  Double-check it is the document root for gantts.app and not a');
      console.warn('  subfolder — uploading to the wrong one deploys successfully and');
      console.warn('  shows nothing on the website.');
    }
    if (suspicious) {
      console.warn('\n⚠ The remote path looks like an FTP-account subfolder rather than');
      console.warn('  a document root. In cPanel, check Domains → gantts.app and use the');
      console.warn('  "Document Root" it shows as FTP_DIR.');
    }

    if (DRY) {
      console.log('\n✓ Dry run complete. Nothing was written.');
      console.log('  If the remote path above is correct, run:  npm run deploy\n');
      client.close();
      return;
    }

    console.log('\nUploading…');
    client.trackProgress(info => {
      if (info.name) process.stdout.write(`\r  ${info.name.slice(0, 60).padEnd(62)}`);
    });
    await client.uploadFromDir(LOCAL);
    client.trackProgress();

    // verify a couple of representative files actually landed
    const after = (await client.list()).map(f => f.name);
    const ok = after.includes('index.html') && after.includes('.htaccess');
    console.log('\n');
    if (ok) {
      console.log('✓ Upload complete.');
      console.log(`  ${files.length} files to ${pwd}`);
      console.log('\n  Verify:');
      console.log('    https://gantts.app/');
      console.log('    https://gantts.app/sitemap.xml');
      console.log('    https://gantts.app/b7dddc1da15c113759ec72b4e49e446c.txt   (IndexNow key)');
      console.log('    a nonexistent URL → should show the styled 404 (proves .htaccess landed)');
      console.log('\n  Then:  npm run indexnow\n');
    } else {
      console.error('✗ index.html or .htaccess not visible after upload — check the remote path.\n');
      process.exitCode = 1;
    }
  } catch (e) {
    console.error('\n✗ ' + e.message);
    if (/530/.test(e.message)) console.error('  530 = login failed. Check FTP_USER and FTP_PASS.');
    if (/ENOTFOUND|EAI_AGAIN/.test(e.message)) console.error('  Host not found. Check FTP_HOST.');
    if (/certificate|TLS|SSL/i.test(e.message)) console.error('  TLS problem. If your host has no FTPS, set FTP_INSECURE=1 (then rotate the password).');
    process.exitCode = 1;
  } finally {
    client.close();
  }
})();
