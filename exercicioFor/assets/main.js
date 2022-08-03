const elementos = [
  {tag: 'h2', texto: 'Uhul'},
  {tag: 'h3', texto: 'Aipim'},
  {tag: 'h4', texto: 'Lasanha'},
  {tag: 'h5', texto: 'Strogonoff'}
]

const wrapper = document.querySelector('.wrapper')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
  let {tag, texto } = elementos[i]
  let criaTag = document.createElement(tag)
  let criaTexto = document.createTextNode(texto)

  criaTag.appendChild(criaTexto)
  div.appendChild(criaTag)
}

wrapper.appendChild(div)