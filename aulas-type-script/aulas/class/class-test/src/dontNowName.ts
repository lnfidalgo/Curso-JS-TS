export class Person {
  readonly name: string;
  readonly surname: string;
  private readonly cpf: string;
  protected readonly fullName: string;

  constructor(name: string, surname: string) {
    this.name = name
    this.surname = surname
  }

  getCPF():string {

  }
}
