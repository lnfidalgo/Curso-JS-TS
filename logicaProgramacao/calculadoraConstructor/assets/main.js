class Calculadora {
  constructor() {
    this.display = document.querySelector('.display')

    this.calculadora = () => {
      this.capturaClick()
    }

    this.capturaClick = () => {
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
    }

    this.btnNum = valor => {
      this.display.value += valor
    }

    this.btnClear = () => {
      this.display.value = ''
    }

    this.btnDel = () => {
      this.display.value = this.display.value.slice(0, -1)
    }

    this.btnEq = () => {
      let conta = this.display.value
      try {
        conta = eval(conta)
        this.display.value = conta
      } catch (e) {
        alert('Conta inválida!')
        return
      }
    }
  }
}

const calcu = new Calculadora()
calcu.capturaClick()
