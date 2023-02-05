"use strict"

//! if - else...
let age = 39;
if (age == 19) {        //to check only value
    console.log("Age is 19");
} else if(age == 65) {
    console.log("Age is 65");
} else {
    console.log("Age is not 19");
}

const myage = '39';
if (myage === 19) {     //to check both value and type
    console.log("Age is 19");
} else if(myage === 65) {
    console.log("Age is 65");
} else {
    console.log("Age is not 19");
}

const bage = 39;
if (bage != 19) {
    console.log("Age is 19");
} else if(bage == 65) {
    console.log("Age is 65");
} else {
    console.log("Age is not 19");
}

const vari = 34;
if(typeof vari != undefined) {
    console.log("vari is present");
} else {
    console.log("vari is undefined");
}

const doesdrive = true;
if(doesdrive && age >= 18) {
    console.log("You can drive");
} else {
    console.log("you can not drive");
}


//Ternary operator
console.log(age == 45? "age is 45" : "age is not 45");


//Swtch-case statement
switch (age) {
    case 18:
        console.log("you are 18");
        break;
    case 28:
        console.log("you are 28");
        break;
    case 38:
        console.log("you are 38");
        break;
    default:
        console.log("you are not");
        break;
}

