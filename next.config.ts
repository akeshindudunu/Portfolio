import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== enables static exports
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio",
  images: {
    unoptimized: true,       // Required: GitHub Pages does not support native Next.js image optimization
  },
};

export default nextConfig;
