/* ============================================================
   guides-deep-gantt-chart-mistakes.js — deepened English entry for
   the "common Gantt chart mistakes" guide.

   Same field shape as the entries in new-guides.js (h1, metaTitle,
   metaDesc, date, lead, figIntro, figure, sections, callout, faq,
   related, tpl), so the two are interchangeable to the generator.

   figure / related / tpl / date / metaTitle / metaDesc are carried
   across from new-guides.js unchanged. The additional diagrams inside
   section bodies are <!--FIG:name--> TOKENS, never literal <svg>:
   the token is drawn per locale, a pasted SVG would ship English
   labels to five other languages. check-guide-figures.js enforces it.
   ============================================================ */

const S = {

  'gantt-chart-mistakes': {
    h1: 'Nine Gantt Chart Mistakes (and How to Fix Them)',
    metaTitle: 'Nine Gantt Chart Mistakes (and Fixes)',
    metaDesc: 'The nine most common Gantt chart mistakes — over-detailing, missing dependencies, no float, stale updates — with the fix for each, shown before and after.',
    date: '2026-07-18',
    lead: 'Most bad Gantt charts fail the same handful of ways, and almost none of them are about the tool. A chart can be neat, colourful, exported every Friday and still be lying about your finish date. Here is each mistake, why it is wrong, what it costs on a real plan, and the review pass that catches them.',
    figIntro: 'The single most common problem, before and after. The same project, planned twice:',
    figure: `<svg viewBox="0 0 620 250" width="100%" role="img" aria-label="Comparison of a cluttered over-detailed Gantt chart against a clean phase-level chart">
      <text x="0" y="12" font-size="12" font-weight="700" fill="#dc2626" font-family="system-ui,sans-serif">✗ Every task, no structure</text>
      ${[0,1,2,3,4,5,6,7].map(i=>`<rect x="${8+i*11}" y="${26+i*12}" width="${44+(i%3)*18}" height="7" rx="3" fill="#cbd5e1"/>`).join('')}
      <text x="0" y="146" font-size="10.5" fill="#94a3b8" font-family="system-ui,sans-serif">40+ rows, no phases, no milestones —</text>
      <text x="0" y="160" font-size="10.5" fill="#94a3b8" font-family="system-ui,sans-serif">unreadable and obsolete within a week.</text>

      <line x1="290" y1="6" x2="290" y2="200" stroke="#e2e8f0" stroke-width="1"/>

      <text x="320" y="12" font-size="12" font-weight="700" fill="#157f4a" font-family="system-ui,sans-serif">✓ Phases, milestones, dependencies</text>
      <rect x="320" y="26" width="110" height="14" rx="4" fill="#6c4cf1"/>
      <text x="438" y="37" font-size="10.5" fill="currentColor" font-family="system-ui,sans-serif">Discovery</text>
      <rect x="346" y="52" width="130" height="14" rx="4" fill="#8b7bf5"/>
      <text x="484" y="63" font-size="10.5" fill="currentColor" font-family="system-ui,sans-serif">Design</text>
      <path d="M 430 33 C 444 33, 332 59, 346 59" fill="none" stroke="#6c4cf1" stroke-width="1.8"/>
      <polygon points="346,59 340,55 340,63" fill="#6c4cf1"/>
      <polygon points="480,74 488,82 480,90 472,82" fill="#10b981"/>
      <text x="496" y="86" font-size="10.5" fill="currentColor" font-family="system-ui,sans-serif">Sign-off</text>
      <rect x="400" y="100" width="150" height="14" rx="4" fill="#ea580c"/>
      <text x="320" y="122" font-size="10.5" fill="currentColor" font-family="system-ui,sans-serif">Build</text>
      <rect x="430" y="126" width="90" height="14" rx="4" fill="#0d9488"/>
      <text x="320" y="148" font-size="10.5" fill="currentColor" font-family="system-ui,sans-serif">Test</text>
      <text x="320" y="174" font-size="10.5" fill="#94a3b8" font-family="system-ui,sans-serif">10 rows. Readable across a room,</text>
      <text x="320" y="188" font-size="10.5" fill="#94a3b8" font-family="system-ui,sans-serif">and cheap enough to keep current.</text>
    </svg>`,
    sections: [

      ['A plan that makes most of these mistakes at once', `<p>One ordinary project — a website replatform kicking off Monday 2 March 2026 — drawn the way people draw it, then drawn honestly.</p>
        <div class="worked">
          <p><strong>As planned.</strong> Six rows, all chained finish-to-start, no milestones, no buffer:</p>
          <ul>
            <li>Discovery — Mon 2 Mar to Fri 13 Mar (10 days)</li>
            <li>Design — Mon 16 Mar to Fri 27 Mar (10 days)</li>
            <li>Build — Mon 30 Mar to Fri 24 Apr (20 days, Priya)</li>
            <li>Content migration — Mon 30 Mar to Fri 17 Apr (15 days, Priya)</li>
            <li>QA — Mon 27 Apr to Fri 8 May (10 days)</li>
            <li>Go live — Mon 11 May</li>
          </ul>
          <p><strong>What it does not say.</strong> The client has five working days to review the design; that review is nowhere on the plan. Priya is booked at 100% on Build and 100% on Content migration for the same three weeks, so the chart quietly assumes 200% of one person. There is no buffer in 50 working days. And because every row sits in one FS chain, every row is critical.</p>
          <p><strong>Corrected.</strong> Add a <em>Design signed off</em> milestone carrying the review as lag (FS+5d): Build runs Mon 6 Apr to Fri 1 May. Content migration cannot overlap it while Priya owns both, so it runs Mon 4 May to Fri 22 May. QA follows, Mon 25 May to Fri 5 Jun. Five days of buffer put go-live on <strong>Fri 12 June</strong>.</p>
          <p><strong>The consequence.</strong> The chart said 11 May. The honest date was 12 June — 24 working days later, found in the first draft instead of in the second week of May. Nothing changed except that three things already true got written down.</p>
          <p><strong>And the reporting.</strong> On Mon 20 Apr the status report put Build at 60%, because 12 of its 20 days had elapsed. The team had finished 4 of 11 page templates. Real progress: 36%.</p>
        </div>`],

      ['1. Over-detailing', `<p>The most common failure by a distance. A chart carrying every sub-task is unreadable and unmaintainable — nobody updates sixty rows weekly, so it goes stale in days.</p>
        <p><strong>Fix:</strong> plan to the level you report at. Anything shorter than your reporting cycle belongs inside a task. Roll the detail into phases and keep the working list where the team already works.</p>`],

      ['2. No dependencies', `<p>A chart of parallel bars with no links is a picture, not a plan. When something slips, nothing moves, because nothing is connected.</p>
        <p><strong>Fix:</strong> link what genuinely constrains, then drag one bar and watch. If nothing follows it, the plan is not modelling your project.</p>`],

      ['3. Everything chained finish-to-start', `<p>The opposite error, and subtler. Put every task in one long line and every task lands on the critical path — sixty rows all saying "urgent", which is the same as saying nothing. It also becomes impossible to re-plan: every date is pinned by a preference.</p>
        <!--FIG:cpm|Only the longest route through the network sets the finish date.-->
        <p><strong>Fix:</strong> link only what physically constrains. If B could start today given the people and materials on hand, it does not depend on A. A healthy critical path covers a quarter to a half of your tasks; if it covers all of them you have drawn a queue, not a network.</p>`],

      ['4. Treating estimates as commitments', `<p>Every bar looks equally certain. A three-day task you have done fifty times and one nobody has tried are drawn identically.</p>
        <p><strong>Fix:</strong> put float where the uncertainty is, and say so. A plan that admits which parts are guesses survives contact with reality, because the guesses were given room to be wrong.</p>`],

      ['5. No float anywhere', `<p>A plan where every task starts the instant its predecessor ends can absorb nothing. The first two-day delay is a two-day project delay.</p>
        <!--FIG:float|Float is the room a task has before it starts pushing the finish date.-->
        <p><strong>Fix:</strong> buffer where risk concentrates — before hard deadlines, after anything owned by a third party, around approvals. One visible five-day buffer before go-live beats five days smeared invisibly across ten tasks.</p>`],

      ['6. Ignoring the critical path', `<p>If you do not know which tasks drive the end date, you cannot know which delays matter. Teams expedite work carrying three weeks of float while the real constraint slips below.</p>
        <p><strong>Fix:</strong> turn the critical path on and re-check it after every change. A task with eight days of float becomes critical the moment it slips nine.</p>`],

      ['7. No owners — and owners booked at 100%', `<p>Tasks without a named owner are everyone's job, which reliably means nobody's. One person per task, not a team: only a person can be asked about it.</p>
        <p>Less obviously, assigning one person to overlapping tasks at full load is the same error. Priya at 100% and 100% is not ambitious, it is arithmetically impossible — and the chart will not say so, because bars overlap happily.</p>
        <p><strong>Fix:</strong> check each assignee's load across the whole timeline, not task by task. Someone at 140% for three weeks is a schedule that has already failed.</p>`],

      ['8. Letting it go stale', `<p>A Gantt chart is a live document with an expiry date. Three weeks without an update and people stop trusting it; then they stop reading it.</p>
        <p><strong>Fix:</strong> update on a fixed cadence — weekly normally, daily in a crunch — and keep the chart small enough that this takes minutes.</p>`],

      ['9. No milestones', `<p>A wall of bars gives the reader nothing to anchor on. Milestones are how someone outside the project finds the decision points.</p>
        <p><strong>Fix:</strong> mark approvals, deliveries, gates and go-live as zero-duration milestones and hang the downstream work off them. Four to eight is usually right. Above, the missing milestone was not cosmetic: <em>Design signed off</em> was where five days of review had been hiding.</p>`],

      ['10. Percent complete measured in elapsed days', `<p>This produces the most confident wrong reporting of anything here. Derive progress from elapsed duration and a task nobody has started reports 60% on day twelve of twenty — exactly what happened on 20 April above.</p>
        <p><strong>Fix:</strong> report a share of the work — templates built, drawings issued, test cases passed — not of the calendar. A task with no countable unit of work is too coarse to track.</p>`],

      ['11. Re-baselining every time you miss the baseline', `<p>A baseline records what you promised. Re-saving it whenever variance turns uncomfortable makes it a record of what you most recently did — a number you already had.</p>
        <p>Done monthly, it yields a project on plan against its ninth baseline and four months late against its first.</p>
        <p><strong>Fix:</strong> re-baseline only for an approved scope change or a formal replan, and keep the old ones. The gap between baseline 1 and baseline 5 is often the most honest description of a project you have.</p>`],

      ['12. Using a Gantt chart for the wrong thing', `<p>Gantt charts are for work with sequence, dependencies and dates. They fit continuous flow and a weekly-reprioritised backlog badly.</p>
        <p><strong>Fix:</strong> Gantt when order and deadlines matter, a board when they do not. Running both is normal — a board for the week, a Gantt for the quarter.</p>`],

      ['The symptom for each mistake', `<p>Easier to spot by symptom than by definition:</p>
        <table>
          <thead><tr><th>What you notice</th><th>The mistake</th><th>The fix</th></tr></thead>
          <tbody>
            <tr><td>Not updated in three weeks</td><td>Over-detailing</td><td>Plan at the level you report at</td></tr>
            <tr><td>A task slips, no date moves</td><td>No dependencies</td><td>Link what constrains; drag a bar to test</td></tr>
            <tr><td>Every task is critical</td><td>All chained FS</td><td>Delete links that express preference</td></tr>
            <tr><td>Small delays move the end date</td><td>No float</td><td>Visible buffers before deadlines</td></tr>
            <tr><td>You expedited the wrong task</td><td>Critical path ignored</td><td>Turn it on; re-check after changes</td></tr>
            <tr><td>Nobody answers when you ask</td><td>No owner</td><td>One named person per task</td></tr>
            <tr><td>One person's tasks slip together</td><td>Booked over 100%</td><td>Check load across the timeline</td></tr>
            <tr><td>"So what happens when?"</td><td>No milestones</td><td>Four to eight gates, with work behind them</td></tr>
            <tr><td>90% complete for a month</td><td>Progress from elapsed days</td><td>Report a share of work</td></tr>
            <tr><td>Green weekly, months late</td><td>Baseline re-saved on each miss</td><td>Re-baseline only on approved replans</td></tr>
            <tr><td>Rewritten every Monday</td><td>Wrong tool</td><td>Use a board for flow</td></tr>
          </tbody>
        </table>`],

      ['A twenty-minute review pass', `<p>Run this over a chart you already have, in order. Every step is something you can see, not something you have to judge.</p>
        <ol>
          <li>Count the rows. More than you will update weekly? Collapse the detail into phase groups first.</li>
          <li>Drag the last task of your first phase two weeks right. Whatever fails to move is not linked. Undo, then add those links in the <strong>Runs after</strong> column.</li>
          <li>Tick <strong>Critical path</strong>. If everything is striped you have over-linked; if nothing is, you have not linked at all.</li>
          <li>Set <strong>View</strong> to <strong>Lookahead</strong>, window at 3 weeks. If that looks nothing like what people are doing this week, the chart is already stale.</li>
          <li>Open <strong>👥 Workload</strong>. Anyone over capacity on any day is an impossible promise inside a plausible chart.</li>
          <li>Look for diamonds. Every point where someone outside the team approves, delivers or inspects should be a milestone, with the review time in the lag.</li>
          <li>Check the row before each hard deadline. If it ends the day the deadline lands, insert a buffer task and label it as one.</li>
          <li>Open <strong>◳ Baseline</strong>, choose <em>Set baseline from current plan</em> — once, now that the plan is honest — then <em>Show variance columns</em>.</li>
          <li>Ask each owner for progress in units of work, not a percentage. Where the answer and the bar disagree, the bar is wrong.</li>
        </ol>`],
    ],
    callout: 'Notice how few of these are charting mistakes. Switching tools fixes almost none of them: a missing dependency, an over-booked person and a quietly re-saved baseline are decisions, and they follow you into whatever software you move to next.',
    faq: [
      ['What is the most common Gantt chart mistake?', 'Over-detailing. Charts listing every sub-task become unreadable and are abandoned within weeks, because keeping them current costs more than they return.'],
      ['How many tasks should a Gantt chart have?', 'Few enough that you will maintain it — for most projects 15–40 rows. Anything shorter than your reporting cycle belongs inside a task.'],
      ['Should every task be linked finish-to-start?', 'No. Chaining every task in one line puts everything on the critical path and makes the plan impossible to re-sequence. Link only what physically constrains.'],
      ['Why does my project slip even though the chart looked fine?', 'Usually no float, someone assigned above 100% across overlapping tasks, or progress measured as elapsed duration rather than work done.'],
      ['Is it wrong to re-baseline a project?', 'Right for an approved scope change or a formal replan. Re-saving it every time it is missed is not: reports stay green while the delivery date moves.'],
      ['How often should a Gantt chart be updated?', 'Weekly for most projects, daily during a crunch. The cadence matters less than it being fixed and sustainable.'],
    ],
    related: [['gantt-chart-dependencies', 'The four dependency types explained'], ['gantt-baseline-variance', 'Tracking variance against a baseline'], ['how-to-make-a-gantt-chart', 'How to make a Gantt chart']],
    tpl: ['project-management', 'simple'],
  },

};

module.exports = { S };
