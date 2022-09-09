const pessoa = new Object()
pessoa.nome = 'Lucas'
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

// Factory
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    }
  }
}

const factory = criaPessoa('Lucas', 'Fidalgo')
console.log(factory.nomeCompleto())

// Constructor
function Pessoa(nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome
}

// new cria um {vazio} e atrelar this a esse objeto
const constructor = new Pessoa('Lucas', 'Fidalgo')
console.log(constructor)
