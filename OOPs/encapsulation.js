//! Encapsulation...
class Computer {
    constructor(id, name, cost) {
        //properties
        this.id = id;
        this.name = name;
    }
    //methods
    add_cost(cost) {
        this.cost = cost;
    }
    //methods
    details() {
        console.log(`Id: &{this.id}  Name: ${this.name}  Cost: ${this.cost}`);
    }
}
//Assign the value using constructor
let hp = new Computer(1, 'OMEN');
let acer = new Computer(2, 'NITRO');
//Assign the value using method
hp.add_cost(123000);
acer.add_cost(125000);
//Calling the method
hp.details();
acer.details();


