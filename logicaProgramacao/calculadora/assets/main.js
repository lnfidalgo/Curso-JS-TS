function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    calculadora() {
      this.iniciaCalculadora()
      this.contaEnter()
    },

    iniciaCalculadora() {
      document.addEventListener('click', e => {
        const el = e.target
        if (el.classList.contains('btn_num')) {
          this.btnNum(el.innerText)
        }

        if (el.classList.contains('btn_del')) {
          this.btnDel()
        }

        if (el.classList.contains('btn_clear')) {
          this.btnClear()
        }

        if (el.classList.contains('btn_eq')) {
          this.criaResultado()
        }

        this.display.focus()
      })
    },

    btnNum(valor) {
      this.display.value += valor
    },

    btnDel() {
      this.display.value = this.display.value.slice(0, -1)
    },

    btnClear() {
      this.display.value = ''
    },

    contaEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.criaResultado()
        }
      })
    },

    criaResultado() {
      let conta = this.display.value
      try {
        conta = eval(conta)
        if (!conta) {
          alert('Conta inválida')
          return
        }
        this.display.value = conta
      } catch (e) {
        alert('Conta inválida!')
      }
    },
  }
}
const calculadora = criaCalculadora()
calculadora.calculadora()
