/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    fiber: false,
  },
  env: {
    SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
      },
    ],
  },
}

module.exports = nextConfig
