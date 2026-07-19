/* ============================================================
   export-svg.js — the chart as real vector, built from the model.

   WHY THIS IS NOT A SERIALISED DOM NODE

   The obvious implementation is to grab #chartSvg and call
   XMLSerializer on it. That does not work here, and the reason is
   structural: the bars are absolutely-positioned <div>s. Only the
   dependency arrows are SVG. Serialising the existing node yields the
   arrows floating over nothing.

   The next obvious idea — wrap the HTML in <foreignObject> — produces a
   file that renders in a browser and is useless everywhere else.
   Illustrator, Inkscape and most print pipelines ignore foreignObject,
   so the "vector export" opens blank at exactly the moment somebody
   needs it. That is worse than not offering the feature.

   So this redraws the chart as native SVG from the model. More code,
   and it buys two things that matter:

     1. It opens in real vector tools and prints at any size. PNG and
        the html2canvas PDF are raster — enlarge them and the text goes
        soft. A schedule pinned to a wall is the whole point.

     2. It is DOM-free, so it is UNIT TESTED. Everything else in the
        export path depends on html2canvas and a live document, which
        is why none of it has tests. This module is a pure function
        from a project to a string.

   The cost of the duplication is that render.js and this file can
   drift. The tests pin the parts that would silently go wrong — bar
   geometry against the date axis, and the inclusive-end convention.
   ============================================================ */
(function () {
  const ROW_H = 28;
  const HEAD_H = 44;
  const PAD = 16;
  const BAR_H = 16;
  const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

  /* XML, not HTML: a bare & or < in a task name produces a file that
     every parser rejects, and the user only finds out when they open
     it somewhere else. */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  }

  /* Rough width of a string, used only to size the name column. A real
     measurement needs a DOM, which this module deliberately does not
     have; over-estimating slightly is harmless, under-estimating clips
     text, so the factor leans generous. */
  function textWidth(s, size) {
    let w = 0;
    for (const ch of String(s || '')) {
      w += /[一-鿿ぁ-ヿ]/.test(ch) ? size : (/[iIlj1.,:;'"|! ]/.test(ch) ? size * 0.32 : size * 0.56);
    }
    return w;
  }

  const ExportSvg = {
    ROW_H,

    /**
     * @param project  the project
     * @param opts {
     *   critical: Set<id>|null,   computed, never asserted
     *   cal: calendar|null,
     *   dayW: number,             px per day
     *   showProgress, showWeekends, showToday, showCritical: bool
     *   today: 'YYYY-MM-DD'       injected so the output is deterministic
     *   title: string
     * }
     * @returns {svg, width, height}
     */
    build(project, opts) {
      const o = Object.assign({
        critical: null, cal: null, dayW: 12,
        showProgress: true, showWeekends: true, showToday: true, showCritical: true,
        today: null, title: null,
      }, opts || {});

      const tasks = ((project && project.tasks) || []).filter(t => t.start && t.end);
      const today = o.today || U.today();
      const title = o.title || (project && project.name) || 'Gantt chart';

      if (!tasks.length) {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="80" viewBox="0 0 480 80">`
          + `<text x="16" y="44" font-family="${FONT}" font-size="14" fill="#64748b">`
          + `${esc(title)} — no dated tasks</text></svg>`;
        return { svg, width: 480, height: 80, empty: true };
      }

      // ---- date range ----
      let min = tasks[0].start, max = tasks[0].end;
      for (const t of tasks) {
        if (U.parse(t.start) < U.parse(min)) min = t.start;
        if (U.parse(t.end) > U.parse(max)) max = t.end;
      }
      const origin = U.weekStart(U.addDays(min, -3));
      const endDate = U.addDays(max, 4);
      const days = U.duration(origin, endDate);
      const dayW = o.dayW;
      const chartW = Math.ceil(days * dayW);

      // ---- name column, sized to the longest label ----
      let nameW = 140;
      for (const t of tasks) {
        const depth = this._depth(project, t);
        nameW = Math.max(nameW, textWidth(t.name, 12) + 24 + depth * 12);
      }
      nameW = Math.min(Math.ceil(nameW), 340);
      const dateW = 74;
      const gridW = nameW + dateW * 2;

      const W = PAD * 2 + gridW + chartW;
      const H = PAD * 2 + HEAD_H + tasks.length * ROW_H + 28;

      /* x for a date. The +1 on an end date is deliberate: our end is
         INCLUSIVE, so a task finishing on the 9th must have its bar
         reach the right-hand edge of the 9th, not its left edge. This
         is the off-by-one that makes every bar one day short. */
      const xOf = (iso) => PAD + gridW + U.diffDays(origin, iso) * dayW;
      const xEnd = (iso) => xOf(U.addDays(iso, 1));

      const parts = [];
      parts.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" `
        + `viewBox="0 0 ${W} ${H}" font-family="${FONT}">`);
      parts.push(`<title>${esc(title)}</title>`);
      parts.push(`<rect width="${W}" height="${H}" fill="#ffffff"/>`);
      parts.push(`<text x="${PAD}" y="${PAD + 14}" font-size="15" font-weight="700" fill="#0f172a">${esc(title)}</text>`);

      const top = PAD + 26;
      const bodyTop = top + HEAD_H;

      // ---- non-working shading, behind everything ----
      if (o.showWeekends) {
        let d = origin;
        for (let i = 0; i < days; i++) {
          const off = o.cal ? !Cal.isWorking(d, o.cal) : U.isWeekend(d);
          if (off) {
            parts.push(`<rect x="${xOf(d).toFixed(1)}" y="${bodyTop}" width="${dayW.toFixed(1)}" `
              + `height="${tasks.length * ROW_H}" fill="#f1f5f9"/>`);
          }
          d = U.addDays(d, 1);
        }
      }

      // ---- month band + week ticks ----
      let d = origin;
      let monthStart = origin;
      for (let i = 0; i <= days; i++) {
        const isLast = i === days;
        if (isLast || U.parse(d).getDate() === 1) {
          if (i > 0) {
            const x0 = xOf(monthStart), x1 = xOf(d);
            if (x1 - x0 > 30) {
              parts.push(`<text x="${(x0 + 6).toFixed(1)}" y="${top + 15}" font-size="11" `
                + `font-weight="600" fill="#334155">${esc(U.fmtMonth(monthStart))}</text>`);
            }
            parts.push(`<line x1="${x0.toFixed(1)}" y1="${top}" x2="${x0.toFixed(1)}" `
              + `y2="${bodyTop + tasks.length * ROW_H}" stroke="#e2e8f0" stroke-width="1"/>`);
          }
          monthStart = d;
        }
        if (!isLast && U.dow(d) === 1) {
          parts.push(`<line x1="${xOf(d).toFixed(1)}" y1="${top + 22}" x2="${xOf(d).toFixed(1)}" `
            + `y2="${bodyTop + tasks.length * ROW_H}" stroke="#f1f5f9" stroke-width="1"/>`);
          if (dayW >= 10) {
            parts.push(`<text x="${(xOf(d) + 3).toFixed(1)}" y="${top + 34}" font-size="9" `
              + `fill="#94a3b8">${esc(U.fmtShort(d))}</text>`);
          }
        }
        d = U.addDays(d, 1);
      }

      // ---- header rules + column labels ----
      parts.push(`<line x1="${PAD}" y1="${bodyTop}" x2="${W - PAD}" y2="${bodyTop}" stroke="#cbd5e1" stroke-width="1"/>`);
      parts.push(`<text x="${PAD + 4}" y="${top + 34}" font-size="10" font-weight="600" fill="#64748b">Task</text>`);
      parts.push(`<text x="${(PAD + nameW + 4).toFixed(1)}" y="${top + 34}" font-size="10" font-weight="600" fill="#64748b">Start</text>`);
      parts.push(`<text x="${(PAD + nameW + dateW + 4).toFixed(1)}" y="${top + 34}" font-size="10" font-weight="600" fill="#64748b">Finish</text>`);

      // ---- rows ----
      const rowOf = {};
      tasks.forEach((t, i) => { rowOf[t.id] = i; });

      tasks.forEach((t, i) => {
        const y = bodyTop + i * ROW_H;
        if (i % 2 === 1) parts.push(`<rect x="${PAD}" y="${y}" width="${W - PAD * 2}" height="${ROW_H}" fill="#fafbfc"/>`);
        parts.push(`<line x1="${PAD}" y1="${y + ROW_H}" x2="${W - PAD}" y2="${y + ROW_H}" stroke="#f1f5f9" stroke-width="1"/>`);

        const depth = this._depth(project, t);
        const isGroup = t.type === 'group';
        parts.push(`<text x="${(PAD + 4 + depth * 12).toFixed(1)}" y="${y + 18}" font-size="11.5" `
          + `${isGroup ? 'font-weight="700" ' : ''}fill="#1e293b">${esc(this._clip(t.name, nameW - 8 - depth * 12))}</text>`);
        parts.push(`<text x="${(PAD + nameW + 4).toFixed(1)}" y="${y + 18}" font-size="10.5" fill="#64748b">${esc(t.start)}</text>`);
        parts.push(`<text x="${(PAD + nameW + dateW + 4).toFixed(1)}" y="${y + 18}" font-size="10.5" fill="#64748b">`
          + `${esc(t.type === 'milestone' ? '' : t.end)}</text>`);

        const bx = xOf(t.start);
        const bw = Math.max(xEnd(t.end) - bx, 3);
        const by = y + (ROW_H - BAR_H) / 2;
        const isCrit = o.showCritical && o.critical && o.critical.has(t.id);

        if (t.type === 'milestone') {
          const cx = bx + dayW / 2, cy = y + ROW_H / 2, r = 7;
          parts.push(`<polygon points="${cx.toFixed(1)},${(cy - r).toFixed(1)} ${(cx + r).toFixed(1)},${cy.toFixed(1)} `
            + `${cx.toFixed(1)},${(cy + r).toFixed(1)} ${(cx - r).toFixed(1)},${cy.toFixed(1)}" `
            + `fill="${t.color || '#9333ea'}"/>`);
        } else if (isGroup) {
          parts.push(`<rect x="${bx.toFixed(1)}" y="${(y + ROW_H / 2 - 3).toFixed(1)}" width="${bw.toFixed(1)}" `
            + `height="6" rx="2" fill="#475569"/>`);
        } else {
          parts.push(`<rect x="${bx.toFixed(1)}" y="${by.toFixed(1)}" width="${bw.toFixed(1)}" height="${BAR_H}" `
            + `rx="3" fill="${t.color || '#2563eb'}"${isCrit ? ' stroke="#ea580c" stroke-width="2"' : ''}/>`);

          /* The critical path gets a hatch as well as a stroke, for the
             same reason the on-screen chart does: colour alone fails in
             greyscale, in print and for a colourblind reader. A printed
             schedule is exactly where that matters. */
          if (isCrit) {
            for (let hx = bx + 3; hx < bx + bw; hx += 6) {
              const x1 = Math.min(hx + 5, bx + bw);
              parts.push(`<line x1="${hx.toFixed(1)}" y1="${(by + BAR_H).toFixed(1)}" `
                + `x2="${x1.toFixed(1)}" y2="${by.toFixed(1)}" stroke="#ffffff" stroke-width="1.2" opacity="0.55"/>`);
            }
          }
          if (o.showProgress && Number(t.progress) > 0) {
            const pw = Math.max(1, bw * Math.min(100, t.progress) / 100);
            parts.push(`<rect x="${bx.toFixed(1)}" y="${by.toFixed(1)}" width="${pw.toFixed(1)}" `
              + `height="${BAR_H}" rx="3" fill="#000000" opacity="0.22"/>`);
          }
          if (t.assignee && bw > 40) {
            parts.push(`<text x="${(bx + bw + 5).toFixed(1)}" y="${(by + 12).toFixed(1)}" font-size="9.5" `
              + `fill="#94a3b8">${esc(t.assignee)}</text>`);
          }
        }
      });

      // ---- dependency arrows ----
      for (const t of tasks) {
        for (const dep of (t.deps || [])) {
          if (rowOf[dep.from] == null || rowOf[t.id] == null) continue;
          const from = tasks[rowOf[dep.from]];
          const x1 = xEnd(from.end);
          const y1 = bodyTop + rowOf[from.id] * ROW_H + ROW_H / 2;
          const x2 = xOf(t.start);
          const y2 = bodyTop + rowOf[t.id] * ROW_H + ROW_H / 2;
          const mid = Math.max(x1 + 8, x2 - 8);
          parts.push(`<path d="M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${mid.toFixed(1)} ${y1.toFixed(1)} `
            + `L ${mid.toFixed(1)} ${y2.toFixed(1)} L ${x2.toFixed(1)} ${y2.toFixed(1)}" `
            + `fill="none" stroke="#94a3b8" stroke-width="1.2"/>`);
          parts.push(`<polygon points="${x2.toFixed(1)},${y2.toFixed(1)} ${(x2 - 5).toFixed(1)},${(y2 - 3).toFixed(1)} `
            + `${(x2 - 5).toFixed(1)},${(y2 + 3).toFixed(1)}" fill="#94a3b8"/>`);
        }
      }

      // ---- today ----
      if (o.showToday && U.parse(today) >= U.parse(origin) && U.parse(today) <= U.parse(endDate)) {
        const tx = xOf(today) + dayW / 2;
        parts.push(`<line x1="${tx.toFixed(1)}" y1="${top + 20}" x2="${tx.toFixed(1)}" `
          + `y2="${bodyTop + tasks.length * ROW_H}" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 3"/>`);
        parts.push(`<text x="${(tx + 4).toFixed(1)}" y="${top + 18}" font-size="9.5" fill="#ef4444">today</text>`);
      }

      // ---- grid separator ----
      parts.push(`<line x1="${(PAD + gridW).toFixed(1)}" y1="${top}" x2="${(PAD + gridW).toFixed(1)}" `
        + `y2="${bodyTop + tasks.length * ROW_H}" stroke="#cbd5e1" stroke-width="1"/>`);

      parts.push(`<text x="${PAD}" y="${H - 8}" font-size="9.5" fill="#94a3b8">`
        + `${esc(U.fmtShort(min))} – ${esc(U.fmtShort(max))} · gantts.app</text>`);
      parts.push('</svg>');

      return { svg: parts.join('\n'), width: W, height: H, empty: false };
    },

    _depth(project, task) {
      let d = 0, p = task.parentId, guard = 0;
      const byId = {};
      ((project && project.tasks) || []).forEach(t => { byId[t.id] = t; });
      while (p && guard++ < 50) { d++; p = (byId[p] || {}).parentId; }
      return d;
    },

    /* SVG does not wrap or ellipsise text, so an over-long name would
       run straight across the chart area. Truncate to fit the column. */
    _clip(s, maxPx) {
      const str = String(s || '');
      if (textWidth(str, 11.5) <= maxPx) return str;
      let out = '';
      for (const ch of str) {
        if (textWidth(out + ch, 11.5) > maxPx - 8) break;
        out += ch;
      }
      return out.replace(/\s+$/, '') + '…';
    },
  };

  if (typeof window !== 'undefined') window.ExportSvg = ExportSvg;
  if (typeof module !== 'undefined' && module.exports) module.exports = ExportSvg;
})();
