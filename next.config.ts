import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true, // 301 redirect (SEO friendly)
      },
    ];
  },

  images: {
    domains: ["placehold.co"],
  },
};

export default nextConfig;
