"use strict"

//! String properties, methods and literals...
const name = "Arindam";
const greeting = "Good Morning";
console.log(greeting + ' ' +name);

let html;
html = "<h1> this is heading </h1>" +
        "<p> This is my para </p>";

html = html.concat(' this', ' str2');
console.log(html);
console.log(html.length);
console.log(html.toLocaleLowerCase());
console.log(html.toUpperCase());


console.log(html[1]);
console.log(html.indexOf('this'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(5));
console.log(html.endsWith('str2'));
console.log(html.includes('is'));
console.log(html.substring(0,7));       //it takes n-1 index as last index
console.log(html.slice(0, 7));  //it takes n-1 index as last index
console.log(html.slice(-7));    //'-' represents to slise from backward
console.log(html.split(' '));
console.log(html.replace('this', 'It'));        //replace only first literal


//Template of html in javascript using backtick
let fruit1 = 'Orange';
let fruit2 = 'Apple';
let myhtml = `Hello ${name}
            <h1> This is Heading</h1>
            <p> You like ${fruit1} and ${fruit2}`;
document.body.innerHTML = myhtml;

