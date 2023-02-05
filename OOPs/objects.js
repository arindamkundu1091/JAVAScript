//! Creating an Object
const person = {
    name: 'Dev',
    id: 1,
    marks: {
        PHY: 67,
        CHE: 85,
        MATH: 100,
        BIO: 97
    },
    details: function() {
        return `${person.name}  ${person.id}`;
    },
    info: () => {
        return `${person.marks.PHY}`;
    }
};
console.log(person.details());
console.log(person.info());


//! Object Constructor
function student(i, n) {
    this.id = i;
    this.name = n;
}
//? Exact code interpret in Browser Engine
// class student {
//     constructor(i, n) {
//         this.id = i;
//         this.name = n;
//     }
// }
let student1 = new student(1, 'Dev');
let student2 = new student(2, 'Raj');
console.log(student1.id);
console.log(student1.name);
console.log(student2.id);
console.log(student2.name);


//! Using Object.create()
const dev = {
    study: false,
    details: function() {
        return `Hi this is ${this.name}, I am Studying?: ${this.study}`;
    }
};
const obj = Object.create(dev);
obj.name = 'Dev';
obj.study = true;
obj.details();
console.log('details: ', obj.details());




