import isEmail from "validator/lib/isEmail"

const SHOW_ERROR_MESSAGE = 'show-error-message'

const form = document.querySelector('.form') as HTMLFormElement
const formUsername = document.querySelector('.username') as HTMLInputElement
const formEmail = document.querySelector('.email') as HTMLInputElement
const formPassword = document.querySelector('.password') as HTMLInputElement
const formRepeatPassword = document.querySelector('.password2') as HTMLInputElement

form.addEventListener('submit', function(e: Event) {
  e.preventDefault()
  hideErrorMessage(this)
  checkEmptyFields(formUsername, formPassword, formRepeatPassword)
  checkEmail(formEmail)
  checkEqualPassword(formPassword, formRepeatPassword)
  if (sendForm(this)) console.log('Form enviado.')
})

function checkEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo precisa ser preenchido.')
  })
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido.')
}

function checkEqualPassword(password: HTMLInputElement, password2: HTMLInputElement): void {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Senhas não são iguais.')
    showErrorMessage(password2, 'Senhas não são iguais.')
  }
}

function hideErrorMessage(form: HTMLFormElement): void {
  form.querySelectorAll(`.${SHOW_ERROR_MESSAGE}`).forEach(item => item.classList.remove(SHOW_ERROR_MESSAGE))
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement

  errorMessage.innerText = msg
  formFields.classList.add(SHOW_ERROR_MESSAGE)
}

function sendForm(form: HTMLFormElement): boolean {
  let send = true
  form.querySelectorAll(`.${SHOW_ERROR_MESSAGE}`).forEach(() => send = false)
  return send
}

showErrorMessage(formUsername, 'UIUI')
hideErrorMessage(form)
