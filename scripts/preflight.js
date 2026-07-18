#!/usr/bin/env node
/* ============================================================
   preflight.js — refuse to deploy code that is not on GitHub.

   Workflow is: develop locally -> push to GitHub -> deploy to server.
   This enforces the middle step, so the live site always corresponds to
   a commit you can find, diff and roll back to. Without it, "what is
   actually on the server?" becomes unanswerable the first time a hotfix
   is uploaded straight from a laptop.

   Checks, in order:
     1. inside a git repo
     2. no uncommitted changes to tracked files
     3. no untracked files that would ship (ignores gitignored artefacts)
     4. local branch is not ahead of origin  -> push first
     5. local branch is not behind origin    -> pull first

   Bypass with --force only when you know why (e.g. origin unreachable).

   Usage: node scripts/preflight.js
   ============================================================ */
const { execSync } = require('child_process');

const force = process.argv.includes('--force');
const sh = (cmd) => execSync(cmd, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }).trim();

function fail(msg, fix) {
  console.error('\n✗ ' + msg);
  if (fix) console.error('  ' + fix);
  console.error('\n  Deploy blocked. Use --force to override deliberately.\n');
  process.exit(1);
}

try {
  sh('git rev-parse --is-inside-work-tree');
} catch {
  if (force) { console.warn('⚠ not a git repo — continuing (--force)\n'); process.exit(0); }
  fail('Not a git repository.', 'The deploy expects the site to be version-controlled.');
}

const dirty = sh('git status --porcelain');
if (dirty && !force) {
  const lines = dirty.split('\n').slice(0, 8);
  fail(
    `${dirty.split('\n').length} uncommitted change(s):\n    ` + lines.join('\n    '),
    'Commit them first — the server should only ever run committed code.'
  );
}

let ahead = 0, behind = 0, remoteOk = true;
try {
  sh('git fetch -q origin');
  ahead = Number(sh('git rev-list --count origin/main..HEAD'));
  behind = Number(sh('git rev-list --count HEAD..origin/main'));
} catch {
  remoteOk = false;
}

if (!remoteOk) {
  if (!force) fail('Could not reach origin to compare.', 'Check your connection, or use --force if you are offline on purpose.');
  console.warn('⚠ origin unreachable — continuing (--force)');
} else {
  if (ahead && !force) {
    fail(`${ahead} commit(s) not pushed to GitHub.`, 'Run: git push origin main');
  }
  if (behind && !force) {
    fail(`${behind} commit(s) on origin that you do not have.`,
      'Run: git pull --rebase origin main   (someone else may have deployed since)');
  }
}

const head = sh('git rev-parse --short HEAD');
const subject = sh('git log -1 --pretty=%s');
console.log(`✓ preflight: working tree clean, in sync with origin`);
console.log(`  deploying ${head} — ${subject.slice(0, 60)}${subject.length > 60 ? '…' : ''}`);
