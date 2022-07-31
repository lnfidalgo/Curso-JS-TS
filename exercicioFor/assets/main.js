const elementos = [
  { tag: 'h2', texto: 'Aipim Frito' },
  { tag: 'h3', texto: 'Bem Dourado' },
  { tag: 'h4', texto: 'Com uma Carne-Seca' },
  { tag: 'h5', texto: 'Que delicia pô' }
]

const wrapper = document.querySelector('.wrapper')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i]
  let tagCriada = document.createElement(tag)
  let textoCriado = document.createTextNode(texto)

  tagCriada.appendChild(textoCriado)
  div.appendChild(tagCriada)
}

wrapper.appendChild(div)