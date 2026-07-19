/* ============================================================
   resources.js — who is doing what, and when they are over-booked.

   WHY THIS EXISTS

   A Gantt chart answers "when does this happen?" but not "can Priya
   actually do all of this?". Assign four overlapping tasks to one
   person and the chart looks perfectly healthy while the plan is
   impossible. Spotting that is the single most common reason people
   graduate off a chart-drawing tool onto something expensive:
   TeamGantt puts workload on its Business tier and Instagantt on Teams.

   It is not expensive to compute. This is a sweep line over assignment
   start/end events — O(A log A) for A assignments, single-digit
   milliseconds for any realistic project — so it runs on every render
   rather than behind a "calculate" button.

   MODEL

   Each task may carry `assignee` (a name) and `units` (percent of that
   person's time, default 100). A person is over-allocated on any
   working day where their assigned units exceed capacity (default
   100%). Group rows are excluded: they are rollups of their children,
   so counting them would double-count the work. Milestones take no
   time and are excluded too.

   Non-working days are skipped when a calendar is active — nobody is
   over-booked on a Sunday they were never going to work.
   ============================================================ */
(function () {
  const DEFAULT_UNITS = 100;
  const DEFAULT_CAPACITY = 100;

  const Resources = {
    DEFAULT_UNITS,
    DEFAULT_CAPACITY,

    /** Capacity for a person, in percent. Per-project overrides allowed. */
    capacityOf(name, project) {
      const caps = (project && project.settings && project.settings.capacities) || {};
      const v = caps[name];
      return typeof v === 'number' && v > 0 ? v : DEFAULT_CAPACITY;
    },

    /** Tasks that actually consume someone's time. */
    assignments(tasks) {
      return (tasks || []).filter(t =>
        t && t.assignee && String(t.assignee).trim() &&
        t.type !== 'group' && t.type !== 'milestone' &&
        t.start && t.end);
    },

    /* Per-person, per-day allocation.

       Returns { names, byName, days, peak } where byName[name] is
       { days: Map(iso -> percent), peak, over: [iso], capacity, taskCount }.

       `cal` is optional; when active, non-working days are skipped. */
    compute(tasks, project, cal) {
      const list = this.assignments(tasks);
      const byName = Object.create(null);
      const calOn = !!(window.Cal && cal && Cal.active(cal));

      for (const t of list) {
        const name = String(t.assignee).trim();
        const units = typeof t.units === 'number' && t.units > 0 ? t.units : DEFAULT_UNITS;
        let rec = byName[name];
        if (!rec) {
          rec = byName[name] = {
            days: new Map(), peak: 0, over: [], taskCount: 0,
            capacity: this.capacityOf(name, project), totalUnitDays: 0,
          };
        }
        rec.taskCount++;

        // Walk the task's span day by day. Bounded by the task length,
        // and guarded so a corrupt end-before-start cannot spin.
        let d = t.start;
        let guard = 0;
        while (U.parse(d) <= U.parse(t.end) && guard++ < 4000) {
          if (!calOn || Cal.isWorking(d, cal)) {
            const cur = (rec.days.get(d) || 0) + units;
            rec.days.set(d, cur);
            rec.totalUnitDays += units;
            if (cur > rec.peak) rec.peak = cur;
          }
          d = U.addDays(d, 1);
        }
      }

      // Over-allocated days, in order, once every task has contributed.
      const names = Object.keys(byName).sort((a, b) => a.localeCompare(b));
      for (const n of names) {
        const rec = byName[n];
        rec.over = [...rec.days.entries()]
          .filter(([, v]) => v > rec.capacity)
          .map(([iso]) => iso)
          .sort();
      }

      return {
        names,
        byName,
        anyOver: names.some(n => byName[n].over.length > 0),
        totalOverDays: names.reduce((s, n) => s + byName[n].over.length, 0),
      };
    },

    /** Allocation for one person on one day, as a percentage. */
    on(load, name, iso) {
      const rec = load.byName[name];
      return rec ? (rec.days.get(iso) || 0) : 0;
    },

    /* Which tasks collide for a person on a given day. Powers the
       tooltip — "over-allocated" is useless without naming the culprits. */
    tasksOn(tasks, name, iso) {
      return this.assignments(tasks).filter(t =>
        String(t.assignee).trim() === name &&
        U.parse(t.start) <= U.parse(iso) && U.parse(iso) <= U.parse(t.end));
    },

    /** One-line summary for the toolbar/status area. */
    summary(load) {
      if (!load.names.length) return 'No one is assigned yet.';
      if (!load.anyOver) return `${load.names.length} assigned · no over-allocation`;
      const worst = load.names
        .map(n => ({ n, over: load.byName[n].over.length, peak: load.byName[n].peak }))
        .filter(x => x.over)
        .sort((a, b) => b.over - a.over);
      const w = worst[0];
      return `${worst.length} of ${load.names.length} over-allocated · worst: ${w.n} at ${w.peak}% on ${w.over} day(s)`;
    },
  };

  window.Resources = Resources;
})();
