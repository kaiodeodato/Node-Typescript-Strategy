// concrete implementations of the strategy
import FreteServico from "../freteServico.js";

class Dhl implements FreteServico {
    shippingPriceCalculator(peso: number): number {
        let amount = 10;

        if (peso > 10) {
            amount += 1.00;
        }

        return amount;
    }
}

export default Dhl;