import express from "express"
import { exercicio1 } from "./services/exercicios.js"

const app = express()

// app.get('/api/pessoa/:id/teste/:outroid', (req, res) => {

//     //Query params
//     // inicializa na URL depois do ?
//     //?nome=joao
//     //?idade=10

//     const nome = req.query.nome


//     res.status(200).send(`hello ${nome}`)

// })

app.get('/exercicio1',exercicio1)
app.get('/exercicio2', (req, res) => {

    const valorHora = req.query.valorHora
    const qtdeHora = req.query.qtdeHora
    const salario = (Number(valorHora) * Number(qtdeHora))
    
    res.status(200).send(`O valor do salario que vai receber dia 30: ${salario}`)

})
app.get('/exercicio3', (req, res) =>{
const p1 = req.query.p1
const p2 = req.query.p2
const p3 = req.query.p3
const p4 = req.query.p4
const p5 = req.query.p5

const media = (((Number(p1)+Number(p2)+Number(p3)+Number(p4)+Number(p5))/5))

res.status(200).send(`A media de peso das pessoas é ${media}`)
})
app.get('/exercicio4',(req, res) =>{

  const c = req.query.c
 

})
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})