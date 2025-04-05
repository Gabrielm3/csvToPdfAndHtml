import path from "path";
import fs from "fs";
import { FileReader } from "./utils/FileReader";
import { FileWriter } from "./utils/FileWriter";
import { DataProcessor } from "./services/DataProcessor";
import { Table } from "./models/Table";
import { HtmlParser } from "./services/HtmlParser";
import { PdfGenerator } from "./services/PdfGenerator";
import { createLogger } from "./utils/Logger";

const logger = createLogger("App");

async function main(): Promise<void> {
  try {
    logger.info("Starting CSV processing");

    const inputFile = path.resolve(__dirname, "../data/users.csv");
    const outputDir = path.resolve(__dirname, "../output");

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const fileReader = new FileReader();
    const csvData = await fileReader.read(inputFile);
    logger.info("CSV file successfully read");

    const processedData = DataProcessor.process(csvData);
    logger.info("Data successfully processed");

    const usersTable = new Table(processedData);
    logger.info(
      `Table created with ${usersTable.rowCount} users and ${usersTable.columnCount} columns`
    );

    const html = await HtmlParser.parse(usersTable);
    logger.info("HTML successfully generated");

    const timestamp = Date.now();
    const htmlFilename = path.join(outputDir, `${timestamp}.html`);
    const pdfFilename = path.join(outputDir, `${timestamp}.pdf`);

    const fileWriter = new FileWriter();
    await fileWriter.write(htmlFilename, html);
    logger.info(`HTML file saved at: ${htmlFilename}`);

    await PdfGenerator.generatePdf(pdfFilename, html);
    logger.info(`PDF file saved at: ${pdfFilename}`);

    logger.info("Processing completed successfully");
  } catch (error) {
    logger.error("An error occurred during processing:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

export { main };
