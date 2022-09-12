import geraSenha from "./geradores"

const senhaGerada = document.querySelector('.senha-gerada')
const caracter = document.querySelector('#caracter')
const number = document.querySelector('#number')
const upper = document.querySelector('#upper')
const lower = document.querySelector('#lower')
const symbol = document.querySelector('#symbol')
const gerarSenha = document.querySelector('.gerar-senha')
export default () => {
  gerarSenha.addEventListener('click', () => {
    senhaGerada.innerText = gera()
  })
}

function gera() {
  const senha = geraSenha(
    caracter.value,
    upper.checked,
    lower.checked,
    number.checked,
    symbol.checked,
  )

  return senha || 'Nada selecionado'
}