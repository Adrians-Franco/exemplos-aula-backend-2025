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

app.get('/api/pessoa/:id', (req, res) => {

    const nome = req.query.nome

    res.status(200).send(`hello ${nome}`)

})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})