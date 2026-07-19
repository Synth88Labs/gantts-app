/* ============================================================
   features.js — command palette, present mode, natural-language
   "Paste to Gantt", dark mode, and the coach-mark tips tour.
   Exposes global `Features`. Initialized by App.init().
   ============================================================ */
(function () {
  const THEME_KEY = 'gantts.theme';
  const TOUR_KEY = 'gantts.tourDone';

  const Features = {
    init() {
      this.initTheme();
      this.wireTheme();
      this.wireCommandPalette();
      this.wirePresent();
      this.wirePaste();
      this.wireTips();
      this.maybeAutoTour();
      this.handleTemplateParam();
    },

    // ---------------- THEME ----------------
    initTheme() {
      try { const t = localStorage.getItem(THEME_KEY); if (t) document.documentElement.setAttribute('data-theme', t); } catch (e) {}
      this.updateThemeIcon();
    },
    current() {
      // default is light; dark only when explicitly chosen
      return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    },
    toggleTheme() {
      const next = this.current() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
      this.updateThemeIcon();
      if (window.Render && Render.rs) App.render();
    },
    updateThemeIcon() {
      const b = U.$('#themeBtn'); if (b) b.textContent = this.current() === 'dark' ? '☀️' : '🌙';
    },
    wireTheme() { const b = U.$('#themeBtn'); if (b) b.addEventListener('click', () => this.toggleTheme()); },

    // ---------------- COMMAND PALETTE ----------------
    actions() {
      const A = App, M = Model, E = Exports;
      return [
        { icon: '＋', name: 'Add task', hint: 'Insert', run: () => M.addTask({ type: 'task' }) },
        { icon: '◆', name: 'Add milestone', run: () => M.addTask({ type: 'milestone' }) },
        { icon: '▣', name: 'Add group / phase', run: () => M.addTask({ type: 'group' }) },
        { icon: '🗑', name: 'Delete selected task', hint: 'Del', run: () => M.selectedId && M.remove(M.selectedId) },
        { icon: '↶', name: 'Undo', hint: 'Ctrl+Z', run: () => M.undo() },
        { icon: '↷', name: 'Redo', hint: 'Ctrl+Y', run: () => M.redo() },
        { icon: '✨', name: 'Paste to Gantt (generate from text)', run: () => this.openPaste() },
        { icon: '🗂', name: 'Browse templates', run: () => A.openTemplates() },
        { icon: '📁', name: 'Open projects', run: () => A.openProjects() },
        { icon: '🆕', name: 'New project', run: () => M.newProject() },
        { icon: '🔍', name: 'Zoom: Day', run: () => setZoom('day') },
        { icon: '🔍', name: 'Zoom: Week', run: () => setZoom('week') },
        { icon: '🔍', name: 'Zoom: Month', run: () => setZoom('month') },
        { icon: '🔍', name: 'Zoom: Quarter', run: () => setZoom('quarter') },
        { icon: '⤢', name: 'Fit to screen', run: () => A.fit() },
        { icon: '◎', name: 'Scroll to today', run: () => A.scrollToToday() },
        { icon: '🎯', name: 'Toggle critical path', run: () => toggleSetting('showCritical', '#toggleCritical') },
        { icon: '🌗', name: 'Toggle weekends', run: () => toggleSetting('showWeekends', '#toggleWeekends') },
        { icon: '📆', name: 'Working calendar (weekends & holidays)', run: () => App.openCalendar() },
        { icon: '↻', name: 'Reflow tasks onto working days', run: () => { const n = App.reflowToWorkingDays(); App.toast(n ? 'Moved ' + n + ' task(s)' : 'Nothing to move'); } },
        { icon: '📊', name: 'Toggle progress', run: () => toggleSetting('showProgress', '#toggleProgress') },
        { icon: '📍', name: 'Toggle today marker', run: () => toggleSetting('showToday', '#toggleToday') },
        { icon: '🌙', name: 'Toggle dark mode', run: () => this.toggleTheme() },
        { icon: '▶', name: 'Present mode', hint: 'F', run: () => this.enterPresent() },
        { icon: '🖼', name: 'Export PNG', run: () => E.run('png') },
        { icon: '📄', name: 'Export PDF (paper size, tiling, date range)', run: () => E.run('pdf') },
        { icon: '🖨', name: 'Export PDF — quick, one page', run: () => E.run('pdf-quick') },
        { icon: '📊', name: 'Export Excel (.xlsx)', run: () => E.run('xlsx') },
        { icon: '📽', name: 'Export PowerPoint (.pptx)', run: () => E.run('pptx') },
        { icon: '📑', name: 'Export CSV', run: () => E.run('csv') },
        { icon: '◳', name: 'Set baseline from current plan', run: () => { Model.setBaseline(); App.toast('Baseline set'); } },
        { icon: '▦', name: 'Show baseline & variance columns', run: () => App.showVarianceColumns() },
        { icon: '✕', name: 'Clear baseline', run: () => { Model.clearBaseline(); App.toast('Baseline cleared'); } },
        { icon: '💾', name: 'Save project to a file (.gantts)', run: () => E.run('save') },
        { icon: '📂', name: 'Open a saved file (.gantts / .json / .csv)', run: () => U.$('#fileInput').click() },
        { icon: '{ }', name: 'Export JSON (raw)', run: () => E.run('json') },
        { icon: '🔗', name: 'Copy shareable link', run: () => E.run('link') },
        { icon: '🖨', name: 'Print', run: () => E.run('print') },
        { icon: '💡', name: 'Show tips & tricks tour', run: () => this.startTour() },
      ];
      function setZoom(z) { Model.project.settings.zoom = z; Model.save(); U.$('#zoomSelect').value = z; App.render(); }
      function toggleSetting(key, sel) { Model.project.settings[key] = !Model.project.settings[key]; U.$(sel).checked = Model.project.settings[key]; Model.save(); App.render(); }
    },

    wireCommandPalette() {
      const btn = U.$('#cmdkBtn');
      if (btn) btn.addEventListener('click', () => this.openCmdk());
      document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); this.openCmdk(); }
      });
      const input = U.$('#cmdkInput');
      input.addEventListener('input', () => this.renderCmdk());
      input.addEventListener('keydown', (e) => this.cmdkKey(e));
      U.$('#cmdkBackdrop').addEventListener('click', (e) => { if (e.target.id === 'cmdkBackdrop') this.closeCmdk(); });
    },
    openCmdk() {
      this._acts = this.actions();
      this._sel = 0;
      U.$('#cmdkInput').value = '';
      U.$('#cmdkBackdrop').hidden = false;
      this.renderCmdk();
      setTimeout(() => U.$('#cmdkInput').focus(), 20);
    },
    closeCmdk() { U.$('#cmdkBackdrop').hidden = true; },
    filtered() {
      const q = U.$('#cmdkInput').value.trim().toLowerCase();
      if (!q) return this._acts;
      return this._acts.filter(a => a.name.toLowerCase().includes(q) || fuzzy(a.name.toLowerCase(), q));
    },
    renderCmdk() {
      const list = U.$('#cmdkList'); U.clear(list);
      const items = this.filtered();
      if (this._sel >= items.length) this._sel = 0;
      items.forEach((a, i) => {
        const row = U.el('div', { class: 'cmdk-item' + (i === this._sel ? ' active' : ''), onclick: () => { this.runAct(a); } }, [
          U.el('span', { class: 'cmdk-ic' }, a.icon),
          U.el('span', { class: 'cmdk-name' }, a.name),
          a.hint ? U.el('span', { class: 'cmdk-hint' }, a.hint) : null,
        ]);
        list.appendChild(row);
      });
      this._items = items;
    },
    cmdkKey(e) {
      if (e.key === 'Escape') { this.closeCmdk(); return; }
      if (e.key === 'ArrowDown') { e.preventDefault(); this._sel = Math.min(this._items.length - 1, this._sel + 1); this.renderCmdk(); scrollActive(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); this._sel = Math.max(0, this._sel - 1); this.renderCmdk(); scrollActive(); }
      if (e.key === 'Enter') { e.preventDefault(); const a = this._items[this._sel]; if (a) this.runAct(a); }
      function scrollActive() { const el = U.$('#cmdkList .cmdk-item.active'); if (el) el.scrollIntoView({ block: 'nearest' }); }
    },
    runAct(a) { this.closeCmdk(); try { a.run(); } catch (e) { App.toast('Error: ' + e.message); } },

    // ---------------- PRESENT MODE + presenter tools ----------------
    wirePresent() {
      const b = U.$('#presentBtn'); if (b) b.addEventListener('click', () => this.enterPresent());
      const x = U.$('#presentExit'); if (x) x.addEventListener('click', () => this.exitPresent());
      const x2 = U.$('#presentExit2'); if (x2) x2.addEventListener('click', () => this.exitPresent());
      const on = (id, fn) => { const el = U.$(id); if (el) el.addEventListener('click', fn); };
      on('#laserBtn', () => this.setLaser(!this.laserOn));
      on('#spotlightBtn', () => this.setSpotlight(!this.spotOn));
      on('#zoomInBtn', () => this.zoomBy(0.25));
      on('#zoomOutBtn', () => this.zoomBy(-0.25));
      on('#zoomResetBtn', () => this.setZoom(1));
      document.addEventListener('keydown', (e) => {
        const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
        const presenting = document.body.classList.contains('presenting');
        if (e.key === 'f' && !typing && !e.ctrlKey && !e.metaKey && !presenting) { this.enterPresent(); }
        if (!presenting || typing) return;
        if (e.key === 'Escape') this.exitPresent();
        else if (e.key === 'l' || e.key === 'L') this.setLaser(!this.laserOn);
        else if (e.key === 's' || e.key === 'S') this.setSpotlight(!this.spotOn);
        else if (e.key === '+' || e.key === '=') { e.preventDefault(); this.zoomBy(0.25); }
        else if (e.key === '-' || e.key === '_') { e.preventDefault(); this.zoomBy(-0.25); }
        else if (e.key === '0') this.setZoom(1);
      });
    },
    enterPresent() {
      document.body.classList.add('presenting');
      U.$('#presentExit').hidden = false;
      U.$('#presentTools').hidden = false;
      this.setZoom(1);
      try { if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(() => {}); } catch (e) {}
      App.render(); App.scrollToToday();
    },
    exitPresent() {
      document.body.classList.remove('presenting');
      U.$('#presentExit').hidden = true;
      U.$('#presentTools').hidden = true;
      this.setLaser(false); this.setSpotlight(false); this.setZoom(1);
      try { if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(() => {}); } catch (e) {}
      App.render();
    },
    setLaser(on) {
      this.laserOn = on;
      const btn = U.$('#laserBtn'); if (btn) btn.classList.toggle('active', on);
      const el = U.$('#laser'); if (!el) return;
      el.hidden = !on;
      if (on) {
        document.body.style.cursor = 'none';
        if (!this._laserMove) { this._laserMove = (e) => { el.style.left = e.clientX + 'px'; el.style.top = e.clientY + 'px'; }; window.addEventListener('mousemove', this._laserMove); }
      } else {
        document.body.style.cursor = '';
        if (this._laserMove) { window.removeEventListener('mousemove', this._laserMove); this._laserMove = null; }
      }
    },
    setSpotlight(on) {
      this.spotOn = on;
      const btn = U.$('#spotlightBtn'); if (btn) btn.classList.toggle('active', on);
      const el = U.$('#spotlight'); if (!el) return;
      el.hidden = !on;
      if (on) {
        if (!this._spotMove) { this._spotMove = (e) => { el.style.setProperty('--x', e.clientX + 'px'); el.style.setProperty('--y', e.clientY + 'px'); }; window.addEventListener('mousemove', this._spotMove); }
      } else if (this._spotMove) { window.removeEventListener('mousemove', this._spotMove); this._spotMove = null; }
    },
    setZoom(z) {
      this.presentZoom = z;
      U.$('#gantt').style.zoom = z;
      const lbl = U.$('#zoomLabel'); if (lbl) lbl.textContent = Math.round(z * 100) + '%';
    },
    zoomBy(d) { this.setZoom(Math.min(2.5, Math.max(1, Math.round(((this.presentZoom || 1) + d) * 100) / 100))); },

    // ---------------- PASTE TO GANTT (natural language) ----------------
    wirePaste() {
      const b = U.$('#pasteBtn'); if (b) b.addEventListener('click', () => this.openPaste());
      const eb = U.$('#emptyPaste'); if (eb) eb.addEventListener('click', () => this.openPaste());
    },
    openPaste() {
      App.openModal('✨ Paste to Gantt', (body) => {
        body.appendChild(U.el('p', { class: 'muted' }, 'Paste or type a task list — one per line. We detect durations, phases, milestones and dependencies automatically.'));
        const help = U.el('div', { class: 'paste-help' }, [
          syntax('Design homepage (3d)', 'duration in days (d) or weeks (w)'),
          syntax('# Phase name', 'a heading (#) becomes a group/phase; indent tasks under it'),
          syntax('  Build API (5d) after Design', 'indent = subtask · "after X" = depends on task X'),
          syntax('Launch !', 'a "!" makes it a milestone'),
          syntax('Kickoff 2026-08-01 (2d)', 'an ISO date sets a fixed start'),
        ]);
        body.appendChild(help);
        const ta = U.el('textarea', { class: 'paste-area', spellcheck: 'false', placeholder: samplePaste() });
        body.appendChild(ta);
        const count = U.el('div', { class: 'paste-count' }, '');
        const actions = U.el('div', { class: 'paste-actions' }, [
          U.el('button', { class: 'btn', onclick: () => { ta.value = samplePaste(); update(); } }, 'Use example'),
          count,
          U.el('span', { style: { flex: '1' } }),
          U.el('button', { class: 'btn', onclick: () => App.closeModal() }, 'Cancel'),
          U.el('button', { class: 'btn btn-primary', onclick: () => doInsert() }, 'Insert tasks →'),
        ]);
        body.appendChild(actions);
        ta.addEventListener('input', update);
        function update() { const r = Features.parsePaste(ta.value); count.textContent = r.tasks.length ? (r.tasks.length + ' tasks · ' + r.deps + ' dependencies') : ''; }
        function doInsert() {
          const r = Features.parsePaste(ta.value);
          if (!r.tasks.length) { App.toast('Nothing to insert — type some tasks first'); return; }
          Features.insertParsed(r);
          App.closeModal();
          App.toast('Added ' + r.tasks.length + ' tasks');
        }
        setTimeout(() => ta.focus(), 30);
      });
      function syntax(code, desc) { return U.el('div', { class: 'paste-syntax' }, [U.el('code', {}, code), U.el('span', {}, desc)]); }
      function samplePaste() {
        return '# Planning\n  Research (4d)\n  Requirements (3d) after Research\n# Build\n  Backend (8d) after Requirements\n  Frontend (10d) after Requirements\n  Integration (4d) after Backend\nLaunch !';
      }
    },

    parsePaste(text) {
      const lines = text.split('\n');
      const items = [];
      lines.forEach(raw => {
        if (!raw.trim()) return;
        const indent = (raw.match(/^[\t ]*/)[0] || '').replace(/\t/g, '  ').length;
        let line = raw.trim();
        let type = 'task';
        if (line[0] === '#') { type = 'group'; line = line.slice(1).trim(); }
        // milestone
        let milestone = false;
        if (/\s*!\s*$/.test(line) || /\[milestone\]/i.test(line)) { milestone = true; line = line.replace(/\s*!\s*$/, '').replace(/\[milestone\]/i, '').trim(); }
        // duration
        let dur = null;
        const dm = line.match(/\((\d+)\s*(d|day|days|w|wk|week|weeks)\)/i);
        if (dm) { dur = parseInt(dm[1]) * (/w/i.test(dm[2]) ? 5 : 1); line = line.replace(dm[0], '').trim(); }
        // fixed date
        let fixed = null;
        const fd = line.match(/(\d{4}-\d{2}-\d{2})/);
        if (fd) { fixed = fd[1]; line = line.replace(fd[0], '').trim(); }
        // dependency
        let after = null;
        const am = line.match(/\bafter[:\s]+(.+)$/i);
        if (am) { after = am[1].trim(); line = line.replace(am[0], '').trim(); }
        const name = line.replace(/[-–•]\s*/, '').trim() || 'Task';
        items.push({ indent, name, type: milestone ? 'milestone' : type, dur: dur, fixed, after });
      });
      // count deps resolvable
      let deps = 0;
      items.forEach(it => { if (it.after && items.some(x => x.name.toLowerCase() === it.after.toLowerCase())) deps++; });
      return { tasks: items, deps };
    },

    insertParsed(r) {
      Model.snapshot();
      const base = Model.project.tasks.length ? Model._suggestStart() : U.today();
      const created = {}; // name -> id
      const parentStack = []; // {indent, id}
      let cursor = base;
      r.tasks.forEach(it => {
        while (parentStack.length && parentStack[parentStack.length - 1].indent >= it.indent) parentStack.pop();
        const parentId = parentStack.length ? parentStack[parentStack.length - 1].id : null;
        let start = it.fixed || cursor;
        const dur = it.type === 'milestone' ? 1 : (it.dur || 3);
        const t = {
          id: U.uid('t'), name: it.name, start,
          end: it.type === 'milestone' ? start : U.endFrom(start, dur),
          progress: 0, color: U.PALETTE[Model.project.tasks.length % U.PALETTE.length],
          assignee: '', type: it.type, parentId, collapsed: false, notes: '', deps: [],
        };
        Model.project.tasks.push(t);
        created[it.name.toLowerCase()] = t.id;
        if (it.type === 'group') parentStack.push({ indent: it.indent, id: t.id });
        if (it.type !== 'milestone' && !it.fixed) cursor = U.addDays(t.end, 1);
        t._after = it.after;
      });
      // resolve dependencies
      Model.project.tasks.forEach(t => {
        if (t._after) {
          const fromId = created[t._after.toLowerCase()];
          if (fromId && fromId !== t.id) t.deps.push({ from: fromId, type: 'FS', lag: 0 });
          delete t._after;
        }
      });
      // auto-schedule dependent tasks so "after" actually pushes dates
      Model._recalcGroups();
      if (window.Schedule) applyDependencyDates();
      Model._afterChange();
      App.scrollToToday && App.scrollToToday();

      function applyDependencyDates() {
        // simple forward pass over the newly created FS deps
        let changed = true, guard = 0;
        while (changed && guard++ < 50) {
          changed = false;
          Model.project.tasks.forEach(t => {
            (t.deps || []).forEach(d => {
              const from = Model.get(d.from); if (!from) return;
              const minStart = U.addDays(from.end, 1);
              if (U.parse(t.start) < U.parse(minStart)) {
                const dur = U.duration(t.start, t.end);
                t.start = minStart; t.end = t.type === 'milestone' ? minStart : U.endFrom(minStart, dur);
                changed = true;
              }
            });
          });
        }
        Model._recalcGroups();
      }
    },

    // ---------------- TIPS / COACH TOUR ----------------
    tourSteps() {
      return [
        { sel: '#addTaskBtn', title: 'Add tasks', text: 'Click <b>＋ Task</b> to add a row — or press <b>Insert</b>. Add milestones (◆) and phases (▣) too.' },
        { sel: '#pasteBtn', title: 'Paste to Gantt ✨', text: 'Have a list already? Paste it and we auto-detect durations, phases, milestones and “after X” dependencies.' },
        { sel: '#barsLayer', title: 'Drag to schedule', text: 'Drag a bar to move it, or drag its edges to resize. To <b>link tasks</b>, hover a bar and drag the round <b>connector dot</b> on its edge onto another task.' },
        { sel: '#toggleCritical', title: 'Critical path', text: 'Tick this to highlight (in <b>orange</b>) the chain of tasks that decides your finish date — a pro feature, free here.' },
        { sel: '#saveBtn', title: 'Save & re-open', text: 'Your work autosaves in this browser. Use <b>💾 Save</b> to download a <b>.gantts</b> file you can back up or reopen later with <b>📂 Open</b>.' },
        { sel: '#exportBtn', title: 'Export anywhere', text: 'Download to PDF, PNG, <b>Excel</b> and <b>PowerPoint</b>, or copy a shareable link. All free.' },
        { sel: '#cmdkBtn', title: 'Command palette', text: 'Press <b>Ctrl/⌘ K</b> anytime to run any action by name — the fastest way to work.' },
        { sel: '#presentBtn', title: 'Present mode', text: 'Hit <b>Present</b> (or press <b>F</b>) for a clean, full-screen timeline in meetings.' },
      ];
    },
    wireTips() {
      const fab = U.$('#tipsFab'); if (fab) fab.addEventListener('click', () => this.startTour());
      U.$('#coachNext').addEventListener('click', () => this.coachNext());
      U.$('#coachSkip').addEventListener('click', () => this.endTour());
      window.addEventListener('resize', () => { if (this._tourOn) this.positionCoach(); });
    },
    maybeAutoTour() {
      let done = false; try { done = localStorage.getItem(TOUR_KEY) === '1'; } catch (e) {}
      if (!done) setTimeout(() => this.startTour(), 900);
    },
    startTour() {
      this._steps = this.tourSteps();
      this._stepIdx = 0; this._tourOn = true;
      U.$('#coach').hidden = false;
      this.showCoach();
    },
    coachNext() { this._stepIdx++; if (this._stepIdx >= this._steps.length) { this.endTour(); } else this.showCoach(); },
    endTour() {
      this._tourOn = false;
      U.$('#coach').hidden = true;
      document.querySelectorAll('.coach-spot').forEach(e => e.classList.remove('coach-spot'));
      try { localStorage.setItem(TOUR_KEY, '1'); } catch (e) {}
    },
    showCoach() {
      document.querySelectorAll('.coach-spot').forEach(e => e.classList.remove('coach-spot'));
      const step = this._steps[this._stepIdx];
      const target = U.$(step.sel);
      if (target) target.classList.add('coach-spot');
      U.$('#coachBody').innerHTML = '<h4>' + step.title + '</h4><p>' + step.text + '</p>';
      U.$('#coachProgress').textContent = (this._stepIdx + 1) + ' / ' + this._steps.length;
      U.$('#coachNext').textContent = this._stepIdx === this._steps.length - 1 ? 'Done' : 'Next';
      this._target = target;
      this.positionCoach();
    },
    positionCoach() {
      const card = U.$('#coach .coach-card');
      const t = this._target;
      if (!t) { card.style.left = '50%'; card.style.top = '80px'; card.style.transform = 'translateX(-50%)'; return; }
      const r = t.getBoundingClientRect();
      const cw = 300, ch = card.offsetHeight || 150;
      let left = r.left + r.width / 2 - cw / 2;
      let top = r.bottom + 12;
      if (top + ch > window.innerHeight - 10) top = Math.max(10, r.top - ch - 12);
      left = Math.max(10, Math.min(window.innerWidth - cw - 10, left));
      card.style.left = left + 'px'; card.style.top = top + 'px'; card.style.transform = 'none';
    },

    // ---------------- ?tpl= param ----------------
    handleTemplateParam() {
      const m = location.search.match(/[?&]tpl=([a-z-]+)/i);
      if (m && window.Templates) {
        const key = m[1];
        // only load if it's a real template and project is empty/fresh
        if (Templates.list.some(t => t.key === key)) {
          if (!Model.project.tasks.length) Templates.apply(key);
        }
        history.replaceState(null, '', location.pathname);
        return;
      }
      // ?csv=<slug> — load a downloadable template file straight into the editor
      const c = location.search.match(/[?&]csv=([a-z0-9-]+)/i);
      if (c) {
        const slug = c[1];
        history.replaceState(null, '', location.pathname);
        // Arriving here means the reader clicked "Edit online free" on a
        // template page, so the template must actually open. The old
        // guard bailed out whenever a saved chart existed, which made
        // the button silently do nothing for every returning visitor.
        // Load into a NEW project instead: the request is honoured and
        // their existing plan is untouched and still in the project list.
        // importCSV goes through Model.loadProjectData, which mints a new
        // project id — so an existing plan is left intact in the project
        // list rather than overwritten. No extra newProject() call: that
        // would leave an empty duplicate behind in the list.
        const fresh = !Model.project.tasks.length;
        fetch('/templates/files/' + slug + '.csv')
          .then(r => (r.ok ? r.text() : Promise.reject(new Error('HTTP ' + r.status))))
          .then(txt => {
            Templates.importCSV(txt);
            Model.project.name = prettyName(slug);
            Model.save();
            if (window.App) {
              App.render();
              App.toast(fresh
                ? 'Template loaded — drag the bars to fit your dates'
                : 'Opened “' + Model.project.name + '” as a new project');
            }
          })
          .catch(() => { if (window.App) App.toast('Could not load that template — starting from a blank chart'); });
      }
      function prettyName(s) { return s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()); }
    },
  };

  function fuzzy(hay, needle) {
    let i = 0; for (const c of hay) { if (c === needle[i]) i++; if (i === needle.length) return true; } return i === needle.length;
  }

  window.Features = Features;
})();
