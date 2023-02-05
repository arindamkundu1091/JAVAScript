function getPower(x) {
    return 10 ** x;
}
export function capitalize(x) {
    return x[0].toUpperCase() + x.slice(1);
}
export function roundToDecimalPlace(navigator, x = 2) {
    const round = getwer(x);
    return Math.round(navigator * round) / round;
}



