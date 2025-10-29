// next.config.ts
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({});

const nextConfig: NextConfig = {
  experimental: {},
  pageExtensions: ["ts", "tsx", "mdx"], // ← include MDX
};

export default withMDX(nextConfig);
