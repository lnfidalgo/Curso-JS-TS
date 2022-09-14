const form = document.querySelector('#formulario')
form.addEventListener('submit', event => {
  event.preventDefault()
  const inputC = event.target.querySelector('#celcius')
  const inputF = event.target.querySelector('#fare')
  const celcius = Number(inputC.value)
  const fare = Number(inputF.value)

  if (!celcius) {
    setResultado('Valor inválido')
    return
  }

  if (!fare) {
    setResultado('Valor inválido')
    return
  }

  const tempC = getC(celcius, fare)
  const tempF = getF(fare, celcius)
  const msg = `Aqui o celcius ${tempC}ºC. Aqui o fare ${tempF}ºF`

  setResultado(msg)
})

function getC(c, f) {
  return c + f
}

function getF(f, c) {
  return f * c
}

function criaP() {
  const p = document.createElement('p')
  return p
}

function setResultado(qualquerNome) {
  const resultado = document.querySelector('.resultado')
  resultado.innerHTML = ''

  const p = criaP()
  p.innerHTML = qualquerNome
  p.classList.add('resultado-verde')
  resultado.appendChild(p)
}
