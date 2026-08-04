/**
 * compress-images.cjs  (CommonJS — avoids ESM/sharp path issues on Windows)
 * -------------------------------------------------------------------------
 * Compresses all JPEG images in public/images/ using sharp.
 *
 * Strategy:
 *   - Resize to max 1920px wide (keeps aspect ratio, never upscales)
 *   - Re-encode as JPEG at quality 82  (visually near-lossless for web)
 *   - Overwrites originals in-place (originals backed up to _originals_backup/)
 *   - Skips images already under 300 KB
 *
 * Run:  node scripts/compress-images.cjs
 */

"use strict";

const sharp   = require("sharp");
const path    = require("path");
const fs      = require("fs");

const ROOT       = path.join(__dirname, "..");
const IMG_DIR    = path.join(ROOT, "public", "images");
const BACKUP_DIR = path.join(IMG_DIR, "_originals_backup");

const MAX_WIDTH  = 1920;
const QUALITY    = 82;
const SKIP_BELOW = 300_000; // bytes — skip if already small

function formatBytes(b) {
  return b < 1_000_000
    ? `${(b / 1024).toFixed(0)} KB`
    : `${(b / 1_000_000).toFixed(2)} MB`;
}

async function main() {
  const files = fs.readdirSync(IMG_DIR).filter(
    f => /\.(jpe?g)$/i.test(f) && !f.startsWith("_")
  );

  if (!files.length) {
    console.log("No JPEG images found. Nothing to do.");
    return;
  }

  fs.mkdirSync(BACKUP_DIR, { recursive: true });

  console.log(`\n🥚 BroEggs Image Compressor`);
  console.log(`   Found ${files.length} images in public/images/\n`);

  let totalBefore = 0, totalAfter = 0, compressed = 0, skipped = 0;

  for (const file of files) {
    const src    = path.join(IMG_DIR, file);
    const backup = path.join(BACKUP_DIR, file);
    const sizeBefore = fs.statSync(src).size;
    totalBefore += sizeBefore;

    if (sizeBefore <= SKIP_BELOW) {
      console.log(`  ⏭  ${file.padEnd(18)}  (${formatBytes(sizeBefore)}) — already small`);
      totalAfter += sizeBefore;
      skipped++;
      continue;
    }

    // Backup original once
    if (!fs.existsSync(backup)) {
      fs.copyFileSync(src, backup);
    }

    try {
      const inputBuffer = fs.readFileSync(src);
      const buffer = await sharp(inputBuffer)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .jpeg({ quality: QUALITY, progressive: true })
        .toBuffer();

      if (buffer.length < sizeBefore) {
        fs.writeFileSync(src, buffer);
        const saving = ((1 - buffer.length / sizeBefore) * 100).toFixed(0);
        console.log(
          `  ✅ ${file.padEnd(18)}  ${formatBytes(sizeBefore).padStart(9)} → ${formatBytes(buffer.length).padStart(9)}  (-${saving}%)`
        );
        totalAfter += buffer.length;
      } else {
        console.log(`  ⏭  ${file.padEnd(18)}  output larger, kept original`);
        totalAfter += sizeBefore;
      }
      compressed++;
    } catch (err) {
      console.error(`  ❌ ${file} — ${err.message}`);
      totalAfter += sizeBefore;
    }
  }

  const saved = totalBefore - totalAfter;
  const pct   = ((1 - totalAfter / totalBefore) * 100).toFixed(1);

  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Total before : ${formatBytes(totalBefore)}
  Total after  : ${formatBytes(totalAfter)}
  Saved        : ${formatBytes(saved)}  (${pct}%)
  Compressed   : ${compressed} files
  Skipped      : ${skipped} files
  Backups at   : public/images/_originals_backup/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
}

main().catch(e => { console.error("Fatal:", e); process.exit(1); });
