//Array Functions...
/**
 * forEach()
 */


//using for loop
let output = '';
let FRONTEND = ['REACT', 'ANGULAR', 'VUE', 'SAVLET', 'NEXT', 'NUXT'];
for(let i = 0; i < FRONTEND.length; i++) {
    console.log(FRONTEND[i]);
    output += `<li>${FRONTEND[i]}</li>`
}
// document.body.innerHTML = output;


//using forEach
let op = '';
FRONTEND.forEach(function(e) {
    return op += `<li>${FRONTEND[e]}</li>`
});
// document.body.innerHTML = op;


//Optimized version
let op1 = '';
FRONTEND.forEach(e => {
    return op1 += `<li>${e}</li>`
});
// document.body.innerHTML = op1;


FRONTEND.forEach(Fun);
function Fun(item) {
    console.log(item);
}


//Arr Parameter(target the current Array)
let Costs = [100.24, 167.89, 234.67];
Costs.forEach(dollerAddition);
function dollerAddition(element, index, arr) {
    arr[index] = '$'+element;
}
console.log(Costs);


