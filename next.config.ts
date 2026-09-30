import type { NextConfig } from "next";

/**
 * Self-hosted Next: `next build` + `next start` (Plesk Node, no Docker).
 * No `output: "export"`, no standalone image.
 */
const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85],
  },
};

export default nextConfig;
