/* ============================================================
   model.js — application state, tasks, undo/redo, persistence
   Exposes a global `Model` (event-emitting store).
   ============================================================ */
(function () {
  const LS_KEY = 'gantts.project.v1';
  const LS_PROJECTS = 'gantts.projects.v1';

  function blankProject(name) {
    return {
      id: U.uid('p'),
      name: name || 'Untitled Project',
      created: Date.now(),
      updated: Date.now(),
      settings: {
        zoom: 'week',
        showCritical: false,
        showWeekends: true,
        showProgress: true,
        showToday: true,
        gridWidth: 720, // wide enough that the Predecessors column is visible without scrolling
        chartFont: 'var(--font)',
        columns: ['id', 'wbs', 'name', 'start', 'end', 'duration', 'progress', 'predecessors', 'assignee'],
        colWidths: {}, // key -> px, set by dragging a header edge or auto-fit
        showBaseline: true,
      },
      // Frozen copy of the plan, for tracking slippage. null until the user sets one.
      // { savedAt, tasks: { [id]: { start, end, progress } } }
      baseline: null,
      tasks: [],
    };
  }

  // A task:
  // { id, name, start, end, progress, color, assignee, type:'task'|'milestone'|'group',
  //   parentId, collapsed, notes, deps:[{from, type:'FS'|'SS'|'FF'|'SF', lag}] }

  const Model = {
    project: null,
    selectedId: null,
    _listeners: {},
    _undo: [],
    _redo: [],
    _snapshotPending: null,

    // ---------- events ----------
    on(evt, fn) { (this._listeners[evt] = this._listeners[evt] || []).push(fn); return this; },
    emit(evt, data) { (this._listeners[evt] || []).forEach(fn => fn(data)); },

    // ---------- init / persistence ----------
    init() {
      let loaded = null;
      try { loaded = JSON.parse(localStorage.getItem(LS_KEY)); } catch (e) {}
      // URL share import wins
      const shared = this._readShareLink();
      if (shared) loaded = shared;
      this.project = loaded && loaded.tasks ? this._migrate(loaded) : blankProject();
      this.emit('load', this.project);
      return this;
    },

    _migrate(p) {
      p.settings = Object.assign(blankProject().settings, p.settings || {});
      if (!Array.isArray(p.settings.columns) || !p.settings.columns.length) p.settings.columns = blankProject().settings.columns.slice();
      p.tasks = (p.tasks || []).map(t => Object.assign({
        progress: 0, color: U.PALETTE[0], assignee: '', type: 'task',
        parentId: null, collapsed: false, notes: '', deps: [], cost: 0,
      }, t));
      return p;
    },

    // task's 1-based row number (for MS-Project-style predecessor references)
    number(id) { return this.index(id) + 1; },
    byNumber(n) { return this.project.tasks[n - 1]; },

    save: U.debounce(function () { Model._persist(); }, 400),

    _persist() {
      this.project.updated = Date.now();
      try {
        localStorage.setItem(LS_KEY, JSON.stringify(this.project));
        this._touchProjectIndex();
        this.emit('saved');
      } catch (e) { console.warn('save failed', e); }
    },

    _touchProjectIndex() {
      let idx = this._projectIndex();
      const rec = { id: this.project.id, name: this.project.name, updated: this.project.updated, count: this.project.tasks.length };
      const i = idx.findIndex(r => r.id === this.project.id);
      if (i >= 0) idx[i] = rec; else idx.push(rec);
      // store each project blob under its own key
      try {
        localStorage.setItem('gantts.p.' + this.project.id, JSON.stringify(this.project));
        localStorage.setItem(LS_PROJECTS, JSON.stringify(idx));
      } catch (e) {}
    },
    _projectIndex() {
      try { return JSON.parse(localStorage.getItem(LS_PROJECTS)) || []; } catch (e) { return []; }
    },
    listProjects() { return this._projectIndex().sort((a, b) => b.updated - a.updated); },

    openProject(id) {
      try {
        const p = JSON.parse(localStorage.getItem('gantts.p.' + id));
        if (p) { this.project = this._migrate(p); this.selectedId = null; this._undo = []; this._redo = []; this._persist(); this.emit('load', this.project); }
      } catch (e) {}
    },
    newProject(name) {
      this.project = blankProject(name); this.selectedId = null; this._undo = []; this._redo = [];
      this._persist(); this.emit('load', this.project);
    },
    deleteProject(id) {
      const idx = this._projectIndex().filter(r => r.id !== id);
      localStorage.setItem(LS_PROJECTS, JSON.stringify(idx));
      localStorage.removeItem('gantts.p.' + id);
      if (this.project.id === id) {
        const first = idx[0];
        if (first) this.openProject(first.id); else this.newProject();
      }
    },
    loadProjectData(data) {
      this.project = this._migrate(Object.assign(blankProject(), data, { id: U.uid('p') }));
      this.selectedId = null; this._undo = []; this._redo = [];
      this._persist(); this.emit('load', this.project);
    },

    // ---------- undo / redo ----------
    // Undo captures tasks AND the baseline — setting or clearing a baseline is a
    // real edit, and restoring tasks without it would leave variance columns
    // reading against the wrong plan.
    _histState() {
      return JSON.stringify({ tasks: this.project.tasks, baseline: this.project.baseline || null });
    },
    _applyHist(json) {
      const s = JSON.parse(json);
      this.project.tasks = s.tasks;
      this.project.baseline = s.baseline;
    },
    snapshot() {
      // called before a mutating operation
      this._undo.push(this._histState());
      if (this._undo.length > 100) this._undo.shift();
      this._redo = [];
      this.emit('history');
    },
    undo() {
      if (!this._undo.length) return;
      this._redo.push(this._histState());
      this._applyHist(this._undo.pop());
      this._afterChange(); this.emit('history');
    },
    redo() {
      if (!this._redo.length) return;
      this._undo.push(this._histState());
      this._applyHist(this._redo.pop());
      this._afterChange(); this.emit('history');
    },
    canUndo() { return this._undo.length > 0; },
    canRedo() { return this._redo.length > 0; },

    _afterChange() { this.save(); this.emit('change', this.project); },

    // ---------- task helpers ----------
    tasks() { return this.project.tasks; },
    get(id) { return this.project.tasks.find(t => t.id === id); },
    index(id) { return this.project.tasks.findIndex(t => t.id === id); },
    children(id) { return this.project.tasks.filter(t => t.parentId === id); },
    isParent(id) { return this.project.tasks.some(t => t.parentId === id); },
    depth(t) { let d = 0, p = t.parentId; while (p) { d++; p = (this.get(p) || {}).parentId; } return d; },

    // visible (respecting collapsed ancestors), preserving order
    visibleTasks() {
      const collapsed = new Set(this.project.tasks.filter(t => t.collapsed).map(t => t.id));
      const hidden = id => {
        let p = (this.get(id) || {}).parentId;
        while (p) { if (collapsed.has(p)) return true; p = (this.get(p) || {}).parentId; }
        return false;
      };
      return this.project.tasks.filter(t => !hidden(t.id));
    },

    select(id) { this.selectedId = id; this.emit('select', id); },

    addTask(partial, opts) {
      this.snapshot();
      const sel = this.get(this.selectedId);
      const start = (sel && sel.start) || (this.project.tasks.length ? this._suggestStart() : U.today());
      const t = Object.assign({
        id: U.uid('t'),
        name: partial && partial.type === 'milestone' ? 'New milestone' : partial && partial.type === 'group' ? 'New phase' : 'New task',
        start, end: partial && partial.type === 'milestone' ? start : U.endFrom(start, 3),
        progress: 0, color: U.PALETTE[this.project.tasks.length % U.PALETTE.length],
        assignee: '', type: 'task', parentId: sel ? sel.parentId : null, collapsed: false, notes: '', deps: [],
      }, partial);
      if (t.type === 'milestone') t.end = t.start;
      // insert after selected (and its subtree) or at end
      let insertAt = this.project.tasks.length;
      if (sel) insertAt = this._subtreeEnd(sel.id);
      this.project.tasks.splice(insertAt, 0, t);
      this.selectedId = t.id;
      this._afterChange(); this.emit('select', t.id);
      return t;
    },

    _suggestStart() {
      // day after the latest end
      let latest = null;
      this.project.tasks.forEach(t => { if (!latest || U.parse(t.end) > U.parse(latest)) latest = t.end; });
      return latest ? U.addDays(latest, 1) : U.today();
    },

    _subtreeEnd(id) {
      // index just past the last descendant of id in array order
      const idx = this.index(id);
      let i = idx + 1;
      const descendants = new Set([id]);
      for (; i < this.project.tasks.length; i++) {
        const t = this.project.tasks[i];
        if (t.parentId && descendants.has(t.parentId)) descendants.add(t.id);
        else break;
      }
      return i;
    },

    update(id, patch, withSnapshot) {
      if (withSnapshot !== false) this.snapshot();
      const t = this.get(id); if (!t) return;
      Object.assign(t, patch);
      if (t.type === 'milestone') t.end = t.start;
      this._recalcGroups();
      this._afterChange();
    },

    // live update during drag without snapshot spam; caller snapshots at gesture start
    liveUpdate(id, patch) {
      const t = this.get(id); if (!t) return;
      Object.assign(t, patch);
      if (t.type === 'milestone') t.end = t.start;
      this._recalcGroups();
      this.emit('change', this.project);
    },

    remove(id) {
      this.snapshot();
      const ids = new Set(); const collect = i => { ids.add(i); this.children(i).forEach(c => collect(c.id)); };
      collect(id);
      this.project.tasks = this.project.tasks.filter(t => !ids.has(t.id));
      // strip deps pointing to removed
      this.project.tasks.forEach(t => { t.deps = (t.deps || []).filter(d => !ids.has(d.from)); });
      if (ids.has(this.selectedId)) this.selectedId = null;
      this._recalcGroups();
      this._afterChange();
    },

    move(id, delta) {
      // reorder within siblings (delta -1 up / +1 down) — simple array move of subtree
      const idx = this.index(id); if (idx < 0) return;
      this.snapshot();
      // extract subtree
      const end = this._subtreeEnd(id);
      const block = this.project.tasks.splice(idx, end - idx);
      let target = idx + delta;
      target = Math.max(0, Math.min(this.project.tasks.length, target));
      this.project.tasks.splice(target, 0, ...block);
      this._afterChange();
    },

    reorderBefore(dragId, targetId) {
      if (dragId === targetId) return;
      const dragIdx = this.index(dragId);
      if (dragIdx < 0) return;
      // don't drop into own subtree
      let anc = this.get(targetId);
      while (anc) { if (anc.id === dragId) return; anc = this.get(anc.parentId); }
      this.snapshot();
      const end = this._subtreeEnd(dragId);
      const block = this.project.tasks.splice(dragIdx, end - dragIdx);
      const drag = block[0];
      const target = this.get(targetId);
      drag.parentId = target ? target.parentId : null;
      let ti = this.index(targetId);
      if (ti < 0) ti = this.project.tasks.length;
      this.project.tasks.splice(ti, 0, ...block);
      this._recalcGroups();
      this._afterChange();
    },

    indent(id) {
      const idx = this.index(id); if (idx <= 0) return;
      const t = this.project.tasks[idx];
      // previous sibling becomes parent
      let prev = null;
      for (let i = idx - 1; i >= 0; i--) { if (this.project.tasks[i].parentId === t.parentId) { prev = this.project.tasks[i]; break; } }
      if (!prev) return;
      this.snapshot();
      t.parentId = prev.id;
      if (prev.type !== 'group') prev.type = 'group';
      this._recalcGroups();
      this._afterChange();
    },
    outdent(id) {
      const t = this.get(id); if (!t || !t.parentId) return;
      this.snapshot();
      const parent = this.get(t.parentId);
      t.parentId = parent ? parent.parentId : null;
      // if old parent now childless, revert to task
      if (parent && !this.isParent(parent.id)) parent.type = 'task';
      this._recalcGroups();
      this._afterChange();
    },

    toggleCollapse(id) {
      const t = this.get(id); if (!t) return;
      t.collapsed = !t.collapsed; this.save(); this.emit('change', this.project);
    },

    // ---------- dependencies ----------
    addDep(fromId, toId, type) {
      if (fromId === toId) return false;
      const to = this.get(toId); if (!to) return false;
      to.deps = to.deps || [];
      if (to.deps.some(d => d.from === fromId)) return false;
      if (this._wouldCycle(fromId, toId)) return false;
      this.snapshot();
      to.deps.push({ from: fromId, type: type || 'FS', lag: 0 });
      this._afterChange();
      return true;
    },
    removeDep(toId, fromId) {
      const to = this.get(toId); if (!to) return;
      this.snapshot();
      to.deps = (to.deps || []).filter(d => d.from !== fromId);
      this._afterChange();
    },
    // ---------------- baseline (tracking Gantt) ----------------
    // Freezes today's dates so later edits can be compared against the plan
    // you committed to. Undoable like any other change.
    setBaseline() {
      this.snapshot();
      const tasks = {};
      this.tasks().forEach(t => { tasks[t.id] = { start: t.start, end: t.end, progress: t.progress || 0 }; });
      this.project.baseline = { savedAt: Date.now(), tasks };
      this._afterChange();
    },
    clearBaseline() {
      this.snapshot();
      this.project.baseline = null;
      this._afterChange();
    },
    hasBaseline() { return !!(this.project.baseline && this.project.baseline.tasks); },
    baselineOf(id) {
      const b = this.project.baseline;
      return b && b.tasks ? (b.tasks[id] || null) : null;
    },
    // + days = later than planned (slipping), - days = earlier (ahead)
    variance(id, which) {
      const b = this.baselineOf(id); const t = this.get(id);
      if (!b || !t) return null;
      return U.diffDays(b[which], t[which]);
    },

    _wouldCycle(fromId, toId) {
      // adding edge from->to ; cycle if from is reachable from to
      const stack = [toId]; const seen = new Set();
      while (stack.length) {
        const cur = stack.pop();
        if (cur === fromId) return true;
        if (seen.has(cur)) continue; seen.add(cur);
        this.project.tasks.forEach(t => (t.deps || []).forEach(d => { if (d.from === cur) stack.push(t.id); }));
      }
      return false;
    },

    // ---------- group rollups ----------
    _recalcGroups() {
      // groups span their children
      const byId = {};
      this.project.tasks.forEach(t => byId[t.id] = t);
      // process deepest first
      const groups = this.project.tasks.filter(t => this.isParent(t.id));
      groups.sort((a, b) => this.depth(b) - this.depth(a));
      groups.forEach(g => {
        g.type = 'group';
        const kids = this.children(g.id);
        if (!kids.length) return;
        let s = kids[0].start, e = kids[0].end, prog = 0, span = 0, cost = 0;
        kids.forEach(k => {
          s = U.min(s, k.start); e = U.max(e, k.end);
          const d = U.duration(k.start, k.end); span += d; prog += (k.progress || 0) * d;
          cost += (+k.cost || 0);
        });
        g.start = s; g.end = e; g.progress = span ? Math.round(prog / span) : 0; g.cost = cost;
      });
    },

    // ---------- share link ----------
    shareLink() {
      const payload = { name: this.project.name, settings: this.project.settings, tasks: this.project.tasks };
      const json = JSON.stringify(payload);
      const b64 = btoa(unescape(encodeURIComponent(json)));
      return location.origin + location.pathname + '#p=' + b64;
    },
    _readShareLink() {
      const m = location.hash.match(/[#&]p=([^&]+)/);
      if (!m) return null;
      try {
        const json = decodeURIComponent(escape(atob(m[1])));
        const data = JSON.parse(json);
        history.replaceState(null, '', location.pathname);
        return this._migrate(Object.assign(blankProject(), data, { id: U.uid('p') }));
      } catch (e) { return null; }
    },
  };

  Model.blankProject = blankProject;
  window.Model = Model;
})();
