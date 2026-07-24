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

    setupTemplateSearch();
  });

  /* Template-hub search.

     Injected from JS, and only when a template grid is present, so the
     one implementation covers the hand-authored English hub AND the five
     generated localized hubs without touching six files or the
     generator. It filters cards already in the DOM — no request, no
     index, nothing to keep in sync with the pages.

     The whole hub is category sections of `.tpl-card` anchors. A search
     hides non-matching cards, hides any section left with no visible
     card (so empty headings do not linger), hides the category jump-row,
     and announces the count. Clearing it puts everything back. */
  function setupTemplateSearch() {
    var firstGrid = document.querySelector('.tpl-grid');
    if (!firstGrid || document.querySelector('.tpl-search')) return;

    var lang = (document.documentElement.getAttribute('lang') || 'en').slice(0, 2).toLowerCase();
    var T = {
      en: { ph: 'Search 100 templates…', none: 'No templates match', count: '{n} templates' },
      es: { ph: 'Buscar entre 100 plantillas…', none: 'Ninguna plantilla coincide', count: '{n} plantillas' },
      fr: { ph: 'Rechercher parmi 100 modèles…', none: 'Aucun modèle ne correspond', count: '{n} modèles' },
      de: { ph: '100 Vorlagen durchsuchen…', none: 'Keine Vorlage gefunden', count: '{n} Vorlagen' },
      pt: { ph: 'Pesquisar 100 modelos…', none: 'Nenhum modelo corresponde', count: '{n} modelos' },
      zh: { ph: '搜索 100 个模板…', none: '没有匹配的模板', count: '{n} 个模板' }
    }[lang] || { ph: 'Search templates…', none: 'No templates match', count: '{n} templates' };

    var cards = [].slice.call(document.querySelectorAll('.tpl-card'));
    // Precompute each card's searchable text once.
    cards.forEach(function (c) {
      var h = c.querySelector('h3'), p = c.querySelector('p');
      c._searchText = ((h ? h.textContent : '') + ' ' + (p ? p.textContent : '')).toLowerCase();
    });
    var sections = [].slice.call(document.querySelectorAll('.tpl-grid')).map(function (g) {
      return g.closest('section') || g.parentElement;
    });
    var jumpRow = document.querySelector('.jump-row');

    var wrap = document.createElement('div');
    wrap.className = 'tpl-search-wrap';
    wrap.innerHTML =
      '<div class="tpl-search-inner">' +
        '<input type="search" class="tpl-search" role="searchbox" ' +
          'aria-label="' + T.ph + '" placeholder="' + T.ph + '" autocomplete="off" spellcheck="false" />' +
        '<span class="tpl-search-count" role="status" aria-live="polite"></span>' +
      '</div>';
    // Sits right after the hero section, above the first category.
    var hero = document.querySelector('section');
    if (hero && hero.parentNode) hero.parentNode.insertBefore(wrap, hero.nextSibling);

    var input = wrap.querySelector('.tpl-search');
    var count = wrap.querySelector('.tpl-search-count');

    function apply(q) {
      q = q.trim().toLowerCase();
      var shown = 0;
      cards.forEach(function (c) {
        var hit = !q || c._searchText.indexOf(q) !== -1;
        c.style.display = hit ? '' : 'none';
        if (hit) shown++;
      });
      // hide sections that now have no visible card, and the jump row,
      // but only while a query is active
      sections.forEach(function (s) {
        if (!q) { s.style.display = ''; return; }
        var any = s.querySelector('.tpl-card:not([style*="display: none"])');
        s.style.display = any ? '' : 'none';
      });
      if (jumpRow) jumpRow.style.display = q ? 'none' : '';
      count.textContent = q ? (shown ? T.count.replace('{n}', shown) : T.none) : '';
    }

    var t;
    input.addEventListener('input', function () {
      clearTimeout(t);
      t = setTimeout(function () { apply(input.value); }, 90);
    });
    // Escape clears
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { input.value = ''; apply(''); }
    });
  }
})();
