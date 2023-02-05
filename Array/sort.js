let number = [12, 41, 26, 11, 76, 34, 90, 18, 54];
number.sort();
console.log('Number: ', number);


number = [12, 41, 26, 11, 76, 34, 90, 18, 54];
number.sort((a, b) => {
    if(a > b) return -1;
    if(a < b) return 1;
    return 0;
});
console.log(number);


let animal = ['bull', 'Dog', 'cat', 'elephant', 'bee', 'ant'];
animal.sort();
console.log(animal);


let employees = [
    {name: 'Azim', salary: 76000, hireDate: "July 01, 2023"},
    {name: 'anjali', salary: 75000, hireDate: "August 15, 2023"},
    {name: 'Avijit', salary: 78000, hireDate: "Decembar 12, 2023"},
    {name: 'Rumana', salary: 78000, hireDate: "June 07, 2023"},
    {name: 'Jit', salary: 78000, hireDate: "July 12, 2023"}
];
employees.sort((e1, e2) => {e1.salary - e2.salary});
console.log(employees);

employees.sort((e1, e2) => {
    let a = e1.name.toUpperCase();
    let b = e2.name.toUpperCase();
    // if(a > b) return 1;
    // if(a < b) return -1;
    // return 0;
    return a == b ? 0 : a > b ? 1 : -1;
});
console.log(employees);

employees.sort((e1, e2) => {
    let a = new Date(e1.hireDate);
    let b = new Date(e2.hireDate);
    return a - b;
});
console.log(employees);


