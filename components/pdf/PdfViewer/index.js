import { useState, useMemo } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import styles from './index.module.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const BASE_WIDTH = 680
const BASE_HEIGHT = 480

export default function PdfViewer({ file, rotation: globalRotation, previewWidth, onLoadSuccess }) {
  const [numPages, setNumPages] = useState(null)
  const [pages, setPages] = useState([])
  const [pageRotations, setPageRotations] = useState({})
  const [pageSize, setPageSize] = useState({ width: BASE_WIDTH, height: BASE_HEIGHT })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pageErrors, setPageErrors] = useState({})

  // 计算预览框尺寸
  const previewDimensions = useMemo(() => {
    const width = previewWidth
    const height = Math.floor(width * (pageSize.height / pageSize.width))
    return { width, height }
  }, [previewWidth, pageSize])

  // 计算缩放比例
  const scale = useMemo(() => {
    return previewWidth / BASE_WIDTH
  }, [previewWidth])

  function handleDocumentLoadSuccess(pdf) {
    setIsLoading(false)
    onLoadSuccess?.(pdf);
    setNumPages(pdf.numPages);
    setPages(Array.from(new Array(pdf.numPages), (_, index) => index + 1));
  }

  function handleDocumentLoadError(err) {
    setIsLoading(false)
    setError(err)
  }

  function handlePageRenderError(pageNumber) {
    setPageErrors(prev => ({
      ...prev,
      [pageNumber]: true
    }))
    return (
      <p role="alert" className={styles['page-error']}>
        Error loading page {pageNumber}
      </p>
    )
  }

  function handleRotatePage(pageNumber) {
    setPageRotations(prev => ({
      ...prev,
      [pageNumber]: ((prev[pageNumber] || 0) + 90)
    }))
  }

  // 获取 PDF 页面尺寸
  function handleLoadSuccess({ width, height }) {
    setPageSize({ width, height })
  }

  return (
    <div className={styles['viewer-container']}>
      {error && <p role="alert">Error loading PDF: {error.message}</p>}
      <Document
        file={file}
        onLoadSuccess={handleDocumentLoadSuccess}
        onLoadError={handleDocumentLoadError}
        className={styles.document}
      >
        <div className={styles['pages-grid']} role="list">
          {pages.map(pageNumber => (
            <div key={pageNumber} className={styles['page-wrapper']} role="listitem">
              <div 
                className={styles['page-container']}
                style={{
                  width: `${previewDimensions.width}px`,
                  height: `${previewDimensions.height}px`
                }}
              >
                <button
                  onClick={() => handleRotatePage(pageNumber)}
                  className={styles['rotate-button']}
                  title={`Rotate page ${pageNumber}`}
                  aria-label={`Rotate page ${pageNumber}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z" />
                  </svg>
                </button>
                <div className={styles['page-frame']}>
                  <div 
                    className={styles['page-rotator']}
                    style={{ 
                      transform: `rotate(${(pageRotations[pageNumber] || 0) + globalRotation}deg) scale(${scale})`
                    }}
                  >
                    <Page
                      pageNumber={pageNumber}
                      className={styles.page}
                      width={BASE_WIDTH}
                      height={BASE_HEIGHT}
                      onLoadSuccess={handleLoadSuccess}
                      onRenderError={() => handlePageRenderError(pageNumber)}
                      rotate={0}
                    />
                  </div>
                </div>
              </div>
              <div className={styles['page-number']} aria-label={`Page ${pageNumber}`}>
                {pageNumber}
              </div>
            </div>
          ))}
        </div>
      </Document>
    </div>
  )
} 