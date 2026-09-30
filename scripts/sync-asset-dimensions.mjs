#!/usr/bin/env node
/**
 * Sync width/height in lib/media/assets.ts from files on disk (magic-byte detect).
 * Run: node scripts/sync-asset-dimensions.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
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
      if (buffer[offset] !== 0xff) break;
      const marker = buffer[offset + 1];
      if (marker === 0xc0 || marker === 0xc2 || marker === 0xc1) {
        return {
          width: buffer.readUInt16BE(offset + 7),
          height: buffer.readUInt16BE(offset + 5),
          format: "jpeg",
        };
      }
      offset += 2 + buffer.readUInt16BE(offset + 2);
    }
  }

  if (buffer.toString("ascii", 1, 4) === "PNG") {
    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20),
      format: "png",
    };
  }

  return null;
}

let source = readFileSync(ASSETS_TS, "utf8");
const blockRegex = /src:\s*"([^"]+)"([\s\S]*?)width:\s*(\d+)([\s\S]*?)height:\s*(\d+)/g;

source = source.replace(blockRegex, (full, src, mid1, width, mid2, height) => {
  if (src.endsWith(".svg")) {
    console.log(`skip svg ${src}`);
    return full;
  }
  const filePath = join(PUBLIC, src);
  if (!existsSync(filePath)) {
    console.error(`missing ${src}`);
    return full;
  }
  const dims = readDimensions(filePath);
  if (!dims) {
    console.error(`cannot read ${src}`);
    return full;
  }
  if (Number(width) === dims.width && Number(height) === dims.height) {
    console.log(`ok ${src} ${dims.width}×${dims.height} (${dims.format})`);
    return full;
  }
  console.log(`update ${src}: ${width}×${height} → ${dims.width}×${dims.height} (${dims.format})`);
  return `src: "${src}"${mid1}width: ${dims.width}${mid2}height: ${dims.height}`;
});

writeFileSync(ASSETS_TS, source);
console.log("\nWrote", ASSETS_TS);
