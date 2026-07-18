/* gen-assets.js — rasterize favicon PNGs, apple-touch-icon, and OG image.
   Run: node scripts/gen-assets.js */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const A = path.join(__dirname, '..', 'assets');

const markSvg = fs.readFileSync(path.join(A, 'logo-mark.svg'));

async function icon(size, name) {
  await sharp(markSvg, { density: 400 }).resize(size, size).png().toFile(path.join(A, name));
  console.log('wrote', name);
}

// Bricolage font embedded so the OG text matches the brand wordmark
const fontB64 = fs.readFileSync(path.join(A, 'fonts', 'bricolage.woff2')).toString('base64');
// OG image 1200x630 — violet + coral identity
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <style>@font-face{font-family:'Bricolage';src:url(data:font/woff2;base64,${fontB64}) format('woff2');font-weight:700}</style>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#0e0b1a"/><stop offset="1" stop-color="#1b1240"/>
    </linearGradient>
    <linearGradient id="acc" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#a78bfa"/><stop offset=".5" stop-color="#8b5cf6"/><stop offset="1" stop-color="#6c4cf1"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1060" cy="80" r="260" fill="#6c4cf1" opacity="0.22"/>
  <circle cx="120" cy="560" r="220" fill="#ff6a3d" opacity="0.10"/>
  <!-- logo mark -->
  <g transform="translate(80,66)">
    <rect width="92" height="92" rx="27" fill="url(#acc)"/>
    <rect x="18" y="24" width="29" height="9" rx="4.5" fill="#fff" opacity="0.62"/>
    <rect x="18" y="41" width="37" height="9" rx="4.5" fill="#fff"/>
    <rect x="18" y="58" width="22" height="9" rx="4.5" fill="#fff" opacity="0.62"/>
    <rect x="57" y="34" width="24" height="24" rx="5" transform="rotate(45 69 46)" fill="#ff6a3d"/>
    <circle cx="69" cy="46" r="4.2" fill="#fff"/>
  </g>
  <text x="192" y="128" font-family="Bricolage, Segoe UI, Arial, sans-serif" font-size="42" font-weight="700" fill="#ffffff" letter-spacing="-1">gantt<tspan fill="#a78bfa">.design</tspan></text>
  <text x="80" y="298" font-family="Bricolage, Segoe UI, Arial, sans-serif" font-size="78" font-weight="700" fill="#ffffff" letter-spacing="-3">Free online</text>
  <text x="80" y="392" font-family="Bricolage, Segoe UI, Arial, sans-serif" font-size="78" font-weight="700" fill="url(#acc)" letter-spacing="-3">Gantt chart maker</text>
  <text x="82" y="458" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="29" fill="#b3adca">No sign-up · dependencies · critical path · export to PDF, Excel &amp; PPT</text>
  <!-- mini gantt bars -->
  <g transform="translate(82,502)">
    <rect x="0" y="0" width="240" height="20" rx="7" fill="#6c4cf1"/>
    <rect x="120" y="34" width="300" height="20" rx="7" fill="#8b5cf6"/>
    <rect x="300" y="68" width="200" height="20" rx="7" fill="#10b981"/>
    <rect x="472" y="60" width="34" height="34" rx="7" fill="#ff6a3d" transform="rotate(45 489 77)"/>
  </g>
  <rect x="908" y="470" width="212" height="64" rx="16" fill="#ff6a3d"/>
  <text x="1014" y="510" text-anchor="middle" font-family="Bricolage, Segoe UI, Arial, sans-serif" font-size="26" font-weight="700" fill="#ffffff">100% Free</text>
</svg>`;

(async () => {
  await icon(16, 'favicon-16.png');
  await icon(32, 'favicon-32.png');
  await icon(180, 'apple-touch-icon.png');
  await icon(192, 'icon-192.png');
  await icon(512, 'icon-512.png');
  await sharp(Buffer.from(og)).png().toFile(path.join(A, 'og-image.png'));
  console.log('wrote og-image.png');
})();
