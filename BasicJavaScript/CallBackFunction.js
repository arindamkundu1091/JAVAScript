//! Call Back Function...

const students = [
    {name: "Dev", subject: "JS"},
    {name: "Rohan", subject: "JAVA"},
];

function enrollStudent(student, callback) {
    setTimeout(() => {
        students.push(student);
        callback();
    }, 1000);
}

function getStudents() {
    setTimeout(() => {
        let str ="";
        students.forEach(function(element) {
            str += `
                    <li>${element.name}_||_${element.subject}</li>`;
        });
        let list = document.getElementById('list');
        list.innerHTML = str;
    }, 500);   
}

let newStudent = {name: "Sunny", subject: "Python"};
enrollStudent(newStudent, getStudents);



