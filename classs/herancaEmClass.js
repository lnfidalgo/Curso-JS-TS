class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome
    this.ligado = false
  }

  ligar() {
    if(this.ligado === true) return
    this.ligado = true
  }

  desligar() {
    if(!this.ligado) return
    this.ligado = false
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome)
    this.cor = cor
    this.modelo = modelo
  }

  ligar() {
    console.log('Fui reescrita')
  }
}

const d2 = new Smartphone('iPhone', 'Prata', '6s')
d2.ligar()
