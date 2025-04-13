import type { NextConfig } from "next"
const nextConfig: NextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ['images.unsplash.com'], // Add any image domains you need
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};
export default nextConfig;
