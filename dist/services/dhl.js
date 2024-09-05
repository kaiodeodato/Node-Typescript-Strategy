class Dhl {
    shippingPriceCalculator(peso) {
        let amount = 10;
        if (peso > 10) {
            amount += 1.00;
        }
        return amount;
    }
}
export default Dhl;
//# sourceMappingURL=dhl.js.map