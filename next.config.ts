import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 output: 'export', // Required for GitHub Pages static hosting
  basePath: '/Portfolio', // Required for GitHub Pages static hosting
  assetPrefix: '/Portfolio/',// Required for GitHub Pages static hosting
  images: {
    unoptimized: true, // Required for static export if using next/image
  },
};

export default nextConfig;
