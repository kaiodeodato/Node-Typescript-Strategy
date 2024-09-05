import Tnt from '../../src/services/tnt';

describe('Fedex Service', () => {
    it('should calculate shipping price correctly', () => {
        const tnt = new Tnt();
        const price = tnt.shippingPriceCalculator(10);
        expect(price).toBe(150);
    });
});