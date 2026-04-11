import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/resume",
        destination: "/Cristian_Musat_Resume.pdf",
      },
    ];
  },
};

export default nextConfig;
