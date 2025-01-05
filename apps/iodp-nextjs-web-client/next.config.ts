import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Unsplash's image CDN
        pathname: "/**", // Match all paths
      },
      {
        protocol: "https",
        hostname: "unsplash.com", // Unsplash's image CDN
        pathname: "/**", // Match all paths
      },
    ],
  },
};

export default nextConfig;
