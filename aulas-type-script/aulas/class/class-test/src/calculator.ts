export class Calculator {
  constructor (protected number: number) {}

  add(n: number): this {
    this.number += n
    return this
  }

  sub(n: number): this {
    this.number -= n
    return this
  }

  mult(n: number): this {
    this.number *= n
    return this
  }

  split(n: number): this {
    this.number /= n
    return this
  }
}

const calculadora = new Calculator(20)
calculadora.add(10)
console.log(calculadora)