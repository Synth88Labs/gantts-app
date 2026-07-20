/* ============================================================
   guides-deep-milestones-vs-tasks.js — deepened replacement entry
   for the `milestones-vs-tasks` guide.

   Same field shape as the entry in new-guides.js: h1, metaTitle,
   metaDesc, date, lead, figIntro, figure, sections, callout, faq,
   related, tpl. `figure`, `related`, `tpl`, `date` and the meta
   fields are carried across unchanged.

   Section bodies use <!--FIG:name--> tokens, never a literal <svg>,
   so the diagrams are drawn in the reader's language rather than
   inherited from English. See scripts/check-guide-figures.js.
   ============================================================ */

const BAR = (x, y, w, fill) =>
  `<rect x="${x}" y="${y}" width="${w}" height="14" rx="4" fill="${fill}"/>`;
const ARROW = (x1, y1, x2, y2) =>
  `<path d="M ${x1} ${y1} H ${x2}" stroke="#94a3b8" stroke-width="1.6" fill="none" marker-end="url(#ah)"/>`
  + `<defs><marker id="ah" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">`
  + `<path d="M0,0 L7,3.5 L0,7 z" fill="#94a3b8"/></marker></defs>`;

const S = {
  'milestones-vs-tasks': {
    h1: 'Milestones vs Tasks on a Gantt Chart',
    metaTitle: 'Milestones vs Tasks on a Gantt Chart',
    metaDesc: 'The difference between a milestone and a task on a Gantt chart, what the diamond, bar and arrow symbols mean, and how many milestones a project should have.',
    date: '2026-07-18',
    lead: 'A task takes time. A milestone marks a moment. That single distinction explains why one is drawn as a bar and the other as a diamond — and it has consequences you can measure: a milestone modelled as a three-day task quietly adds three days to your finish date, and hides the delay you are most exposed to.',
    figIntro: 'The symbols you will meet on almost any Gantt chart:',
    figure: `<svg viewBox="0 0 620 230" width="100%" role="img" aria-label="Legend of Gantt chart symbols: task bar, milestone diamond, summary bar, dependency arrow, progress fill and today line">
      ${BAR(0, 14, 120, '#6c4cf1', '')}
      <text x="136" y="25" font-size="12" fill="currentColor" font-family="system-ui,sans-serif"><tspan font-weight="700">Task</tspan> — has duration</text>

      <polygon points="52,56 62,66 52,76 42,66" fill="#10b981"/>
      <text x="136" y="70" font-size="12" fill="currentColor" font-family="system-ui,sans-serif"><tspan font-weight="700">Milestone</tspan> — zero duration, a moment</text>

      <path d="M 0 104 h 120 v 10 l -6 -5 h -108 l -6 5 z" fill="#334155"/>
      <text x="136" y="114" font-size="12" fill="currentColor" font-family="system-ui,sans-serif"><tspan font-weight="700">Summary / phase</tspan> — rolls up its children</text>

      ${ARROW(0, 152, 116, 152)}
      <text x="136" y="157" font-size="12" fill="currentColor" font-family="system-ui,sans-serif"><tspan font-weight="700">Dependency</tspan> — one task constrains another</text>

      <rect x="0" y="188" width="120" height="14" rx="4" fill="#c7bdf9"/>
      <rect x="0" y="188" width="74" height="14" rx="4" fill="#6c4cf1"/>
      <text x="136" y="199" font-size="12" fill="currentColor" font-family="system-ui,sans-serif"><tspan font-weight="700">Progress</tspan> — the filled portion is % complete</text>

      <line x1="480" y1="8" x2="480" y2="212" stroke="#ef4444" stroke-width="1.6" stroke-dasharray="4 3"/>
      <text x="488" y="20" font-size="11" fill="#ef4444" font-family="system-ui,sans-serif" font-weight="700">Today</text>
    </svg>`,

    sections: [
      ['The difference in one line', `<p>A task consumes time and resources; it has a start, a finish and a duration. A milestone has no duration at all — it is a point marking that something has happened. That is why milestones render as diamonds: there is nothing to draw a bar across.</p>
        <p>The practical test takes a second. <em>Can somebody work on it?</em> You can work on drafting a specification. You cannot work on "specification approved": it either has happened or it has not.</p>
        <!--FIG:milestone|A milestone sits at a single point in time; the bar either side of it is the work.-->`],

      ['A worked example: the Harbour Labs packaging rebrand', `<p>One project, followed the whole way down. Harbour Labs is redoing the artwork for a 40-SKU line. Five working days a week, start Monday 2 March 2026.</p>
        <div class="worked">
          <table>
            <thead><tr><th>Row</th><th>Type</th><th>Duration</th><th>Start</th><th>Finish</th></tr></thead>
            <tbody>
              <tr><td>Artwork concepts</td><td>Task</td><td>10 d</td><td>Mon 2 Mar</td><td>Fri 13 Mar</td></tr>
              <tr><td>Internal review &amp; revisions</td><td>Task</td><td>4 d</td><td>Mon 16 Mar</td><td>Thu 19 Mar</td></tr>
              <tr><td><strong>Artwork frozen</strong></td><td>Milestone</td><td>0 d</td><td colspan="2">Thu 19 Mar</td></tr>
              <tr><td>Regulatory label check (external lab)</td><td>Task</td><td>8 d</td><td>Fri 20 Mar</td><td>Tue 31 Mar</td></tr>
              <tr><td><strong>Label approved</strong></td><td>Milestone</td><td>0 d</td><td colspan="2">Tue 31 Mar</td></tr>
              <tr><td>Print proofs from supplier</td><td>Task</td><td>6 d</td><td>Wed 1 Apr</td><td>Wed 8 Apr</td></tr>
              <tr><td><strong>Proof signed off</strong></td><td>Milestone</td><td>0 d</td><td colspan="2">Wed 8 Apr</td></tr>
              <tr><td>Print run</td><td>Task</td><td>15 d</td><td>Thu 9 Apr</td><td>Wed 29 Apr</td></tr>
              <tr><td>Transit to distribution centre</td><td>Task</td><td>7 d</td><td>Thu 30 Apr</td><td>Fri 8 May</td></tr>
              <tr><td><strong>Retail switchover</strong></td><td>Milestone</td><td>0 d</td><td colspan="2">Mon 11 May</td></tr>
            </tbody>
          </table>
          <p>Five milestones, five tasks. Three of them — artwork frozen, label approved, proof signed off — are moments when somebody <em>outside</em> the team has to act. That is the reason to place them.</p>
          <p>Read the milestone rows alone and you have the project in one breath: artwork frozen 19 March, label approved 31 March, proof signed 8 April, on shelf 11 May.</p>
        </div>`],

      ['What happens when a milestone slips', `<p>The external lab quotes eight days and takes thirteen. The regulatory check now finishes Tuesday 7 April instead of Tuesday 31 March.</p>
        <div class="worked">
          <table>
            <thead><tr><th>Milestone</th><th>Planned</th><th>Forecast</th><th>Slip</th></tr></thead>
            <tbody>
              <tr><td>Artwork frozen</td><td>Thu 19 Mar</td><td>Thu 19 Mar</td><td>0 d</td></tr>
              <tr><td>Label approved</td><td>Tue 31 Mar</td><td>Tue 7 Apr</td><td>5 d</td></tr>
              <tr><td>Proof signed off</td><td>Wed 8 Apr</td><td>Wed 15 Apr</td><td>5 d</td></tr>
              <tr><td>Retail switchover</td><td>Mon 11 May</td><td>Mon 18 May</td><td>5 d</td></tr>
            </tbody>
          </table>
          <p>There is no float in that chain, so all five days land on the launch date. Those four rows are the entire status report, and they exist only because those points were modelled as milestones.</p>
        </div>
        <p>A task slipping means work is taking longer and may still be absorbed. A milestone slipping means a commitment moved. Nobody outside the project cares that proofs took seven days instead of six; they care that the shelf date is now 18 May.</p>`],

      ['Task or milestone: the dimensions that actually differ', `<p>The distinction is not a drawing convention. It changes behaviour in six places.</p>
        <table>
          <thead><tr><th>Dimension</th><th>Task</th><th>Milestone</th></tr></thead>
          <tbody>
            <tr><td>Duration</td><td>One day or more. Consumes calendar and effort.</td><td>Zero. Start and finish are the same date.</td></tr>
            <tr><td>Dependencies</td><td>Predecessors and successors, most often finish-to-start.</td><td>Needs at least one of each, or it is decoration.</td></tr>
            <tr><td>A slip means</td><td>Work took longer; float or resources may recover it.</td><td>A commitment moved. Recovery needs re-planning, not effort.</td></tr>
            <tr><td>Resourcing</td><td>An assignee doing the work, usually a cost.</td><td>An owner who chases it. Effort is typically zero.</td></tr>
            <tr><td>How it exports</td><td>A bar in PDF, PNG and PowerPoint; a real finish and day count in Excel and CSV; a multi-day calendar event.</td><td>A diamond in visual exports; blank finish and duration 0 in Excel and CSV; a single-day calendar event.</td></tr>
            <tr><td>Who reads it</td><td>The person doing the work, and their manager.</td><td>Sponsors, clients, regulators, the summary slide.</td></tr>
          </tbody>
        </table>
        <p>The export row surprises people. Set the view to milestones only, export, and you have a one-page schedule for a steering group without building a second chart — but only if your milestones are real milestones.</p>`],

      ['What it costs to get it wrong', `<p>Now model "Label approved" the way most people first write it: a task called "get label sign-off", three days, between the lab check and the proofs.</p>
        <div class="worked">
          <ol>
            <li><strong>The finish date moves.</strong> Three days of invented duration push retail switchover from Mon 11 May to Thu 14 May. The work did not change; the model did.</li>
            <li><strong>The gate disappears.</strong> "Get label sign-off" reads like something you do; "Label approved" reads like something the lab does. The first invites nobody to chase it.</li>
            <li><strong>The summary breaks.</strong> Filter to milestones and four rows appear instead of five, with the most externally-dependent point missing.</li>
          </ol>
        </div>
        <p>The reverse mistake is cheaper but real: making "Print run" a milestone because it feels significant. Fifteen days of press time vanish and the critical path routes around the longest item on the plan. Significance decides whether something belongs on the chart; duration decides its shape.</p>`],

      ['What milestones are actually for', `<p>Milestones exist for the reader, not the doer. They are how someone who does not live inside your project finds the moments that matter: approvals, deliveries, gates, go-live.</p>
        <p>They also make a schedule enforceable. "Artwork frozen", with the regulatory check depending on it, says what "freeze the artwork" does not: nothing downstream proceeds until this happens. When a designer submits a revision on 24 March, the chart shows a rule being broken, not a date sliding.</p>
        <!--FIG:deps|A milestone earns its place by sitting between things: predecessors that must finish, successors that cannot start.-->
        <p>A milestone with no links either way is worth deleting. If nothing waits on it, it is a note in the margin — and notes belong in the notes field, not on the timeline.</p>`],

      ['How many should a project have?', `<p>Enough to tell the story, few enough that each one means something. Four to eight is a reasonable range; a hundred milestones is just tasks wearing a different shape.</p>
        <p>A test: could you describe progress using only the milestones? Harbour Labs has five for a ten-week project — the upper end, justified because four are external hand-offs. The usual way to overshoot is a diamond at the end of every phase out of symmetry; phases already have summary bars.</p>`],

      ['Doing it in gantts.app', `<p>The Harbour Labs plan in the editor, using the buttons as they are actually labelled.</p>
        <ol>
          <li>Click <strong>✨ Paste to Gantt</strong> and paste the outline. A line ending in <code>!</code> becomes a milestone, <code>(10d)</code> sets a duration, <code>after Name</code> links a predecessor, a leading <code>#</code> makes a phase — for example <code>Artwork frozen ! after Internal review</code>.</li>
          <li>By hand instead: <strong>＋ Task</strong> for work rows, <strong>◆ Milestone</strong> for diamonds, <strong>▣ Group</strong> for a phase, <strong>→|</strong> to indent a row under it.</li>
          <li>Typed a milestone as a task? Double-click its row and change <strong>Type</strong> from <em>task</em> to <em>milestone</em>. Its finish collapses onto its start; no need to delete and re-add.</li>
          <li>In the same panel set <strong>Runs after (predecessors)</strong>, or the milestone will not move when the work in front of it moves.</li>
          <li>Click <strong>⚡ Auto-schedule</strong> to push every row to the earliest date its dependencies allow — this is how you learn whether your milestone dates were wishes or consequences.</li>
          <li>Tick <strong>Critical path</strong> to confirm the chain through your gates sets the finish date. Striped bars are critical.</li>
          <li>Open <strong>◳ Baseline</strong> and save the plan before work starts. The variance columns then report milestone slip in days, which is where the five-day figure above comes from.</li>
          <li>Set <strong>View</strong> to <strong>Milestones only</strong> for the sponsor version, then <strong>Export</strong> → <strong>📄 PDF document</strong> or <strong>📽 PowerPoint (.pptx)</strong>. Switch back to <strong>All tasks</strong> for delivery.</li>
        </ol>
        <p>One thing the editor will not do: drag a milestone wider. Milestones move but never resize, because a milestone with duration is not a milestone.</p>`],

      ['Common mistakes', `<p><strong>Milestones with duration.</strong> If it takes three days it is a task. Give it a bar and put a milestone at its end if completion matters.</p>
        <p><strong>Milestones nobody owns.</strong> The owner is whoever makes the phone call when the date is at risk, not whoever does the approving.</p>
        <p><strong>Milestones dated by hope.</strong> If "Label approved" sits on 31 March because that is what retail was promised, rather than because eight days of lab work end there, the chart records an ambition. Auto-schedule, then negotiate the gap deliberately.</p>
        <p><strong>Milestones reported as percentages.</strong> A milestone is 0% or 100%. "Label approval is 60% done" means the underlying task is 60% done and the gate has not happened.</p>`],

      ['Summary bars and the hierarchy', `<p>The third symbol is the summary or phase bar spanning its child tasks. It is calculated, not entered: its dates come from the earliest start and latest finish beneath it, which is why editing them directly is usually disabled. To move a phase, move what it contains.</p>
        <p>A summary bar shows when work runs; a milestone shows when a commitment falls due. A "Pre-press" summary spanning 2 March to 8 April is useful to the Harbour Labs team and useless to the retail buyer, who only asks about 11 May.</p>`],
    ],

    callout: 'One habit to take from this: put a milestone at every point where someone outside the team has to approve, deliver, inspect or sign. Those are the dependencies you control least and the delays you will be asked about most. Three of the five Harbour Labs milestones are exactly that — and the one that slipped was one of them.',

    faq: [
      ['What is the difference between a task and a milestone?', 'A task has duration — a start, a finish and work in between. A milestone has zero duration and marks a moment, such as an approval or a delivery. Quick test: if somebody can spend an afternoon working on it, it is a task.'],
      ['What does the diamond mean on a Gantt chart?', 'A milestone: a zero-duration marker for a significant event such as a sign-off, delivery or go-live. Having no length, it can be moved but not resized.'],
      ['How many milestones should a project have?', 'Typically four to eight — enough to tell the story, few enough that each carries meaning. If reading the list end to end does not describe the project, you have the wrong ones.'],
      ['Can a milestone have a duration?', 'No — by definition it is zero. If the thing genuinely takes time, such as a five-day regulatory review, model it as a task and put a milestone at its finish. The commitment date is then calculated rather than asserted.'],
      ['What happens to the schedule when a milestone slips?', 'Everything linked after it moves by the same amount, minus any float in the chain. In the packaging example a five-day slip on "Label approved" pushed retail switchover from 11 May to 18 May in full, because nothing downstream had slack.'],
      ['What is a summary bar?', 'A bar representing a phase or group. Its dates come from the earliest start and latest finish beneath it, so it moves when its children move. It is not a substitute for a milestone: a summary shows when work runs, a milestone when a commitment falls due.'],
    ],

    related: [['what-is-a-gantt-chart', 'What is a Gantt chart?'], ['gantt-chart-dependencies', 'The four dependency types'], ['gantt-chart-mistakes', 'Nine common Gantt chart mistakes']],
    tpl: ['simple', 'project-management'],
  },
};

module.exports = { S };
