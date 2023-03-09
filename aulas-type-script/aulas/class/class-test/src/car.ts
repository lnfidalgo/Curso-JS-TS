export class Car {
  private readonly engine = new Engine()

  turnOn(): void {
    this.engine.turnOn()
  }

  speedUp(): void {
    this.engine.speedUp()
  }

  turnOf(): void {
    this.engine.turnOf()
  }
}

export class Engine {
  turnOn(): void {
    console.log('The engine is ON...')
  }
  speedUp(): void {
    console.log('The engine is speeding up...')
  }
  turnOf(): void {
    console.log('The engine is OF...')
  }
}

const car = new Car()

car.turnOn()
car.speedUp()
car.turnOf()
