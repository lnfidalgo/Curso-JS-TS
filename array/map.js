// Não transforma o Array original, ele gera um novo Array
/*
const nums = [1, 2, 3, 4, 5]
const dobro = nums.map(e => e * 2)
console.log(nums, dobro)
*/

/*
const carrinho = [
  '{ "nome": "Borracha", "preco": 10.57 }',
  '{ "nome": "Lápis", "preco": 8.47 }',
  '{ "nome": "Grafite", "preco": 27.50 }',
  '{ "nome": "Estojo", "preco": 2.30 }'
]

const resultado = carrinho.map(e => JSON.parse(e)).map(e => e.preco)
console.log(resultado)
*/

Array.prototype.map2 = function (callback) {
  const novoArray = []
  for (let i = 0; i < this.length; i++) {
    novoArray.push(callback(this[i], i, this))
  }
  return novoArray
}

const carrinho = [
  '{ "nome": "Borracha", "preco": 10.57 }',
  '{ "nome": "Lápis", "preco": 8.47 }',
  '{ "nome": "Grafite", "preco": 27.50 }',
  '{ "nome": "Estojo", "preco": 2.30 }'
]

const resultado = carrinho.map2(e => JSON.parse(e)).map2(e => e.preco)
console.log(resultado)
