import sharp from "sharp";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const src = resolve(root, "public/images/brand/logo-purple.png");
const dest = resolve(root, "public/images/brand/logo-purple-on-dark.png");

const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

let trans = 0;
let punched = 0;
let whitened = 0;
let kept = 0;

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const a = data[i + 3];

  if (a < 16) {
    trans += 1;
    continue;
  }

  const chroma = Math.max(r, g, b) - Math.min(r, g, b);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  if (chroma < 28 && luminance > 232) {
    data[i + 3] = 0;
    punched += 1;
    continue;
  }

  if (chroma < 28) {
    data[i] = 255;
    data[i + 1] = 255;
    data[i + 2] = 255;
    whitened += 1;
    continue;
  }

  kept += 1;
}

await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
}).png().toFile(dest);

console.log({ dest, trans, punched, whitened, kept, width: info.width, height: info.height });
