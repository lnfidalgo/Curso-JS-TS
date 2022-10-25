require("dotenv").config()
const express = require("express")  // Iniciando o express
const app = express() // Iniciando o express
const mongoose = require("mongoose")
mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.emit("pronto")  // Quando estiver conectado, emite evento 
  })
  .catch(e => console.log(e))

const session = require("express-session") // Identificar a sessão do cliente
const MongoStore = require("connect-mongo") // Usado para salvar as sessões na DB
const flash = require("connect-flash") // Mensagens auto-destrutivas, bom para mandar mensagens de erro, salvas em sessão
const router = require("./routes") // Identificar as rotas 
const path = require("path")
const helmet = require("helmet") // Deixar aplicação mais segura
const csrf = require("csurf") // Segurança gerando tokens de sessão, ler para mais
const meuMiddleware = require("./src/middlewares/middleware")
const middlewareErro = require("./src/middlewares/middlewareErro")
const middlewareCsrf = require("./src/middlewares/middlewareCsrfToken")

app.use(helmet())

app.use(express.urlencoded({ extended: true })) // Podemos postar form para nossa app
app.use(express.json()) // Fazer parse de json para a app
app.use(express.static(path.resolve(__dirname, "public")))

const sessionOptions = session({
  secret: "sgdfbastrgnrsymyi,mdtryhnasfvbABSFDVBADFBRTYN",
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
})

app.use(sessionOptions)
app.use(flash())

app.set("views", path.resolve(__dirname, "src", "views")) // Arquivos que renderiza na tela
app.set("view engine", "ejs")
app.use(csrf())

// Meus Middlewares
app.use(meuMiddleware)
app.use(middlewareErro)
app.use(middlewareCsrf)
app.use(router)

app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000")
  })
})
