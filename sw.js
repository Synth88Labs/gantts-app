/* sw.js — service worker for gantts.app (offline app shell) */
var CACHE = 'gantts-v43';
var V = '?v=57';
var SHELL = [
  '/app.html',
  '/css/styles.css' + V,
  '/js/consent.js?v=30',
  '/js/i18n.js' + V,
  '/js/util.js' + V,
  '/js/store.js' + V,
  '/js/calendar.js' + V,
  '/js/resources.js' + V,
  '/js/model.js' + V,
  '/js/schedule.js' + V,
  '/js/render.js' + V,
  '/js/interactions.js' + V,
  '/js/msproject.js' + V,
  '/js/exports.js' + V,
  '/js/export-pdf.js' + V,
  '/js/templates.js' + V,
  '/js/features.js' + V,
  '/js/app.js' + V,
  '/assets/logo-mark.svg',
  '/assets/logo.svg',
  '/assets/logo-white.svg'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  // only handle same-origin; let CDN/export libs go straight to network
  if (url.origin !== self.location.origin) return;
  // network-first for HTML (fresh content), cache-first for static assets
  if (req.headers.get('accept') && req.headers.get('accept').indexOf('text/html') !== -1) {
    e.respondWith(fetch(req).then(function (res) {
      var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); return res;
    }).catch(function () { return caches.match(req).then(function (m) { return m || caches.match('/app.html'); }); }));
  } else {
    e.respondWith(caches.match(req).then(function (m) {
      return m || fetch(req).then(function (res) {
        var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); return res;
      }).catch(function () { return m; });
    }));
  }
});
