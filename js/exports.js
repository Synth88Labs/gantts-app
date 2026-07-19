/* ============================================================
   exports.js — PNG / PDF / XLSX / PPTX / CSV / JSON / print / link
   Exposes a global `Exports`.
   ============================================================ */
(function () {
  const Exports = {
    run(kind) {
      try {
        switch (kind) {
          case 'save': return this.save();
          case 'png': return this.png();
          case 'pdf': return (window.ExportPdf ? ExportPdf.open() : this.pdf());
          case 'pdf-quick': return this.pdf();
          case 'xlsx': return this.xlsx();
          case 'pptx': return this.pptx();
          case 'csv': return this.csv();
          case 'json': return this.json();
          case 'mspdi': return this.mspdi();
          case 'print': return this.print();
          case 'link': return this.link();
          case 'mermaid': return this.mermaid();
          case 'ics': return this.ics();
        }
      } catch (e) {
        console.error(e);
        App.toast('Export failed: ' + e.message);
      }
    },

    safeName(ext) {
      const n = (Model.project.name || 'gantt').replace(/[^\w\-]+/g, '_').replace(/^_+|_+$/g, '') || 'gantt';
      return n + '.' + ext;
    },

    /* Mermaid gantt text. Shown in a copyable box rather than only
       downloaded — the whole point is pasting it into a README or an
       issue, and a file in the Downloads folder is one step further
       from that than the clipboard is. */
    mermaid() {
      if (!window.MermaidGantt) throw new Error('Mermaid export is still loading — try again in a moment.');

      /* Criticality is computed, never asserted, so it has to be
         derived here rather than read off the tasks. */
      let critical = null;
      try {
        // Schedule.compute() returns `critical` as a Set of ids already.
        critical = Schedule.compute().critical || null;
      } catch (e) { critical = null; }

      const text = MermaidGantt.export(Model.project, { critical });
      App.openModal('Mermaid gantt', (body) => {
        body.appendChild(U.el('p', { class: 'muted' },
          'Paste this into GitHub, GitLab, Notion or Obsidian — they render Mermaid natively.'));

        const ta = U.el('textarea', { class: 'code-box', rows: 16, spellcheck: 'false' });
        ta.value = text;
        body.appendChild(ta);

        const row = U.el('div', { class: 'modal-actions' });
        row.appendChild(U.el('button', {
          class: 'btn btn-primary',
          onclick: () => {
            ta.select();
            const done = () => App.toast('Mermaid copied to clipboard');
            if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, () => document.execCommand('copy') && done());
            else { document.execCommand('copy'); done(); }
          },
        }, 'Copy to clipboard'));
        row.appendChild(U.el('button', {
          class: 'btn',
          onclick: () => { U.download(this.safeName('mmd'), text, 'text/plain;charset=utf-8'); },
        }, 'Download .mmd'));
        body.appendChild(row);

        body.appendChild(U.el('p', { class: 'muted small' },
          'Mermaid has no progress percentage, so 100% exports as "done" and anything in between as "active". '
          + 'Lags and SS/FF/SF links cannot be written as "after", so those tasks carry absolute dates instead.'));
      });
    },

    /* iCalendar. One-shot file, not a subscribable feed — see ics.js. */
    ics() {
      if (!window.ICS) throw new Error('Calendar export is still loading — try again in a moment.');
      const { text, count } = ICS.build(Model.project, {});
      if (!count) throw new Error('Nothing to export — this plan has no dated tasks yet.');
      U.download(this.safeName('ics'), text, 'text/calendar;charset=utf-8');
      App.toast(count + ' event(s) exported — import the file into your calendar');
    },

    // Build a full-size, unconstrained clone of the chart for image capture.
    buildExportNode() {
      const rs = Render.rs;
      const gridW = Model.project.settings.gridWidth;
      const headH = 56;

      const left = U.el('div', { style: { width: gridW + 'px', flex: 'none', borderRight: '1px solid #cbd5e1', background: '#fff' } });
      const gh = U.$('#gridHead').cloneNode(true); gh.style.height = headH + 'px';
      const gb = U.$('#gridBody').cloneNode(true);
      gb.style.height = rs.height + 'px'; gb.style.overflow = 'visible';
      left.appendChild(gh); left.appendChild(gb);

      const right = U.el('div', { style: { flex: 'none', width: rs.width + 'px', background: '#fff' } });
      const ch = U.$('#chartHead').cloneNode(true);
      ch.style.height = headH + 'px'; ch.style.width = rs.width + 'px'; ch.style.overflow = 'visible';
      const cc = U.$('#chartCanvas').cloneNode(true);
      cc.style.width = rs.width + 'px'; cc.style.height = rs.height + 'px';
      right.appendChild(ch); right.appendChild(cc);

      const title = U.el('div', { style: { padding: '10px 14px', font: '700 16px sans-serif', color: '#1e293b', borderBottom: '1px solid #e2e8f0', background: '#fff' } }, Model.project.name || 'Gantt Chart');
      const row = U.el('div', { style: { display: 'flex' } }, [left, right]);
      const wrap = U.el('div', { style: { position: 'fixed', left: '-99999px', top: '0', background: '#fff' } }, [title, row]);
      document.body.appendChild(wrap);
      return wrap;
    },

    async capture(scale) {
      if (!window.html2canvas) throw new Error('image library still loading — try again in a moment');
      const node = this.buildExportNode();
      try {
        const canvas = await html2canvas(node, { scale: scale || 2, backgroundColor: '#ffffff', logging: false, windowWidth: node.scrollWidth, windowHeight: node.scrollHeight });
        return canvas;
      } finally { node.remove(); }
    },

    async png() {
      App.toast('Rendering PNG…');
      const canvas = await this.capture(2);
      canvas.toBlob(b => { U.download(this.safeName('png'), b, 'image/png'); App.toast('PNG downloaded'); }, 'image/png');
    },

    async pdf() {
      if (!window.jspdf) throw new Error('PDF library still loading — try again in a moment');
      App.toast('Rendering PDF…');
      const canvas = await this.capture(2);
      const img = canvas.toDataURL('image/png');
      const { jsPDF } = window.jspdf;
      const landscape = canvas.width >= canvas.height;
      const pdf = new jsPDF({ orientation: landscape ? 'l' : 'p', unit: 'pt', format: 'a4' });
      const pw = pdf.internal.pageSize.getWidth();
      const ph = pdf.internal.pageSize.getHeight();
      const margin = 24;
      const availW = pw - margin * 2, availH = ph - margin * 2;
      const ratio = Math.min(availW / canvas.width, availH / canvas.height);
      const w = canvas.width * ratio, h = canvas.height * ratio;
      pdf.addImage(img, 'PNG', (pw - w) / 2, margin, w, h);
      pdf.save(this.safeName('pdf'));
      App.toast('PDF downloaded');
    },

    tableRows() {
      return Model.tasks().map(t => ({
        WBS: Render.wbs(t),
        Task: '  '.repeat(Model.depth(t)) + t.name,
        Type: t.type,
        Start: t.start,
        End: t.end,
        Days: U.duration(t.start, t.end),
        'Progress %': t.progress || 0,
        Assignee: t.assignee || '',
        Dependencies: (t.deps || []).map(d => { const f = Model.get(d.from); return f ? Render.wbs(f) + '(' + d.type + ')' : ''; }).filter(Boolean).join(', '),
        Notes: t.notes || '',
      }));
    },

    xlsx() {
      if (!window.XLSX) throw new Error('Excel library still loading — try again in a moment');
      const rows = this.tableRows();
      const ws = XLSX.utils.json_to_sheet(rows);
      ws['!cols'] = [{ wch: 6 }, { wch: 34 }, { wch: 10 }, { wch: 12 }, { wch: 12 }, { wch: 6 }, { wch: 10 }, { wch: 16 }, { wch: 18 }, { wch: 30 }];
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Tasks');
      // meta sheet
      const meta = XLSX.utils.aoa_to_sheet([['Project', Model.project.name], ['Exported', new Date().toLocaleString()], ['Tasks', rows.length], ['Made with', 'gantts.app']]);
      XLSX.utils.book_append_sheet(wb, meta, 'Info');
      XLSX.writeFile(wb, this.safeName('xlsx'));
      App.toast('Excel downloaded');
    },

    async pptx() {
      if (!window.PptxGenJS) throw new Error('PowerPoint library still loading — try again in a moment');
      App.toast('Building PowerPoint…');
      const canvas = await this.capture(2);
      const data = canvas.toDataURL('image/png');
      const pptx = new PptxGenJS();
      pptx.defineLayout({ name: 'WIDE', width: 13.333, height: 7.5 });
      pptx.layout = 'WIDE';

      // title slide
      const s1 = pptx.addSlide();
      s1.background = { color: '2563EB' };
      s1.addText(Model.project.name || 'Project Timeline', { x: 0.6, y: 2.6, w: 12, h: 1.2, fontSize: 40, bold: true, color: 'FFFFFF' });
      s1.addText('Project timeline · ' + new Date().toLocaleDateString(), { x: 0.6, y: 3.9, w: 12, h: 0.6, fontSize: 18, color: 'DBEAFE' });

      // chart slide (image fit)
      const s2 = pptx.addSlide();
      s2.addText(Model.project.name || 'Gantt Chart', { x: 0.4, y: 0.2, w: 12.5, h: 0.5, fontSize: 20, bold: true, color: '1E293B' });
      const maxW = 12.5, maxH = 6.3, ox = 0.4, oy = 0.9;
      const ratio = Math.min(maxW / canvas.width, maxH / canvas.height);
      const w = canvas.width * ratio, h = canvas.height * ratio;
      s2.addImage({ data, x: ox + (maxW - w) / 2, y: oy, w, h });

      // table slide
      const s3 = pptx.addSlide();
      s3.addText('Task Schedule', { x: 0.4, y: 0.2, w: 12, h: 0.5, fontSize: 20, bold: true, color: '1E293B' });
      const header = ['#', 'Task', 'Start', 'End', 'Days', '%', 'Owner'];
      const body = this.tableRows().slice(0, 22).map(r => [r.WBS, r.Task.trim(), r.Start, r.End, '' + r.Days, '' + r['Progress %'], r.Assignee]);
      const tableRows = [header.map(h => ({ text: h, options: { bold: true, color: 'FFFFFF', fill: '2563EB' } })), ...body];
      s3.addTable(tableRows, { x: 0.4, y: 0.9, w: 12.5, fontSize: 10, border: { type: 'solid', color: 'E2E8F0', pt: 0.5 }, color: '1E293B' });

      // Generate a blob and download it ourselves — more reliable across browsers
      // than pptx.writeFile (which can silently no-op in some sandboxed contexts).
      const blob = await pptx.write({ outputType: 'blob' });
      U.download(this.safeName('pptx'), blob, 'application/vnd.openxmlformats-officedocument.presentationml.presentation');
      App.toast('PowerPoint downloaded');
    },

    csv() {
      const rows = this.tableRows();
      const cols = Object.keys(rows[0] || { WBS: '', Task: '' });
      const esc = v => { v = String(v == null ? '' : v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
      const csv = [cols.join(',')].concat(rows.map(r => cols.map(c => esc(r[c])).join(','))).join('\n');
      U.download(this.safeName('csv'), '﻿' + csv, 'text/csv;charset=utf-8');
      App.toast('CSV downloaded');
    },

    // Save the whole project as a .gantts file (JSON inside). Re-open it later
    // with the "Open" button / Import — it restores everything exactly.
    // Legacy .gantt files still open fine (see Templates.importFile).
    save() {
      U.download(this.safeName('gantts'), JSON.stringify(Model.project), 'application/json');
      App.toast('Saved to ' + this.safeName('gantts') + ' — reopen it any time with “Open”');
    },

    /* MS Project XML. Not .mpp: that format is undocumented and every
       browser route to it uploads the user's file to a third-party
       service, which this app does not do. MSPDI is Microsoft's own
       published schema and opens natively via File > Open. */
    mspdi() {
      if (!window.MSProject) throw new Error('MS Project export is unavailable.');
      U.download(this.safeName('xml'), MSProject.export(Model.project), 'application/xml');
      App.toast('MS Project XML downloaded — open it in MS Project with File › Open');
    },

    json() {
      U.download(this.safeName('json'), JSON.stringify(Model.project, null, 2), 'application/json');
      App.toast('JSON downloaded');
    },

    async print() {
      App.toast('Preparing print…');
      const canvas = await this.capture(2);
      const img = canvas.toDataURL('image/png');
      const w = window.open('', '_blank');
      w.document.write(`<html><head><title>${U.escapeHtml(Model.project.name)}</title>
        <style>@page{margin:12mm} body{margin:0} img{width:100%}</style></head>
        <body><img src="${img}" onload="window.print()"/></body></html>`);
      w.document.close();
    },

    link() {
      const url = Model.shareLink();
      navigator.clipboard && navigator.clipboard.writeText(url).then(
        () => App.toast('Shareable link copied to clipboard'),
        () => this._showLink(url)
      );
      if (!navigator.clipboard) this._showLink(url);
    },
    _showLink(url) {
      App.openModal('Shareable link', (body) => {
        body.appendChild(U.el('p', {}, 'Copy this link — it contains your whole chart (no server needed):'));
        const ta = U.el('textarea', { style: { width: '100%', height: '90px' }, readonly: 'true' }, url);
        body.appendChild(ta); ta.select();
      });
    },
  };

  window.Exports = Exports;
})();
