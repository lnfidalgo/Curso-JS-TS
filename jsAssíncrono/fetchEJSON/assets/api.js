/*
fetch('pessoas.json') // Buscar os dados
  .then(resposta => resposta.json()) // Pegou a resposta e converteu
  .then(json => carregaElementosNaTela(json))
*/

axios('pessoas.json')
.then(resposta => carregaElementosNaTela(resposta.data))

function carregaElementosNaTela(json) {
  const table = document.createElement('table')
  for (let pessoa of json) {
    const tr = document.createElement('tr')

    let td = document.createElement('td')
    td.innerHTML = pessoa.nome
    tr.appendChild(td)

    let td2 = document.createElement('td')
    td2.innerHTML = pessoa.idade
    tr.appendChild(td2)

    let td3 = document.createElement('td')
    td3.innerHTML = pessoa.salario
    tr.appendChild(td3)

    table.appendChild(tr)
  }

  const resultado = document.querySelector('.resultado')
  resultado.appendChild(table)
}
