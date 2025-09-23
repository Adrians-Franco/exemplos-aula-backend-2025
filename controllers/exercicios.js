import { somar } from "../services/exercicios.js"

export const exercicio1Post = (req, res) => {

    const num1 = req.body.num1
    const num2 = req.body.num2
    const result = somar(num1, num2)
    
    res.status(200).send({
       result
       
    })

}

 export const exercicio2Get = (res, req )=> {
 const valorHora = req.query.valorHora
 const qtdeHora = req.query.qtdeHora
 const result = (Number(valorHora) * Number(qtdeHora))
    
res.status(200).send({
        msg:"O resultado é"+result,
        data: result,
        erro: null
    })

}
