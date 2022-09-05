function Produto(nome, preco) {
  this.nome = nome
  this.preco = preco
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia
}

Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia
}

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco)
  this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta
Camiseta.prototype.aumentoPercentual = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100)
}

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco)
  this.material = material
  Object.defineProperty(this, 'estoque', {
    configurable: false,
    enumerable: true,
    get: () => estoque,
    set: valor => {
      if (typeof valor !== 'number') {
        throw new TypeError('Erro no Get do estoque')
      }
      estoque = valor
    }
  })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const produto = new Produto('Lapis', 5)
const camiseta = new Camiseta('Blusa', 50, 'Preta')
const caneca = new Caneca('Los Bagaços', 60, 'Plástico', 10)

camiseta.aumentoPercentual(100)
console.log(produto)
console.log(camiseta)
console.log(caneca)
