export class Company {
  public readonly name: string
  private readonly employees: Employee[] = []
  private readonly cnpj: string

  constructor(name: string, cnpj: string) {
    this.name = name
    this.cnpj = cnpj
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee)
  }

  showEmployee(): void {
    for (const employee of this.employees) {
      console.log(employee)
    }
  }
}

export class Employee {
  constructor(public readonly name: string, public readonly surname: string ) {}
}

const company1 = new Company('Cambotinha', '4002/8922-01')
const employee1 = new Employee('Lucas', 'Fidalgo')
const employee2 = new Employee('Matheus', 'Fidalgo')
const employee3 = new Employee('Jonas', 'Bahia')
company1.addEmployee(employee1)
company1.addEmployee(employee2)
company1.addEmployee(employee3)
company1.showEmployee()
