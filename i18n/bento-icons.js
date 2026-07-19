/* ============================================================
   bento-icons.js — the feature-grid icons and layout classes from
   the English homepage.

   The localized homepages rendered the same six features as plain
   text: no icons, and none of the b1-b6 layout classes that give the
   grid its asymmetric bento shape. So every language except English
   got a flat list where English got a designed section.

   Icons are inline SVG and carry no text, so they are shared verbatim
   rather than duplicated per locale. b1 is deliberately iconless in
   the English original — it is the wide feature cell — and that is
   preserved.
   ============================================================ */

/* b1 carries a full illustration (.bento-visual) — a small Gantt-bars
   figure — rather than a 24px icon. The first extraction recorded b1 as
   "deliberately iconless" and stopped there, so every localized homepage
   lost the only piece of artwork in that section while English kept it.
   That was the visible half of "the other languages have no infographics".
   The SVG carries no text, so it is language-independent and shared. */
const BENTO = [
  { cls: 'b1', icon: '', visual: '<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <rect x="10" y="18" width="90" height="13" rx="4" fill="#cbb8f5"/> <rect x="70" y="40" width="70" height="13" rx="4" fill="#cbb8f5"/> <rect x="10" y="62" width="120" height="13" rx="4" fill="#ff6a3d"/> <rect x="130" y="84" width="80" height="13" rx="4" fill="#ff6a3d"/> <rect x="200" y="106" width="70" height="13" rx="4" fill="#ff6a3d"/> <path d="M130 68 h12 v22 h-8" fill="none" stroke="#ff6a3d" stroke-width="2"/> <path d="M210 90 h12 v22 h-14" fill="none" stroke="#ff6a3d" stroke-width="2"/> <rect x="8" y="60" width="124" height="17" rx="5" fill="none" stroke="#ff6a3d" stroke-width="2"/> </svg>' },
  { cls: 'b2', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h9M4 12h14M4 17h6"/><path d="M20 9l2 2-2 2"/></svg>` },
  { cls: 'b3', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="7" height="5" rx="1.5"/><rect x="14" y="14" width="7" height="5" rx="1.5"/><path d="M10 7.5h3a2 2 0 0 1 2 2V14"/></svg>` },
  { cls: 'b4', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v11m0 0l-4-4m4 4l4-4"/><path d="M4 17v3h16v-3"/></svg>` },
  { cls: 'b5', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l3 6 6 .8-4.5 4.2L18 20l-6-3.3L6 20l1.5-6L3 9.8 9 9z"/></svg>` },
  { cls: 'b6', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>` },
];

module.exports = { BENTO };
