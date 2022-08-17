/*const numeros = [2, 58, 47, 5, 6, 18, 8, 36, 4, 7, 85, 26, 27, 29, 38, 25]

const filtrado = numeros.filter(valor => {
  return valor > 10
})

console.log(filtrado)
*/
const pessoas = [
  { nome: 'Josué', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
]

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 6)
const velhos = pessoas.filter(obj => obj.idade > 50)
const terminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(pessoasComNomeGrande)
console.log(velhos)
console.log(terminaComA)