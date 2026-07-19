/* ============================================================
   promo.js — the ExcelGuru.io partner banner.

   ONE definition of the markup, shared by the hand-authored English
   pages and the localized renderer, so the two cannot drift the way
   the template cards and guide chrome did.

   LINK POLICY — deliberate, and the reason this file exists.

   Google's link-spam policy requires advertising links to carry
   rel="sponsored" (or nofollow). An identical *followed* link repeated
   across ~190 pages is a site-wide footprint, and that pattern is what
   gets both the linking and the linked site demoted — so shipping this
   as a plain followed link everywhere would put excelguru.io at risk,
   not just gantts.app.

   So the banner appears widely but is followed narrowly: followed on
   the four English pages where an Excel template library is a genuine
   editorial recommendation, and rel="sponsored" everywhere else. That
   keeps the footprint small enough to read as an editorial link rather
   than a site-wide placement.

   If the arrangement is paid, FOLLOW_ON should be emptied — a paid
   followed link is a policy violation regardless of how few pages it
   sits on.
   ============================================================ */

const HREF = 'https://excelguru.io/category/templates/gantt-chart/';

/* English pages where the link is followed. Topical fit is the test:
   these three guides are specifically about building Gantt charts in
   spreadsheets, and the index is the category page they sit under. */
const FOLLOW_ON = new Set([
  'blog/index.html',
  'blog/gantt-chart-in-excel.html',
  'blog/gantt-chart-in-google-sheets.html',
  'blog/best-free-gantt-chart-software.html',
]);

const COPY = {
  en: {
    tag: 'Advertisement',
    h: 'Gantt chart templates for Excel',
    p: 'ExcelGuru.io keeps a free library of ready-made Gantt chart spreadsheets — formulas already wired up, no add-ons needed.',
    cta: 'Browse the templates →',
  },
  es: {
    tag: 'Publicidad',
    h: 'Plantillas de Gantt para Excel',
    p: 'ExcelGuru.io mantiene una biblioteca gratuita de hojas de cálculo de Gantt listas para usar, con las fórmulas ya montadas.',
    cta: 'Ver las plantillas →',
  },
  fr: {
    tag: 'Publicité',
    h: 'Modèles de Gantt pour Excel',
    p: 'ExcelGuru.io propose une bibliothèque gratuite de feuilles de calcul Gantt prêtes à l’emploi, formules déjà en place.',
    cta: 'Voir les modèles →',
  },
  de: {
    tag: 'Anzeige',
    h: 'Gantt-Vorlagen für Excel',
    p: 'ExcelGuru.io führt eine kostenlose Sammlung fertiger Gantt-Tabellen — die Formeln sind bereits hinterlegt, Add-ins sind nicht nötig.',
    cta: 'Vorlagen ansehen →',
  },
  pt: {
    tag: 'Publicidade',
    h: 'Modelos de Gantt para Excel',
    p: 'O ExcelGuru.io mantém uma biblioteca gratuita de planilhas de Gantt prontas, com as fórmulas já configuradas.',
    cta: 'Ver os modelos →',
  },
  zh: {
    tag: '广告',
    h: 'Excel 甘特图模板',
    p: 'ExcelGuru.io 提供一套免费的甘特图表格模板，公式已经配置好，无需额外插件。',
    cta: '浏览模板 →',
  },
};

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * @param {string} code   locale code, or 'en'
 * @param {string} page   site-relative page path, e.g. 'blog/index.html'
 * @param {string} indent leading whitespace, to match surrounding markup
 */
function promo(code, page, indent = '  ') {
  const c = COPY[code] || COPY.en;
  // target=_blank needs noopener; sponsored is additive to it
  const rel = FOLLOW_ON.has(page) ? 'noopener' : 'sponsored noopener';
  const i = indent;
  return `${i}<aside class="promo">
${i}  <div class="promo-body">
${i}    <span class="promo-tag">${esc(c.tag)}</span>
${i}    <h3>${esc(c.h)}</h3>
${i}    <p>${esc(c.p)}</p>
${i}  </div>
${i}  <a class="btn" href="${HREF}" rel="${rel}" target="_blank">${esc(c.cta)}</a>
${i}</aside>`;
}

module.exports = { promo, HREF, FOLLOW_ON, COPY };
