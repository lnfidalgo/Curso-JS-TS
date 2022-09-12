function testanto() {
  const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const random = Math.floor(Math.random() * numeros.length)
  return random
}
console.log(testanto())