import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', 
  trailingSlash: true,
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'r2.kotague.id',
        port: '',
        pathname: '/**',
      },
    ]
  },
  allowedDevOrigins: ["192.168.1.14"]
};

export default nextConfig;
