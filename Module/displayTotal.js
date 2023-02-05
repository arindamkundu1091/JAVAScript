import { capitalize, roundToDecimalPlace } from "./main";

function displayTotal(name, total) {
    return `${capitalize(name)}     ${roundToDecimalPlace(total)}`
}
displayTotal('dev', 20.908893749);

export {displayTotal};



