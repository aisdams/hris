/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.externals.push({
      'react-hook-form': 'react-hook-form',
    });

    return config;
  },
};

module.exports = nextConfig;
