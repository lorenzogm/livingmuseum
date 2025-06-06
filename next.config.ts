import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Improve image quality settings with supported formats
    formats: ['image/avif', 'image/webp'],
    // Configure device sizes for better responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Configure image sizes for more granular control
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Configure unoptimized images to maintain quality
    unoptimized: false,
  },
};

export default nextConfig;
