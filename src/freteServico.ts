// Strategy - is the base class the all the concrete classes gona use
export default interface FreteServico {
    shippingPriceCalculator(peso: number): number;
}