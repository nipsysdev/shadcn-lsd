import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: '../../docs',
  trailingSlash: true,

  // Performance optimizations
  compress: true,

  // Image optimization
  images: {
    unoptimized: true, // Required for static export
  },

  // Build optimizations
  productionBrowserSourceMaps: false,

  // Optimize CSS
  experimental: {
    optimizeCss: true,
  },

  // Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
