function Conta(conta, agencia, saldo) {
  this.conta = conta
  this.agencia = agencia
  this.saldo = saldo
}

Conta.prototype.saque = function (valor) {
  if (this.saldo < valor) {
    console.log(`Valor para saque insuficiente, o seu saldo é de R$${this.saldo.toFixed(2).replace('.', ',')}`)
    return
  }
  this.saldo -= valor
  this.verSaldo()
}

Conta.prototype.deposito = function (valor) {
  valor === 0 ? 0: this.saldo += valor
  this.verSaldo()
}

Conta.prototype.verSaldo = function () {
  console.log(`Conta: ${this.conta} | Ag: ${this.agencia} | Saldo: R$${this.saldo.toFixed(2).replace('.', ',')}`)
}

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, conta, agencia, saldo)
  this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.saqueCC = function (valor) {
  if ((this.saldo + this.limite) < valor) {
    console.log(`O seu saldo é de R$${this.saldo.toFixed(2).replace('.', '.')}`)
    return
  }
  this.saldo -= valor
  this.verSaldo()
}

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, conta, agencia, saldo)
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca


const cc = new ContaCorrente(6129, 123456, 0, 100)
cc.deposito(10)
cc.saqueCC(110)
cc.saqueCC(1)

console.log('-----------')

const cp = new ContaPoupanca(6129, 4566789, 0)
cp.deposito(10)
cp.saque(10)
cp.saque(1)