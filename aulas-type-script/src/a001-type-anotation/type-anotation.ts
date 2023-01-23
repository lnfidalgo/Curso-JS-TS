/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipo)
let personName: string = 'Luiz';
let age: number = 21;
let adult: boolean = true;
let symbol: symbol = Symbol('qualquer');
// let big: bigint = 10n;

// Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfStrings: Array<string> = ['a', 'b'];
let arrayOfNumbers2 : number[] = [1, 2, 3];

// Objects
let person: {name: string, age: number, adult?: boolean} = {
  name: 'Lucas',
  age: 21
};

// Functions
function sum(x: number, y: number): number {
  return x + y;
}

const sum2: (x: number, y: number) => number = (x, y) => x + y;

export {person};
