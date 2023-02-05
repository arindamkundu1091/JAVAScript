"use strict";

//!  Data types is two types...
//1. primitive datatype => store in stack
//2. reference datatype(objects) => store in heap

//Primitive data types =>
//1.string, 2.numbers, 3.boolean, 4.null, 5.undefined, 6.symbol(ES6)
//1. String
let str = "Arindam";
console.log("My string is: " + str);
console.log("Data type is: " + (typeof str));
//2. Numbers
let marks = 14;
console.log("Data type is: " + (typeof marks));
//3. Boolean
let isDriver = true;
console.log("Dtat type is: " + (typeof isDriver));
//4. Null
let nullVar = null;
console.log("Data type is: " + (typeof nullVar));
//5. Undefined
let undef = undefined;
console.log("Data type is: " + (typeof undef));
//6. Symbol



//Reference datatypes =>
//1.Arrays, 2.Object literals, 3.functions, 4.dates
//1. Arrays
let myarr = [1, 2, 3, 4, 5, false, "string"];
console.log("Data type is: " + (typeof myarr));
//2. Object Literals
let stMarks = {
    Arindam: 37,
    Shuvam: 36,
    Sourav: 35
}
console.log(stMarks);
console.log(stMarks.Arindam);
console.log("Data type is: " + (typeof stMarks));
//3. Function
function funcOne(number){
    return number;
}
console.log("Data type is: " + (typeof funcOne));
//4. Dates
let today = new Date();
console.log("Today is: " + today);
console.log("Data type is: " + (typeof today));

