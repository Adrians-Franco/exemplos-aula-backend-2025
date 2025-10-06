import { describe, it, expect } from '@jest/globals'
import serviceExercicio from '../src/services/exercicios.js'

describe('Testando função somar', () => {

    it('Somando dois numeros positivos', () => {
        const resultado = serviceExercicio.Soma(2, 2)

        expect(resultado).toBe(4)
    })

    it('Somando dois numeros negativos', () => {
        const resultado = serviceExercicio.Soma(-4, -2)

        expect(resultado).toBe(-6)
    })

    it('Somando dois numeros positivos decimais', () => {
        const resultado = serviceExercicio.Soma(1.2, 2.2)

        expect(resultado).toBe(3.4)
    })

    it('Somando dois numeros negativos decimais', () => {
        const resultado = serviceExercicio.Soma(-1.2, -2.2)

        expect(resultado).toBe(-3.4)
    })

})

describe('Testando função salario', () => {

    it('multiplicando dois numeros positivos', () => {
        const resultado = serviceExercicio.Salario(20, 20)

        expect(resultado).toBe(400)
    })
    it('multiplicando dois numeros negativos', () => {
        const resultado = serviceExercicio.Salario(-20, -20)

        expect(resultado).toBe(400)
    })
    it('multiplicando dois numeros positivos decimais', () => {
        const resultado = serviceExercicio.Salario(20.50, 100)

        expect(resultado).toBe(2050)
    })
    it('multiplicando dois numeros negativo decimais', () => {
        const resultado = serviceExercicio.Salario(-20.50, 100)

        expect(resultado).toBe(-2050)
    })

})

describe('Testando função media', () => {

    it('somando os pesos e tirando a media com numeros positivos', () => {
        const resultado = serviceExercicio.Media(1,2,3,4,5)

        expect(resultado).toBe(3)
    })
    it('somando os pesos e tirando a media com numeros negativos', () => {
        const resultado = serviceExercicio.Media(-1,-2,-3,-4,-5)

        expect(resultado).toBe(-3)
    })
    it('somando os pesos e tirando a media com numeros positivos e negativos', () => {
        const resultado = serviceExercicio.Media(1,-2,3,-4,-5)

        expect(resultado).toBe(-1.4)
    })
    it('somando os pesos e tirando a media com numeros positivos decimais', () => {
        const resultado = serviceExercicio.Media(1.5, 2.2, 3.1, 4.5, 5.7)

        expect(resultado).toBe(3.4)
    })

})