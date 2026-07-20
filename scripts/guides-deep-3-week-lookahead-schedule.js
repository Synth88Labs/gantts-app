/* ============================================================
   guides-deep-3-week-lookahead-schedule.js

   A deepened replacement for the '3-week-lookahead-schedule' entry in
   new-guides.js. Same field shape; figure, related, tpl, date and the
   meta fields are carried across unchanged.

   Diagrams inside `sections` are <!--FIG:name--> tokens, never literal
   <svg>, so the German / Spanish / French / Portuguese / Chinese pages
   draw their own labels instead of inheriting English ones. See
   scripts/check-guide-figures.js.
   ============================================================ */

const S = {
  '3-week-lookahead-schedule': {
    h1: 'The 3-Week Lookahead Schedule (Without Retyping It Every Monday)',
    metaTitle: '3-Week Lookahead Schedule — Free Generator',
    metaDesc: 'What a 3-week lookahead is, why site teams use one, and how to generate it straight from your master schedule instead of retyping it into an Excel template.',
    date: '2026-07-19',
    lead: 'Nobody builds from an eighteen-month programme. They build from the next three weeks of it. The <strong>lookahead schedule</strong> is that window — the slice of the master programme that is close enough to be real — and on most sites it is still produced by copying rows into a spreadsheet by hand, every single Monday.',
    figIntro: 'The same schedule, filtered to the work that touches the window:',
    figure: `<svg viewBox="0 0 620 290" width="100%" role="img" aria-label="Diagram showing a long master schedule on the left and a three-week window on the right containing only the tasks that overlap it">
      <text x="0" y="14" font-size="12.5" font-weight="700" fill="currentColor" font-family="system-ui,sans-serif">Master programme</text>
      <rect x="0" y="28" width="240" height="14" rx="4" fill="#cbd5e1"/>
      <rect x="0" y="50" width="90" height="14" rx="4" fill="#cbd5e1"/>
      <rect x="40" y="72" width="200" height="14" rx="4" fill="#94a3b8"/>
      <rect x="150" y="94" width="120" height="14" rx="4" fill="#94a3b8"/>
      <rect x="200" y="116" width="140" height="14" rx="4" fill="#cbd5e1"/>
      <rect x="300" y="138" width="180" height="14" rx="4" fill="#cbd5e1"/>

      <rect x="150" y="20" width="120" height="145" fill="#6c4cf1" opacity="0.10"/>
      <line x1="150" y1="20" x2="150" y2="165" stroke="#6c4cf1" stroke-width="1.5" stroke-dasharray="4 3"/>
      <line x1="270" y1="20" x2="270" y2="165" stroke="#6c4cf1" stroke-width="1.5" stroke-dasharray="4 3"/>
      <text x="210" y="180" font-size="10.5" fill="#6c4cf1" text-anchor="middle" font-family="system-ui,sans-serif">the next 3 weeks</text>

      <text x="360" y="14" font-size="12.5" font-weight="700" fill="currentColor" font-family="system-ui,sans-serif">Lookahead</text>
      <rect x="360" y="28" width="200" height="14" rx="4" fill="#6c4cf1"/>
      <text x="360" y="58" font-size="10" fill="#94a3b8" font-family="system-ui,sans-serif">already running — still shown</text>
      <rect x="360" y="68" width="150" height="14" rx="4" fill="#8b7bf5"/>
      <rect x="400" y="90" width="120" height="14" rx="4" fill="#8b7bf5"/>
      <text x="360" y="126" font-size="10.5" fill="#94a3b8" font-family="system-ui,sans-serif">Work that OVERLAPS the window,</text>
      <text x="360" y="141" font-size="10.5" fill="#94a3b8" font-family="system-ui,sans-serif">not only work that fits inside it.</text>
    </svg>`,
    sections: [
      ['What a lookahead actually is', `<p>A lookahead is a short, rolling extract of the master schedule — typically three weeks, sometimes two, four or six — showing only the work that touches that window. It rolls forward weekly, so the same task appears in several consecutive lookaheads as it gets nearer and better understood.</p>
        <p>It exists because a programme and a work plan do different jobs. The programme answers "will we finish in time"; the lookahead answers "what is happening on Tuesday, and has anyone ordered the steel". Running a meeting off a two-hundred-line programme is why people print it on A0 and ignore it.</p>
        <p>In Last Planner terms it is where <em>constraints</em> get found. And the three weeks are not three equal weeks — they harden as they approach:</p>
        <ul>
          <li><strong>Week 1 is frozen.</strong> Crews are booked and materials are on site. Only something nobody could have foreseen changes a line.</li>
          <li><strong>Week 2 is committed but soft.</strong> Constraints are cleared, or have a named owner and a date. This is the week you still have room to fix.</li>
          <li><strong>Week 3 is planning.</strong> Work is identified and screened, not promised. Tasks here are allowed to move; that is what the week is for.</li>
        </ul>
        <!--FIG:rolling|Each Monday the window steps forward: week 3 becomes week 2, week 2 freezes, and a new planning week appears.-->`],

      ['Overlap, not containment — the detail everyone gets wrong', `<p>This is the rule that makes a lookahead correct, and the one hand-built spreadsheets most often break. A task belongs in the window if it <strong>overlaps</strong> it — not if it fits inside it. The eight-month foundation package that started in March and runs to November is happening right now, and it is exactly what the site team needs in front of them. Filter for tasks that start <em>and</em> finish inside the three weeks and you drop every long-running activity on the job — tidy, and describing a project nobody is working on.</p>
        <p>The test is two comparisons:</p>
        <p><code>task.start ≤ window.end &nbsp;AND&nbsp; task.end ≥ window.start</code></p>
        <p>That is the whole rule, and gantts.app applies exactly it. One consequence: a parent group is never matched on its own dates. Groups qualify only as <em>context</em> — when a task inside one is in the window its ancestors come along, styled as headings rather than as work you are committing to, so rows never arrive orphaned in a flat list.</p>
        <!--FIG:lookahead|Only bars that cross the shaded window survive the filter; parent headings come along as context.-->`],

      ['Why it is anchored to Monday', `<p>The lookahead is a weekly ritual attached to a weekly meeting, and a window running Thursday to Thursday would cut the working week in half.</p>
        <p>So it always snaps back to the start of the week. Open the tool on a Wednesday and you get the window that began on Monday, not a block starting mid-week. The arrows step it a week at a time, and <strong>This week</strong> brings it back.</p>
        <p>Weeks are calendar weeks, not working weeks: "three weeks out" means twenty-one days, not fifteen working days.</p>`],

      ['A worked example: Calder Wharf, Block C', `<div class="worked">
        <p><strong>The job.</strong> Block C, a seven-storey residential frame, L1–L3 in fit-out. Priya Nandakumar runs the plan with two foremen: Dermot Walsh on M&amp;E, Kaz Oyelaran on drylining. <strong>The window opened Monday 20 July 2026 and ran to Sunday 9 August</strong> — thirteen of 214 tasks overlapped it.</p>
        <p><em>Week 1 — frozen, 20–26 July.</em> L2 first-fix containment (Dermot, 4 operatives, cable tray on site since 14 July). L2 partition head fixing (Kaz, 6 operatives). Riser 3 builder's work — begun 2 June, finishing 21 August, so it shows even though it neither starts nor ends inside the window.</p>
        <p><em>Week 2 — committed, 27 July–2 August.</em> L2 sprinkler drops (Dermot), L2 boarding west wing (Kaz), L3 containment set-out. Two open constraints: the drops needed the revised fire strategy signed off by Building Control, and the west-wing plasterboard sat on a delivery promised for 24 July. Priya put a name and date on each — approval to Dermot for 23 July, delivery to the buyer for the 24th.</p>
        <p><em>Week 3 — planning, 3–9 August.</em> L3 boarding, L2 second-fix electrical, L2 mechanical inspection milestone on 7 August. Nothing promised; the job was naming what would block it.</p>
        <p><strong>One week later the window rolled to 27 July – 16 August.</strong> Priya pressed the arrow once; nothing was retyped. The old committed week was now frozen — and the sprinkler drops had not made ready. The fire strategy did not come back on 23 July; Building Control's comment landed 29 July asking for a corridor head-height change. The drops were <em>not</em> pulled into the frozen week anyway. They moved to the week of 10 August, coded "approval outstanding", and Dermot's four operatives went onto L3 containment set-out — already made ready in the old week 3. The plasterboard arrived on 24 July, so boarding started on time.</p>
        <p><strong>The score.</strong> Six promised for the week of 27 July, five completed as planned: PPC 83%, one reason code. That code had appeared three times in nine weeks — which is what actually changed the job. Priya moved fire-strategy submittals onto a six-week screen, because three weeks was shorter than the approver's real turnaround.</p>
      </div>`],

      ['What a make-ready review actually screens for', `<p>This is a screening meeting, not a progress meeting: for every task entering week 2, ask whether what it needs will be there, and if not, who is getting it. Seven categories cover it.</p>
        <table>
          <thead><tr><th>Constraint</th><th>The question you ask</th><th>Who clears it</th></tr></thead>
          <tbody>
            <tr><td>Materials</td><td>Ordered? Lead time shorter than the gap? Somewhere to put it?</td><td>Buyer / procurement</td></tr>
            <tr><td>Information &amp; design</td><td>Drawing issued for construction, and has the RFI come back?</td><td>Design manager</td></tr>
            <tr><td>Labour</td><td>Right trade, right number, booked and inducted for that week?</td><td>Subcontractor foreman</td></tr>
            <tr><td>Equipment</td><td>Plant on site, tested, not double-booked with another trade?</td><td>Site manager</td></tr>
            <tr><td>Permits &amp; approvals</td><td>Booked — and does the approver's real turnaround fit the window?</td><td>Owner of that relationship</td></tr>
            <tr><td>Preceding work</td><td>Trade in front genuinely finished and handed over, not "nearly done"?</td><td>Planner / package owner</td></tr>
            <tr><td>Space &amp; access</td><td>Can the crew reach it, with scaffold, lighting and a safe route?</td><td>Site manager</td></tr>
          </tbody>
        </table>
        <p>A task with an open constraint does not enter the frozen week. Promoting it anyway is how a lookahead becomes decoration.</p>
`],

      ['PPC: scoring the promise', `<p>A lookahead that nobody scores is just a shorter Gantt chart. The output is not the filtered rows — it is a <strong>commitment</strong>, and a commitment nobody measures is a wish.</p>
        <p><strong>Percent plan complete</strong> is the measure. At the end of the frozen week, divide activities completed as promised by activities promised. Six promised, five done: 83%. No partial credit — an activity 90% done scores zero, because the trade behind it still cannot start.</p>
        <p>That harshness is the point: PPC measures how reliable your plan is, not how much work got done. A week of enormous unplanned effort that delivered half its promises is a bad week, because everyone downstream planned around the promise.</p>
        <p>The <em>reason</em> attached to each miss matters more than the number. One code per failed activity — approval outstanding, material late, preceding trade unfinished, weather, design change. After ten weeks they stack up and name the one thing worth fixing.</p>
        <p>New teams land at 50–60%; sustained constraint removal gets to 75–85%. Weeks on end above 90% usually means a padded plan. Track the trend and the codes, not the absolute number.</p>
        <!--FIG:milestone|Score the week against what was promised, not what turned out convenient.-->`],

      ['Generating one instead of retyping it', `<p>There is no shortage of 3-week lookahead templates — Smartsheet publishes one, so do half a dozen others, and there is even a standard format used on US Navy facilities work. Every one is a blank grid you fill in by hand, and that is the actual problem. The schedule already contains the answer; the weekly work is copying it out, and that is where the errors come from. Update the master, forget the lookahead, and the two quietly disagree.</p>
        <p>In gantts.app the lookahead is a <em>view</em> of the same data:</p>
        <ol>
          <li>Set <strong>View</strong> to <strong>Lookahead</strong>.</li>
          <li>Pick the window — 1, 2, 3, 4, 6 or 8 weeks.</li>
          <li>Step it with the arrows, or press <strong>This week</strong> to jump back to today.</li>
          <li>Export to PDF or PNG for the wall, or Excel for the meeting.</li>
        </ol>
        <p>The chart zooms to the window, so three weeks are legible rather than a sliver of an eighteen-month axis. A strip across the top names the window and the count — "3-week lookahead · 20 Jul – 9 Aug — showing 13 tasks of 214" — because a filtered chart that does not say so reads as a plan with tasks missing. <strong>Show all tasks</strong> restores the full programme.</p>
        <p>The window follows today by default, so it rolls forward on its own between visits; the arrows pin it to a specific Monday until you press This week. Change a date in the master and the lookahead is already correct.</p>`],

      ['Making it a useful document, not just a filter', `<ul>
          <li><strong>Put a name on every line.</strong> A lookahead without an owner per task is a list of hopes. Turn on the Assignee column.</li>

          <li><strong>Break near work down further than far work.</strong> "First floor fit-out — 6 weeks" is fine in the programme and useless here. Split it as it approaches.</li>
          <li><strong>Keep it short.</strong> Sixty lines means either the window is too long or the plan is too granular for this meeting.</li>
          <li><strong>Screen long-lead items on a longer horizon.</strong> If an approver takes five weeks, a three-week screen finds the problem every time and always too late.</li>
          <li><strong>Record the misses.</strong> A reason code written on a whiteboard is gone by Thursday.</li>
        </ul>`],
    ],
    callout: 'The lookahead is not the deliverable — the commitment is. If Monday produces a filtered chart and no score for last week, you have automated the paperwork and skipped the practice entirely.',
    faq: [
      ['What is a 3-week lookahead schedule?', 'A rolling extract of the master programme showing only work that touches the next three weeks. Updated weekly, to coordinate day-to-day work and spot constraints while there is time to clear them.'],
      ['Why three weeks?', 'Long enough that constraints — materials, permits, crews — can still be resolved, short enough that the dates are credible. Two, four and six-week windows are also common; it depends on your lead times.'],
      ['Should a long task that started months ago appear in the lookahead?', 'Yes. Anything overlapping the window belongs in it. Filtering to tasks that fit entirely inside three weeks drops the long-running work happening right now.'],
      ['What is PPC and what is a good score?', 'Activities finished as promised divided by activities promised, no partial credit. New teams score 50–60%; 75–85% is good. Above 90% usually means a padded plan. The reason codes matter more than the number.'],
      ['What happens to a task that does not make ready?', 'It moves out of the frozen week rather than being promised anyway, the reason is recorded, and the crew is redeployed onto work already made ready. Promoting an unready task destroys the reliability the lookahead exists to build.'],
      ['Can I make a lookahead in Excel, and how do I print one?', 'Most teams do, by retyping rows from the programme every week; generating it as a view removes the retyping and the drift. To print it, switch to the Lookahead view and export to PDF or PNG — the export reflects what is on screen, so you get the window, not the whole programme.'],
    ],
    related: [['critical-path-method', 'How the critical path is calculated'], ['s-curve-project-management', 'S-curves and earned value'], ['gantt-chart-dependencies', 'Dependencies: FS, SS, FF, SF']],
    tpl: ['construction', 'project-management'],
  },
};

module.exports = { S };
