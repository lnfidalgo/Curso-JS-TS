const pessoas = [
  { id: 3, nome: 'Lucas' },
  { id: 2, nome: 'Fidalgo' },
  { id: 1, nome: 'Aipim' }
]

// const novasPessoas = {}
// for (const pessoa of pessoas) {
// const { id } = pessoa
// novasPessoas[id] = { ...pessoa }
// }

const novasPessoas = new Map()
for (const pessoa of pessoas) {
  const { id } = pessoa
  novasPessoas.set(id, { ...pessoa })
}

for (const chaves of novasPessoas.values()) {
  console.log(chaves)
}

novasPessoas.delete(2)
console.log(novasPessoas)
