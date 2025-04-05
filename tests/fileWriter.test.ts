import { FileWriter } from "../src/utils/FileWriter";
import fs from "fs";

jest.mock("fs");

describe("FileWriter", () => {
  const mockWriteFile = fs.writeFile as unknown as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should write file successfully", async () => {
    mockWriteFile.mockImplementation((path, data, callback) => {
      callback(null);
    });

    const writer = new FileWriter();
    await writer.write("output.html", "<html>content</html>");

    expect(mockWriteFile).toHaveBeenCalledWith(
      "output.html",
      "<html>content</html>",
      expect.any(Function)
    );
  });

  test("should throw error when file writing fails", async () => {
    mockWriteFile.mockImplementation((path, data, callback) => {
      callback(new Error("Permission denied"));
    });

    const writer = new FileWriter();

    await expect(
      writer.write("output.html", "<html>content</html>")
    ).rejects.toThrow("Error writing file: Permission denied");
  });
});
