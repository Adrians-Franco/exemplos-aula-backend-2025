import express from "express"
import ControllerExercicio from "../controller/exercicios.js"

const router = express.Router()

router.post('/exercicio1', ControllerExercicio.Exercicio1Post)

router.post('/exercicio2', ControllerExercicio.Exercicio2post)

router.post('/exercicio3', ControllerExercicio.Exercicio3post)

router.post('/exercicio4', ControllerExercicio.Exercicio4post)

router.post('/exercicio5', ControllerExercicio.Exercicio5post)

router.post('/exercicio6', ControllerExercicio.Exercicio6post)

export default router