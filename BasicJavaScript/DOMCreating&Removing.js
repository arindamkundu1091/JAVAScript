//! DOM Creating, Removing and Replacing element

let element = document.createElement('li');
//Add a classname to the element
element.className = 'childul';
element.id = 'createdLi';
let text = document.createTextNode('I am a text node.');
element.appendChild(text);
element.setAttribute('title', 'myTitle');
// element.innerText = "Helo this is created li."
// element.innerHTML = "<b>Helo this is created li.</b>";
let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul);
// console.log(element);

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This a node for elem2.');
elem2.appendChild(tnode);
element.replaceWith(elem2);

let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));

myul.removeChild(document.getElementById('lui'));

let pr =elem2.getAttribute('class');
pr =elem2.hasAttribute('class');
elem2.removeAttribute('id');
elem2.setAttribute('title', 'myTitle');
// console.log(elem2, pr);



