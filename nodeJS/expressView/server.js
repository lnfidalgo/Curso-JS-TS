const express = require("express")
const app = express()
const router = require("./routes")
const path = require("path")

app.use(express.urlencoded({ extended: true }))
app.use(router)

app.set("views", path.resolve(__dirname, "src", "views"))
app.set('view engine', 'ejs')

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000")
})
