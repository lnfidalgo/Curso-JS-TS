import Login from "./modules/Login"
import Cadastro from "./modules/Cadastro"
import Criar from "./modules/Criar"

// Form inicial (LOGIN E CADASTRO)

const login = new Login(".form-login")
const cadastro = new Cadastro(".form-cadastro")
const btnCriarConta = document.querySelector("#teste")
const btnEntrar = document.querySelector("#teste2")

document.addEventListener("click", e => {
  const el = e.target
  if (el === btnCriarConta) {
    cadastro.init()
  }
  if (el === btnEntrar) {
    login.init()
  }
})

// Form CRUD

const criar = new Criar(".form-criar")
const btnSalvarContato = document.querySelector("#salvarContato")

document.addEventListener("click", e => {
  const el = e.target
  if (el === btnSalvarContato) {
    criar.init()
  }
})
