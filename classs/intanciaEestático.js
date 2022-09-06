function teste() {
  console.log('Oi, eu sou o Goku2!')
}

class Controle {
  constructor(tv) {
    this.tv = tv
    this.volume = 0
    teste() //Tomar cuidado com isso, pois aponta para o objedo do Node, é melhor criar o static
  }

  // Instância
  aumentarVolume() {
    this.volume += 2
  }

  diminuirVolume() {
    this.volume -= 2
  }

  // Estático Não possui acesso aos dados da instância
  static trocarPilha() {
    console.log('Oi eu sou o Goku!')
    console.log(this)
  }
}

const controle1 = new Controle('Sony')
console.log(controle1)
Controle.trocarPilha()