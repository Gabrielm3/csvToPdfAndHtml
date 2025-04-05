import { PdfGenerator } from "../src/services/PdfGenerator";
import puppeteer from "puppeteer";

jest.mock("puppeteer", () => ({
  launch: jest.fn(),
}));

describe("PdfGenerator", () => {
  const mockPdf = jest.fn();
  const mockSetContent = jest.fn();
  const mockNewPage = jest.fn();
  const mockClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockNewPage.mockResolvedValue({
      setContent: mockSetContent,
      pdf: mockPdf,
    });
    (puppeteer.launch as jest.Mock).mockResolvedValue({
      newPage: mockNewPage,
      close: mockClose,
    });
    mockSetContent.mockResolvedValue(undefined);
    mockPdf.mockResolvedValue(undefined);
    mockClose.mockResolvedValue(undefined);
  });

  test("should generate PDF successfully", async () => {
    await expect(
      PdfGenerator.generatePdf("test.pdf", "<html>test</html>")
    ).resolves.not.toThrow();

    expect(puppeteer.launch).toHaveBeenCalled();
    expect(mockNewPage).toHaveBeenCalled();
    expect(mockSetContent).toHaveBeenCalledWith("<html>test</html>");
    expect(mockPdf).toHaveBeenCalledWith(
      expect.objectContaining({
        path: "test.pdf",
        format: "A4",
      })
    );
    expect(mockClose).toHaveBeenCalled();
  });

  test("should handle errors and close browser", async () => {
    mockSetContent.mockRejectedValue(new Error("Failed to set content"));

    await expect(
      PdfGenerator.generatePdf("test.pdf", "<html>test</html>")
    ).rejects.toThrow("Failed to set content");
    expect(mockClose).toHaveBeenCalled();
  });
});
