// const data = new Date(2001, 6, 4, 17, 30)

// FORMA QUE VAI SER ENCONTRADA COM MAIS FREQUÊNCIA
/* 
const data = new Date('2001-07-04 17:30:47')
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth() + 1)
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia semana', data.getDay())
console.log(data.toString()) 
*/

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`
}

function formatData(data) {
  const dia = zeroAEsquerda(data.getDate())
  const mes = zeroAEsquerda(data.getMonth() + 1)
  const ano = zeroAEsquerda(data.getFullYear())
  const hora = zeroAEsquerda(data.getHours())
  const minuto = zeroAEsquerda(data.getMinutes())
  const segundo = zeroAEsquerda(data.getSeconds())

  return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`
}

const data = new Date()
const dataBrasil = formatData(data)
console.log(dataBrasil)