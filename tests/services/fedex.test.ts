import Fedex from '../../src/services/fedex';

describe('Fedex Service', () => {
    it('should calculate shipping price correctly', () => {
        const fedex = new Fedex();
        const price = fedex.shippingPriceCalculator(10);
        expect(price).toBe(12);
    });
});