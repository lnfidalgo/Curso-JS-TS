function Produto(nome, preco, estoque) {
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // Mostra a chave usando forIn, obj.keys
    value: estoque, // Valor
    writable: true, // Controla se o valor pode ou não ser alterado
    configurable: false // Pode editar, apagar, reconfigurar a chave?
  })

  Object.defineProperties(this, {
    nome: {
      writable: true,
      value: nome,
      enumerable: true,
      configurable: true
    },
    preco: {
      writable: true,
      value: preco,
      enumerable: true,
      configurable: true
    }
  })
}

const p1 = new Produto('BMW', 100000, 5)
p1.estoque = 10
delete p1.estoque // Não tem como apagar por conta do configurable
console.log(Object.keys(p1))

for(let aipim in p1) {
  console.log(aipim)
}