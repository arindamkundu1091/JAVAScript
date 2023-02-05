//! Arrow Function...

function normFun() {
    console.log("This is normal function fun");
}
normFun();

const arrowFun = () => {
    console.log("This is arrow function");
}
arrowFun();

const greet = () => {
    return "good morning";
}
console.log(greet());

const greet2 = () => "good morning";
console.log(greet2());

const greet3 = name => "good morning " + name;
console.log(greet3("Arindam"));




