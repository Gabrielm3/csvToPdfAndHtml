import { FileReader } from "../src/utils/FileReader";
import fs from "fs";

jest.mock("fs");

describe("FileReader", () => {
  const mockReadFile = fs.readFile as unknown as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should read file successfully", async () => {
    mockReadFile.mockImplementation((path, encoding, callback) => {
      callback(null, "file content");
    });

    const reader = new FileReader();
    const result = await reader.read("file.csv");

    expect(result).toBe("file content");
    expect(mockReadFile).toHaveBeenCalledWith(
      "file.csv",
      "utf8",
      expect.any(Function)
    );
  });

  test("should throw error when file reading fails", async () => {
    mockReadFile.mockImplementation((path, encoding, callback) => {
      callback(new Error("File not found"), null);
    });

    const reader = new FileReader();

    await expect(reader.read("nonexistent-file.csv")).rejects.toThrow(
      "Error reading file: File not found"
    );
  });
});
