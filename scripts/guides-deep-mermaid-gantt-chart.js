/* ============================================================
   guides-deep-mermaid-gantt-chart.js

   A deepened English entry for the `mermaid-gantt-chart` guide.
   Same field shape as the entries in new-guides.js; `figure`,
   `related`, `tpl`, `date`, `metaTitle` and `metaDesc` are carried
   across unchanged so the page's head, thumbnail and internal links
   do not move.

   Diagrams in section bodies are <!--FIG:name--> tokens, never
   literal <svg>. guide-figures.js draws them per locale; a pasted
   SVG would ship English labels to the de/es/fr/pt/zh pages and
   check-guide-figures.js fails the build for exactly that reason.
   ============================================================ */

const S = {
  'mermaid-gantt-chart': {
    h1: 'Mermaid Gantt Charts: Syntax, Gotchas, and Round-Tripping to a Real Editor',
    metaTitle: 'Mermaid Gantt Chart Syntax (with Live Editor)',
    metaDesc: 'The Mermaid gantt syntax explained — sections, tags, dependencies, excludes — plus the off-by-one traps, and how to edit a diagram visually and paste it back.',
    date: '2026-07-19',
    lead: 'Mermaid gantt blocks render natively in GitHub, GitLab, Notion and Obsidian, which makes them the easiest way to put a schedule where the work already lives — in the repo, reviewable in a pull request. They are also miserable to <em>edit</em>: move one date and you re-derive every <code>after</code> chain downstream by hand. This covers the syntax field by field, a worked example you can paste into a README, the traps that render perfectly while being wrong, and the missing step — editing visually and getting the text back.',
    figIntro: 'The same schedule as text and as bars:',
    figure: `<svg viewBox="0 0 620 250" width="100%" role="img" aria-label="Mermaid gantt source code on the left and the rendered bar chart it produces on the right">
      <rect x="0" y="20" width="290" height="200" rx="8" fill="#0f172a"/>
      <text x="14" y="42" font-size="10.5" fill="#7dd3fc" font-family="ui-monospace,monospace">gantt</text>
      <text x="14" y="58" font-size="10.5" fill="#7dd3fc" font-family="ui-monospace,monospace">  dateFormat YYYY-MM-DD</text>
      <text x="14" y="74" font-size="10.5" fill="#7dd3fc" font-family="ui-monospace,monospace">  excludes weekends</text>
      <text x="14" y="90" font-size="10.5" fill="#a5b4fc" font-family="ui-monospace,monospace">  section Design</text>
      <text x="14" y="106" font-size="10.5" fill="#e2e8f0" font-family="ui-monospace,monospace">  Research  :done, res,</text>
      <text x="14" y="120" font-size="10.5" fill="#e2e8f0" font-family="ui-monospace,monospace">            2026-01-05, 5d</text>
      <text x="14" y="136" font-size="10.5" fill="#e2e8f0" font-family="ui-monospace,monospace">  Wireframes :active, wf,</text>
      <text x="14" y="150" font-size="10.5" fill="#e2e8f0" font-family="ui-monospace,monospace">            after res, 8d</text>
      <text x="14" y="166" font-size="10.5" fill="#e2e8f0" font-family="ui-monospace,monospace">  Sign-off  :milestone,</text>
      <text x="14" y="180" font-size="10.5" fill="#e2e8f0" font-family="ui-monospace,monospace">            2026-01-23, 0d</text>

      <text x="330" y="34" font-size="11" font-weight="700" fill="currentColor" font-family="system-ui,sans-serif">Design</text>
      <rect x="330" y="44" width="80" height="14" rx="4" fill="#16a34a"/>
      <text x="418" y="55" font-size="10.5" fill="currentColor" font-family="system-ui,sans-serif">Research (done)</text>
      <rect x="418" y="70" width="110" height="14" rx="4" fill="#2563eb"/>
      <text x="330" y="81" font-size="10.5" fill="#94a3b8" font-family="system-ui,sans-serif">after res</text>
      <polygon points="545,96 553,104 545,112 537,104" fill="#9333ea"/>
      <text x="560" y="108" font-size="10.5" fill="currentColor" font-family="system-ui,sans-serif">◆</text>
      <text x="330" y="140" font-size="10" fill="#94a3b8" font-family="system-ui,sans-serif">Renders natively in GitHub, GitLab,</text>
      <text x="330" y="154" font-size="10" fill="#94a3b8" font-family="system-ui,sans-serif">Notion and Obsidian.</text>
    </svg>`,
    sections: [
      ['The syntax in one pass', `<p>A gantt block opens with the keyword <code>gantt</code> and a few header lines, then <code>section</code> headings with task lines under them. Indentation is convention, not grammar.</p>
        <p>A task line is a name, a colon, then comma-separated fields:</p>
        <p><code>Task name :tag, id, start, duration</code></p>
        <ul>
          <li><strong>Tags</strong> — any of <code>done</code>, <code>active</code>, <code>crit</code>, <code>milestone</code>, in any order, and you can stack several. Optional.</li>
          <li><strong>id</strong> — a bare word, needed only if something else refers to this task by name.</li>
          <li><strong>start</strong> — a date, or <code>after someId</code>, or omitted entirely to continue from the task above.</li>
          <li><strong>duration</strong> — <code>5d</code>, <code>2w</code>, or a second absolute date.</li>
        </ul>
        <p>Header lines worth knowing: <code>dateFormat</code> (how dates in <em>your</em> file are written), <code>excludes weekends</code>, <code>title</code>, and <code>axisFormat</code> (how the axis is labelled, in strftime-style codes). Fields are classified by shape rather than strictly by position, which is why <code>:done, res, 2026-01-05, 5d</code> and <code>:res, done, 2026-01-05, 5d</code> both work.</p>
        <!--FIG:syntax|Every field on a Mermaid task line, and which ones are optional.-->`],

      ['A worked example you can paste into a README', `<p>A complete, valid block for real work — migrating a public API from v1 to v2. It uses sections, absolute dates, <code>after</code> chains, every tag, a milestone and excluded weekends. Paste it into a fenced <code>mermaid</code> block in any GitHub Markdown file and it renders.</p>
        <div class="worked">
        <pre><code>gantt
    title API v2 Migration
    dateFormat YYYY-MM-DD
    axisFormat %b %d
    excludes weekends

    section Discovery
    Audit v1 endpoints   :done, audit, 2026-03-02, 5d
    Draft OpenAPI spec   :done, spec, after audit, 4d
    Spec review          :active, review, after spec, 2d

    section Build
    Auth service         :crit, auth, after review, 10d
    Resource endpoints   :res, after auth, 12d
    Client SDK regen     :sdk, after res, 3d

    section Cutover
    Staging soak         :soak, after sdk, 5d
    Public beta          :milestone, beta, 2026-05-04, 0d
    Deprecate v1         :dep, after beta, 2w</code></pre>
        <p>Reading it line by line:</p>
        <ul>
          <li><code>dateFormat YYYY-MM-DD</code> tells Mermaid how to <em>read</em> the dates you typed. Input format, not output — changing it does not change the axis.</li>
          <li><code>axisFormat %b %d</code> is the output side: the axis reads "Mar 02" rather than a full ISO date. Use <code>%V</code> for week numbers on anything longer than a quarter.</li>
          <li><code>excludes weekends</code> makes every bar step over Saturday and Sunday, for the whole diagram — there is no per-task override.</li>
          <li><code>Audit v1 endpoints :done, audit, 2026-03-02, 5d</code> — tag, id, an absolute start (a Monday), five days. Durations are inclusive of the start day, so this ends Friday 6 March.</li>
          <li><code>after audit</code> means "start when <code>audit</code> finishes" — with weekends excluded, Monday 9 March, not Saturday the 7th.</li>
          <li><code>:crit, auth, ...</code> paints the bar in the critical-path colour. Note <em>paints</em> — see the limits below.</li>
          <li><code>Resource endpoints :res, after auth, 12d</code> has no tag at all; the first field is just an id. Untagged means upcoming work.</li>
          <li><code>Public beta :milestone, beta, 2026-05-04, 0d</code> is a zero-length marker on a fixed date. Milestones get an id like anything else, so <code>after beta</code> on the last line is legal.</li>
          <li><code>2w</code> is two weeks. Mermaid also accepts <code>h</code> and <code>m</code>, rarely useful here.</li>
        </ul>
        <p>The blank lines between sections are decorative — Mermaid ignores them, and so does our importer. Keep them anyway; a 40-task block without them is unreadable in a diff.</p>
        </div>`],

      ['Task-line reference', `<p>Every field and modifier, what it does, and what it looks like in practice.</p>
        <table>
          <thead><tr><th>Field or modifier</th><th>Example</th><th>What it does</th></tr></thead>
          <tbody>
            <tr><td><code>id</code></td><td><code>audit</code></td><td>A bare word naming the task so <code>after</code> can refer to it. No spaces or punctuation. Optional unless something depends on the task.</td></tr>
            <tr><td><code>after</code></td><td><code>after audit</code></td><td>Starts when the named task finishes. FS only, no lag. Accepts several ids — <code>after a b</code> waits for the later.</td></tr>
            <tr><td><code>done</code></td><td><code>:done, audit, …</code></td><td>Renders the bar as completed. No percentage — 100% and "basically finished" look identical.</td></tr>
            <tr><td><code>active</code></td><td><code>:active, review, …</code></td><td>Renders the bar as in progress. Again with no number attached.</td></tr>
            <tr><td><code>crit</code></td><td><code>:crit, auth, …</code></td><td>Colours the bar as critical. An assertion you type, not something Mermaid derives — nothing checks it against the dependency chain.</td></tr>
            <tr><td><code>milestone</code></td><td><code>:milestone, beta, …</code></td><td>Draws a diamond instead of a bar. Pair it with <code>0d</code>.</td></tr>
            <tr><td>Duration units</td><td><code>5d</code> · <code>2w</code> · <code>8h</code></td><td>Days, weeks, hours (also <code>m</code>). Inclusive of the start day: <code>5d</code> from Monday ends Friday.</td></tr>
            <tr><td>End date</td><td><code>2026-03-02, 2026-03-06</code></td><td>A second date instead of a duration, for an externally fixed finish.</td></tr>
            <tr><td><code>dateFormat</code></td><td><code>dateFormat YYYY-MM-DD</code></td><td>How dates in the file are parsed. Header line, once per diagram.</td></tr>
            <tr><td><code>axisFormat</code></td><td><code>axisFormat %b %d</code></td><td>How the axis is labelled, in strftime codes. Purely cosmetic.</td></tr>
            <tr><td><code>excludes</code></td><td><code>excludes weekends</code></td><td>Non-working days. Also takes specific dates (<code>excludes 2026-04-06</code>) and weekday names. Whole diagram.</td></tr>
          </tbody>
        </table>`],

      ['Four things that will bite you', `<p><strong>1. Durations are inclusive of the start day.</strong> <code>5d</code> from Monday the 5th runs to Friday the 9th, not the 10th. An off-by-one here shifts every task in the file and still renders perfectly, which is the worst possible failure mode: nothing looks broken.</p>
        <p><strong>2. <code>after</code> plus <code>excludes weekends</code> is where the real bugs live.</strong> If a predecessor ends on a Friday, its successor starts on the <em>Monday</em> — not Saturday. Any tool that resolves <code>after</code> by adding one calendar day will quietly put tasks on weekends in a file that explicitly forbids them, and every downstream date drifts from there. Ours did this, briefly. The fix routes the arithmetic through the working calendar so the import agrees with what Mermaid draws, and the test guarding it asserts the property rather than specific dates: no <em>derived</em> start or end may land on an excluded day. Dates you typed by hand are left where you put them, weekend or not — silently moving an author's explicit date is the wrong kind of helpful.</p>
        <p><strong>3. There is no escaping.</strong> A colon starts the field list and a comma separates fields, so <code>Phase 2: design, review</code> becomes a task called "Phase 2" with garbage fields. Keep colons, commas and semicolons out of names; on export we substitute spaces rather than emit a line that will not parse.</p>
        <p><strong>4. An unparseable duration silently becomes zero.</strong> Write <code>3dd</code> and you get a zero-length bar rather than an error. Scan for invisible tasks after a bulk edit.</p>
        <!--FIG:deps|"after" is finish-to-start with zero lag — the only link type the format has.-->`],

      ['The limits of a diagram format', `<p>Mermaid gantt is a rendering language, not a scheduling engine, and the difference shows up the moment you want the chart to answer a question rather than illustrate an answer.</p>
        <ul>
          <li><strong>No resources.</strong> No field for who does the work, no cost, no effort, no units. You cannot over-allocate someone in Mermaid because Mermaid does not know anyone exists.</li>
          <li><strong>No float, and no computed critical path.</strong> <code>crit</code> is a colour you apply by hand. Nothing walks the dependency graph, computes early and late dates, or tells you which chain drives the finish date. A diagram where every bar is tagged <code>crit</code> is as valid as one where none are.</li>
          <li><strong>No baseline.</strong> Nowhere to record what the plan said last month, so there is no variance to show and no slip to measure.</li>
          <li><strong>Finish-to-start only.</strong> <code>after</code> is FS with zero lag. SS, FF, SF and any lag or lead have nowhere to go. Real plans are full of "start testing three days after development starts" — in Mermaid that becomes a hard-coded date, and the link is gone.</li>
          <li><strong>No progress percentage.</strong> A task at 40% and one at 90% are both just "active".</li>
          <li><strong>Flat sections.</strong> No nested groups, so a WBS deeper than one level flattens on the way in.</li>
        </ul>
        <p>None of that makes it a bad format. It makes it a <em>publishing</em> format — good for showing a schedule, useless for deriving one. Which is why the round trip matters.</p>`],

      ['Editing visually, then pasting the text back', `<p>Plenty of tools render Mermaid. What has been missing is the other direction — dragging bars and getting the syntax back out.</p>
        <ol>
          <li>Paste or open your diagram in gantts.app — a <code>.mmd</code>, or a <code>.md</code> with a fenced block. It detects a gantt block by content, not extension.</li>
          <li>Drag, link and re-date it like any other chart. <code>excludes weekends</code> switches the working calendar on, so the dates it produces agree with the file it came from.</li>
          <li><strong>Export ▸ Mermaid gantt</strong>, copy, paste back into your README, commit the diff.</li>
        </ol>
        <p>The trip is lossy in a known, boring way. Progress maps 100% to <code>done</code> and 1–99% to <code>active</code> on the way out; <code>active</code> comes back in as 50% — a guess you are told about in a warning rather than left to find in a status report. Links that cannot be written as <code>after</code> — anything with a lag, or any SS/FF/SF relationship — fall back to absolute dates, which stay correct even though they stop being maintainable.</p>
        <p>One deliberate asymmetry, because it is not a bug: <strong><code>crit</code> is exported but never imported.</strong> On the way out it is derived — the editor computed the critical path from the dependency graph, so the tag is true when written. On the way in it is a word somebody typed in a file that may be weeks stale, and trusting it would let an old diagram paint a non-critical chain red. So it is written and then ignored: the critical path you see after an import was recalculated, not asserted.</p>
        <p>A useful side effect if you draft schedules with an LLM: ask for Mermaid gantt syntax, paste the answer in, and you have an editable chart with a computed critical path — no API key, no backend.</p>`],
    ],
    faq: [
      ['How do I write a Gantt chart in Mermaid?', 'Start the block with gantt, add dateFormat YYYY-MM-DD, then section headings with task lines under them in the form "Name :tag, id, start, duration" — for example "Research :done, res, 2026-01-05, 5d".'],
      ['Does 5d in Mermaid include the start day?', 'Yes. A 5d task starting Monday the 5th finishes Friday the 9th. This inclusive counting is the most common source of off-by-one errors, and it produces a diagram that renders perfectly while every date is wrong by one day per task.'],
      ['How do dependencies work in Mermaid gantt?', 'Use "after someId" as the start field. It is always finish-to-start with no lag — start-to-start, finish-to-finish and lags cannot be expressed. You can name several predecessors, as in "after a b", and the task waits for the later of them.'],
      ['Does after skip weekends?', 'It does when the diagram declares "excludes weekends". A successor to a task ending on a Friday starts on the Monday, and its duration is counted in working days. Tools that resolve after by adding one calendar day put tasks on Saturdays in a file that forbids them.'],
      ['Can Mermaid calculate the critical path?', 'No. The crit tag is a colour you apply by hand; nothing in Mermaid walks the dependency graph or computes float. That is why gantts.app exports crit but ignores it on import — criticality is recalculated from the dependencies rather than trusted from a possibly stale file.'],
      ['Can I convert a Mermaid gantt chart into an editable chart?', 'Yes. Open the .mmd or the Markdown file in gantts.app, edit it visually, then use Export ▸ Mermaid gantt to copy the updated syntax back out.'],
    ],
    related: [['gantt-chart-dependencies', 'Dependencies: FS, SS, FF, SF'], ['critical-path-method', 'How the critical path is calculated'], ['what-is-a-gantt-chart', 'What is a Gantt chart?']],
    tpl: ['software', 'project-management'],
  },
};

module.exports = { S };
