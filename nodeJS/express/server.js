const express = require("express")
const app = express()

app.get("/", (req, resp) => {
  resp.send("Olá mundo!")
})

app.post("/", (req, res) => {
  res.send("Recebi o formulário")
})

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000")
})
