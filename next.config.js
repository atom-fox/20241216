/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    // SVG 配置
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    // PDF.js worker 配置
    config.resolve.alias.canvas = false
    config.resolve.alias.encoding = false

    return config
  },
  // 添加对 CSS 模块的支持
  experimental: {
    esmExternals: 'loose'
  },
  // 配置样式加载
  transpilePackages: ['react-pdf'],
}

module.exports = nextConfig 