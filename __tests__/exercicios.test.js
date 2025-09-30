import { describe, it, expect} from '@jest/globals';
import { soma } from '../services/exercicios.js';

describe('Testando função soma', () => {

    it('Somando dois numeros positivos', () => {
        const resultado = soma(1, 2);

        expect(resultado).toBe(3);
    })
    it('Somando dois numeros com casa decimal', () => {
        const resultado = soma(1.2, 2.2);

        expect(resultado).toBe(3.4);
    })
    it('Somando zero com outro numero', () => {
        const resultado = soma(0, 2);

        expect(resultado).toBe(2);
    })
}) 