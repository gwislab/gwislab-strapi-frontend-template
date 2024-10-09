/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_BACKEND_SECURE,
        hostname: process.env.NEXT_PUBLIC_BACKEND_DOMAIN,
        port: process.env.NEXT_PUBLIC_BACKEND_PORT,
        pathname: "/**"
      },
      {
        protocol: process.env.NEXT_PUBLIC_FRONTEND_SECURE,
        hostname: "randomuser.me",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
