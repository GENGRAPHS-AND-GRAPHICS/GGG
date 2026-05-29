import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '20mb',
      allowedOrigins: [
        'gengraphsandgraphics.com',
        '*.gengraphsandgraphics.com',
      ],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gengraphsandgraphics.com',
      },
      {
        protocol: 'https',
        hostname: '*.gengraphsandgraphics.com',
      },
    ],
  },
};

export default nextConfig;
