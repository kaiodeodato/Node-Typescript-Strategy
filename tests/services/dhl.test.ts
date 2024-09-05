import Dhl from '../../src/services/dhl';

describe('Fedex Service', () => {
    it('should calculate shipping price correctly', () => {
        const dhl = new Dhl();
        const price = dhl.shippingPriceCalculator(10);
        expect(price).toBe(10);
    });
});