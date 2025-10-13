import withMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
