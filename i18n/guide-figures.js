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
    lag: 'Lag', totalFloat: 'Total float', freeFloat: 'Free float', zero: 'zero duration',
    ahead: 'ahead', under: 'under budget', over: 'over budget', id: 'id',
    cost: 'Cost', time: 'Time', frozen: 'frozen', committed: 'committed', planning: 'planning',
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
    lag: 'Demora', totalFloat: 'Holgura total', freeFloat: 'Holgura libre', zero: 'duración cero',
    ahead: 'adelanto', under: 'bajo presupuesto', over: 'sobre presupuesto', id: 'id',
    cost: 'Coste', time: 'Tiempo', frozen: 'congelada', committed: 'comprometida', planning: 'planificación',
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
    lag: 'Wartezeit', totalFloat: 'Gesamtpuffer', freeFloat: 'Freier Puffer', zero: 'Dauer null',
    ahead: 'im Vorlauf', under: 'unter Budget', over: 'über Budget', id: 'ID',
    cost: 'Kosten', time: 'Zeit', frozen: 'fixiert', committed: 'zugesagt', planning: 'Planung',
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
    lag: 'Décalage', totalFloat: 'Marge totale', freeFloat: 'Marge libre', zero: 'durée nulle',
    ahead: "en avance", under: 'sous budget', over: 'hors budget', id: 'id',
    cost: 'Coût', time: 'Temps', frozen: 'figée', committed: 'engagée', planning: 'planification',
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
    lag: 'Espera', totalFloat: 'Folga total', freeFloat: 'Folga livre', zero: 'duração zero',
    ahead: 'adiantado', under: 'abaixo do orçado', over: 'acima do orçado', id: 'id',
    cost: 'Custo', time: 'Tempo', frozen: 'congelada', committed: 'comprometida', planning: 'planejamento',
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
    lag: '延隔时间', totalFloat: '总浮动时间', freeFloat: '自由浮动时间', zero: '工期为零',
    ahead: '提前', under: '低于预算', over: '超出预算', id: '标识',
    cost: '成本', time: '时间', frozen: '冻结', committed: '已承诺', planning: '规划',
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

/* ---- second-tier archetypes ----------------------------------------
   These are the ones that go INSIDE the prose, not above it. A guide
   that explains lag, float or the difference between a task and a
   milestone was doing it in words alone; each of these replaces a
   paragraph the reader had to hold in their head. */

/** FS with a waiting period between the two bars — lag, not slack. */
function figLag(L, aria) {
  let s = txt(0, 12, L.fs + ' + ' + L.lag, { size: 12, weight: 700 });
  s += bar(0, 24, 130);
  s += txt(136, 35, 'A', { size: 10.5, fill: INK_SOFT });
  // the gap itself is the point, so draw it rather than imply it
  s += `<line x1="130" y1="46" x2="220" y2="46" stroke="${INK_SOFT}" stroke-width="1" stroke-dasharray="4 3"/>`;
  s += `<line x1="130" y1="40" x2="130" y2="52" stroke="${INK_SOFT}" stroke-width="1"/>`;
  s += `<line x1="220" y1="40" x2="220" y2="52" stroke="${INK_SOFT}" stroke-width="1"/>`;
  s += txt(175, 42, L.lag + ' 3d', { size: 10.5, fill: INK_SOFT, anchor: 'middle' });
  s += bar(220, 58, 150, { op: 0.6 });
  s += txt(376, 69, 'B', { size: 10.5, fill: INK_SOFT });
  s += txt(0, 92, 'B ' + L.depends + ' A + 3d', { size: 10.5, fill: INK_SOFT });
  return wrap('460 105', aria, s);
}

/** Total float vs free float on the same chain — routinely conflated. */
function figFloat(L, aria) {
  let s = bar(0, 20, 100);
  s += txt(106, 31, 'A', { size: 10.5, fill: INK_SOFT });
  s += bar(120, 44, 90, { op: 0.6 });
  s += txt(216, 55, 'B', { size: 10.5, fill: INK_SOFT });
  s += bar(300, 68, 110, { fill: CRIT, op: 0.85 });
  s += txt(416, 79, 'C', { size: 10.5, fill: INK_SOFT });
  // free float: B can move before it disturbs C
  s += `<rect x="210" y="44" width="90" height="13" rx="4" fill="${OK}" opacity="0.28"/>`;
  s += txt(255, 54, L.freeFloat, { size: 9.5, fill: OK, anchor: 'middle', weight: 700 });
  // total float: how far before the project end moves
  s += `<line x1="210" y1="100" x2="410" y2="100" stroke="${INK_SOFT}" stroke-width="1" stroke-dasharray="4 3"/>`;
  s += txt(310, 96, L.totalFloat, { size: 10, fill: INK_SOFT, anchor: 'middle' });
  return wrap('470 112', aria, s);
}

/** A task has width; a milestone does not. The whole distinction. */
function figMilestone(L, aria) {
  let s = txt(0, 12, L.task, { size: 12, weight: 700 });
  s += bar(0, 20, 170);
  s += `<line x1="0" y1="44" x2="170" y2="44" stroke="${INK_SOFT}" stroke-width="1"/>`;
  s += txt(85, 58, L.duration + ' 8d', { size: 10.5, fill: INK_SOFT, anchor: 'middle' });
  s += txt(260, 12, L.milestone, { size: 12, weight: 700 });
  s += `<path d="M 300 20 l 10 10 l -10 10 l -10 -10 z" fill="${CRIT}"/>`;
  s += `<line x1="300" y1="44" x2="300" y2="44" stroke="${INK_SOFT}" stroke-width="1"/>`;
  s += txt(300, 58, L.zero, { size: 10.5, fill: INK_SOFT, anchor: 'middle' });
  return wrap('420 70', aria, s);
}

/** The lookahead window advancing a week — the rolling part of rolling. */
function figRolling(L, aria) {
  let s = '';
  for (let wk = 0; wk < 3; wk++) {
    const y = wk * 42;
    s += txt(0, y + 20, L.week + ' ' + (wk + 1), { size: 10.5, fill: INK_SOFT });
    for (let i = 0; i < 6; i++) {
      const inWin = i >= wk && i < wk + 3;
      s += `<rect x="${70 + i * 62}" y="${y + 8}" width="56" height="18" rx="4" fill="${inWin ? ACCENT : INK_SOFT}" opacity="${inWin ? (i === wk ? 0.95 : 0.5) : 0.16}"/>`;
    }
    s += `<rect x="${68 + wk * 62}" y="${y + 5}" width="${3 * 62 - 2}" height="24" rx="6" fill="none" stroke="${CRIT}" stroke-width="1.4"/>`;
  }
  s += txt(70, 140, L.window + ' — ' + L.frozen + ' / ' + L.committed + ' / ' + L.planning,
    { size: 10, fill: INK_SOFT });
  return wrap('460 150', aria, s);
}

/** Schedule and cost variance as four quadrants — where you actually are. */
function figEvmQuad(L, aria) {
  const q = (x, y, w, h, fill, op) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" opacity="${op}"/>`;
  let s = q(20, 10, 150, 80, OK, 0.16) + q(170, 10, 150, 80, INK_SOFT, 0.1)
        + q(20, 90, 150, 80, INK_SOFT, 0.1) + q(170, 90, 150, 80, CRIT, 0.16);
  s += `<line x1="170" y1="10" x2="170" y2="170" stroke="${INK_SOFT}" stroke-width="1"/>`;
  s += `<line x1="20" y1="90" x2="320" y2="90" stroke="${INK_SOFT}" stroke-width="1"/>`;
  s += txt(95, 54, L.ahead + ' · ' + L.under, { size: 10, anchor: 'middle', fill: OK, weight: 700 });
  s += txt(245, 54, L.behind + ' · ' + L.under, { size: 10, anchor: 'middle', fill: INK_SOFT });
  s += txt(95, 134, L.ahead + ' · ' + L.over, { size: 10, anchor: 'middle', fill: INK_SOFT });
  s += txt(245, 134, L.behind + ' · ' + L.over, { size: 10, anchor: 'middle', fill: CRIT, weight: 700 });
  s += txt(340, 94, L.time, { size: 10.5, fill: INK_SOFT });
  s += txt(174, 186, L.cost, { size: 10.5, fill: INK_SOFT });
  return wrap('400 196', aria, s);
}

/** One Mermaid line, taken apart. The syntax IS the lesson here. */
function figSyntax(L, aria) {
  const parts = [
    { t: L.task + ' A', w: 96, c: ACCENT },
    { t: ':' + L.id + ' a1', w: 78, c: OK },
    { t: ':2026-03-02', w: 104, c: '#9333ea' },
    { t: ':5d', w: 46, c: CRIT },
  ];
  let x = 0, s = '';
  parts.forEach((p) => {
    s += `<rect x="${x}" y="18" width="${p.w}" height="24" rx="5" fill="${p.c}" opacity="0.16"/>`;
    s += txt(x + p.w / 2, 34, p.t, { size: 11, anchor: 'middle', fill: p.c, weight: 700 });
    x += p.w + 6;
  });
  const notes = [L.task, L.id, L.start, L.duration];
  x = 0;
  parts.forEach((p, i) => {
    s += `<line x1="${x + p.w / 2}" y1="46" x2="${x + p.w / 2}" y2="58" stroke="${INK_SOFT}" stroke-width="1"/>`;
    s += txt(x + p.w / 2, 72, notes[i], { size: 10, anchor: 'middle', fill: INK_SOFT });
    x += p.w + 6;
  });
  return wrap('360 84', aria, s);
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

/* ---- in-prose figures ----------------------------------------------
   Every archetype that can be dropped into a section body, addressed by
   name. A guide body writes a token:

     <!--FIG:lag-->

   and the generator swaps in the diagram DRAWN FOR THAT LOCALE.

   WHY A TOKEN AND NOT INLINE <svg>: this file exists because the
   localized pages used to render the English diagram — every label
   inside it ("Finish → Start", "Today", "Baseline") stayed English for
   the German, Spanish, French, Portuguese and Chinese reader. If a
   translator pastes real <svg> into a section body, that bug returns
   silently and no word-count check can see it. Keeping the geometry
   here and the words in LABELS makes the localized diagram the only
   thing that can be produced. check-guide-figures.js enforces it. */
const BY_NAME = {
  bars: figBars, deps: figDeps, cpm: figCpm, baseline: figBaseline,
  steps: figSteps, tools: figTools, scurve: figSCurve,
  lookahead: figLookahead, mermaid: figMermaid,
  lag: figLag, float: figFloat, milestone: figMilestone,
  rolling: figRolling, evmquad: figEvmQuad, syntax: figSyntax,
};

const FIG_TOKEN = /<!--\s*FIG:([a-z]+)\s*(?:\|([^>]*?))?\s*-->/g;

/**
 * Replace every <!--FIG:name--> token in a guide body with the SVG for
 * this locale. An optional caption follows a pipe:
 * `<!--FIG:lag|Lag is a wait, not slack.-->`
 *
 * An unknown name is left in place rather than silently dropped — a
 * missing diagram should be visible in the checker, not invisible on
 * the page.
 *
 * @param {string} html  section body, possibly containing tokens
 * @param {string} code  locale code
 * @returns {string}
 */
function expand(html, code) {
  if (!html || html.indexOf('<!--FIG:') === -1) return html;
  const L = LABELS[code] || LABELS.en;
  return String(html).replace(FIG_TOKEN, (whole, name, caption) => {
    const fn = BY_NAME[name];
    if (!fn) return whole;
    const cap = (caption || '').trim();
    return '<figure class="fig fig-inline">'
      + fn(L, cap || name)
      + (cap ? `<figcaption>${esc(cap)}</figcaption>` : '')
      + '</figure>';
  });
}

/** Names referenced by tokens in a body — used by the checker. */
function tokensIn(html) {
  const out = [];
  String(html || '').replace(FIG_TOKEN, (w, n) => { out.push(n); return w; });
  return out;
}

module.exports = { figure, expand, tokensIn, LABELS, FOR_SLUG, BY_NAME };
