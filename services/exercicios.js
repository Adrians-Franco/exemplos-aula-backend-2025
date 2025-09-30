export function soma(num1,num2) {
    const num1Inteiro = num1*100
    const num2Inteiro = num2*100
    const result = num1Inteiro + num2Inteiro

    return result/100
}

export function salario(ValorHora,QtdHoras) {
    return ValorHora * QtdHoras
}

export function media(p1,p2,p3,p4,p5) {
    return (p1+p2+p3+p4+p5)/5
}

export function conversãoF(C) {
    return (9 * C + 160) / 5
}

export function km (milha){
   return milha * 1.60934
}