exports.paginaInicial = (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome:
  <input type="text" name="nomeparaoback">
  <button type="submit">Enviar formulário</button>
  </form>`)
}

exports.testando = (req, res) => {
  res.send("Oi, eu sou o GOKU!")
}