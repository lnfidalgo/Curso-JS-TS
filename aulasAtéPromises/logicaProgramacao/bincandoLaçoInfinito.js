let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let i = 0

while (i < numeros.length) {
  let numero = numeros[i]
  i++
  if (numero === 3) {
    console.log('Teste')
    continue;
  }

  console.log(numero)

  if (numero === 6) {
    console.log('Teste 2')
    break;
  }

}