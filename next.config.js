/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "platform-lookaside.fbsbx.com", "scontent-ams4-1.cdninstagram.com"],
  },
  experimental: {
    appDir: true
  }
}
