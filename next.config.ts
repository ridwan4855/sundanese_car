import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["https://www.svgrepo.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
