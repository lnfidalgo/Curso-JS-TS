export class Person {
  constructor(
    public name: string,
    public surname: string,
    private age: number,
    protected cpf: string
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return this.name + " " + this.surname;
  }
}
