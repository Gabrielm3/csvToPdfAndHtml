const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const Writer = require("./Writer");
const PDFWriter = require("./PDFWriter");

async function main() {
    try {
        const leitor = new Reader();
        const dados = await leitor.Read("./users.csv");

        const processedData = Processor.Process(dados);
        if (!Array.isArray(processedData)) {
            throw new Error('Os dados processados não são um array.');
        }
        const usuarios = new Table(processedData);
        console.log(`Número de usuários: ${usuarios.RowCount}`);

        const html = await HtmlParser.Parse(usuarios);
        console.log(html);

        const timestamp = Date.now();
        const htmlFilename = `${timestamp}.html`;
        const pdfFilename = `${timestamp}.pdf`;

        const escritor = new Writer();
        escritor.Write(htmlFilename, html);
        PDFWriter.WritePDF(pdfFilename, html);
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}

main();