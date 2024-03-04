const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");

var leitor = new Reader();

async function main(){
    var dados = await leitor.Read("./users.csv");

    var DtProcess = Processor.Process(dados);
    
    var usuarios = new Table(DtProcess);
    console.log(usuarios.RowCount);

    const html = await HtmlParser.Parse(usuarios);
    console.log(html);
}

main();