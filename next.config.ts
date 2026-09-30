import type { NextConfig } from "next";

/**
 * Static export: GitHub Actions builds `out/`, Plesk serves files only.
 * No Node process, no Docker. `next/image` ships originals (`unoptimized`).
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [75, 85],
  },
};

export default nextConfig;
