import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages user sites (username.github.io) serve from root, not subdirectory
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;
