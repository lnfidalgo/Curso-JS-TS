class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario')
    this.eventos()
  }

  eventos() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e)
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const isValid = this.isValid()
    const senhasValidas = this.senhasSaoValidas()

    if (isValid && senhasValidas) {
      alert('Formulário enviado.')
      this.formulario.submit()
    }
  }

  senhasSaoValidas() {
    let valid = true

    const senha = this.formulario.querySelector('.senha')
    const repetirSenha = this.formulario.querySelector('.repetir-senha')

    if (senha.value !== repetirSenha.value) {
      valid = false
      this.setError(senha, 'Campos senha e repetir senha precisam ser iguais.')
      this.setError(repetirSenha, 'Campos senha e repetir senha precisam ser iguais.')
    }

    if (senha.value.length < 6 || senha.value.length > 12) {
      valid = false
      this.setError(senha, 'Senha precisa conter entre 6 e 12 caracteres.')
    }
    return valid
  }

  isValid() {
    let valid = true

    for (let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove()
    }

    for (let campo of this.formulario.querySelectorAll('.validar')) {
      const label = campo.previousElementSibling.innerHTML
      if (!campo.value) {
        this.setError(campo, `Campo "${label}" não pode estar vazio.`)
        valid = false
      }

      if (campo.classList.contains('cpf')) {
        if (!this.validaCPF(campo)) valid = false
      }

      if (campo.classList.contains('usuario')) {
        if (!this.validaUsuario(campo)) valid = false
      }
    }

    return valid
  }

  validaUsuario(campo) {
    const usuario = campo.value
    let valid = true

    if (usuario.length < 3 || usuario.length > 12) {
      this.setError(campo, 'Usuário precisa ter entre 3 e 12 caracteres.')
      valid = false
    }

    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.setError(
        campo,
        'Nome de usuário precisa conter aprenas letras e/ou números.'
      )
      valid = false
    }

    return valid
  }

  validaCPF(campo) {
    const cpf = new Validador(campo.value)

    if (!cpf.valida()) {
      this.setError(campo, 'CPF inválido.')
      return false
    }

    return true
  }

  setError(campo, msg) {
    const div = document.createElement('div')
    div.innerHTML = msg
    div.classList.add('error-text')
    campo.insertAdjacentElement('afterend', div)
  }
}

const validador = new ValidaFormulario()
