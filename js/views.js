/* ============================================================
   views.js — what the chart shows. Pure filtering, no DOM.

   Three modes over the same data:

     all         every visible row (the default, unchanged behaviour)
     lookahead   only work touching the next N weeks
     milestones  only milestones

   WHY LOOKAHEAD IS A VIEW AND NOT AN EXPORT

   The "3-week lookahead" is a standing construction ritual: every
   Monday the site team pulls the next three weeks out of the master
   schedule and works only from that. Today it is done by retyping into
   an Excel template — Smartsheet, Mastt and even a NAVFAC standard all
   publish one, and every one of them is a blank grid you fill in by
   hand. The schedule already contains the answer; nobody has made the
   window a view of it.

   WINDOWS ARE ANCHORED TO MONDAY

   The ritual is weekly and the meeting is Monday, so a window running
   Thursday-to-Thursday would be useless. `anchor` snaps back to the
   week start. Weeks are counted in calendar weeks, not working weeks —
   "three weeks out" means a date, not 15 working days.

   OVERLAP, NOT CONTAINMENT

   A task is in the window if it *overlaps* it. Containment would drop
   the eight-month foundation pour that is happening right now, which is
   exactly the work the site team most needs to see. This is the single
   most important line in the file:

       task.start <= windowEnd && task.end >= windowStart

   ANCESTORS COME ALONG

   A filtered row keeps its parent groups even when the group itself
   does not match, otherwise the rows render orphaned and the reader
   loses the section headings that make a lookahead readable. Ancestors
   are marked `_context: true` so the renderer can style them as
   headings rather than as work in the window.
   ============================================================ */
(function () {
  const MODES = ['all', 'lookahead', 'milestones'];

  function defaults() {
    return { mode: 'all', weeks: 3, anchor: null };
  }

  const Views = {
    MODES,
    defaults,

    /** Normalise whatever is on the project. Unknown modes fall back. */
    of(project) {
      const v = (project && project.settings && project.settings.view) || null;
      if (!v) return defaults();
      return {
        mode: MODES.indexOf(v.mode) >= 0 ? v.mode : 'all',
        weeks: Math.max(1, Math.min(52, Number(v.weeks) || 3)),
        /* A stored anchor is a specific Monday the user pinned. Null
           means "follow today", which is what makes the window roll
           forward on its own between visits. */
        anchor: v.anchor || null,
      };
    },

    active(view) { return !!(view && view.mode && view.mode !== 'all'); },

    /** The concrete date range of a lookahead window. */
    window(view, today) {
      const start = U.weekStart(view.anchor || today || U.today());
      const weeks = Math.max(1, Number(view.weeks) || 3);
      return { start, end: U.addDays(start, weeks * 7 - 1), weeks };
    },

    /**
     * Filter a row list.
     * @param rows  the already-collapse-filtered task list
     * @param all   every task in the project (needed to walk parents)
     * @param view  from Views.of()
     * @param today ISO; injected so this stays pure and testable
     * @returns {rows, window} — rows in the SAME order they came in
     */
    apply(rows, all, view, today) {
      if (!Views.active(view)) return { rows, window: null };

      const byId = new Map((all || []).map(t => [t.id, t]));
      const win = view.mode === 'lookahead' ? Views.window(view, today) : null;

      const matches = (t) => {
        if (t.type === 'group') return false;   // groups qualify only as ancestors
        if (view.mode === 'milestones') return t.type === 'milestone';
        if (!t.start || !t.end) return false;
        return U.parse(t.start) <= U.parse(win.end) && U.parse(t.end) >= U.parse(win.start);
      };

      const keep = new Set();
      for (const t of rows) {
        if (!matches(t)) continue;
        keep.add(t.id);
        /* Walk up. The guard is not paranoia — a corrupt parentId cycle
           would otherwise hang the render loop, and this runs on every
           repaint including during a drag. */
        let p = t.parentId, guard = 0;
        while (p && guard++ < 100) {
          if (keep.has(p)) break;      // this branch is already kept
          keep.add(p);
          p = (byId.get(p) || {}).parentId;
        }
      }

      const out = rows.filter(t => keep.has(t.id)).map(t => {
        if (t.type === 'group' || !matches(t)) {
          /* Shallow copy so the flag never reaches the saved project —
             a `_context` key persisted into storage would come back as
             a real field and slowly leak into exports. */
          return Object.assign({}, t, { _context: true });
        }
        return t;
      });

      return { rows: out, window: win };
    },

    /** A short human label, e.g. "3-week lookahead · 20 Jul – 9 Aug". */
    label(view, today) {
      if (!Views.active(view)) return '';
      if (view.mode === 'milestones') return 'Milestones only';
      const w = Views.window(view, today);
      return `${w.weeks}-week lookahead · ${U.fmtShort(w.start)} – ${U.fmtShort(w.end)}`;
    },
  };

  if (typeof window !== 'undefined') window.Views = Views;
  if (typeof module !== 'undefined' && module.exports) module.exports = Views;
})();
