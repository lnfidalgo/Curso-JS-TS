// 705.484.450-52 070.987.720-03
function ValidatorCPF(cpfDigitado) {
  Object.defineProperty(this, 'cpfLimpo', {
    get: () => cpfDigitado.replace(/\D+/g, '')
  })
}

ValidatorCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === 'undefined') return false
  if (this.cpfLimpo.length !== 11) return false
  if (this.isSequencia()) return false
  let cpfSemDigito = this.cpfLimpo.slice(0, 9)
  
  //Chamar o método para ele iniciar
  const digito1 = this.criaDigito(cpfSemDigito)
  const digito2 = this.criaDigito(cpfSemDigito+ digito1)

  const cpfNovo = `${cpfSemDigito}${digito1}${digito2}`
  return cpfNovo === this.cpfLimpo
}

ValidatorCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial)

  let regressivo = cpfArray.length + 1
  let total = cpfArray.reduce((ac, val) => {
    ac += regressivo * Number(val)
    regressivo--
    return ac
  }, 0)

  const digito = 11 - (total % 11)
  return digito > 9 ? '0' : String(digito)
}

ValidatorCPF.prototype.isSequencia = function() {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
  return sequencia === this.cpfLimpo
}

const cpf = new ValidatorCPF('705.484.450-52')

if (cpf.valida()) {
  console.log('CPF válido')
} else {
  console.log('CPF inválido')
}
