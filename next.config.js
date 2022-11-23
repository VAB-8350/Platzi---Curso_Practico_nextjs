/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
        hostname: 'api.lorem.space' 
    }],
    domains: ['placeimg.com']
  }
}

module.exports = nextConfig
