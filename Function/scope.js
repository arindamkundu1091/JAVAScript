//Global Scope: it can access or any one can access from anywhere.
//Local Scope: it can access from function inside.
//Block Scope: it can access from block inside.

//Global scope
let a = 23;       //Global Access or any one can access from anywhere
function fun() {
    console.log(a);
}
fun();

function update() {
    console.log(a);
    a = 10;     //Local Scope
    console.log(a);
}
//before function call
console.log(a)
//after function all
update();
console.log(a);

function add() {
    let b = 40;
    console.log(a+b);
}
add();


//Block Scope
let x = 'Hi';       //Global variable
function abc() {
    let y = 'Dev';      //Local variable
    console.log(x +' '+ y);
    if (y === 'Dev'){
        let z = 'Pal';       //Block variable
        console.log(x +' '+ y + ' ' + z);
    } else if(y === 'Debasish') {
        let c = 'Sahoo';
        console.log(x +' '+ y + ' ' + c);
    } else {
        console.log(x +' '+ y);
    }
}
abc();


