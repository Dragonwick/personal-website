/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true, // This is CRITICAL for GitHub Pages
  },
}

module.exports = nextConfig