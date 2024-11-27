/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  output: "export",
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(process.cwd(), "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
