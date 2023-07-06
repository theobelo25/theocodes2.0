/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodb_username: "admin",
    mongodb_password: "l6s5r9TB",
    mongodb_clustername: "cluster0",
    mongodb_database: "theocodes",
  },
};

module.exports = nextConfig;
