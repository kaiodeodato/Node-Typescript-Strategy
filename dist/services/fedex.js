class Fedex {
    shippingPriceCalculator(peso) {
        let amount = 12;
        if (peso > 10) {
            amount += 2.00;
        }
        return amount;
    }
}
export default Fedex;
//# sourceMappingURL=fedex.js.map