/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/hochzeit', // important for GitHub Pages
  assetPrefix: '/hochzeit',
};

module.exports = nextConfig;
