"use strict";

//! Functions
let name = 'skilf';
console.log(`Happy birthday ${name}`);


//Normal function
greet(name);
function greet(name) {
    console.log(`Happy birthday ${name}`);
}


//IIFE(Immediately invoked function) function
let greet1 = (function (name) {
    console.log(`Happy birthday ${name}`);
})('Arindam');      //it does not need to call


//Arrow function
let greet2 = (name) => {
    console.log(`Happy birthday ${name}`);
    return (`Happy birthday ${name}`);
}
greet2('Arindam');


const myobj = {
    name: 'Arindam',
    game: function() {
        console.log("GTA");
        return "GTA";
    }
}
myobj.game();


let arr = ['fruits', 'vegetables', 'furniture'];
arr.forEach(function(element, index, array) {
    console.log(element, array, index);
});
//Scope
//In ES6 it does not matter where you call the function you can call the function before creating the function.

