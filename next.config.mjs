/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lovely-flamingo-139.convex.cloud'
        },
        {
          protocol: 'https',
          hostname: 'sleek-capybara-771.convex.cloud'
        },
        {
          protocol: 'https',
          hostname: 'img.clerk.com'
        },
        {
          protocol : 'https',
          hostname : "brave-bear-457.convex.cloud"
        }
      ]
    }
  };
  
  export default nextConfig;