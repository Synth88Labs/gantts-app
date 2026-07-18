/* ============================================================
   templates.js — ready-made project templates + CSV/JSON import
   Exposes global `Templates`.
   ============================================================ */
(function () {
  const P = U.PALETTE;

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
      const t = {
        id, name, start,
        end: opts.milestone ? start : U.endFrom(start, dur),
        progress: prog, color: P[colorIdx % P.length], assignee: opts.who || '',
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

    apply(key) {
      const tpl = TEMPLATES.find(t => t.key === key);
      if (!tpl) return;
      const tasks = tpl.make();
      Model.newProject(tpl.name);
      Model.project.tasks = tasks;
      Model._recalcGroups();
      Model._persist();
      Model.emit('load', Model.project);
      App.toast('Template loaded: ' + tpl.name);
    },

    // ---------- import ----------
    importFile(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        try {
          const name = file.name.toLowerCase();
          if (name.endsWith('.json') || name.endsWith('.gantts') || name.endsWith('.gantt')) this.importJSON(text);
          else this.importCSV(text);
        } catch (err) { App.toast('Import failed: ' + err.message); }
      };
      reader.readAsText(file);
    },

    importJSON(text) {
      const data = JSON.parse(text);
      if (!data.tasks) throw new Error('no tasks in file');
      Model.loadProjectData(data);
      App.toast('Project imported');
    },

    importCSV(text) {
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
        const type = ci.type >= 0 && /mile/i.test(r[ci.type] || '') ? 'milestone' : 'task';
        tasks.push({
          id: U.uid('t'), name: r[ci.name], start, end: type === 'milestone' ? start : end,
          progress: ci.prog >= 0 ? Math.max(0, Math.min(100, parseInt(r[ci.prog]) || 0)) : 0,
          color: U.PALETTE[tasks.length % U.PALETTE.length], assignee: ci.who >= 0 ? (r[ci.who] || '') : '',
          type, parentId: null, collapsed: false, notes: ci.notes >= 0 ? (r[ci.notes] || '') : '', deps: [],
        });
      });
      if (!tasks.length) throw new Error('no valid rows');
      Model.loadProjectData({ name: 'Imported project', tasks });
      App.toast('Imported ' + tasks.length + ' tasks from CSV');
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
