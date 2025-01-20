/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "raw-loader",
    });
    return config;
  },
};

export default nextConfig;
