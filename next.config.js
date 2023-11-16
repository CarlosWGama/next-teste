/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['89.117.33.144']
  },
  experimental: {
    appDir: true,
  },
  env: {
    API_URL:'http://89.117.33.144:5000'
  },
}

module.exports = nextConfig
