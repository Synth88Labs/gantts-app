/* ============================================================
   export-pdf.js — paginated / tiled PDF export.

   WHY THIS EXISTS

   The old PDF export captured the whole chart as one image and scaled
   it to fit a single A4 page. For anything wider than a few weeks that
   produces a picture of a schedule rather than a readable schedule —
   the single most durable complaint about every Gantt tool, going back
   two decades and true of paid products too.

   The browser cannot fix this for us. `@page { size: landscape }` is
   only a hint that the print dialog overrides, the `page-orientation`
   descriptor is Chromium-only, and nothing in CSS tiles a horizontally
   overflowing element across sheets — native print simply clips or
   shrinks a 6000px-wide timeline. So the pagination has to happen here.

   HOW IT WORKS

   The chart is captured once at high resolution, then composed onto
   pages as tiles:

     - The task-name column is redrawn on EVERY horizontal tile, so
       page 3 still tells you which row is which.
     - The date header is redrawn on EVERY vertical tile, so page 5
       still tells you which weeks you are looking at.
     - Each page gets a "Page N of M · <date range>" footer, because a
       stack of printed sheets with no ordering is worse than one
       illegible one.

   Fit-to-page is still offered — it is the right answer for a short
   project — but it is now a choice rather than the only behaviour.
   ============================================================ */
(function () {
  // Paper sizes in PostScript points (1pt = 1/72"), portrait orientation.
  const PAPER = {
    A4:      { w: 595, h: 842,  label: 'A4' },
    A3:      { w: 842, h: 1191, label: 'A3' },
    A2:      { w: 1191, h: 1684, label: 'A2' },
    A1:      { w: 1684, h: 2384, label: 'A1' },
    Letter:  { w: 612, h: 792,  label: 'Letter' },
    Tabloid: { w: 792, h: 1224, label: 'Tabloid (11×17)' },
  };

  const DEFAULTS = {
    paper: 'A3',
    orientation: 'landscape',
    mode: 'tile',        // 'tile' | 'fit'
    scale: 0,            // 0 = auto (see autoScale); otherwise a percentage
    margin: 28,          // pt
    showDeps: true,
    from: '',            // '' = whole project
    to: '',
    repeatNames: true,
  };

  // Past this, a "helpful" export is really a paper-wasting accident.
  const BUSY_PAGES = 12;

  const ExportPdf = {
    PAPER,
    opts() {
      const saved = (Model.project.settings && Model.project.settings.pdf) || {};
      return Object.assign({}, DEFAULTS, saved);
    },
    setOpts(o) {
      Model.project.settings.pdf = Object.assign(this.opts(), o);
      Model.save();
    },

    /** Page box in points, accounting for orientation. */
    pageBox(o) {
      const p = PAPER[o.paper] || PAPER.A3;
      return o.orientation === 'landscape' ? { w: p.h, h: p.w } : { w: p.w, h: p.h };
    },

    /* Pick a scale that produces a sensible number of sheets.

       A two-year plan at 100% on A4 is 70 pages, which nobody wants and
       nobody asked for. Auto walks down from 100% and takes the first
       scale that fits the whole height on one row and the width in at
       most three columns, bottoming out at 40% — below that the text
       stops being readable and fit-to-one-page is the better answer
       anyway. The user can still override with the slider. */
    autoScale(o) {
      const probe = Object.assign({}, o, { scale: 100 });
      for (let s = 100; s >= 40; s -= 5) {
        probe.scale = s;
        const g = this.geometry(probe, true);
        if (g.rows === 1 && g.cols <= 3) return s;
      }
      return 40;
    },

    effectiveScale(o) {
      return o.scale ? o.scale : this.autoScale(o);
    },

    /* Geometry of what we are about to export, in CSS pixels, before
       any capture happens. Used for the live page-count estimate so the
       user is not surprised by a 40-page PDF.

       `raw` skips auto-scale resolution, so autoScale can probe without
       recursing into itself. */
    geometry(o, raw) {
      if (!raw && !o.scale) o = Object.assign({}, o, { scale: this.autoScale(o) });
      const rs = Render.rs;
      const gridW = Model.project.settings.gridWidth;
      const headH = 56;
      const titleH = 40;

      // Optional date window: crop the chart horizontally.
      let x0 = 0, x1 = rs.width;
      if (o.from) x0 = Math.max(0, Render.off(o.from) * rs.dayW);
      if (o.to)   x1 = Math.min(rs.width, (Render.off(o.to) + 1) * rs.dayW);
      if (x1 <= x0) { x0 = 0; x1 = rs.width; }

      const box = this.pageBox(o);
      const availW = box.w - o.margin * 2;
      const availH = box.h - o.margin * 2;

      if (o.mode === 'fit') {
        return { gridW, headH, titleH, x0, x1, chartW: x1 - x0, bodyH: rs.height,
          cols: 1, rows: 1, pages: 1, box, availW, availH, scale: null };
      }

      // Tile mode: pt-per-px at the requested scale.
      const k = (o.scale / 100) * 0.75;              // 1 CSS px ≈ 0.75pt at 100%
      const namesW = o.repeatNames ? gridW * k : 0;
      const headPt = (titleH + headH) * k;
      const footPt = 16;

      const bodyPtW = Math.max(40, availW - namesW);
      const bodyPtH = Math.max(40, availH - headPt - footPt);

      const chartPtW = (x1 - x0) * k;
      const bodyPxH = rs.height;
      const bodyPtHTotal = bodyPxH * k;

      const cols = Math.max(1, Math.ceil(chartPtW / bodyPtW - 0.001));
      const rows = Math.max(1, Math.ceil(bodyPtHTotal / bodyPtH - 0.001));

      return { gridW, headH, titleH, x0, x1, chartW: x1 - x0, bodyH: bodyPxH,
        cols, rows, pages: cols * rows, box, availW, availH,
        k, namesW, headPt, footPt, bodyPtW, bodyPtH };
    },

    /** Human summary for the dialog. */
    summary(o) {
      const g = this.geometry(o);
      if (o.mode === 'fit') return 'Everything shrunk onto 1 page — quick, but wide plans get small.';
      const s = this.effectiveScale(o);
      const sheets = g.pages === 1 ? '1 page' : `${g.cols} across × ${g.rows} down = ${g.pages} pages`;
      let out = `${sheets} at ${s}%${o.scale ? '' : ' (auto)'} on ${PAPER[o.paper].label} ${o.orientation}.`;
      if (g.pages > BUSY_PAGES) {
        out += `  That is a lot of paper — try a bigger sheet, a lower scale, or a date range.`;
      }
      return out;
    },

    /* Capture the chart, optionally with dependency lines suppressed.
       Suppression happens on the CLONE, never on the live DOM, so an
       export can't leave the user's chart altered. */
    async captureAll(o) {
      if (!window.html2canvas) throw new Error('image library still loading — try again in a moment');
      const node = Exports.buildExportNode();
      if (!o.showDeps) {
        node.querySelectorAll('.dep, .dep-hit, #depLayer path, .chart-svg path').forEach(el => el.remove());
      }
      try {
        return await html2canvas(node, {
          scale: 2, backgroundColor: '#ffffff', logging: false,
          windowWidth: node.scrollWidth, windowHeight: node.scrollHeight,
        });
      } finally { node.remove(); }
    },

    async run() {
      if (!window.jspdf) throw new Error('PDF library still loading — try again in a moment');
      const o = this.opts();
      const g = this.geometry(o);

      App.toast(g.pages > 1 ? `Rendering ${g.pages} pages…` : 'Rendering PDF…');
      const canvas = await this.captureAll(o);

      const { jsPDF } = window.jspdf;
      /* compress:true is NOT the jsPDF default. Without it the image
         streams are stored raw and a four-page tiled export weighed
         45 MB — nobody is emailing that to a client. */
      const pdf = new jsPDF({
        orientation: o.orientation === 'landscape' ? 'l' : 'p',
        unit: 'pt', format: [g.box.w, g.box.h], compress: true,
      });

      // Source canvas is 2x CSS pixels (html2canvas scale).
      const S = canvas.width / (Model.project.settings.gridWidth + Render.rs.width);
      const px = (cssPx) => cssPx * S;

      const srcTitleH = px(g.titleH);
      const srcHeadH = px(g.headH);
      const srcNamesW = px(g.gridW);
      const srcChartX = srcNamesW + px(g.x0);
      const srcChartW = px(g.chartW);
      const srcBodyY = srcTitleH + srcHeadH;
      const srcBodyH = canvas.height - srcBodyY;

      if (o.mode === 'fit') {
        // Single page: header + names + whole chart, scaled to fit.
        const slice = this.crop(canvas, srcChartX, 0, srcChartW, canvas.height);
        const composed = this.joinH(
          this.crop(canvas, 0, 0, srcNamesW, canvas.height), slice);
        const ratio = Math.min(g.availW / composed.width, g.availH / composed.height);
        const outW = composed.width * ratio, outH = composed.height * ratio;
        // Resample to print resolution instead of embedding the raw 2x
        // capture — same result on paper, a fraction of the file size.
        const shrunk = this.crop(composed, 0, 0, composed.width, composed.height,
          this.pxFor(outW), this.pxFor(outH));
        pdf.addImage(this.encode(shrunk), this.FMT, o.margin, o.margin, outW, outH);
        this.footer(pdf, o, g, 1, 1);
        pdf.save(Exports.safeName('pdf'));
        App.toast('PDF downloaded');
        return;
      }

      // ---- tiled ----
      const srcPerPageW = g.bodyPtW / g.k * S;   // source px of chart per page
      const srcPerPageH = g.bodyPtH / g.k * S;

      let page = 0;
      for (let r = 0; r < g.rows; r++) {
        for (let c = 0; c < g.cols; c++) {
          if (page > 0) pdf.addPage([g.box.w, g.box.h], o.orientation === 'landscape' ? 'l' : 'p');
          page++;

          const sy = srcBodyY + r * srcPerPageH;
          const sh = Math.min(srcPerPageH, srcBodyY + srcBodyH - sy);
          const sx = srcChartX + c * srcPerPageW;
          const sw = Math.min(srcPerPageW, srcChartX + srcChartW - sx);
          if (sh <= 0 || sw <= 0) continue;

          let y = o.margin;

          // Target sizes on the page, then the pixels needed for them.
          const namesPt = o.repeatNames ? g.namesW : 0;
          const chartPt = sw / S * g.k;
          const bodyPtH = sh / S * g.k;

          // Title + date header, repeated on every vertical tile so a
          // page from the middle of the stack still says which weeks
          // it covers.
          const head = this.joinH(
            o.repeatNames ? this.crop(canvas, 0, 0, srcNamesW, srcBodyY, this.pxFor(namesPt), this.pxFor(g.headPt)) : null,
            this.crop(canvas, sx, 0, sw, srcBodyY, this.pxFor(chartPt), this.pxFor(g.headPt))
          );
          pdf.addImage(this.encode(head), this.FMT, o.margin, y, namesPt + chartPt, g.headPt);
          y += g.headPt;

          // Body: names column (repeated) + this tile of the chart.
          const body = this.joinH(
            o.repeatNames ? this.crop(canvas, 0, sy, srcNamesW, sh, this.pxFor(namesPt), this.pxFor(bodyPtH)) : null,
            this.crop(canvas, sx, sy, sw, sh, this.pxFor(chartPt), this.pxFor(bodyPtH))
          );
          pdf.addImage(this.encode(body), this.FMT, o.margin, y, namesPt + chartPt, bodyPtH);

          this.footer(pdf, o, g, page, g.pages, c, r);
        }
      }

      pdf.save(Exports.safeName('pdf'));
      App.toast(`PDF downloaded — ${g.pages} page(s)`);
    },

    /* "Page 3 of 8 · 12 Mar – 3 Apr" plus tile coordinates. A stack of
       printed sheets with no ordering is worse than one illegible one. */
    footer(pdf, o, g, page, total, c, r) {
      const box = g.box;
      pdf.setFontSize(8);
      pdf.setTextColor(110);
      const left = Model.project.name || 'Gantt chart';
      let right = `Page ${page} of ${total}`;
      if (total > 1 && c != null) right += `  (col ${c + 1}/${g.cols}, row ${r + 1}/${g.rows})`;

      // Date span covered by this tile, derived from the source columns.
      if (o.mode === 'tile' && c != null) {
        const rs = Render.rs;
        const pxPerPage = g.bodyPtW / g.k;
        const fromPx = g.x0 + c * pxPerPage;
        const toPx = Math.min(g.x1, fromPx + pxPerPage);
        const d0 = U.addDays(rs.origin, Math.floor(fromPx / rs.dayW));
        const d1 = U.addDays(rs.origin, Math.max(0, Math.ceil(toPx / rs.dayW) - 1));
        right = `${U.fmtShort(d0)} – ${U.fmtShort(d1)}   ·   ` + right;
      }
      pdf.text(left, o.margin, box.h - 12);
      pdf.text(right, box.w - o.margin, box.h - 12, { align: 'right' });
      pdf.setTextColor(0);
    },

    // ---- canvas helpers ----

    /* Crop, optionally resampling to a target pixel size.

       The source capture is 2x CSS pixels, which at a 40% tile scale
       works out to roughly 480 DPI on the page — six times more data
       than print needs, and it made the PDF slow to build and heavy to
       open. Tiles are resampled to PRINT_DPI instead, which is
       indistinguishable on paper and a fraction of the bytes. */
    crop(src, x, y, w, h, outW, outH) {
      const sw = Math.max(1, Math.round(w)), sh = Math.max(1, Math.round(h));
      const c = document.createElement('canvas');
      c.width = Math.max(1, Math.round(outW || sw));
      c.height = Math.max(1, Math.round(outH || sh));
      const ctx = c.getContext('2d');
      ctx.imageSmoothingQuality = 'high';
      ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, c.width, c.height);
      ctx.drawImage(src, Math.round(x), Math.round(y), sw, sh, 0, 0, c.width, c.height);
      return c;
    },

    /* JPEG at high quality, not PNG. A Gantt chart is flat colour on
       white, so PNG's lossless advantage is small while its size cost
       is large; at 150 dpi and q=0.92 the difference is invisible on
       paper and the file is an order of magnitude smaller. */
    FMT: 'JPEG',
    encode(canvas) { return canvas.toDataURL('image/jpeg', 0.92); },

    /** Pixels needed to render `pt` points at print resolution. */
    pxFor(pt) { return Math.max(1, Math.round(pt * (this.PRINT_DPI / 72))); },
    PRINT_DPI: 150,
    joinH(a, b) {
      if (!a) return b;
      if (!b) return a;
      const c = document.createElement('canvas');
      c.width = a.width + b.width;
      c.height = Math.max(a.height, b.height);
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, c.width, c.height);
      ctx.drawImage(a, 0, 0);
      ctx.drawImage(b, a.width, 0);
      return c;
    },

    // ---------------- dialog ----------------
    open() {
      App.openModal('Export PDF', (body) => {
        const o = this.opts();
        const rerender = () => { this.setOpts(o); summary.textContent = this.summary(o); };

        const row = (label, control) =>
          U.el('div', { class: 'pdf-row' }, [U.el('label', {}, label), control]);

        // paper + orientation
        const paper = U.el('select', { class: 'select' },
          Object.keys(PAPER).map(k => U.el('option', { value: k, selected: k === o.paper ? 'selected' : null }, PAPER[k].label)));
        paper.addEventListener('change', () => { o.paper = paper.value; rerender(); });
        body.appendChild(row('Paper size', paper));

        const orient = U.el('select', { class: 'select' }, [
          U.el('option', { value: 'landscape', selected: o.orientation === 'landscape' ? 'selected' : null }, 'Landscape'),
          U.el('option', { value: 'portrait', selected: o.orientation === 'portrait' ? 'selected' : null }, 'Portrait'),
        ]);
        orient.addEventListener('change', () => { o.orientation = orient.value; rerender(); });
        body.appendChild(row('Orientation', orient));

        // mode
        const mode = U.el('select', { class: 'select' }, [
          U.el('option', { value: 'tile', selected: o.mode === 'tile' ? 'selected' : null }, 'Tile across pages (readable)'),
          U.el('option', { value: 'fit', selected: o.mode === 'fit' ? 'selected' : null }, 'Fit onto one page'),
        ]);
        mode.addEventListener('change', () => { o.mode = mode.value; rerender(); scaleRow.hidden = o.mode !== 'tile'; });
        body.appendChild(row('Layout', mode));

        const auto = U.el('input', { type: 'checkbox', checked: o.scale ? null : 'checked' });
        const scale = U.el('input', {
          type: 'range', min: '40', max: '200', step: '5',
          value: this.effectiveScale(o), disabled: o.scale ? null : 'disabled',
        });
        const scaleVal = U.el('span', { class: 'pdf-scaleval' }, this.effectiveScale(o) + '%');
        const syncScale = () => {
          const s = this.effectiveScale(o);
          scale.value = s; scale.disabled = !o.scale;
          scaleVal.textContent = s + '%' + (o.scale ? '' : ' auto');
          rerender();
        };
        auto.addEventListener('change', () => {
          o.scale = auto.checked ? 0 : this.autoScale(o);
          syncScale();
        });
        scale.addEventListener('input', () => { o.scale = +scale.value; syncScale(); });
        const scaleRow = row('Scale', U.el('div', { class: 'pdf-scale' }, [
          U.el('label', { class: 'chk pdf-auto' }, [auto, U.el('span', {}, 'Auto')]),
          scale, scaleVal,
        ]));
        scaleRow.hidden = o.mode !== 'tile';
        body.appendChild(scaleRow);

        // date window
        const from = U.el('input', { type: 'date', class: 'cell-input', value: o.from || '' });
        const to = U.el('input', { type: 'date', class: 'cell-input', value: o.to || '' });
        from.addEventListener('change', () => { o.from = from.value; rerender(); });
        to.addEventListener('change', () => { o.to = to.value; rerender(); });
        body.appendChild(row('Date range', U.el('div', { class: 'pdf-range' }, [from, U.el('span', {}, '→'), to])));
        body.appendChild(U.el('p', { class: 'cal-note' }, 'Leave blank for the whole project. Useful for printing just the next few weeks.'));

        // toggles
        const deps = U.el('input', { type: 'checkbox', checked: o.showDeps ? 'checked' : null });
        deps.addEventListener('change', () => { o.showDeps = deps.checked; rerender(); });
        body.appendChild(U.el('label', { class: 'chk' }, [deps, U.el('span', {}, 'Show dependency arrows')]));

        const names = U.el('input', { type: 'checkbox', checked: o.repeatNames ? 'checked' : null });
        names.addEventListener('change', () => { o.repeatNames = names.checked; rerender(); });
        body.appendChild(U.el('label', { class: 'chk' }, [names, U.el('span', {}, 'Repeat task names on every page')]));

        const summary = U.el('p', { class: 'pdf-summary' }, this.summary(o));
        body.appendChild(summary);

        body.appendChild(U.el('button', {
          class: 'btn btn-primary pdf-go',
          onclick: () => { App.closeModal(); this.run().catch(e => App.toast('Export failed: ' + e.message)); },
        }, '⬇ Export PDF'));
      });
    },
  };

  window.ExportPdf = ExportPdf;
})();
