//! Parent, Child & Traversing DOM
/**
 * ? Node Types
 * * 1. element
 * * 2. attribute
 * * 3. text node
 * * 8. comment
 * * 9. document
 * * 10. docType
 */

let cont = document.querySelector('.no');
cont = document.querySelector('.container');
// console.log(cont.childNodes);
// console.log(cont.children);

let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
// console.log(nodeName);
// console.log(nodeType);

let container = document.querySelector('div.container');
// console.log(container);
// console.log(container.children);
// console.log(container.children[1].children);
// console.log(container.children[1].children[0].children);

// console.log(container.firstChild);
// console.log(container.firstElementChild);
// console.log(container.lastChild);
// console.log(container.lastElementChild);

// console.log(container.childElementCount);

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);



