/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gutenberg.org",
        
        port: "",
        pathname: "/**",
      },
    ],
  }
};

export default nextConfig;
