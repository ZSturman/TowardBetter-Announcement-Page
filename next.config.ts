import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure packages that need transpilation are handled correctly
  // Required for next-image-export-optimizer (since v1.2.0)
  // See package docs if you add more packages that need transpiling.
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore-next-line -- NextConfig typing may not include transpilePackages yet
  transpilePackages: ["next-image-export-optimizer"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',

      },
      
    ],
  },
};

export default nextConfig;
