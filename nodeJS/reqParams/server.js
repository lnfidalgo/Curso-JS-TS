const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome:
  <input type="text">
  <button type="submit">Enviar formulário</button>
  </form>`)
})

app.post("/", (req, res) => {
  res.send("Recebi o formulário")
})

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000")
})
