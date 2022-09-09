/*
const h1 = document.querySelector('.wrapper h1')
const data = new Date()

function getDiaDaSemana(diaSemana) {
  let diaSemanaTexto
  switch (diaSemana) {
    case 0:
      diaSemanaTexto = 'Domingo'
      return diaSemanaTexto
    case 1:
      diaSemanaTexto = 'Segunda-Feira'
      return diaSemanaTexto
    case 2:
      diaSemanaTexto = 'Terça-Feira'
      return diaSemanaTexto
    case 3:
      diaSemanaTexto = 'Quarta-Feira'
      return diaSemanaTexto
    case 4:
      diaSemanaTexto = 'Quinta-Feira'
      return diaSemanaTexto
    case 5:
      diaSemanaTexto = 'Sexta-Feira'
      return diaSemanaTexto
    case 6:
      diaSemanaTexto = 'Sábado'
      return diaSemanaTexto
    default:
      diaSemanaTexto = ''
      return diaSemanaTexto
  }
}

function getNomeMes(numMes) {
  let nomeMes
  switch (numMes) {
    case 0:
      nomeMes = 'Janeiro'
      return nomeMes
    case 1:
      nomeMes = 'Fevereiro'
      return nomeMes
    case 2:
      nomeMes = 'Março'
      return nomeMes
    case 3:
      nomeMes = 'Abril'
      return nomeMes
    case 4:
      nomeMes = 'Maio'
      return nomeMes
    case 5:
      nomeMes = 'Junho'
      return nomeMes
    case 6:
      nomeMes = 'Julho'
      return nomeMes
    case 7:
      nomeMes = 'Agosto'
      return nomeMes
    case 8:
      nomeMes = 'Setembro'
      return nomeMes
    case 9:
      nomeMes = 'Outubro'
      return nomeMes
    case 10:
      nomeMes = 'Novembro'
      return nomeMes
    case 11:
      nomeMes = 'Dezembro'
      return nomeMes
    default:
      nomeMes = ''
      return nomeMes
  }
}

function criarData(data) {
  const diaSemana = data.getDay()
  const numMes = data.getMonth()

  const nomeDia = getDiaDaSemana(diaSemana)
  const nomeMes = getNomeMes(numMes)

  return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
}

h1.innerHTML = criarData(data)
*/

// MANEIRA RECOMENDADA
const h1 = document.querySelector('.wrapper h1')
const data = new Date()
h1.innerHTML = data.toLocaleString('pt-br', {dateStyle: 'full', timeStyle: 'short'})