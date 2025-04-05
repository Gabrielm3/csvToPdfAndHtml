import puppeteer from "puppeteer";

export class PdfGenerator {
  static async generatePdf(filename: string, html: string): Promise<void> {
    const browser = await puppeteer.launch({
      headless: "new",
    });
    try {
      const page = await browser.newPage();
      await page.setContent(html);
      await page.pdf({
        path: filename,
        format: "A4",
        margin: {
          top: "10mm",
          right: "10mm",
          bottom: "10mm",
          left: "10mm",
        },
      });
    } finally {
      await browser.close();
    }
  }
}
