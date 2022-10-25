import validator from "validator"

export default class Criar {
  constructor(form) {
    this.form = document.querySelector(form)
  }

  init() {
    this.event()
  }

  event() {
    if (!this.form) return
    document.addEventListener("submit", e => {
      e.preventDefault()
      this.valida(e)
    })
  }

  valida(e) {
    const el = e.target
    const inputNome = el.querySelector('input[name = "nome"]')
    const inputEmail = el.querySelector('input[name = "email"]')
    const inputTelefone = el.querySelector('input[name = "telefone"]')
    const nomeError = document.querySelector(".error-nome")
    const emailError = document.querySelector(".error-email")
    const telefoneError = document.querySelector(".error-telefone")
    let error = false
    

    if (inputNome.value === "") {
      nomeError.textContent = "Nome precisa ser preenchido"
      error = true
      inputNome.focus()
      return
    }
    
    if (!validator.isEmail(inputEmail.value) && inputTelefone.value === '') {
      emailError.textContent = "Algum contato precisa ser cadastrado"
      telefoneError.textContent = "Algum contato precisa ser cadastrado"
      nomeError.textContent = ""
      error = true
      inputEmail.focus()
      return
    }

    if(!error) el.submit()
  }
}
