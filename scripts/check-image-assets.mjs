#!/usr/bin/env node
/**
 * Validates lib/media/assets.ts entries against files on disk.
 * Run after adding or replacing images.
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ASSETS_TS = join(ROOT, "lib/media/assets.ts");
const PUBLIC = join(ROOT, "public");

function readDimensions(filePath) {
  const buffer = readFileSync(filePath);

  if (buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;
    while (offset < buffer.length) {
      if (buffer[offset] !== 0xff) {
        break;
      }
      const marker = buffer[offset + 1];
      if (marker === 0xc0 || marker === 0xc2 || marker === 0xc1) {
        return {
          width: buffer.readUInt16BE(offset + 7),
          height: buffer.readUInt16BE(offset + 5),
        };
      }
      offset += 2 + buffer.readUInt16BE(offset + 2);
    }
  }

  if (buffer.toString("ascii", 1, 4) === "PNG") {
    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20),
    };
  }

  return null;
}

function parseAssets(source) {
  const entries = [];
  const blockRegex = /src:\s*"([^"]+)"[\s\S]*?width:\s*(\d+)[\s\S]*?height:\s*(\d+)/g;
  let match;
  while ((match = blockRegex.exec(source)) !== null) {
    entries.push({
      src: match[1],
      width: Number(match[2]),
      height: Number(match[3]),
    });
  }
  return entries;
}

const source = readFileSync(ASSETS_TS, "utf8");
const entries = parseAssets(source);
let errors = 0;

for (const entry of entries) {
  const filePath = join(PUBLIC, entry.src);
  if (!existsSync(filePath)) {
    console.error(`✗ missing file: ${entry.src}`);
    errors += 1;
    continue;
  }

  if (entry.src.endsWith(".svg")) {
    console.log(`✓ ${entry.src} (svg — dimensions not checked)`);
    continue;
  }

  const dims = readDimensions(filePath);
  if (!dims) {
    console.error(`✗ cannot read dimensions: ${entry.src}`);
    errors += 1;
    continue;
  }

  if (dims.width !== entry.width || dims.height !== entry.height) {
    console.error(
      `✗ dimension mismatch: ${entry.src} — registry ${entry.width}×${entry.height}, file ${dims.width}×${dims.height}`,
    );
    errors += 1;
    continue;
  }

  console.log(`✓ ${entry.src} (${entry.width}×${entry.height})`);
}

if (errors > 0) {
  console.error(`\n${errors} error(s). Update lib/media/assets.ts or replace the file.`);
  process.exit(1);
}

console.log(`\nAll ${entries.length} registry entries OK.`);
