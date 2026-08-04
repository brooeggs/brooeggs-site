/**
 * compress-images.mjs
 * -------------------
 * Compresses all JPEG images in public/images/ using the sharp library
 * that is already bundled with Next.js.
 *
 * Strategy:
 *   - Resize to max 1920px wide (keeps aspect ratio, never upscales)
 *   - Re-encode as JPEG at quality 82  (visually lossless for web)
 *   - Overwrites originals in-place (originals are backed up first)
 *   - Skips images already under 300 KB
 *
 * Run:  node scripts/compress-images.mjs
 */

import { createRequire } from "module";
import { readdirSync, statSync, copyFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const require   = createRequire(import.meta.url);

// sharp lives inside next's node_modules
let sharp;
try {
  sharp = require("sharp");
} catch {
  // fallback: top-level node_modules
  sharp = (await import("sharp")).default;
}

const ROOT       = join(__dirname, "..");
const IMG_DIR    = join(ROOT, "public", "images");
const BACKUP_DIR = join(ROOT, "public", "images", "_originals_backup");

const MAX_WIDTH  = 1920;   // px — enough for any screen
const QUALITY    = 82;     // JPEG quality (82 = visually near-lossless for web)
const SKIP_BELOW = 300_000; // skip files already under 300 KB

// ── helpers ──────────────────────────────────────────────────────────────────

function formatBytes(bytes) {
  return bytes < 1_000_000
    ? `${(bytes / 1024).toFixed(0)} KB`
    : `${(bytes / 1_000_000).toFixed(2)} MB`;
}

// ── main ─────────────────────────────────────────────────────────────────────

const files = readdirSync(IMG_DIR).filter(
  (f) => /\.(jpe?g)$/i.test(f) && !f.startsWith("_")
);

if (files.length === 0) {
  console.log("No JPEG images found in public/images/. Nothing to do.");
  process.exit(0);
}

// Create backup dir
mkdirSync(BACKUP_DIR, { recursive: true });

console.log(`\n🥚 BroEggs Image Compressor`);
console.log(`   Found ${files.length} images in public/images/\n`);

let totalBefore = 0;
let totalAfter  = 0;
let skipped     = 0;
let compressed  = 0;

for (const file of files) {
  const srcPath    = join(IMG_DIR, file);
  const backupPath = join(BACKUP_DIR, file);
  const sizeBefore = statSync(srcPath).size;

  totalBefore += sizeBefore;

  if (sizeBefore <= SKIP_BELOW) {
    console.log(`  ⏭  ${file}  (${formatBytes(sizeBefore)}) — already small, skipped`);
    totalAfter += sizeBefore;
    skipped++;
    continue;
  }

  // Back up original (only once — don't overwrite existing backup)
  try {
    statSync(backupPath);
    // backup already exists, skip overwrite
  } catch {
    copyFileSync(srcPath, backupPath);
  }

  try {
    // Read → resize → re-encode → write back in-place
    const buffer = await sharp(srcPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: false, progressive: true })
      .toBuffer();

    // Write only if sharp actually made it smaller
    if (buffer.length < sizeBefore) {
      const { writeFileSync } = await import("fs");
      writeFileSync(srcPath, buffer);
      const sizeAfter = buffer.length;
      const saving = ((1 - sizeAfter / sizeBefore) * 100).toFixed(0);
      console.log(
        `  ✅ ${file.padEnd(18)}  ${formatBytes(sizeBefore).padStart(9)} → ${formatBytes(sizeAfter).padStart(9)}  (-${saving}%)`
      );
      totalAfter += sizeAfter;
    } else {
      console.log(`  ⏭  ${file}  — output larger than source, kept original`);
      totalAfter += sizeBefore;
    }
    compressed++;
  } catch (err) {
    console.error(`  ❌ ${file} — error: ${err.message}`);
    totalAfter += sizeBefore;
  }
}

const totalSaving = ((1 - totalAfter / totalBefore) * 100).toFixed(1);

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Total before : ${formatBytes(totalBefore)}
  Total after  : ${formatBytes(totalAfter)}
  Saved        : ${formatBytes(totalBefore - totalAfter)}  (${totalSaving}%)
  Compressed   : ${compressed} files
  Skipped      : ${skipped} files
  Backups at   : public/images/_originals_backup/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
