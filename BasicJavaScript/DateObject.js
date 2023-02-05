//! Date Object...

let today = new Date();
let otherDate = new Date('8-4-2003 04:54:08');
otherDate = new Date('June 19 19776 12:20');
otherDate = new Date('09/01/2001 7:10');
console.log(otherDate);

let a;
a = otherDate.getDay();
a = otherDate.getMinutes();
a = otherDate.getHours();
a = otherDate.getSeconds();
a = otherDate.getTime();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
console.log(a);
otherDate.setDate(23);
otherDate.setMonth(7);
otherDate.setFullYear(2023);
otherDate.setMinutes(10);
otherDate.setHours(23);
otherDate.setSeconds(90);
console.log(otherDate);


