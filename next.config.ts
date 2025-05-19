
const repoName = 'hochzeit'

/** @type {import('next').NextConfig} */
const nextConfig = { 
  images: {
    unoptimized: true,
  },
  basePath: `/${repoName}`, // important for GitHub Pages
  assetPrefix: `/${repoName}`,
};

module.exports = nextConfig;

