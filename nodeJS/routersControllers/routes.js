const express = require("express")
const router = express.Router()
const homeController = require("./controllers/homeController")

// Rotas da home
router.get("/", homeController.paginaInicial)
router.post("/", homeController.testando)



module.exports = router
