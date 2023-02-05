/**
 * every() : Determining if all Array element is Pass a test
 */

let numbers = [1, 2, 0, 4, 5, 6, ,7, 8];
let result = true;


//using for loop
for(let i = 0; i<numbers.length; i++) {
    if(numbers[i] <= 0) {
        result = false;
        break;
    }
}
console.log('result: ', result);


//using every method
result = numbers.every(e => {       //it will return a boolean value not an element
    return e > 0;
});
console.log('result: ', result);


let num = [12, 34, 56, 98, 34, 56, 23, 78, 35, 90, 108, 59];
let range = {
    min: 0,
    max: 100
};
result1 = num.every(e => {
    return (e>=range.min && e<=range.max);
});
let msg = result1 ? 'With in range' : 'Out of range';
console.log('Messege: ', msg);


result2 = num.every(e => {
    return (e>=this.min && e<=this.max);
}, range);
let msg1 = result2 ? 'With in range' : 'Out of range';
console.log('Messege: ', msg1);


//Example 1(Data type checking)
function dCheck(arr, dType) {
    return arr.every(e => {
        return typeof(e) === dType;
    }, dType);
}
console.log('String checking is: ', dCheck(['dev', 'arr', 'js', '2'], 'string'));
console.log('Number checking is: ', dCheck([2, 4, 5, 6, 7], 'number'));
console.log('Bool checking is: ', dCheck([false, true, 1, 0], 'boolean'));




