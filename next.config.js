/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  distDir: "docs",
  trailingSlash: true,
  basePath: "/TowardBetter-Announcement-Page",
  assetPrefix: "/TowardBetter-Announcement-Page/",
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "docs",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "static",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
    NEXT_PUBLIC_BASE_PATH: "/TowardBetter-Announcement-Page",
  },
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  webpack(config) {
    config.output.publicPath = "/TowardBetter-Announcement-Page/";
    return config;
  },
};

export default nextConfig;
