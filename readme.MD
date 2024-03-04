# csvToPdfAndHtml
Este projeto foi desenvolvido para converter arquivos CSV em formatos PDF e HTML de forma simples e eficiente. Ele oferece uma solução prática para transformar dados tabulares em documentos PDF e páginas HTML.

## Funcionalidades
- Leitura de arquivos CSV
- Processamento dos dados
- Geração de tabelas HTML
- Conversão para PDF
- Escrita de arquivos de saída

## Como usar
Clone o repositório:
```
git clone https://github.com/gabrielm3/csvToPdfAndHtml.git
```

### Instale as dependências:
```
npm install
```
### Execute o aplicativo:
```
node app.js
```
### Verifique os arquivos de saída na pasta do projeto.


## Estrutura do Projeto

- Reader.js: Responsável por ler o arquivo CSV.
- Processor.js: Realiza o processamento dos dados.
- Table.js: Classe para criar tabelas a partir dos dados processados.
- HtmlParser.js: Converte as tabelas em formato HTML.
- PDFWriter.js: Converte HTML para PDF.
- Writer.js: Escreve os arquivos de saída.
- app.js: Arquivo principal para execução do programa.
- users.csv: Arquivo de exemplo contendo dados a serem processados.

## Contribuindo
Fique à vontade para enviar pull requests, relatar problemas ou sugerir melhorias. 

## Licença
Este projeto está licenciado sob a MIT License.