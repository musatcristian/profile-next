import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/resume",
        destination: "/resumee.pdf",
      },
    ];
  },
};

export default nextConfig;
