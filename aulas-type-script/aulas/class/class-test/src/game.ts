export abstract class Character {
  constructor (
    protected name: string,
    protected atack: number,
    protected life: number
  ) {}

  receiveAtack(oponent: Character): void {
    this.bordao()
    oponent.loseLife(this.atack)
  }

  protected loseLife(atackPower: number): void {
    this.life -= atackPower
    console.log(`${ this.name } is losing life, ${ this.life } life points`)
  }

  abstract bordao(): void
}

export class Mage extends Character {
  bordao(): void {
    console.log('SHAZAN')
  }
}
export class Monster extends Character {
  bordao(): void {
    console.log('Ahhhh hurts...')
  }
}

const wizard = new Mage('fimage', 100, 1000)
const monstrin = new Mage('cruscredo', 80, 1000)

wizard.receiveAtack(monstrin)