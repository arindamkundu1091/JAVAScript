/**
 * some(): Determining if atleast one Array element is Pass a test
 */
let mark = [4, 5, 6, 7, 8, 9, 10, 3];


//using for loop
let lessthenFive = false;
for(let i = 0; i< mark.length; i++) {
    if(mark[i] < 5) {
        lessthenFive = true;
        break;
    }
}
console.log('Less than five: ',lessthenFive);


//using some method
lessthenFive = false;
lessthenFive = mark.some(e => e < 5);
console.log('Less than five: ',lessthenFive);



