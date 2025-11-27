import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Configure for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/hashir-z.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/hashir-z.github.io/' : '',
};

export default nextConfig;
