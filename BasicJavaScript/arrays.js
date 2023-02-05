"use strict"

//! Arrays...
let marks = [34, 23, 56, 78, 67, 98, 89, 54];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];
const arr = new Array(23, 32, 43, 'Orange');

console.log(arr);
console.log(mixed);
console.log(fruits);
console.log(marks);


console.log(arr.length);
console.log(Array.isArray(arr));
arr[0] = 'Arindam';     //To change array values at index
console.log(arr);
let arrElement = arr[0];
console.log(arrElement);


let val = marks.indexOf(34);
console.log(val);

//Mutating or modifying arrays
marks.push(34);     //to add element at end of the array
console.log(marks);
marks.unshift(109);     //to add element at first of the array
console.log(marks);
marks.pop();        //to pop element from last
console.log(marks);
marks.shift();      //to pop element from first
console.log(marks);
marks.splice(1, 2);     //to pop particular number of element from a particular index
console.log(marks);
marks.reverse();        //to reverse element of the array
console.log(marks);
let marks2 = [1, 2, 3, 4];
marks = marks.concat(marks2);
console.log(marks);


//Objects...
let myobj = {
    name: 'Arindam',
    'last name': 'Kundu',
    status: 'True',
    marks: [1, 2, 3, 4]
};
console.log(myobj);
console.log(myobj.status);
console.log(myobj.marks);
console.log(myobj['last name']);
console.log(myobj['name']);




