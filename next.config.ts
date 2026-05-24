import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== enables static exports
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio",
};

export default nextConfig;
