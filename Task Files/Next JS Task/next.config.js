/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PRODUCT:"https://dummyjson.com/products",
    USER:"https://dummyjson.com/users",
    POST:"https://dummyjson.com/posts",

  }
}

module.exports = nextConfig
