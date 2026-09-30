import type { NextConfig } from "next";

/**
 * Deployment-neutral Next config for local `pnpm dev`.
 * No standalone/Docker output, no static export (yet — needs explicit approval).
 */
const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85],
  },
};

export default nextConfig;
