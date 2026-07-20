/* ============================================================
   guides-deep-s-curve-project-management.js

   Deepened English entry for the s-curve guide. Same field shape as
   the entries in new-guides.js (the `G` object); `figure`, `related`,
   `tpl`, `date`, `metaTitle` and `metaDesc` are carried across
   unchanged.

   Diagrams inside section bodies are <!--FIG:name--> tokens, never
   literal <svg> — see scripts/check-guide-figures.js. The worked
   example is wrapped in <div class="worked"> because that is the
   marker scripts/audit-guide-richness.js counts.

   Everything said here about what the tool computes was checked
   against js/evm.js: AC comes only from task.spent, the earned curve
   is reconstructed (earnedIsReconstructed is always true), and the
   weighting basis falls back from 'cost' to 'duration' when no task
   carries a cost.
   ============================================================ */

const S = {
  's-curve-project-management': {
    h1: 'S-Curves and Earned Value: Reading Whether You Are Actually Behind',
    metaTitle: 'S-Curve in Project Management (Free Generator)',
    metaDesc: 'What an S-curve shows, how to read planned against actual, and how earned value turns a hunch into a number. Free generator, from your own schedule.',
    date: '2026-07-19',
    lead: 'A percentage complete tells you almost nothing on its own. Sixty per cent done is excellent in week two and a catastrophe in week nine. An <strong>S-curve</strong> fixes that by plotting cumulative planned work against time, so "how far along are we" becomes "how far along were we <em>supposed</em> to be by now" — and the gap between the two lines is the answer.',
    figIntro: 'Planned against actual, and what the gap between them means:',
    figure: `<svg viewBox="0 0 620 300" width="100%" role="img" aria-label="An S-curve chart showing a planned cumulative progress curve and an actual curve running below it, with the vertical gap marked as schedule variance">
      <line x1="50" y1="20" x2="50" y2="240" stroke="#cbd5e1" stroke-width="1"/>
      <line x1="50" y1="240" x2="580" y2="240" stroke="#cbd5e1" stroke-width="1"/>
      <text x="44" y="26" font-size="10" fill="#94a3b8" text-anchor="end" font-family="system-ui,sans-serif">100%</text>
      <text x="44" y="134" font-size="10" fill="#94a3b8" text-anchor="end" font-family="system-ui,sans-serif">50%</text>
      <text x="44" y="244" font-size="10" fill="#94a3b8" text-anchor="end" font-family="system-ui,sans-serif">0%</text>
      <text x="300" y="266" font-size="11" fill="#94a3b8" text-anchor="middle" font-family="system-ui,sans-serif">time →</text>

      <path d="M 50 240 C 170 236, 210 150, 300 120 C 390 90, 450 30, 580 22" fill="none" stroke="#2563eb" stroke-width="2.5"/>
      <text x="470" y="52" font-size="11.5" font-weight="700" fill="#2563eb" font-family="system-ui,sans-serif">Planned (PV)</text>

      <path d="M 50 240 C 160 238, 200 190, 300 172" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="7 4"/>
      <text x="150" y="212" font-size="11.5" font-weight="700" fill="#16a34a" font-family="system-ui,sans-serif">Actual / earned (EV)</text>

      <line x1="300" y1="20" x2="300" y2="240" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3 3"/>
      <text x="304" y="32" font-size="10.5" fill="#ef4444" font-family="system-ui,sans-serif">today</text>

      <line x1="300" y1="120" x2="300" y2="172" stroke="#ea580c" stroke-width="7" opacity="0.28"/>
      <text x="314" y="150" font-size="11" font-weight="700" fill="#ea580c" font-family="system-ui,sans-serif">the gap = schedule variance</text>
      <text x="314" y="166" font-size="10" fill="#94a3b8" font-family="system-ui,sans-serif">below the line = behind plan</text>
    </svg>`,
    sections: [
      ['Why the curve is S-shaped', `<p>Projects do not burn work at a constant rate. The opening weeks go slowly — mobilising, agreeing scope, waiting for approvals — the middle accelerates as everything runs in parallel, and the tail slows again as the last items wait on sign-off and snagging.</p>
        <p>Plot cumulative work against time and that shape comes out as a flattened S: shallow, steep, shallow. It is not a target anyone drew — it falls out of how work arrives, which is what makes it a fair yardstick. A straight line would imply twenty per cent done in twenty per cent of the time, and every project in history would look "behind" in its first month.</p>`],

      ['Reading planned against actual', `<p>Two curves. The <strong>planned</strong> curve comes from your baseline: spread each task's weight across its planned dates and accumulate. The <strong>actual</strong> curve comes from reported progress.</p>
        <p>Read them vertically, at today:</p>
        <ul>
          <li><strong>Actual below planned</strong> — behind, by the vertical distance.</li>
          <li><strong>Actual above planned</strong> — ahead, or the progress reporting is optimistic.</li>
          <li><strong>The curves diverging</strong> — getting worse, not stable. The shape that matters most, and the one a percentage never shows.</li>
        </ul>
        <p>Read them <em>horizontally</em> instead and you get the version a status meeting understands: slide left from today's actual point to where it meets the planned curve, and you have the date the plan expected this much progress. The distance is how many weeks behind you are — the unit people actually argue in.</p>`],

      ['Earned value, without the jargon', `<p>Earned value gives the gap a number. Three quantities, and the acronyms are worse than the ideas:</p>
        <ul>
          <li><strong>PV</strong> (planned value, BCWS) — the work you said you would have finished by now, valued at budget.</li>
          <li><strong>EV</strong> (earned value, BCWP) — the work you have <em>actually</em> finished, valued at the same budget. A task worth £10,000 that is 40% done has earned £4,000. What it cost is deliberately irrelevant here.</li>
          <li><strong>AC</strong> (actual cost, ACWP) — what you really spent.</li>
        </ul>
        <p>From those three:</p>
        <ul>
          <li><strong>SV = EV − PV</strong> — schedule variance. Negative is behind.</li>
          <li><strong>CV = EV − AC</strong> — cost variance. Negative is over budget.</li>
          <li><strong>SPI = EV ÷ PV</strong> — below 1.0 means behind. 0.85 means 85p of progress per pound of plan.</li>
          <li><strong>CPI = EV ÷ AC</strong> — below 1.0 is over budget.</li>
        </ul>
        <p>The separation is the point. A project can be on budget and badly late, or on time and haemorrhaging money, and one blended "percentage complete" hides both. As two axes, there are four places to be:</p>
        <!--FIG:evmquad|Schedule and cost performance are independent. A single percentage complete collapses both axes into one number.-->`],

      ['A worked example, with the arithmetic', `<p>A ten-week office fit-out, budget at completion (<strong>BAC</strong>) <strong>£200,000</strong>, spread the way fit-outs spend: slowly, then heavily through the middle trades, tapering into commissioning and snagging.</p>
        <div class="worked">
          <p><strong>Planned spend per week, cumulated into PV:</strong></p>
          <table>
            <thead><tr><th>Week</th><th>Planned this week</th><th>Cumulative PV</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>£8,000</td><td>£8,000</td></tr>
              <tr><td>2</td><td>£12,000</td><td>£20,000</td></tr>
              <tr><td>3</td><td>£20,000</td><td>£40,000</td></tr>
              <tr><td>4</td><td>£28,000</td><td>£68,000</td></tr>
              <tr><td>5</td><td>£32,000</td><td>£100,000</td></tr>
              <tr><td>6</td><td>£32,000</td><td>£132,000</td></tr>
              <tr><td>7</td><td>£26,000</td><td>£158,000</td></tr>
              <tr><td>8</td><td>£18,000</td><td>£176,000</td></tr>
              <tr><td>9</td><td>£14,000</td><td>£190,000</td></tr>
              <tr><td>10</td><td>£10,000</td><td>£200,000</td></tr>
            </tbody>
          </table>
          <p><strong>Five weeks of actuals.</strong> EV is the budget value of what is finished; AC is what it cost.</p>
          <table>
            <thead><tr><th>Week</th><th>Cumulative PV</th><th>Cumulative EV</th><th>Cumulative AC</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>£8,000</td><td>£6,000</td><td>£7,000</td></tr>
              <tr><td>2</td><td>£20,000</td><td>£17,000</td><td>£20,000</td></tr>
              <tr><td>3</td><td>£40,000</td><td>£33,000</td><td>£38,000</td></tr>
              <tr><td>4</td><td>£68,000</td><td>£55,000</td><td>£62,000</td></tr>
              <tr><td>5</td><td>£100,000</td><td>£82,000</td><td>£94,000</td></tr>
            </tbody>
          </table>
          <p><strong>Read at the end of week 5</strong>: PV = £100,000, EV = £82,000, AC = £94,000.</p>
          <ul>
            <li><strong>SV = EV − PV</strong> = 82,000 − 100,000 = <strong>−£18,000</strong> of budgeted work that should be finished and is not.</li>
            <li><strong>SPI = EV ÷ PV</strong> = 82,000 ÷ 100,000 = <strong>0.82</strong>. Plan is converting into progress at 82% of the assumed rate.</li>
            <li><strong>CV = EV − AC</strong> = 82,000 − 94,000 = <strong>−£12,000</strong>. The work cost twelve thousand more than it was worth.</li>
            <li><strong>CPI = EV ÷ AC</strong> = 82,000 ÷ 94,000 = <strong>0.87</strong>. Every pound spent buys 87p of budgeted value.</li>
            <li><strong>Per cent complete = EV ÷ BAC</strong> = 82,000 ÷ 200,000 = <strong>41%</strong>, against <strong>50%</strong> planned. 41% sounds fine until you know 50% was due.</li>
            <li><strong>EAC = BAC ÷ CPI</strong> = 200,000 ÷ 0.8723 = <strong>£229,300</strong>. If cost performance holds, the £200,000 job lands about <strong>£29,300 over</strong> (VAC), with <strong>£135,300</strong> still to spend (ETC = EAC − AC).</li>
          </ul>
          <p><strong>Take the horizontal read to the meeting.</strong> Where did the plan reach £82,000? Between week 4 (£68,000) and week 5 (£100,000): £14,000 into a week-5 increment of £32,000, so 14 ÷ 32 = 0.44 of that week. The plan passed £82,000 at <strong>week 4.4</strong> — you are <strong>0.56 of a week, under three working days, behind</strong>.</p>
          <p>Three days behind and an SPI of 0.82 are the same fact. The ratio looks alarming because this is the steepest part of the curve, where a few days cost a lot of value. Quote both.</p>
        </div>`],

      ['The seven numbers, and the specific way each gets misread', `<p>Each has a standard misinterpretation, and the misreadings do more damage than not measuring.</p>
        <table>
          <thead><tr><th>Metric</th><th>Formula</th><th>What it answers</th><th>How it is misread</th></tr></thead>
          <tbody>
            <tr><td><strong>PV</strong></td><td>budgeted cost of work scheduled</td><td>How much should be done by now?</td><td>Taken from current dates rather than a baseline. Those absorb every slip, so PV follows you and variance reads zero.</td></tr>
            <tr><td><strong>EV</strong></td><td>BAC × % complete</td><td>How much is done, valued at budget?</td><td>Only as honest as the progress reporting behind it — the "90% done for three weeks" problem.</td></tr>
            <tr><td><strong>AC</strong></td><td>actual cost incurred</td><td>What has it cost so far?</td><td>Read before invoices land. AC lags, flattering CPI early, punishing it later.</td></tr>
            <tr><td><strong>SV</strong></td><td>EV − PV</td><td>How much work are we short?</td><td>Heard as a cost overrun. Measured in money, but a <em>schedule</em> statement.</td></tr>
            <tr><td><strong>CV</strong></td><td>EV − AC</td><td>Are we paying more than the work is worth?</td><td>Compared against budget spent rather than earned value; "we have used 47% of the budget" says nothing without EV.</td></tr>
            <tr><td><strong>SPI</strong></td><td>EV ÷ PV</td><td>Rate of turning plan into progress</td><td>Drifts to 1.0 near the end whatever happens — every project eventually earns its full BAC.</td></tr>
            <tr><td><strong>CPI</strong></td><td>EV ÷ AC</td><td>Value bought per pound spent</td><td>Reported as exactly 1.00 by tools that infer AC from progress. A CPI from a calculator that never asked what you spent is arithmetic, not data.</td></tr>
          </tbody>
        </table>
        <p>One more, because it costs projects their finish dates: earned value weights everything by budget, the critical path ignores budget entirely. A cheap two-day approval on the driving chain barely moves SPI. You can read 1.05 and still be late.</p>`],

      ['Why our tool refuses to show you a CPI sometimes', `<p>Worth stating plainly, because most free EVM calculators do the opposite. Actual cost cannot be derived from a schedule; it comes from your accounts. The shortcut is to assume a task 40% done has consumed 40% of its budget — and if you do that, AC equals EV by construction, so <strong>CPI comes out as exactly 1.00 for every project that has ever existed</strong>. It looks authoritative, responds to nothing, and tells a runaway budget it is on track.</p>
        <p>So gantts.app takes actual cost from one place: the <strong>Spent</strong> figure you enter on a task. If no task carries one, the cost metrics — AC, CV, CPI, EAC, ETC, VAC — come back empty and the panel omits them rather than guessing. SV and SPI still work, needing only dates and progress. A missing number is honest; a confident wrong one is not.</p>
        <p>The CPI of 0.87 above exists only because someone typed £94,000 of real spend. No Gantt chart knows that figure.</p>
        <p>For the same reason the earned curve behind today is <strong>reconstructed, not recorded</strong>. The tool stores one progress reading per task, not a history, so a truthful earned curve for past dates is not recoverable. Rather than refuse to draw it, we reconstruct it under a stated assumption — progress accrued evenly across each task's elapsed working days. That is exact at the status date, where the metrics are read, and approximate behind it. The panel says as much.</p>`],

      ['You do not need a budget to get a curve', `<p>Most plans carry no cost data, and an S-curve that needs one is a curve nobody draws.</p>
        <p>With no costs, gantts.app weights each task by working-day duration. Same shape, axis in working days rather than currency; SV and SPI mean what they meant above, in days instead of pounds. Add costs later and the panel switches to a value curve.</p>
        <p>Two details change the numbers. Only leaf tasks count: summary bars roll up their children's cost, so counting both inflates BAC by the depth of your outline. Milestones, being zero-duration, contribute nothing.</p>
        <p>One thing matters more than any of this: <strong>set a baseline</strong>. Without one, "planned" means your current dates, which already contain every slip. Schedule variance then reads zero forever — reassuring and useless.</p>
        <!--FIG:baseline|Planned bars against actual bars. The baseline is the frozen copy the planned curve is built from — without it, the plan moves every time you do.-->
        <p>Baseline ▸ Set baseline, once, when the plan is agreed. The tool reports which source it used, so you can tell a real variance from a comparison of your dates against themselves.</p>`],

      ['How to build one here', `<ol>
          <li>Build or import your schedule, dates roughly right.</li>
          <li><strong>Baseline ▸ Set baseline</strong> when the plan is agreed. This freezes what "planned" means.</li>
          <li>Optionally give tasks a <strong>Budget</strong>, so the curve reads in money rather than days.</li>
          <li>Update <strong>% complete</strong> as work happens — the earned curve is made of it.</li>
          <li>Enter <strong>Spent</strong> per task to unlock CPI, cost variance and the forecast at completion.</li>
          <li>Click <strong>📈 S-curve</strong>.</li>
        </ol>
        <p>Runs in your browser: no account, no upload, no spreadsheet to maintain.</p>`],
    ],
    callout: 'Quote SPI and the horizontal read together. "SPI 0.82" and "three days behind" are the same week-5 position; a room hearing only one will over-react or do nothing.',
    faq: [
      ['What is an S-curve in project management?', 'A graph of cumulative planned work against time. It is S-shaped because projects start slowly, accelerate, then taper. Plotted against actual progress, the vertical gap between the curves is how far ahead or behind you are.'],
      ['What is the difference between an S-curve and earned value?', 'The S-curve is the picture; earned value is the arithmetic behind it. EVM puts numbers on the gap — SV, SPI, CV, CPI — where the curve shows its shape and direction.'],
      ['What does an SPI of 0.9 mean?', 'You have earned 90% of the value the plan said you would have by now — roughly 10% behind in value terms. Below 1.0 is behind. It does not tell you how many days late you are — read the gap horizontally for that.'],
      ['How do I calculate SPI and CPI by hand?', 'Three numbers at the same status date: PV, the budget value of work scheduled by now; EV, the budget value of work finished; AC, what you spent. SPI is EV ÷ PV; CPI is EV ÷ AC. With PV £100,000, EV £82,000 and AC £94,000: SPI 0.82, CPI 0.87.'],
      ['Do I need cost data to use an S-curve?', 'No. Without costs, tasks are weighted by working-day duration and you get a progress curve — same shape, read in days. Costs turn it into a value curve and unlock the cost metrics.'],
      ['Why is CPI not showing?', 'Because no actual costs have been entered. CPI needs real spend; deriving it from percentage complete makes it exactly 1.00 for every project. Add a Spent figure to your tasks and it appears, with CV, EAC and the rest.'],
      ['Can I make an S-curve in Excel?', 'Yes, and most people do — a cumulative column and a chart maintained by hand, redone whenever dates move. Generating it from the schedule removes the step.'],
    ],
    related: [['gantt-baseline-variance', 'Tracking slippage against a baseline'], ['critical-path-method', 'How the critical path is calculated'], ['3-week-lookahead-schedule', 'The 3-week lookahead']],
    tpl: ['project-management', 'construction'],
  },
};

module.exports = { S };
