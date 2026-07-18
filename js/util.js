/* ============================================================
   util.js — date math, ids, dom helpers, small utilities
   Exposes a global `U`.
   ============================================================ */
(function () {
  const MS_DAY = 86400000;

  const U = {
    MS_DAY,

    // ---- ids ----
    uid(prefix) {
      return (prefix || 't') + '_' + Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-3);
    },

    // ---- dates (all internal dates are 'YYYY-MM-DD' strings, midnight-local) ----
    today() { return U.toISO(new Date()); },

    toISO(d) {
      const dt = (d instanceof Date) ? d : new Date(d);
      const y = dt.getFullYear();
      const m = String(dt.getMonth() + 1).padStart(2, '0');
      const day = String(dt.getDate()).padStart(2, '0');
      return `${y}-${m}-${day}`;
    },

    parse(iso) {
      // parse as local midnight (avoid TZ shifting)
      const [y, m, d] = iso.split('-').map(Number);
      return new Date(y, m - 1, d);
    },

    addDays(iso, n) {
      const dt = U.parse(iso);
      dt.setDate(dt.getDate() + n);
      return U.toISO(dt);
    },

    // whole-day difference end - start (exclusive). end>=start => >=0
    diffDays(a, b) {
      return Math.round((U.parse(b) - U.parse(a)) / MS_DAY);
    },

    // inclusive duration in days (start..end counts both) — Gantt convention
    duration(start, end) {
      return U.diffDays(start, end) + 1;
    },

    // end date given start + inclusive duration
    endFrom(start, durationDays) {
      return U.addDays(start, Math.max(1, durationDays) - 1);
    },

    dow(iso) { return U.parse(iso).getDay(); }, // 0 Sun .. 6 Sat
    isWeekend(iso) { const d = U.dow(iso); return d === 0 || d === 6; },

    min(a, b) { return U.parse(a) <= U.parse(b) ? a : b; },
    max(a, b) { return U.parse(a) >= U.parse(b) ? a : b; },
    clampISO(iso, lo, hi) { return U.max(lo, U.min(iso, hi)); },

    fmtShort(iso) {
      const d = U.parse(iso);
      return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    },
    fmtMonth(iso) {
      return U.parse(iso).toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
    },
    monthName(m) { return ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][m]; },

    weekStart(iso) {
      const d = U.parse(iso);
      const day = d.getDay(); // week starts Monday
      const delta = (day === 0 ? -6 : 1 - day);
      d.setDate(d.getDate() + delta);
      return U.toISO(d);
    },

    // ISO week number
    isoWeek(iso) {
      const d = U.parse(iso);
      const t = new Date(d.getFullYear(), d.getMonth(), d.getDate());
      const day = (t.getDay() + 6) % 7;
      t.setDate(t.getDate() - day + 3);
      const firstThu = new Date(t.getFullYear(), 0, 4);
      const fday = (firstThu.getDay() + 6) % 7;
      firstThu.setDate(firstThu.getDate() - fday + 3);
      return 1 + Math.round((t - firstThu) / (7 * MS_DAY));
    },

    // ---- dom ----
    el(tag, attrs, children) {
      const node = document.createElement(tag);
      if (attrs) for (const k in attrs) {
        if (k === 'class') node.className = attrs[k];
        else if (k === 'style' && typeof attrs[k] === 'object') Object.assign(node.style, attrs[k]);
        else if (k.startsWith('on') && typeof attrs[k] === 'function') node.addEventListener(k.slice(2), attrs[k]);
        else if (k === 'html') node.innerHTML = attrs[k];
        else if (attrs[k] != null && attrs[k] !== false) node.setAttribute(k, attrs[k]);
      }
      if (children != null) {
        (Array.isArray(children) ? children : [children]).forEach(c => {
          if (c == null) return;
          node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
        });
      }
      return node;
    },
    $(sel, root) { return (root || document).querySelector(sel); },
    $$(sel, root) { return Array.from((root || document).querySelectorAll(sel)); },

    clear(node) { while (node.firstChild) node.removeChild(node.firstChild); },

    // ---- misc ----
    clone(o) { return JSON.parse(JSON.stringify(o)); },
    debounce(fn, ms) {
      let t; return function () { clearTimeout(t); const a = arguments, c = this; t = setTimeout(() => fn.apply(c, a), ms); };
    },
    download(filename, blobOrString, mime) {
      const blob = blobOrString instanceof Blob ? blobOrString : new Blob([blobOrString], { type: mime || 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = filename;
      document.body.appendChild(a); a.click();
      setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 100);
    },
    // readable/contrast text color for a hex bg
    contrast(hex) {
      const c = hex.replace('#', '');
      const r = parseInt(c.substr(0, 2), 16), g = parseInt(c.substr(2, 2), 16), b = parseInt(c.substr(4, 2), 16);
      return (r * 299 + g * 587 + b * 114) / 1000 > 150 ? '#1e293b' : '#ffffff';
    },
    escapeHtml(s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
    },
  };

  U.PALETTE = ['#2563eb','#0ea5e9','#10b981','#22c55e','#eab308','#f97316','#ef4444','#ec4899','#a855f7','#6366f1','#14b8a6','#64748b'];

  window.U = U;
})();
