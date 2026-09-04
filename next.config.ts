import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel gère automatiquement l'output, pas besoin de "standalone"
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
