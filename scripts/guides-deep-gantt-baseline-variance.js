/* ============================================================
   guides-deep-gantt-baseline-variance.js — deepened English entry
   for the `gantt-baseline-variance` guide.

   Same field shape as the `G` object in new-guides.js. `figure`,
   `related`, `tpl`, `date`, `metaTitle` and `metaDesc` are carried
   across unchanged; the body is rebuilt around one worked project
   that runs from the first status cycle to the last.

   Section bodies use <!--FIG:name--> tokens, never literal <svg>,
   so the extra diagrams are drawn per locale rather than shipping
   English labels into the other five languages.
   ============================================================ */

// shared bits of the mini-gantt visual language used across figures
const AX = (x, y, w, rows, labels) => {
  let out = `<line x1="${x}" y1="${y - 10}" x2="${x + w}" y2="${y - 10}" stroke="#cbd5e1" stroke-width="1"/>`;
  labels.forEach((l, i) => {
    const lx = x + (w / labels.length) * i + 4;
    out += `<text x="${lx}" y="${y - 16}" font-size="10" fill="#94a3b8" font-family="system-ui,sans-serif">${l}</text>`;
    out += `<line x1="${lx - 4}" y1="${y - 10}" x2="${lx - 4}" y2="${y + rows * 26}" stroke="#eef2f7" stroke-width="1"/>`;
  });
  return out;
};
const BAR = (x, y, w, fill, label, opts = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${opts.h || 14}" rx="4" fill="${fill}"${opts.op ? ` opacity="${opts.op}"` : ''}/>` +
  (label ? `<text x="${x + w + 8}" y="${y + (opts.h || 14) - 3}" font-size="11.5" fill="currentColor" font-family="system-ui,sans-serif">${label}</text>` : '');

const S = {

  // ---------------------------------------------------------------
  'gantt-baseline-variance': {
    h1: 'Baseline vs Actual: Tracking Schedule Variance on a Gantt Chart',
    metaTitle: 'Gantt Baseline vs Actual: Schedule Variance',
    metaDesc: 'How to set a Gantt baseline and read schedule variance: what it is, when to set it, reading start and finish variance, and when to re-baseline.',
    date: '2026-07-18',
    lead: 'A Gantt chart shows where your project is. A baseline shows where it was supposed to be. Without one you can report progress but not slippage — and slippage is what anyone funding the work actually wants to know.',
    figIntro: 'A baseline renders as a thin ghost bar beneath the live task. Where the live bar extends past it, that gap is your variance:',
    figure: `<svg viewBox="0 0 620 210" width="100%" role="img" aria-label="Diagram showing baseline bars beneath actual task bars, with the difference marked as schedule variance">
      ${AX(0, 34, 470, 5, ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'])}
      ${BAR(0, 34, 180, '#6c4cf1', '')}
      <rect x="0" y="50" width="180" height="6" rx="3" fill="#94a3b8" opacity="0.75"/>
      <text x="196" y="46" font-size="11.5" fill="currentColor" font-family="system-ui,sans-serif">Design — on plan (0d)</text>

      ${BAR(96, 76, 190, '#ea580c', '')}
      <rect x="96" y="92" width="120" height="6" rx="3" fill="#94a3b8" opacity="0.75"/>
      <line x1="216" y1="95" x2="286" y2="95" stroke="#dc2626" stroke-width="1.4" stroke-dasharray="3 3"/>
      <text x="300" y="88" font-size="11.5" fill="currentColor" font-family="system-ui,sans-serif">Build — <tspan fill="#dc2626" font-weight="700">+7d late</tspan></text>

      ${BAR(286, 118, 96, '#0d9488', '')}
      <rect x="310" y="134" width="96" height="6" rx="3" fill="#94a3b8" opacity="0.75"/>
      <text x="396" y="130" font-size="11.5" fill="currentColor" font-family="system-ui,sans-serif">Test — <tspan fill="#157f4a" font-weight="700">2d early</tspan></text>

      <rect x="0" y="168" width="14" height="8" rx="3" fill="#6c4cf1"/>
      <text x="22" y="176" font-size="11" fill="#94a3b8" font-family="system-ui,sans-serif">actual</text>
      <rect x="80" y="170" width="14" height="5" rx="2.5" fill="#94a3b8" opacity="0.75"/>
      <text x="102" y="176" font-size="11" fill="#94a3b8" font-family="system-ui,sans-serif">baseline</text>
    </svg>`,
    sections: [
      ['What a baseline actually is', `<p>A baseline is a frozen copy of your schedule taken when you agreed it was right — typically at approval. It stores each task's planned start, finish and progress, then stops changing.</p>
        <p>That last part is the point. Edit the plan in place without a baseline and the schedule silently rewrites history, so every week looks on track. Dates drift a day at a time, and a plan that absorbed thirty single-day edits looks exactly like one that never moved. The baseline makes those edits add up.</p>`],

      ['When to set it — and when not to', `<p>Set the baseline <strong>after</strong> the plan is agreed and <strong>before</strong> work starts. One captured mid-execution bakes in slippage that already happened and understates variance from then on.</p>
        <p>Do not baseline a plan you know is wrong just to have one — a fictional schedule gives confident, precise, meaningless numbers. Fix placeholder dates first.</p>`],

      ['A worked example: one project, three status cycles', `<p>A client portal relaunch, approved 27 February 2026 and baselined Monday 2 March before work starts. Five rows, finish-to-start, all critical:</p>
        <div class="worked">
          <p><strong>Baseline, set 2 March 2026</strong></p>
          <ul>
            <li>Discovery — 2 Mar to 13 Mar (10 working days)</li>
            <li>Design — 16 Mar to 3 Apr (15 days)</li>
            <li>Build — 6 Apr to 15 May (30 days)</li>
            <li>Test — 18 May to 29 May (10 days)</li>
            <li>Go-live — 1 Jun (milestone)</li>
          </ul>

          <p><strong>Status cycle 1 — Friday 20 March</strong></p>
          <p>Two stakeholder interviews slipped, so Discovery finished 18 March instead of 13 March: <strong>finish variance +3 days</strong>. Design started 19 March — <strong>start variance +3 days</strong> — and with its estimate unchanged its forecast finish moves to 8 April, also +3. Every downstream task carries the same +3; go-live reads 4 June.</p>
          <p>Read that correctly: a <em>start</em> problem, not an estimating one.</p>

          <p><strong>Status cycle 2 — Friday 10 April</strong></p>
          <p>Design finished 8 April as forecast: finish variance +3, duration variance 0. Build started 9 April, start variance +3. But the team lost a developer and Build is re-estimated from 30 days to 36, moving its finish from 15 May to 28 May: <strong>finish variance +9 days</strong> — <strong>3 inherited</strong>, <strong>6 of duration variance</strong>, the genuinely new bad news.</p>
          <p>That split is why start and finish are tracked separately. "Build is 9 days late" invites the wrong conversation; "Build inherited 3 and grew by 6" points at a staffing decision that can still be acted on.</p>

          <p><strong>Status cycle 3 — Friday 1 May</strong></p>
          <p>Build is 55% complete against 65% planned, so the 36-day estimate is itself optimistic. Rather than let go-live drift again, the team crashes Test: two extra testers cut it from 10 days to 6. Test now shows <strong>duration variance −4 days</strong> and <strong>finish variance +5 days</strong>; go-live lands 8 June.</p>
          <p>Note what that negative duration variance does <em>not</em> mean. Nothing got faster — four days were bought with two people's time, and a column measuring only days cannot show that.</p>
        </div>
        <p>The honest summary: five days late at go-live — three from a Discovery overrun, six from an April staffing loss, four bought back by adding testers.</p>`],

      ['Four variances, and what each one hides', `<p>"Variance" is not one number. Four are worth tracking, each blind to something the others catch.</p>
        <table>
          <thead>
            <tr><th>Variance</th><th>What it is</th><th>What only it tells you</th><th>Where it misleads</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Start variance</strong></td>
              <td>Actual minus baseline start.</td>
              <td>Whether the delay was inherited — a late start means something upstream, or a resource who was not free.</td>
              <td>Says nothing about the finish. A task can start 5 days late and still hit its baseline finish by burning people.</td>
            </tr>
            <tr>
              <td><strong>Finish variance</strong></td>
              <td>Actual or forecast minus baseline finish.</td>
              <td>The impact downstream — the number that propagates.</td>
              <td>Bundles inherited with new delay. Build's +9 days was 3 inherited and 6 new — two problems, one number.</td>
            </tr>
            <tr>
              <td><strong>Duration variance</strong></td>
              <td>Actual duration minus baseline duration.</td>
              <td>Whether the estimate was wrong — finish variance with the inherited part removed.</td>
              <td>Goes negative when a task is crashed, reading as ahead. Test's −4 days cost two extra people.</td>
            </tr>
            <tr>
              <td><strong>Work / cost variance</strong></td>
              <td>Effort or spend consumed versus budgeted.</td>
              <td>What the recovery cost — the only one that catches crashing.</td>
              <td>Requires recorded actuals. Without entered spend it is not small — it does not exist.</td>
            </tr>
          </tbody>
        </table>
        <p>Duration variance is the one most teams skip and the one that changes behaviour: the only schedule measure separating "we were late" from "we were wrong".</p>
        <!--FIG:baseline|Ghost bars carry the baseline; the gap to the live bar is the variance.-->`],

      ['Variance on the critical path is the only variance that matters much', `<p>A five-day slip on a task with fifteen days of float costs nothing. A one-day slip on the critical path moves the end date.</p>
        <p>Sort by variance, then check which of those are critical. That short list is your actual status report. Reporting slipped-task count without reference to float is how projects manage to be "80% on track" and three weeks late at once. Watch the reverse too: a task with +12 days of variance and 14 of float is fine today and critical tomorrow.</p>`],

      ['Rebaselining: approved change, or erasing the evidence', `<p>This is the most consequential decision you will make about a baseline, and almost never a technical one. Rebaselining resets the comparison: every variance goes to zero and the original promise stops being visible. Three situations make it the right call:</p>
        <ul>
          <li><strong>An approved scope change.</strong> Someone with authority added or removed work, in writing. Measuring against a plan that no longer describes the project gives variance that is correct and useless.</li>
          <li><strong>A formal replan.</strong> The numbers have stopped guiding decisions — every task reads +30 days and nobody can tell which are worsening.</li>
          <li><strong>A restart after a pause.</strong> The old dates measure the gap, not the work.</li>
        </ul>
        <p>Every other reason is the same one in different clothes: the variance looks bad and the report is due. Rebaselining in the week before a steering group is the tell. Resetting our example on 1 May would have made go-live read 0 days late — while still being 8 June.</p>
        <p>The test is simple: if the rebaseline is legitimate you can name the decision, the date and the approver. If you cannot, you are deleting the evidence that anything went wrong.</p>
        <p>When you do rebaseline, keep the old one — save the plan to a file first, since the file carries the baseline with it. The gap between baseline 1 and baseline 3 is often the most honest description of a project that exists, and exactly what overwriting destroys.</p>`],

      ['Where earned value fits — and what our S-curve honestly reports', `<p>Variance in days answers "how late". Earned value answers "how much work did we bank for the time and money spent". It depends on the baseline: without one, planned value has nothing to follow. Our S-curve is deliberate about its limits — know them before quoting it:</p>
        <ul>
          <li><strong>Planned value follows the baseline if you have one.</strong> Without one, the plan is just your current dates, so schedule variance reads zero however far things have moved — and the dialog says so rather than letting a flattering zero stand.</li>
          <li><strong>Actual cost is never inferred from progress.</strong> It comes only from spend you enter per task. The tempting shortcut — assume a task 40% done has used 40% of its budget — makes CPI exactly 1.00 for every project ever run. Without actuals, CPI, cost variance and forecast at completion report as nothing.</li>
          <li><strong>No costs is the normal case.</strong> Tasks are then weighted by working-day duration, giving a pure progress S-curve — the same shape, read in percent rather than currency.</li>
          <li><strong>The earned curve for past dates is reconstructed.</strong> We store progress as it is today, not a history of it, so the earlier curve assumes progress accrued evenly across elapsed working days. Exact at the status date, approximate behind it, and labelled as such.</li>
        </ul>
        <!--FIG:evmquad|Schedule and cost variance are independent axes: late and under budget is a real place to be.-->`],

      ['Doing it in gantts.app', `<p>The whole loop takes about a minute. Using the portal relaunch as the example:</p>
        <ol>
          <li>Agree the plan first — dates, dependencies and durations should be what you want measured.</li>
          <li>Click <strong>◳ Baseline</strong> in the toolbar. With none saved, the menu offers one action: <strong>◳ Set baseline from current plan</strong>. You will see "Baseline set — slippage now tracked against this plan".</li>

          <li>Ghost bars now sit under each task bar. Reopening the menu shows the capture date and a <strong>Show baseline on chart</strong> checkbox to hide them.</li>
          <li>Work the plan. Each cycle, drag bars or edit dates to reflect reality — 18 March for Discovery's finish, 8 April for Design's.</li>
          <li>Open <strong>◳ Baseline</strong> again and choose <strong>▦ Show variance columns</strong>, which adds <strong>Base start</strong>, <strong>Base end</strong>, <strong>Start var</strong> and <strong>Finish var</strong> to the grid. Late reads red, early green.</li>
          <li>Scan Finish var, then cross-check the critical path to see which slips move the end date. Duration variance is the gap between baseline and current in the Duration column.</li>
          <li>For progress, run <strong>S-curve — planned vs actual progress</strong> from the command palette. It states whether planned value follows your baseline or just your current dates.</li>
          <li>Before any rebaseline, save a copy of the file. Then use <strong>⟳ Re-baseline to current plan</strong>; <strong>✕ Clear baseline</strong> removes it. Both undoable.</li>
        </ol>`],
    ],
    callout: 'The most common baseline mistake is not a technical one. Teams set a baseline, watch variance grow uncomfortable, and quietly stop looking at it. A baseline nobody reads is worse than none: it creates the appearance of tracking without the substance. Put variance in the weekly review or do not bother setting one.',
    faq: [
      ['What is a baseline in a Gantt chart?', 'A frozen copy of the approved schedule — each task\'s planned start, finish and progress — kept unchanged so you can measure how far the live plan has drifted.'],
      ['What does schedule variance mean?', 'The difference in days between a task\'s baseline date and its current date. Positive is later than planned, negative earlier, zero on plan.'],
      ['When should I set a baseline?', 'After the plan is approved and before work begins. Baselining mid-execution hides slippage that already occurred.'],
      ['What is the difference between start, finish and duration variance?', 'Start variance shows whether a delay was inherited from upstream. Finish variance shows the impact downstream. Duration variance strips the inherited part out, showing whether your estimate was wrong.'],
      ['Should I re-baseline when a project slips?', 'Only for an approved scope change, a formal replan, or a restart after a pause. If you cannot name the decision, the date and the approver, you are deleting the record of what was committed. Save a copy of the plan first either way.'],
      ['How do I set a baseline in gantts.app?', 'Use the ◳ Baseline menu and choose "Set baseline from current plan". Ghost bars appear under each task, and "Show variance columns" adds Base start, Base end, Start var and Finish var.'],
    ],
    related: [['critical-path-method', 'The critical path method explained'], ['gantt-chart-dependencies', 'Dependency types: FS, SS, FF, SF'], ['what-is-a-gantt-chart', 'What is a Gantt chart?']],
    tpl: ['project-management', 'construction'],
  },

};

module.exports = { S };
