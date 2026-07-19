/* ============================================================
   mermaid-gantt.js — read and write Mermaid `gantt` diagrams.

   WHY

   Mermaid gantt blocks are how developers keep a schedule in a README,
   a GitHub issue, a Notion page or a design doc. The text is easy to
   write and impossible to edit — nudging one date by two days means
   re-reading the whole block and recomputing every `after` chain by
   hand. Round-tripping through a real editor is the missing step.

   THE SYNTAX WE TARGET

     gantt
         title My plan
         dateFormat YYYY-MM-DD
         excludes weekends
         section Design
         Research      :done, res, 2026-01-05, 5d
         Wireframes    :active, wf, after res, 8d
         Sign-off      :milestone, ms, 2026-01-23, 0d

   A task line is `<name> : <field>, <field>, ...` where fields are, in
   order: any of the tags `done` / `active` / `crit` / `milestone`, an
   optional id, a start (a date, or `after <id>`, or omitted to continue
   from the previous task), and an end (a date or a duration like `5d`).

   WHAT IS LOSSY, AND WHY THAT IS FINE

   Mermaid has no progress percentage — only the tags `done` and
   `active`. So the mapping is coarse and deliberate:

       export:  100%  -> done      1..99%  -> active      0%  -> (none)
       import:  done  -> 100%      active  -> 50%         -> 0%

   Importing `active` as 50% is a guess. It is the only defensible one
   available: the tag asserts "started but not finished", and 50 is the
   midpoint of what it can mean. It is flagged in the returned
   `warnings` so the caller can tell the user rather than let them
   discover it in a status report.

   `crit` is NOT imported. Criticality is computed by schedule.js from
   the dependency graph — accepting an asserted value would let a stale
   diagram override the arithmetic and paint a non-critical chain red.
   We do emit it on export, where it is derived and therefore true.

   DURATIONS ARE OFF BY ONE IF YOU ARE CARELESS. Mermaid's `5d` from
   Jan 5 covers Jan 5-9 inclusive. Our `end` is also inclusive, so
   end = start + n - 1, not start + n. Getting this wrong shifts every
   date in the file by one day per task and still produces a diagram
   that renders perfectly.
   ============================================================ */
(function () {
  const TAGS = ['done', 'active', 'crit', 'milestone'];
  const ISO = /^\d{4}-\d{2}-\d{2}$/;
  const DUR = /^(\d+(?:\.\d+)?)\s*([dwhm])$/i;

  /* Mermaid has no escape mechanism: a colon starts the field list and
     a comma separates fields, so a task named "Phase 2: design, review"
     silently becomes a different task with different dates. Substitute
     rather than emit something that will not parse. */
  function safeName(s) {
    return String(s || 'Task')
      .replace(/[:,;#]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim() || 'Task';
  }

  /* Mermaid ids must be bare words. Our ids are `t_ab12cd3` which is
     already safe, but imported/renamed ones may not be. */
  function safeId(s, used) {
    let id = String(s || '').replace(/[^A-Za-z0-9_]/g, '') || 'task';
    if (/^\d/.test(id)) id = 't' + id;
    let out = id, n = 2;
    while (used.has(out)) out = id + '_' + n++;
    used.add(out);
    return out;
  }

  function durationDays(n, unit) {
    const v = Number(n);
    switch ((unit || 'd').toLowerCase()) {
      case 'w': return v * 7;
      case 'h': return Math.max(1, Math.round(v / 24));
      case 'm': return Math.max(1, Math.round(v / 1440));
      default: return v;
    }
  }

  const MermaidGantt = {
    /* ---------------------------------------------------------
       EXPORT
       --------------------------------------------------------- */
    /** @param opts {critical: Set<taskId>|null} */
    export(project, opts) {
      const o = opts || {};
      const tasks = (project && project.tasks) || [];
      const crit = o.critical || null;
      const cal = (typeof Cal !== 'undefined') ? Cal.of(project) : null;

      const lines = ['gantt'];
      lines.push('    title ' + safeName(project && project.name || 'Project'));
      lines.push('    dateFormat YYYY-MM-DD');
      /* Only claim to exclude weekends if the calendar actually does.
         Emitting it unconditionally would make Mermaid re-flow every
         bar and disagree with the dates on the very next line. */
      if (cal && Cal.active(cal) && !cal.workdays.includes(0) && !cal.workdays.includes(6)) {
        lines.push('    excludes weekends');
      }

      const used = new Set();
      const idOf = new Map();
      tasks.forEach(t => idOf.set(t.id, safeId(t.id, used)));

      /* Groups become sections. Mermaid sections are flat, so a nested
         group is emitted as a section too and the nesting is lost —
         there is nowhere in the format to put it. */
      const kids = new Map();
      tasks.forEach(t => {
        const k = t.parentId || '';
        if (!kids.has(k)) kids.set(k, []);
        kids.get(k).push(t);
      });

      let emittedSection = false;
      const emit = (t) => {
        if (t.type === 'group') {
          lines.push('');
          lines.push('    section ' + safeName(t.name));
          emittedSection = true;
          (kids.get(t.id) || []).forEach(emit);
          return;
        }

        const fields = [];
        const pct = Number(t.progress) || 0;
        if (t.type === 'milestone') fields.push('milestone');
        if (pct >= 100) fields.push('done');
        else if (pct > 0) fields.push('active');
        if (crit && crit.has(t.id)) fields.push('crit');

        fields.push(idOf.get(t.id));

        /* Prefer `after <id>` for a plain finish-to-start link with no
           lag: it is what makes the diagram maintainable, since moving
           the predecessor moves everything downstream. Anything else —
           SS/FF/SF, or a lag — cannot be expressed, so we fall back to
           the absolute date, which at least stays correct. */
        const dep = (t.deps || []).find(d => d.type === 'FS' && !d.lag && idOf.has(d.from));
        fields.push(dep ? 'after ' + idOf.get(dep.from) : t.start);

        if (t.type === 'milestone') fields.push('0d');
        else {
          const days = (cal && Cal.active(cal))
            ? Cal.duration(t.start, t.end, cal)
            : U.duration(t.start, t.end);
          fields.push(Math.max(1, days) + 'd');
        }

        lines.push('    ' + safeName(t.name).padEnd(28) + ' :' + fields.join(', '));
      };

      (kids.get('') || []).forEach(t => {
        if (t.type !== 'group' && !emittedSection) {
          /* Mermaid requires bars to sit under a section in practice;
             top-level tasks before any section render inconsistently
             across versions. Give them one. */
          lines.push('');
          lines.push('    section ' + safeName(project && project.name || 'Tasks'));
          emittedSection = true;
        }
        emit(t);
      });

      return lines.join('\n') + '\n';
    },

    /* ---------------------------------------------------------
       IMPORT
       --------------------------------------------------------- */
    /** @returns {tasks, title, excludesWeekends, warnings} */
    parse(text) {
      const warnings = [];
      const src = String(text || '');

      /* Tolerate a fenced block pasted straight from a README. */
      const fence = src.match(/```(?:mermaid)?\s*([\s\S]*?)```/);
      const body = fence ? fence[1] : src;

      const raw = body.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
      if (!raw.some(l => /^gantt\b/.test(l))) {
        throw new Error('That does not look like a Mermaid gantt diagram — it should start with "gantt".');
      }

      let title = '';

      /* `excludes weekends` has to be known BEFORE any date is resolved,
         and Mermaid does not require it to come first. Scan for it up
         front rather than picking it up mid-loop, which would schedule
         every task above the line on calendar days and everything below
         it on working days — in one file. */
      let excludesWeekends = /^\s*excludes\s+.*weekend/im.test(body);
      const tasks = [];
      const byMermaidId = new Map();   // mermaid id -> our task

      /* When the diagram excludes weekends, every date it implies is a
         working-day date. Resolving `after` with a plain +1 day put a
         successor on a Saturday whenever its predecessor ended on a
         Friday — the file still rendered, and every downstream date was
         wrong. Route the arithmetic through Cal so the import agrees
         with what Mermaid itself would draw. */
      const wcal = excludesWeekends
        ? { enabled: true, workdays: [1, 2, 3, 4, 5], holidays: {} }
        : null;
      const nextWorking = (iso) => wcal ? Cal.nextWorking(iso, wcal, 1) : iso;
      const endAfter = (startIso, n) => wcal
        ? Cal.endFrom(startIso, n, wcal)
        : U.addDays(startIso, Math.max(1, n) - 1);
      let section = null;
      let cursor = null;               // start for a task that omits one
      let sawActive = false;

      for (const line of raw) {
        if (/^gantt\b/.test(line)) continue;
        if (/^title\s+/i.test(line)) { title = line.replace(/^title\s+/i, '').trim(); continue; }
        if (/^excludes\s+/i.test(line)) {
          if (/weekend/i.test(line)) excludesWeekends = true;
          else warnings.push('Ignored an "excludes" rule for specific dates — add them as holidays in the calendar.');
          continue;
        }
        if (/^(dateFormat|axisFormat|todayMarker|tickInterval|weekday|inclusiveEndDates)\b/i.test(line)) continue;
        if (/^%%/.test(line)) continue;   // comment

        if (/^section\s+/i.test(line)) {
          const name = line.replace(/^section\s+/i, '').trim();
          section = {
            id: U.uid('t'), name, type: 'group', parentId: null,
            start: null, end: null, progress: 0, deps: [],
          };
          tasks.push(section);
          continue;
        }

        const colon = line.indexOf(':');
        if (colon < 0) { warnings.push('Skipped a line with no ":" — ' + line.slice(0, 40)); continue; }

        const name = line.slice(0, colon).trim() || 'Task';
        const fields = line.slice(colon + 1).split(',').map(f => f.trim()).filter(Boolean);

        let isMilestone = false, progress = 0, mid = null;
        let start = null, dep = null, endDate = null, days = null;

        for (const f of fields) {
          const low = f.toLowerCase();
          if (TAGS.includes(low)) {
            if (low === 'milestone') isMilestone = true;
            else if (low === 'done') progress = 100;
            else if (low === 'active') { progress = 50; sawActive = true; }
            // `crit` is deliberately ignored — see the header.
            continue;
          }
          if (/^after\s+/i.test(f)) { dep = f.replace(/^after\s+/i, '').trim().split(/\s+/); continue; }
          if (/^until\s+/i.test(f)) { warnings.push('"until" is not supported; used the task\'s own dates instead.'); continue; }
          if (ISO.test(f)) { if (start === null) start = f; else endDate = f; continue; }
          const d = f.match(DUR);
          if (d) { days = durationDays(d[1], d[2]); continue; }
          if (mid === null && /^[A-Za-z_][A-Za-z0-9_-]*$/.test(f)) { mid = f; continue; }
          warnings.push('Did not understand "' + f + '" on task "' + name + '".');
        }

        /* Resolve the start. Order matters: an explicit date wins, then
           `after`, then "continue from the previous task" — which is
           what Mermaid does when a task gives only a duration. */
        let resolvedStart = start;
        let deps = [];
        if (!resolvedStart && dep) {
          const pred = byMermaidId.get(dep[0]);
          if (pred && pred.end) resolvedStart = nextWorking(U.addDays(pred.end, 1));
          for (const id of dep) {
            const p = byMermaidId.get(id);
            if (p) deps.push({ from: p.id, type: 'FS', lag: 0 });
            else warnings.push('Task "' + name + '" refers to "' + id + '", which is not defined above it.');
          }
        }
        if (!resolvedStart) resolvedStart = cursor || U.today();
        /* An explicit date in the file is honoured as written; only
           dates we DERIVE get snapped onto a working day. Silently
           moving a date the author typed would be the wrong kind of
           helpful. */
        if (!start) resolvedStart = nextWorking(resolvedStart);

        let end;
        if (isMilestone) end = resolvedStart;
        else if (endDate) end = endDate;
        else if (days != null) end = endAfter(resolvedStart, Math.max(1, Math.round(days)));
        else end = resolvedStart;

        const t = {
          id: U.uid('t'),
          name,
          start: resolvedStart,
          end,
          progress,
          type: isMilestone ? 'milestone' : 'task',
          parentId: section ? section.id : null,
          deps,
          collapsed: false,
          notes: '', assignee: '', cost: 0, spent: 0,
        };
        tasks.push(t);
        if (mid) byMermaidId.set(mid, t);
        cursor = nextWorking(U.addDays(end, 1));
      }

      if (!tasks.some(t => t.type !== 'group')) {
        throw new Error('No tasks found in that diagram.');
      }

      /* Sections carry no dates of their own in Mermaid; give each the
         span of its children so the group bar is not a zero-width
         sliver at today's date. */
      for (const g of tasks.filter(t => t.type === 'group')) {
        const kids = tasks.filter(t => t.parentId === g.id);
        if (!kids.length) { g.start = g.end = U.today(); continue; }
        g.start = kids.reduce((a, k) => U.min(a, k.start), kids[0].start);
        g.end = kids.reduce((a, k) => U.max(a, k.end), kids[0].end);
      }

      if (sawActive) {
        warnings.push('Mermaid has no progress percentage, so tasks tagged "active" were imported at 50%. Adjust them as needed.');
      }

      return { tasks, title, excludesWeekends, warnings };
    },
  };

  if (typeof window !== 'undefined') window.MermaidGantt = MermaidGantt;
  if (typeof module !== 'undefined' && module.exports) module.exports = MermaidGantt;
})();
