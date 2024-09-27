/** @type {import('next').NextConfig} */
const nextConfig = {
  // output:"export",
    images: {
    domains: ['assets.aceternity.com', 'aceternity.com', 'images.unsplash.com', 'viptrades.com'],
    unoptimized: true
  }
};

export default nextConfig;