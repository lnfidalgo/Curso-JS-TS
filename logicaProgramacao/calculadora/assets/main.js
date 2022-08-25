function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    calculadora() {
      this.iniciaCalculadora()
    },

    iniciaCalculadora() {
      document.addEventListener('click', e => {
        const el = e.target

        if (el.classList.contains('btn_num')) {
          this.btnNum(el.innerText)
        }

        if (el.classList.contains('btn_clear')) {
          this.btnClear()
        }

        if (el.classList.contains('btn_del')) {
          this.btnDel()
        }

        if (el.classList.contains('btn_eq')) {
          this.btnEq()
        }

        this.display.focus()
      })
    },

    btnNum(valor) {
      this.display.value += valor
    },

    btnClear() {
      this.display.value = ''
    },

    btnDel() {
      this.display.value = this.display.value.slice(0, -1)
    },

    btnEq() {
      let conta = this.display.value
      try {
        conta = eval(conta)
        if(!conta) {
          alert('Conta inválida!')
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