//! Echma Script-6 classes and Inheritance...

class Employee {
    constructor(name, experience, division){
        this.name = name;
        this.experience = experience;
        this.division = division;
    }
    slogan() {
        return `I am ${this.name} and this company is the best.`;
    }
    joinningYear() {
        return 2020 - this.experience;
    }
    static add(a, b) {
        return a + b;
    }
}
// const obj1 = new Employee("Arindam", 21, "React");
// console.log(obj1.joinningYear());
// console.log(Employee.add(7, 9));

//Inheritance...
class Programmer extends Employee {
    constructor(name, division, experience, language, github) {
        super(name, division, experience);
        this.language = language;
        this.github = github;
    }
    favroiteLanguage() {
        if(this.language == "python") return "Python";
        return this.language;
    }
    static multiply(a, b){
        return a * b;
    }
}
let obj2 = new Programmer("Rohan", "React", 21, "JavaScript", "rohan1234");
console.log(obj2.favroiteLanguage());
console.log(Programmer.multiply(7, 9));
console.log(Programmer.add(7, 9));




