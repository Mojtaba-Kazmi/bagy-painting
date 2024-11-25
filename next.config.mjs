/** @type {import('next').NextConfig} */

const nextConfig = {
  compress: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**", // Allowing all paths from the domain
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/free-quote", // Old WordPress URL
        destination: "/get-quote", // New Next.js URL
        permanent: true, // 301 permanent redirect
      },
      {
        source: "/residential", // Old WordPress URL
        destination: "/services/residential-painters-adelaide", // New Next.js URL
        permanent: true, // 301 permanent redirect
      },
      {
        source: "/commercial", // Old WordPress URL
        destination: "/services/commercial-painters-adelaide", // New Next.js URL
        permanent: true, // 301 permanent redirect
      },
      {
        source: "/restoration", // Old WordPress URL
        destination: "/services/paint-restoration-adelaide", // New Next.js URL
        permanent: true, // 301 permanent redirect
      },
      {
        source: "/gallery", // Old WordPress URL
        destination: "/portfolio", // New Next.js URL
        permanent: true, // 301 permanent redirect
      },
      {
        source: "/color-picker", // Old WordPress URL
        destination: "/virtual-paint-project", // New Next.js URL
        permanent: true, // 301 permanent redirect
      },
      {
        source: "/privacy-statement", // Old WordPress URL
        destination: "/legal", // New Next.js URL
        permanent: true, // 301 permanent redirect
      },
      {
        source: "/terms-and-conditions", // Old WordPress URL
        destination: "/legal", // New Next.js URL
        permanent: true, // 301 permanent redirect
      },
      {
        source: "/our-painting-process", // Old WordPress URL
        destination: "/services", // New Next.js URL
        permanent: true, // 301 permanent redirect
      },
    ];
  },
};

export default nextConfig;
