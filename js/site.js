/* site.js — shared behavior for marketing/content pages */
(function () {
  // theme
  var KEY = 'gantts.theme';
  var root = document.documentElement;
  try { var saved = localStorage.getItem(KEY); if (saved) root.setAttribute('data-theme', saved); } catch (e) {}
  function currentTheme() {
    // default is light; dark only when explicitly chosen
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }
  window.toggleTheme = function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem(KEY, next); } catch (e) {}
    updateThemeIcon();
  };
  function updateThemeIcon() {
    document.querySelectorAll('.theme-toggle').forEach(function (b) {
      b.textContent = currentTheme() === 'dark' ? '☀️' : '🌙';
    });
  }

  /* Delegated handlers, replacing inline on* attributes.

     There were 1805 of them across 745 pages, in three shapes: the
     theme toggle, the language switcher, and the consent reset on the
     privacy page. Every one required 'unsafe-inline' in a Content
     Security Policy, which is most of what a CSP is for — allowing
     inline script is allowing the main thing XSS needs.

     Delegation rather than per-element binding because the consent
     banner and its footer control are injected after load, and a
     document-level listener covers them without any ordering
     dependency. */
  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('.theme-toggle, [data-consent-reset]') : null;
    if (!t) return;
    if (t.hasAttribute('data-consent-reset')) {
      if (window.Consent) window.Consent.reset();
      return;
    }
    window.toggleTheme();
  });

  /* The language switcher navigates on change. Kept as a <select>
     because it is a real form control for keyboard and screen-reader
     users; only the inline attribute goes. */
  document.addEventListener('change', function (e) {
    var s = e.target;
    if (!s || !s.matches || !s.matches('select[data-lang-nav]')) return;
    if (s.value) location.href = s.value;
  });

  document.addEventListener('DOMContentLoaded', function () {
    updateThemeIcon();
    // mobile nav
    var burger = document.querySelector('.nav-burger');
    var links = document.querySelector('.nav-links');
    if (burger && links) burger.addEventListener('click', function () { links.classList.toggle('open'); });

    // year
    document.querySelectorAll('.year').forEach(function (e) { e.textContent = new Date().getFullYear(); });

    // scroll reveal
    var els = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && els.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
      }, { threshold: 0.12 });
      els.forEach(function (el) { io.observe(el); });
    } else { els.forEach(function (el) { el.classList.add('in'); }); }
  });
})();
