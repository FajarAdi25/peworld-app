/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        // port: '',
        // pathname: '/my-bucket/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/v1/:slug*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/v1/:slug*`,
      },
    ];
  },
};

export default nextConfig;
