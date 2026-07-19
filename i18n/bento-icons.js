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

const BENTO = [
  { cls: 'b1', icon: `` },
  { cls: 'b2', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h9M4 12h14M4 17h6"/><path d="M20 9l2 2-2 2"/></svg>` },
  { cls: 'b3', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="7" height="5" rx="1.5"/><rect x="14" y="14" width="7" height="5" rx="1.5"/><path d="M10 7.5h3a2 2 0 0 1 2 2V14"/></svg>` },
  { cls: 'b4', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v11m0 0l-4-4m4 4l4-4"/><path d="M4 17v3h16v-3"/></svg>` },
  { cls: 'b5', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l3 6 6 .8-4.5 4.2L18 20l-6-3.3L6 20l1.5-6L3 9.8 9 9z"/></svg>` },
  { cls: 'b6', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>` },
];

module.exports = { BENTO };
