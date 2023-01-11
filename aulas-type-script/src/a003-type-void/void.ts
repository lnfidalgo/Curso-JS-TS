// Only use in last case
function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  name: 'Lucas',
  surname: 'Nascimento',

  showName(): void {
    console.log(`${this.name} ${this.surname}`);
  },
};

noReturn('Lucas', 'Fidalgo');
pessoa.showName();

export { pessoa };
