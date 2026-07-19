/* ============================================================
   guide-figures.js — the feature diagram for every guide, in every
   language.

   TWO PROBLEMS THIS SOLVES

   1. Only 4 of the 12 guides had a figure at all. The other 8 opened
      with a wall of prose.

   2. The 4 that did have one were rendering the ENGLISH svg on the
      localized pages, because gen-i18n inherited `en.figure` verbatim.
      Every label inside the diagram — "Finish → Start", "Today",
      "Baseline" — stayed in English for German, Spanish, French,
      Portuguese and Chinese readers. A translated article wrapped
      around an untranslated illustration reads worse than no
      illustration.

   HOW IT WORKS

   Six reusable archetypes cover all twelve guides. Each is drawn from
   a small label pack, so the geometry is written once and the words
   come from the locale. Adding a language means adding a LABELS entry,
   not redrawing anything.

   The SVGs are inline (not <img>) so they inherit currentColor and
   work in dark mode, carry no extra request, and can be read by
   assistive tech through role="img" + aria-label.
   ============================================================ */

const ACCENT = '#6c4cf1';
const ACCENT_SOFT = '#cbb8f5';
const INK_SOFT = '#94a3b8';
const CRIT = '#e5484d';
const OK = '#12a594';
const FONT = 'system-ui,-apple-system,Segoe UI,Roboto,sans-serif';

/* Per-locale words used inside the diagrams. Deliberately short — a
   label that wraps breaks the layout, and CJK runs about half the
   character count for the same meaning. */
const LABELS = {
  en: {
    task: 'Task', phase: 'Phase', milestone: 'Milestone', today: 'Today',
    plan: 'Plan', actual: 'Actual', critical: 'Critical path', slack: 'Slack',
    start: 'Start', finish: 'Finish', week: 'Week',
    fs: 'Finish → Start', ss: 'Start → Start', ff: 'Finish → Finish', sf: 'Start → Finish',
    step: 'Step', design: 'Design', build: 'Build', test: 'Test', launch: 'Launch',
    excel: 'Excel', sheets: 'Sheets', slides: 'Slides', app: 'Browser',
    depends: 'waits for', duration: 'Duration', done: 'Done',
    behind: 'behind plan', window: 'next 3 weeks', text: 'text', chart: 'chart', earned: 'Earned',
  },
  es: {
    task: 'Tarea', phase: 'Fase', milestone: 'Hito', today: 'Hoy',
    plan: 'Plan', actual: 'Real', critical: 'Ruta crítica', slack: 'Holgura',
    start: 'Inicio', finish: 'Fin', week: 'Semana',
    fs: 'Fin → Inicio', ss: 'Inicio → Inicio', ff: 'Fin → Fin', sf: 'Inicio → Fin',
    step: 'Paso', design: 'Diseño', build: 'Construir', test: 'Probar', launch: 'Lanzar',
    excel: 'Excel', sheets: 'Sheets', slides: 'Diapositivas', app: 'Navegador',
    depends: 'espera a', duration: 'Duración', done: 'Hecho',
    behind: 'retraso', window: 'próximas 3 semanas', text: 'texto', chart: 'gráfico', earned: 'Valor ganado',
  },
  de: {
    task: 'Vorgang', phase: 'Phase', milestone: 'Meilenstein', today: 'Heute',
    plan: 'Plan', actual: 'Ist', critical: 'Kritischer Pfad', slack: 'Puffer',
    start: 'Start', finish: 'Ende', week: 'Woche',
    fs: 'Ende → Anfang', ss: 'Anfang → Anfang', ff: 'Ende → Ende', sf: 'Anfang → Ende',
    step: 'Schritt', design: 'Entwurf', build: 'Umsetzung', test: 'Test', launch: 'Start',
    excel: 'Excel', sheets: 'Sheets', slides: 'Folien', app: 'Browser',
    depends: 'wartet auf', duration: 'Dauer', done: 'Fertig',
    behind: 'im Rückstand', window: 'nächste 3 Wochen', text: 'Text', chart: 'Diagramm', earned: 'Fertigstellungswert',
  },
  fr: {
    task: 'Tâche', phase: 'Phase', milestone: 'Jalon', today: "Aujourd'hui",
    plan: 'Plan', actual: 'Réel', critical: 'Chemin critique', slack: 'Marge',
    start: 'Début', finish: 'Fin', week: 'Semaine',
    fs: 'Fin → Début', ss: 'Début → Début', ff: 'Fin → Fin', sf: 'Début → Fin',
    step: 'Étape', design: 'Conception', build: 'Réalisation', test: 'Recette', launch: 'Lancement',
    excel: 'Excel', sheets: 'Sheets', slides: 'Diapositives', app: 'Navigateur',
    depends: 'attend', duration: 'Durée', done: 'Terminé',
    behind: 'en retard', window: '3 prochaines semaines', text: 'texte', chart: 'diagramme', earned: 'Valeur acquise',
  },
  pt: {
    task: 'Tarefa', phase: 'Fase', milestone: 'Marco', today: 'Hoje',
    plan: 'Plano', actual: 'Real', critical: 'Caminho crítico', slack: 'Folga',
    start: 'Início', finish: 'Fim', week: 'Semana',
    fs: 'Fim → Início', ss: 'Início → Início', ff: 'Fim → Fim', sf: 'Início → Fim',
    step: 'Passo', design: 'Design', build: 'Execução', test: 'Testes', launch: 'Lançamento',
    excel: 'Excel', sheets: 'Sheets', slides: 'Slides', app: 'Navegador',
    depends: 'espera', duration: 'Duração', done: 'Concluído',
    behind: 'atrasado', window: 'próximas 3 semanas', text: 'texto', chart: 'gráfico', earned: 'Valor agregado',
  },
  zh: {
    task: '任务', phase: '阶段', milestone: '里程碑', today: '今天',
    plan: '计划', actual: '实际', critical: '关键路径', slack: '浮动时间',
    start: '开始', finish: '完成', week: '周',
    fs: '完成 → 开始', ss: '开始 → 开始', ff: '完成 → 完成', sf: '开始 → 完成',
    step: '步骤', design: '设计', build: '开发', test: '测试', launch: '上线',
    excel: 'Excel', sheets: '表格', slides: '幻灯片', app: '浏览器',
    depends: '等待', duration: '工期', done: '完成',
    behind: '落后于计划', window: '未来 3 周', text: '文本', chart: '图表', earned: '挣值',
  },
};

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const txt = (x, y, s, o = {}) =>
  `<text x="${x}" y="${y}" font-size="${o.size || 11}" font-weight="${o.weight || 400}" fill="${o.fill || 'currentColor'}" font-family="${FONT}"${o.anchor ? ` text-anchor="${o.anchor}"` : ''}>${esc(s)}</text>`;

const bar = (x, y, w, o = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${o.h || 13}" rx="4" fill="${o.fill || ACCENT}"${o.op ? ` opacity="${o.op}"` : ''}/>`;

const wrap = (vb, aria, inner) =>
  `<svg viewBox="0 0 ${vb}" width="100%" role="img" aria-label="${esc(aria)}">${inner}</svg>`;

/* ---- archetypes ---------------------------------------------------- */

/** A small plan: phase rows, task bars, a milestone diamond, today line. */
function figBars(L, aria) {
  const rows = [
    { label: L.phase + ' 1', x: 0, w: 150, bold: true },
    { label: L.task + ' A', x: 10, w: 90, indent: true },
    { label: L.task + ' B', x: 70, w: 110, indent: true },
    { label: L.phase + ' 2', x: 150, w: 170, bold: true },
    { label: L.task + ' C', x: 160, w: 120, indent: true },
  ];
  let y = 34;
  let s = txt(0, 14, L.week + ' 1–8', { size: 10.5, fill: INK_SOFT });
  // grid
  for (let i = 0; i <= 4; i++) s += `<line x1="${190 + i * 62}" y1="24" x2="${190 + i * 62}" y2="152" stroke="${INK_SOFT}" stroke-width="0.5" opacity="0.35"/>`;
  rows.forEach((r) => {
    s += txt(r.indent ? 12 : 0, y + 10, r.label, { size: 11, weight: r.bold ? 700 : 400 });
    s += bar(190 + r.x, y, r.w, { fill: r.bold ? ACCENT_SOFT : ACCENT });
    y += 24;
  });
  // milestone + today
  s += `<path d="M ${190 + 320} ${y - 12} l 8 8 l -8 8 l -8 -8 z" fill="${CRIT}"/>`;
  s += txt(190 + 336, y - 1, L.milestone, { size: 10.5, fill: INK_SOFT });
  s += `<line x1="${190 + 200}" y1="24" x2="${190 + 200}" y2="152" stroke="${CRIT}" stroke-width="1.5" stroke-dasharray="3 3"/>`;
  s += txt(190 + 205, 20, L.today, { size: 10, fill: CRIT, weight: 700 });
  return wrap('560 165', aria, s);
}

/** The four dependency types, each as a pair of bars. */
function figDeps(L, aria) {
  const kinds = [
    { t: L.fs, a: [0, 110], b: [120, 110] },
    { t: L.ss, a: [0, 110], b: [0, 90] },
    { t: L.ff, a: [0, 110], b: [40, 70] },
    { t: L.sf, a: [80, 110], b: [0, 70] },
  ];
  let s = '';
  kinds.forEach((k, i) => {
    const col = (i % 2) * 290;
    const row = Math.floor(i / 2) * 92;
    s += txt(col, row + 12, k.t, { size: 12, weight: 700 });
    s += bar(col, row + 22, k.a[1], { fill: ACCENT });
    s += txt(col + k.a[1] + 6, row + 33, 'A', { size: 10.5, fill: INK_SOFT });
    s += bar(col + k.b[0], row + 46, k.b[1], { fill: ACCENT, op: 0.55 });
    s += txt(col + k.b[0] + k.b[1] + 6, row + 57, 'B', { size: 10.5, fill: INK_SOFT });
    s += txt(col, row + 76, 'B ' + L.depends + ' A', { size: 10, fill: INK_SOFT });
  });
  return wrap('580 190', aria, s);
}

/** CPM: two parallel chains, the longer one marked critical. */
function figCpm(L, aria) {
  const node = (x, y, label, crit) =>
    `<rect x="${x}" y="${y}" width="76" height="34" rx="6" fill="none" stroke="${crit ? CRIT : INK_SOFT}" stroke-width="${crit ? 2 : 1}"/>`
    + txt(x + 38, y + 21, label, { size: 11, anchor: 'middle', weight: crit ? 700 : 400 });
  const arrow = (x1, y1, x2, y2, crit) =>
    `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${crit ? CRIT : INK_SOFT}" stroke-width="${crit ? 2 : 1}" marker-end="url(#gf-ar)"/>`;
  let s = `<defs><marker id="gf-ar" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="${INK_SOFT}"/></marker></defs>`;
  s += node(0, 46, 'A · 3', true) + arrow(78, 63, 108, 63, true);
  s += node(110, 12, 'B · 5', true) + node(110, 84, 'C · 2', false);
  s += arrow(188, 29, 218, 52, true) + arrow(188, 101, 218, 78, false);
  s += node(220, 46, 'D · 4', true);
  s += txt(310, 40, L.critical + ': A → B → D', { size: 11, weight: 700, fill: CRIT });
  s += txt(310, 58, L.slack + ' (C): 3', { size: 11, fill: OK });
  s += txt(310, 80, L.duration + ': 12', { size: 11, fill: INK_SOFT });
  return wrap('520 140', aria, s);
}

/** Baseline vs actual: two bars per row. */
function figBaseline(L, aria) {
  const rows = [[0, 90, 0, 90], [95, 70, 95, 110], [170, 60, 210, 60]];
  let s = txt(0, 12, L.plan, { size: 10.5, weight: 700, fill: INK_SOFT })
    + bar(46, 3, 26, { h: 9, fill: ACCENT_SOFT })
    + txt(84, 12, L.actual, { size: 10.5, weight: 700, fill: INK_SOFT })
    + bar(134, 3, 26, { h: 9, fill: ACCENT });
  let y = 30;
  rows.forEach((r, i) => {
    s += txt(0, y + 10, L.task + ' ' + 'ABC'[i], { size: 11 });
    s += bar(70 + r[0], y, r[1], { h: 10, fill: ACCENT_SOFT });
    s += bar(70 + r[2], y + 12, r[3], { h: 10, fill: ACCENT });
    if (r[2] !== r[0] || r[3] !== r[1]) {
      s += txt(70 + r[2] + r[3] + 8, y + 21, '+' + Math.max(1, Math.round(((r[2] + r[3]) - (r[0] + r[1])) / 10)) + 'd',
        { size: 10, fill: CRIT, weight: 700 });
    }
    y += 34;
  });
  return wrap('420 140', aria, s);
}

/** Numbered steps flowing left to right. */
function figSteps(L, aria) {
  const steps = [L.design, L.build, L.test, L.launch];
  let s = '';
  steps.forEach((label, i) => {
    const x = i * 132;
    s += `<circle cx="${x + 16}" cy="26" r="15" fill="${ACCENT}"/>`;
    s += txt(x + 16, 30, String(i + 1), { size: 12, weight: 700, anchor: 'middle', fill: '#fff' });
    s += txt(x, 62, label, { size: 11.5, weight: 700 });
    if (i < steps.length - 1) {
      s += `<line x1="${x + 36}" y1="26" x2="${x + 118}" y2="26" stroke="${INK_SOFT}" stroke-width="1.5" stroke-dasharray="4 4"/>`;
    }
  });
  return wrap('540 78', aria, s);
}

/** Tool comparison: which surface the plan lives in. */
function figTools(L, aria) {
  const cols = [
    { t: L.excel, ok: [1, 0, 0] },
    { t: L.sheets, ok: [1, 0, 0] },
    { t: L.slides, ok: [1, 0, 0] },
    { t: L.app, ok: [1, 1, 1] },
  ];
  const rowNames = [L.task + 's', L.critical, L.today];
  let s = '';
  rowNames.forEach((r, i) => s += txt(0, 44 + i * 26, r, { size: 10.5, fill: INK_SOFT }));
  cols.forEach((c, i) => {
    const x = 150 + i * 92;
    s += txt(x + 26, 16, c.t, { size: 11, weight: 700, anchor: 'middle' });
    c.ok.forEach((v, j) => {
      s += v
        ? `<path d="M ${x + 18} ${40 + j * 26} l 6 6 l 12 -13" fill="none" stroke="${OK}" stroke-width="2.5" stroke-linecap="round"/>`
        : `<path d="M ${x + 19} ${34 + j * 26} l 14 14 M ${x + 33} ${34 + j * 26} l -14 14" stroke="${INK_SOFT}" stroke-width="2" stroke-linecap="round" opacity="0.6"/>`;
    });
  });
  return wrap('520 110', aria, s);
}

/* ---- which archetype each guide uses -------------------------------- */

/** Planned vs earned cumulative curves, with the gap called out. */
function figSCurve(L, aria) {
  const inner =
    `<line x1="46" y1="12" x2="46" y2="150" stroke="#e2e8f0" stroke-width="1"/>` +
    `<line x1="46" y1="150" x2="560" y2="150" stroke="#e2e8f0" stroke-width="1"/>` +
    txt(40, 18, '100%', { size: 9.5, fill: INK_SOFT, anchor: 'end' }) +
    txt(40, 154, '0%', { size: 9.5, fill: INK_SOFT, anchor: 'end' }) +
    // planned: solid
    `<path d="M 46 150 C 150 147, 190 92, 270 74 C 350 56, 420 20, 560 15" fill="none" stroke="${ACCENT}" stroke-width="2.4"/>` +
    txt(452, 40, L.plan, { size: 11, weight: 700, fill: ACCENT }) +
    // earned: dashed, so the two are distinguishable without colour
    `<path d="M 46 150 C 140 149, 175 118, 270 108" fill="none" stroke="#16a34a" stroke-width="2.4" stroke-dasharray="7 4"/>` +
    txt(120, 132, L.earned, { size: 11, weight: 700, fill: '#16a34a' }) +
    // status line + the gap
    `<line x1="270" y1="12" x2="270" y2="150" stroke="#ef4444" stroke-width="1.4" stroke-dasharray="3 3"/>` +
    txt(274, 22, L.today, { size: 10, fill: '#ef4444' }) +
    `<line x1="270" y1="74" x2="270" y2="108" stroke="#ea580c" stroke-width="6" opacity="0.3"/>` +
    txt(284, 96, L.behind, { size: 10.5, weight: 700, fill: '#ea580c' });
  return wrap('600 170', aria, inner);
}

/** A long programme with a three-week window cut out of it. */
function figLookahead(L, aria) {
  const rows = [
    [0, 250], [0, 95], [40, 210], [155, 130], [210, 150],
  ];
  let inner = '';
  rows.forEach((r, i) => {
    const y = 24 + i * 22;
    // Bars overlapping the window are highlighted; the rest are grey.
    const overlaps = r[0] < 285 && (r[0] + r[1]) > 155;
    inner += bar(r[0], y, r[1], { fill: overlaps ? ACCENT : '#cbd5e1' });
  });
  inner +=
    `<rect x="155" y="14" width="130" height="126" fill="${ACCENT}" opacity="0.10"/>` +
    `<line x1="155" y1="14" x2="155" y2="140" stroke="${ACCENT}" stroke-width="1.4" stroke-dasharray="4 3"/>` +
    `<line x1="285" y1="14" x2="285" y2="140" stroke="${ACCENT}" stroke-width="1.4" stroke-dasharray="4 3"/>` +
    txt(220, 156, L.window, { size: 10.5, weight: 700, fill: ACCENT, anchor: 'middle' }) +
    txt(330, 40, L.task, { size: 10.5, fill: INK_SOFT }) +
    txt(330, 62, L.duration, { size: 10.5, fill: INK_SOFT });
  return wrap('600 170', aria, inner);
}

/** Text on the left, bars on the right — the round trip. */
function figMermaid(L, aria) {
  const code = ['gantt', '  section ' + L.phase, '  ' + L.task + ' :a, 5d', '  ' + L.task + ' :after a, 8d'];
  let inner = `<rect x="0" y="12" width="250" height="120" rx="8" fill="#0f172a"/>`;
  code.forEach((line, i) => {
    inner += `<text x="14" y="${34 + i * 20}" font-size="10.5" fill="#e2e8f0" font-family="ui-monospace,monospace">${esc(line)}</text>`;
  });
  inner +=
    txt(60, 148, L.text, { size: 10.5, fill: INK_SOFT, anchor: 'middle' }) +
    // the arrow both ways
    `<path d="M 262 60 L 306 60" stroke="${ACCENT}" stroke-width="1.8"/>` +
    `<polygon points="312,60 304,56 304,64" fill="${ACCENT}"/>` +
    `<path d="M 312 84 L 268 84" stroke="${ACCENT}" stroke-width="1.8"/>` +
    `<polygon points="262,84 270,80 270,88" fill="${ACCENT}"/>` +
    bar(330, 30, 110, {}) +
    bar(360, 52, 140, { op: 0.75 }) +
    bar(400, 74, 90, { op: 0.55 }) +
    `<polygon points="510,96 518,104 510,112 502,104" fill="#9333ea"/>` +
    txt(420, 148, L.chart, { size: 10.5, fill: INK_SOFT, anchor: 'middle' });
  return wrap('600 170', aria, inner);
}

const FOR_SLUG = {
  'what-is-a-gantt-chart': figBars,
  'how-to-make-a-gantt-chart': figSteps,
  'critical-path-method': figCpm,
  'gantt-chart-dependencies': figDeps,
  'gantt-chart-examples': figBars,
  'gantt-chart-in-excel': figTools,
  'gantt-chart-in-google-sheets': figTools,
  'gantt-chart-in-powerpoint': figTools,
  'best-free-gantt-chart-software': figTools,
  'gantt-baseline-variance': figBaseline,
  'gantt-chart-mistakes': figBars,
  'milestones-vs-tasks': figBars,
  's-curve-project-management': figSCurve,
  '3-week-lookahead-schedule': figLookahead,
  'mermaid-gantt-chart': figMermaid,
};

/**
 * @param {string} slug   guide slug
 * @param {string} code   locale code ('en' for the English pages)
 * @param {string} aria   accessible description, already in that language
 * @returns {string|null} inline <svg>, or null if the slug has no figure
 */
function figure(slug, code, aria) {
  const fn = FOR_SLUG[slug];
  if (!fn) return null;
  const L = LABELS[code] || LABELS.en;
  return fn(L, aria || slug);
}

module.exports = { figure, LABELS, FOR_SLUG };
