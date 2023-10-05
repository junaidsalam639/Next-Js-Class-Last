/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'fakestoreapi.com',
          },
          {
            protocol: 'https',
            hostname: 'fakeapi.platzi.com',
          },
          {
            protocol: 'https',
            hostname: 'i.imgur.com',
          },
          {
            protocol: 'https',
            hostname: 'www.google.com',
          },
        ],
      },
}

module.exports = nextConfig
