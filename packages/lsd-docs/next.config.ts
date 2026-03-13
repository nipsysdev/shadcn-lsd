import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: '../../docs',
  trailingSlash: true,

  compress: true,

  images: {
    unoptimized: true,
  },

  productionBrowserSourceMaps: false,

  experimental: {
    optimizeCss: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  devIndicators: {
    position: 'bottom-right',
  },
};

export default nextConfig;
