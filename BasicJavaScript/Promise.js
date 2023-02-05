//! Promises...

// ?Promise--
// *resolve
// *reject
// *pending

function fun1() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const error = true;
            if(!error) {
                console.log("Your promise has resolved...");
                resolve();
            } else {
                console.log("Your promise has not been resolved...");
                reject("There is some error...");
            }
        }, 2000)
        
    });
}
fun1().then(function() {
    console.log("Thank you...")
}).catch(function(error) {
    console.log("I am sorry...", error);
});



const students = [
    {name: "Dev", subject: "JS"},
    {name: "Rohan", subject: "JAVA"},
];

function enrollStudent(student) {
    return new Promise(function(resolve, reject) {
        let error = false;
        setTimeout(() => {
            if(!error) {
                students.push(student);
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
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
    }, 5000);   
}

let newStudent = {name: "Sunny", subject: "Python"};
enrollStudent(newStudent).then(getStudents()).catch((error)=>console.log(error));



