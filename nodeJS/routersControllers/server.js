const express = require("express")
const app = express()
const router = require("./routes")
app.use(express.urlencoded({ extended: true }))
app.use(router)
app.listen(3000, () => {
  console.log("Acessar http://localhost:3000")
})
