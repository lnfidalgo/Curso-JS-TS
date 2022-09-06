const falar = {
  falar() {
    console.log(`${this.nome} está falando.`)
  }
}

const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`)
  }
}

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`)
  }
}

function criaPessoa(nome, sobrenome) {
  const pessoaPrototype = {...falar}
  // Ou Object.assign({}, falar, comer)

  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  })
}

const p1 = criaPessoa('Lucas', 'Fidalgo')
const p2 = criaPessoa('Aipim', 'Frito')
console.log(p2)
