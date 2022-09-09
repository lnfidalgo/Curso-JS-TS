function aleatorio(min = 1, max = 3) {
  min *= 1000
  max *= 1000
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

async function executa() {
  try {
    const fase1 = await esperaAi('Testando pô 1', aleatorio())
    console.log(fase1)
    const fase2 = await esperaAi('Testando pô 2', aleatorio())
    console.log(fase2)
    const fase3 = await esperaAi('Testando pô 3', aleatorio())
    console.log(fase3)
    console.log('Terminei na: ' + fase3)
  } catch(e) {
    console.log(e)
  }
  
}
executa()