import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* 基础 Meta */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* 搜索引擎 Meta */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="baidu-site-verification" content="your-baidu-code" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pdf.ai/tools/rotate" />
        <meta property="og:title" content="PDF Rotator - Rotate PDF Pages Online | PDF.ai" />
        <meta property="og:description" content="Free online tool to rotate PDF pages. Easy to use, no installation required. Rotate single or all pages in your PDF document with PDF.ai" />
        <meta property="og:image" content="https://pdf.ai/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://pdf.ai/tools/rotate" />
        <meta name="twitter:title" content="PDF Rotator - Rotate PDF Pages Online | PDF.ai" />
        <meta name="twitter:description" content="Free online tool to rotate PDF pages. Easy to use, no installation required. Rotate single or all pages in your PDF document with PDF.ai" />
        <meta name="twitter:image" content="https://pdf.ai/twitter-image.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 