class Validador {
  constructor(cpfDigitado) {
    Object.defineProperty(this, "cpfLimpo", {
      value: cpfDigitado.replace(/\D+/g, "")
    })
  }

  valida() {
    if (!this.cpfLimpo) return false
    if (typeof this.cpfLimpo !== "string") return false
    if (this.cpfLimpo.length !== 11) return false
    if (this.eSequencia()) return false

    let cpfSemDigito = this.cpfLimpo.slice(0, 9)
    const digito1 = Validador.criaDigito(cpfSemDigito)
    const digito2 = Validador.criaDigito(cpfSemDigito + digito1)
    const cpfNovo = `${cpfSemDigito}${digito1}${digito2}`
    return cpfNovo === this.cpfLimpo
  }

  eSequencia() {
    return this.cpfLimpo[0].repeat(11) === this.cpfLimpo
  }

  static criaDigito(cpfSemDigito) {
    const cpfToArray = Array.from(cpfSemDigito)
    let regressor = cpfToArray.length + 1

    let total = cpfToArray.reduce((ac, val) => {
      ac += regressor * Number(val)
      regressor--
      return ac
    }, 0)

    const digito = 11 - (total % 11)
    return digito > 9 ? "0" : String(digito)
  }
}

const cpf = new Validador("28895213672")
if (cpf.valida()) {
  console.log("CPF válido.")
} else {
  console.log("CPF inválido")
}
