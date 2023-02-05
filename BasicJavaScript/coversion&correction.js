"use strict";

//!  Type conversion and type correction
// Type conversion
let myVar;
myVar = 34;
console.log(myVar + " is a: " + (typeof myVar));

myVar = String(34);
console.log(myVar + " is a: " + (typeof myVar));

let booleanVar = true;
console.log(booleanVar + " is a: " + (typeof booleanVar));

let today = new Date();
console.log(today + " is a: " + (typeof today));

let now = String(new Date());
console.log(now + " is a: " + (typeof now));

let arr = [1, 2, 3, 4, 5];
console.log(arr + " is a: " + (typeof arr) + " and length is: " + arr.length);

let strArr = String([1, 2, 3, 4, 5]);
console.log(strArr + " is a: " + (typeof strArr) + " and length is: " + strArr.length);

let num = 8;
num = num.toString();
console.log(num + " is a: " + (typeof num));

num = Number(num);
console.log(num + " is a: " + (typeof num));

num = Number(true);
console.log(num + " is a: " + (typeof num));

let number = '34.098';
console.log(number + " is a: " + (typeof number));

number = parseFloat(number);
console.log(number + " is a: " + (typeof number));
console.log(number.toPrecision(4));
console.log(number.toFixed(2));

number = parseInt(number);
console.log(number + " is a: " + (typeof number));


// Type correction
let myStr = "698";
let myNum = 34;
console.log(myStr + myNum);

