import validator from "validator"

const SHOW_ERROR_MESSAGE = '.show-error-message'
const form = document.querySelector('.form') as HTMLFormElement
const formUsername = document.querySelector('.username') as HTMLInputElement
const formEmail = document.querySelector('.email') as HTMLInputElement
const formPassword = document.querySelector('.password') as HTMLInputElement
const formRepeatPassword = document.querySelector('.password2') as HTMLInputElement

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (formUsername == 7) {
    console.log('oi')
  }
})
