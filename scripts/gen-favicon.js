#!/usr/bin/env node
/* ============================================================
   gen-favicon.js — build /favicon.ico at the site root.

   The site already shipped an SVG icon and an apple-touch-icon, but
   never a favicon.ico, and /favicon.ico was returning 404. That matters
   more than it looks:

     - Google's favicon crawler requests /favicon.ico by convention when
       deciding what to show next to a search result. No file, no icon
       in the SERP.
     - Plenty of feed readers, bookmark managers, Windows shortcut
       handling and older browsers only ever look at the root path, and
       never read <link rel="icon">.

   ICO is a container: a 6-byte header, one 16-byte directory entry per
   image, then the image payloads. Payloads may be raw PNG (supported by
   every browser in use and by Windows Vista onwards), so the sizes are
   generated with sharp and embedded as-is rather than converted to BMP.

   Sizes 16/32/48 are the ones that are actually requested — 48 is what
   Windows and several crawlers pick.

   Source of truth is assets/logo-mark.svg, so the icon can never drift
   away from the brand mark.

   Usage: node scripts/gen-favicon.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'assets', 'logo-mark.svg');
const SIZES = [16, 32, 48];

/** Pack PNG buffers into a single .ico container. */
function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);              // reserved
  header.writeUInt16LE(1, 2);              // type 1 = icon
  header.writeUInt16LE(images.length, 4);  // image count

  const dir = Buffer.alloc(16 * images.length);
  // Payloads start after the header and the full directory.
  let offset = 6 + 16 * images.length;

  images.forEach((img, i) => {
    const at = i * 16;
    // 256px is encoded as 0 in this byte — the field is one byte wide.
    dir.writeUInt8(img.size >= 256 ? 0 : img.size, at + 0);  // width
    dir.writeUInt8(img.size >= 256 ? 0 : img.size, at + 1);  // height
    dir.writeUInt8(0, at + 2);             // palette colours (0 = truecolour)
    dir.writeUInt8(0, at + 3);             // reserved
    dir.writeUInt16LE(1, at + 4);          // colour planes
    dir.writeUInt16LE(32, at + 6);         // bits per pixel
    dir.writeUInt32LE(img.data.length, at + 8);
    dir.writeUInt32LE(offset, at + 12);
    offset += img.data.length;
  });

  return Buffer.concat([header, dir, ...images.map(i => i.data)]);
}

(async () => {
  if (!fs.existsSync(SRC)) {
    console.error('✗ assets/logo-mark.svg missing — nothing to build the icon from.\n');
    process.exit(1);
  }

  const images = [];
  for (const size of SIZES) {
    const data = await sharp(SRC, { density: 384 })
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toBuffer();
    images.push({ size, data });
    // Also write the standalone PNGs the <link> tags reference.
    if (size === 16 || size === 32) {
      fs.writeFileSync(path.join(ROOT, 'assets', `favicon-${size}.png`), data);
    }
  }

  const ico = buildIco(images);
  fs.writeFileSync(path.join(ROOT, 'favicon.ico'), ico);

  console.log(`✓ favicon.ico written — ${SIZES.join('/')}px, ${ico.length} bytes`);
  console.log('  assets/favicon-16.png and favicon-32.png refreshed from the same source.');
})();
