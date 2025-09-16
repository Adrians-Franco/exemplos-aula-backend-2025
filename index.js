import express from "express"
const app = express()
const port = 3000

// app.get('/api/pessoa/:id/teste/:outroid', (req, res) => {

//     //Query params
//     // inicializa na URL depois do ?
//     //?nome=joao
//     //?idade=10

//     const nome = req.query.nome


//     res.status(200).send(`hello ${nome}`)

// })

app.get('/exercicio1', (req, res) => {

    const num1 = req.query.num1
    const num2 = req.query.num2
    const soma = (Number(num1) + Number(num2))
    
    res.status(200).send(`o resultado da soma de dois numeros inteiros é: ${soma}`)

})
app.get('/exercicio2', (req, res) => {

    const num1 = req.query.num1
    const num2 = req.query.num2
    const soma = (Number(num1) + Number(num2))
    
    res.status(200).send(`resultado: ${soma}`)

})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})