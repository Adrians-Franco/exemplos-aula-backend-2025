class ServiceExercicio{
Soma(num1,num2) {
    if(isNaN(num1) || isNaN(num2)){
        throw new Error("informar somente numeros");
    }
    const num1Inteiro = num1 * 100
    const num2Inteiro = num2 * 100
    const result = num1Inteiro + num2Inteiro
    return result/100
}


Salario(ValorHora,QtdHoras) {
    return ValorHora * QtdHoras
}


Media(p1,p2,p3,p4,p5) {
    const p1Inteiro = p1*100
    const p2Inteiro = p2*100
    const p3Inteiro = p3*100
    const p4Inteiro = p4*100
    const p5Inteiro = p5*100
    const result = (p1Inteiro+p2Inteiro+p3Inteiro+p4Inteiro+p5Inteiro)/5

    return result/100
}


ConversãoF(C) {
    return (9 * C + 160) / 5
}


Km (milha){
   return milha * 1.60934
}


Hr(eventoSegundos){
    return (eventoSegundos/3600)
}


Min(eventoSegundos){
    return(eventoSegundos/60)
}

}

export default new ServiceExercicio()