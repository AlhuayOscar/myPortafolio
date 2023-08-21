/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Add your Cloudinary domain here
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;


module.exports = nextConfig;
