import validator from "validator"

export default class Login {
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
    const errorEmaill = document.querySelector('.error-emaill')
    const errorSenhal = document.querySelector('.error-senhal')
    let error = false

    if(!validator.isEmail(emailInput.value)) {  
      errorEmaill.textContent = "Email inválido"
      emailInput.focus()
      error = true
      return
    }

    if(passwordInput.value.length < 7 || passwordInput.value.length > 50) {
      errorSenhal.textContent = "Senha inválida"
      passwordInput.focus()
      error = true
      return
    }

    if(!error) el.submit()
  }
}
