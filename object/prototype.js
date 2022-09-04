function Produto(nome, valor) {
  this.nome = nome
  this.valor = valor
}

Produto.prototype.desconto = function (percentual) {
  this.valor = this.valor - this.valor * (percentual / 100)
}

Produto.prototype.aumento = function (percentual) {
  this.valor = this.valor + this.valor * (percentual / 100)
}
const p1 = new Produto('Mouse', 100)
//p1.desconto(100)
//p1.aumento(100)

const p2 = {
  nome: 'Teclado',
  valor: 200
}
Object.setPrototypeOf(p2, Produto.prototype)
p2.desconto(100)
console.log(p1)
console.log(p2)

const p3 = Object.create(Produto.prototype, {
  valor: {
    configurable: true,
    writable: true,
    enumerable: true,
    value: 100
  },
  tamanho: {
    configurable: true,
    writable: true,
    enumerable: true,
    value: 'Teste'
  }
})
p3.desconto(100)
console.log(p3)
