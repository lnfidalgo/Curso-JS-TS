function Produto(nome, preco, estoque) {
  this.nome = nome
  this.preco = preco
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: true,
    get: function () {
      return estoque // Geralmente é usado para pegar o valor e exibir ele
    },
    set: function (valor) {
      if (typeof valor !== 'number') {
        throw new TypeError('Mensagem aqui')
      }
      estoque = valor
    }
  })
}
/* Constructor */
// const p1 = new Produto('Aipim', 4, 1)
// console.log(p1)
// p1.estoque = 15
// console.log(p1.estoque)



function criaProduto(nome) {
  return {
    get nome() {
      return nome
    },
    set nome(valor) {
      if (typeof valor !== 'string') {
        throw new TypeError('Mensagem aqui')
      }
      nome = valor
    }
  }
}

/* Factory */
const nomeProduto = criaProduto('Teste')
console.log(nomeProduto.nome)