/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/sections/1",
        permanent: false,
      },
    ]
  }
}

module.exports = nextConfig
