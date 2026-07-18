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

      Model.on('load', (p) => { this.syncControls(); this.render(); });
      Model.on('change', () => this.render());
      Model.on('select', () => { this.render(); this.refreshDrawer(); });
      Model.on('history', () => this.syncHistoryButtons());
      Model.on('saved', () => this.flashSaved());

      this.render();
      this.syncControls();
      this.syncHistoryButtons();

      if (window.Features) Features.init();
    },

    render() {
      Render.render();
      this.applyGridWidth();
      this.applyFont();
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
      this.applyGridWidth();
      this.applyFont();
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
      chartScroll.addEventListener('scroll', () => {
        chartHead.scrollLeft = chartScroll.scrollLeft;
        gridBody.scrollTop = chartScroll.scrollTop;
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
      });
    },

    // ---------------- toast ----------------
    toast(msg) {
      const t = U.$('#toast');
      t.textContent = msg; t.hidden = false;
      clearTimeout(this._toastT);
      this._toastT = setTimeout(() => t.hidden = true, 2200);
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
