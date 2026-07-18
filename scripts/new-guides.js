/* ============================================================
   new-guides.js — content model for generated guide posts.

   Targets the weakest informational SERPs found in the research —
   queries currently answered by LinkedIn "advice" pages, vendor
   help-docs, forum threads and archived PDFs.

   Every guide carries at least one ORIGINAL inline SVG figure. That is
   deliberate: not one page currently ranking for these terms has a
   real diagram, and these concepts are inherently visual. The SVGs use
   currentColor for text and neutral strokes so they work in both light
   and dark themes.
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
const ARROW = (x1, y1, x2, y2, color = '#6c4cf1') =>
  `<path d="M ${x1} ${y1} C ${x1 + 14} ${y1}, ${x2 - 14} ${y2}, ${x2} ${y2}" fill="none" stroke="${color}" stroke-width="1.8"/>` +
  `<polygon points="${x2},${y2} ${x2 - 6},${y2 - 4} ${x2 - 6},${y2 + 4}" fill="${color}"/>`;

const G = {

  // ---------------------------------------------------------------
  'gantt-chart-dependencies': {
    h1: 'Gantt Chart Dependencies Explained: FS, SS, FF and SF',
    metaTitle: 'Gantt Dependencies: FS, SS, FF, SF',
    metaDesc: 'The four Gantt chart dependency types explained with diagrams: finish-to-start, start-to-start, finish-to-finish and start-to-finish, plus lead and lag.',
    date: '2026-07-18',
    lead: 'Four relationship types cover every dependency you can draw on a Gantt chart. One of them does about ninety per cent of the work, and the other three exist for the cases it handles badly. Here is what each one means, with a diagram for each.',
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
      ['Finish-to-Start (FS) — the one you will use', `<p>Task B cannot start until task A finishes. Pour the foundation, then frame the walls. Write the code, then test it.</p>
        <p>FS is the default in every scheduling tool, and it covers the large majority of real relationships. If you are unsure which type to use, it is almost certainly this one — reaching for an exotic type is more often a sign the tasks are wrongly broken down than a sign you need SS or FF.</p>`],
      ['Start-to-Start (SS) — work that runs together', `<p>Task B cannot start until task A starts. The two then run in parallel.</p>
        <p>This is for genuinely concurrent work with a shared trigger: once excavation begins, the site supervision begins; once data collection starts, the data cleaning can start on what has arrived. Use it when B has no reason to wait for A to finish, only for it to begin.</p>`],
      ['Finish-to-Finish (FF) — work that must land together', `<p>Task B cannot finish until task A finishes.</p>
        <p>Typical for support and verification activities: testing cannot be declared complete until development is complete; documentation closes when the feature closes. B may start whenever, but it cannot be signed off ahead of A.</p>`],
      ['Start-to-Finish (SF) — the rare one', `<p>Task B cannot finish until task A starts. It reads backwards, and most planners go a whole career without needing it.</p>
        <p>The classic case is a handover: the old system stays running until the new system starts. The legacy shift cannot end until the replacement shift begins. If you find yourself reaching for SF, check first whether reordering the tasks expresses the same thing with FS.</p>`],
      ['Lead and lag — the modifiers', `<p>A <strong>lag</strong> adds waiting time to a link. "FS + 3 days" means B starts three days after A finishes — concrete curing, paint drying, a client review window.</p>
        <p>A <strong>lead</strong> is negative lag: "FS − 2 days" lets B start two days before A finishes, overlapping the tail. Leads are useful, but they hide risk. An overlap you have not thought about is a rework queue waiting to happen.</p>
        <p>In MS Project notation you will see these written as <code>3FS+2d</code> — task 3, finish-to-start, two days lag. gantts.app accepts that notation directly in the Runs after column.</p>`],
      ['Why the type matters when dates move', `<p>Dependency types are not decoration. They determine what happens when something slips.</p>
        <p>If A slips by a week and B is linked FS, B moves a week. If B is linked SS, B does not move at all unless A's <em>start</em> moved. Choosing the wrong type produces a schedule that looks fine and reacts wrongly — the worst combination, because you only discover it when the plan is already under pressure.</p>`],
    ],
    callout: 'A dependency should describe a real constraint, not a preference. "We would rather do B after A" is a sequencing choice and belongs in the ordering. "B physically cannot start until A is done" is a dependency. Charts full of the former become impossible to re-plan, because every date is pinned by something that was never actually mandatory.',
    faq: [
      ['What are the 4 types of dependencies in a Gantt chart?', 'Finish-to-Start (FS), Start-to-Start (SS), Finish-to-Finish (FF) and Start-to-Finish (SF). FS is the default and covers the large majority of real relationships.'],
      ['What is the difference between lead and lag?', 'Lag is waiting time added to a dependency — FS+3d means the successor starts three days after the predecessor finishes. Lead is negative lag, letting the successor overlap the predecessor by starting early.'],
      ['Which dependency type should I use by default?', 'Finish-to-Start. If another type seems necessary, first check whether the tasks are broken down correctly — an unusual dependency type is often a symptom of a task that should be split.'],
      ['How do I add dependencies in gantts.app?', 'Drag from the dot at the edge of a task bar onto another bar, or type MS Project notation such as 3FS+2d in the Runs after column. Click any link to change its type or lag.'],
    ],
    related: [['critical-path-method', 'How the critical path is calculated'], ['what-is-a-gantt-chart', 'What is a Gantt chart?'], ['gantt-baseline-variance', 'Tracking slippage against a baseline']],
    tpl: ['project-management', 'construction'],
  },

  // ---------------------------------------------------------------
  'gantt-baseline-variance': {
    h1: 'Baseline vs Actual: Tracking Schedule Variance on a Gantt Chart',
    metaTitle: 'Gantt Baseline vs Actual: Schedule Variance',
    metaDesc: 'How to set a Gantt baseline and read schedule variance: what it is, when to set it, reading start and finish variance, and when to re-baseline.',
    date: '2026-07-18',
    lead: 'A Gantt chart shows where your project is. A baseline shows where it was supposed to be. Without one you can report progress but not slippage — and slippage is the thing anyone funding the work actually wants to know.',
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
      ['What a baseline actually is', `<p>A baseline is a frozen copy of your schedule taken at a moment you agreed it was right — typically when the plan was approved. It stores each task's planned start, finish and progress, and then stops changing.</p>
        <p>That last part is the point. Once tasks start moving, the original plan is the only thing that can tell you how far you have drifted. If you edit the plan in place without a baseline, the schedule silently rewrites history and every week looks on track.</p>`],
      ['When to set it — and when not to', `<p>Set the baseline <strong>after</strong> the plan is agreed and <strong>before</strong> work starts. A baseline captured mid-execution bakes in whatever slippage has already happened and understates the real variance from then on.</p>
        <p>Do not baseline a plan you know is wrong just to have one. A baseline against a fictional schedule produces confident, precise, meaningless variance numbers.</p>`],
      ['Reading start and finish variance', `<p>Variance is simply the difference in days between the baseline date and the current date, per task.</p>
        <ul>
          <li><strong>Positive (+4d)</strong> — later than planned. The task has slipped.</li>
          <li><strong>Negative (−2d)</strong> — earlier than planned. Ahead, or the estimate was pessimistic.</li>
          <li><strong>Zero</strong> — on plan.</li>
        </ul>
        <p>Start variance and finish variance tell different stories. A task that started late but finished on time absorbed the delay — worth knowing, because it usually means someone burned float or added people. A task that started on time and finished late took longer than estimated, which is an estimating problem, not a sequencing one.</p>`],
      ['Variance on the critical path is the only variance that matters much', `<p>A five-day slip on a task with fifteen days of float costs nothing. A one-day slip on the critical path moves the end date.</p>
        <p>Read the two together: sort by variance, then check which of those tasks are critical. That short list is your actual status report. Reporting total slipped-task count without reference to float is how projects manage to be "80% on track" and three weeks late simultaneously.</p>`],
      ['When to re-baseline', `<p>Re-baselining resets the comparison, so it should be rare and deliberate. Legitimate reasons: approved scope change, a formal replan, or a project restart after a pause.</p>
        <p>Illegitimate reason: the variance looks bad. Re-baselining to make a report green destroys the only record of what was originally promised, and it is usually obvious to whoever reads the next one.</p>
        <p>If you do re-baseline, keep the original. The gap between baseline 1 and baseline 3 is often the most honest description of a project that exists.</p>`],
      ['Doing it in gantts.app', `<p>Open the <strong>◳ Baseline</strong> menu and choose <em>Set baseline from current plan</em>. Ghost bars appear beneath each task, turning orange where a task has slipped past its baseline finish.</p>
        <p>"Show variance columns" then adds Base start, Base finish, Start var and Finish var to the grid — red for late, green for early. Setting and clearing a baseline is undoable, so you can experiment without consequence.</p>`],
    ],
    callout: 'The most common baseline mistake is not a technical one. Teams set a baseline, watch variance grow uncomfortable, and quietly stop looking at it. A baseline nobody reads is worse than none at all, because it creates the appearance of tracking without the substance. Put variance in the weekly review or do not bother setting one.',
    faq: [
      ['What is a baseline in a Gantt chart?', 'A frozen copy of the approved schedule — each task\'s planned start, finish and progress — kept unchanged so you can measure how far the live plan has drifted from it.'],
      ['What does schedule variance mean?', 'The difference in days between a task\'s baseline date and its current date. Positive means later than planned, negative means earlier, zero means on plan.'],
      ['When should I set a baseline?', 'After the plan is approved and before work begins. Baselining mid-execution hides slippage that has already occurred.'],
      ['Should I re-baseline when a project slips?', 'Only for an approved scope change or a formal replan. Re-baselining to make variance look better erases the record of what was originally committed.'],
      ['How do I set a baseline in gantts.app?', 'Use the ◳ Baseline menu and choose "Set baseline from current plan". Ghost bars appear under each task, and "Show variance columns" adds start and finish variance to the grid.'],
    ],
    related: [['critical-path-method', 'The critical path method explained'], ['gantt-chart-dependencies', 'Dependency types: FS, SS, FF, SF'], ['what-is-a-gantt-chart', 'What is a Gantt chart?']],
    tpl: ['project-management', 'construction'],
  },

  // ---------------------------------------------------------------
  'gantt-chart-mistakes': {
    h1: 'Nine Gantt Chart Mistakes (and How to Fix Them)',
    metaTitle: 'Nine Gantt Chart Mistakes (and Fixes)',
    metaDesc: 'The nine most common Gantt chart mistakes — over-detailing, missing dependencies, no float, stale updates — with the fix for each, shown before and after.',
    date: '2026-07-18',
    lead: 'Most bad Gantt charts fail the same nine ways. None of them are about the tool. Here is each mistake, why it causes trouble, and what to do instead.',
    figIntro: 'The single most common problem, before and after. The same project, planned twice:',
    figure: `<svg viewBox="0 0 620 250" width="100%" role="img" aria-label="Comparison of a cluttered over-detailed Gantt chart against a clean phase-level chart">
      <text x="0" y="12" font-size="12" font-weight="700" fill="#dc2626" font-family="system-ui,sans-serif">✗ Every task, no structure</text>
      ${[0,1,2,3,4,5,6,7].map(i=>`<rect x="${8+i*11}" y="${26+i*12}" width="${44+(i%3)*18}" height="7" rx="3" fill="#cbd5e1"/>`).join('')}
      <text x="0" y="146" font-size="10.5" fill="#94a3b8" font-family="system-ui,sans-serif">40+ rows, no phases, no milestones —</text>
      <text x="0" y="160" font-size="10.5" fill="#94a3b8" font-family="system-ui,sans-serif">unreadable and obsolete within a week.</text>

      <line x1="290" y1="6" x2="290" y2="200" stroke="#e2e8f0" stroke-width="1"/>

      <text x="320" y="12" font-size="12" font-weight="700" fill="#157f4a" font-family="system-ui,sans-serif">✓ Phases, milestones, dependencies</text>
      ${BAR(320, 26, 110, '#6c4cf1', '')}
      <text x="438" y="37" font-size="10.5" fill="currentColor" font-family="system-ui,sans-serif">Discovery</text>
      ${BAR(346, 52, 130, '#8b7bf5', '')}
      <text x="484" y="63" font-size="10.5" fill="currentColor" font-family="system-ui,sans-serif">Design</text>
      ${ARROW(430, 33, 346, 59)}
      <polygon points="480,74 488,82 480,90 472,82" fill="#10b981"/>
      <text x="496" y="86" font-size="10.5" fill="currentColor" font-family="system-ui,sans-serif">Sign-off</text>
      ${BAR(400, 100, 150, '#ea580c', '')}
      <text x="320" y="122" font-size="10.5" fill="currentColor" font-family="system-ui,sans-serif">Build</text>
      ${BAR(430, 126, 90, '#0d9488', '')}
      <text x="320" y="148" font-size="10.5" fill="currentColor" font-family="system-ui,sans-serif">Test</text>
      <text x="320" y="174" font-size="10.5" fill="#94a3b8" font-family="system-ui,sans-serif">10 rows. Readable across a room,</text>
      <text x="320" y="188" font-size="10.5" fill="#94a3b8" font-family="system-ui,sans-serif">and cheap enough to keep current.</text>
    </svg>`,
    sections: [
      ['1. Over-detailing', `<p>The most common failure by a distance. A chart with every sub-task on it is unreadable, and worse, unmaintainable — it goes stale within days because nobody will update sixty rows every week.</p>
        <p><strong>Fix:</strong> plan to the level you will actually track. If a task is shorter than your reporting cycle, it probably belongs inside another task, not on the chart. Roll detail into phases and keep the working list elsewhere.</p>`],
      ['2. No dependencies', `<p>A chart of parallel bars with no links is a picture, not a plan. When something slips, nothing moves, because nothing is connected to anything.</p>
        <p><strong>Fix:</strong> link the tasks that genuinely constrain each other. You do not need to link everything — just enough that a delay propagates the way it would in reality.</p>`],
      ['3. Treating estimates as commitments', `<p>Every bar on a Gantt chart looks equally certain. A three-day task you have done fifty times and a three-day task nobody has attempted look identical.</p>
        <p><strong>Fix:</strong> add float where uncertainty is real, and say so. A schedule that admits which parts are guesses is more trustworthy than one that presents everything as fact.</p>`],
      ['4. No float anywhere', `<p>A plan where every task starts the instant its predecessor ends has no capacity to absorb anything. The first small delay becomes a project delay.</p>
        <p><strong>Fix:</strong> put buffer where risk concentrates — before hard external deadlines, after tasks that depend on third parties, around anything weather- or approval-dependent.</p>`],
      ['5. Ignoring the critical path', `<p>If you do not know which tasks drive the end date, you cannot know which delays matter. Teams routinely expedite work with three weeks of float while the actual constraint slips quietly.</p>
        <p><strong>Fix:</strong> turn the critical path on and check it after every significant change. It moves more often than people expect.</p>`],
      ['6. No owners', `<p>Tasks without a named owner are everyone's job, which reliably means nobody's.</p>
        <p><strong>Fix:</strong> one name per task. Not a team, a person. A team can do the work; only a person can be asked about it.</p>`],
      ['7. Letting it go stale', `<p>A Gantt chart is a live document with an expiry date. Three weeks without an update and people stop trusting it; once they stop trusting it, they stop reading it, and it becomes decoration.</p>
        <p><strong>Fix:</strong> update on a fixed cadence — weekly for most projects, daily during a crunch — and keep it short enough that doing so takes minutes.</p>`],
      ['8. No milestones', `<p>A wall of bars gives a reader nothing to anchor on. Milestones are how someone who does not know your project finds the decision points.</p>
        <p><strong>Fix:</strong> mark approvals, deliveries, gates and go-live as zero-duration milestones. Four to eight across a project is usually right.</p>`],
      ['9. Using a Gantt chart for the wrong thing', `<p>Gantt charts are for work with sequence and dependencies. They are a poor fit for continuous flow, unplanned work, or a backlog that reprioritises weekly — a board handles those better.</p>
        <p><strong>Fix:</strong> use a Gantt chart when order and deadlines matter, and something else when they do not. Using both is normal: a board for the week, a Gantt chart for the quarter.</p>`],
    ],
    callout: 'Notice that eight of the nine are planning mistakes, not charting mistakes. Switching tools fixes none of them. The one genuinely tool-shaped problem — nobody updates it because updating is tedious — is worth solving, but it is the exception rather than the rule.',
    faq: [
      ['What is the most common Gantt chart mistake?', 'Over-detailing. Charts with every sub-task listed become unreadable and are abandoned within weeks because keeping them current costs more than they return.'],
      ['How many tasks should a Gantt chart have?', 'Few enough that you will actually maintain it. For most projects that is 15–40 rows at phase and task level; anything shorter than your reporting cycle usually belongs inside a task rather than on the chart.'],
      ['How often should a Gantt chart be updated?', 'Weekly for most projects, daily during an intense delivery period. The specific cadence matters less than it being fixed and short enough to sustain.'],
      ['Should every task have a dependency?', 'No. Link the relationships that genuinely constrain each other. Over-linking makes a schedule impossible to re-plan because every date is pinned by something that was never actually mandatory.'],
    ],
    related: [['gantt-chart-dependencies', 'The four dependency types explained'], ['gantt-baseline-variance', 'Tracking variance against a baseline'], ['how-to-make-a-gantt-chart', 'How to make a Gantt chart']],
    tpl: ['project-management', 'simple'],
  },

  // ---------------------------------------------------------------
  'milestones-vs-tasks': {
    h1: 'Milestones vs Tasks on a Gantt Chart',
    metaTitle: 'Milestones vs Tasks on a Gantt Chart',
    metaDesc: 'The difference between a milestone and a task on a Gantt chart, what the diamond, bar and arrow symbols mean, and how many milestones a project should have.',
    date: '2026-07-18',
    lead: 'A task takes time. A milestone marks a moment. That single distinction explains why one is drawn as a bar and the other as a diamond — and why mixing them up makes a schedule harder to read than it needs to be.',
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
      ['The difference in one line', `<p>A task consumes time and resources; it has a start, a finish and a duration. A milestone has no duration at all — it is a point marking that something has happened.</p>
        <p>That is why milestones render as diamonds. There is nothing to draw a bar across.</p>`],
      ['What milestones are actually for', `<p>Milestones exist for the reader, not the doer. They are how someone who does not live inside your project finds the moments that matter: approvals, deliveries, gates, go-live.</p>
        <p>They are also how you make a schedule enforceable. "Design approved" as a milestone with build tasks depending on it says something a task called "get approval" does not: nothing downstream proceeds until this happens.</p>`],
      ['How many should a project have?', `<p>Enough to tell the story, few enough that each one means something. Four to eight across a typical project is a reasonable range; a hundred milestones is just tasks wearing a different shape.</p>
        <p>A good test: could you describe the project's progress using only its milestones? If yes, you have the right set. If the list reads like a to-do list, you have too many.</p>`],
      ['Common mistakes', `<p><strong>Milestones with duration.</strong> If it takes three days, it is a task. Give it a bar and put a milestone at its end if the completion matters.</p>
        <p><strong>Milestones nobody owns.</strong> A gate with no owner does not get chased. Assign them like tasks.</p>
        <p><strong>Milestones with no dependencies.</strong> A milestone that nothing depends on is a note, not a gate. If work legitimately continues regardless, it may not need to be on the chart.</p>`],
      ['Summary bars and the hierarchy', `<p>The third symbol most people meet is the summary or phase bar — the bracketed bar that spans its child tasks. It is calculated, not entered: its dates come from the earliest start and latest finish beneath it.</p>
        <p>This is why editing a summary bar's dates directly is usually disabled or unhelpful. The way to move a phase is to move what it contains.</p>`],
    ],
    callout: 'If you take one habit from this: put a milestone at every point where someone outside the team has to do something — approve, deliver, inspect, sign. Those are the dependencies you control least and the delays you will be asked about most, and giving them a diamond makes them impossible to overlook.',
    faq: [
      ['What is the difference between a task and a milestone?', 'A task has duration — a start, a finish and work in between. A milestone has zero duration and marks a moment, such as an approval or a delivery. That is why tasks are bars and milestones are diamonds.'],
      ['What does the diamond mean on a Gantt chart?', 'A milestone: a zero-duration marker for a significant event such as a sign-off, delivery or go-live date.'],
      ['How many milestones should a project have?', 'Typically four to eight for a normal project. Enough that they tell the story of the project, few enough that each one carries meaning.'],
      ['What is a summary bar?', 'A bar representing a phase or group. Its dates are calculated from the earliest start and latest finish of the tasks beneath it, so it moves when its children move rather than being edited directly.'],
    ],
    related: [['what-is-a-gantt-chart', 'What is a Gantt chart?'], ['gantt-chart-dependencies', 'The four dependency types'], ['gantt-chart-mistakes', 'Nine common Gantt chart mistakes']],
    tpl: ['simple', 'project-management'],
  },

};

module.exports = { G, SLUGS: Object.keys(G) };
