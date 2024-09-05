// concrete implementations of the strategy
import FreteServico from "../freteServico.js";

class Tnt implements FreteServico {
    shippingPriceCalculator(peso: number): number {
        let amount = 150;

        if (peso > 10) {
            amount += 1.50;
        }

        return amount;
    }
}

export default Tnt;