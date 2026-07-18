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
