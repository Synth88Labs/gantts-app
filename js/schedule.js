/* ============================================================
   schedule.js — Critical Path Method (CPM) computation
   Computes early/late start-finish, slack, and the critical set.
   Works on leaf tasks + milestones (groups are rollups).
   Exposes a global `Schedule`.
   ============================================================ */
(function () {
  const Schedule = {
    // returns { critical:Set(id), slack:{id:days}, deps:[{from,to,type,lag}] }
    compute() {
      const tasks = Model.tasks();
      // schedulable = leaves (tasks/milestones), not groups
      const nodes = tasks.filter(t => t.type !== 'group' && !Model.isParent(t.id));
      const byId = {}; nodes.forEach(n => byId[n.id] = n);

      // build edges among schedulable nodes only
      const edges = [];
      nodes.forEach(n => (n.deps || []).forEach(d => {
        if (byId[d.from]) edges.push({ from: d.from, to: n.id, type: d.type || 'FS', lag: d.lag || 0 });
      }));

      /* When a working calendar is active the whole CPM runs in
         WORKING-DAY ordinals rather than calendar days. That keeps the
         classic integer algorithm below completely unchanged — an
         offset of 5 means "5 working days", so weekends and holidays
         simply do not exist in this number space. Converting back at
         the end is what makes successors land on a Monday instead of a
         Sunday. */
      const cal = window.Cal ? Cal.of(Model.project) : null;
      const calOn = !!(cal && Cal.active(cal));

      const dur = n => Math.max(
        n.type === 'milestone' ? 0 : 1,
        calOn ? Cal.duration(n.start, n.end, cal) : U.duration(n.start, n.end)
      );

      // topological order
      const indeg = {}; nodes.forEach(n => indeg[n.id] = 0);
      edges.forEach(e => indeg[e.to]++);
      const queue = nodes.filter(n => indeg[n.id] === 0).map(n => n.id);
      const order = [];
      const outAdj = {}; nodes.forEach(n => outAdj[n.id] = []);
      edges.forEach(e => outAdj[e.from].push(e));
      const indegC = Object.assign({}, indeg);
      while (queue.length) {
        const id = queue.shift(); order.push(id);
        outAdj[id].forEach(e => { if (--indegC[e.to] === 0) queue.push(e.to); });
      }
      // if cycle (shouldn't happen — guarded on add), fall back to array order
      if (order.length !== nodes.length) nodes.forEach(n => { if (!order.includes(n.id)) order.push(n.id); });

      // Use day-offsets from a common origin for numeric CPM
      let origin = null;
      nodes.forEach(n => { if (!origin || U.parse(n.start) < U.parse(origin)) origin = n.start; });
      origin = origin || U.today();

      /* Build the working-day ordinal space once: an array of working
         dates from the origin, plus the reverse lookup. The span covers
         the furthest task end with headroom, because auto-scheduling
         can push work past the current end date. */
      let wdList = null, wdIdx = null;
      if (calOn) {
        let last = origin;
        nodes.forEach(n => { if (U.parse(n.end) > U.parse(last)) last = n.end; });
        const span = Math.max(370, U.diffDays(origin, last) + 370);
        wdList = []; wdIdx = Object.create(null);
        let d = origin;
        for (let i = 0; i <= span; i++) {
          if (Cal.isWorking(d, cal)) { wdIdx[d] = wdList.length; wdList.push(d); }
          d = U.addDays(d, 1);
        }
        if (!wdList.length) { wdList = null; wdIdx = null; }   // pathological calendar
      }

      // Date -> ordinal. A task sitting on a weekend (legacy data, or a
      // hand-typed date) rolls forward to the next working day rather
      // than being dropped from the schedule.
      const off = (wdIdx)
        ? (iso) => {
            if (wdIdx[iso] != null) return wdIdx[iso];
            const rolled = Cal.nextWorking(iso, cal, 1);
            if (wdIdx[rolled] != null) return wdIdx[rolled];
            // outside the precomputed span: approximate by working ratio
            const ratio = wdList.length / (U.diffDays(origin, wdList[wdList.length - 1]) + 1 || 1);
            return Math.round(U.diffDays(origin, iso) * ratio);
          }
        : (iso) => U.diffDays(origin, iso);

      // Ordinal -> date, for turning CPM results back into real dates.
      const dateAt = (wdList)
        ? (n) => {
            if (n < 0) return wdList[0];
            if (n < wdList.length) return wdList[n];
            // past the span: step forward from the last known working day
            return Cal.shift(wdList[wdList.length - 1], n - (wdList.length - 1), cal);
          }
        : (n) => U.addDays(origin, n);

      const ES = {}, EF = {}, LS = {}, LF = {};
      const inEdges = {}; nodes.forEach(n => inEdges[n.id] = []);
      edges.forEach(e => inEdges[e.to].push(e));

      // forward pass — classic CPM.
      // Tasks with NO predecessors are anchored at their placed start;
      // tasks WITH predecessors are driven purely by dependency constraints,
      // so the critical path traces the true longest dependency chain.
      order.forEach(id => {
        const n = byId[id]; const d = dur(n);
        // as-placed CPM: never earlier than the user's placed start, then pushed
        // later by any predecessor constraint. Total-float = 0 => on critical path.
        let es = off(n.start);
        inEdges[id].forEach(e => {
          const p = byId[e.from]; const pes = ES[e.from], pef = EF[e.from];
          let cand;
          switch (e.type) {
            case 'SS': cand = pes + e.lag; break;
            case 'FF': cand = pef + e.lag - d; break;
            case 'SF': cand = pes + e.lag - d; break;
            default: cand = pef + e.lag; break; // FS
          }
          es = Math.max(es, cand);
        });
        ES[id] = es; EF[id] = es + d;
      });

      const projectEnd = Math.max(0, ...nodes.map(n => EF[n.id]));

      // backward pass
      for (let i = order.length - 1; i >= 0; i--) {
        const id = order[i]; const n = byId[id]; const d = dur(n);
        let lf = outAdj[id].length ? Infinity : projectEnd;
        outAdj[id].forEach(e => {
          const s = byId[e.to]; const sls = LS[e.to], slf = LF[e.to];
          let cand;
          switch (e.type) {
            case 'SS': cand = sls + d - e.lag; break;
            case 'FF': cand = slf - e.lag; break;
            case 'SF': cand = slf + d - e.lag; break;
            default: cand = sls - e.lag; break; // FS: my finish <= successor start - lag
          }
          lf = Math.min(lf, cand);
        });
        if (lf === Infinity) lf = projectEnd;
        LF[id] = lf; LS[id] = lf - d;
      }

      const slack = {}, critical = new Set();
      nodes.forEach(n => {
        const s = Math.round((LS[n.id] || 0) - (ES[n.id] || 0));
        slack[n.id] = s;
        if (s <= 0) critical.add(n.id);
      });

      // mark critical edges (both endpoints critical & tight)
      const critEdges = new Set();
      edges.forEach(e => { if (critical.has(e.from) && critical.has(e.to)) critEdges.add(e.from + '>' + e.to); });

      return { critical, slack, edges, critEdges, projectEnd, origin,
        ES, EF, LS, LF, dur: id => dur(byId[id]),
        // Exposed so callers convert ordinals back the same way the
        // forward pass created them — calendar-aware or not.
        dateAt, calOn, cal };
    },

    // apply auto-scheduling: shift tasks to satisfy dependencies (respects lags)
    autoSchedule() {
      const info = this.compute();
      Model.snapshot();
      const tasks = Model.tasks();
      const byId = {}; tasks.forEach(t => byId[t.id] = t);
      Object.keys(info.ES).forEach(id => {
        const t = byId[id]; if (!t) return;
        const newStart = info.dateAt(info.ES[id]);
        const d = info.calOn ? Cal.duration(t.start, t.end, info.cal) : U.duration(t.start, t.end);
        t.start = newStart;
        t.end = t.type === 'milestone'
          ? newStart
          : (info.calOn ? Cal.endFrom(newStart, Math.max(1, d), info.cal) : U.endFrom(newStart, d));
      });
      Model._recalcGroups();
      Model._afterChange();
    },
  };

  window.Schedule = Schedule;
})();
