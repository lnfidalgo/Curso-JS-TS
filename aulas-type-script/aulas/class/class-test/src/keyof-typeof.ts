export {}
type CoresObj = typeof coresObj
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  marrom: 'brown'
}

function translateColors(cor: CoresChaves, cores: CoresObj) {
  return cores[cor]
}

console.log(translateColors('vermelho', coresObj))
console.log(translateColors('verde', coresObj))
console.log(translateColors('azul', coresObj))
console.log(translateColors('marrom', coresObj))
