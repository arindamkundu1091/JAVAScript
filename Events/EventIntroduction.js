// ! DOM is access with javascript
// !In DOM the HTML element is defend as an object
// !HTML DOM methods are action
// !HYML DOM properties are values

//? Find to an HTML element(used Methods)
//* document.getElementById(id)
//* document.getElementByTagName(name)
//* document.getElementByClassName(className)

//? to update an HTML Element with javascript
//properties
//* element.innerHTML
//* element.attribute
//* element.style.property
//method
//* element. setAtribute(Atribute, value)


// setTimeout(() => {
//     let a = 'I am text from JS';
//     document.body.innerHTML = a;
// }, 2000);

function changeText() {
    document.getElementsByTagName("p")[0].innerHTML = 'I am text from JS';
}
function changeAgainText() {
    document.getElementsByTagName("p")[0].innerHTML = 'I am the text from HTML body';
}


