/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/about-me",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
