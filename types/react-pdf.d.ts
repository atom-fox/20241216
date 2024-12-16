declare module 'react-pdf' {
  import { ComponentType, ReactElement, ReactNode } from 'react';

  export interface DocumentProps {
    file: string | File | { url: string; };
    onLoadSuccess?: (pdf: any) => void;
    onLoadError?: (error: any) => void;
    className?: string;
    children?: ReactElement | ReactElement[];
  }

  export interface PageProps {
    pageNumber: number;
    width?: number;
    height?: number;
    scale?: number;
    rotate?: number;
    className?: string;
    onLoadSuccess?: (page: any) => void;
    onRenderError?: () => ReactNode;
  }

  export const Document: ComponentType<DocumentProps>;
  export const Page: ComponentType<PageProps>;
  export const pdfjs: {
    GlobalWorkerOptions: {
      workerSrc: string;
    };
    version: string;
  };
}

declare module 'react-pdf/dist/esm/Page/TextLayer.css';
declare module 'react-pdf/dist/esm/Page/AnnotationLayer.css'; 