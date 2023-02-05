"use strict"

//! For-loop and while or do-while-loop
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let j =0;
// while (j < 10) {
//     console.log(j);
//     j++;
// }


// let k = 0;
// do {
//     console.log(k);
//     if (k === 5) {
//         break;
//     }
//     k++;
// } while (k < 10);


let i = 0;
do {
    if (i === 5) {
        continue;
    }
    console.log(i);
    i++;
} while (i < 10);
console.log("done");




