function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    iniciaCalculadora() {
      this.calculadora()
      this.contaEnter()
    },

    calculadora() {
      document.addEventListener('click', e => {
        let el = e.target

        if (el.classList.contains('btn_num')) {
          this.btnClick(el.innerText)
        }

        if (el.classList.contains('btn_clear')) {
          this.btnClear()
        }

        if (el.classList.contains('btn_del')) {
          this.btnDel()
        }

        if (el.classList.contains('btn_eq')) {
          this.criaResultado()
        }

        this.display.focus()
      })
    },

    contaEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.criaResultado()
        }
      })
    },

    btnClick(valor) {
      this.display.value += valor
    },

    btnClear() {
      this.display.value = ''
    },

    btnDel() {
      this.display.value = this.display.value.slice(0, -1)
    },

    criaResultado() {
      let conta = this.display.value
      try {
        conta = eval(conta)

        if (!conta) {
          alert('conta inválida')
          return
        }

        this.display.value = conta
      } catch (e) {
        alert('conta inválida')
      }
    },
  }
}

const calculadora = criaCalculadora()
calculadora.iniciaCalculadora()
