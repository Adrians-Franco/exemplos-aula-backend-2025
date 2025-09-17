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


// Peça ao usuário dois números com casas decimais 
// (números reais), 
// some os dois e mostre o resultado.
app.get('/exercicio1', (req, res) => {

    const num1 = req.query.num1
    const num2 = req.query.num2
    const soma = (Number(num1) + Number(num2))
    
    res.status(200).send(`o resultado da soma de dois numeros inteiros é: ${soma}`)

})

//Peça o valor que a pessoa ganha por hora e a 
// quantidade de horas trabalhadas no mês.
//  Mostre quanto ela vai receber no final do mês.

app.get('/exercicio2', (req, res) => {

    const ValorHora = req.query.ValorHora
    const QtdHoras = req.query.QtdHoras
    const salario = (Number(ValorHora) * Number(QtdHoras))
    
    res.status(200).send(`o salario do final do mês sera de: ${salario}`)

})

//3. Peça o peso de 5 pessoas e calcule a média desses pesos. 
// Mostre o resultado.
app.get('/exercicio3', (req, res) => {

    const P1 = req.query.p1
    const P2 = req.query.p2
    const P3 = req.query.p3
    const P4 = req.query.p4
    const P5 = req.query.p5
    
    const media = ((Number(P1)+Number(P2)+Number(P3)+Number(P4)+Number(P5))/5)
    
    res.status(200).send(`a média das 5 pessoas é: ${media}`)

})

//Peça uma temperatura em graus Celsius e converta para 
// Fahrenheit usando a fórmula:    F = (9 * C + 160) / 5
app.get('/exercicio4', (req, res) => {

    const C = req.query.celsius  
    const Fahrenheit = (9 * C + 160) / 5
    res.status(200).send(`os celsius convertidos em fahrenheit é de: ${Fahrenheit}F`)

})

// Peça uma distância em milhas e converta para quilômetros.
//     (Dica: 1 milha = 1.60934 km)
app.get('/exercicio5', (req, res) => {

    const milha = req.query.m  
    const conversão = milha * 1.60934
    res.status(200).send(`A conversão de milhas em quilometros é: ${conversão}`)

})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})