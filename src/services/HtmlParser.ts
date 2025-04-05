import ejs from "ejs";
import path from "path";
import { Table } from "../models/Table";

export class HtmlParser {
  static async parse(table: Table): Promise<string> {
    try {
      const templatePath = path.resolve(__dirname, "../../templates/table.ejs");
      return await ejs.renderFile(templatePath, {
        header: table.header,
        rows: table.rows,
      });
    } catch (error) {
      throw new Error(
        `Error parsing HTML: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  }
}
