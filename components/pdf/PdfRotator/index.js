import { useState } from 'react'
import dynamic from 'next/dynamic'
import { PDFDocument, degrees } from 'pdf-lib'
import { RotateIcon, ZoomInIcon, ZoomOutIcon, DownloadIcon, UploadIcon } from '@/components/icons'
import styles from './index.module.css'

const PDFViewer = dynamic(() => import('../PdfViewer'), {
  ssr: false,
  loading: () => <div>Loading PDF viewer...</div>
})

export default function PdfRotator() {
  const [pdfFile, setPdfFile] = useState(null)
  const [pageRotation, setPageRotation] = useState(0)
  const [previewWidth, setPreviewWidth] = useState(200)
  const [pdfDoc, setPdfDoc] = useState(null)

  function handleRotate() {
    setPageRotation((prevRotation) => (prevRotation + 90))
  }

  function handleFileChange(event) {
    const file = event.target.files[0]
    if (file) {
      setPdfFile(URL.createObjectURL(file))
    }
  }

  function handleZoomIn() {
    setPreviewWidth(prev => Math.min(prev + 50, 500))
  }

  function handleZoomOut() {
    setPreviewWidth(prev => Math.max(prev - 50, 100))
  }

  async function handleDownload() {
    if (!pdfFile) return;

    try {
      // 获取原始 PDF 数据
      const response = await fetch(pdfFile);
      const pdfBytes = await response.arrayBuffer();
      
      // 加载 PDF 文档
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const pages = pdfDoc.getPages();
      
      // 应用旋转到所有页面
      pages.forEach(page => {
        const currentRotation = page.getRotation().angle;
        const newRotation = ((currentRotation + pageRotation) % 360 + 360) % 360;
        page.setRotation(degrees(newRotation));
      });
      
      // 保存修改后的 PDF
      const modifiedPdfBytes = await pdfDoc.save();
      
      // 创建下载链接
      const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'rotated.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  }

  function handleDragOver(e) {
    e.preventDefault()
    e.stopPropagation()
  }

  function handleDrop(e) {
    e.preventDefault()
    e.stopPropagation()
    const file = e.dataTransfer?.files?.[0]
    if (file?.type === 'application/pdf') {
      setPdfFile(URL.createObjectURL(file))
    }
  }

  return (
    <div className={styles['pdf-container']}>
      {!pdfFile ? (
        <label 
          htmlFor="pdf-upload"
          className={styles['upload-area']}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className={styles['upload-content']}>
            <UploadIcon className={styles['upload-icon']} />
            <p>Click to upload or drag and drop</p>
            <input
              id="pdf-upload"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className={styles['file-input']}
            />
          </div>
        </label>
      ) : (
        <>
          <nav className={styles['controls-section']} aria-label="PDF Controls">
            <label htmlFor="pdf-upload" className={styles['control-button']} style={{ backgroundColor: '#ff612f' }}>
              Choose PDF file
              <input
                id="pdf-upload"
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className={styles['file-input']}
                aria-label="Choose PDF file to rotate"
              />
            </label>

            {pdfFile && (
              <>
                <button 
                  onClick={handleRotate} 
                  className={styles['control-button']} 
                  style={{ backgroundColor: '#1f2937' }}
                  aria-label="Rotate all pages"
                >
                  Rotate all
                </button>
                <div className={styles['zoom-controls']} role="group" aria-label="Zoom controls">
                  <button 
                    onClick={handleZoomIn} 
                    className={`${styles['control-button']} ${styles['rounded-button']}`} 
                    title="Zoom in"
                    aria-label="Zoom in"
                    disabled={previewWidth >= 500}
                  >
                    <ZoomInIcon className={styles['button-icon']} aria-hidden="true" />
                  </button>
                  <button 
                    onClick={handleZoomOut} 
                    className={`${styles['control-button']} ${styles['rounded-button']}`} 
                    title="Zoom out"
                    aria-label="Zoom out"
                    disabled={previewWidth <= 100}
                  >
                    <ZoomOutIcon className={styles['button-icon']} aria-hidden="true" />
                  </button>
                </div>
              </>
            )}
          </nav>
          
          {pdfFile && (
            <>
              <article className={styles['pdf-viewer']} role="region" aria-label="PDF Preview">
                <PDFViewer 
                  file={pdfFile} 
                  rotation={pageRotation}
                  previewWidth={previewWidth}
                  onLoadSuccess={setPdfDoc}
                />
              </article>
              <footer className={styles['pdf-actions']}>
                <button 
                  onClick={handleDownload} 
                  className={styles['download-button']}
                  disabled={!pdfDoc}
                  aria-label="Download rotated PDF"
                >
                  Download PDF
                </button>
              </footer>
            </>
          )}
        </>
      )}
    </div>
  )
} 