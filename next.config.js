/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/sections/isidora-pokrajac-cubeus",
        permanent: false,
      },
    ]
  }
}

module.exports = nextConfig
