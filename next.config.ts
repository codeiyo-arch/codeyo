import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // This forces the variable into the build-time environment
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  allowedDevOrigins: ["192.168.0.*"],
  /* config options here */
};

export default nextConfig;
