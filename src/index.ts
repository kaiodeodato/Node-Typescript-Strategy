import Tax from "./tax.js";
import Fedex from "./services/fedex.js";
import Dhl from "./services/dhl.js";
import Tnt from "./services/tnt.js";

const tax = new Tax();

const fedex = new Fedex();
const dhl = new Dhl();
const tnt = new Tnt();

const peso = 10;

try {
    console.log("Preço FedEx: " + tax.calcula(fedex, peso));
    console.log("Preço DHL: " + tax.calcula(dhl, peso));
    console.log("Preço TNT: " + tax.calcula(tnt, peso));
} catch (error) {
    console.error("Erro ao calcular o frete");
}