import fs from "fs";
import { promisify } from "util";

export class FileReader {
  private reader: (path: string, encoding: BufferEncoding) => Promise<string>;

  constructor() {
    this.reader = promisify(fs.readFile);
  }

  async read(path: string): Promise<string> {
    try {
      return await this.reader(path, "utf8");
    } catch (error) {
      throw new Error(
        `Error reading file: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  }
}
