import Head from 'next/head'
import PdfRotator from '../components/pdf/PdfRotator'

export default function Home() {
  const title = "PDF Rotator - Rotate PDF Pages Online Free | PDF.ai"
  const description = "Free online tool to rotate PDF pages. Easy to use, no installation required. Rotate single or all pages in your PDF document with PDF.ai"
  const keywords = "pdf rotator, rotate pdf, pdf tool, online pdf, pdf editor, rotate pdf pages, pdf.ai"
  const url = "https://pdf.ai/tools/rotate"

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        
        {/* 规范链接 */}
        <link rel="canonical" href={url} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        
        {/* Twitter */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* 结构化数据 */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": title,
            "description": description,
            "url": url,
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "All",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "provider": {
              "@type": "Organization",
              "name": "PDF.ai",
              "url": "https://pdf.ai"
            }
          })}
        </script>
      </Head>
      
      <div className="container">
        <main>
          <header className="header">
            <h1>Rotate PDF Pages</h1>
            <p role="doc-subtitle">Simply click on a page to rotate it. You can then download your modified PDF.</p>
          </header>
          <section aria-label="PDF Rotation Tool">
            <PdfRotator />
          </section>
        </main>
      </div>
    </>
  )
} 