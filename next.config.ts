import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // outputFileTracingRoot: path.resolve(__dirname, '../../'),  // Uncomment and add 'import path from "path"' if needed
  /* config options here */
  output: 'export',
  trailingSlash: true,
  basePath: '/compliance-radar-web',
  allowedDevOrigins: ['*.dev.coze.site'],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
