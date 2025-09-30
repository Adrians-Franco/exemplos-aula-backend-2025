// export const exercicio1Get = (req, res) => {

//     const num1 = req.query.num1
//     const num2 = req.query.num2
//     const soma = (Number(num1) + Number(num2))
    
//     res.status(200).send(`o resultado da soma de dois numeros inteiros é: ${soma}`)

// }

import { conversãoF, km, media, salario, soma } from "../services/exercicios.js"

export const exercicio1Post = (req, res) => {

    const num1 = req.body.num1
    const num2 = req.body.num2
    const result = soma(num1,num2)
    
    res.status(200).send({num1,num2,result})
}

export const exercicio2Post = (req, res) => {

    const ValorHora = req.body.ValorHora
    const QtdHoras = req.body.QtdHoras
    const Salario = salario(ValorHora,QtdHoras)
    
    res.status(200).send({ValorHora,QtdHoras,Salario})

}

export const exercicio3Post = (req, res) => {
    const P1 = req.body.P1
    const P2 = req.body.P2
    const P3 = req.body.P3
    const P4 = req.body.P4
    const P5 = req.body.P5
    
    const Media = media(P1,P2,P3,P4,P5)
    
    res.status(200).send({P1,P2,P3,P4,P5,Media})

}

export const exercicio4Post = (req, res) => {

    const C = req.body.celsius  
    const Fahrenheit = conversãoF(C)
    res.status(200).send({C, Fahrenheit})

}

export const exercicio5Post = (req, res) => {

    const milha = req.body.m  
    const conversão = km(milha)
    res.status(200).send({milha, conversão})

}