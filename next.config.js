/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID,
  }
}

module.exports = nextConfig
