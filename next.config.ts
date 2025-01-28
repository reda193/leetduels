/** @type {import('next').NextConfig} */
const nextConfig = {
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false
  },
  // Page extensions at root level
  pageExtensions: ['page.tsx', 'page.ts', 'ts'],
  // Add output configuration to prevent static generation issues
  output: 'standalone',
  // Add experimental features to force dynamic rendering
  experimental: {
    serverActions: true
  }
};

module.exports = nextConfig;