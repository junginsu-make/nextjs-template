/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  typescript: {
    // Strict type checking
    tsconfigPath: './tsconfig.json',
  },
  eslint: {
    // Lint on build
    dirs: ['src'],
  },
};

module.exports = nextConfig;
