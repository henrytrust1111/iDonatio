/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // Disable PWA in dev mode
});

const nextConfig = {
  // your existing config
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPWA(nextConfig);















// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: ['res.cloudinary.com'],
//     dangerouslyAllowSVG: true,
//     remotePatterns:[
//       {
//         protocol: 'https',
//         hostname: '*',
//       }
//     ]
//   },
// };

// export default nextConfig;
