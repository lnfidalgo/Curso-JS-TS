const pessoa = {
  nome: 'Lucas',
  sobrenome: 'Fidalgo',
  idade: 21,
  endereco: {
    rua: 'Aipim Frito',
    numero: 789
  }
}

const { nome, sobrenome:manga, endereco: {rua, numero}, endereco } = pessoa
console.log(nome, manga, rua, numero, endereco)