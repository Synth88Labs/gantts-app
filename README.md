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
- [Privacy and analytics](#privacy-and-analytics)
- [Security](#security)
- [Content methodology](#content-methodology)
- [Accessibility](#accessibility)
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

## Privacy and analytics

Analytics is Google Analytics 4, and **nothing is requested from Google until
the visitor accepts**. Not Consent Mode with denied defaults, not cookieless
pings — the script is simply never fetched. Declining costs the page nothing,
because nothing was waiting on it.

The ordering is the whole point. The tag previously sat first in `<head>` on
every page, which meant cookies were set before anyone was asked; a banner
added on top of that would have been decoration, since the thing it claims to
control has already happened. `scripts/add-analytics.js` now injects a
reference to `js/consent.js` instead, and it also *removes* the old
unconditional snippet — a single page still carrying it would silently bypass
the gate, and nothing on the page would look wrong.

Details that are deliberate rather than incidental:

- Accept and Decline are the same size and weight. A decline that is harder to
  reach than an accept is not a free choice.
- There is no implicit consent. Closing, scrolling and Escape all leave the
  state undecided, and undecided means analytics stays off.
- The answer is stored in `localStorage`, not a cookie, so a visitor who
  declines ends the visit with **no cookies at all** rather than fewer.
- Withdrawing deletes the analytics cookies already on the device, instead of
  flipping a flag while the browser keeps them.
- An undecided visitor has any pre-existing analytics cookies cleared on load.
  They were set before the gate existed, so there is no record of consent for
  them and no basis to keep them.
- The banner injects its own CSS. It first shipped with styles in `site.css`
  only, and the editor loads `styles.css` — so it rendered completely unstyled
  in the app while looking correct everywhere else. A component that inserts
  itself into every page has to carry its own styling.
- It slides in from 12px, not from 100%. If the animation never advances — a
  throttled background tab — a 100% offset leaves the banner below the fold,
  invisible, and the visitor is never actually asked.

---

## Security

There is very little to attack: static files, no backend, no accounts, no
server-side user data, and share links that travel in the URL **fragment**,
which browsers never transmit. That is exactly why the few real items matter.

**Subresource Integrity on third-party scripts.** Four export libraries load
from public CDNs into the editor, where the whole plan sits in memory. Without
`integrity`, someone else's security incident becomes ours. The hashes were not
taken on trust from a single fetch — that would pin a compromise as readily as
the real file. The cdnjs files were verified byte-for-byte against cdnjs's own
published SRI, and the jsDelivr one was confirmed identical from a second
independent npm mirror before pinning.

**Content Security Policy, enforced.** The prerequisite was removing 1483
inline `on*` handlers in favour of delegated listeners, so `script-src` needs
no `'unsafe-inline'` — which is most of what a CSP is for, since inline script
is the main thing XSS needs. It ran in Report-Only first, and enforcement
followed evidence: fifteen code paths exercised on the live site with zero
violations.

Two parts stay permissive, stated rather than hidden: `style-src` allows inline
because the app sets bar geometry that way, which is what a Gantt chart is; and
`script-src` allows the two CDNs, where SRI rather than the origin allowlist is
the real control. Google's `gtag.js` is unversioned and therefore cannot be
pinned at all — `check:security` prints that on every run instead of
whitelisting it silently, so the trade-off does not decay into an assumption.

Removing the inline handlers surfaced a bug worth recording: the print export
wrote `onload="window.print()"` into a new window. That window is same-origin
and inherits the policy, so print would have failed **silently** under
enforcement, because nothing else calls `print()`.

---

## Content methodology

The template and guide libraries are large (100 templates and 15 guides, each
in six languages), and two decisions did more for their quality than volume did.

**Localisation adapts the regime, not the words.** A schedule is made of
constraints, and constraints are jurisdictional. Translating an article about
one country's rules into another language produces fluent, authoritative
nonsense. So the procurement template is effectively six different templates:
the German one carries the §134 GWB standstill and the fact that an award made
before it expires is *unwirksam*; the Chinese one replaces "standstill" with
中标公示期 entirely. The same rule produced genuinely different schedules
elsewhere — a Brazilian turf grow-in timed to rainy versus dry season rather
than to day length, and five different answers to "what stops you dismantling a
reactor", because the real answer is a different waste route in each country.

The corollary matters as much: **instruments that are genuinely foreign stay in
their own language with a gloss.** Inventing a German name for a US audit report
reads authoritative and is wrong, so SOC 2 stays SOC 2 everywhere, described as
an AICPA attestation and explicitly distinguished from ISO certification.

**Where a figure is not real, none is invented.** On the product-recall
template no notification deadline is stated in any language, because there is no
universal one; each locale names the actual authority to notify and says the
window depends on jurisdiction, product class and hazard. Where a number *is* in
a regulation it is quoted with its conditions intact rather than flattened into
a slogan.

**Word count is not a measure of usefulness.** A depth check comparing localized
word counts passed while every guide in every language had zero worked examples
and zero tables. `check:richness` counts what a reader can actually use —
diagrams, tables, step-by-step procedures, worked examples with numbers you can
follow — because a page can hit any word target with more prose.

Diagrams are the same problem in a different shape. They are drawn per locale
from a label pack rather than pasted as SVG, because a translated article
wrapped around an English diagram is worse than one with no diagram, and no
text-based check can see inside an `<svg>`. Guide bodies carry a
`<!--FIG:name-->` token that each generator expands in the reader's language;
`check:figures` fails on a literal `<svg>` in a body, on a token naming no
diagram, and on a missing label that would render the word "undefined".

---

## Accessibility

The WCAG 2.2 AA work is the ordinary part: a single-pointer alternative for
dragging (SC 2.5.7 needs that specifically, not a keyboard one), 24×24 targets,
roving tabindex across the bars, colour never carrying meaning alone,
forced-colors handled, reduced-motion respected.

The useful lesson was that **reading the accessibility tree finds what spec
compliance does not**. The tree is what assistive technology actually consumes,
and it exposed two defects that every checker here was blind to:

- 60 of 84 grid inputs had no accessible name. Tabbing across the task table
  announced "edit text, 2026-07-21" then "2026-08-10" — two dates, no way to
  tell start from finish, no idea which row. The visible column header carries
  that meaning and the tree did not. Cells now name themselves and their row.
- The bar's `aria-label` was built from hard-coded English, so a German user
  heard the task name in German and the rest in English. It is the only
  description of a bar that exists, since a bar is a positioned div.

Both lived in attributes, where no text or heading check can reach.

`accessibility.html` states plainly that testing is spec-based and has not been
verified with a real screen reader. That remains true: the tree tells you a
page is *labelled*, not that it is *coherent to listen to*.

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
| `check:evm` | earned-value maths, and its honesty constraints |
| `check:views` | lookahead and milestone filtering |
| `check:ics` | calendar export: exclusive all-day end, line folding, stable UIDs |
| `check:mermaid` | Mermaid syntax, and `after` across non-working days |
| `check:svg` | vector export redrawn from the model, not serialized from the DOM |
| `check:assets` | a changed asset keeping its old cache-busting version |
| `check:urls` | `index.html` appearing in any published URL |
| `check:links` | dead internal links |
| `check:seo` | title and description limits, structured data |
| `check:hreflang` | non-reciprocal language clusters |
| `check:seo-i18n` | per-locale metadata, measured in display units |
| `check:sitemap` | sitemap and `lastmod` integrity |
| `check:design` | localized pages using the same components as English |
| `check:i18n-keys` | a `data-i18n` key with no translation, in any locale |
| `check:tpl-i18n` | a template string that cannot be translated at all |
| `check:depth` | a localized article that is a stub wearing a full outline |
| `check:richness` | an article with no worked example, table or diagram |
| `check:figures` | a diagram that would render in the wrong language |
| `check:security` | unpinned third-party script, directory listing, missing header |
| `check:consent` | a page loading analytics before the visitor agrees |

`check:hreflang` compares in *file* space rather than string space, so `/blog/`
and `/blog/index.html` are correctly understood to be one page.

### What we learned about writing checks

More than one check here has, at some point, passed while verifying nothing.
The failures were never in the thing being checked — they were in the check's
own assumptions, and they all read as good news:

- A content audit caught its own file-load error and reported "0 pages below
  the floor" — a clean result produced by there being nothing to inspect.
- A structural validator read `t.name` on task data that is stored as tuples.
  Every field came back `undefined`, so it looped over nothing and passed.
- A batch validator had its input list hardcoded, so it silently covered a
  subset while reporting confidently on the whole.
- One check used a stricter limit than the project actually enforces, and
  flagged a healthy page as broken.

The pattern is the same each time: **the check encoded an assumption about
form, and a negative result was read as a fact about substance.** The mitigation
that works is making a check state its own scope, so the output is falsifiable:

```
63 templates, 2508 tasks and 1751 dependencies actually inspected
```

That line can be wrong in a way you can see. "All templates clean" cannot.
Where a check has a floor, it also prints what it exempted and why, so debt
stays visible rather than being absorbed into a threshold set low enough to
hide it.

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
