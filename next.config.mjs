/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "inhouse.pulse-force.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/mobile-app-design-company",
        destination: "/top-mobile-app-development-company",
        permanent: true,
      },
      {
        source: "/blog/the-best-flutter-app-development-trends-for-2024",
        destination: "/blog/the-best-flutter-app-development-trends",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
