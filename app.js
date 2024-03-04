const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const Writer = require("./Writer")

var leitor = new Reader();
var escritor = new Writer();

async function main(){
    var dados = await leitor.Read("./users.csv");

    var DtProcess = Processor.Process(dados);
    if(Array.isArray(DtProcess)){
        var usuarios = new Table(DtProcess);
        console.log(usuarios.RowCount);
    } else {
        throw new Error('Not work')
    }

    const html = await HtmlParser.Parse(usuarios); 
    console.log(html);

    escritor.Write(Date.now() + ".html", html);
}

main();