/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/new',
        destination: '/profile',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
