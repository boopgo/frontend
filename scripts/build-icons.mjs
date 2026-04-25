#!/usr/bin/env node
/**
 * Builds the brand assets from the chunky paw + outlined "boop" wordmark.
 * Writes:
 *   app/icon.svg              (bare coral paw, transparent, 64×64)
 *   app/apple-icon.svg        (180×180, peach radial bg + outlined boop + paw)
 *   app/icon-16.png           favicon 16
 *   app/icon-32.png           favicon 32
 *   app/apple-icon.png        apple touch icon, 180
 *   app/icon-192.png          PWA
 *   app/icon-512.png          PWA / store
 *   app/favicon.ico           legacy 48×48 ICO
 */
import opentype from "opentype.js";
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(new URL(".", import.meta.url).pathname, "..");
const OUT = (p) => path.join(ROOT, p);

const CORAL = "#FF9A8B";
const INK = "#2A1A2E";
const PEACH_LIGHT = "#FFE8C5";
const PEACH = "#FFD6A5";

// ---- Paw SVG (coords in 64×64 space) ----------------------------------------
const PAW = `
<path d="M 32 26 Q 22 26 17 33 Q 11 42 16 51 Q 22 58 32 58 Q 42 58 48 51 Q 53 42 47 33 Q 42 26 32 26 Z" fill="${CORAL}"/>
<ellipse cx="13" cy="26" rx="5.5" ry="6.5" fill="${CORAL}"/>
<ellipse cx="24" cy="13" rx="6" ry="7" fill="${CORAL}"/>
<ellipse cx="40" cy="13" rx="6" ry="7" fill="${CORAL}"/>
<ellipse cx="51" cy="26" rx="5.5" ry="6.5" fill="${CORAL}"/>`;

// ---- outlineWord: renders "boop" as a single path + returns its bbox --------
function outlineWord(fontPath, text, fontSize) {
  const font = opentype.loadSync(fontPath);
  // opentype's Y increases downward when we getPath with y=0: baseline at y=0,
  // glyph ascenders go negative. We'll normalize to top=0 using the bbox.
  const p = font.getPath(text, 0, 0, fontSize, { kerning: true });
  const bbox = p.getBoundingBox();
  // Translate so bbox starts at (0,0)
  return {
    d: p.toPathData(2),
    bbox,
    width: bbox.x2 - bbox.x1,
    height: bbox.y2 - bbox.y1,
    offsetX: -bbox.x1,
    offsetY: -bbox.y1,
  };
}

// ---- Build apple-icon 180×180 ------------------------------------------------
function buildAppleIcon() {
  const ICON = 180;
  const WORD_FONT_SIZE = 40;
  const PAW_SIZE = 30; // 0.75 of word — matches the unified ~0.73 brand ratio
  const GAP = 10;

  const word = outlineWord("/tmp/fraunces.ttf", "boop", WORD_FONT_SIZE);
  const totalWidth = word.width + GAP + PAW_SIZE;
  const startX = (ICON - totalWidth) / 2;
  const centerY = ICON / 2;

  // Word positioning: after translate by (startX + offsetX, centerY + offsetY - height/2)
  const wordTx = startX + word.offsetX;
  const wordTy = centerY + word.offsetY - word.height / 2;

  // Paw: center vertically on centerY. In 64-coord space, the paw's visible bbox
  // is roughly y=6..58, so its visual center is y=32. Scaled to PAW_SIZE, center
  // at PAW_SIZE/2. Place paw top-left such that its center aligns with centerY.
  const pawX = startX + word.width + GAP;
  const pawY = centerY - PAW_SIZE / 2;
  const pawScale = PAW_SIZE / 64;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${ICON} ${ICON}" width="${ICON}" height="${ICON}">
  <defs>
    <radialGradient id="bg" cx="50%" cy="35%" r="65%">
      <stop offset="0%" stop-color="${PEACH_LIGHT}"/>
      <stop offset="100%" stop-color="${PEACH}"/>
    </radialGradient>
  </defs>
  <rect width="${ICON}" height="${ICON}" rx="40" fill="url(#bg)"/>
  <g transform="translate(${wordTx.toFixed(3)} ${wordTy.toFixed(3)})" fill="${INK}">
    <path d="${word.d}"/>
  </g>
  <g transform="translate(${pawX.toFixed(3)} ${pawY.toFixed(3)}) scale(${pawScale})">${PAW}
  </g>
</svg>
`;
}

// ---- Build bare favicon (just the paw, transparent) --------------------------
function buildFavicon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">${PAW}
</svg>
`;
}

// ---- Write everything --------------------------------------------------------
async function main() {
  const appleSvg = buildAppleIcon();
  const faviconSvg = buildFavicon();

  await fs.writeFile(OUT("app/apple-icon.svg"), appleSvg);
  await fs.writeFile(OUT("app/icon.svg"), faviconSvg);
  console.log("wrote app/apple-icon.svg and app/icon.svg");

  // PNGs
  const mkPng = (svg, size, out) =>
    sharp(Buffer.from(svg), { density: 384 })
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(out);

  await mkPng(faviconSvg, 16,  OUT("app/icon-16.png"));
  await mkPng(faviconSvg, 32,  OUT("app/icon-32.png"));
  await mkPng(appleSvg,   180, OUT("app/apple-icon.png"));
  await mkPng(appleSvg,   192, OUT("app/icon-192.png"));
  await mkPng(appleSvg,   512, OUT("app/icon-512.png"));

  // favicon.ico — single 48×48 PNG wrapped as ICO. Sharp doesn't output ICO
  // natively; the simplest portable path is to embed a PNG in an ICO header.
  const png48 = await sharp(Buffer.from(faviconSvg), { density: 512 })
    .resize(48, 48)
    .png()
    .toBuffer();
  await fs.writeFile(OUT("app/favicon.ico"), pngToIco(png48, 48));

  console.log("wrote PNGs + favicon.ico");
}

// Minimal single-image PNG-in-ICO wrapper (modern browsers accept this)
function pngToIco(pngBuf, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);          // reserved
  header.writeUInt16LE(1, 2);          // type: 1=icon
  header.writeUInt16LE(1, 4);          // count: 1 image
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size === 256 ? 0 : size, 0); // width
  entry.writeUInt8(size === 256 ? 0 : size, 1); // height
  entry.writeUInt8(0, 2);              // no palette
  entry.writeUInt8(0, 3);              // reserved
  entry.writeUInt16LE(1, 4);           // color planes
  entry.writeUInt16LE(32, 6);          // bpp
  entry.writeUInt32LE(pngBuf.length, 8); // size of image
  entry.writeUInt32LE(6 + 16, 12);     // offset to image
  return Buffer.concat([header, entry, pngBuf]);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
