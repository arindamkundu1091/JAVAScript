//! Local & Session Storage
//? In Local Storage...
//? Sets a key value pair inside of localStoreage...
localStorage.setItem('Name', 'Arindam');
localStorage.setItem('Name2', 'Dev');

//? Clear the entire local Storage...
// localStorage.clear();

//? Clear a particular key value pair...
// localStorage.removeItem('Name2');

//? Retrive an item from localStorage...
let name = localStorage.getItem('Name');
console.log(name);

//? To store an array in localstorage...
let arr = ['Apple', 'Mango', 'Orange', 'Banana'];
localStorage.setItem('Fruit', JSON.stringify(arr));
let fruit = JSON.parse(localStorage.getItem('Fruit'));
console.log(fruit);


//? In Session Storage...
sessionStorage.setItem('sessionName', 'sArindam');
sessionStorage.setItem('sessionName2', 'sDev');
sessionStorage.setItem('sessionFruit', JSON.stringify(arr));



