/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: [
    'page.tsx',
    'page.ts',
    'tsx',
    'ts'
  ],
  // Add this to help debug build issues
  typescript: {
    ignoreBuildErrors: false,
  }
};

module.exports = nextConfig;