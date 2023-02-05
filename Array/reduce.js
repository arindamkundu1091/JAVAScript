let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
for(let i =0; i<number.length; i++) {
    sum += number[i];
}
console.log(sum);

number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
sum = number.reduce((x, y) => { return x + y});
console.log(sum);


let ShoppingCart = [
    {product: 'iphone', qty: 1, price: 699},
    {product: 'Screen Protector', qty:1, price: 9.98},
    {product: 'memory Card', qty: 2, price:20.90}
];
let total = ShoppingCart.reduce((acc, cur) => {
    return acc + (cur.qty * cur.price);
}, 0);
console.log(total);


number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
sum = number.reduceRight((acc, cur) => {
    console.log('acc: ',acc, ',  cur: ',cur);
    return acc + cur
});
console.log(sum);

