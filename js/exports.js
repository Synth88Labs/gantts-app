/* ============================================================
   exports.js — PNG / PDF / XLSX / PPTX / CSV / JSON / print / link
   Exposes a global `Exports`.
   ============================================================ */
(function () {
  const Exports = {
    run(kind) {
      try {
        /* Several of these are async (png, pdf, link). A sync try/catch
           does not see a rejected promise, so a failure inside them
           used to surface as an unhandled rejection in the console and
           nothing at all in the interface — the user clicked Export and
           watched it do nothing. Route any returned promise through the
           same reporting path. */
        const r = this._dispatch(kind);
        if (r && typeof r.then === 'function') {
          r.catch((e) => {
            console.error(e);
            App.toast(App.T('ex.failed', 'Export failed') + ': ' + (e && e.message ? e.message : e));
          });
        }
        return r;
      } catch (e) {
        console.error(e);
        App.toast(App.T('ex.failed', 'Export failed') + ': ' + e.message);
      }
    },

    _dispatch(kind) {
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
          case 'copy': return this.copyImage();
          case 'share': return this.shareImage();
          case 'svg': return this.svg();
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
      App.openModal(App.T('ex.mermaidTitle', 'Mermaid gantt'), (body) => {
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
            const done = () => App.toast(App.T('ex.mermaidCopied', 'Mermaid copied to clipboard'));
            if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, () => document.execCommand('copy') && done());
            else { document.execCommand('copy'); done(); }
          },
        }, App.T('ex.copyClipboard', 'Copy to clipboard')));
        row.appendChild(U.el('button', {
          class: 'btn',
          onclick: () => { U.download(this.safeName('mmd'), text, 'text/plain;charset=utf-8'); },
        }, App.T('ex.downloadMmd', 'Download .mmd')));
        body.appendChild(row);

        body.appendChild(U.el('p', { class: 'muted small' },
          'Mermaid has no progress percentage, so 100% exports as "done" and anything in between as "active". '
          + 'Lags and SS/FF/SF links cannot be written as "after", so those tasks carry absolute dates instead.'));
      });
    },

    /* Vector export, redrawn from the model rather than serialised
       from the DOM — see the header of export-svg.js for why the
       obvious approaches do not work. */
    svg() {
      if (!window.ExportSvg) throw new Error('SVG export is still loading — try again in a moment.');

      // Criticality is computed here, never read off the tasks.
      let critical = null;
      try { critical = Schedule.compute().critical || null; } catch (e) { critical = null; }

      const st = Model.project.settings || {};
      const r = ExportSvg.build(Model.project, {
        critical,
        cal: (window.Cal && Cal.active(Cal.of(Model.project))) ? Cal.of(Model.project) : null,
        dayW: { day: 26, week: 12, month: 5, quarter: 3 }[st.zoom] || 12,
        showProgress: st.showProgress !== false,
        showWeekends: st.showWeekends !== false,
        showToday: st.showToday !== false,
        showCritical: !!st.showCritical,
        today: U.today(),
        title: Model.project.name,
      });

      if (r.empty) throw new Error(App.T('ex.svgEmpty', 'Nothing to export — this plan has no dated tasks yet.'));

      U.download(this.safeName('svg'), r.svg, 'image/svg+xml;charset=utf-8');
      App.toast(App.T('ex.svgDone', 'SVG downloaded — vector, so it stays sharp at any size'));
    },

    /* iCalendar. One-shot file, not a subscribable feed — see ics.js. */
    ics() {
      if (!window.ICS) throw new Error('Calendar export is still loading — try again in a moment.');
      const { text, count } = ICS.build(Model.project, {});
      if (!count) throw new Error('Nothing to export — this plan has no dated tasks yet.');
      U.download(this.safeName('ics'), text, 'text/calendar;charset=utf-8');
      App.toast(App.Tn('ex.icsDoneN', '{n} event(s) exported — import the file into your calendar', { n: count }));
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
      App.toast(App.T('ex.renderingPng', 'Rendering PNG…'));
      const canvas = await this.capture(2);
      canvas.toBlob(b => { U.download(this.safeName('png'), b, 'image/png'); App.toast(App.T('ex.pngDone', 'PNG downloaded')); }, 'image/png');
    },

    async pdf() {
      if (!window.jspdf) throw new Error('PDF library still loading — try again in a moment');
      App.toast(App.T('ex.renderingPdf', 'Rendering PDF…'));
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
      App.toast(App.T('ex.pdfDone', 'PDF downloaded'));
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
      App.toast(App.T('ex.xlsxDone', 'Excel downloaded'));
    },

    async pptx() {
      if (!window.PptxGenJS) throw new Error('PowerPoint library still loading — try again in a moment');
      App.toast(App.T('ex.buildingPptx', 'Building PowerPoint…'));
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
      App.toast(App.T('ex.pptxDone', 'PowerPoint downloaded'));
    },

    csv() {
      const rows = this.tableRows();
      const cols = Object.keys(rows[0] || { WBS: '', Task: '' });
      const esc = v => { v = String(v == null ? '' : v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
      const csv = [cols.join(',')].concat(rows.map(r => cols.map(c => esc(r[c])).join(','))).join('\n');
      U.download(this.safeName('csv'), '﻿' + csv, 'text/csv;charset=utf-8');
      App.toast(App.T('ex.csvDone', 'CSV downloaded'));
    },

    // Save the whole project as a .gantts file (JSON inside). Re-open it later
    // with the "Open" button / Import — it restores everything exactly.
    // Legacy .gantt files still open fine (see Templates.importFile).
    /* Save in place where the browser allows it.

       showSaveFilePicker gives us a handle we can write to again, so
       the second save overwrites the first file instead of dropping
       plan(1).gantts, plan(2).gantts... into Downloads. The handle
       lives for the session only — persisting it would need IndexedDB
       and a permission re-prompt on every reload, which is more
       friction than the feature saves.

       Firefox and Safari have no File System Access API, so they fall
       through to the download path and behave exactly as before. */
    _fileHandle: null,

    async save() {
      const json = JSON.stringify(Model.project);
      const name = this.safeName('gantts');

      if (window.showSaveFilePicker) {
        try {
          if (!this._fileHandle) {
            this._fileHandle = await showSaveFilePicker({
              suggestedName: name,
              types: [{
                description: 'gantts.app project',
                accept: { 'application/json': ['.gantts', '.json'] },
              }],
            });
          }
          const w = await this._fileHandle.createWritable();
          await w.write(json);
          await w.close();
          App.toast(App.Tn('ex.savedToN', 'Saved to {f} — reopen it any time with “Open”',
            { f: this._fileHandle.name || name }));
          return;
        } catch (e) {
          /* AbortError means the user dismissed the picker — that is a
             decision, not a failure, so say nothing and do not fall
             back to a download they did not ask for. */
          if (e && e.name === 'AbortError') return;
          this._fileHandle = null;   // handle went stale; fall through
        }
      }

      U.download(name, json, 'application/json');
      App.toast(App.Tn('ex.savedToN', 'Saved to {f} — reopen it any time with “Open”', { f: name }));
    },

    /* Copy the chart straight to the clipboard.

       THE SAFARI CONSTRAINT, which is the whole reason this looks odd:
       Safari requires the ClipboardItem to be constructed with a
       PROMISE of the blob, synchronously inside the user gesture. Await
       the blob first and then call clipboard.write and Safari has
       already decided the gesture expired — it rejects with
       NotAllowedError. Chrome accepts either form, so testing only in
       Chrome hides this completely. */
    async copyImage() {
      if (!navigator.clipboard || !window.ClipboardItem) {
        throw new Error(App.T('ex.noClipboard',
          'This browser cannot copy images to the clipboard — use PNG export instead.'));
      }
      App.toast(App.T('ex.copying', 'Copying chart…'));

      const blobPromise = this.capture(2).then(canvas => new Promise((resolve, reject) => {
        canvas.toBlob(b => b ? resolve(b) : reject(new Error('could not render the image')), 'image/png');
      }));

      try {
        // Note the promise is handed to ClipboardItem, not its result.
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blobPromise })]);
        App.toast(App.T('ex.copied', 'Chart copied — paste it into any document or chat'));
      } catch (e) {
        /* The clipboard can refuse for reasons that have nothing to do
           with this code: a permissions policy, an insecure context, a
           window that lost focus between the click and the write. The
           user asked for their chart, so give them the chart — a
           download is a worse answer than the clipboard but a far
           better one than an error message. */
        if (e && (e.name === 'NotAllowedError' || e.name === 'SecurityError')) {
          const blob = await blobPromise;
          U.download(this.safeName('png'), blob, 'image/png');
          App.toast(App.T('ex.clipboardBlocked',
            'The browser blocked clipboard access — the image was downloaded instead'));
          return;
        }
        throw e;
      }
    },

    /* The system share sheet, which on a phone is how anything actually
       leaves the device. canShare({files}) has to be asked before
       share() — desktop Chrome exposes navigator.share and then refuses
       files, so feature-detecting on share() alone fails at the worst
       moment. */
    async shareImage() {
      const canvas = await this.capture(2);
      const blob = await new Promise((res, rej) =>
        canvas.toBlob(b => b ? res(b) : rej(new Error('could not render the image')), 'image/png'));
      const file = new File([blob], this.safeName('png'), { type: 'image/png' });

      if (!navigator.canShare || !navigator.canShare({ files: [file] })) {
        U.download(this.safeName('png'), blob, 'image/png');
        App.toast(App.T('ex.noShare', 'Sharing is not available here — the image was downloaded instead'));
        return;
      }
      try {
        await navigator.share({ files: [file], title: Model.project.name || 'Gantt chart' });
      } catch (e) {
        if (e && e.name === 'AbortError') return;   // user closed the sheet
        throw e;
      }
    },

    /* MS Project XML. Not .mpp: that format is undocumented and every
       browser route to it uploads the user's file to a third-party
       service, which this app does not do. MSPDI is Microsoft's own
       published schema and opens natively via File > Open. */
    mspdi() {
      if (!window.MSProject) throw new Error('MS Project export is unavailable.');
      U.download(this.safeName('xml'), MSProject.export(Model.project), 'application/xml');
      App.toast(App.T('ex.mspdiDone', 'MS Project XML downloaded — open it in MS Project with File › Open'));
    },

    json() {
      U.download(this.safeName('json'), JSON.stringify(Model.project, null, 2), 'application/json');
      App.toast(App.T('ex.jsonDone', 'JSON downloaded'));
    },

    async print() {
      App.toast(App.T('ex.printing', 'Preparing print…'));
      const canvas = await this.capture(2);
      const img = canvas.toDataURL('image/png');
      const w = window.open('', '_blank');
      /* No inline onload here. A blank window opened this way is
         same-origin and inherits our Content Security Policy, so an
         inline handler would be blocked the moment the CSP is enforced
         — and print would fail silently, since nothing else calls
         print(). Binding from this side keeps it working and keeps
         'unsafe-inline' out of script-src. */
      w.document.write(`<html><head><title>${U.escapeHtml(Model.project.name)}</title>
        <style>@page{margin:12mm} body{margin:0} img{width:100%}</style></head>
        <body><img src="${img}"/></body></html>`);
      w.document.close();

      const shot = w.document.querySelector('img');
      // A data: URL can already be decoded by the time we get here, in
      // which case 'load' has been and gone and would never fire.
      if (!shot || shot.complete) w.print();
      else shot.addEventListener('load', () => w.print(), { once: true });
    },

    async link() {
      const r = await Model.shareLink();

      /* Over the limit the link will be truncated somewhere between
         here and the recipient, and they will open a page that does
         nothing. Say so and offer the file instead, rather than copying
         something that looks fine and is not. */
      if (r.tooLong) {
        App.openModal(App.T('ex.tooBigTitle', 'This plan is too big for a link'), (body) => {
          body.appendChild(U.el('p', {},
            `The link would be ${r.length.toLocaleString()} characters. Mail clients, chat apps and `
            + `some proxies truncate long URLs, so the person you send it to would open an empty editor.`));
          body.appendChild(U.el('p', { class: 'muted' },
            'Send them the project file instead — it opens with the Open button and has no size limit.'));
          const row = U.el('div', { class: 'modal-actions' });
          row.appendChild(U.el('button', {
            class: 'btn btn-primary',
            onclick: () => { App.closeModal(); Exports.run('save'); },
          }, App.T('ex.downloadFile', 'Download the project file')));
          row.appendChild(U.el('button', {
            class: 'btn',
            onclick: () => { App.closeModal(); Exports._showLink(r.url); },
          }, App.T('ex.copyAnyway', 'Copy the long link anyway')));
          body.appendChild(row);
        });
        return;
      }

      if (navigator.clipboard) {
        navigator.clipboard.writeText(r.url).then(
          () => App.toast(App.T('ex.linkCopied', 'Shareable link copied — anyone with it can open this plan')),
          () => this._showLink(r.url)
        );
      } else {
        this._showLink(r.url);
      }
    },
    _showLink(url) {
      App.openModal(App.T('ex.linkTitle', 'Shareable link'), (body) => {
        body.appendChild(U.el('p', {}, 'Copy this link — it contains your whole chart (no server needed):'));
        const ta = U.el('textarea', { style: { width: '100%', height: '90px' }, readonly: 'true' }, url);
        body.appendChild(ta); ta.select();
      });
    },
  };

  window.Exports = Exports;
})();
