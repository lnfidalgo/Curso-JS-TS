const alunos = [
  { aluno: 'Lucas', nota: 7 },
  { aluno: 'Matheus', nota: 8 },
  { aluno: 'Dedeh', nota: 1 },
  { aluno: 'Jonas', nota: 2 },
  { aluno: 'Roberto', nota: 10 }
]

const aprovados = alunos.filter(obj => obj.nota >= 7)
console.log(aprovados)