const express = require("express")
const app = express()

app.use(express.urlencoded({ extended: true }))
app.get("/", (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome:
  <input type="text" name="nomeparaoback">
  <button type="submit">Enviar formulário</button>
  </form>`)
})

app.post("/", (req, res) => {
  res.send(`O que tu me envou foi: ${req.body.nomeparaoback}`)
})

app.get("/testes/:oqueEuReceberVaiTerEsseNome?", (req, res) => {
  console.log(req.params)
  //res.send(req.params.oqueEuReceberVaiTerEsseNome)
  res.send(req.query.facebook)
})

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000")
})
