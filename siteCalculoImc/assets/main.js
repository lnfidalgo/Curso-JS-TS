// Capturar evento de submit do formulário
const form = document.querySelector('#formulario')

// Parar o envio do formulário
form.addEventListener('submit', function (event) {
  event.preventDefault() // Não deixar o formulário ser enviado

  const inputPeso = event.target.querySelector('#peso_box') // Capturar o input
  const inputAltura = event.target.querySelector('#altura_box') // Capturar o input

  const peso = Number(inputPeso.value) // Tentar converter em Number, se retornar um NaN vai executar o If
  const altura = Number(inputAltura.value) // Tentar converter em Number, se retornar um NaN vai executar o If

  if (!peso) {
    setResultado('Peso inválido', false)
    return
  }

  if (!altura) {
    setResultado('Altura inválida', false)
    return
  }

  const imc = getIMC(peso, altura)
  const nivelImc = getNivelImc(imc)

  const msg = `Seu IMC é ${imc} e o seu Grau é (${nivelImc})`

  setResultado(msg, true)
})

function getNivelImc(imc) {
  const nivel = [
    'Abaixo do peso',
    'Peso normal',
    'Sobrepeso',
    'Obesidade Grau 1',
    'Obesidade Grau 2',
    'Obesidade Grau 3'
  ]

  if (imc >= 39.9) {
    return nivel[5]
  }

  if (imc >= 34.9) {
    return nivel[4]
  }

  if (imc >= 29.9) {
    return nivel[3]
  }

  if (imc >= 24.9) {
    return nivel[2]
  }

  if (imc >= 18.5) {
    return nivel[1]
  }

  if (imc < 18.5) {
    return nivel[0]
  }
}

function getIMC(peso, altura) {
  const imc = peso / altura ** 2
  return imc.toFixed(2)
}

function criaP() {
  const p = document.createElement('p')
  return p
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado') // Seleciona o resultado
  resultado.innerHTML = '' // Zera o HTML do resultado

  const p = criaP()

  if (isValid) {
    p.classList.add('paragrafo_positivo')
  } else {
    p.classList.add('paragrafo_negativo')
  }

  p.innerHTML = msg
  resultado.appendChild(p)
}
