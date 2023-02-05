//! Inheritance...
//Base class...
class person {
    constructor(name) {
        this.name = name;
    }
    details() {
        return `Name: ${this.name}`;
    }
}
//Derived class...
class student extends person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    details() {
        return (`Student id: ${this.id}    Student ${super.details()}`);
    }
}
class btechStudent extends person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    details() {
        return (`Student id: ${this.id}    Student ${super.details()}`);
    }
}
const stu1 = new student('Dev', 12);
console.log(stu1.details());

class Animal {
    eat() {
        console.log('Eating')
    }
}
class Dog extends Animal {
    bark() {
        console.log('Barking')
    }
}
class BabyDog extends Dog {
    weep() {
        console.log('Weeping')
    }

}

let obj1 = new BabyDog();
obj1.eat()
obj1.bark()
obj1.weep()


