// (condição) ? 'Valor verdadeiro' : 'Valor falso'

const notaUsuario = 100
const usuárioVip = notaUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'

const corUsuario = null
const corPadrao = corUsuario || 'Preta'
console.log(usuárioVip, corPadrao)