#!/usr/bin/env node
/**
 * Print width × height for every raster under public/images/.
 * Use when adding entries to lib/media/assets.ts.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const IMAGES_ROOT = join(ROOT, "public/images");

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

  if (buffer.toString("utf8", 0, 4).includes("SVG") || buffer.toString("utf8", 0, 5) === "<?xml") {
    return { width: null, height: null, format: "svg" };
  }

  return null;
}

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      walk(fullPath);
      continue;
    }

    const rel = `/${relative(join(ROOT, "public"), fullPath).replace(/\\/g, "/")}`;
    const dims = readDimensions(fullPath);
    if (!dims) {
      console.log(`${rel} — (unknown format)`);
      continue;
    }

    if (dims.format === "svg") {
      console.log(`${rel} — svg`);
      continue;
    }

    console.log(`${rel} — ${dims.width}×${dims.height} (${dims.format})`);
  }
}

console.log(`Image info under ${IMAGES_ROOT}\n`);
walk(IMAGES_ROOT);
