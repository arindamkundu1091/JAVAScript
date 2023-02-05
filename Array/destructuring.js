//Aray Destructuring

const Stack = ['React', '.NET', 'JSP', 'pySpark' ,'Hadoop'];

//old way
// const js = Stack[0];
// const C_Sharp = Stack[1];
// const java = Stack[2];
// const py = Stack[3];
// const BigData = Stack[4];

//new way
const [js, _Sharp, java, py, BigData] = Stack;

function calculation(a, b) {
    const add = a + b;
    const sub = a - b;
    const mul = a * b;
    const div = a / b;
    return [add, sub, mul, div];
}
const [add, sub, mul, div] = calculation(4,7);
console.log(add);
console.log(sub);
console.log(mul);
console.log(div);


//Object destructuring

const StudentObj = {
    name: 'Dev Pal',
    dept: 'CSE',
    roll: 12
};
// Old Way
const details = (ArgsObj) => {
    return `My Name is ${ArgsObj.name} and I am Student of ${ArgsObj.dept}, my Roll no. is ${ArgsObj.roll}.`
};
console.log(details(StudentObj));
//New Way
const info = ({name, dept, roll}) => {return `My Name is ${name} and I am Student of ${dept}, my Roll no. is ${roll}.`};
console.log(info(StudentObj));

const Stu = {
    name: 'Dev Pal',
    clg: 'JU',
    dept: 'CSE',
    roll: 12,
    marks: {
        sem1: 'A',
        sem2: 'B',
        sem3: 'A+',
        sem4: 'AA',
        sem5: 'A+',
        sem6: 'B+',
        sem7: 'A',
        sem8: 'A+'
    }
};

const result = ({clg, roll, marks:{sem4}}) => {
    return `College: ${clg}, roll: ${roll}, marks: ${sem4}`
};
console.log(result(Stu));

