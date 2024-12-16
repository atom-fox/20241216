declare module 'pdf-lib' {
  export class PDFDocument {
    static load(bytes: ArrayBuffer): Promise<PDFDocument>;
    getPages(): PDFPage[];
    save(): Promise<Uint8Array>;
  }

  export interface PDFPage {
    getRotation(): { angle: number };
    setRotation(angle: Degrees): void;
  }

  export interface Degrees {
    angle: number;
  }

  export function degrees(angle: number): Degrees;
} 