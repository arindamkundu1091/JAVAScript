/**
 * spread is a operator that is introduced in ES6 allow us to copy or a part of an array, object or string into another array.
 */
const n1 = [1, 2, 3, 4, 5];
const n2 = [6, 7, 8, 9, 10];

let n3 = n1.concat(n2);
console.log('n3: ',n3);

n3 = [...n1, ...n2];
console.log("n3: ", n3);

const sum = (x, y, z) => {
  return x + y + x;
};
console.log(sum(34, 56, 78));

const num = [34, 56, 78, 76];
console.log(sum(...num));

function fun(v, w, x, y, z) {
  return v + w + x + y + z;
}
const args = [0, 1];
console.log(fun(-1, ...args, 2, ...[3]));

const a = [[1], [2], [3]];
const b = [...a];
console.log('b: ', b);



