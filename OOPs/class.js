//! Class of a js file
class Emp {
    //? Initialize an object
    constructor(i, n) {
        this.id = i;
        this.name = n;
    }
    //? methods
    details() {
        document.getElementById('i1').innerText = "Id: " + this.id;
        document.getElementById('n1').innerText = "Name: "+ this.name;
    }
}
let obj1 = new Emp(10, 'Dev');
let obj2 = new Emp(11, 'Arun');
// obj1.details();
// obj2.details();


//* Another way to declare a class
let Student = class{
     //? Initialize an object
    constructor(i, n) {
        this.id = i;
        this.name = n;
    }
    //? methods
    details() {
        console.log(`${this.id}  ${this.name}`);
    }
};
let stu1 = new Student(123, 'Raju');
let stu2 = new Student(4, 'Rahul');
// stu1.details();
// stu2.details();


function Computer(id, name, cost) {
    this.id = id;
    this.name = name;
    this.cost = cost;
}
//? Actual code that is executedm in Browser
// class Computer {
//     constructor(id, name, cost) {
//         this.id = id;
//         this.name = name;
//         this.cost = cost;
//     }
//     details() {
//         console.log(`Name: ${this.name}  Cost: ${this.cost}  Id: ${this.id}`);
//     }
// }
Computer.prototype.details = function() {
    console.log(`Name: ${this.name}  Cost: ${this.cost}`);
}
Computer.prototype.info = function() {
    console.log(`Name: ${this.name}  Id: ${this.id}`);
}
let hp = new Computer(1, 'OMEN', 123000);
let acer = new Computer(2, 'NITRO', 125000);
hp.details();
hp.info();
acer.details();
acer.info();


//! Getter and Setter...
class car {
    constructor(name) {
        this.name = name;
    }
}

class car2 {
    constructor(brand) {
        this.name = brand
    }
    get cname() {
        return this.name;
    }
    set cname(x) {
        this.name = x
    }
}

let mycar = new car2('ford');
console.log(mycar.cname)


let student = class {
    constructor(i, n) {
        this.id = i;
        this.name = n;
    }

    get sname() {
        return this.name;
    }
    set sname(x) {
        this.name = x
    }
    //methods
    details() {
        console.log(`${this.id}  ${this.name}`)
    }
}

stu1 = new student(123, 'raju');//RAJU

stu1.name = 'RAJU'

stu1.details();


