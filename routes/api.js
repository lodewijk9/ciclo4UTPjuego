const { Router } = require("express")
const controladorAhorcados = require('../controllers/controladorAhorcados')
const controladorFrases = require('../controllers/controladorPalabras')
const router = Router();

router.get("/top-times", controladorAhorcados.top_jugadores)
router.post("/nuevo-jugador", controladorAhorcados.nuevo_jugador)

router.get("/traer-frases", controladorFrases.traer_frases)
router.post("/nueva-frase", controladorFrases.nueva_frase)

module.exports = router;