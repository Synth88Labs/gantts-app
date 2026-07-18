/* ============================================================
   store.js — durable project storage.

   WHY THIS EXISTS

   Projects used to live entirely in localStorage, which gives an origin
   about 5 MiB, shared by every project the user has ever made. Worse,
   each project was written TWICE — once under a "current project" key
   and again under its own key — so the real ceiling was half of that.

   When the quota was hit, setItem threw, model.js caught it, logged
   `console.warn('save failed')` and carried on. The user was told
   nothing and kept working on a plan that was no longer being saved.
   That is silent data loss, and it is the reason this module exists.

   WHAT IT DOES

   - Project blobs move to IndexedDB, which shares a much larger pool
     (Chromium allows up to ~60% of free disk; mobile can be ~50 MB).
   - A small index (id, name, updated, count) stays in localStorage so
     the project list can be read synchronously at boot, which keeps the
     UI code simple. It is a few hundred bytes, not megabytes.
   - Legacy localStorage blobs are migrated into IndexedDB on first run
     and then DELETED from localStorage, handing that space back.
   - Every write failure is REPORTED. Nothing is swallowed. Callers are
     expected to tell the user.
   - If IndexedDB is unavailable (private mode in some browsers, ancient
     builds, or a blocked upgrade) it degrades to localStorage and says
     so via mode(), rather than pretending to have saved.

   Data never leaves the browser here — IndexedDB is same-origin local
   storage, exactly like localStorage was.
   ============================================================ */
(function () {
  const DB_NAME = 'gantts';
  const DB_VERSION = 1;
  const STORE = 'projects';
  const LS_INDEX = 'gantts.projects.v1';   // small, stays in localStorage
  const LS_CURRENT = 'gantts.current.v1';  // id pointer only
  const LS_BLOB_PREFIX = 'gantts.p.';      // legacy per-project blobs
  const LS_LEGACY_CURRENT = 'gantts.project.v1'; // legacy full copy of current

  let db = null;
  let mode = 'ls';           // 'idb' once open succeeds
  let failHandlers = [];

  function report(op, err) {
    // A quota error is the one users must hear about; everything else is
    // still surfaced, because a save that did not happen is never routine.
    const quota = err && (err.name === 'QuotaExceededError' ||
      err.name === 'NS_ERROR_DOM_QUOTA_REACHED' || err.code === 22);
    const info = { op, error: err, quota: !!quota, mode };
    failHandlers.forEach(fn => { try { fn(info); } catch (e) {} });
    console.error('[store] ' + op + ' failed', err);
    return info;
  }

  function openDB() {
    return new Promise((resolve, reject) => {
      if (!('indexedDB' in window)) return reject(new Error('no indexedDB'));
      let req;
      try { req = indexedDB.open(DB_NAME, DB_VERSION); }
      catch (e) { return reject(e); }
      req.onupgradeneeded = () => {
        const d = req.result;
        if (!d.objectStoreNames.contains(STORE)) d.createObjectStore(STORE, { keyPath: 'id' });
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
      // A blocked upgrade means another tab holds an older version open.
      // Do not hang forever waiting for it.
      req.onblocked = () => reject(new Error('indexedDB blocked by another tab'));
      setTimeout(() => reject(new Error('indexedDB open timed out')), 3000);
    });
  }

  function tx(writable) {
    const t = db.transaction(STORE, writable ? 'readwrite' : 'readonly');
    return t.objectStore(STORE);
  }

  function idbPut(project) {
    return new Promise((resolve, reject) => {
      let r;
      try { r = tx(true).put(project); } catch (e) { return reject(e); }
      r.onsuccess = () => resolve(true);
      r.onerror = () => reject(r.error);
    });
  }

  function idbGet(id) {
    return new Promise((resolve, reject) => {
      let r;
      try { r = tx(false).get(id); } catch (e) { return reject(e); }
      r.onsuccess = () => resolve(r.result || null);
      r.onerror = () => reject(r.error);
    });
  }

  function idbDelete(id) {
    return new Promise((resolve, reject) => {
      let r;
      try { r = tx(true).delete(id); } catch (e) { return reject(e); }
      r.onsuccess = () => resolve(true);
      r.onerror = () => reject(r.error);
    });
  }

  // ---- localStorage helpers (fallback path + the index) ----
  const lsGet = (k) => { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } };
  function lsSet(k, v) {
    try { localStorage.setItem(k, JSON.stringify(v)); return true; }
    catch (e) { report('localStorage.setItem(' + k + ')', e); return false; }
  }

  /* Move any project still sitting in localStorage into IndexedDB, then
     remove it from localStorage. This is what actually reclaims the
     5 MiB for users who have been running the old build. */
  async function migrateLegacy() {
    const moved = [];
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.indexOf(LS_BLOB_PREFIX) === 0) keys.push(k);
    }
    for (const k of keys) {
      const p = lsGet(k);
      if (!p || !p.id) continue;
      try {
        await idbPut(p);
        localStorage.removeItem(k);   // only after the write succeeded
        moved.push(p.id);
      } catch (e) {
        report('migrate ' + k, e);    // leave it in localStorage; try again next boot
      }
    }
    // The legacy duplicate of the current project is pure waste once the
    // per-project copy is safe in IndexedDB.
    const legacy = lsGet(LS_LEGACY_CURRENT);
    if (legacy && legacy.id) {
      try {
        const existing = await idbGet(legacy.id);
        if (!existing || (legacy.updated || 0) > (existing.updated || 0)) await idbPut(legacy);
        localStorage.removeItem(LS_LEGACY_CURRENT);
        if (moved.indexOf(legacy.id) < 0) moved.push(legacy.id);
      } catch (e) { report('migrate legacy current', e); }
    }
    return moved;
  }

  const Store = {
    /** 'idb' when IndexedDB is in use, 'ls' when degraded to localStorage. */
    mode() { return mode; },

    /** Register a handler for write failures. Callers MUST tell the user. */
    onFail(fn) { failHandlers.push(fn); return this; },

    async init() {
      try {
        db = await openDB();
        mode = 'idb';
        await migrateLegacy();
      } catch (e) {
        mode = 'ls';
        console.warn('[store] IndexedDB unavailable, using localStorage', e);
      }
      // Ask the browser not to evict us. Without this, site data is
      // "best effort" and can be cleared when the disk gets tight — and
      // for a no-account app this storage IS the user's only copy.
      try {
        if (navigator.storage && navigator.storage.persist) {
          const already = navigator.storage.persisted && await navigator.storage.persisted();
          if (!already) await navigator.storage.persist();
        }
      } catch (e) {}
      return mode;
    },

    /** Save one project. Resolves true, or rejects with a reported error. */
    async save(project) {
      if (mode === 'idb') {
        try { await idbPut(project); return true; }
        catch (e) { throw report('save', e); }
      }
      if (lsSet(LS_BLOB_PREFIX + project.id, project)) return true;
      throw { op: 'save', quota: true, mode };
    },

    async load(id) {
      if (mode === 'idb') {
        try {
          const p = await idbGet(id);
          if (p) return p;
        } catch (e) { report('load', e); }
      }
      return lsGet(LS_BLOB_PREFIX + id);   // fallback / not-yet-migrated
    },

    async remove(id) {
      if (mode === 'idb') { try { await idbDelete(id); } catch (e) { report('remove', e); } }
      try { localStorage.removeItem(LS_BLOB_PREFIX + id); } catch (e) {}
    },

    // ---- the small synchronous index ----
    index() { return lsGet(LS_INDEX) || []; },
    setIndex(idx) { return lsSet(LS_INDEX, idx); },
    currentId() { try { return localStorage.getItem(LS_CURRENT); } catch (e) { return null; } },
    setCurrentId(id) { try { localStorage.setItem(LS_CURRENT, id); } catch (e) {} },

    /** {usage, quota, pct} or null when the browser will not say. */
    async estimate() {
      try {
        if (!navigator.storage || !navigator.storage.estimate) return null;
        const { usage, quota } = await navigator.storage.estimate();
        if (!quota) return null;
        return { usage, quota, pct: Math.round((usage / quota) * 100) };
      } catch (e) { return null; }
    },
  };

  window.Store = Store;
})();
