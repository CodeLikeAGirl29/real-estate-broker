import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This is the key for Next.js 15 to ignore parent lockfiles
  experimental: {
  },
  // If you are deploying to Vercel, this ensures it traces from your project folder
  outputFileTracingRoot: undefined,
};

export default nextConfig;