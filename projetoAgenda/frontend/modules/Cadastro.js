import validator from "validator"

export default class Cadastro {
  constructor(formClass) {
    this.form = document.querySelector(formClass)
  }

  init() {
    this.event()
  }

  event() {
    if (!this.form) return
    document.addEventListener("submit", e => {
      e.preventDefault()
      this.validator(e)
    })
  }

  validator(e) {
    const el = e.target
    const emailInput = el.querySelector('input[name = "email"]')
    const passwordInput = el.querySelector('input[name = "password"]')
    const errorEmail = document.querySelector('.error-email')
    const errorSenha = document.querySelector('.error-senha')
    let error = false

    if(!validator.isEmail(emailInput.value)) {  
      errorEmail.textContent = "Email inválido"
      emailInput.focus()
      error = true
      return
    }

    if(passwordInput.value.length < 7 || passwordInput.value.length > 50) {
      errorSenha.textContent = "Senha inválida"
      passwordInput.focus()
      error = true
      return
    }

    if(!error) el.submit()
  }
}
