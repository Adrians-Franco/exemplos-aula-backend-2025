import express from "express"
import { exercicio1Post, exercicio2Post, exercicio3Post, exercicio4Post, exercicio5Post } from "./controllers/exercicios.js"

const app = express()
app. use(express.json())

// app.get('/api/pessoa/:id/teste/:outroid', (req, res) => {

//     //Query params
//     // inicializa na URL depois do ?
//     //?nome=joao
//     //?idade=10

//     const nome = req.query.nome


//     res.status(200).send(`hello ${nome}`)

// })

app.post('/exercicio1',exercicio1Post)
app.get('/exercicio2',exercicio2Post)
app.post('/exercicio3',exercicio3Post)
app.post('/exercicio4',exercicio4Post)
app.post('/exercicio5',exercicio5Post)   



app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})