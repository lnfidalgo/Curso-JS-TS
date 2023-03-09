interface Name {
  name: string
}
interface Surname {
  surname: string
}
interface CompleteName {
  completeName(): string
}

interface CompletePerson extends Name, Surname, CompleteName {}

export class Person implements CompletePerson {
  constructor (public name: string, public surname: string) {}

  completeName(): string {
    return `${this.name} ${this.surname}`
  }
}

const person1 = new Person('Lucas', 'Fidalgo')
console.log(person1.completeName())