/* ============================================================
   interactions.js — bar drag/resize/progress, dependency drawing,
   row drag-to-reorder. Exposes global `Interactions`.
   ============================================================ */
(function () {
  let drag = null; // active gesture

  const Interactions = {
    /* Keyboard operation of a bar.

       WCAG 2.1.1 (Keyboard) and 2.5.7 (Dragging Movements) are two
       DIFFERENT obligations and one does not satisfy the other. 2.5.7
       is about people who use a pointer but cannot hold a precise drag
       — tremor, a head-pointer, eye-gaze — and it is met by the task
       drawer, whose date fields and dependency picker reschedule with
       plain clicks. This function is the other half: 2.1.1, for people
       with no pointer at all.

       Arrow keys act immediately rather than entering a grab mode.
       Atlassian's testing found modal grab-and-move confusing when you
       cannot see the canvas, and an immediate nudge with a spoken
       result is both simpler to operate and simpler to undo. */
    onBarKey(e, task) {
      const k = e.key;

      if (k === 'Enter' || k === ' ') {
        e.preventDefault();
        Model.select(task.id);
        App.openDrawer(task.id, e.currentTarget);
        return;
      }
      if (k === 'ArrowUp' || k === 'ArrowDown') {
        e.preventDefault();
        const rows = Render.rs.visible || [];
        const i = rows.findIndex(r => r.id === task.id);
        const next = rows[i + (k === 'ArrowDown' ? 1 : -1)];
        if (next) {
          Model.select(next.id);
          const el = document.querySelector('.bar[data-id="' + next.id + '"]');
          if (el) el.focus();
        }
        return;
      }
      if (k !== 'ArrowLeft' && k !== 'ArrowRight') return;

      e.preventDefault();
      const dir = k === 'ArrowRight' ? 1 : -1;
      const step = e.shiftKey ? 7 : 1;      // Shift = a week
      const cal = Cal.of(Model.project);

      Model.snapshot();
      if (e.altKey) {
        /* Alt = resize the end only. Kept off the plain arrows because
           silently changing a duration when the user meant to move is
           the kind of edit nobody notices until much later. */
        if (task.type !== 'milestone') {
          const end = Cal.shift(task.end, dir * step, cal);
          if (U.parse(end) >= U.parse(task.start)) task.end = end;
        }
      } else {
        const start = Cal.shift(task.start, dir * step, cal);
        const moved = Cal.moveKeepingDuration(task, start, cal);
        task.start = moved.start;
        task.end = moved.end;
      }
      Model._recalcGroups();
      Model._afterChange();

      /* Announce the RESULT, not the keystroke. The user needs to know
         where the bar landed, and whether anything else moved with it. */
      App.announce(Render.barLabel(task));

      // The re-render replaced the node this handler was bound to.
      const el = document.querySelector('.bar[data-id="' + task.id + '"]');
      if (el) el.focus();
    },

    wireBar(barEl, task) {
      barEl.addEventListener('keydown', (e) => this.onBarKey(e, task));
      barEl.addEventListener('mousedown', (e) => this.onBarDown(e, barEl, task));
      // click select handled via mousedown (no move => select)
    },

    onBarDown(e, barEl, task) {
      if (e.button !== 0) return;
      const t = e.target;
      let mode = 'move';
      if (t.classList.contains('bar-handle')) mode = t.classList.contains('l') ? 'resize-l' : 'resize-r';
      else if (t.classList.contains('bar-progress-handle')) mode = 'progress';
      else if (t.classList.contains('bar-dep-dot')) mode = 'dep';
      if (task.type === 'group') mode = 'move-group-block';
      if (task.type === 'milestone' && (mode === 'resize-l' || mode === 'resize-r' || mode === 'progress')) mode = 'move';

      e.preventDefault();
      const fromSide = t.classList.contains('r') ? 'r' : 'l';
      Model.select(task.id);
      // selecting re-renders the chart, which replaces this bar's DOM node —
      // re-acquire the live element so geometry (ghost line, progress) is correct
      const fresh = Render.els.barsLayer.querySelector('.bar[data-id="' + (window.CSS && CSS.escape ? CSS.escape(task.id) : task.id) + '"]');
      if (fresh) barEl = fresh;

      const dayW = Render.rs.dayW;
      drag = {
        mode, task, barEl, startX: e.clientX, startY: e.clientY,
        origStart: task.start, origEnd: task.end, origProgress: task.progress || 0,
        dayW, moved: false, snapshotTaken: false,
      };

      if (mode === 'dep') {
        drag.depFromSide = fromSide;
        // link hit-paths must not swallow elementFromPoint while we hunt for a target bar
        document.body.classList.add('dragging-dep');
        drag.depGhost = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        drag.depGhost.setAttribute('class', 'dep-drag');
        Render.els.chartSvg.appendChild(drag.depGhost);
      }

      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onUp);
    },

    wireRowDrag(row, id) {
      row.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', id);
        e.dataTransfer.effectAllowed = 'move';
        row._dragId = id;
      });
      row.addEventListener('dragover', (e) => { e.preventDefault(); row.classList.add('dragover'); });
      row.addEventListener('dragleave', () => row.classList.remove('dragover'));
      row.addEventListener('drop', (e) => {
        e.preventDefault(); row.classList.remove('dragover');
        const dragId = e.dataTransfer.getData('text/plain');
        if (dragId && dragId !== id) Model.reorderBefore(dragId, id);
      });
    },
  };

  function daysDelta(e) {
    return Math.round((e.clientX - drag.startX) / drag.dayW);
  }

  function onMove(e) {
    if (!drag) return;
    const dx = e.clientX - drag.startX;
    if (Math.abs(dx) > 2 || Math.abs(e.clientY - drag.startY) > 2) drag.moved = true;
    if (!drag.moved) return;

    if (!drag.snapshotTaken && drag.mode !== 'dep') { Model.snapshot(); drag.snapshotTaken = true; }

    const task = drag.task;

    if (drag.mode === 'dep') {
      drawDepGhost(e);
      return;
    }

    if (drag.mode === 'progress') {
      const rect = drag.barEl.getBoundingClientRect();
      let pct = Math.round(((e.clientX - rect.left) / rect.width) * 100);
      pct = Math.max(0, Math.min(100, pct));
      Model.liveUpdate(task.id, { progress: pct });
      Render.render();
      return;
    }

    const dd = daysDelta(e);

    if (drag.mode === 'move' || drag.mode === 'move-group-block') {
      const cal = Cal.of(Model.project);
      let newStart = U.addDays(drag.origStart, dd);
      if (drag.mode === 'move-group-block') {
        moveGroupBlock(task, dd);
      } else if (task.type === 'milestone') {
        // A milestone dropped on a weekend snaps to the next working day
        newStart = Cal.nextWorking(newStart, cal, 1);
        Model.liveUpdate(task.id, { start: newStart, end: newStart });
      } else {
        // Dragging keeps the task's working length: drop a 10-working-day
        // bar anywhere and it is still ten days of work, not ten dates.
        const moved = Cal.moveKeepingDuration({ start: drag.origStart, end: drag.origEnd }, newStart, cal);
        Model.liveUpdate(task.id, moved);
      }
    } else if (drag.mode === 'resize-l') {
      let newStart = U.addDays(drag.origStart, dd);
      if (U.parse(newStart) > U.parse(drag.origEnd)) newStart = drag.origEnd;
      Model.liveUpdate(task.id, { start: newStart });
    } else if (drag.mode === 'resize-r') {
      let newEnd = U.addDays(drag.origEnd, dd);
      if (U.parse(newEnd) < U.parse(drag.origStart)) newEnd = drag.origStart;
      Model.liveUpdate(task.id, { end: newEnd });
    }
    Render.render();
  }

  function moveGroupBlock(group, dd) {
    if (dd === 0) return;
    // move group and all descendants
    const ids = new Set([group.id]);
    let changed = true;
    while (changed) {
      changed = false;
      Model.tasks().forEach(t => { if (t.parentId && ids.has(t.parentId) && !ids.has(t.id)) { ids.add(t.id); changed = true; } });
    }
    ids.forEach(id => {
      const t = Model.get(id);
      if (t.type === 'group') return; // recalced
      const os = drag._orig ? drag._orig[id].start : t.start;
      // store originals once
    });
    // simpler: compute from stored originals
    if (!drag._orig) {
      drag._orig = {};
      ids.forEach(id => { const t = Model.get(id); drag._orig[id] = { start: t.start, end: t.end }; });
    }
    ids.forEach(id => {
      const t = Model.get(id);
      if (t.type === 'group') return;
      const o = drag._orig[id];
      t.start = U.addDays(o.start, dd);
      t.end = t.type === 'milestone' ? t.start : U.addDays(o.end, dd);
    });
    Model._recalcGroups();
    Model.emit('change', Model.project);
  }

  function drawDepGhost(e) {
    const g = drag.barEl.getBoundingClientRect();
    const canvasRect = Render.els.chartCanvas.getBoundingClientRect();
    const sx = (drag.depFromSide === 'r' ? g.right : g.left) - canvasRect.left;
    const sy = g.top + g.height / 2 - canvasRect.top;
    const ex = e.clientX - canvasRect.left;
    const ey = e.clientY - canvasRect.top;
    drag.depGhost.setAttribute('d', `M ${sx} ${sy} C ${sx + 40} ${sy}, ${ex - 40} ${ey}, ${ex} ${ey}`);
    // highlight potential target
    const el = document.elementFromPoint(e.clientX, e.clientY);
    const targetBar = el && el.closest ? el.closest('.bar') : null;
    document.querySelectorAll('.bar.dep-target').forEach(b => b.classList.remove('dep-target'));
    if (targetBar && targetBar !== drag.barEl) targetBar.classList.add('dep-target');
  }

  function onUp(e) {
    window.removeEventListener('mousemove', onMove);
    window.removeEventListener('mouseup', onUp);
    if (!drag) return;

    if (drag.mode === 'dep') {
      document.body.classList.remove('dragging-dep');
      if (drag.depGhost) drag.depGhost.remove();
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const targetBar = el && el.closest ? el.closest('.bar') : null;
      document.querySelectorAll('.bar.dep-target').forEach(b => b.classList.remove('dep-target'));
      if (targetBar) {
        const targetId = targetBar.getAttribute('data-id');
        if (targetId && targetId !== drag.task.id) {
          const ok = Model.addDep(drag.task.id, targetId, 'FS');
          if (!ok) App.toast('Could not add dependency (would create a loop)');
        }
      }
      Render.render();
    } else if (!drag.moved) {
      // pure click on a bar (no drag): open the task card next to it
      App.openDrawer(drag.task.id, 'bar');
    } else {
      Model.save();
      Model.emit('change', Model.project);
    }
    drag = null;
  }

  window.Interactions = Interactions;
})();
