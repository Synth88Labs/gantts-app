# Launch checklist — gantts.app

Do these in order. Steps marked **(you)** need your accounts or credentials
and cannot be automated from here.

---

## 1. Build the upload bundle

```bash
node scripts/build-deploy.js
```

Produces `deploy/` and `deploy-gantts-app.zip` (~945 KB, 156 files, 37 pages).

The script refuses to build if `node_modules/`, `scripts/`, `docs/`, or any
`.md` file leaks into the bundle — none of that should ever be public.

> The zip is written with forward-slash entry names on purpose. PowerShell's
> `Compress-Archive` writes Windows backslashes, which cPanel (Linux) extracts
> as files literally named `assets\logo.svg` instead of folders.

---

## 2. Upload to Namecheap **(you)**

1. cPanel → **File Manager** → `public_html`
2. **Settings** (top right) → tick **Show Hidden Files (dotfiles)**
   — without this you will not see `.htaccess` and half the config silently
   does nothing.
3. Delete any placeholder `index.html` / `default.html` already there.
4. **Upload** `deploy-gantts-app.zip`
5. Right-click it → **Extract** into `public_html`
6. Delete the zip afterwards.

Verify these load:

- `https://gantts.app/` — homepage
- `https://gantts.app/app.html` — the editor
- `https://gantts.app/sitemap.xml` — 36 URLs
- `https://gantts.app/robots.txt`
- `https://gantts.app/b7dddc1da15c113759ec72b4e49e446c.txt` — must return the
  bare key as plain text (IndexNow proof — step 5 fails without it)
- Visit a nonexistent URL → should show the styled 404, not Apache's default
  (proves `.htaccess` uploaded)

---

## 3. Turn on SSL, then force HTTPS **(you)**

1. cPanel → **SSL/TLS Status** → run **AutoSSL** on the domain. Wait until the
   certificate is issued.
2. Only once `https://` works, edit `.htaccess` and **uncomment the rewrite
   block** near the bottom (force HTTPS + canonical non-www).

Doing this before the certificate exists creates a redirect loop that takes the
site down.

Why it matters for SEO: until redirects are in place, `http://`, `https://`,
`www.` and non-`www` are four crawlable copies of every page. The canonical
tags already point at `https://gantts.app/...`, which mitigates it, but real
301s are what you want.

---

## 4. Google Search Console **(you)**

1. <https://search.google.com/search-console> → **Add property**
2. Choose **URL prefix**: `https://gantts.app`
3. Pick the **HTML tag** verification method and copy the `content="..."` value
4. Back here:
   ```bash
   node scripts/add-verification.js --google=THE_TOKEN
   node scripts/build-deploy.js
   ```
   Re-upload, then click **Verify**.
5. **Sitemaps** → submit `sitemap.xml`
6. **URL Inspection** → paste `https://gantts.app/` → **Request Indexing**
   (do this for the homepage, `/templates.html`, and `/blog/` — don't bother
   for all 36, the sitemap handles the rest)

Expect nothing for a few days. First impressions typically show in 1–2 weeks;
meaningful ranking movement takes longer.

---

## 5. Bing — two routes, do both

### 5a. Bing Webmaster Tools **(you)**

<https://www.bing.com/webmasters> → Add site → verify. The fastest path is
**Import from Google Search Console** once step 4 is done. Otherwise use the
meta tag:

```bash
node scripts/add-verification.js --bing=THE_TOKEN
```

Then submit `sitemap.xml`.

### 5b. IndexNow — no account needed

Once the site is live and the key file resolves:

```bash
node scripts/indexnow.js --dry   # check the URL list first
node scripts/indexnow.js         # submit
```

Pushes all 36 URLs to Bing, Yandex, Seznam and Naver instantly. `202` on the
first run is normal (key still validating). **Google does not support
IndexNow** — Google discovery comes only from step 4.

Re-run this after publishing new template or guide pages.

---

## 6. After every content update

```bash
node scripts/gen-sitemap.js      # regenerate sitemap with new pages
node scripts/check-links.js      # all internal links resolve
node scripts/check-seo.js        # titles, descriptions, JSON-LD
node scripts/build-deploy.js     # rebuild bundle
# upload, then:
node scripts/indexnow.js         # ping Bing et al
```

In Search Console, resubmit the sitemap after large batches.

---

## Reference

| Thing | Value |
|---|---|
| Domain | `gantts.app` |
| Repo | <https://github.com/Synth88Labs/gantts-app> |
| IndexNow key | `b7dddc1da15c113759ec72b4e49e446c` |
| Key file | `/b7dddc1da15c113759ec72b4e49e446c.txt` |
| Sitemap | `/sitemap.xml` |

The IndexNow key is not a credential — it only proves you control the domain,
and it is public by design.
