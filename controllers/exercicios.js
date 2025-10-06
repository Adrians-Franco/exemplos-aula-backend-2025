// exercicio1Get = (req, res) => {

//     const num1 = req.query.num1
//     const num2 = req.query.num2
//     const soma = (Number(num1) + Number(num2))
    
//     res.status(200).send(`o resultado da soma de dois numeros inteiros é: ${soma}`)

// }

import ServiceExercicio from "../services/exercicios.js"

class ControllerExercicio{

Exercicio1Post(req, res){

    try {

        const num1 = req.body.num1
        const num2 = req.body.num2
        const result = ServiceExercicio.Soma(num1,num2)
        res.status(200).send({num1,num2,result})

    } catch (error) {
        res.status(400).send({ 
            msg: error.message,
            data: null,
            error: true
         })
    }
    
}

Exercicio2post(req, res){

    const ValorHora = req.body.ValorHora
    const QtdHoras = req.body.QtdHoras
    const Salario = ServiceExercicio.Salario(ValorHora,QtdHoras)
    
    res.status(200).send({ValorHora,QtdHoras,Salario})

}

Exercicio3post(req, res){
    const P1 = req.body.P1
    const P2 = req.body.P2
    const P3 = req.body.P3
    const P4 = req.body.P4
    const P5 = req.body.P5
    
    const Media = ServiceExercicio.Media(P1,P2,P3,P4,P5)
    
    res.status(200).send({P1,P2,P3,P4,P5,Media})

}

Exercicio4post(req, res){

    const C = req.body.celsius  
    const Fahrenheit = ServiceExercicio.ConversãoF(C)
    res.status(200).send({C, Fahrenheit})

}

Exercicio5post(req, res){

    const milha = req.body.m  
    const conversão = ServiceExercicio.Km(milha)
    res.status(200).send({milha, conversão})

}

Exercicio6post(req, res){

    const eventoSegundos = req.body.E
    const horas = ServiceExercicio.Hr(eventoSegundos)
    const minutos = ServiceExercicio.Min(eventoSegundos)

    res.status(200).send({eventoSegundos, horas, minutos})
}

}

export default new ControllerExercicio()