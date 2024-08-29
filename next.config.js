/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ace-and-tate.s3.eu-central-1.amazonaws.com',
        port: '',
        pathname: '/design/header_bg.jpg',
      },
    ],
  },
};

module.exports = nextConfig;
