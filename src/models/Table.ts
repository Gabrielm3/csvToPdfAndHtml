import { DataRow } from "./DataRow";

export class Table {
  private readonly _header: string[];
  private readonly _rows: DataRow[];

  constructor(data: DataRow[]) {
    if (!data || data.length === 0) {
      throw new Error("Invalid data to create table");
    }

    this._header = data[0];
    this._rows = data.slice(1);
  }

  get header(): string[] {
    return this._header;
  }

  get rows(): DataRow[] {
    return this._rows;
  }

  get rowCount(): number {
    return this._rows.length;
  }

  get columnCount(): number {
    return this._header.length;
  }
}
