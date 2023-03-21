export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`
}

console.log(add(1, 2))
console.log(add('Lu', 'cas'))

type Person = { tipo: 'pessoa', name: string }
type Animal = { tipo: 'animal', cor: string }
type PersonOrAnimal = Person | Animal

export class Aluno implements Person {
  tipo: 'pessoa' = 'pessoa'
  constructor (public name: string) {}

}

function mostraNome(obj: PersonOrAnimal): void {
  //if ('name' in obj) console.log(obj.name)
  //if (obj instanceof Aluno) console.log(obj.name)
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.name)
      return
    case 'animal':
      console.log(obj.cor)
      return
  }
}

mostraNome(new Aluno('Teste'))
mostraNome({ tipo: 'animal', cor: 'Lilás' })
