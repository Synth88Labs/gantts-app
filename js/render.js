/* ============================================================
   render.js — draws the grid (left) and timeline chart (right)
   Exposes a global `Render`.
   ============================================================ */
(function () {
  const ROW_H = 36;
  const BAR_H = 22;
  const BAR_TOP = (ROW_H - BAR_H) / 2;

  const DAY_W = { day: 34, week: 16, month: 5.4, quarter: 2.6 };
  const PAD_BEFORE = { day: 3, week: 7, month: 14, quarter: 30 };
  const PAD_AFTER = { day: 7, week: 14, month: 30, quarter: 60 };

  const Render = {
    rs: null, // render state

    els: {},
    init() {
      this.els = {
        gridPane: U.$('#gridPane'), gridHead: U.$('#gridHead'), gridBody: U.$('#gridBody'),
        chartHead: U.$('#chartHead'), chartScroll: U.$('#chartScroll'),
        chartCanvas: U.$('#chartCanvas'), chartSvg: U.$('#chartSvg'),
        barsLayer: U.$('#barsLayer'), emptyState: U.$('#emptyState'),
      };
    },

    computeRange() {
      const tasks = Model.tasks();
      const zoom = Model.project.settings.zoom;
      let min = null, max = null;
      tasks.forEach(t => {
        if (!min || U.parse(t.start) < U.parse(min)) min = t.start;
        if (!max || U.parse(t.end) > U.parse(max)) max = t.end;
      });
      const today = U.today();
      if (!min) { min = today; max = U.addDays(today, 30); }
      // include today in range
      if (U.parse(today) < U.parse(min)) min = today;
      if (U.parse(today) > U.parse(max)) max = today;

      /* In a lookahead the window IS the subject. Spanning the whole
         project would squeeze three weeks into a sliver at one end and
         defeat the point of the view — the site team needs the next
         fortnight legible, not the eighteen-month programme. Clamp to
         the window, padded by a few days for context on either side. */
      if (typeof Views !== 'undefined') {
        const view = Views.of(Model.project);
        if (view.mode === 'lookahead') {
          const w = Views.window(view, today);
          min = U.addDays(w.start, -2);
          max = U.addDays(w.end, 2);
        }
      }
      let origin = U.addDays(min, -PAD_BEFORE[zoom]);
      let endDate = U.addDays(max, PAD_AFTER[zoom]);
      // snap origin to Monday for cleaner grid
      origin = U.weekStart(origin);
      const totalDays = U.duration(origin, endDate);
      const dayW = DAY_W[zoom];
      return { origin, endDate, totalDays, dayW, zoom, width: Math.ceil(totalDays * dayW) };
    },

    render() {
      const tasks = Model.tasks();
      this.els.emptyState.hidden = tasks.length > 0;

      this.rs = this.computeRange();
      const rs = this.rs;
      const visible = this.rowSource();
      rs.rowOf = {}; visible.forEach((t, i) => rs.rowOf[t.id] = i);
      rs.visible = visible;
      rs.height = visible.length * ROW_H;

      const cols = Model.project.settings.columns || [];
      const needCPM = Model.project.settings.showCritical || cols.indexOf('slack') >= 0 || cols.indexOf('freeslack') >= 0;
      this.cpm = needCPM ? Schedule.compute() : null;

      this.renderGrid(visible);
      this.renderChartHead();
      this.renderChartBody(visible);
    },

    /* The one place a view filter is applied. Both panes and the row
       index derive from this, so a filter added here reaches the grid,
       the bars and the dependency arrows with no further changes.

       Exports deliberately do NOT go through it — they read
       Model.tasks() and keep exporting the whole plan. A lookahead is
       a way of reading the schedule, not a smaller schedule, and
       silently shipping a truncated file would be the worse surprise.
       The one exception is print/PNG, where the visible chart IS the
       artefact the user is asking for. */
    rowSource() {
      const rows = Model.visibleTasks();
      if (typeof Views === 'undefined') return rows;
      const view = Views.of(Model.project);
      const r = Views.apply(rows, Model.tasks(), view, U.today());
      this.viewWindow = r.window;
      return r.rows;
    },

    off(iso) { return U.diffDays(this.rs.origin, iso); },
    xOf(iso) { return this.off(iso) * this.rs.dayW; },

    /* The inverse of xOf. Absent until now because interactions.js
       works in deltas; the keyboard and nudge paths need an absolute
       answer to "what date is this pixel?". */
    isoAt(x) {
      return U.addDays(this.rs.origin, Math.round(x / this.rs.dayW));
    },

    // ---------------- LEFT GRID (configurable, MS-Project-style columns) ----------------
    // Column registry: each has {key,label,width(null=flex),cls,cell(t,i)->div}
    columns() {
      if (this._cols) return this._cols;
      const R = this;
      const ro = (cls, text, extra) => U.el('div', { class: 'grow-cell ' + cls }, U.el('span', { class: 'ro-text', style: extra || null }, text == null || text === '' ? '' : ('' + text)));
      this._cols = {
        id:           { label: '#',    i18n: null,          width: 34,   cls: 'col-id',       cell: (t) => ro('col-id', Model.number(t.id)) },
        wbs:          { label: 'WBS',  i18n: 'col.wbs',     width: 58,   cls: 'col-wbs2',     cell: (t) => ro('col-wbs2', R.wbs(t)) },
        name:         { label: 'Task name', i18n: 'col.name', width: null, cls: 'col-name',  cell: (t) => R._nameCell(t) },
        start:        { label: 'Start', i18n: 'col.start',   width: 86,   cls: 'col-start',    cell: (t) => R._dateCell(t, 'start') },
        end:          { label: 'Finish', i18n: 'col.end',    width: 86,   cls: 'col-end',      cell: (t) => R._dateCell(t, 'end') },
        duration:     { label: 'Days', i18n: 'col.days',     width: 52,   cls: 'col-dur',      cell: (t) => R._durCell(t) },
        progress:     { label: '%',    i18n: null,          width: 56,   cls: 'col-prog',     cell: (t) => R._progCell(t) },
        predecessors: { label: 'Runs after', i18n: 'col.pred', width: 100, cls: 'col-pred',   cell: (t) => R._predCell(t) },
        assignee:     { label: 'Assignee', i18n: 'col.assignee', width: 108, cls: 'col-assignee', cell: (t) => R._assigneeCell(t) },
        slack:        { label: 'Slack', i18n: 'col.slack',   width: 64,   cls: 'col-slack',    cell: (t) => R._slackCell(t) },
        cost:         { label: 'Cost', i18n: 'col.cost',     width: 82,   cls: 'col-cost',     cell: (t) => R._costCell(t) },
        baseStart:    { label: 'Base start', i18n: null,     width: 86,   cls: 'col-bstart',   cell: (t) => R._baseCell(t, 'start') },
        baseEnd:      { label: 'Base finish', i18n: null,    width: 86,   cls: 'col-bend',     cell: (t) => R._baseCell(t, 'end') },
        startVar:     { label: 'Start var', i18n: null,      width: 78,   cls: 'col-svar',     cell: (t) => R._varCell(t, 'start') },
        finishVar:    { label: 'Finish var', i18n: null,     width: 82,   cls: 'col-fvar',     cell: (t) => R._varCell(t, 'end') },
      };
      return this._cols;
    },
    ALL_COLUMN_KEYS: ['id', 'wbs', 'name', 'start', 'end', 'duration', 'progress', 'predecessors', 'assignee', 'slack', 'cost', 'baseStart', 'baseEnd', 'startVar', 'finishVar'],
    visibleColumns() {
      const reg = this.columns();
      let keys = Model.project.settings.columns;
      if (!Array.isArray(keys) || !keys.length) keys = ['id', 'wbs', 'name', 'start', 'end', 'duration', 'progress', 'predecessors', 'assignee'];
      if (keys.indexOf('name') < 0) keys = ['name'].concat(keys); // name is mandatory
      return keys.map(k => reg[k] ? Object.assign({ key: k }, reg[k]) : null).filter(Boolean);
    },
    colLabel(c) {
      if (c.i18n && window.I18N) { const v = I18N.t(c.i18n); if (v && v !== c.i18n) return v; }
      return c.label;
    },

    // ---------------- COLUMN WIDTHS (resizable + auto-fit) ----------------
    // A user-set width always wins over the registry default. `name` has a null
    // default meaning "flex to fill" — once the user drags it, it becomes fixed.
    MIN_COL_W: 34,
    colWidth(c) {
      const cw = Model.project.settings.colWidths || {};
      return cw[c.key] != null ? cw[c.key] : c.width;
    },
    // Widths live in CSS vars on #gridPane so a resize is one style write for
    // the header AND every row, instead of touching each cell.
    applyColWidths() {
      const pane = this.els.gridPane; if (!pane) return;
      this.visibleColumns().forEach(c => {
        const w = this.colWidth(c);
        if (w != null) pane.style.setProperty('--cw-' + c.key, w + 'px');
        else pane.style.removeProperty('--cw-' + c.key);
      });
    },
    sizeCell(cell, c) {
      const w = this.colWidth(c);
      if (w != null) cell.style.width = 'var(--cw-' + c.key + ', ' + w + 'px)';
      else { cell.style.flex = '1'; cell.style.minWidth = '130px'; }
    },
    setColWidth(key, px, persist) {
      const s = Model.project.settings;
      if (!s.colWidths) s.colWidths = {};
      s.colWidths[key] = Math.max(this.MIN_COL_W, Math.round(px));
      this.els.gridPane.style.setProperty('--cw-' + key, s.colWidths[key] + 'px');
      if (persist) { Model.save(); this.render(); }
    },

    beginColResize(e, c) {
      e.preventDefault(); e.stopPropagation();
      const head = this.els.gridHead.querySelector('.gh-cell.' + c.cls.split(' ')[0]);
      const startW = head ? head.getBoundingClientRect().width : (this.colWidth(c) || 130);
      const startX = e.clientX;
      document.body.classList.add('col-resizing');
      const move = (ev) => this.setColWidth(c.key, startW + (ev.clientX - startX), false);
      const up = () => {
        window.removeEventListener('mousemove', move);
        window.removeEventListener('mouseup', up);
        document.body.classList.remove('col-resizing');
        Model.save(); this.render();
      };
      window.addEventListener('mousemove', move);
      window.addEventListener('mouseup', up);
    },

    // Measure the widest rendered value in a column and size to it.
    autoFitColumn(key, skipRender) {
      const c = this.visibleColumns().find(x => x.key === key); if (!c) return;
      const base = c.cls.split(' ')[0];
      const headCell = this.els.gridHead.querySelector('.gh-cell.' + base);
      const probe = U.el('span', { style: {
        position: 'absolute', visibility: 'hidden', whiteSpace: 'pre', left: '-9999px', top: '0',
      } });
      document.body.appendChild(probe);
      const measure = (text, srcEl) => {
        if (srcEl) { const cs = getComputedStyle(srcEl); probe.style.font = cs.font; probe.style.letterSpacing = cs.letterSpacing; }
        probe.textContent = text == null ? '' : String(text);
        return probe.getBoundingClientRect().width;
      };
      let max = headCell ? measure(this.colLabel(c), headCell) + 18 : 0;
      this.els.gridBody.querySelectorAll('.grow-cell.' + base).forEach(cell => {
        const input = cell.querySelector('input');
        const src = input || cell.querySelector('.ro-text') || cell;
        max = Math.max(max, measure(input ? input.value : src.textContent, src));
      });
      probe.remove();
      // padding + room for the name column's twisty/dot affordances
      const pad = key === 'name' ? 62 : 24;
      this.setColWidth(key, Math.min(420, max + pad), false);
      if (!skipRender) { Model.save(); this.render(); }
    },
    autoFitAll() {
      this.visibleColumns().forEach(c => this.autoFitColumn(c.key, true));
      Model.save(); this.render();
    },
    resetColWidths() {
      Model.project.settings.colWidths = {};
      this.visibleColumns().forEach(c => this.els.gridPane.style.removeProperty('--cw-' + c.key));
      Model.save(); this.render();
    },

    renderGrid(visible) {
      this.applyColWidths();
      this.renderGridHead();
      const body = this.els.gridBody;
      U.clear(body);
      visible.forEach((t, i) => body.appendChild(this.gridRow(t, i)));
    },

    renderGridHead() {
      const head = this.els.gridHead;
      U.clear(head);
      this.visibleColumns().forEach(c => {
        const cell = U.el('div', { class: 'gh-cell ' + c.cls }, this.colLabel(c));
        this.sizeCell(cell, c);
        const grip = U.el('i', { class: 'gh-resize', title: 'Drag to resize · double-click to fit contents' });
        grip.addEventListener('mousedown', (e) => this.beginColResize(e, c));
        grip.addEventListener('dblclick', (e) => { e.preventDefault(); e.stopPropagation(); this.autoFitColumn(c.key); });
        cell.appendChild(grip);
        head.appendChild(cell);
      });
    },

    gridRow(t, i) {
      const cls = ['grow-row'];
      if (t.id === Model.selectedId) cls.push('selected');
      if (t.type === 'group') cls.push('is-group');
      if (t.type === 'milestone') cls.push('is-milestone');
      const row = U.el('div', { class: cls.join(' '), 'data-id': t.id, draggable: 'true' });
      this.visibleColumns().forEach(c => {
        const cell = c.cell(t, i);
        this.sizeCell(cell, c);
        row.appendChild(cell);
      });
      row.addEventListener('click', (e) => { if (e.target.tagName === 'INPUT') return; Model.select(t.id); });
      row.addEventListener('dblclick', (e) => { if (e.target.tagName === 'INPUT') return; Model.select(t.id); App.openDrawer(t.id, 'row'); });
      Interactions.wireRowDrag(row, t.id);
      return row;
    },

    // ---- individual cell builders ----
    _nameCell(t) {
      const depth = Model.depth(t);
      const hasKids = Model.isParent(t.id);
      const twisty = U.el('span', {
        class: 'twisty' + (hasKids ? '' : ' leaf'),
        html: hasKids ? (t.collapsed ? '▶' : '▼') : '•',
        onclick: (e) => { e.stopPropagation(); if (hasKids) Model.toggleCollapse(t.id); },
      });
      const dot = U.el('span', { class: 'dot', style: { background: t.type === 'group' ? '#475569' : t.color } });
      const input = U.el('input', {
        class: 'cell-input', value: t.name, spellcheck: 'false',
        /* The name field is the one cell whose value IS its meaning, so
           it only needs the column, not the row context. */
        'aria-label': App.T('col.name', 'Task name'),
        style: { paddingLeft: (depth * 14) + 'px', flex: '1' },
        onchange: (e) => Model.update(t.id, { name: e.target.value }),
        onkeydown: (e) => { if (e.key === 'Enter') e.target.blur(); },
      });
      return U.el('div', { class: 'grow-cell col-name' }, [twisty, dot, input]);
    },
    /* Every grid input needs an accessible name, and the name has to say
       WHICH ROW it belongs to.

       Without this a screen-reader user tabbing across the grid hears
       "edit text, 2026-07-21" then "2026-08-10" — two dates with no way
       to tell start from end, or which task they belong to, because the
       column header is nowhere in the announcement. The visible layout
       carries that meaning; the accessibility tree did not.

       Found by reading the accessibility tree rather than the spec: the
       markup satisfies every rule we had a checker for, and was still
       unusable to listen to. */
    _cellName(t, label) {
      return App.Tn('a11y.cell', '{label} for {task}', { label, task: t.name || '' });
    },
    _dateCell(t, which) {
      const label = which === 'start'
        ? App.T('col.start', 'Start')
        : App.T('col.end', 'Finish');
      const input = U.el('input', {
        class: 'cell-input', type: 'date', value: which === 'start' ? t.start : t.end,
        'aria-label': this._cellName(t, label),
        disabled: which === 'end' && (t.type === 'milestone' || t.type === 'group'),
        onchange: (e) => this._editDate(t, which, e.target.value),
      });
      return U.el('div', { class: 'grow-cell col-' + (which === 'start' ? 'start' : 'end') }, input);
    },
    _durCell(t) {
      // Duration is expressed in WORKING days when a calendar is active,
      // so typing "10" gives ten days of work rather than ten dates.
      const cal = Cal.of(Model.project);
      const shown = t.type === 'milestone' ? '' : Cal.duration(t.start, t.end, cal);
      const input = U.el('input', {
        class: 'cell-input', type: 'number', min: '1', value: shown,
        title: Cal.active(cal) ? 'Working days (weekends and holidays excluded)' : 'Calendar days',
        'aria-label': this._cellName(t, App.T('col.days', 'Days')),
        disabled: t.type === 'milestone' || t.type === 'group',
        onchange: (e) => {
          const d = Math.max(1, +e.target.value || 1);
          Model.update(t.id, { end: Cal.endFrom(t.start, d, cal) });
        },
      });
      return U.el('div', { class: 'grow-cell col-dur' }, input);
    },
    _progCell(t) {
      const input = U.el('input', {
        class: 'cell-input', type: 'number', min: '0', max: '100', value: t.progress || 0,
        /* The progress column header is just "%", which is meaningless
           read aloud, so this needs its own spelled-out string rather
           than the column label. */
        'aria-label': this._cellName(t, App.T('a11y.progress', 'Progress percent')),
        disabled: t.type === 'group',
        onchange: (e) => Model.update(t.id, { progress: Math.max(0, Math.min(100, +e.target.value || 0)) }),
      });
      return U.el('div', { class: 'grow-cell col-prog' },
        U.el('div', { class: 'prog-wrap' }, [input, U.el('div', { class: 'prog-bar' }, U.el('i', { style: { width: (t.progress || 0) + '%' } }))]));
    },
    _assigneeCell(t) {
      const input = U.el('input', {
        class: 'cell-input', value: t.assignee || '', placeholder: '—',
        'aria-label': this._cellName(t, App.T('col.assignee', 'Assignee')),
        onchange: (e) => Model.update(t.id, { assignee: e.target.value }),
      });
      return U.el('div', { class: 'grow-cell col-assignee' }, input);
    },
    _predCell(t) {
      const text = (t.deps || []).map(d => {
        const n = Model.number(d.from); if (n <= 0) return null;
        const ty = (d.type && d.type !== 'FS') ? d.type : '';
        const lag = d.lag ? ((d.lag > 0 ? '+' : '') + d.lag + 'd') : '';
        return n + ty + lag;
      }).filter(Boolean).join(',');
      const input = U.el('input', {
        class: 'cell-input', value: text, placeholder: '—',
        title: 'Predecessors by row #, e.g. 3, 5SS, 4FS+2d',
        onchange: (e) => this._editPred(t, e.target.value),
      });
      return U.el('div', { class: 'grow-cell col-pred' }, input);
    },
    _editPred(t, val) {
      const deps = [], seen = new Set();
      String(val).split(',').map(s => s.trim()).filter(Boolean).forEach(tok => {
        const m = tok.match(/^(\d+)\s*(FS|SS|FF|SF)?\s*([+-]\s*\d+)?\s*d?$/i);
        if (!m) return;
        const from = Model.byNumber(parseInt(m[1], 10));
        if (!from || from.id === t.id || seen.has(from.id)) return;
        if (Model._wouldCycle(from.id, t.id)) return;
        seen.add(from.id);
        deps.push({ from: from.id, type: (m[2] || 'FS').toUpperCase(), lag: m[3] ? parseInt(m[3].replace(/\s/g, ''), 10) : 0 });
      });
      Model.snapshot();
      t.deps = deps;
      Model._recalcGroups();
      Model._afterChange();
    },
    _slackCell(t) {
      let v = '';
      if (this.cpm && this.cpm.slack && this.cpm.slack[t.id] != null && t.type !== 'group') v = this.cpm.slack[t.id] + 'd';
      const crit = this.cpm && this.cpm.critical && this.cpm.critical.has(t.id);
      return U.el('div', { class: 'grow-cell col-slack' }, U.el('span', { class: 'ro-text' + (crit ? ' slack-crit' : '') }, v));
    },
    // frozen baseline date, read-only
    _baseCell(t, which) {
      const b = Model.baselineOf(t.id);
      const cls = 'col-' + (which === 'start' ? 'bstart' : 'bend');
      return U.el('div', { class: 'grow-cell ' + cls },
        U.el('span', { class: 'ro-text base-date' }, b ? U.fmtShort(b[which]) : '—'));
    },
    // slippage vs baseline: +n late, -n early, "On plan" when zero
    _varCell(t, which) {
      const cls = 'col-' + (which === 'start' ? 'svar' : 'fvar');
      const v = Model.variance(t.id, which);
      if (v == null) return U.el('div', { class: 'grow-cell ' + cls }, U.el('span', { class: 'ro-text' }, '—'));
      const txt = v === 0 ? '0d' : (v > 0 ? '+' + v + 'd' : v + 'd');
      const tone = v > 0 ? ' var-late' : (v < 0 ? ' var-early' : ' var-onplan');
      return U.el('div', { class: 'grow-cell ' + cls },
        U.el('span', { class: 'ro-text' + tone, title: v > 0 ? v + ' day(s) later than baseline' : v < 0 ? (-v) + ' day(s) earlier than baseline' : 'On plan' }, txt));
    },
    _costCell(t) {
      if (t.type === 'group') return U.el('div', { class: 'grow-cell col-cost' }, U.el('span', { class: 'ro-text' }, (t.cost ? t.cost.toLocaleString() : '')));
      const input = U.el('input', {
        class: 'cell-input', type: 'number', min: '0', value: t.cost || 0,
        style: { textAlign: 'right' },
        onchange: (e) => Model.update(t.id, { cost: Math.max(0, +e.target.value || 0) }),
      });
      return U.el('div', { class: 'grow-cell col-cost' }, input);
    },

    _editDate(t, which, val) {
      if (!val) return;
      if (which === 'start') {
        const cal = Cal.of(Model.project);
        const dur = Cal.duration(t.start, t.end, cal);
        const patch = { start: val };
        if (t.type === 'milestone') patch.end = val;
        else patch.end = Cal.endFrom(val, Math.max(1, dur), cal);
        Model.update(t.id, patch);
      } else {
        if (U.parse(val) < U.parse(t.start)) val = t.start;
        Model.update(t.id, { end: val });
      }
    },

    wbs(t) {
      // hierarchical number like 1, 1.1, 2
      const build = (id) => {
        const node = Model.get(id);
        const siblings = Model.tasks().filter(x => x.parentId === node.parentId);
        const n = siblings.indexOf(node) + 1;
        return node.parentId ? build(node.parentId) + '.' + n : '' + n;
      };
      return build(t.id);
    },

    // ---------------- CHART HEADER ----------------
    renderChartHead() {
      const head = this.els.chartHead;
      U.clear(head);
      const rs = this.rs;
      const inner = U.el('div', { style: { position: 'relative', width: rs.width + 'px', height: '100%' } });

      const upper = [], lower = [];
      const dayW = rs.dayW;

      if (rs.zoom === 'day' || rs.zoom === 'week') {
        // upper = months
        let cur = rs.origin;
        for (let i = 0; i < rs.totalDays; ) {
          const d = U.parse(cur);
          const monthStart = new Date(d.getFullYear(), d.getMonth(), 1);
          const monthEnd = new Date(d.getFullYear(), d.getMonth() + 1, 0);
          const segStart = Math.max(i, this.off(U.toISO(monthStart)));
          const segEndDay = this.off(U.toISO(monthEnd));
          const from = i;
          const to = Math.min(rs.totalDays - 1, segEndDay);
          upper.push({ x: from * dayW, w: (to - from + 1) * dayW, label: U.fmtMonth(cur) });
          i = to + 1; cur = U.addDays(rs.origin, i);
        }
        if (rs.zoom === 'day') {
          for (let i = 0; i < rs.totalDays; i++) {
            const iso = U.addDays(rs.origin, i);
            lower.push({ x: i * dayW, w: dayW, label: U.parse(iso).getDate(), weekend: U.isWeekend(iso), iso });
          }
        } else {
          // weeks
          for (let i = 0; i < rs.totalDays; i += 7) {
            const iso = U.addDays(rs.origin, i);
            lower.push({ x: i * dayW, w: 7 * dayW, label: U.fmtShort(iso), iso });
          }
        }
      } else if (rs.zoom === 'month') {
        // upper years, lower months
        let cur = rs.origin;
        let yStart = 0, yLabel = U.parse(cur).getFullYear();
        for (let i = 0; i < rs.totalDays; ) {
          const d = U.parse(U.addDays(rs.origin, i));
          const monthEnd = new Date(d.getFullYear(), d.getMonth() + 1, 0);
          const to = Math.min(rs.totalDays - 1, this.off(U.toISO(monthEnd)));
          lower.push({ x: i * dayW, w: (to - i + 1) * dayW, label: U.monthName(d.getMonth()) });
          if (d.getFullYear() !== yLabel) {
            upper.push({ x: yStart * dayW, w: (i - yStart) * dayW, label: yLabel });
            yStart = i; yLabel = d.getFullYear();
          }
          i = to + 1;
        }
        upper.push({ x: yStart * dayW, w: (rs.totalDays - yStart) * dayW, label: yLabel });
      } else { // quarter
        let cur = rs.origin, yStart = 0, yLabel = U.parse(cur).getFullYear();
        for (let i = 0; i < rs.totalDays; ) {
          const d = U.parse(U.addDays(rs.origin, i));
          const q = Math.floor(d.getMonth() / 3);
          const qEndMonth = q * 3 + 3;
          const qEnd = new Date(d.getFullYear(), qEndMonth, 0);
          const to = Math.min(rs.totalDays - 1, this.off(U.toISO(qEnd)));
          lower.push({ x: i * dayW, w: (to - i + 1) * dayW, label: 'Q' + (q + 1) });
          if (d.getFullYear() !== yLabel) {
            upper.push({ x: yStart * dayW, w: (i - yStart) * dayW, label: yLabel });
            yStart = i; yLabel = d.getFullYear();
          }
          i = to + 1;
        }
        upper.push({ x: yStart * dayW, w: (rs.totalDays - yStart) * dayW, label: yLabel });
      }

      upper.forEach(s => inner.appendChild(U.el('div', { class: 'head-tier', style: { left: s.x + 'px', width: s.w + 'px' } }, '' + s.label)));
      lower.forEach(s => inner.appendChild(U.el('div', { class: 'head-tier lower' + (s.weekend ? ' weekend' : ''), style: { left: s.x + 'px', width: s.w + 'px', textAlign: rs.zoom === 'day' ? 'center' : 'left' } }, '' + s.label)));
      head.appendChild(inner);
    },

    // ---------------- CHART BODY ----------------
    renderChartBody(visible) {
      const rs = this.rs;
      this.els.chartCanvas.style.width = rs.width + 'px';
      this.els.chartCanvas.style.height = Math.max(rs.height, 100) + 'px';

      const bg = this.buildBackground(visible);
      const bars = this.els.barsLayer;
      U.clear(bars);
      bars.appendChild(bg);

      // bars
      // baseline ghosts render first so live bars sit on top of them
      if (Model.hasBaseline() && Model.project.settings.showBaseline) {
        visible.forEach((t, i) => { const g = this.baselineBar(t, i); if (g) bars.appendChild(g); });
      }
      visible.forEach((t, i) => bars.appendChild(this.bar(t, i)));

      // dependency arrows
      this.renderDeps(visible);
    },

    buildBackground(visible) {
      const rs = this.rs;
      const frag = document.createDocumentFragment();
      const settings = Model.project.settings;

      /* Non-working column shading (day/week zoom only, to avoid clutter).
         When a working calendar is active this follows the calendar —
         a Saturday that the user marked as a working day is no longer
         shaded, and a holiday is, with its name on hover. */
      const shadeCal = Cal.of(Model.project);
      const calShading = Cal.active(shadeCal);
      if (settings.showWeekends && (rs.zoom === 'day' || rs.zoom === 'week')) {
        for (let i = 0; i < rs.totalDays; i++) {
          const iso = U.addDays(rs.origin, i);
          const off = calShading ? !Cal.isWorking(iso, shadeCal) : U.isWeekend(iso);
          if (!off) continue;
          const holiday = calShading && Cal.isHoliday(iso, shadeCal);
          frag.appendChild(U.el('div', {
            class: 'col-weekend' + (holiday ? ' col-holiday' : ''),
            title: holiday ? shadeCal.holidays[iso] : null,
            style: { left: (i * rs.dayW) + 'px', width: rs.dayW + 'px', height: rs.height + 'px' },
          }));
        }
      }
      // vertical grid lines (weekly)
      const step = rs.zoom === 'day' ? 1 : rs.zoom === 'week' ? 7 : rs.zoom === 'month' ? 30 : 90;
      if (rs.dayW * step >= 6) {
        for (let i = 0; i <= rs.totalDays; i += step) {
          frag.appendChild(U.el('div', { class: 'col-line', style: { left: (i * rs.dayW) + 'px', height: rs.height + 'px' } }));
        }
      }
      // horizontal row lines
      visible.forEach((t, i) => frag.appendChild(U.el('div', { class: 'row-line', style: { top: ((i + 1) * ROW_H) + 'px', width: rs.width + 'px' } })));

      // today
      if (settings.showToday && Model.tasks().length) {
        const today = U.today();
        if (U.parse(today) >= U.parse(rs.origin) && U.parse(today) <= U.parse(rs.endDate)) {
          const x = this.xOf(today) + rs.dayW / 2;
          frag.appendChild(U.el('div', { class: 'today-line', style: { left: x + 'px', height: rs.height + 'px' } }));
          frag.appendChild(U.el('div', { class: 'today-flag', style: { left: x + 'px' } }, 'Today'));
        }
      }
      const wrap = U.el('div', { style: { position: 'absolute', inset: '0' } });
      wrap.appendChild(frag);
      return wrap;
    },

    // Thin grey bar showing where this task was planned to sit. Purely visual —
    // no pointer events, so it never interferes with dragging the real bar.
    baselineBar(t, i) {
      const b = Model.baselineOf(t.id);
      if (!b || !b.start || !b.end) return null;
      const rs = this.rs;
      const x = this.xOf(b.start);
      const isMile = t.type === 'milestone';
      const w = isMile ? 10 : Math.max(rs.dayW * U.duration(b.start, b.end), 4);
      const left = isMile ? (x + rs.dayW / 2 - 5) : x;
      const slipped = U.diffDays(b.end, t.end) > 0;
      return U.el('div', {
        class: 'baseline-bar' + (isMile ? ' milestone' : '') + (slipped ? ' slipped' : ''),
        'data-baseline-for': t.id,
        title: 'Baseline: ' + U.fmtShort(b.start) + ' → ' + U.fmtShort(b.end),
        style: { left: left + 'px', top: (i * ROW_H + BAR_TOP + BAR_H - 1) + 'px', width: w + 'px' },
      });
    },

    /* The accessible name has to carry everything the bar conveys
       visually, because for a screen-reader user it is the only thing
       there is. A bare "Design phase" would be a label for a rectangle
       whose whole meaning is its position and length. */
    /* This is the ONLY description of a bar a screen-reader user gets —
       the bar itself is a positioned div, so everything meaningful about
       it lives here.

       It used to be built from hard-coded English, which meant a German
       or Chinese user heard the task name in their language and
       "Jul 21 to Aug 10. 15 working days. group. 43% complete." in
       English. Exactly the failure the guide diagrams had: translated
       wrapper, untranslated content, and invisible to every text check
       because it is an attribute. */
    barLabel(t) {
      const parts = [t.name || App.T('a11y.untitled', 'Untitled')];
      if (t.type === 'milestone') {
        parts.push(App.Tn('a11y.milestoneOn', 'milestone on {date}', { date: U.fmtShort(t.start) }));
      } else {
        const cal = Cal.of(Model.project);
        const days = Cal.active(cal) ? Cal.duration(t.start, t.end, cal) : U.duration(t.start, t.end);
        parts.push(App.Tn('a11y.range', '{from} to {to}', { from: U.fmtShort(t.start), to: U.fmtShort(t.end) }));
        parts.push(App.Tn(days === 1 ? 'a11y.day1' : 'a11y.dayN', days === 1 ? '{n} working day' : '{n} working days', { n: days }));
      }
      if (t.type === 'group') parts.push(App.T('a11y.group', 'group'));
      if (Number(t.progress) > 0) parts.push(App.Tn('a11y.pctDone', '{n}% complete', { n: Math.round(t.progress) }));
      if (t.assignee) parts.push(App.Tn('a11y.assignedTo', 'assigned to {who}', { who: t.assignee }));
      if (this.cpm && this.cpm.critical && this.cpm.critical.has(t.id)) parts.push(App.T('a11y.onCritical', 'on the critical path'));
      const n = (t.deps || []).length;
      if (n) parts.push(App.Tn(n === 1 ? 'a11y.dep1' : 'a11y.depN', n === 1 ? 'depends on {n} task' : 'depends on {n} tasks', { n }));
      return parts.join('. ') + '.';
    },

    /* Roving tabindex: exactly one bar is in the tab order at a time,
       so Tab moves past the chart in one press instead of trapping the
       user in a 200-stop tour of it. Arrow keys move between bars once
       inside — the composite-widget pattern from the ARIA grid spec. */
    barA11y(b, t) {
      const isCurrent = t.id === Model.selectedId
        || (!Model.selectedId && this.rs.visible && this.rs.visible[0] && this.rs.visible[0].id === t.id);
      b.setAttribute('tabindex', isCurrent ? '0' : '-1');
      b.setAttribute('role', 'button');
      b.setAttribute('aria-label', this.barLabel(t));
      if (t.type === 'group') b.setAttribute('aria-expanded', String(!t.collapsed));
      return b;
    },

    bar(t, i) {
      const rs = this.rs;
      const y = i * ROW_H + BAR_TOP;
      const x = this.xOf(t.start);
      const critical = this.cpm && this.cpm.critical.has(t.id);

      if (t.type === 'milestone') {
        const b = U.el('div', { class: 'bar milestone' + (t.id === Model.selectedId ? ' selected' : ''), 'data-id': t.id,
          style: { left: (x + rs.dayW / 2 - 11) + 'px', top: (y) + 'px' } });
        b.appendChild(U.el('div', { class: 'milestone-diamond', style: { background: t.color } }));
        b.appendChild(U.el('div', { class: 'bar-label' }, t.name));
        b.appendChild(U.el('div', { class: 'bar-dep-dot r' }));
        b.appendChild(U.el('div', { class: 'bar-dep-dot l' }));
        this.barA11y(b, t);
        Interactions.wireBar(b, t);
        return b;
      }

      const w = Math.max(rs.dayW * U.duration(t.start, t.end), 6);
      const isGroup = t.type === 'group';
      const cls = ['bar'];
      if (isGroup) cls.push('group');
      if (t.id === Model.selectedId) cls.push('selected');
      if (critical) cls.push('critical');

      if (t._context) cls.push('is-context');

      const b = U.el('div', { class: cls.join(' '), 'data-id': t.id,
        style: { left: x + 'px', top: (isGroup ? i * ROW_H + (ROW_H - 12) / 2 : y) + 'px', width: w + 'px',
                 background: isGroup ? undefined : t.color } });

      if (!isGroup) {
        // progress fill
        if (Model.project.settings.showProgress && t.progress > 0) {
          b.appendChild(U.el('div', { class: 'bar-fill', style: { width: (t.progress) + '%' } }));
        }
        // label — inside if wide enough
        const inside = w > 60;
        const lbl = U.el('div', { class: 'bar-label' + (inside ? ' inside' : ''),
          style: inside ? { color: U.contrast(t.color) } : {} }, t.name + (t.assignee ? '  ·  ' + t.assignee : ''));
        b.appendChild(lbl);

        // handles
        b.appendChild(U.el('div', { class: 'bar-handle l' }));
        b.appendChild(U.el('div', { class: 'bar-handle r' }));
        // progress handle
        if (Model.project.settings.showProgress) {
          b.appendChild(U.el('div', { class: 'bar-progress-handle', style: { left: (t.progress || 0) + '%' } }));
        }
        // dep dots
        b.appendChild(U.el('div', { class: 'bar-dep-dot r' }));
        b.appendChild(U.el('div', { class: 'bar-dep-dot l' }));
      } else {
        b.appendChild(U.el('div', { class: 'bar-label', style: { left: (w + 8) + 'px' } }, t.name));
      }

      this.barA11y(b, t);
      Interactions.wireBar(b, t);
      return b;
    },

    // ---------------- DEPENDENCY ARROWS ----------------
    renderDeps(visible) {
      const svg = this.els.chartSvg;
      const rs = this.rs;
      U.clear(svg);
      svg.setAttribute('width', rs.width);
      svg.setAttribute('height', rs.height);
      svg.style.width = rs.width + 'px';
      svg.style.height = rs.height + 'px';

      const rowOf = rs.rowOf;
      // map hidden endpoints to nearest visible ancestor
      const visId = id => {
        while (id && rowOf[id] == null) id = (Model.get(id) || {}).parentId;
        return id;
      };

      Model.tasks().forEach(t => {
        (t.deps || []).forEach(d => {
          const toId = visId(t.id), fromId = visId(d.from);
          if (!toId || !fromId || toId === fromId) return;
          const from = Model.get(fromId), to = Model.get(toId);
          const path = this.depPath(from, to, d.type || 'FS', rowOf);
          const isCrit = this.cpm && this.cpm.critEdges && this.cpm.critEdges.has(d.from + '>' + t.id);
          const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          p.setAttribute('d', path.d);
          p.setAttribute('class', 'dep-path' + (isCrit ? ' critical' : ''));
          svg.appendChild(p);
          const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
          arrow.setAttribute('points', path.arrow);
          arrow.setAttribute('class', 'dep-arrow' + (isCrit ? ' critical' : ''));
          svg.appendChild(arrow);
          // wide transparent hit path on top — click to edit/remove the link
          const hit = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          hit.setAttribute('d', path.d);
          hit.setAttribute('class', 'dep-hit');
          hit.addEventListener('click', (ev) => { ev.stopPropagation(); App.openDepEditor(d.from, t.id, ev.clientX, ev.clientY); });
          hit.addEventListener('mouseenter', () => p.classList.add('dep-hover'));
          hit.addEventListener('mouseleave', () => p.classList.remove('dep-hover'));
          svg.appendChild(hit);
        });
      });
    },

    barGeom(t, rowOf) {
      const rs = this.rs;
      const row = rowOf[t.id];
      const y = row * ROW_H + ROW_H / 2;
      let x1 = this.xOf(t.start);
      let x2 = t.type === 'milestone' ? x1 + rs.dayW : this.xOf(t.start) + Math.max(rs.dayW * U.duration(t.start, t.end), 6);
      if (t.type === 'milestone') { x1 = this.xOf(t.start) + rs.dayW / 2 - 8; x2 = x1 + 16; }
      return { x1, x2, y, row };
    },

    depPath(from, to, type, rowOf) {
      const a = this.barGeom(from, rowOf);
      const b = this.barGeom(to, rowOf);
      // start side depends on FS/SS/FF/SF
      const startX = (type === 'SS' || type === 'SF') ? a.x1 : a.x2;
      const endX = (type === 'FF' || type === 'SF') ? b.x2 : b.x1;
      const endsAtStart = (type === 'FS' || type === 'SS'); // arrow enters left side of target
      const sx = startX, sy = a.y, ex = endX, ey = b.y;
      const g = 12, ah = 9, av = 5; // arrowhead length / half-height (bigger = more visible)
      let d, arrow;
      if (endsAtStart) {
        // route to left of target; arrow tip touches the target's left edge
        if (ex - g > sx + g) {
          d = `M ${sx} ${sy} H ${sx + g} V ${ey} H ${ex - ah}`;
        } else {
          const midY = sy + (ey > sy ? ROW_H / 2 : -ROW_H / 2);
          d = `M ${sx} ${sy} H ${sx + g} V ${midY} H ${ex - g} V ${ey} H ${ex - ah}`;
        }
        arrow = `${ex - ah},${ey - av} ${ex - ah},${ey + av} ${ex},${ey}`;
      } else {
        // enter right side of target (FF/SF) — arrow points left
        d = `M ${sx} ${sy} H ${Math.max(sx, ex) + g} V ${ey} H ${ex + ah}`;
        arrow = `${ex + ah},${ey - av} ${ex + ah},${ey + av} ${ex},${ey}`;
      }
      return { d, arrow };
    },

    ROW_H, BAR_H, BAR_TOP,
  };

  window.Render = Render;
})();
