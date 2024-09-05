// Context, uses the interface strategy without know details about it, just applying the strategy with the data from the client
import  FreteServico  from "./freteServico.js";

class Tax {
    calcula(servico: FreteServico, peso: number): number {
        return servico.shippingPriceCalculator(peso);
    }
}

export default Tax;