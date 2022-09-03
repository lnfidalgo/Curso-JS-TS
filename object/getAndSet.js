function Produto(nome, preco, estoque) {
  this.nome = nome
  this.preco = preco
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    value: estoque,
    writable: true,
    configurable: true
  })
}

const p1 = new Produto('Aipim', 4, 100)
p1.estoque = 200
console.log(p1)