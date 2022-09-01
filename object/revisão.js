const pessoa = new Object
pessoa.nome = "Lucas"
pessoa.sobrenome = 'Fidalgo'
pessoa.idade = 21
pessoa.falarNome = function () {
  return `${this.nome} está falando`
}
pessoa.anoNascimento = function () {
  const ano = new Date()
  return ano.getFullYear() - this.idade
}

console.log(pessoa.anoNascimento())