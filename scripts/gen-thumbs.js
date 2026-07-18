/* gen-thumbs.js — branded, TEMPLATE-SPECIFIC preview images.
   Renders each template's real tasks (from gen-templates.js data) as a mini
   Gantt so every thumbnail is distinct and representative.
   Output: templates/img/{slug}.svg   Run: node scripts/gen-thumbs.js */
const T = require('./gen-templates.js');
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..', 'templates', 'img');
fs.mkdirSync(OUT, { recursive: true });

// per-slug header title + accent colour
const META = {
  'excel':            { title: 'Project Plan · Excel',  accent: '#15803d' },
  'powerpoint':       { title: 'Project Plan · PPT',    accent: '#c2410c' },
  'google-sheets':    { title: 'Simple Plan · Sheets',  accent: '#047857' },
  'simple':           { title: 'Simple Gantt Chart',    accent: '#2563eb' },
  'construction':     { title: 'Construction Schedule', accent: '#ea580c' },
  'software-development': { title: 'Software / Agile',  accent: '#2563eb' },
  'marketing':        { title: 'Marketing Campaign',    accent: '#a855f7' },
  'event-planning':   { title: 'Event Timeline',        accent: '#0ea5e9' },
  'project-management': { title: 'Project Management',   accent: '#4f46e5' },
  'research':         { title: 'Research / Thesis',     accent: '#0d9488' },
  'product-launch':   { title: 'Product Launch',        accent: '#8b5cf6' },
  'product-roadmap':  { title: 'Product Roadmap',       accent: '#6c4cf1' },
  'agile':            { title: 'Agile Project Plan',    accent: '#10b981' },
  'sprint':           { title: 'Sprint Plan · 2 weeks', accent: '#0ea5e9' },
  'weekly':           { title: 'Weekly Plan',           accent: '#2563eb' },
  'monthly':          { title: 'Monthly Plan',          accent: '#8b5cf6' },
  'annual':           { title: 'Yearly Plan · 12 mo',   accent: '#6c4cf1' },
  '30-60-90-day-plan': { title: '30-60-90 Day Plan',    accent: '#0ea5e9' },
  'employee-onboarding': { title: 'Employee Onboarding', accent: '#a855f7' },
  'content-calendar': { title: 'Content Calendar',      accent: '#ec4899' },
  'wedding-planning': { title: 'Wedding Planning',      accent: '#ec4899' },
  'home-renovation':  { title: 'Home Renovation',       accent: '#ea580c' },
};

function esc(s) { return String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c])); }
function trunc(s, n) { s = String(s); return s.length > n ? s.slice(0, n - 1) + '…' : s; }

function svgFor(slug) {
  const key = T.SLUGS[slug];
  const def = T.C[key];
  const m = META[slug] || {};
  const accent = m.accent || '#6c4cf1';
  const title = m.title || def.title;
  const rs = T.rows(def);

  const W = 480, H = 300, headH = 46;
  const labelW = 156, padR = 16, topPad = 14, botPad = 12;
  const MAX = 8;
  const shown = rs.slice(0, MAX);
  const rowH = Math.max(20, Math.min(30, (H - headH - topPad - botPad) / shown.length));
  const top = headH + topPad;

  let min = shown[0].start, max = shown[0].end;
  shown.forEach(r => { if (r.start < min) min = r.start; if (r.end > max) max = r.end; });
  const span = Math.max(1, T.diffDays(min, max) + 1);
  const chartX = labelW + 8, chartW = W - chartX - padR;
  const xOf = d => chartX + (T.diffDays(min, d) / span) * chartW;

  let grid = '';
  for (let i = 1; i < 5; i++) {
    const gx = chartX + (i / 5) * chartW;
    grid += `<line x1="${gx.toFixed(1)}" y1="${headH}" x2="${gx.toFixed(1)}" y2="${H - 8}" stroke="#eef1f6" stroke-width="1"/>`;
  }

  let bars = '';
  shown.forEach((r, i) => {
    const cy = top + i * rowH + rowH / 2;
    const lx = 14 + r.indent * 11;
    const weight = r.phase ? '700' : '400';
    const fill = r.phase ? '#0f172a' : '#334155';
    bars += `<text x="${lx}" y="${(cy + 3.5).toFixed(1)}" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="10.5" font-weight="${weight}" fill="${fill}">${esc(trunc(r.name, 20 - r.indent * 2))}</text>`;
    const bx = xOf(r.start);
    if (r.milestone) {
      bars += `<rect x="${(bx - 6).toFixed(1)}" y="${(cy - 6).toFixed(1)}" width="12" height="12" rx="2.5" transform="rotate(45 ${bx.toFixed(1)} ${cy.toFixed(1)})" fill="${accent}"/>`;
    } else if (r.phase) {
      const bw = Math.max(8, (r.days / span) * chartW);
      bars += `<rect x="${bx.toFixed(1)}" y="${(cy - 4).toFixed(1)}" width="${bw.toFixed(1)}" height="8" rx="2" fill="#475569"/>`;
    } else {
      const bw = Math.max(7, (r.days / span) * chartW);
      const bh = Math.min(14, rowH - 8);
      bars += `<rect x="${bx.toFixed(1)}" y="${(cy - bh / 2).toFixed(1)}" width="${bw.toFixed(1)}" height="${bh}" rx="4" fill="#${r.color}"/>`;
      if (r.prog > 0) bars += `<rect x="${bx.toFixed(1)}" y="${(cy - bh / 2).toFixed(1)}" width="${(bw * r.prog / 100).toFixed(1)}" height="${bh}" rx="4" fill="#000" opacity="0.17"/>`;
    }
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(title)} Gantt chart template preview">
  <rect width="${W}" height="${H}" fill="#ffffff"/>
  <rect x="0" y="${headH}" width="${W}" height="${H - headH}" fill="#f8fafc"/>
  <rect x="0" y="${headH}" width="${labelW}" height="${H - headH}" fill="#ffffff"/>
  ${grid}
  <line x1="${labelW}" y1="${headH}" x2="${labelW}" y2="${H}" stroke="#e2e8f0" stroke-width="1"/>
  <rect width="${W}" height="${headH}" fill="${accent}"/>
  <text x="16" y="29" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="16" font-weight="700" fill="#ffffff">${esc(title)}</text>
  <text x="${W - 16}" y="28" text-anchor="end" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="10.5" fill="#ffffffcc">gantts.app</text>
  ${bars}
</svg>`;
}

Object.keys(META).forEach(slug => {
  fs.writeFileSync(path.join(OUT, slug + '.svg'), svgFor(slug));
  console.log('thumb', slug);
});
console.log('done —', Object.keys(META).length, 'template previews');
