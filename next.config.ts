import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: [
    "page.tsx", // Your custom extension
    "page.ts",
    "ts" // Required for `not-found.ts`
],
};

export default nextConfig;
