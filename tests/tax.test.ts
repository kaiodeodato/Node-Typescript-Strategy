import Tax from '../src/tax'; // Atualize o caminho conforme a estrutura do seu projeto
import Fedex from '../src/services/fedex'; // Atualize o caminho conforme a estrutura do seu projeto
import Dhl from '../src/services/dhl'; // Atualize o caminho conforme a estrutura do seu projeto
import Tnt from '../src/services/tnt'; // Atualize o caminho conforme a estrutura do seu projeto

describe('Tax', () => {
    let tax: Tax;
    let fedex: Fedex;
    let dhl: Dhl;
    let tnt: Tnt;

    beforeEach(() => {
        tax = new Tax();
        fedex = new Fedex();
        dhl = new Dhl();
        tnt = new Tnt();
    });

    it('should calculate Fedex shipping price correctly', () => {
        expect(tax.calcula(fedex, 10)).toBe(12); // Ajuste conforme a lógica da classe Fedex
    });

    it('should calculate DHL shipping price correctly', () => {
        expect(tax.calcula(dhl, 10)).toBe(10); // Ajuste conforme a lógica da classe DHL
    });

    it('should calculate TNT shipping price correctly', () => {
        expect(tax.calcula(tnt, 10)).toBe(150); // Ajuste conforme a lógica da classe TNT
    });

    // it('should throw an error for unknown service', () => {
    //     expect(() => tax.calcula({} as any, 5)).toThrow('Serviço de Tax desconhecido');
    // });
});