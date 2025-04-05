import fs from "fs";
import { promisify } from "util";

export class FileWriter {
  private readonly writer: (path: string, data: string) => Promise<void>;

  constructor() {
    this.writer = promisify(fs.writeFile);
  }

  async write(filename: string, data: string): Promise<void> {
    try {
      await this.writer(filename, data);
    } catch (error) {
      throw new Error(
        `Error writing file: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  }
}
