import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true, // Gunakan true untuk status code 301 (SEO friendly)
      },
    ];
  },
};

export default nextConfig;
