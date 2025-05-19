
const repoName = 'hochzeit'

/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'export', 
  images: {
    unoptimized: true,
  },
  basePath: `/${repoName}`, // important for GitHub Pages
  assetPrefix: `/${repoName}`,
};

module.exports = nextConfig;

