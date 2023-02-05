/**
 * Array.Prototype.map()
 * Syntax: array.map(callback(element, index, arr), this)
 *         (method) Array<number>.map<number>(callbackfn: (value: number, index: number, array: number[]) => number, thisArg?: any): number[]
 * Purpose: this function is to modify each element of the array according to the callback function.
 */
let circles = [10, 20, 30];
let areas = [];
let area = 0;
let pi = Math.PI;
//using loop
for(let i = 0; i<circles.length; i++) {
    area = Math.floor(pi*circles[i]*circles[i]);
    areas.push(area);
}
console.log('Areas are: ', areas);


//using map
areas = [];     //Remove old values
function CalculationOfArea(r) {
    return Math.floor(pi * r * r);
}
areas = circles.map(CalculationOfArea);
console.log('Areas are: ', areas);


//Optimized version
areas = [];     //remove old values
areas = circles.map(r => Math.floor(pi * r * r));
console.log('Areas are: ', areas);


//example
let numbers = [16, 2, 36, 49, 64, 81, 100];
console.log("Square rot of the Numbers: ", numbers.map(Math.sqrt));


//Example
// >= 75.0=> {id: 001, percentage: 92.7, stands: Yes},
const results = [
    {id: 001, percentage: 92.7},
    {id: 002, percentage: 87.9},
    {id: 003, percentage: 82.7},
    {id: 004, percentage: 62.7},
    {id: 005, percentage: 91.7},
    {id: 006, percentage: 59.7},
    {id: 007, percentage: 63.7}
]
function addStands(results) {
    return results.map( e => {
        e.stands = (e.percentage >= 75.0) ? 'Yes' : 'No';
        return e;
    });
}
console.log(addStands(results));


//Creating a Map();
const map1 = new Map();
console.log(map1);
//map():=> it is a Method for Array.
//Map():=> is a constructor and it is allows us to store key/value pair.

