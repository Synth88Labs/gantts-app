/* ============================================================
   evm.js — S-curve and earned value. Pure arithmetic, no DOM.

   WHAT THIS COMPUTES

   An S-curve is cumulative planned work plotted over time. It is
   S-shaped because projects start slow, accelerate, then taper. Drawn
   against actual progress it answers the only question a status meeting
   really asks: are we ahead or behind, and by how much?

   Earned value adds the money dimension:

     PV / BCWS  planned value    what we said we would have done by now
     EV / BCWP  earned value     what we have actually finished, valued
                                 at its budget
     AC / ACWP  actual cost      what it actually cost to get there

     SV = EV - PV   schedule variance   (negative = behind)
     CV = EV - AC   cost variance       (negative = over budget)
     SPI = EV / PV  schedule index      (< 1 = behind)
     CPI = EV / AC  cost index          (< 1 = over budget)
     EAC = BAC / CPI  forecast at completion

   THREE HONESTY CONSTRAINTS, EACH LOAD-BEARING

   1. ACTUAL COST IS NOT INVENTED.

      The obvious shortcut is to derive AC from progress — assume a task
      that is 40% done has consumed 40% of its budget. Do that and
      AC == EV identically, so CPI is exactly 1.00 and CV exactly 0 for
      every project that has ever existed. The number would look
      authoritative, respond to nothing, and tell a user their runaway
      project is perfectly on budget.

      So AC comes only from `task.spent`, which the user enters. If
      nobody has entered any, `hasActuals` is false and every
      cost-derived metric is returned as null. A caller must then omit
      them. A missing number is honest; a fabricated 1.00 is not.

   2. THE EARNED CURVE IS RECONSTRUCTED, AND SAYS SO.

      We know each task's progress *today*. We do not store progress
      history, so a truthful earned curve for past dates is not
      recoverable — we have one sample, not a series.

      Rather than refuse to draw it, we reconstruct it under a stated
      assumption: each task's progress accrued linearly across its
      elapsed working days. That is good enough to see the shape of a
      gap, and it is exact at the status date, which is where the
      reported metrics are read. Callers surface the assumption in the
      UI; `earnedIsReconstructed` is true so they cannot forget.

   3. NO COSTS ENTERED IS THE NORMAL CASE, NOT AN ERROR.

      Most plans carry no budget at all. Weighting by cost would then
      make every task worth zero and the curve flat. So when no task has
      a cost we weight by working-day duration instead and the result is
      a pure progress S-curve — the same shape, read in percent rather
      than currency. `basis` says which happened. This is why the
      feature works on a plan the user made sixty seconds ago.

   The unit of the curve is therefore currency when basis === 'cost' and
   working-days when basis === 'duration'. Callers format accordingly.
   ============================================================ */
(function () {
  /* Spread a task's budget evenly across its working days. Real work
     is not this uniform, but front/back-loading a curve requires a
     distribution the user never supplied — the arithmetic would be
     invented, and unlike the earned curve there is nothing to anchor
     it to. Even spreading is the assumption that adds no information. */
  function workingDays(start, end, cal) {
    const out = [];
    if (!start || !end) return out;
    if (U.parse(end) < U.parse(start)) return out;
    let d = start;
    for (let guard = 0; guard < 4000 && U.parse(d) <= U.parse(end); guard++) {
      if (!cal || Cal.isWorking(d, cal)) out.push(d);
      d = U.addDays(d, 1);
    }
    /* A task wholly inside a shutdown has no working days but still has
       budget. Charge it to its start date rather than dropping it —
       losing it would make the curve stop short of BAC and imply work
       that never gets done. */
    return out.length ? out : [start];
  }

  const EVM = {
    /* Leaf tasks only. Group rows roll up their children's cost
       (model.js), so counting both would double every parent's budget
       and inflate BAC by the depth of the tree. Milestones are
       zero-duration and carry no work. */
    leaves(tasks) {
      const hasKids = new Set();
      tasks.forEach(t => { if (t.parentId) hasKids.add(t.parentId); });
      return tasks.filter(t => t.type !== 'group' && !hasKids.has(t.id));
    },

    /** The full analysis. `asOf` defaults to today. */
    compute(project, asOf) {
      const tasks = (project && project.tasks) || [];
      const cal = (typeof Cal !== 'undefined' && Cal.active(Cal.of(project))) ? Cal.of(project) : null;
      const leaves = EVM.leaves(tasks);
      const status = asOf || U.today();

      const costed = leaves.filter(t => Number(t.cost) > 0);
      const basis = costed.length ? 'cost' : 'duration';
      const hasActuals = leaves.some(t => Number(t.spent) > 0);

      /* Baseline is the correct source for planned value — that is what
         a baseline is for. Without one, current dates are the only
         plan there is, which makes SV read 0 until the user sets one.
         `plannedFrom` tells the caller so it can say as much. */
      const base = (project && project.baseline && project.baseline.tasks) || null;
      const plannedFrom = base ? 'baseline' : 'current';

      const weightOf = (t) => {
        if (basis === 'cost') return Number(t.cost) || 0;
        return Math.max(1, cal ? Cal.duration(t.start, t.end, cal) : U.duration(t.start, t.end));
      };

      /* ---- daily buckets ---- */
      const pvDay = Object.create(null);   // planned value per day
      const evDay = Object.create(null);   // earned value per day (reconstructed)
      const acDay = Object.create(null);   // actual cost per day
      let bac = 0, evNow = 0, acNow = 0;

      for (const t of leaves) {
        const w = weightOf(t);
        bac += w;

        // --- planned: spread w across the BASELINE window ---
        const b = base && base[t.id];
        const pStart = (b && b.start) || t.start;
        const pEnd = (b && b.end) || t.end;
        const pDays = workingDays(pStart, pEnd, cal);
        const perDay = w / pDays.length;
        for (const d of pDays) pvDay[d] = (pvDay[d] || 0) + perDay;

        // --- earned: w × progress, spread across elapsed actual days ---
        const pct = Math.max(0, Math.min(100, Number(t.progress) || 0)) / 100;
        const earned = w * pct;
        evNow += earned;

        if (earned > 0) {
          const aDays = workingDays(t.start, t.end, cal);
          /* Only the elapsed portion. A task marked 50% done whose bar
             sits entirely in the future should raise the curve today,
             not on some future date — otherwise the curve would climb
             after the status line, which reads as work already banked. */
          const elapsed = aDays.filter(d => U.parse(d) <= U.parse(status));
          const spread = elapsed.length ? elapsed : [U.min(t.start, status)];
          const per = earned / spread.length;
          for (const d of spread) evDay[d] = (evDay[d] || 0) + per;
        }

        // --- actual cost: only what was entered ---
        const spent = Number(t.spent) || 0;
        if (spent > 0) {
          acNow += spent;
          const aDays = workingDays(t.start, t.end, cal)
            .filter(d => U.parse(d) <= U.parse(status));
          const spread = aDays.length ? aDays : [U.min(t.start, status)];
          const per = spent / spread.length;
          for (const d of spread) acDay[d] = (acDay[d] || 0) + per;
        }
      }

      /* ---- the date axis ---- */
      const all = Object.keys(pvDay).concat(Object.keys(evDay), Object.keys(acDay));
      if (!all.length) {
        return {
          dates: [], planned: [], earned: [], actual: null,
          basis, plannedFrom, hasActuals, earnedIsReconstructed: true,
          asOf: status, bac: 0, empty: true, metrics: null,
        };
      }
      all.sort();
      const first = all[0], last = all[all.length - 1];

      const dates = [];
      for (let d = first, guard = 0; guard < 4000 && U.parse(d) <= U.parse(last); guard++) {
        if (!cal || Cal.isWorking(d, cal)) dates.push(d);
        d = U.addDays(d, 1);
      }

      /* ---- cumulative series ---- */
      const planned = [], earned = [], actual = [];
      let cp = 0, ce = 0, ca = 0;
      for (const d of dates) {
        cp += pvDay[d] || 0;
        ce += evDay[d] || 0;
        ca += acDay[d] || 0;
        planned.push(cp);
        /* The earned and actual curves stop at the status date. Drawing
           them further would assert knowledge of the future. */
        const past = U.parse(d) <= U.parse(status);
        earned.push(past ? ce : null);
        actual.push(past ? ca : null);
      }

      /* ---- metrics at the status date ---- */
      let pvNow = 0;
      for (const d of Object.keys(pvDay)) {
        if (U.parse(d) <= U.parse(status)) pvNow += pvDay[d];
      }

      const sv = evNow - pvNow;
      const spi = pvNow > 0 ? evNow / pvNow : null;
      const cv = hasActuals ? evNow - acNow : null;
      const cpi = hasActuals && acNow > 0 ? evNow / acNow : null;

      return {
        dates, planned, earned,
        actual: hasActuals ? actual : null,
        basis, plannedFrom, hasActuals,
        earnedIsReconstructed: true,
        asOf: status,
        bac,
        empty: false,
        metrics: {
          bac,
          pv: pvNow,
          ev: evNow,
          ac: hasActuals ? acNow : null,
          sv, spi,
          cv, cpi,
          /* EAC assumes cost performance to date continues — the
             standard CPI-based forecast. Null without actuals, because
             every input to it would be made up. */
          eac: cpi ? bac / cpi : null,
          etc: cpi ? (bac / cpi) - acNow : null,
          vac: cpi ? bac - (bac / cpi) : null,
          pctPlanned: bac > 0 ? (pvNow / bac) * 100 : 0,
          pctComplete: bac > 0 ? (evNow / bac) * 100 : 0,
        },
      };
    },

    /** Plain-language verdict. Callers may translate the `key`. */
    verdict(m) {
      if (!m || m.spi == null) return { key: 'nodata', ahead: null };
      const pct = (m.spi - 1) * 100;
      if (Math.abs(pct) < 2) return { key: 'ontrack', ahead: 0, pct };
      return { key: pct > 0 ? 'ahead' : 'behind', ahead: pct > 0, pct };
    },
  };

  if (typeof window !== 'undefined') window.EVM = EVM;
  if (typeof module !== 'undefined' && module.exports) module.exports = EVM;
})();
