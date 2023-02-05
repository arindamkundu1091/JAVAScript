//! Need to pass atleast one argument
//! Always remain in last

// const sum = (a, b) => {
//     return a + b;
// }
console.log(sum(2, 4, 5, 6, 7, 8));
console.log(sum( 6, 7, 8));
console.log(sum(5, 6, 7, 8));

function sum(...input){
    let x = 0;
    for(let i of input){
        x +=i;
    }
    return x;
}


// function sum(a, ...input, b){   //error
//     return x;
// }
// function sum(...input, b){      //error
//     return x;
// }
// function sum(a, ...input){      //okk
//     return x;
// }
