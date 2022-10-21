exports.paginaInicial = (req, res) => {
  res.render("index", {
    titulo: 'Este é o título da página',
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  })
  return
}

exports.testando = (req, res) => {
  res.send("Oi, eu sou o GOKU!")
  return
}
