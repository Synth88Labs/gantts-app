# gantts.app

A free, no-login Gantt chart editor that runs entirely in the browser, plus the
static content site around it. No backend, no database, no build step for the
app itself — the scheduling engine, the exporters and the storage layer are all
vanilla JavaScript running on the client.

Project data never leaves the device. That constraint is the reason for most of
the architectural decisions below.

---

## Contents

- [Why client-side](#why-client-side)
- [Architecture](#architecture)
- [Scheduling engine](#scheduling-engine)
- [Working calendar](#working-calendar)
- [Resource levelling](#resource-levelling)
- [Storage and durability](#storage-and-durability)
- [Exporters](#exporters)
- [Interoperability](#interoperability)
- [The content site](#the-content-site)
- [Internationalisation](#internationalisation)
- [Build and checks](#build-and-checks)
- [Repository layout](#repository-layout)
- [Running locally](#running-locally)

---

## Why client-side

Everything computes in the browser. There is no account, no upload, and no
server that could hold a plan.

That is a product promise, not a performance optimisation, and it rules some
things out. Real-time multi-user collaboration would need a signalling server
and a relay; that is why collaboration here is file-based — export, merge,
re-import — rather than live. Binary `.mpp` support would require a third-party
conversion service, which would mean sending the user's project file to
somebody else's infrastructure, so the interop path is Microsoft's published
XML schema instead. See [Interoperability](#interoperability).

---

## Architecture

The editor is a set of plain global modules loaded in dependency order. No
bundler, no framework, no transpile step.

```
util.js         dates, ids, palette, download helper
store.js        IndexedDB with a localStorage fallback
calendar.js     working days, holiday rules
resources.js    per-day allocation, over-allocation detection
model.js        project state, undo/redo, persistence, events
schedule.js     critical path method
render.js       SVG chart + grid painting
interactions.js drag, resize, link, keyboard
exports.js      PNG / PDF / XLSX / PPTX / CSV / JSON
export-pdf.js   paginated and tiled PDF composition
msproject.js    MSPDI import and export
templates.js    starter plans, CSV and file import
features.js     command palette, tours, shortcuts
app.js          wiring
```

`model.js` is the single source of truth and emits events; everything else
listens. Rendering is a full repaint of an SVG layer rather than a diffing
tree — for the row counts a readable plan actually has (20–60 tasks), a repaint
is simple, fast enough, and removes an entire class of stale-view bugs.

---

## Scheduling engine

`schedule.js` implements the Critical Path Method: a forward pass for earliest
start and finish, a backward pass for latest start and finish, and total float
as the difference. Tasks with zero float form the critical path.

Two details matter if you touch this file.

**It runs in working-day ordinals, not calendar dates.** When a calendar is
active, days are mapped into a working-day number space, CPM runs as integer
arithmetic there, and the results are mapped back. Doing it the other way —
CPM in calendar days, then skipping weekends afterwards — produces wrong float
whenever a weekend falls inside a chain.

**The critical path is recomputed on every change, never cached.** A task with
three days of float that slips four days becomes critical; a cached path would
keep pointing at the old chain and quietly mislead.

All four dependency types are supported — finish-to-start, start-to-start,
finish-to-finish, start-to-finish — with lead and lag.

---

## Working calendar

`calendar.js` decides which days count as work.

- Configurable working weekdays
- Fixed-date holidays
- Floating holidays by nth-weekday-of-month rule
- Easter-relative holidays via the Meeus/Jones/Butcher algorithm, so Good
  Friday and Easter Monday land correctly in any year

Covered by `test/calendar.test.js`, which pins Easter against known dates across
several years. This arithmetic sits underneath every date the app produces, so
an off-by-one is invisible in the interface and wrong in every export.

---

## Resource levelling

`resources.js` builds a per-day allocation histogram with a sweep line over
task intervals, then flags any day where one assignee is committed to more than
one task. This is the check that catches a plan which is arithmetically valid
but cannot actually be executed.

Covered by `test/resources.test.js`.

---

## Storage and durability

`store.js` uses IndexedDB, falling back to localStorage where it is
unavailable.

Saves are asynchronous, and the project index is updated only **after** the
write resolves. An earlier version wrote the index optimistically, so a failed
save left a project listed with a task count it did not have. Failures now
surface to the user rather than being swallowed, and
`navigator.storage.persist()` is requested so the browser is less likely to
evict data under pressure.

Legacy localStorage records are migrated on first load and then deleted, so the
two stores cannot drift apart.

---

## Exporters

| Format | Notes |
| --- | --- |
| PNG | canvas rasterisation of the SVG layer |
| PDF | paginated or tiled, auto-scaled to fit |
| XLSX | task table with dates and dependencies |
| PPTX | one slide at phase level, sized for projection |
| CSV | round-trips back through the importer |
| JSON | the raw project, for backup or diffing |
| MSPDI | MS Project XML — see below |

The PDF path composes tiles through a canvas at 150 DPI with JPEG compression.
A naive full-resolution render of a long plan produced roughly 46 MB files
taking eight seconds; the current settings produce well under 1 MB in a few
seconds with no visible loss at print size.

---

## Interoperability

`msproject.js` reads and writes **MSPDI**, the XML schema Microsoft publishes
for MS Project. Files open natively via *File → Open*.

`.mpp` is deliberately unsupported. It is an undocumented binary format, and
every browser-side route to it ends at a hosted conversion service — which
would mean sending the user's project file to a third party.

Three parts of MSPDI are easy to get wrong in ways that still produce a file
that opens cleanly and describes a *different* plan, so each is pinned by
tests:

- **Link types are integers in a non-obvious order** — `0=FF, 1=FS, 2=SF,
  3=SS`. Sorting them "tidily" reverses dependencies.
- **`LinkLag` is in tenths of a minute.** One working day is `4800`.
- **Durations count working hours**, so three days is `PT24H0M0S`.

The project calendar is exported alongside the tasks. Without it, durations get
reinterpreted against MS Project's own default calendar and every finish date
moves.

Covered by `test/msproject.test.js`, which round-trips a full model and also
parses a file shaped like genuine MS Project output — round-tripping your own
export only proves self-consistency.

---

## The content site

The surrounding pages are pre-rendered static HTML: a homepage, a template
library with downloadable spreadsheets, and a guide section.

Nothing on a content page renders client-side. Language variants are real URLs
with reciprocal `hreflang`, because a JavaScript language toggle repaints a
single URL and search engines index only one version of it.

---

## Internationalisation

Six languages: English, Spanish, German, French, Portuguese and Simplified
Chinese. Every template page, guide and chrome string exists in all six, and no
content page links out of its own language.

Two registries — `i18n/template-locales.js` and `i18n/guide-locales.js` — are
the single source of truth for what exists in which language. Both the
localized pages and the reciprocal `hreflang` on the English pages are computed
from them; derived independently, a mismatch would silently invalidate the
cluster for search engines.

Notes for adding a language:

- Each locale supplies its **own** interface strings, with no fallback. A
  missing block should break the build rather than render one language's
  article under another's headings.
- Search-result length limits are measured in **display units, not
  characters**. A CJK glyph is about two Latin widths, so a Chinese title gets
  roughly half the characters.
- Diagram labels come from a per-locale pack in `i18n/guide-figures.js`, so
  figures are drawn in the reader's language instead of inheriting English.

---

## Build and checks

```bash
npm run build     # generate pages, then run every check
npm run check     # checks only
```

The checks are the interesting part. Each one exists because the corresponding
bug shipped at least once.

| Check | Guards against |
| --- | --- |
| `check:calendar` | working-day and holiday arithmetic |
| `check:resources` | allocation and over-allocation |
| `check:msproject` | MSPDI link types, lag units, durations |
| `check:assets` | a changed asset keeping its old cache-busting version |
| `check:urls` | `index.html` appearing in any published URL |
| `check:links` | dead internal links |
| `check:seo` | title and description limits, structured data |
| `check:hreflang` | non-reciprocal language clusters |
| `check:seo-i18n` | per-locale metadata, measured in display units |
| `check:sitemap` | sitemap and `lastmod` integrity |
| `check:design` | localized pages using the same components as English |

`check:hreflang` compares in *file* space rather than string space, so `/blog/`
and `/blog/index.html` are correctly understood to be one page.

---

## Repository layout

```
app.html              the editor
index.html            homepage
templates/            template library and downloadable artefacts
blog/                 guides
es/ de/ fr/ pt/ zh/   generated language variants
css/  js/             source
i18n/                 content models and locale registries
scripts/              generators and checkers
test/                 assertion suites
docs/                 build specification
```

Generated language directories are committed so the site can be served as plain
files.

---

## Running locally

```bash
npm install
npm run build
npx serve .          # or any static file server
```

Open `app.html` for the editor. It works offline once loaded, through a service
worker that precaches the app shell.

When changing `css/site.css` or `js/site.js`, bump the `?v=` query in the
generators. `check:assets` fails the build if content changes without it,
because returning visitors would otherwise keep the cached copy and never see
the change.
