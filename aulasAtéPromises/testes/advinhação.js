const campoPalpite = document.querySelector("#campoPalpite")
const envioPalpite = document.querySelector(".envioPalpite")
const palpites = document.querySelector(".palpites")
const ultimoResultado = document.querySelector(".ultimoResultado")
const baixoOuAlto = document.querySelector("baixoOuAlto")
let contagemPalpites = 1

function geraNum() {
  return Math.floor(Math.random() * (100 - 1) + 1)
}

function brincadeira() {
  const numeroGerado = geraNum()
  let palpiteUsuario = Number(campoPalpite.value)

  if (contagemPalpites === 1) {
    palpites.textContent = "Palpites anteriores: "
  }
  palpites.textContent += palpiteUsuario + " "

  if (palpiteUsuario === numeroGerado) {
    ultimoResultado.textContent = "Parabéns, você ganhou!"
    ultimoResultado.style.backgroundColor = "green"
    baixoOuAlto.textContent = ""
    resetGame()
  } else if (contagemPalpites === 10) {
    ultimoResultado.textContent = "O miserável não é um gênio!!"
    baixoOuAlto.textContent = ""
    resetGame()
  } else {
    ultimoResultado.textContent = "Eroooou!!!"
    ultimoResultado.style.backgroundColor = "red"
    if (palpiteUsuario > numeroGerado) {
      baixoOuAlto.textContent = "O seu palpite está alto"
    } else if (palpiteUsuario < numeroGerado) {
      baixoOuAlto.textContent = "O seu palpite está baixo"
    }
  }

  contagemPalpites++
  campoPalpite.value = ''
  campoPalpite.focus()
}

envioPalpite.addEventListener("click", brincadeira)
