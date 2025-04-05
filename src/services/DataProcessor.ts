import { DataRow } from "../models/DataRow";

export class DataProcessor {
  static process(data: string): DataRow[] {
    if (!data) {
      throw new Error("Empty or invalid input data");
    }

    const splitPattern = data.includes("\r\n") ? "\r\n" : "\n";
    const rows = data.split(splitPattern).filter((row) => row.trim() !== "");

    return rows.map((row) => row.split(",").map((cell) => cell.trim()));
  }
}
