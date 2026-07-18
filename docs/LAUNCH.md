# Launch checklist — gantts.app

Do these in order. Steps marked **(you)** need your accounts or credentials
and cannot be automated from here.

---

## 1. Build the upload bundle

```bash
npm run deploy:bundle
```

Produces `deploy/` and `deploy-gantts-app.zip` (~1.5 MB, 263 files, 91 pages,
105 template downloads). Regenerates the download artefacts first, since
those are not stored in git.

The script refuses to build if `node_modules/`, `scripts/`, `docs/`, or any
`.md` file leaks into the bundle — none of that should ever be public.

> The zip is written with forward-slash entry names on purpose. PowerShell's
> `Compress-Archive` writes Windows backslashes, which cPanel (Linux) extracts
> as files literally named `assets\logo.svg` instead of folders.

---

## 2. Upload to Namecheap **(you)**

Two routes. Both need the bundle built first (`npm run deploy:bundle`).

### 2a. Scripted FTP — repeatable, recommended

```bash
cp .env.example .env      # fill in FTP_PASS and confirm FTP_DIR
npm run deploy:check      # dry run: validates the bundle, connects, writes NOTHING
npm run deploy            # rebuild + upload
```

Credentials live only in `.env`, which is gitignored. Nothing in the repo
contains a password.

> **Get FTP_DIR right or the deploy silently does nothing.**
> An FTP account created against a named folder (e.g.
> `/home/<cpuser>/gantts.app/admin_ganttsapp`) lands your files at
> `https://gantts.app/admin_ganttsapp/...`, not at the root. The upload
> reports success and the site stays blank.
> Use cPanel → **Domains → gantts.app → Document Root** as `FTP_DIR`.
> `deploy:check` warns if the remote path looks like an account subfolder
> or has content but no `index.html`.

The script uses **FTPS** (explicit TLS). Plain FTP transmits the password in
clear text; `FTP_INSECURE=1` exists only for hosts without TLS, and if you
use it, rotate the password afterwards.

### 2b. cPanel File Manager — no credentials anywhere

1. cPanel → **File Manager** → the document root for gantts.app
2. **Settings** → tick **Show Hidden Files (dotfiles)** — without this you
   will not see `.htaccess` and half the config silently does nothing
3. Delete any placeholder `index.html`
4. Upload `deploy-gantts-app.zip`, right-click → **Extract**, delete the zip

### Verify either way

- `https://gantts.app/` — homepage
- `https://gantts.app/app.html` — the editor
- `https://gantts.app/sitemap.xml` — 90 URLs
- `https://gantts.app/templates/files/construction.xlsx` — a real download
- `https://gantts.app/b7dddc1da15c113759ec72b4e49e446c.txt` — IndexNow key
- any nonexistent URL → styled 404, proving `.htaccess` landed

> Template download files (`.xlsx` / `.pptx` / `.csv`) are **not** stored in
> git — they are build artefacts. `npm run gen:templates` regenerates them,
> and both deploy routes include them. `deploy:bundle` refuses to build if
> they are missing rather than shipping a site where every download 404s.

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
   for all 90, the sitemap handles the rest)

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

Pushes all 90 URLs to Bing, Yandex, Seznam and Naver instantly. `202` on the
first run is normal (key still validating). **Google does not support
IndexNow** — Google discovery comes only from step 4.

Re-run this after publishing new template or guide pages.

---

## 6. After every content update

```bash
npm run build        # regenerate everything + run all checks
npm run deploy       # bundle + upload over FTPS
npm run indexnow     # ping Bing, Yandex, Seznam, Naver
```

`npm run build` runs the template, thumbnail, page, i18n and sitemap
generators, then link, SEO, hreflang and localized-SEO checks.

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
