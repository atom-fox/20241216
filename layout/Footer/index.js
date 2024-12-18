import styles from './index.module.css'

export default function Footer() {
  return (
    <footer className={styles['footer-container']}>
      <div className={styles['footer-content']}>
        {/* 第一列 - 公司信息 */}
        <div className={styles['company-info']}>
          <img className={styles['company-logo']} src="https://pdf.ai/favicon.ico" alt="PDF.ai logo" />
          <p className={styles['description']}>
            Chat with any PDF: ask questions, get summaries, find information, and more.
          </p>
          <div className={styles['social-links']}>
            <a href="https://www.tiktok.com/@pdfai" target="_blank" className={styles['social-link']}>
              <span className={styles['sr-only']}>TikTok</span>
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2859 3333" className={styles['h-6']}>
                <path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/pdfdotai/" target="_blank" className={styles['social-link']}>
              <span className={styles['sr-only']}>Instagram</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className={styles['h-6']}>
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
            <a href="https://twitter.com/pdfdotai" target="_blank" className={styles['social-link']}>
              <span className={styles['sr-only']}>Twitter</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className={styles['h-6']}>
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>

        {/* 导航链接部分 */}
        <div className={styles['footer-links']}>
          <div className={styles['footer-section']}>
            <h3>Products</h3>
            <ul>
              <li><a href="/use-cases">Use cases</a></li>
              <li><a href="/chrome-extension">Chrome extension</a></li>
              <li><a href="https://api.pdf.ai/">API docs</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/tutorials">Video tutorials</a></li>
              <li><a href="/resources">Resources</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>

          <div className={styles['footer-section']}>
            <h3>We also built</h3>
            <ul>
              <li><a href="/tools/resume-ai-scanner">Resume AI Scanner</a></li>
              <li><a href="/tools/invoice-ai-scanner">Invoice AI Scanner</a></li>
              <li><a href="/tools/quiz-ai-generator">AI Quiz Generator</a></li>
              <li><a href="https://quickyai.com">QuickyAI</a></li>
              <li><a href="https://docsium.com">Docsium</a></li>
              <li><a href="/gpts">PDF GPTs</a></li>
              <li><a href="https://pdfgen.com">PDF AI generator</a></li>
              <li><a href="/tools">Other PDF tools</a></li>
            </ul>
          </div>

          <div className={styles['footer-section']}>
            <h3>Company</h3>
            <ul>
              <li><a href="/compare/chatpdf-alternative">PDF.ai vs ChatPDF</a></li>
              <li><a href="/compare/adobe-acrobat-reader-alternative">PDF.ai vs Acrobat Reader</a></li>
              <li><a href="/privacy-policy">Legal</a></li>
              <li><a href="/affiliate-program">Affiliate program 💵</a></li>
              <li><a href="/investor">Investor</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
} 