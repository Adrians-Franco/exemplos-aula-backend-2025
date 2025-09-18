export const exercicio1 = (req, res) => {

    const num1 = req.query.num1
    const num2 = req.query.num2
    const soma = (Number(num1) + Number(num2))
    
    res.status(200).send(`o resultado da soma de dois numeros inteiros é: ${soma}`)

}