/* ============================================================
   app.js — wiring: toolbar, menus, drawer, modal, keyboard, scroll sync
   Exposes a global `App`.
   ============================================================ */
(function () {
  const App = {
    init() {
      Render.init();
      Model.init();

      this.wireTopbar();
      this.wireToolbar();
      this.wireDrawer();
      this.wireModal();
      this.wireScrollSync();
      this.wireSplitter();
      this.wireKeyboard();

      Model.on('load', (p) => {
        this.syncControls();
        const wl = U.$('#workload');
        if (wl) {
          wl.hidden = !p.settings.showWorkload;
          const b = U.$('#workloadBtn');
          if (b) b.classList.toggle('is-on', !!p.settings.showWorkload);
        }
        this.render();
      });
      Model.on('change', () => this.render());
      // The banner disappears the moment the sample becomes their plan.
      Model.on('sampleadopted', () => this.syncSampleNote());
      /* A share link that will not decode is almost always one that
         got truncated in transit. Naming that is the difference
         between blaming the link and blaming the tool. */
      Model.on('sharefailed', () => this.toast(
        'That shared link could not be opened — it was probably cut short when it was sent. Ask for the project file instead.'));
      Model.on('select', () => { this.render(); this.refreshDrawer(); });
      Model.on('history', () => this.syncHistoryButtons());
      Model.on('saved', () => this.flashSaved());
      // A save that did not happen must never be silent — this is the
      // only warning a user gets before they lose work.
      Model.on('savefailed', (info) => this.showSaveError(info));

      this.render();
      this.syncControls();
      this.syncHistoryButtons();

      if (window.Features) Features.init();
    },

    render() {
      Render.render();
      this.applyGridWidth();
      this.applyFont();
      this.renderWorkload();
      this.renderViewNote();
      this.refreshChartSummary();
      this.syncSampleNote();
    },

    syncSampleNote() {
      const n = U.$('#sampleNote');
      if (n) n.hidden = !Model._sample;
    },

    // ---------------- view modes ----------------

    /* A filtered chart must announce itself. Without this strip the
       lookahead is indistinguishable from a plan that has lost most of
       its tasks, which is a genuinely alarming thing to open. */
    renderViewNote() {
      const note = U.$('#viewNote');
      if (!note || typeof Views === 'undefined') return;
      const v = Views.of(Model.project);
      note.hidden = !Views.active(v);
      if (note.hidden) return;

      const isLook = v.mode === 'lookahead';
      const shown = (Render.rs && Render.rs.visible ? Render.rs.visible : []).filter(t => !t._context).length;
      const txt = U.$('#viewNoteText');
      if (txt) {
        txt.textContent = isLook
          ? `${Views.label(v, U.today())} — showing ${shown} task${shown === 1 ? '' : 's'} of ${Model.tasks().length}`
          : `Milestones only — showing ${shown} of ${Model.tasks().length}`;
      }
      // The week arrows only mean anything for a date window.
      ['#viewNotePrev', '#viewNoteNext', '#viewNoteToday'].forEach(sel => {
        const b = U.$(sel); if (b) b.hidden = !isLook;
      });
    },

    _setView(patch) {
      const v = Object.assign(Views.of(Model.project), patch);
      Model.project.settings.view = v;
      Model.save();
      this.syncViewControls();
      this.render();
    },

    setViewMode(mode) {
      /* Switching into a lookahead resets the anchor to "follow today".
         A stale anchor from three months ago would open on a window the
         user has to notice and correct, which is exactly the kind of
         silently-wrong state this view exists to avoid. */
      this._setView(mode === 'lookahead' ? { mode, anchor: null } : { mode });
      if (mode === 'lookahead') this.scrollToToday();
    },
    setViewWeeks(weeks) { this._setView({ weeks }); },
    setViewAnchor(anchor) { this._setView({ anchor }); },

    syncViewControls() {
      if (typeof Views === 'undefined') return;
      const v = Views.of(Model.project);
      const sel = U.$('#viewSelect');
      if (sel) sel.value = v.mode;
      const weeks = U.$('#viewWeeks');
      if (weeks) { weeks.hidden = v.mode !== 'lookahead'; weeks.value = String(v.weeks); }
    },

    /* Auto-schedule has existed in schedule.js since the CPM work and
       has never had a way to run it. */
    autoSchedule() {
      if (!window.Schedule || !Schedule.autoSchedule) return;
      if (!Model.tasks().length) { this.toast('Nothing to schedule yet'); return; }
      // autoSchedule takes its own snapshot and commits — do not wrap it.
      const moved = Schedule.autoSchedule();
      this.toast(moved
        ? `Rescheduled ${moved} task${moved === 1 ? '' : 's'} to the earliest date dependencies allow — Ctrl+Z to undo`
        : 'Every task already starts as early as its dependencies allow');
    },

    applyGridWidth() {
      document.documentElement.style.setProperty('--grid-w', Model.project.settings.gridWidth + 'px');
    },

    applyFont() {
      const f = Model.project.settings.chartFont || 'var(--font)';
      U.$('#gantt').style.setProperty('--gantt-font', f);
    },

    // ---------------- topbar ----------------
    wireTopbar() {
      U.$('#projectName').addEventListener('change', (e) => { Model.project.name = e.target.value || 'Untitled Project'; Model.save(); });
      U.$('#projectName').value = Model.project.name;

      this.wireMenu('#exportBtn', '#exportMenu');
      U.$('#exportMenu').addEventListener('click', (e) => {
        const kind = e.target.getAttribute('data-export');
        if (kind) { this.closeMenus(); Exports.run(kind); }
      });

      U.$('#projectsBtn').addEventListener('click', (e) => { e.stopPropagation(); this.openProjects(); });
      const saveBtn = U.$('#saveBtn'); if (saveBtn) saveBtn.addEventListener('click', () => Exports.run('save'));
      U.$('#importBtn').addEventListener('click', () => U.$('#fileInput').click());
      U.$('#fileInput').addEventListener('change', (e) => { if (e.target.files[0]) { Templates.importFile(e.target.files[0]); e.target.value = ''; } });
    },

    wireMenu(btnSel, panelSel) {
      const btn = U.$(btnSel), panel = U.$(panelSel);
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = !panel.hidden;
        this.closeMenus();
        panel.hidden = open;
      });
      document.addEventListener('click', () => { panel.hidden = true; });
    },
    closeMenus() { U.$$('.menu-panel').forEach(p => p.hidden = true); },

    // ---------------- toolbar ----------------
    wireToolbar() {
      U.$('#addTaskBtn').addEventListener('click', () => Model.addTask({ type: 'task' }));
      U.$('#addMilestoneBtn').addEventListener('click', () => Model.addTask({ type: 'milestone' }));
      U.$('#addGroupBtn').addEventListener('click', () => Model.addTask({ type: 'group' }));
      U.$('#indentBtn').addEventListener('click', () => Model.selectedId && Model.indent(Model.selectedId));
      U.$('#outdentBtn').addEventListener('click', () => Model.selectedId && Model.outdent(Model.selectedId));
      U.$('#deleteTaskBtn').addEventListener('click', () => Model.selectedId && Model.remove(Model.selectedId));

      U.$('#undoBtn').addEventListener('click', () => Model.undo());
      U.$('#redoBtn').addEventListener('click', () => Model.redo());

      U.$('#zoomSelect').addEventListener('change', (e) => { Model.project.settings.zoom = e.target.value; Model.save(); this.render(); });

      const fontSel = U.$('#fontSelect');
      if (fontSel) fontSel.addEventListener('change', (e) => { Model.project.settings.chartFont = e.target.value; Model.save(); this.applyFont(); });

      const tog = (id, key) => U.$(id).addEventListener('change', (e) => { Model.project.settings[key] = e.target.checked; Model.save(); this.render(); });
      tog('#toggleCritical', 'showCritical');
      tog('#toggleWeekends', 'showWeekends');
      tog('#toggleProgress', 'showProgress');
      tog('#toggleToday', 'showToday');

      U.$('#templatesBtn').addEventListener('click', () => this.openTemplates());
      const calBtn = U.$('#calendarBtn');
      if (calBtn) calBtn.addEventListener('click', () => this.openCalendar());
      const wlBtn = U.$('#workloadBtn');
      if (wlBtn) wlBtn.addEventListener('click', () => this.toggleWorkload());
      U.$('#fitBtn').addEventListener('click', () => this.fit());
      U.$('#todayBtn').addEventListener('click', () => this.scrollToToday());

      // columns chooser
      const colBtn = U.$('#columnsBtn');
      if (colBtn) {
        const menu = U.$('#columnsMenu');
        menu.addEventListener('click', (e) => e.stopPropagation());
        colBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const open = !menu.hidden;
          this.closeMenus();
          if (open) { menu.hidden = true; return; }
          this.buildColumnsMenu();
          menu.hidden = false;
        });
        document.addEventListener('click', () => { menu.hidden = true; });
      }

      const baseBtn = U.$('#baselineBtn');
      if (baseBtn) {
        const menu = U.$('#baselineMenu');
        menu.addEventListener('click', (e) => e.stopPropagation());
        baseBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const open = !menu.hidden;
          this.closeMenus();
          if (open) { menu.hidden = true; return; }
          this.buildBaselineMenu();
          menu.hidden = false;
        });
        document.addEventListener('click', () => { menu.hidden = true; });
      }

      // ---- view mode, S-curve, auto-schedule ----
      const vSel = U.$('#viewSelect');
      if (vSel) vSel.addEventListener('change', () => this.setViewMode(vSel.value));
      const vWeeks = U.$('#viewWeeks');
      if (vWeeks) vWeeks.addEventListener('change', () => this.setViewWeeks(Number(vWeeks.value)));

      const scBtn = U.$('#scurveBtn');
      if (scBtn) scBtn.addEventListener('click', () => this.openSCurve());

      const tvBtn = U.$('#tableViewBtn');
      if (tvBtn) tvBtn.addEventListener('click', () => this.openTableView());

      const sClear = U.$('#sampleClear');
      if (sClear) sClear.addEventListener('click', () => {
        Model.newProject('Untitled Project');
        this.toast('Blank plan ready');
      });
      const sTpl = U.$('#sampleTemplates');
      if (sTpl) sTpl.addEventListener('click', () => this.openTemplates());

      const asBtn = U.$('#autoScheduleBtn');
      if (asBtn) asBtn.addEventListener('click', () => this.autoSchedule());

      // The strip above the chart that says which view is active.
      const nudge = (weeks) => {
        const v = Views.of(Model.project);
        const base = v.anchor || U.weekStart(U.today());
        this.setViewAnchor(U.addDays(base, weeks * 7));
      };
      const bind = (sel, fn) => { const b = U.$(sel); if (b) b.addEventListener('click', fn); };
      bind('#viewNotePrev', () => nudge(-1));
      bind('#viewNoteNext', () => nudge(1));
      bind('#viewNoteToday', () => this.setViewAnchor(null));
      bind('#viewNoteClear', () => this.setViewMode('all'));

      // empty-state buttons
      U.$('#emptyAddTask').addEventListener('click', () => Model.addTask({ type: 'task' }));
      U.$('#emptyTemplates').addEventListener('click', () => this.openTemplates());
    },

    buildColumnsMenu() {
      const menu = U.$('#columnsMenu'); U.clear(menu);
      menu.appendChild(U.el('div', { class: 'menu-title' }, 'Show columns'));
      const cur = Model.project.settings.columns || [];
      const reg = Render.columns();
      Render.ALL_COLUMN_KEYS.forEach(key => {
        if (key === 'name') return;
        const checked = cur.indexOf(key) >= 0;
        const label = U.el('label', { class: 'col-toggle' }, [
          U.el('input', { type: 'checkbox', checked: checked ? 'checked' : null, onchange: (e) => this.toggleColumn(key, e.target.checked) }),
          U.el('span', {}, Render.colLabel(Object.assign({ key }, reg[key]))),
        ]);
        menu.appendChild(label);
      });
      menu.appendChild(U.el('div', { class: 'menu-sep' }));
      menu.appendChild(U.el('div', { class: 'menu-title' }, 'Width'));
      menu.appendChild(U.el('button', { class: 'menu-act', onclick: () => { Render.autoFitAll(); this.toast('Columns fitted to contents'); } }, '↔ Fit all columns to contents'));
      menu.appendChild(U.el('button', { class: 'menu-act', onclick: () => { Render.resetColWidths(); this.toast('Column widths reset'); } }, '⟲ Reset column widths'));
      menu.appendChild(U.el('div', { class: 'menu-hint' }, 'Tip: drag a column edge to resize, or double-click it to fit.'));
    },

    buildBaselineMenu() {
      const menu = U.$('#baselineMenu'); U.clear(menu);
      const has = Model.hasBaseline();
      menu.appendChild(U.el('div', { class: 'menu-title' }, 'Baseline'));
      if (has) {
        const d = new Date(Model.project.baseline.savedAt);
        menu.appendChild(U.el('div', { class: 'menu-hint' }, 'Set ' + d.toLocaleDateString() + ' at ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })));
        const show = Model.project.settings.showBaseline !== false;
        menu.appendChild(U.el('label', { class: 'col-toggle' }, [
          U.el('input', { type: 'checkbox', checked: show ? 'checked' : null, onchange: (e) => {
            Model.project.settings.showBaseline = e.target.checked; Model.save(); this.render();
          } }),
          U.el('span', {}, 'Show baseline on chart'),
        ]));
        menu.appendChild(U.el('button', { class: 'menu-act', onclick: () => {
          Model.setBaseline(); this.toast('Baseline updated to the current plan');
        } }, '⟳ Re-baseline to current plan'));
        menu.appendChild(U.el('button', { class: 'menu-act', onclick: () => {
          this.showVarianceColumns(); this.toast('Showing baseline & variance columns');
        } }, '▦ Show variance columns'));
        menu.appendChild(U.el('div', { class: 'menu-sep' }));
        menu.appendChild(U.el('button', { class: 'menu-act', onclick: () => {
          Model.clearBaseline(); this.toast('Baseline cleared');
        } }, '✕ Clear baseline'));
      } else {
        menu.appendChild(U.el('div', { class: 'menu-hint' }, 'Freeze today’s dates as the plan of record, then track how far each task drifts from it.'));
        menu.appendChild(U.el('button', { class: 'menu-act', onclick: () => {
          Model.setBaseline(); this.toast('Baseline set — slippage now tracked against this plan');
        } }, '◳ Set baseline from current plan'));
      }
    },
    // turn on the tracking columns in one click
    showVarianceColumns() {
      const order = Render.ALL_COLUMN_KEYS;
      const cols = (Model.project.settings.columns || []).slice();
      ['baseStart', 'baseEnd', 'startVar', 'finishVar'].forEach(k => { if (cols.indexOf(k) < 0) cols.push(k); });
      cols.sort((a, b) => order.indexOf(a) - order.indexOf(b));
      Model.project.settings.columns = cols;
      Model.save(); this.render(); this.buildColumnsMenu();
    },
    toggleColumn(key, on) {
      const order = Render.ALL_COLUMN_KEYS;
      let cols = (Model.project.settings.columns || []).slice();
      if (on) { if (cols.indexOf(key) < 0) { cols.push(key); cols.sort((a, b) => order.indexOf(a) - order.indexOf(b)); } }
      else cols = cols.filter(k => k !== key);
      if (cols.indexOf('name') < 0) cols.unshift('name');
      Model.project.settings.columns = cols;
      Model.save();
      this.render();
    },

    syncControls() {
      U.$('#projectName').value = Model.project.name;
      const s = Model.project.settings;
      U.$('#zoomSelect').value = s.zoom;
      U.$('#toggleCritical').checked = s.showCritical;
      U.$('#toggleWeekends').checked = s.showWeekends;
      U.$('#toggleProgress').checked = s.showProgress;
      U.$('#toggleToday').checked = s.showToday;
      const fontSel = U.$('#fontSelect'); if (fontSel) fontSel.value = s.chartFont || 'var(--font)';
      this.syncViewControls();
      this.applyGridWidth();
      this.applyFont();
    },

    // ---------------- accessible alternatives ----------------

    /* A plain table of the plan.

       This is the most useful accessibility feature in the app and the
       cheapest. A bar chart is a spatial encoding; a screen reader
       cannot convey position and length, so no amount of ARIA on the
       bars makes the CHART readable — it makes the bars readable one at
       a time. A table gives the same information in a form the reader
       was designed for, and many users will work only from this.

       It is also the honest print view and the thing people paste into
       an email, so it earns its place twice over. */
    openTableView() {
      this.openModal('Plan as a table', (body) => {
        const tasks = Model.tasks();
        if (!tasks.length) {
          body.appendChild(U.el('p', { class: 'muted' }, 'Nothing to show yet — add a task first.'));
          return;
        }

        body.appendChild(U.el('p', { class: 'muted' }, this.chartSummary()));

        const cal = Cal.of(Model.project);
        let cpm = null;
        try { cpm = Schedule.compute(); } catch (e) { cpm = null; }

        const tbl = U.el('table', { class: 'data-table' });
        tbl.appendChild(U.el('caption', {},
          (Model.project.name || 'Project') + ' — every task, with dates and dependencies'));

        const head = U.el('tr');
        ['WBS', 'Task', 'Type', 'Start', 'Finish', 'Days', '%', 'Runs after', 'Assignee', 'Critical']
          .forEach(h => head.appendChild(U.el('th', { scope: 'col' }, h)));
        const thead = U.el('thead'); thead.appendChild(head);
        tbl.appendChild(thead);

        const tbody = U.el('tbody');
        for (const t of tasks) {
          const tr = U.el('tr');
          /* The task name is the row header, so a screen reader reading
             a cell announces which task it belongs to. Without this you
             hear "12 March" with no idea what is on 12 March. */
          tr.appendChild(U.el('td', {}, Render.wbs(t) || String(Model.number(t.id))));
          tr.appendChild(U.el('th', { scope: 'row' }, t.name || 'Untitled'));
          tr.appendChild(U.el('td', {}, t.type));
          tr.appendChild(U.el('td', {}, t.start || ''));
          tr.appendChild(U.el('td', {}, t.type === 'milestone' ? '' : (t.end || '')));
          tr.appendChild(U.el('td', {}, t.type === 'milestone' ? '0'
            : String(Cal.active(cal) ? Cal.duration(t.start, t.end, cal) : U.duration(t.start, t.end))));
          tr.appendChild(U.el('td', {}, t.type === 'group' ? '' : String(Math.round(t.progress || 0))));
          tr.appendChild(U.el('td', {}, (t.deps || [])
            .map(d => { const f = Model.get(d.from); return f ? f.name : '?'; }).join(', ')));
          tr.appendChild(U.el('td', {}, t.assignee || ''));
          // A word, not a colour — the whole point of this column.
          tr.appendChild(U.el('td', {}, cpm && cpm.critical.has(t.id) ? 'yes' : ''));
          tbody.appendChild(tr);
        }
        tbl.appendChild(tbody);

        const scroll = U.el('div', { class: 'table-scroll' });
        scroll.appendChild(tbl);
        body.appendChild(scroll);

        const row = U.el('div', { class: 'modal-actions' });
        row.appendChild(U.el('button', {
          class: 'btn btn-primary',
          onclick: () => {
            const txt = this.tableAsText(tasks, cal, cpm);
            const done = () => this.toast('Table copied to clipboard');
            if (navigator.clipboard) navigator.clipboard.writeText(txt).then(done, done);
            else done();
          },
        }, 'Copy as text'));
        row.appendChild(U.el('button', {
          class: 'btn', onclick: () => Exports.run('csv'),
        }, 'Download CSV'));
        body.appendChild(row);
      });
    },

    /* Tab-separated, which is what spreadsheets and email clients
       actually paste well. */
    tableAsText(tasks, cal, cpm) {
      const head = ['WBS', 'Task', 'Type', 'Start', 'Finish', 'Days', '%', 'Runs after', 'Assignee', 'Critical'];
      const rows = [head.join('\t')];
      for (const t of tasks) {
        rows.push([
          Render.wbs(t) || Model.number(t.id),
          t.name || 'Untitled',
          t.type,
          t.start || '',
          t.type === 'milestone' ? '' : (t.end || ''),
          t.type === 'milestone' ? 0 : (Cal.active(cal) ? Cal.duration(t.start, t.end, cal) : U.duration(t.start, t.end)),
          t.type === 'group' ? '' : Math.round(t.progress || 0),
          (t.deps || []).map(d => { const f = Model.get(d.from); return f ? f.name : '?'; }).join('; '),
          t.assignee || '',
          cpm && cpm.critical.has(t.id) ? 'yes' : '',
        ].join('\t'));
      }
      return rows.join('\n');
    },

    /* One sentence describing the chart as a whole.

       A screen-reader user arriving at a bar chart otherwise has to
       explore every bar to learn anything about its shape. This is the
       orientation sentence that says whether it is worth exploring. */
    chartSummary() {
      const tasks = Model.tasks();
      if (!tasks.length) return 'Empty plan — no tasks yet.';

      const groups = tasks.filter(t => t.type === 'group').length;
      const ms = tasks.filter(t => t.type === 'milestone').length;
      const work = tasks.length - groups;

      let min = null, max = null;
      tasks.forEach(t => {
        if (t.start && (!min || U.parse(t.start) < U.parse(min))) min = t.start;
        if (t.end && (!max || U.parse(t.end) > U.parse(max))) max = t.end;
      });

      const parts = [`${work} task${work === 1 ? '' : 's'}`];
      if (groups) parts.push(`${groups} group${groups === 1 ? '' : 's'}`);
      if (ms) parts.push(`${ms} milestone${ms === 1 ? '' : 's'}`);

      let out = `${Model.project.name || 'Project'}: ${parts.join(', ')}`;
      if (min && max) out += `, from ${U.fmtShort(min)} to ${U.fmtShort(max)}`;
      out += '.';

      try {
        const cpm = Schedule.compute();
        if (cpm && cpm.critical && cpm.critical.size) {
          out += ` The critical path contains ${cpm.critical.size} task${cpm.critical.size === 1 ? '' : 's'}.`;
        }
      } catch (e) { /* CPM is optional context, never a reason to fail */ }

      const late = tasks.filter(t =>
        t.type !== 'group' && t.end && (t.progress || 0) < 100 && U.parse(t.end) < U.parse(U.today())).length;
      if (late) out += ` ${late} task${late === 1 ? ' is' : 's are'} past due.`;

      return out;
    },

    /* Keep the always-present summary in sync so a screen reader
       landing on the chart region gets an orientation sentence without
       opening anything. */
    refreshChartSummary() {
      const el = U.$('#chartSummary');
      if (el) el.textContent = this.chartSummary();
    },

    // ---------------- S-curve / earned value ----------------

    /* Drawn as inline SVG rather than through a chart library: the app
       has no charting dependency and one would be ~50KB to draw three
       polylines. */
    openSCurve() {
      this.openModal('S-curve - planned vs actual', (body) => {
        const r = EVM.compute(Model.project, U.today());

        if (r.empty) {
          body.appendChild(U.el('p', { class: 'muted' },
            'Add some dated tasks and this will show planned progress against actual.'));
          return;
        }

        const m = r.metrics;
        const money = r.basis === 'cost';
        const fmt = (v) => v == null ? '—'
          : (money ? Math.round(v).toLocaleString() : Math.round(v * 10) / 10 + 'd');
        const pct = (v) => v == null ? '—' : (Math.round(v * 100) / 100).toFixed(2);

        // ---- verdict line ----
        const verdict = EVM.verdict(m);
        const vTxt = verdict.key === 'nodata' ? 'Not enough of the plan has started to judge.'
          : verdict.key === 'ontrack' ? 'On track — earned value matches the plan.'
          : verdict.key === 'ahead' ? 'Ahead of plan by ' + Math.abs(Math.round(verdict.pct)) + '%.'
          : 'Behind plan by ' + Math.abs(Math.round(verdict.pct)) + '%.';
        body.appendChild(U.el('p', { class: 'evm-verdict evm-' + verdict.key }, vTxt));

        // ---- the chart ----
        body.appendChild(this.sCurveSvg(r));

        // ---- metrics ----
        const rows = [
          ['Budget at completion (BAC)', fmt(m.bac)],
          ['Planned value (PV)', fmt(m.pv)],
          ['Earned value (EV)', fmt(m.ev)],
          ['Schedule variance (SV)', fmt(m.sv)],
          ['Schedule performance (SPI)', pct(m.spi)],
        ];
        if (r.hasActuals) {
          rows.push(['Actual cost (AC)', fmt(m.ac)]);
          rows.push(['Cost variance (CV)', fmt(m.cv)]);
          rows.push(['Cost performance (CPI)', pct(m.cpi)]);
          rows.push(['Forecast at completion (EAC)', fmt(m.eac)]);
        }

        const tbl = U.el('table', { class: 'evm-table' });
        rows.forEach((kv) => {
          const tr = U.el('tr');
          tr.appendChild(U.el('th', {}, kv[0]));
          tr.appendChild(U.el('td', {}, String(kv[1])));
          tbl.appendChild(tr);
        });
        body.appendChild(tbl);

        // ---- the caveats, stated rather than buried ----
        const notes = [];
        notes.push(r.basis === 'cost'
          ? 'Weighted by task cost.'
          : 'No task costs are set, so tasks are weighted by working-day duration — this reads as a progress curve.');
        notes.push(r.plannedFrom === 'baseline'
          ? 'Planned value follows the saved baseline.'
          : 'No baseline is saved, so the plan is your current dates — which means schedule variance reads as zero until you set one (Baseline > Set baseline).');
        if (!r.hasActuals) {
          notes.push('No actual costs entered, so CPI, cost variance and forecast are not shown. '
            + 'Deriving them from progress would make CPI exactly 1.00 for every project, which would tell you nothing. '
            + 'Add a Spent figure to tasks to see them.');
        }
        notes.push('The earned curve before today is reconstructed by spreading each task current progress across its elapsed days — '
          + 'progress history is not stored. It is exact at today, approximate behind it.');

        const ul = U.el('ul', { class: 'evm-notes' });
        notes.forEach(n => ul.appendChild(U.el('li', {}, n)));
        body.appendChild(U.el('details', { class: 'evm-details' }, [
          U.el('summary', {}, 'How this is calculated'),
          ul,
        ]));
      });
    },

    sCurveSvg(r) {
      const W = 640, H = 260, PAD_L = 52, PAD_R = 16, PAD_T = 12, PAD_B = 34;
      const iw = W - PAD_L - PAD_R, ih = H - PAD_T - PAD_B;
      const n = r.dates.length;
      const actualVals = (r.actual || []).filter(v => v != null);
      const maxY = Math.max(r.bac, Math.max.apply(null, r.planned.concat(actualVals.length ? actualVals : [0]))) || 1;

      const x = (i) => PAD_L + (n <= 1 ? 0 : (i / (n - 1)) * iw);
      const y = (v) => PAD_T + ih - (v / maxY) * ih;

      /* Null means "not known yet", so the pen lifts rather than
         drawing a straight line across the gap to the next point. */
      const path = (series) => {
        let d = '', pen = false;
        series.forEach((v, i) => {
          if (v == null) { pen = false; return; }
          d += (pen ? ' L' : ' M') + x(i).toFixed(1) + ',' + y(v).toFixed(1);
          pen = true;
        });
        return d.trim();
      };

      const ns = 'http://www.w3.org/2000/svg';
      const mk = (tag, attrs) => {
        const e = document.createElementNS(ns, tag);
        for (const k in attrs) e.setAttribute(k, attrs[k]);
        return e;
      };

      const svg = mk('svg', {
        class: 'evm-svg', viewBox: '0 0 ' + W + ' ' + H, width: '100%', role: 'img',
        'aria-label': 'S-curve from ' + r.dates[0] + ' to ' + r.dates[n - 1] + '. '
          + 'Planned ' + Math.round(r.metrics.pctPlanned) + ' percent, '
          + 'complete ' + Math.round(r.metrics.pctComplete) + ' percent.',
      });

      // axes
      svg.appendChild(mk('line', { class: 'evm-axis', x1: PAD_L, y1: PAD_T, x2: PAD_L, y2: PAD_T + ih }));
      svg.appendChild(mk('line', { class: 'evm-axis', x1: PAD_L, y1: PAD_T + ih, x2: PAD_L + iw, y2: PAD_T + ih }));

      // gridlines at 0/25/50/75/100%
      [0, 0.25, 0.5, 0.75, 1].forEach(f => {
        const yy = y(maxY * f);
        svg.appendChild(mk('line', { class: 'evm-grid', x1: PAD_L, y1: yy, x2: PAD_L + iw, y2: yy }));
        const t = mk('text', { class: 'evm-tick', x: PAD_L - 6, y: yy + 4, 'text-anchor': 'end' });
        t.textContent = Math.round(f * 100) + '%';
        svg.appendChild(t);
      });

      // the status line
      const iNow = r.dates.findIndex(d => U.parse(d) >= U.parse(r.asOf));
      if (iNow >= 0) {
        svg.appendChild(mk('line', { class: 'evm-now', x1: x(iNow), y1: PAD_T, x2: x(iNow), y2: PAD_T + ih }));
        const t = mk('text', { class: 'evm-tick', x: x(iNow), y: PAD_T + ih + 26, 'text-anchor': 'middle' });
        t.textContent = 'today';
        svg.appendChild(t);
      }

      // date ends
      [[0, 'start'], [n - 1, 'end']].forEach(pair => {
        const t = mk('text', {
          class: 'evm-tick', x: x(pair[0]), y: PAD_T + ih + 15,
          'text-anchor': pair[1] === 'start' ? 'start' : 'end',
        });
        t.textContent = U.fmtShort(r.dates[pair[0]]);
        svg.appendChild(t);
      });

      /* Dashed vs solid vs dotted, not colour alone - WCAG 1.4.1. The
         three lines must stay tellable apart in greyscale, in a
         printout, and to a red-green colourblind reader. */
      svg.appendChild(mk('path', { class: 'evm-line evm-planned', d: path(r.planned), fill: 'none' }));
      svg.appendChild(mk('path', { class: 'evm-line evm-earned', d: path(r.earned), fill: 'none' }));
      if (r.actual) svg.appendChild(mk('path', { class: 'evm-line evm-actual', d: path(r.actual), fill: 'none' }));

      const wrap = U.el('div', { class: 'evm-chart' });
      wrap.appendChild(svg);

      const legend = U.el('div', { class: 'evm-legend' });
      const item = (cls, label) => {
        const sp = U.el('span', { class: 'evm-key' });
        sp.appendChild(U.el('i', { class: 'evm-swatch ' + cls }));
        sp.appendChild(document.createTextNode(label));
        return sp;
      };
      legend.appendChild(item('evm-planned', 'Planned'));
      legend.appendChild(item('evm-earned', 'Earned (actual progress)'));
      if (r.actual) legend.appendChild(item('evm-actual', 'Actual cost'));
      wrap.appendChild(legend);
      return wrap;
    },

    syncHistoryButtons() {
      U.$('#undoBtn').disabled = !Model.canUndo();
      U.$('#redoBtn').disabled = !Model.canRedo();
    },

    flashSaved() {
      const n = U.$('#autosaveNote');
      n.textContent = 'Saving…';
      clearTimeout(this._savedT);
      this._savedT = setTimeout(() => n.textContent = 'Saved', 300);
    },

    // ---------------- fit / scroll ----------------
    fit() {
      const avail = U.$('#chartScroll').clientWidth - 20;
      const rs = Render.computeRange();
      const order = ['day', 'week', 'month', 'quarter'];
      // pick the largest zoom that fits
      let chosen = 'quarter';
      for (const z of order) {
        Model.project.settings.zoom = z;
        const r = Render.computeRange();
        if (r.width <= avail) { chosen = z; break; }
        chosen = z;
      }
      // choose smallest that fits, else quarter
      for (const z of order) {
        Model.project.settings.zoom = z;
        if (Render.computeRange().width <= avail) { chosen = z; break; }
      }
      Model.project.settings.zoom = chosen;
      Model.save(); this.syncControls(); this.render();
      this.scrollToToday();
    },

    scrollToToday() {
      const rs = Render.rs; if (!rs) return;
      const x = Render.xOf(U.today());
      const sc = U.$('#chartScroll');
      sc.scrollLeft = Math.max(0, x - sc.clientWidth / 3);
    },

    // ---------------- scroll sync ----------------
    wireScrollSync() {
      const chartScroll = U.$('#chartScroll');
      const chartHead = U.$('#chartHead');
      const gridBody = U.$('#gridBody');
      const gridHead = U.$('#gridHead');
      const wlTrack = U.$('#wlTrack');
      chartScroll.addEventListener('scroll', () => {
        chartHead.scrollLeft = chartScroll.scrollLeft;
        gridBody.scrollTop = chartScroll.scrollTop;
        /* The workload lane shares the chart's x-axis, so a red column
           must stay under the tasks that caused it.

           Translating the track rather than setting scrollLeft on the
           pane is deliberate: the chart pane carries a vertical
           scrollbar and the lane does not, so their client widths differ
           by a few pixels and scrollLeft clamps to different maxima —
           which drifted the columns out of alignment at the right-hand
           end. A transform has no maximum and stays pixel-exact. */
        if (wlTrack) wlTrack.style.transform = 'translateX(' + (-chartScroll.scrollLeft) + 'px)';
      });
      // horizontal scroll of the grid columns keeps the grid header in sync
      gridBody.addEventListener('scroll', () => { gridHead.scrollLeft = gridBody.scrollLeft; });
      gridBody.addEventListener('wheel', (e) => {
        // vertical wheel scrolls the whole chart; horizontal (shift) scrolls columns
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // let native horizontal scroll happen
        chartScroll.scrollTop += e.deltaY; e.preventDefault();
      }, { passive: false });
    },

    // ---------------- splitter ----------------
    wireSplitter() {
      const sp = U.$('#splitter');
      let active = false;
      sp.addEventListener('mousedown', (e) => { active = true; sp.classList.add('active'); e.preventDefault(); });
      window.addEventListener('mousemove', (e) => {
        if (!active) return;
        const left = U.$('#gantt').getBoundingClientRect().left;
        let w = Math.max(280, Math.min(900, e.clientX - left));
        Model.project.settings.gridWidth = Math.round(w);
        this.applyGridWidth();
      });
      window.addEventListener('mouseup', () => { if (active) { active = false; sp.classList.remove('active'); Model.save(); this.render(); } });
    },

    // ---------------- keyboard ----------------
    wireKeyboard() {
      document.addEventListener('keydown', (e) => {
        const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z' && !e.shiftKey) { e.preventDefault(); Model.undo(); return; }
        if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === 'y' || (e.key.toLowerCase() === 'z' && e.shiftKey))) { e.preventDefault(); Model.redo(); return; }
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') { e.preventDefault(); Model._persist(); this.toast('Saved'); return; }
        if (typing) return;
        if (e.key === 'Insert' || (e.key === 'Enter' && Model.selectedId)) { e.preventDefault(); Model.addTask({ type: 'task' }); }
        if (e.key === 'Delete' && Model.selectedId) { e.preventDefault(); Model.remove(Model.selectedId); }
        if (e.key === 'Tab' && Model.selectedId) { e.preventDefault(); e.shiftKey ? Model.outdent(Model.selectedId) : Model.indent(Model.selectedId); }
        if ((e.key === 'ArrowUp' || e.key === 'ArrowDown') && Model.selectedId) {
          const vis = Model.visibleTasks(); const i = vis.findIndex(t => t.id === Model.selectedId);
          if (e.altKey) { Model.move(Model.selectedId, e.key === 'ArrowUp' ? -1 : 1); }
          else { const n = vis[i + (e.key === 'ArrowUp' ? -1 : 1)]; if (n) Model.select(n.id); }
          e.preventDefault();
        }
      });
    },

    // ---------------- task card (anchored popover editor) ----------------
    wireDrawer() {
      U.$('#closeDrawer').addEventListener('click', () => this.closeDrawer());
      // close on outside click — but never when the click landed on another
      // task, since that task opens its own card immediately after
      document.addEventListener('click', (e) => {
        const d = U.$('#taskDrawer');
        if (d.hidden) return;
        if (d.contains(e.target) || e.target.closest('.bar') || e.target.closest('.grow-row')) return;
        this.closeDrawer();
      });
      window.addEventListener('keydown', (e) => { if (e.key === 'Escape') this.closeDrawer(); });
      // keep the card glued to its task as things move underneath it
      const reposition = () => this.positionDrawer();
      window.addEventListener('resize', reposition);
      document.addEventListener('scroll', reposition, true);

      // drag the card by its header
      const head = U.$('#taskDrawer .drawer-head');
      if (head) {
        head.addEventListener('mousedown', (e) => this.beginDrawerDrag(e));
        // double-click the header to snap it back beside its task
        head.addEventListener('dblclick', (e) => { if (!e.target.closest('button')) this.resnapDrawer(); });
      }
    },

    // Once the user drags the card it stops auto-anchoring — otherwise the next
    // re-render would yank it back to the task and undo the move.
    beginDrawerDrag(e) {
      if (e.button !== 0 || e.target.closest('button')) return;
      const d = U.$('#taskDrawer');
      if (d.hidden || d.classList.contains('as-sheet')) return;
      e.preventDefault();
      const r = d.getBoundingClientRect();
      const offX = e.clientX - r.left, offY = e.clientY - r.top;
      const w = r.width, h = r.height, pad = 6;
      document.body.classList.add('card-dragging');
      const move = (ev) => {
        this._drawerDragged = true;
        d.classList.add('dragged');
        d.style.left = Math.max(pad, Math.min(window.innerWidth - w - pad, ev.clientX - offX)) + 'px';
        d.style.top = Math.max(pad, Math.min(window.innerHeight - h - pad, ev.clientY - offY)) + 'px';
      };
      const up = () => {
        window.removeEventListener('mousemove', move);
        window.removeEventListener('mouseup', up);
        document.body.classList.remove('card-dragging');
      };
      window.addEventListener('mousemove', move);
      window.addEventListener('mouseup', up);
    },
    // keep a parked card fully on screen after a resize
    clampDrawer() {
      const d = U.$('#taskDrawer'); if (d.hidden) return;
      const r = d.getBoundingClientRect(), pad = 6;
      d.style.left = Math.max(pad, Math.min(window.innerWidth - r.width - pad, r.left)) + 'px';
      d.style.top = Math.max(pad, Math.min(window.innerHeight - r.height - pad, r.top)) + 'px';
    },
    // snap the card back to the task it belongs to
    resnapDrawer() {
      this._drawerDragged = false;
      U.$('#taskDrawer').classList.remove('dragged');
      this.positionDrawer();
    },
    openDrawer(id, from) {
      // opening a different task re-anchors; re-opening the same one keeps
      // wherever the user parked the card
      if (id !== this._drawerId) { this._drawerDragged = false; U.$('#taskDrawer').classList.remove('dragged'); }
      this._drawerId = id;
      this._drawerFrom = from || 'row';
      U.$('#taskDrawer').hidden = false;
      this.refreshDrawer();
    },
    closeDrawer() { U.$('#taskDrawer').hidden = true; this._drawerId = null; },

    // Re-find the anchor by task id every time rather than holding a reference —
    // re-renders replace these nodes, and a stale ref measures as (0,0).
    _drawerAnchor() {
      const id = this._drawerId; if (!id) return null;
      const esc = window.CSS && CSS.escape ? CSS.escape(id) : id;
      const bar = document.querySelector('.bar[data-id="' + esc + '"]');
      const row = document.querySelector('.grow-row[data-id="' + esc + '"]');
      return this._drawerFrom === 'bar' ? (bar || row) : (row || bar);
    },
    positionDrawer() {
      const d = U.$('#taskDrawer'); if (d.hidden) return;
      // on narrow screens the card becomes a bottom sheet — no anchoring
      const sheet = window.innerWidth < 760;
      d.classList.toggle('as-sheet', sheet);
      if (sheet) { d.style.left = d.style.top = ''; d.classList.remove('on-left'); return; }
      // user parked it somewhere — leave it there, just keep it on screen
      if (this._drawerDragged) { this.clampDrawer(); return; }
      const a = this._drawerAnchor();
      if (!a) return;
      const r = a.getBoundingClientRect();
      const w = d.offsetWidth, h = d.offsetHeight, gap = 14, pad = 10;
      let left = r.right + gap, onLeft = false;
      if (left + w > window.innerWidth - pad) { left = r.left - gap - w; onLeft = true; }
      if (left < pad) { left = Math.max(pad, Math.min(window.innerWidth - w - pad, r.left)); onLeft = false; }
      let top = r.top + r.height / 2 - h / 2;
      top = Math.max(pad, Math.min(window.innerHeight - h - pad, top));
      d.style.left = left + 'px';
      d.style.top = top + 'px';
      d.classList.toggle('on-left', onLeft);
      d.style.setProperty('--arrow-top', Math.max(14, Math.min(h - 22, r.top + r.height / 2 - top)) + 'px');
    },
    refreshDrawer() {
      if (U.$('#taskDrawer').hidden) return;
      const id = this._drawerId || Model.selectedId;
      const t = Model.get(id); if (!t) { this.closeDrawer(); return; }
      this._drawerId = id;
      const kind = t.type === 'group' ? 'Group' : t.type === 'milestone' ? 'Milestone' : 'Task';
      U.$('#drawerTitle').textContent = kind + ' · ' + (Render.wbs(t) || Model.number(t.id));
      const body = U.$('#drawerBody'); U.clear(body);

      body.appendChild(field('Name', input(t.name, v => Model.update(id, { name: v }))));

      body.appendChild(field('Type', select(['task', 'milestone', 'group'], t.type, v => Model.update(id, { type: v }))));

      const startF = field('Start', input(t.start, v => Render._editDate(t, 'start', v), 'date'));
      const endF = field('End', input(t.end, v => Render._editDate(t, 'end', v), 'date'));
      if (t.type !== 'group') { const row = U.el('div', { class: 'field-row' }, [startF, endF]); body.appendChild(row); }
      else body.appendChild(startF);

      if (t.type === 'task') {
        body.appendChild(field('Progress: ' + (t.progress || 0) + '%', rangeInput(t.progress || 0, v => Model.update(id, { progress: v }))));
      }
      body.appendChild(field('Assignee', input(t.assignee || '', v => Model.update(id, { assignee: v }))));

      /* Budget and actual spend. Both feed the S-curve: cost switches
         it from a duration-weighted progress curve to a value curve,
         and spend is the ONLY source of CPI — evm.js reports it as null
         rather than inferring it from progress. */
      if (t.type !== 'group') {
        const costF = field('Budget', input(t.cost || 0, v => Model.update(id, { cost: Number(v) || 0 }), 'number'));
        const spentF = field('Spent', input(t.spent || 0, v => Model.update(id, { spent: Number(v) || 0 }), 'number'));
        body.appendChild(U.el('div', { class: 'field-row' }, [costF, spentF]));
      }

      // color swatches
      const sw = U.el('div', { class: 'swatches' });
      U.PALETTE.forEach(c => {
        const s = U.el('div', { class: 'swatch' + (c === t.color ? ' active' : ''), style: { background: c }, onclick: () => Model.update(id, { color: c }) });
        sw.appendChild(s);
      });
      body.appendChild(field('Color', sw));

      // dependencies
      const depWrap = U.el('div', { class: 'dep-list' });
      (t.deps || []).forEach(d => {
        const from = Model.get(d.from);
        const item = U.el('div', { class: 'dep-item' }, [
          U.el('span', {}, (from ? from.name : '?')),
          select(['FS', 'SS', 'FF', 'SF'], d.type, v => { Model.snapshot(); d.type = v; Model._afterChange(); }),
          U.el('span', { class: 'rm', onclick: () => Model.removeDep(id, d.from) }, '✕'),
        ]);
        depWrap.appendChild(item);
      });
      // add dependency selector
      const others = Model.tasks().filter(x => x.id !== id);
      if (others.length) {
        const sel = U.el('select', {}, [U.el('option', { value: '' }, '+ Start this after…')].concat(others.map(o => U.el('option', { value: o.id }, o.name))));
        sel.addEventListener('change', () => { if (sel.value) { Model.addDep(sel.value, id, 'FS'); } });
        depWrap.appendChild(sel);
      }
      body.appendChild(field('Runs after (predecessors)', depWrap));

      body.appendChild(field('Notes', textarea(t.notes || '', v => Model.update(id, { notes: v }))));

      const del = U.el('button', { class: 'btn btn-danger-ghost', onclick: () => { Model.remove(id); this.closeDrawer(); } }, '🗑 Delete task');
      body.appendChild(del);

      // content height just changed — re-anchor before the frame paints
      this.positionDrawer();
    },

    // ---------------- modal ----------------
    wireModal() {
      U.$('#closeModal').addEventListener('click', () => this.closeModal());
      U.$('#modalBackdrop').addEventListener('click', (e) => { if (e.target.id === 'modalBackdrop') this.closeModal(); });
    },
    /* Working calendar editor.

       The reflow button is separate and explicit on purpose: turning the
       calendar on changes what a duration MEANS, and silently rewriting
       every date in someone's saved plan the moment they tick a box
       would be worse than the scheduling bug it fixes. */
    openCalendar() {
      this.openModal('Working calendar', (body) => {
        const cal = U.clone(Cal.of(Model.project));
        const persist = () => {
          Model.snapshot();
          Model.project.settings.calendar = cal;
          Model._afterChange();
          this.render();
        };

        const enable = U.el('input', {
          type: 'checkbox', checked: cal.enabled ? 'checked' : null,
          onchange: (e) => { cal.enabled = e.target.checked; persist(); this.openCalendar(); },
        });
        body.appendChild(U.el('label', { class: 'chk cal-enable' }, [enable,
          U.el('span', {}, 'Skip non-working days when scheduling')]));
        body.appendChild(U.el('p', { class: 'cal-note' },
          'Durations count working days only, and dependencies push work to the next working day.'));

        if (!cal.enabled) return;

        // --- working days of the week ---
        body.appendChild(U.el('h4', { class: 'cal-h' }, 'Working days'));
        const days = U.el('div', { class: 'cal-days' });
        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach((label, dow) => {
          const on = cal.workdays.indexOf(dow) >= 0;
          days.appendChild(U.el('label', { class: 'cal-day' + (on ? ' is-on' : '') }, [
            U.el('input', {
              type: 'checkbox', checked: on ? 'checked' : null,
              onchange: (e) => {
                if (e.target.checked) { if (cal.workdays.indexOf(dow) < 0) cal.workdays.push(dow); }
                else cal.workdays = cal.workdays.filter(d => d !== dow);
                cal.workdays.sort();
                persist(); this.openCalendar();
              },
            }),
            U.el('span', {}, label),
          ]));
        });
        body.appendChild(days);
        if (!cal.workdays.length) {
          body.appendChild(U.el('p', { class: 'cal-warn' },
            'No working days selected — scheduling will treat every day as a working day.'));
        }

        // --- holidays ---
        body.appendChild(U.el('h4', { class: 'cal-h' }, 'Holidays and days off'));

        const picker = U.el('select', { class: 'select' },
          [U.el('option', { value: '' }, 'Add common public holidays…')].concat(
            Cal.COUNTRIES.map(c => U.el('option', { value: c.code }, c.name))));
        const yearNow = new Date(U.today().slice(0, 4) + '-01-01').getFullYear();
        picker.addEventListener('change', () => {
          if (!picker.value) return;
          Object.assign(cal.holidays, Cal.presetRange(picker.value, yearNow, yearNow + 3));
          picker.value = '';
          persist(); this.openCalendar();
        });
        body.appendChild(picker);
        body.appendChild(U.el('p', { class: 'cal-note' },
          'Presets cover ' + yearNow + '–' + (yearNow + 3) + ' and are a starting point — regional and ' +
          'substitute-day rules vary, so check them against your local calendar. Every date can be edited or removed.'));

        const addRow = U.el('div', { class: 'cal-add' });
        const dateIn = U.el('input', { type: 'date', class: 'cell-input' });
        const nameIn = U.el('input', { type: 'text', class: 'cell-input', placeholder: 'Name (e.g. Company shutdown)' });
        addRow.appendChild(dateIn); addRow.appendChild(nameIn);
        addRow.appendChild(U.el('button', {
          class: 'btn', onclick: () => {
            if (!dateIn.value) return;
            cal.holidays[dateIn.value] = nameIn.value || 'Day off';
            persist(); this.openCalendar();
          },
        }, '＋ Add'));
        body.appendChild(addRow);

        const list = U.el('div', { class: 'cal-list' });
        const isos = Object.keys(cal.holidays).sort();
        if (!isos.length) list.appendChild(U.el('p', { class: 'cal-note' }, 'No holidays yet.'));
        isos.forEach(iso => {
          list.appendChild(U.el('div', { class: 'cal-row' }, [
            U.el('span', { class: 'cal-date' }, iso),
            U.el('span', { class: 'cal-name' }, cal.holidays[iso]),
            U.el('button', {
              class: 'icon-btn', 'aria-label': 'Remove ' + cal.holidays[iso],
              onclick: () => { delete cal.holidays[iso]; persist(); this.openCalendar(); },
            }, '🗑'),
          ]));
        });
        body.appendChild(list);

        // --- explicit, reversible reflow ---
        body.appendChild(U.el('div', { class: 'menu-sep' }));
        body.appendChild(U.el('button', {
          class: 'btn btn-primary', onclick: () => {
            const moved = this.reflowToWorkingDays();
            this.closeModal();
            this.toast(moved
              ? 'Moved ' + moved + ' task(s) onto working days — undo if that is not what you wanted'
              : 'Every task already starts on a working day');
          },
        }, '↻ Reflow existing tasks onto working days'));
        body.appendChild(U.el('p', { class: 'cal-note' },
          'Existing dates are never changed automatically. This rewrites them in one step, and Ctrl+Z undoes it.'));
      });
    },

    /** Move any task starting or ending on a non-working day. Undoable. */
    reflowToWorkingDays() {
      const cal = Cal.of(Model.project);
      if (!Cal.active(cal)) return 0;
      Model.snapshot();
      let moved = 0;
      Model.project.tasks.forEach(t => {
        if (t.type === 'group') return;
        const days = Math.max(1, Cal.duration(t.start, t.end, cal));
        const start = Cal.nextWorking(t.start, cal, 1);
        const end = t.type === 'milestone' ? start : Cal.endFrom(start, days, cal);
        if (start !== t.start || end !== t.end) { t.start = start; t.end = end; moved++; }
      });
      Model._recalcGroups();
      Model._afterChange();
      return moved;
    },

    openModal(title, builder) {
      U.$('#modalTitle').textContent = title;
      const body = U.$('#modalBody'); U.clear(body);
      builder(body);
      U.$('#modalBackdrop').hidden = false;
    },
    closeModal() { U.$('#modalBackdrop').hidden = true; },

    // ---------------- dependency editor (click a link arrow) ----------------
    openDepEditor(fromId, toId, x, y) {
      const to = Model.get(toId); if (!to) return;
      const dep = (to.deps || []).find(d => d.from === fromId); if (!dep) return;
      const from = Model.get(fromId);
      const names = { FS: 'Finish → Start', SS: 'Start → Start', FF: 'Finish → Finish', SF: 'Start → Finish' };
      let pop = U.$('#depEditor');
      if (!pop) {
        pop = U.el('div', { id: 'depEditor', class: 'dep-editor' });
        document.body.appendChild(pop);
        pop.addEventListener('click', (e) => e.stopPropagation());
        document.addEventListener('click', () => this.closeDepEditor());
        window.addEventListener('keydown', (e) => { if (e.key === 'Escape') this.closeDepEditor(); });
      }
      U.clear(pop);
      pop.appendChild(U.el('div', { class: 'de-title' }, [
        U.el('b', {}, from ? from.name : '?'), U.el('span', { class: 'de-sep' }, ' → '), U.el('b', {}, to.name),
      ]));
      const typeSel = U.el('select', {}, ['FS', 'SS', 'FF', 'SF'].map(o =>
        U.el('option', { value: o, selected: o === (dep.type || 'FS') ? 'selected' : null }, o + ' · ' + names[o])));
      typeSel.addEventListener('change', () => { Model.snapshot(); dep.type = typeSel.value; Model._recalcGroups(); Model._afterChange(); });
      const lagInput = U.el('input', { type: 'number', value: dep.lag || 0 });
      lagInput.addEventListener('change', () => { Model.snapshot(); dep.lag = parseInt(lagInput.value, 10) || 0; Model._afterChange(); });
      pop.appendChild(U.el('div', { class: 'de-row' }, [
        U.el('label', {}, ['Type', typeSel]),
        U.el('label', {}, ['Lag (days)', lagInput]),
      ]));
      pop.appendChild(U.el('button', { class: 'de-del', onclick: () => { Model.removeDep(toId, fromId); this.closeDepEditor(); this.toast('Dependency removed'); } }, '🗑 Remove this link'));
      pop.hidden = false;
      const px = Math.max(8, Math.min(window.innerWidth - 248, x - 40));
      const py = Math.min(window.innerHeight - 150, y + 10);
      pop.style.left = px + 'px'; pop.style.top = py + 'px';
    },
    closeDepEditor() { const p = U.$('#depEditor'); if (p) p.hidden = true; },

    openTemplates() {
      this.openModal('Start from a template', (body) => {
        const grid = U.el('div', { class: 'template-grid' });
        Templates.list.forEach(tpl => {
          const card = U.el('div', { class: 'template-card', onclick: () => { Templates.apply(tpl.key); this.closeModal(); } }, [
            U.el('div', { class: 'tc-icon' }, tpl.icon),
            U.el('h4', {}, tpl.name),
            U.el('p', {}, tpl.desc),
          ]);
          grid.appendChild(card);
        });
        body.appendChild(grid);
      });
    },

    openProjects() {
      this.openModal('Your projects', (body) => {
        const newBtn = U.el('button', { class: 'btn btn-primary', style: { marginBottom: '12px' }, onclick: () => { Model.newProject(); this.closeModal(); } }, '＋ New project');
        body.appendChild(newBtn);
        const list = U.el('div', { class: 'projects-list' });
        const projects = Model.listProjects();
        if (!projects.length) list.appendChild(U.el('p', {}, 'No saved projects yet.'));
        projects.forEach(p => {
          const row = U.el('div', { class: 'project-row' + (p.id === Model.project.id ? ' active' : ''), onclick: (e) => { if (e.target.classList.contains('pr-del')) return; Model.openProject(p.id); this.closeModal(); } }, [
            U.el('span', { class: 'pr-name' }, p.name),
            U.el('span', { class: 'pr-meta' }, p.count + ' tasks · ' + new Date(p.updated).toLocaleDateString()),
            U.el('span', { class: 'pr-del icon-btn', onclick: (e) => { e.stopPropagation(); if (confirm('Delete project "' + p.name + '"?')) { Model.deleteProject(p.id); this.openProjects(); } } }, '🗑'),
          ]);
          list.appendChild(row);
        });
        body.appendChild(list);

        const meter = U.el('p', { class: 'storage-meter' }, 'Storage: checking…');
        body.appendChild(meter);
        this.refreshStorageMeter(meter);
      });
    },

    /* ---------------- workload lane ----------------

       Renders per-person allocation as a bar per day, on the same
       x-axis as the chart so a red column lines up with the tasks
       causing it. Hidden by default: it is only meaningful once people
       are assigned, and an empty lane would just be clutter. */
    toggleWorkload() {
      const el = U.$('#workload');
      if (!el) return;
      const show = el.hidden;
      el.hidden = !show;
      Model.project.settings.showWorkload = show;
      Model.save();
      U.$('#workloadBtn').classList.toggle('is-on', show);
      if (show) this.renderWorkload();
    },

    renderWorkload() {
      const el = U.$('#workload');
      if (!el || el.hidden) return;

      const names = U.$('#wlNames'), track = U.$('#wlTrack');
      U.clear(names); U.clear(track);

      const cal = window.Cal ? Cal.of(Model.project) : null;
      const load = Resources.compute(Model.tasks(), Model.project, cal);
      const rs = Render.rs;

      if (!load.names.length) {
        names.appendChild(U.el('div', { class: 'wl-empty' },
          'Assign people to tasks (the Assignee column) to see who is over-booked.'));
        track.style.width = rs.width + 'px';
        return;
      }

      track.style.width = rs.width + 'px';

      for (const person of load.names) {
        const rec = load.byName[person];
        const over = rec.over.length;

        names.appendChild(U.el('div', { class: 'wl-name' + (over ? ' is-over' : '') }, [
          U.el('span', { class: 'wl-who' }, person),
          U.el('span', { class: 'wl-meta' }, over
            ? `${rec.peak}% peak · ${over} day${over === 1 ? '' : 's'} over`
            : `${rec.peak}% peak`),
        ]));

        const row = U.el('div', { class: 'wl-row' });
        // One div per day that carries load. Days at or under capacity
        // are muted; over-capacity days are red and sized by overshoot,
        // so the eye lands on the worst week without reading numbers.
        for (const [iso, pct] of rec.days) {
          const i = Render.off(iso);
          if (i < 0 || i >= rs.totalDays) continue;
          const ratio = Math.min(2, pct / rec.capacity);
          const isOver = pct > rec.capacity;
          row.appendChild(U.el('div', {
            class: 'wl-bar' + (isOver ? ' is-over' : ''),
            style: {
              left: (i * rs.dayW) + 'px',
              width: Math.max(1, rs.dayW - 1) + 'px',
              height: Math.round(Math.min(100, ratio * 50)) + '%',
            },
            title: `${person} — ${U.fmtShort(iso)}: ${pct}% of ${rec.capacity}%` +
              (isOver ? '\nOver-booked by ' + (pct - rec.capacity) + '%\n' +
                Resources.tasksOn(Model.tasks(), person, iso).map(t => '· ' + t.name).join('\n') : ''),
          }));
        }
        // capacity line, so "full" is visible rather than implied
        row.appendChild(U.el('div', { class: 'wl-capline' }));
        track.appendChild(row);
      }

      const btn = U.$('#workloadBtn');
      if (btn) btn.title = Resources.summary(load);
    },

    // ---------------- toast ----------------
    /* Speak a result to assistive tech.

       Debounced ~120ms because holding an arrow key fires many moves a
       second, and an undebounced region reads every intermediate date
       — the user hears a stream of numbers instead of where the bar
       ended up. The text is also cleared first: setting a live region
       to the value it already holds produces no announcement at all,
       which is how "it only works the first time" bugs happen. */
    announce(msg) {
      const el = U.$('#srLive');
      if (!el || !msg) return;
      clearTimeout(this._annT);
      this._annT = setTimeout(() => {
        el.textContent = '';
        setTimeout(() => { el.textContent = msg; }, 30);
      }, 120);
    },

    toast(msg) {
      const t = U.$('#toast');
      t.textContent = msg; t.hidden = false;
      clearTimeout(this._toastT);
      this._toastT = setTimeout(() => t.hidden = true, 2200);
    },

    /* Storage failure banner.

       Deliberately NOT a toast. A toast disappears after two seconds and
       the user carries on typing into a plan that is not being saved —
       which is exactly the failure this replaces. It stays until the
       user acts, and it offers the one action that actually rescues the
       work: download the file. */
    showSaveError(info) {
      if (this._saveErrShown) return;   // one banner, not one per keystroke
      this._saveErrShown = true;

      const quota = info && info.quota;
      const bar = U.el('div', { class: 'save-error', role: 'alert' }, [
        U.el('div', { class: 'save-error-text' }, [
          U.el('strong', {}, quota ? 'Your browser storage is full.' : 'Your plan could not be saved.'),
          U.el('span', {}, quota
            ? ' This plan is NOT being saved. Download it now so you do not lose it, then delete old projects to free space.'
            : ' This plan is NOT being saved. Download it now so you do not lose it.'),
        ]),
        U.el('button', {
          class: 'btn btn-primary', onclick: () => { Exports.json(); },
        }, '⬇ Download my plan'),
        U.el('button', {
          class: 'btn', onclick: () => { this.openProjects(); },
        }, 'Manage projects'),
        U.el('button', {
          class: 'save-error-x icon-btn', 'aria-label': 'Dismiss',
          onclick: () => { bar.remove(); this._saveErrShown = false; },
        }, '✕'),
      ]);
      document.body.appendChild(bar);
    },

    /* Storage meter — so "full" is something you can see coming rather
       than discover at the moment it breaks. */
    async refreshStorageMeter(el) {
      if (!el) return;
      const est = await Store.estimate();
      const mode = Store.mode() === 'idb' ? 'IndexedDB' : 'localStorage (limited)';
      if (!est) { el.textContent = 'Storage: ' + mode; return; }
      const mb = (n) => (n / 1048576).toFixed(1) + ' MB';
      el.textContent = `Storage: ${mb(est.usage)} used of ${mb(est.quota)} available (${est.pct}%) · ${mode}`;
      el.classList.toggle('is-tight', est.pct >= 80);
    },
  };

  // ---- small form helpers ----
  function field(label, control) {
    return U.el('div', { class: 'field' }, [U.el('label', {}, label), control]);
  }
  function input(val, onchange, type) {
    const i = U.el('input', { value: val, type: type || 'text' });
    i.addEventListener('change', () => onchange(i.value));
    return i;
  }
  function textarea(val, onchange) {
    const t = U.el('textarea', {}, val);
    t.addEventListener('change', () => onchange(t.value));
    return t;
  }
  function select(opts, val, onchange) {
    const s = U.el('select', {}, opts.map(o => U.el('option', { value: o, selected: o === val ? 'selected' : null }, o)));
    s.addEventListener('change', () => onchange(s.value));
    return s;
  }
  function rangeInput(val, onchange) {
    const wrap = U.el('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } });
    const r = U.el('input', { type: 'range', min: '0', max: '100', value: val, style: { flex: '1' } });
    const out = U.el('span', { style: { width: '34px', textAlign: 'right' } }, val + '%');
    r.addEventListener('input', () => { out.textContent = r.value + '%'; });
    r.addEventListener('change', () => onchange(+r.value));
    wrap.append(r, out);
    return wrap;
  }

  window.App = App;
  document.addEventListener('DOMContentLoaded', () => App.init());
})();
