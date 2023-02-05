//! Prototype Inheritance....

const proto = {
    slogan: function () {
        return "This company is the best";
    },
    changeName: function(name) {
        this.name = name;
    }
};
//This is new syntax to create object...
// const obj1 = Object.create(proto);
// obj1.name = "Arindam";
// obj1.role = "Programmer";
// obj1.changeName("ArindamKundu");
// console.log(obj1.name);

//This is old syntax to create object...to make changes we have to use writable: true...
// const obj2 = Object.create(proto, {
//     name: {value: "Arindam", writable: true},
//     role: {value: "Programmer"}
// });
// obj2.changeName("ArindamKundu");
// console.log(obj2.name);

//Employee Constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}
Employee.prototype.slogan = function() {
    return `This is a the best. Regards ${this.name}`;
};
let obj3 = new Employee("Arindam", 34999, 27);
console.log(obj3.slogan());

//Programmer Constructor inherited Employee
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

//Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

//Manually set the constructor
Programmer.prototype.constructor = Programmer;
const obj4 = new Programmer("Rohan", 24999, 13, "JAVA");
console.log(obj4);
console.log(obj4.slogan());



