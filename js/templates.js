/* ============================================================
   templates.js — ready-made project templates + CSV/JSON import
   Exposes global `Templates`.
   ============================================================ */
(function () {
  const P = U.PALETTE;
  // Starter-template content in the reader's language; identity if absent.
  const TPL = (x) => (window.TemplateI18N ? TemplateI18N.tr(x) : x);

  // template task shorthand: [name, offsetStartDays, durationDays, progress, colorIdx, {milestone,group,indent}]
  function build(defs) {
    const base = U.today();
    let parentStack = []; // {id, indent}
    const tasks = [];
    defs.forEach(d => {
      const [name, offset, dur, prog = 0, colorIdx = 0, opts = {}] = d;
      const id = U.uid('t');
      const start = U.addDays(base, offset);
      const indent = opts.indent || 0;
      while (parentStack.length && parentStack[parentStack.length - 1].indent >= indent) parentStack.pop();
      const parentId = parentStack.length ? parentStack[parentStack.length - 1].id : null;
      /* Translated at instantiation, never afterwards — once the user
         edits a task the text is theirs. */
      const t = {
        id, name: TPL(name), start,
        end: opts.milestone ? start : U.endFrom(start, dur),
        progress: prog, color: P[colorIdx % P.length], assignee: TPL(opts.who || ''),
        type: opts.milestone ? 'milestone' : (opts.group ? 'group' : 'task'),
        parentId, collapsed: false, notes: '', deps: [],
      };
      tasks.push(t);
      if (opts.group) parentStack.push({ id, indent });
      d._id = id; // stash for deps
    });
    // dependencies by index chains
    return { tasks, defs };
  }

  const TEMPLATES = [
    {
      key: 'software', icon: '💻', name: 'Software Project',
      desc: 'Sprint-based product build from discovery to launch.',
      make() {
        const r = build([
          ['Discovery & Planning', 0, 10, 100, 0, { group: true }],
          ['Requirements gathering', 0, 5, 100, 0, { indent: 1, who: 'PM' }],
          ['Technical design', 5, 5, 80, 0, { indent: 1, who: 'Lead' }],
          ['Design approved', 10, 0, 0, 6, { indent: 1, milestone: true }],
          ['Development', 10, 20, 40, 3, { group: true }],
          ['Backend API', 10, 18, 60, 3, { indent: 1, who: 'Dev A' }],
          ['Frontend UI', 10, 20, 35, 1, { indent: 1, who: 'Dev B' }],
          ['Integration', 30, 8, 0, 4, { indent: 1, who: 'Team' }],
          ['QA & Testing', 38, 12, 0, 5, { group: true }],
          ['Test plan', 38, 4, 0, 5, { indent: 1, who: 'QA' }],
          ['Bug fixing', 42, 8, 0, 6, { indent: 1, who: 'Team' }],
          ['Launch', 50, 3, 0, 2, { group: true }],
          ['Deploy to production', 50, 2, 0, 2, { indent: 1, who: 'DevOps' }],
          ['Go live 🚀', 52, 0, 0, 2, { indent: 1, milestone: true }],
        ]);
        // complete, gap-free dependency chain (Frontend is the longer parallel branch)
        chain(r, [[1, 2], [2, 3], [3, 5], [3, 6], [5, 7], [6, 7], [7, 9], [9, 10], [10, 12], [12, 13]]);
        return r.tasks;
      },
    },
    {
      key: 'marketing', icon: '📣', name: 'Marketing Campaign',
      desc: 'Plan, produce, launch and measure a campaign.',
      make() {
        const r = build([
          ['Strategy', 0, 7, 100, 8, { group: true }],
          ['Market research', 0, 4, 100, 8, { indent: 1, who: 'Analyst' }],
          ['Campaign brief', 4, 3, 90, 8, { indent: 1, who: 'CMO' }],
          ['Content Production', 7, 14, 30, 1, { group: true }],
          ['Copywriting', 7, 6, 50, 1, { indent: 1, who: 'Writer' }],
          ['Design assets', 9, 8, 25, 9, { indent: 1, who: 'Designer' }],
          ['Video production', 11, 10, 10, 6, { indent: 1, who: 'Studio' }],
          ['Assets ready', 21, 0, 0, 2, { indent: 1, milestone: true }],
          ['Launch', 21, 10, 0, 2, { group: true }],
          ['Schedule posts', 21, 3, 0, 2, { indent: 1, who: 'Social' }],
          ['Go live', 24, 5, 0, 4, { indent: 1, who: 'Team' }],
          ['Measure & Optimize', 29, 7, 0, 5, { indent: 1, who: 'Analyst' }],
        ]);
        chain(r, [[1, 2], [2, 4], [4, 5], [5, 6], [6, 7], [7, 9], [9, 10], [10, 11]]);
        return r.tasks;
      },
    },
    {
      key: 'event', icon: '🎪', name: 'Event Planning',
      desc: 'Organise a conference or launch event end to end.',
      make() {
        const r = build([
          ['Planning', 0, 14, 60, 0, { group: true }],
          ['Set budget & goals', 0, 3, 100, 0, { indent: 1 }],
          ['Book venue', 3, 5, 80, 9, { indent: 1 }],
          ['Confirm speakers', 5, 9, 40, 1, { indent: 1 }],
          ['Promotion', 14, 21, 10, 6, { group: true }],
          ['Website & tickets', 14, 7, 20, 6, { indent: 1 }],
          ['Email + social push', 18, 17, 5, 8, { indent: 1 }],
          ['Logistics', 30, 10, 0, 4, { group: true }],
          ['Catering & AV', 30, 6, 0, 4, { indent: 1 }],
          ['Run of show', 35, 5, 0, 5, { indent: 1 }],
          ['Event day', 40, 0, 0, 2, { milestone: true }],
          ['Wrap-up & thank you', 41, 4, 0, 3, {}],
        ]);
        chain(r, [[1, 2], [2, 3], [3, 5], [5, 6], [8, 9], [9, 10], [10, 11]]);
        return r.tasks;
      },
    },
    {
      key: 'construction', icon: '🏗', name: 'Construction',
      desc: 'Classic build schedule with phased dependencies.',
      make() {
        const r = build([
          ['Pre-construction', 0, 20, 100, 0, { group: true }],
          ['Permits & approvals', 0, 12, 100, 0, { indent: 1 }],
          ['Site survey', 8, 6, 100, 8, { indent: 1 }],
          ['Foundation', 20, 15, 30, 4, { group: true }],
          ['Excavation', 20, 6, 60, 4, { indent: 1 }],
          ['Pour foundation', 26, 9, 0, 5, { indent: 1 }],
          ['Structure', 35, 30, 0, 3, { group: true }],
          ['Framing', 35, 14, 0, 3, { indent: 1 }],
          ['Roofing', 49, 10, 0, 6, { indent: 1 }],
          ['Interior', 65, 25, 0, 9, { group: true }],
          ['Electrical & plumbing', 65, 12, 0, 9, { indent: 1 }],
          ['Finishing', 77, 13, 0, 1, { indent: 1 }],
          ['Handover', 90, 0, 0, 2, { milestone: true }],
        ]);
        chain(r, [[1, 4], [4, 5], [5, 7], [7, 8], [8, 10], [10, 11], [11, 12]]);
        return r.tasks;
      },
    },
    {
      key: 'product', icon: '🚀', name: 'Product Launch',
      desc: 'Go-to-market plan across teams.',
      make() {
        const r = build([
          ['Pre-launch', 0, 21, 50, 0, { group: true }],
          ['Finalize product', 0, 10, 70, 0, { indent: 1 }],
          ['Pricing & packaging', 5, 6, 40, 8, { indent: 1 }],
          ['Beta program', 10, 11, 20, 1, { indent: 1 }],
          ['Launch prep', 21, 14, 0, 6, { group: true }],
          ['Marketing assets', 21, 10, 0, 6, { indent: 1 }],
          ['Sales enablement', 24, 8, 0, 9, { indent: 1 }],
          ['PR & outreach', 28, 7, 0, 4, { indent: 1 }],
          ['Launch day', 35, 0, 0, 2, { milestone: true }],
          ['Post-launch', 35, 14, 0, 5, { group: true }],
          ['Monitor metrics', 35, 14, 0, 5, { indent: 1 }],
          ['Iterate', 40, 9, 0, 3, { indent: 1 }],
        ]);
        chain(r, [[1, 3], [1, 5], [5, 6], [8, 10]]);
        return r.tasks;
      },
    },
    {
      key: 'blank', icon: '➕', name: 'Blank (3 tasks)',
      desc: 'Minimal starter you can shape yourself.',
      make() {
        const r = build([
          ['Task 1', 0, 4, 30, 0, {}],
          ['Task 2', 4, 5, 0, 1, {}],
          ['Milestone', 9, 0, 0, 2, { milestone: true }],
        ]);
        chain(r, [[0, 1], [1, 2]]);
        return r.tasks;
      },
    },
  ];

  function chain(r, pairs) {
    // pairs of def-indices [fromIndex, toIndex] add FS dependency
    pairs.forEach(([fi, ti]) => {
      const from = r.defs[fi], to = r.defs[ti];
      if (from && to) {
        const toTask = r.tasks.find(t => t.id === to._id);
        if (toTask) toTask.deps.push({ from: from._id, type: 'FS', lag: 0 });
      }
    });
  }

  const Templates = {
    list: TEMPLATES,

    /* The plan a first-time visitor lands on. Reuses the Product Launch
       starter rather than inventing a second sample to keep in sync —
       it already has a group, a dependency chain, mixed progress and a
       milestone, which is exactly the vocabulary the first frame needs
       to demonstrate. */
    sampleTasks() {
      const tpl = TEMPLATES.find(t => t.key === 'product') || TEMPLATES[0];
      return tpl.make();
    },

    apply(key) {
      const tpl = TEMPLATES.find(t => t.key === key);
      if (!tpl) return;
      const tasks = tpl.make();
      Model.newProject(TPL(tpl.name));
      Model.project.tasks = tasks;
      Model._recalcGroups();
      Model._persist();
      Model.emit('load', Model.project);
      App.toast(App.T('tpl.loaded', 'Template loaded') + ': ' + TPL(tpl.name));
    },

    // ---------- import ----------
    importFile(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        try {
          const name = file.name.toLowerCase();
          if (name.endsWith('.json') || name.endsWith('.gantts') || name.endsWith('.gantt')) this.importJSON(text);
          else if (name.endsWith('.xml')) this.importMSProject(text);
          /* A Mermaid diagram can arrive as .mmd, or pasted into a .md
             or .txt. Sniff the content rather than trusting the
             extension — a .txt holding a gantt block is far more likely
             to be Mermaid than CSV, and misrouting it to the CSV parser
             produces a plan full of garbage rows instead of an error. */
          else if (name.endsWith('.mmd') || name.endsWith('.mermaid') || /^\s*(```(mermaid)?\s*)?gantt/m.test(text)) this.importMermaid(text);
          else this.importCSV(text);
        } catch (err) { App.toast(App.T('tp.importFailed', 'Import failed') + ': ' + err.message); }
      };
      reader.readAsText(file);
    },

    /* Mermaid gantt text. Same contract as the MSPDI importer: what
       could not be honoured is reported, never silently dropped. */
    importMermaid(text) {
      if (!window.MermaidGantt) throw new Error('Mermaid import is unavailable.');
      const res = MermaidGantt.parse(text);

      const settings = Object.assign({}, Model.project.settings);
      /* "excludes weekends" in the diagram is a statement about the
         schedule, so honour it rather than importing dates that then
         disagree with the calendar they were written against. */
      if (res.excludesWeekends) {
        settings.calendar = Object.assign({}, settings.calendar || {},
          { enabled: true, workdays: [1, 2, 3, 4, 5] });
      }

      Model.loadProjectData({
        name: res.title || 'Imported from Mermaid',
        tasks: res.tasks,
        settings,
      });

      if (res.warnings.length) {
        console.warn('Mermaid import warnings:', res.warnings);
        App.toast(`Imported with ${res.warnings.length} note${res.warnings.length > 1 ? 's' : ''} — see the console`);
      } else {
        App.toast(App.Tn('tp.importedMermaidN', 'Imported {n} task(s) from Mermaid', { n: res.tasks.filter(t => t.type !== 'group').length }));
      }
    },

    /* MS Project XML (MSPDI). Anything the importer could not honour
       comes back as warnings rather than being dropped in silence — a
       plan that lost a dependency looks fine and schedules wrongly. */
    importMSProject(text) {
      if (!window.MSProject) throw new Error('MS Project import is unavailable.');
      const res = MSProject.import(text);
      Model.loadProjectData({
        name: res.name,
        tasks: res.tasks,
        settings: Object.assign({}, Model.project.settings),
      });
      if (res.warnings.length) {
        console.warn('MS Project import warnings:', res.warnings);
        App.toast(`Imported with ${res.warnings.length} warning${res.warnings.length > 1 ? 's' : ''} — see the console`);
      } else {
        App.toast(`Imported ${res.tasks.length} tasks from MS Project`);
      }
    },

    importJSON(text) {
      const data = JSON.parse(text);
      if (!data.tasks) throw new Error('no tasks in file');
      Model.loadProjectData(data);
      App.toast(App.T('tp.projectImported', 'Project imported'));
    },

    importCSV(text, csvName) {
      const rows = parseCSV(text);
      if (rows.length < 2) throw new Error('empty CSV');
      const header = rows[0].map(h => h.trim().toLowerCase());
      const col = (names) => header.findIndex(h => names.includes(h));
      const ci = {
        name: col(['task', 'name', 'task name', 'title']),
        start: col(['start', 'start date']),
        end: col(['end', 'end date', 'finish']),
        dur: col(['days', 'duration']),
        prog: col(['progress %', 'progress', '%', 'percent']),
        who: col(['assignee', 'owner', 'resource']),
        type: col(['type']),
        notes: col(['notes']),
        /* Our own CSV exports carry these two, and the importer used to
           ignore both — so every "edit this template online" link served
           a flat list with no phases and no dependency arrows. The data
           was in the file the whole time. */
        wbs: col(['wbs', 'id', '#']),
        deps: col(['dependencies', 'predecessors', 'runs after', 'depends on']),
      };
      if (ci.name < 0) throw new Error('CSV needs a Task/Name column');
      const tasks = [];
      const today = U.today();
      rows.slice(1).forEach(r => {
        if (!r[ci.name]) return;
        let start = ci.start >= 0 && r[ci.start] ? normDate(r[ci.start]) : today;
        let end = ci.end >= 0 && r[ci.end] ? normDate(r[ci.end]) : null;
        const dur = ci.dur >= 0 ? parseInt(r[ci.dur]) : null;
        if (!end) end = dur ? U.endFrom(start, dur) : U.endFrom(start, 3);
        const rawType = ci.type >= 0 ? (r[ci.type] || '') : '';
        const type = /mile/i.test(rawType) ? 'milestone'
          : /group|phase|summary/i.test(rawType) ? 'group' : 'task';

        /* Indentation in the Task column is presentational — the real
           hierarchy is the WBS number. Leading spaces would otherwise
           end up inside the name and then be indented AGAIN on render. */
        const name = String(r[ci.name]).replace(/^[\s\u00a0]+/, '').trim();
        const wbs = ci.wbs >= 0 ? String(r[ci.wbs] || '').trim() : '';

        tasks.push({
          id: U.uid('t'), name, start, end: type === 'milestone' ? start : end,
          progress: ci.prog >= 0 ? Math.max(0, Math.min(100, parseInt(r[ci.prog]) || 0)) : 0,
          color: U.PALETTE[tasks.length % U.PALETTE.length], assignee: ci.who >= 0 ? (r[ci.who] || '') : '',
          type, parentId: null, collapsed: false, notes: ci.notes >= 0 ? (r[ci.notes] || '') : '', deps: [],
          _wbs: wbs,
          _deps: ci.deps >= 0 ? String(r[ci.deps] || '').trim() : '',
        });
      });

      /* ---- rebuild the hierarchy from the WBS numbers ----
         "1.2.1" is a child of "1.2". Rows without a WBS stay top-level,
         which is right for a hand-made CSV that has no such column. */
      const byWbs = {};
      tasks.forEach(t => { if (t._wbs) byWbs[t._wbs] = t; });
      tasks.forEach(t => {
        if (!t._wbs) return;
        const cut = t._wbs.lastIndexOf('.');
        if (cut < 0) return;
        const parent = byWbs[t._wbs.slice(0, cut)];
        if (parent && parent !== t) t.parentId = parent.id;
      });

      /* ---- resolve dependencies, which are written by NAME ----
         Matching is case- and space-insensitive because the exported
         name may carry the indentation we just stripped. A reference
         that does not resolve is dropped rather than guessed at: a
         wrong arrow is worse than a missing one. */
      const byName = {};
      tasks.forEach(t => { byName[t.name.toLowerCase()] = t; });
      let linked = 0, unresolved = 0;
      tasks.forEach(t => {
        if (!t._deps) return;
        for (const ref of t._deps.split(/[;,]/)) {
          const key = ref.replace(/\s+/g, ' ').trim().toLowerCase();
          if (!key) continue;
          const from = byName[key];
          if (from && from !== t) { t.deps.push({ from: from.id, type: 'FS', lag: 0 }); linked++; }
          else unresolved++;
        }
      });
      if (unresolved) console.warn('CSV import: ' + unresolved + ' dependency reference(s) did not match a task name');

      // Scratch fields must not reach the saved project.
      tasks.forEach(t => { delete t._wbs; delete t._deps; });
      if (!tasks.length) throw new Error('no valid rows');
      /* A CSV that came from one of our own template pages knows what it
         is; "Imported project" told the user nothing and had to be
         retyped every time. */
      Model.loadProjectData({ name: csvName || App.T('tp.projectImported', 'Imported project'), tasks });
      App.toast(App.Tn('tp.importedCsvN', 'Imported {n} tasks from CSV', { n: tasks.length }));
    },
  };

  function normDate(s) {
    s = s.trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
    const d = new Date(s);
    return isNaN(d) ? U.today() : U.toISO(d);
  }

  function parseCSV(text) {
    const rows = []; let row = [], cur = '', q = false;
    text = text.replace(/^﻿/, '');
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (q) {
        if (c === '"') { if (text[i + 1] === '"') { cur += '"'; i++; } else q = false; }
        else cur += c;
      } else {
        if (c === '"') q = true;
        else if (c === ',') { row.push(cur); cur = ''; }
        else if (c === '\n' || c === '\r') { if (c === '\r' && text[i + 1] === '\n') i++; row.push(cur); rows.push(row); row = []; cur = ''; }
        else cur += c;
      }
    }
    if (cur !== '' || row.length) { row.push(cur); rows.push(row); }
    return rows.filter(r => r.some(c => c !== ''));
  }

  window.Templates = Templates;
})();
