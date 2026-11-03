import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permet de lancer deux builds en parallèle sans qu'ils s'écrasent (NEXT_DIST_DIR=.next-xyz).
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
  },
};

export default nextConfig;
