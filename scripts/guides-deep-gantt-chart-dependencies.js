/* ============================================================
   guides-deep-gantt-chart-dependencies.js — deepened English entry
   for the `gantt-chart-dependencies` guide.

   Same field shape as the entries in new-guides.js: h1, metaTitle,
   metaDesc, date, lead, figIntro, figure, sections, callout, faq,
   related, tpl. `sections` is an array of [heading, htmlBody] pairs,
   emitted verbatim.

   STANDALONE ON PURPOSE: new-guides.js requires this file at the end
   of its own module body, so requiring it back from here is a cycle —
   `base` would be undefined at load time. The hero figure's BAR/ARROW
   helpers are therefore duplicated below rather than imported, and the
   `figure` markup is carried across unchanged from the entry this
   replaces.

   NOTE ON DIAGRAMS: section bodies use <!--FIG:name--> tokens, never a
   literal <svg>. The token is expanded per locale by
   i18n/guide-figures.js, so the German reader gets a German diagram.
   Pasting an <svg> into a body ships English labels to five other
   languages and check-guide-figures.js fails the build for it. The
   `figure` field below is the one place an English literal is allowed.
   ============================================================ */

const BAR = (x, y, w, fill, label, opts = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${opts.h || 14}" rx="4" fill="${fill}"${opts.op ? ` opacity="${opts.op}"` : ''}/>` +
  (label ? `<text x="${x + w + 8}" y="${y + (opts.h || 14) - 3}" font-size="11.5" fill="currentColor" font-family="system-ui,sans-serif">${label}</text>` : '');
const ARROW = (x1, y1, x2, y2, color = '#6c4cf1') =>
  `<path d="M ${x1} ${y1} C ${x1 + 14} ${y1}, ${x2 - 14} ${y2}, ${x2} ${y2}" fill="none" stroke="${color}" stroke-width="1.8"/>` +
  `<polygon points="${x2},${y2} ${x2 - 6},${y2 - 4} ${x2 - 6},${y2 + 4}" fill="${color}"/>`;

const S = {

  // ---------------------------------------------------------------
  'gantt-chart-dependencies': {
    h1: 'Gantt Chart Dependencies Explained: FS, SS, FF and SF',
    metaTitle: 'Gantt Dependencies: FS, SS, FF, SF',
    metaDesc: 'The four Gantt chart dependency types explained with diagrams: finish-to-start, start-to-start, finish-to-finish and start-to-finish, plus lead and lag.',
    date: '2026-07-18',
    lead: 'Four relationship types cover every dependency you can draw on a Gantt chart. One does about ninety per cent of the work; the other three exist for the cases it handles badly. Here is what each means, worked through one real project, plus the two things most explanations skip: lag versus lead, and total versus free float.',
    figIntro: 'The four dependency types, shown as they behave on a chart:',
    figure: `<svg viewBox="0 0 620 330" width="100%" role="img" aria-label="Diagram of the four Gantt dependency types: finish to start, start to start, finish to finish, and start to finish">
      <text x="0" y="14" font-size="12.5" font-weight="700" fill="currentColor" font-family="system-ui,sans-serif">Finish → Start (FS)</text>
      <text x="0" y="30" font-size="10.5" fill="#94a3b8" font-family="system-ui,sans-serif">B cannot start until A finishes — the default</text>
      ${BAR(0, 40, 130, '#6c4cf1', 'A')}
      ${BAR(160, 66, 130, '#8b7bf5', 'B')}
      ${ARROW(130, 47, 160, 73)}

      <text x="330" y="14" font-size="12.5" font-weight="700" fill="currentColor" font-family="system-ui,sans-serif">Start → Start (SS)</text>
      <text x="330" y="30" font-size="10.5" fill="#94a3b8" font-family="system-ui,sans-serif">B cannot start until A starts</text>
      ${BAR(330, 40, 130, '#0d9488', 'A')}
      ${BAR(330, 66, 150, '#14b8a6', 'B')}
      ${ARROW(332, 47, 330, 73, '#0d9488')}

      <text x="0" y="180" font-size="12.5" font-weight="700" fill="currentColor" font-family="system-ui,sans-serif">Finish → Finish (FF)</text>
      <text x="0" y="196" font-size="10.5" fill="#94a3b8" font-family="system-ui,sans-serif">B cannot finish until A finishes</text>
      ${BAR(0, 206, 150, '#ea580c', 'A')}
      ${BAR(30, 232, 120, '#f97316', 'B')}
      ${ARROW(150, 213, 150, 239, '#ea580c')}

      <text x="330" y="180" font-size="12.5" font-weight="700" fill="currentColor" font-family="system-ui,sans-serif">Start → Finish (SF)</text>
      <text x="330" y="196" font-size="10.5" fill="#94a3b8" font-family="system-ui,sans-serif">B cannot finish until A starts — rare</text>
      ${BAR(430, 206, 120, '#9333ea', 'A')}
      ${BAR(330, 232, 110, '#a855f7', 'B')}
      ${ARROW(432, 213, 440, 239, '#9333ea')}
    </svg>`,
    sections: [

      ['The project we will use throughout', `<p>Dependency diagrams are easy to nod along to and hard to apply. So: one real project — a billing system cutover — that every type below is applied to.</p>
        <div class="worked">
          <p><strong>Replace the billing system. Six tasks, working days, March–April 2026.</strong></p>
          <table>
            <thead><tr><th>#</th><th>Task</th><th>Start</th><th>End</th><th>Days</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Build the migration scripts</td><td>Mon 2 Mar</td><td>Fri 13 Mar</td><td>10 days</td></tr>
              <tr><td>2</td><td>Dry-run the migration</td><td>Mon 16 Mar</td><td>Fri 20 Mar</td><td>5 days</td></tr>
              <tr><td>3</td><td>Fix the defects the dry run finds</td><td>Mon 23 Mar</td><td>Fri 3 Apr</td><td>10 days</td></tr>
              <tr><td>4</td><td>Write the cutover runbook</td><td>Mon 16 Mar</td><td>Fri 3 Apr</td><td>15 days</td></tr>
              <tr><td>5</td><td>Train the billing team</td><td>Mon 23 Mar</td><td>Fri 27 Mar</td><td>5 days</td></tr>
              <tr><td>6</td><td>Keep the legacy system running</td><td>Mon 2 Mar</td><td>Mon 6 Apr</td><td>26 days</td></tr>
            </tbody>
          </table>
          <p>Six bars, no links yet — nothing here says what depends on what.</p>
        </div>`],

      ['Finish-to-Start (FS) — the one you will use', `<p>Task B cannot start until task A finishes: pour the foundation, then frame the walls.</p>
        <p>Task 2 is FS after task 1: you cannot dry-run a script nobody has written. Task 3 is FS after task 2, because the defect list does not exist until the dry run produces it. That chain — 1 → 2 → 3 — is the spine of the project and sets the 3 April finish.</p>
        <p>FS is the default in every scheduling tool, and if you are unsure it is almost certainly right. Reaching for an exotic type usually means the tasks are wrongly broken down.</p>`],

      ['Start-to-Start (SS) — work that runs together', `<p>Task B cannot start until task A starts, and the two then run in parallel.</p>
        <p>The runbook (task 4) is SS after the dry run. The writer needs the dry run underway to have anything to document, but waiting for it to <em>finish</em> would waste a week — so both begin Monday 16 March. The tell for SS is a shared trigger, not a shared deadline.</p>`],

      ['Finish-to-Finish (FF) — work that must land together', `<p>Task B cannot finish until A finishes.</p>
        <p>The runbook also has an FF link to task 3: it cannot be signed off while defects are still landing, because each fix rewrites a step in it. So it stays open until Friday 3 April — started by the dry run, closed by the fixes, which is the shape of a support activity. Testing, documentation and QA sign-off are all FF for the same reason: B may start whenever, it just cannot cross the line first.</p>`],

      ['Start-to-Finish (SF) — the rare one', `<p>Task B cannot finish until task A starts. It reads backwards, and most planners never need it.</p>
        <p>Task 6 is the case it was invented for. The legacy system must run until the new one is live: its <em>finish</em> is pinned to go-live's <em>start</em>. Link it SF and the legacy bar stretches to meet whatever date go-live lands on.</p>
        <p>That is the test: a handover, where the outgoing thing ends because the incoming one begins. Anywhere else, reordering the tasks usually says the same thing with a plain FS.</p>`],

      ['The four types side by side', `<table>
          <thead><tr><th>Type</th><th>Real-world trigger</th><th>How often it applies</th><th>The mistake it invites</th></tr></thead>
          <tbody>
            <tr><td><strong>FS</strong><br>Finish → Start</td><td>A's output is B's input — a defect list, a signed drawing, a poured slab</td><td>~90% of links</td><td>Used for preference, not constraint, until every date is pinned</td></tr>
            <tr><td><strong>SS</strong><br>Start → Start</td><td>Two activities share a trigger, then run together</td><td>Common; most plans have a few</td><td>Reacts only to the predecessor's <em>start</em>: if A's finish slips, B never moves</td></tr>
            <tr><td><strong>FF</strong><br>Finish → Finish</td><td>A wrapper that cannot close before the work it wraps — testing, docs, sign-off</td><td>Occasional, mostly support tasks</td><td>B's start left unconstrained, so it looks able to begin absurdly early</td></tr>
            <tr><td><strong>SF</strong><br>Start → Finish</td><td>A handover — the old shift or system ends because the new one begins</td><td>Rare; many correct plans have none</td><td>A clumsy backwards FS that reviewers misread</td></tr>
          </tbody>
        </table>`],

      ['When the wrong type makes the schedule lie', `<p>Now task 5, training. A planner links it <strong>SS after task 3</strong>: training starts when defect-fixing starts. It looks fine — both bars begin 23 March, everyone trained by 27 March, well before go-live.</p>
        <div class="worked">
          <p><strong>Then the dry run finds more than expected.</strong> Task 3 grows from 10 days to 15, pushing its finish from Fri 3 Apr to Fri 10 Apr.</p>
          <ul>
            <li><strong>Task 4 (runbook, FF)</strong> — moves. Its finish follows to Fri 10 Apr. Correct.</li>
            <li><strong>Task 5 (training, SS)</strong> — <em>does not move at all.</em> SS watches the predecessor's start, and the start did not change. The plan still shows the team trained on Fri 27 Mar.</li>
          </ul>
          <p>The chart is not broken; it is answering the question it was asked. But the team is now trained on software with a fortnight of defects still to land, and the plan reports that as green. The right link was <strong>FS after task 3</strong>. One wrong letter turned a two-week problem into no problem at all.</p>
        </div>
        <p>So test for it: extend the task most likely to overrun by a week, and see what moved. Anything you expected to shift and did not is a wrong type.</p>`],

      ['Lag and lead — a lag is a wait, not slack', `<p>A <strong>lag</strong> adds waiting time to a link. "FS + 3 days" means B starts three days after A finishes. Here, go-live is FS+1d after the defect fixes: one clear day for a final data sync.</p>
        <!--FIG:lag|A lag is committed waiting time inside the link, not spare room around it.-->
        <p>The thing people get wrong: <strong>a lag is not slack.</strong> Slack is room you can spend when something slips. A lag is time already committed — concrete curing, paint drying, a contractual review window — and nobody gets to "use" it when they run late. Padding links with lag because a task "might" overrun creates contingency nobody can find or cut.</p>
        <p>A <strong>lead</strong> is negative lag: "FS − 2 days" overlaps the tail of A. Leads compress a schedule — this is what fast-tracking is — but they buy time with risk. An overlap you have not reasoned about is a rework queue.</p>
        <p>Both are written <code>3FS+2d</code> — row 3, finish-to-start, two days lag — which gantts.app takes in the <strong>Runs after</strong> column.</p>`],

      ['Total float and free float are not the same number', `<p>Every task now has float: how long it can slip before it hurts something. There are two kinds, and confusing them is expensive.</p>
        <!--FIG:float|Total float belongs to the chain. Free float belongs to the task.-->
        <p><strong>Total float</strong> is how far a task can slip before the project finish moves. <strong>Free float</strong> is how far before its own successor moves. Free float is never larger.</p>
        <p>Training has total float — the finish date is set by the defect chain. But total float is <em>shared</em>: if three tasks in a row each show eight days, there are eight days between them, not twenty-four. A lead who reads only that number and delays a week has spent float belonging to the whole chain.</p>
        <!--FIG:cpm|Zero total float means critical: every day of slip moves the finish date.-->
        <p>Total float of zero is the definition of the critical path. Tick <strong>Critical path</strong> in gantts.app and that chain draws striped. That is where the types have to be right.</p>`],

      ['Creating and editing a dependency in gantts.app', `<ol>
          <li><strong>Drag from bar to bar.</strong> Grab the small dot at the edge of a task bar, drag onto the bar you want to link and release. The link is created as <strong>FS</strong> with zero lag.</li>
          <li><strong>Change its type.</strong> Click the arrow between the bars. The link editor opens with a <strong>Type</strong> dropdown: <em>FS · Finish → Start</em>, <em>SS · Start → Start</em>, <em>FF · Finish → Finish</em>, <em>SF · Start → Finish</em>.</li>
          <li><strong>Add a lag.</strong> Same editor, <strong>Lag (days)</strong> field: <code>1</code> for the FS+1d before go-live, a negative number for a lead. Both undo with Ctrl+Z.</li>
          <li><strong>Or type it.</strong> The grid's <strong>Runs after</strong> column takes predecessors by row number: <code>3</code>, <code>2SS</code>, <code>3FF</code>, <code>3FS+2d</code>, comma-separated. Fastest way to link a plan you just pasted in.</li>
          <li><strong>Or use the task card.</strong> Click a task, open <strong>Runs after (predecessors)</strong>, and pick from the <em>+ Start this after…</em> dropdown. Each existing link has its own type selector.</li>
          <li><strong>Remove one.</strong> <strong>🗑 Remove this link</strong> in the link editor, or the ✕ in the task card.</li>
        </ol>
        <p>One behaviour worth knowing: <strong>adding a dependency here can only push a task later, never pull it earlier.</strong> The scheduler is "as-placed" — a task starts at the later of where you dragged it and where its predecessors allow. Link a task whose bar already sits well after its predecessor and nothing moves; the gap stays, because a bar you placed on purpose should not be yanked about by a link added for reporting. To compact everything, press <strong>⚡ Auto-schedule</strong>, which pulls each dependent task back to the earliest date its predecessors allow, leaving unlinked tasks as anchors.</p>`],
    ],
    callout: 'A dependency should describe a real constraint, not a preference. "We would rather do B after A" is a sequencing choice and belongs in the ordering; "B cannot start until A is done" is a dependency. Charts full of the former cannot be re-planned: every date is pinned by something that was never mandatory.',
    faq: [
      ['What are the 4 types of dependencies in a Gantt chart?', 'Finish-to-Start (FS), Start-to-Start (SS), Finish-to-Finish (FF) and Start-to-Finish (SF). FS covers the large majority of real relationships; SF is rare, and many plans need none.'],
      ['What is the difference between lead and lag?', 'Lag is waiting time added to a link: FS+3d starts the successor three days after the predecessor finishes. Lead is negative lag, overlapping the two. A lag is committed time, not spare room.'],
      ['What is the difference between total float and free float?', 'Total float is how far a task can slip before the project finish moves; free float is how far before its own successor moves. Total float is shared along a chain: three tasks each showing eight days do not have twenty-four between them.'],
      ['Which dependency type should I use by default?', 'Finish-to-Start. If another type seems necessary, check whether the tasks are broken down correctly — an unusual type is often a symptom of a task that should be split.'],
      ['What happens to my dates when I add a dependency in gantts.app?', 'A dependency can only push a task later, never pull it earlier: a task starts at the later of where you placed it and where its predecessors allow. Press ⚡ Auto-schedule to compact tasks back to their earliest legal dates.'],
      ['How do I add dependencies in gantts.app?', 'Drag from the dot at the edge of a task bar onto another bar, or type notation such as 3FS+2d in the Runs after column. Click a link arrow to change its Type or Lag.'],
    ],
    related: [['critical-path-method', 'How the critical path is calculated'], ['what-is-a-gantt-chart', 'What is a Gantt chart?'], ['gantt-baseline-variance', 'Tracking slippage against a baseline']],
    tpl: ['project-management', 'construction'],
  },

};

module.exports = { S };
