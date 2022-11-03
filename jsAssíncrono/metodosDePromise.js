function rand(min, max) {
  max *= 1000
  min *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject('BAD VALUE')

    setTimeout(() => {
      resolve(msg)
    }, tempo)
  })
}

// Promise.all Recebe um array com promises ou valores já resolvidos, e retorna uma promise com os valores dentro de um array
/*
const promisesAll = [
  'Primeiro valor',
  esperaAi('Promise 1', rand(2, 3)),
  esperaAi('Promise 2', rand(0, 1)),
  esperaAi('Promise 3', rand(1, 2)),
  //esperaAi(1000),
  'Outro valor'
]

Promise.all(promisesAll).then(valor => {
  console.log(valor)
}).catch(e => {
  console.log('ERRO: ' + e)
})
*/

// Promise.race retorna o primeiro que resolver
/*
const promisesAll = [
  esperaAi('Promise 1', rand(2, 3)),
  esperaAi('Promise 2', rand(2, 3)),
  esperaAi('Promise 3', rand(2, 3)),
  esperaAi(1000),
]

Promise.race(promisesAll)
  .then(valor => {
    console.log(valor)
  })
  .catch(e => {
    console.log('ERRO: ' + e)
  })
*/

function baixaPagina() {
  const emCache = true

  if (emCache) {
    return Promise.resolve('Página em Cache')
  } else {
    return esperaAi('Consegui baixar a página', 3000)
  }
}

baixaPagina()
.then(dadosPagina => {
  console.log(dadosPagina)
})
.catch(e => console.log('ERRO', e))