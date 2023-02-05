//! Object Prototypes...

//Object literal: Object.prototype
//? never used Object.prototype instead of use your own obj.prototype...
let obj = {
    name: "Arindam",
    age: 21,
    address: "Asansol"
};

function Obj(givenName) {
    this.name= givenName;
}
Obj.prototype.getName = function () {
    return this.name;
}
Obj.prototype.setName = function(newName) {
    return this.name = newName;
}
let obj2 = new Obj("Arindam");
obj2.setName("Kundu");
obj2.getName();
// console.log(obj2);




