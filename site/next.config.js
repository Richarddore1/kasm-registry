/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'richarddore1 local',
    description: 'Local Registry for richarddore1.',
    icon: 'https://richarddore1.github.io/kasm-registry/1.0/logo.svg',
    listUrl: 'https://richarddore1.github.io/kasm-registry/',
    contactUrl: 'https://github.com/richarddore1/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
