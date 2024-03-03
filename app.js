const Processor = require("./Processor");
var Reader = require("./Reader");

var leitor = new Reader();

async function main(){
    var dados = await leitor.Read("./users.csv");
    // console.log(dados);

    var DtProcess = Processor.Process(dados);
    return DtProcess
}

main();