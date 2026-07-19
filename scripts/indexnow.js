#!/usr/bin/env node
/* ============================================================
   indexnow.js — ping IndexNow with every URL in sitemap.xml.

   IndexNow is an open submission protocol: Bing, Yandex, Seznam and
   Naver consume it. No account, no login, no API key exchange — the
   key file hosted at the site root IS the proof of ownership.

   Google does NOT support IndexNow. Google discovery still comes from
   Search Console + the sitemap.

   Prerequisite: the site must be live and
   https://gantts.app/<KEY>.txt must return the key as plain text.

   Usage:
     node scripts/indexnow.js            # submit every sitemap URL
     node scripts/indexnow.js --dry      # print what would be sent
     node scripts/indexnow.js <url> ...  # submit specific URLs only
   ============================================================ */
const fs = require('fs');
const path = require('path');
const https = require('https');

/* The active IndexNow key. The file at https://<HOST>/<KEY>.txt is the
   ONLY proof of ownership in this protocol, so the key here and the
   file at the site root must always agree — a mismatch is the usual
   cause of a 403.

   Both this key file and the previous one are kept in the repo and
   deployed. Retiring a key by deleting its file breaks any submission
   still in flight that quoted it, and costs nothing to keep. */
const KEY = '722a74e8e900485a9d9269f7ade00914';
const HOST = 'gantts.app';
const ENDPOINT = 'https://api.indexnow.org/IndexNow';

const args = process.argv.slice(2);
const dry = args.includes('--dry');
const explicit = args.filter(a => a.startsWith('http'));

function sitemapUrls() {
  const xml = fs.readFileSync(path.join(__dirname, '..', 'sitemap.xml'), 'utf8');
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map(m => m[1]);
}

const urlList = explicit.length ? explicit : sitemapUrls();

if (!urlList.length) {
  console.error('✗ No URLs found to submit.');
  process.exit(1);
}

// Guard against submitting URLs for a host we do not own.
const foreign = urlList.filter(u => { try { return new URL(u).host !== HOST; } catch { return true; } });
if (foreign.length) {
  console.error('✗ Refusing to submit — these URLs are not on ' + HOST + ':');
  foreign.slice(0, 5).forEach(u => console.error('   ' + u));
  process.exit(1);
}

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList,
});

console.log(`IndexNow → ${urlList.length} URL(s) on ${HOST}`);
if (dry) {
  urlList.forEach(u => console.log('   ' + u));
  console.log('\n(dry run — nothing submitted)');
  process.exit(0);
}

const req = https.request(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(payload) },
}, (res) => {
  let body = '';
  res.on('data', c => body += c);
  res.on('end', () => {
    // 200 = accepted, 202 = accepted pending key validation
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log(`✓ Accepted (HTTP ${res.statusCode}). Submitted ${urlList.length} URL(s).`);
      if (res.statusCode === 202) console.log('  202 means the key file is still being validated — normal on first run.');
    } else {
      console.error(`✗ HTTP ${res.statusCode}${body ? ' — ' + body.slice(0, 300) : ''}`);

      /* 403 has two very different causes and the advice for them is
         opposite. Reading errorCode tells them apart instead of
         guessing — the earlier version always blamed an unreachable key
         file, which sent you checking a file that was serving fine. */
      if (res.statusCode === 403) {
        let code = '';
        try { code = (JSON.parse(body) || {}).errorCode || ''; } catch { /* not JSON */ }

        if (/SiteVerificationNotCompleted/i.test(code)) {
          console.error('\n  The key file is fine — this is the search engine still verifying it.');
          console.error('  A newly published key is not accepted immediately. Wait and re-run;');
          console.error('  it usually clears within minutes to a few hours of the file going live.');
          console.error('  Nothing to fix, and re-running is safe: submissions are idempotent.');
        } else if (/KeyNotFound|InvalidKey|Forbidden/i.test(code)) {
          console.error('\n  The key file could not be read, or its contents do not match KEY.');
          console.error(`  Check that ${`https://${HOST}/${KEY}.txt`} returns exactly:`);
          console.error('    ' + KEY);
        } else {
          console.error('\n  Check that the key file is reachable at the keyLocation above');
          console.error('  and that its contents match the key exactly.');
        }
      }
      process.exitCode = 1;
    }
  });
});
req.on('error', e => { console.error('✗ Request failed: ' + e.message); process.exitCode = 1; });
req.write(payload);
req.end();
