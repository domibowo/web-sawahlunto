import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', 
  trailingSlash: true,
  images: { unoptimized: true },
  allowedDevOrigins: ["192.168.1.14"]
};

export default nextConfig;
