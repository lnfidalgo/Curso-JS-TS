const path = require("path")
const caminhoArquivo = path.resolve(__dirname, "teste.json")
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

// const pessoas = [
//   { nome: "Lucas" },
//   { nome: "Matheus" },
//   { nome: "Baiano" },
//   { nome: "Dedeh" }
// ]

// const json = JSON.stringify(pessoas, "", 2)
// escreve(caminhoArquivo, json)

async function leArquivo(caminho) {
  const dados = await ler(caminho)
  renderizaDados(dados)
}

function renderizaDados(dados) {
  dados = JSON.parse(dados)

  dados.forEach(element => {
    console.log(element)
  });
}

//const dadosArquivo = leArquivo(caminhoArquivo)
leArquivo(caminhoArquivo)