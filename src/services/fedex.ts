// concrete implementations of the strategy
import FreteServico from "../freteServico.js";

class Fedex implements FreteServico {
    shippingPriceCalculator(peso: number): number {
        let amount = 12;

        if (peso > 10) {
            amount += 2.00;
        }

        return amount;
    }
}

export default Fedex;