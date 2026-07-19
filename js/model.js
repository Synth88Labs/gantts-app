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
        // Working calendar. New projects skip weekends by default; see
        // _migrate for why existing projects do not silently change.
        calendar: { enabled: true, workdays: [1, 2, 3, 4, 5], holidays: {} },
        /* Which rows the chart shows.

           _migrate's Object.assign is shallow, so a saved `view` object
           replaces this one wholesale and a sub-key added later would
           NOT be back-filled — the same trap `calendar` needs a special
           case for. This one is safe for a different reason: nothing
           reads settings.view directly. Every read goes through
           Views.of(), which supplies a default for each field, so a
           partial object from an older save normalises on the way in.
           Keep it that way; a direct read would reintroduce the bug. */
        view: { mode: 'all', weeks: 3, anchor: null },
        showWorkload: false,
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
      // Boot synchronously so the first paint never waits on storage.
      // Legacy localStorage is read first because on an existing install
      // that is where the project still lives; Store.init() migrates it
      // to IndexedDB in the background and re-emits 'load' if the durable
      // copy turns out to be newer.
      let loaded = null;
      try { loaded = JSON.parse(localStorage.getItem(LS_KEY)); } catch (e) {}

      // URL share import wins over anything stored
      const shared = this._readShareLink();
      if (shared) loaded = shared;

      this.project = loaded && loaded.tasks ? this._migrate(loaded) : blankProject();

      /* FIRST VISIT: show a real plan, not an empty grid.

         An empty canvas is the most common silent drop-off there is —
         the visitor has to invent a project before the tool shows them
         anything, and a fair number simply leave. Landing on a small
         worked example means the first frame already demonstrates
         bars, a group, a dependency and a milestone, and the first
         click is an edit rather than a decision.

         Three conditions, all necessary:
           - nothing stored, so a returning user never sees this
           - no share link, which is somebody else's plan
           - no ?tpl= / ?csv= parameter, which is an explicit request
             for different content and is handled later in features.js

         The sample is NOT persisted (see _persist). If it were, a
         visitor who opened the tab and did nothing would come back to
         find a project they never made sitting in their list. The flag
         clears on the first real edit, at which point it becomes an
         ordinary project and saves like one. */
      if (!loaded || !loaded.tasks) {
        const hasParam = typeof location !== 'undefined' && /[?&](tpl|csv)=/.test(location.search || '');
        if (!shared && !hasParam && !this._pendingShare && window.Templates && Templates.sampleTasks) {
          try {
            this.project.name = 'Sample plan';
            this.project.tasks = Templates.sampleTasks();
            this._recalcGroups();
            this._sample = true;
          } catch (e) { /* a broken sample must never block boot */ }
        }
      }

      this.emit('load', this.project);

      // A compressed share link resolves a tick later and replaces this.
      if (this._pendingShare) this._readShareLinkAsync();

      if (window.Store) {
        Store.onFail((info) => this.emit('savefailed', info));
        Store.init().then(async () => {
          if (shared || this._pendingShare) return;  // a shared link must not be overwritten
          const id = Store.currentId() || (loaded && loaded.id);
          if (!id) return;
          const durable = await Store.load(id);
          // Only adopt the stored copy if we booted blank or it is newer.
          const mine = this.project;
          const blankBoot = !loaded || !loaded.tasks;
          if (durable && durable.tasks && (blankBoot || (durable.updated || 0) > (mine.updated || 0))) {
            this.project = this._migrate(durable);
            this._undo = []; this._redo = [];
            /* Adopting a real project ends the sample state.

               Missing this was a data-loss bug, not a cosmetic one. A
               returning visitor boots with no legacy localStorage, so
               the sample is seeded and `_sample` set; the durable copy
               then loads over it a moment later. With the flag left
               standing, `_persist` kept returning early — the user saw
               their own plan, edited it, and nothing was ever written.
               The stale banner was the visible half of a silent
               failure. */
            this._sample = false;
            this.emit('sampleadopted');
            this.emit('load', this.project);
          }
          this.emit('storeready', Store.mode());
        });
      }
      return this;
    },

    _migrate(p) {
      const hadCalendar = !!(p.settings && p.settings.calendar);
      p.settings = Object.assign(blankProject().settings, p.settings || {});
      /* A project saved before working calendars existed has dates that
         were laid out in calendar days. Switching it on automatically
         would change what every duration means and make the plan look
         wrong the first time it was reopened, so existing projects keep
         the old behaviour until the user turns it on themselves. */
      if (!hadCalendar) p.settings.calendar = { enabled: false, workdays: [1, 2, 3, 4, 5], holidays: {} };
      if (!Array.isArray(p.settings.columns) || !p.settings.columns.length) p.settings.columns = blankProject().settings.columns.slice();
      p.tasks = (p.tasks || []).map(t => Object.assign({
        progress: 0, color: U.PALETTE[0], assignee: '', type: 'task',
        parentId: null, collapsed: false, notes: '', deps: [], cost: 0,
        /* Actual cost incurred so far. Earned value needs it and will
           not guess: with no actuals entered, evm.js reports CPI as
           null rather than deriving cost from progress, which would
           make CPI exactly 1.00 for every project ever made. */
        spent: 0,
      }, t));
      return p;
    },

    // task's 1-based row number (for MS-Project-style predecessor references)
    number(id) { return this.index(id) + 1; },
    byNumber(n) { return this.project.tasks[n - 1]; },

    save: U.debounce(function () { Model._persist(); }, 400),

    /* A failed save is never silent. The previous version logged to the
       console and returned, so a user past the quota kept editing a plan
       that was no longer being written anywhere. */
    _persist() {
      /* A sample nobody has touched is not the user's work and must not
         end up in their project list. */
      if (this._sample) return;
      this.project.updated = Date.now();
      Store.setCurrentId(this.project.id);

      // Snapshot now: the project keeps mutating while the write is in flight.
      const snapshot = JSON.parse(JSON.stringify(this.project));
      Store.save(snapshot)
        .then(() => {
          // Index is written only AFTER the blob lands, so the task counts
          // and timestamps in the project list always describe what is
          // actually stored. Writing it first meant a failed save left the
          // list advertising work that was never persisted.
          this._touchProjectIndex(snapshot);
          this._saveBroken = false;
          this.emit('saved');
        })
        .catch((info) => {
          this._saveBroken = true;
          this.emit('savefailed', info || { op: 'save', quota: true });
        });
    },

    _touchProjectIndex(saved) {
      const p = saved || this.project;
      const idx = this._projectIndex();
      const rec = { id: p.id, name: p.name, updated: p.updated, count: p.tasks.length };
      const i = idx.findIndex(r => r.id === this.project.id);
      if (i >= 0) idx[i] = rec; else idx.push(rec);
      // Index only — a few hundred bytes. Project blobs live in Store.
      if (!Store.setIndex(idx)) this.emit('savefailed', { op: 'index', quota: true });
    },
    _projectIndex() { return Store.index(); },
    listProjects() { return this._projectIndex().sort((a, b) => b.updated - a.updated); },

    openProject(id) {
      return Store.load(id).then((p) => {
        if (!p) return false;
        this.project = this._migrate(p); this.selectedId = null;
        this._undo = []; this._redo = [];
        Store.setCurrentId(id);
        this.emit('load', this.project);
        return true;
      });
    },
    newProject(name) {
      this.project = blankProject(name); this.selectedId = null; this._undo = []; this._redo = [];
      this._persist(); this.emit('load', this.project);
    },
    deleteProject(id) {
      const idx = this._projectIndex().filter(r => r.id !== id);
      Store.setIndex(idx);
      Store.remove(id);
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

    _afterChange() {
      /* The first edit turns the sample into the user's own project.
         Done here rather than in each mutator because every committed
         change funnels through this one place.

         Rename it too: leaving it as "Sample plan" means the user's own
         work sits in their project list under a name they never chose
         and would reasonably assume is disposable. Only renamed if they
         have not already titled it themselves. */
      if (this._sample) {
        this._sample = false;
        if (this.project.name === 'Sample plan') this.project.name = 'Untitled Project';
        this.emit('sampleadopted');
      } this.save(); this.emit('change', this.project); },

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
        /* Seed name for a new row. The user overwrites it immediately,
           but "New task" sitting in an otherwise German interface reads
           as a half-translated product. */
        name: (function (ty) {
          const T = (k, f) => (window.I18N && I18N.t(k) !== k) ? I18N.t(k) : f;
          if (ty === 'milestone') return T('new.milestone', 'New milestone');
          if (ty === 'group') return T('new.group', 'New phase');
          return T('new.task', 'New task');
        })(partial && partial.type),
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
    /* ---------------- share by URL ----------------

       The payload lives in the FRAGMENT, never the query string.
       Fragments are not sent to the server by the browser, so a shared
       plan is never in anyone's access log — the same discipline
       Excalidraw uses for its encryption key. Keep it that way.

       Everything below exists because the first version base64'd raw
       JSON with no compression and no length check. A real plan makes a
       URL of tens of thousands of characters, and the failure mode is
       not an error: mail clients and chat apps truncate it, and the
       recipient opens a link that quietly does nothing. */

    /** Roughly the longest URL that survives being pasted around.
        Browsers cope with far more, but Outlook, Slack unfurls and
        older proxies do not, and a truncated link fails silently. */
    SHARE_LIMIT: 8000,

    _sharePayload() {
      const st = Object.assign({}, this.project.settings);
      /* Purely local presentation. Carrying them makes the link longer
         for no benefit to the person opening it. */
      delete st.colWidths;
      delete st.pdf;
      delete st.gridWidth;
      return { name: this.project.name, settings: st, tasks: this.project.tasks };
    },

    /** Async because compression is. Resolves { url, length, compressed, tooLong }. */
    async shareLink() {
      const json = JSON.stringify(this._sharePayload());
      const base = location.origin + location.pathname;

      let url = null, compressed = false;
      if (typeof CompressionStream !== 'undefined') {
        try {
          const packed = await this._deflate(json);
          url = base + '#pz=' + packed;
          compressed = true;
        } catch (e) { url = null; }
      }
      if (!url) {
        // Older browsers still get a working link, just a longer one.
        url = base + '#p=' + btoa(unescape(encodeURIComponent(json)));
      }

      return { url, length: url.length, compressed, tooLong: url.length > this.SHARE_LIMIT };
    },

    async _deflate(str) {
      const cs = new CompressionStream('deflate-raw');
      const writer = cs.writable.getWriter();
      writer.write(new TextEncoder().encode(str));
      writer.close();
      const buf = await new Response(cs.readable).arrayBuffer();
      return this._b64url(new Uint8Array(buf));
    },

    async _inflate(b64) {
      const bytes = this._unb64url(b64);
      const ds = new DecompressionStream('deflate-raw');
      const writer = ds.writable.getWriter();
      writer.write(bytes);
      writer.close();
      const buf = await new Response(ds.readable).arrayBuffer();
      return new TextDecoder().decode(buf);
    },

    /* base64url: '+' and '/' are legal in a fragment but get mangled by
       enough link-rewriters and chat clients to be worth avoiding, and
       '=' padding invites truncation. */
    _b64url(bytes) {
      let bin = '';
      for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
      return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    },
    _unb64url(s) {
      const b64 = s.replace(/-/g, '+').replace(/_/g, '/');
      const bin = atob(b64 + '==='.slice((b64.length + 3) % 4));
      const out = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
      return out;
    },
    /* Legacy uncompressed links stay synchronous so boot is unchanged
       for them. Compressed ones cannot be — DecompressionStream is
       async — so they are handled separately in _readShareLinkAsync and
       `_pendingShare` tells init() not to seed the sample over the top
       of a plan that is about to arrive. */
    _readShareLink() {
      if (/[#&]pz=/.test(location.hash)) { this._pendingShare = true; return null; }
      const m = location.hash.match(/[#&]p=([^&]+)/);
      if (!m) return null;
      try {
        const json = decodeURIComponent(escape(atob(m[1])));
        const data = JSON.parse(json);
        history.replaceState(null, '', location.pathname);
        return this._migrate(Object.assign(blankProject(), data, { id: U.uid('p') }));
      } catch (e) { return null; }
    },

    _readShareLinkAsync() {
      const m = location.hash.match(/[#&]pz=([^&]+)/);
      if (!m) return;
      const raw = m[1];
      history.replaceState(null, '', location.pathname);
      this._inflate(raw)
        .then((json) => {
          const data = JSON.parse(json);
          this.project = this._migrate(Object.assign(blankProject(), data, { id: U.uid('p') }));
          this._sample = false;
          this._undo = []; this._redo = [];
          this._pendingShare = false;
          this.emit('load', this.project);
        })
        .catch(() => {
          /* A truncated or corrupted link must say so. Silently showing
             an empty editor is how the recipient concludes the tool is
             broken rather than the link. */
          this._pendingShare = false;
          this.emit('sharefailed');
        });
    },
  };

  Model.blankProject = blankProject;
  window.Model = Model;
})();
