import withMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Image optimization settings
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Add any other config options you use
  async redirects() {
    return [
      {
        source: '/blr-house',
        destination: 'https://maps.app.goo.gl/cnUDS9hMcknb49wE7',
        permanent: true,
      },
      {
        source: '/bom-house',
        destination: 'https://maps.app.goo.gl/6LCukt6DkcTpV6Ec7',
        permanent: true,
      },
      {
        source: '/dad-blr-house',
        destination: 'https://maps.app.goo.gl/GDfnXc5fm5nAvFq89',
        permanent: true,
      },
    ]
  },
}

export default withMDX()(nextConfig)
