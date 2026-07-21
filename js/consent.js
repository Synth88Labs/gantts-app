/* ============================================================
   consent.js — the analytics gate, and the banner that controls it.

   THE ORDER IS THE WHOLE POINT

   Before this existed, gtag.js was the first thing in <head> on every
   page and set its cookies immediately. A banner added on top of that
   would have been theatre: the cookies are already written by the time
   anyone sees a choice, and privacy.html would have been making a
   promise the site did not keep.

   So analytics is not loaded here at all until `granted` is on record.
   Not loaded-but-denied, not cookieless pings — no request to Google.
   Declining costs a page nothing, because nothing was waiting on it.

   WHAT IS DELIBERATE

   * Accept and Decline are the SAME size, weight and prominence. A
     decline that is harder to find than an accept is not a free choice
     and regulators say so explicitly.
   * There is no pre-ticked anything and no implicit consent: closing
     the page, scrolling, or pressing Escape all leave the state
     undecided, and undecided means analytics stays off.
   * The banner is a complementary landmark, not a modal. It does not
     trap focus or cover the page, because a cookie choice is not worth
     blocking someone from reading a guide.
   * The decision is withdrawable from the footer on every page, which
     is a requirement rather than a courtesy — consent you cannot take
     back is not consent.
   * The record itself lives in localStorage, not a cookie. It is
     strictly necessary (it exists only to remember a refusal), and
     keeping it out of cookies means a visitor who declines ends the
     visit with no cookies at all.

   VERSIONING: bump CONSENT_VERSION if what we ask permission FOR
   changes. Old answers to a different question should not carry over.
   ============================================================ */
(function () {
  'use strict';

  var KEY = 'gantts.consent';
  var CONSENT_VERSION = 1;
  var GA_ID = 'G-3ZFCTKWL1D';

  /* ---- state ------------------------------------------------- */

  function read() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return null;
      var v = JSON.parse(raw);
      // An answer to an older version of the question is not an answer.
      if (!v || v.version !== CONSENT_VERSION) return null;
      return v.state === 'granted' || v.state === 'denied' ? v.state : null;
    } catch (e) { return null; }   // private mode, storage disabled
  }

  function write(state) {
    try {
      localStorage.setItem(KEY, JSON.stringify({
        state: state, version: CONSENT_VERSION, at: new Date().toISOString(),
      }));
    } catch (e) { /* refusing to store is itself fine; we just ask again */ }
  }

  /* Removing the cookies matters on withdrawal: without this, someone
     who changes their mind keeps the _ga cookies they just revoked,
     and the site would be saying one thing while the browser says
     another. Path and domain must match how gtag set them. */
  function dropAnalyticsCookies() {
    var host = location.hostname;
    var domains = [host, '.' + host];
    var bare = host.replace(/^www\./, '');
    if (bare !== host) { domains.push(bare, '.' + bare); }
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (!/^_ga/.test(name)) return;
      domains.forEach(function (d) {
        document.cookie = name + '=; Max-Age=0; path=/; domain=' + d;
      });
      document.cookie = name + '=; Max-Age=0; path=/';
    });
  }

  /* ---- analytics ---------------------------------------------- */

  var loaded = false;
  function loadAnalytics() {
    if (loaded || window.__gaLoaded) return;
    loaded = window.__gaLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    // anonymize_ip is redundant on GA4 (it always truncates) but stating
    // it costs nothing and makes the intent legible to anyone reading.
    window.gtag('config', GA_ID, { anonymize_ip: true });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }

  /* ---- copy, per locale ---------------------------------------
     Read from <html lang>, so a German page asks in German. The
     banner is the one piece of UI a visitor cannot avoid, so it is
     the last place an untranslated string is acceptable. */
  var T = {
    en: {
      title: 'Cookies for analytics',
      body: 'We would like to set two Google Analytics cookies to see which guides and templates people actually use. Nothing about the plans you build is ever sent anywhere — your project data stays in your browser either way.',
      accept: 'Accept', decline: 'Decline', more: 'Privacy policy',
      settings: 'Cookie settings',
      onDecline: 'Analytics declined. Nothing was loaded.',
      onAccept: 'Thanks — analytics enabled.',
      reopen: 'Your choice was saved. You can change it any time from the footer.',
    },
    es: {
      title: 'Cookies de analítica',
      body: 'Nos gustaría instalar dos cookies de Google Analytics para saber qué guías y plantillas se usan de verdad. Nada de los planes que creas se envía a ningún sitio: tus datos siguen en tu navegador en cualquier caso.',
      accept: 'Aceptar', decline: 'Rechazar', more: 'Política de privacidad',
      settings: 'Configuración de cookies',
      onDecline: 'Analítica rechazada. No se ha cargado nada.',
      onAccept: 'Gracias, analítica activada.',
      reopen: 'Tu elección se ha guardado. Puedes cambiarla cuando quieras desde el pie de página.',
    },
    fr: {
      title: 'Cookies de mesure d’audience',
      body: 'Nous aimerions déposer deux cookies Google Analytics pour voir quels guides et modèles servent réellement. Rien de ce que vous planifiez n’est transmis : vos données restent dans votre navigateur dans tous les cas.',
      accept: 'Accepter', decline: 'Refuser', more: 'Politique de confidentialité',
      settings: 'Paramètres des cookies',
      onDecline: 'Mesure d’audience refusée. Rien n’a été chargé.',
      onAccept: 'Merci, mesure d’audience activée.',
      reopen: 'Votre choix est enregistré. Vous pouvez le modifier à tout moment depuis le pied de page.',
    },
    de: {
      title: 'Cookies für die Reichweitenmessung',
      body: 'Wir würden gern zwei Google-Analytics-Cookies setzen, um zu sehen, welche Leitfäden und Vorlagen wirklich genutzt werden. Von Ihren Plänen wird nichts übertragen — Ihre Projektdaten bleiben so oder so in Ihrem Browser.',
      accept: 'Akzeptieren', decline: 'Ablehnen', more: 'Datenschutzerklärung',
      settings: 'Cookie-Einstellungen',
      onDecline: 'Reichweitenmessung abgelehnt. Es wurde nichts geladen.',
      onAccept: 'Danke — Reichweitenmessung aktiviert.',
      reopen: 'Ihre Auswahl wurde gespeichert. Sie können sie jederzeit über die Fußzeile ändern.',
    },
    pt: {
      title: 'Cookies de análise',
      body: 'Gostaríamos de gravar dois cookies do Google Analytics para saber quais guias e modelos são realmente usados. Nada dos planos que você cria é enviado a lugar nenhum — seus dados continuam no seu navegador de qualquer forma.',
      accept: 'Aceitar', decline: 'Recusar', more: 'Política de privacidade',
      settings: 'Configurações de cookies',
      onDecline: 'Análise recusada. Nada foi carregado.',
      onAccept: 'Obrigado — análise ativada.',
      reopen: 'Sua escolha foi salva. Você pode alterá-la quando quiser no rodapé.',
    },
    zh: {
      title: '用于统计分析的 Cookie',
      body: '我们希望设置两个 Google Analytics Cookie，以了解哪些指南和模板真正被使用。你制作的计划内容不会被发送到任何地方——无论是否同意，项目数据都只保存在你的浏览器里。',
      accept: '接受', decline: '拒绝', more: '隐私政策',
      settings: 'Cookie 设置',
      onDecline: '已拒绝统计分析，未加载任何内容。',
      onAccept: '谢谢，统计分析已启用。',
      reopen: '你的选择已保存，可随时在页脚修改。',
    },
  };

  function strings() {
    var lang = (document.documentElement.lang || 'en').slice(0, 2).toLowerCase();
    return T[lang] || T.en;
  }

  function privacyHref() {
    var lang = (document.documentElement.lang || 'en').slice(0, 2).toLowerCase();
    return T[lang] && lang !== 'en' ? '/' + lang + '/privacy.html' : '/privacy.html';
  }

  /* ---- styles, carried by the component ------------------------
     The banner first shipped with its CSS in site.css only. The editor
     at /app.html loads styles.css instead, so the banner appeared there
     completely unstyled — a raw block of text and two default buttons
     shoved at the bottom of the document.

     Copying the rules into the second stylesheet would fix today and
     drift tomorrow, and the two sheets do not even define the same
     custom properties (--card and --bg-soft exist in one, not the
     other). So the component brings its own styles and depends on
     nothing: every colour has a literal fallback, and the buttons are
     styled here rather than borrowing .btn, which differs between the
     two sheets. It cannot render unstyled on a page again. */
  function injectStyles() {
    if (document.getElementById('consentStyles')) return;
    var css =
      '.consent{position:fixed;left:0;right:0;bottom:0;z-index:2147483000;' +
        'background:var(--card,var(--bg,#fff));border-top:1px solid var(--line,#e2e8f0);' +
        'color:var(--ink,#16151d);box-shadow:0 -8px 30px rgba(0,0,0,.14);' +
        'padding:14px 0;font-family:var(--font,system-ui,-apple-system,Segoe UI,Roboto,sans-serif);' +
        'animation:consent-in .18s ease-out}' +
      /* Slide from 12px, not from 100%. If the animation never advances
         — a throttled background tab at load, say — the element rests
         wherever the "from" state puts it. At translateY(100%) that is
         entirely below the fold: the banner is invisible and the visitor
         is never actually asked. At 12px it is simply 12px low and fully
         usable. A consent prompt must not be able to hide itself. */
      '@keyframes consent-in{from{transform:translateY(12px)}to{transform:none}}' +
      '@media (prefers-reduced-motion:reduce){.consent{animation:none}}' +
      '.consent-inner{max-width:1080px;margin:0 auto;padding:0 20px;display:flex;gap:18px;' +
        'align-items:center;justify-content:space-between;flex-wrap:wrap}' +
      '.consent-copy{flex:1 1 420px;min-width:0}' +
      '.consent-copy strong{display:block;font-size:14.5px;margin-bottom:2px;color:var(--ink,#16151d)}' +
      '.consent-copy p{margin:0;font-size:13.5px;line-height:1.5;color:var(--ink-soft,#64748b)}' +
      '.consent-copy a{color:var(--brand,#6c4cf1);text-decoration:underline;text-underline-offset:2px}' +
      '.consent-actions{display:flex;gap:10px;flex:0 0 auto}' +
      /* Equal footprint is a legal requirement, not a style choice. */
      '.consent-btn{min-width:116px;justify-content:center;display:inline-flex;align-items:center;' +
        'padding:9px 16px;border-radius:9px;font:inherit;font-size:14px;font-weight:600;' +
        'cursor:pointer;border:1px solid var(--line,#cbd5e1);background:transparent;' +
        'color:var(--ink,#16151d);line-height:1.2}' +
      '.consent-btn:hover{border-color:var(--brand,#6c4cf1)}' +
      '.consent-btn-primary{background:var(--brand,#6c4cf1);border-color:var(--brand,#6c4cf1);color:#fff}' +
      '.consent-btn:focus-visible{outline:2px solid var(--brand,#6c4cf1);outline-offset:2px}' +
      ':root[data-theme="dark"] .consent{background:#151127;border-top-color:#2a2440;color:#ece9f7}' +
      ':root[data-theme="dark"] .consent-copy strong{color:#ece9f7}' +
      ':root[data-theme="dark"] .consent-copy p{color:#a9a3c4}' +
      ':root[data-theme="dark"] .consent-btn{border-color:#3a3357;color:#ece9f7}' +
      /* Mobile: reset the flex-basis. In a column container that 420px
         becomes a HEIGHT floor and turns the bar into a two-thirds
         screen interstitial, which Google treats as intrusive. */
      '@media (max-width:560px){' +
        '.consent{padding:12px 0}' +
        '.consent-inner{flex-direction:column;align-items:stretch;gap:12px;padding:0 16px}' +
        '.consent-copy{flex:0 0 auto}' +
        '.consent-copy strong{font-size:14px}' +
        '.consent-copy p{font-size:13px;line-height:1.45}' +
        '.consent-actions{width:100%}' +
        '.consent-btn{flex:1;min-width:0}}' +
      '.consent-reopen{background:none;border:0;padding:0;font:inherit;color:inherit;' +
        'cursor:pointer;text-decoration:underline;text-underline-offset:2px}';
    var s = document.createElement('style');
    s.id = 'consentStyles';
    s.textContent = css;
    document.head.appendChild(s);
  }

  /* ---- banner -------------------------------------------------- */

  var el = null;

  function close(msg) {
    if (!el) return;
    var live = document.getElementById('consentLive');
    if (live && msg) live.textContent = msg;
    el.remove();
    el = null;
  }

  function show() {
    if (el) return;
    injectStyles();
    var t = strings();
    el = document.createElement('aside');
    el.className = 'consent';
    el.setAttribute('role', 'complementary');
    el.setAttribute('aria-label', t.title);
    el.innerHTML =
      '<div class="consent-inner">' +
        '<div class="consent-copy">' +
          '<strong>' + t.title + '</strong>' +
          '<p>' + t.body + ' <a href="' + privacyHref() + '">' + t.more + '</a></p>' +
        '</div>' +
        '<div class="consent-actions">' +
          '<button type="button" class="consent-btn consent-no">' + t.decline + '</button>' +
          '<button type="button" class="consent-btn consent-btn-primary consent-yes">' + t.accept + '</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(el);

    el.querySelector('.consent-yes').addEventListener('click', function () {
      write('granted'); loadAnalytics(); close(t.onAccept);
    });
    el.querySelector('.consent-no').addEventListener('click', function () {
      write('denied'); dropAnalyticsCookies(); close(t.onDecline);
    });
  }

  /* A withdrawal control on every page. Injected at runtime rather than
     baked into the footer template because pages come from four
     different generators plus hand-authored HTML, and this way there is
     exactly one copy of it. */
  function addFooterControl() {
    var bottom = document.querySelector('.footer-bottom') || document.querySelector('.footer .container');
    if (!bottom || document.querySelector('.consent-reopen')) return;
    injectStyles();   // this renders even when the banner does not
    var t = strings();
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'consent-reopen';
    b.textContent = t.settings;
    b.addEventListener('click', function () {
      try { localStorage.removeItem(KEY); } catch (e) {}
      dropAnalyticsCookies();
      show();
      if (el) el.scrollIntoView({ block: 'nearest' });
    });
    var span = document.createElement('span');
    span.appendChild(b);
    bottom.appendChild(span);
  }

  /* A polite live region so a screen-reader user hears the outcome
     rather than having the banner silently vanish. */
  function addLiveRegion() {
    if (document.getElementById('consentLive')) return;
    var d = document.createElement('div');
    d.id = 'consentLive';
    d.setAttribute('role', 'status');
    d.setAttribute('aria-live', 'polite');
    d.className = 'sr-only';
    document.body.appendChild(d);
  }

  function init() {
    var state = read();

    /* Anyone who visited before this gate existed is carrying _ga
       cookies that were set WITHOUT being asked, because analytics used
       to load unconditionally. Having no record of consent, we have no
       basis to keep them — and waiting for the visitor to click Decline
       would mean anyone who simply ignores the banner keeps cookies they
       never agreed to, indefinitely.

       So: undecided means no analytics cookies, full stop. If they then
       accept, gtag sets fresh ones a moment later and nothing is lost
       but a session id that was not ours to hold. */
    if (state === null) dropAnalyticsCookies();

    if (state === 'granted') loadAnalytics();
    addLiveRegion();
    addFooterControl();
    if (state === null) show();          // undecided → ask, load nothing
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }

  // Exposed for the privacy page, which offers the same control inline.
  window.Consent = { show: show, state: read, reset: function () {
    try { localStorage.removeItem(KEY); } catch (e) {}
    dropAnalyticsCookies(); show();
  } };
})();
