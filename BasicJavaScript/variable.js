"use strict";
//! variable in javascript
// var, let, const for variable declaration

var name = 'Arindam';
var marks = 85;
marks = 0;
console.log("My name is: ", name + " and my marks is: ", marks);
// Here var keyword was being depricated from ES6

//Rules for creating variables
//1. can not start with number
//2. can start with letter, numbers, _ or $
//3.variables are case sensitive

const myName = "Arindam Kundu";
// we can not redeclare or reassign the variable
console.log(myName);

let city = 'delhi';   //Global variable
// we can not redeclare but reassign the variable
{ //To create block level scope
    let city = 'Rampur';   //local variable
    city = 'kolkata';
    console.log(city);
}
console.log(city);   //It shows value of global variable
//We do not use var keyword anymore we only use let and const.
//let and const keyword is from ES6

const arr1 = [12, 23, 32, 45, 55];
arr1.push(71);  //it is to add elements in array
console.log(arr1);

//Most common programming case types...
//1. camalCase
//2.kabab-case
//3.snake_case
//4.PascalCase

