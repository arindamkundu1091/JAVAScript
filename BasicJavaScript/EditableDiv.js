//! Editable Div...

/**
 * ? You have to create a div and inject it into a page Which contain heading.....
 * * Whenever somaeone clicks on the div, it should be converted into an editable item. Whenever clicks away (blur). save the item into local storage.
 */

let divElement = document.createElement('div');
let val = localStorage.getItem('text');
let text;
if(val == null){
    text = document.createTextNode('This is a Editable Div...Click to Edit...');
} else {
    text = document.createTextNode(val);
}
divElement.appendChild(text);
divElement.setAttribute('class', 'editableElem');
divElement.setAttribute('id', 'elem');
divElement.setAttribute('style', 'border: 1px solid black; height: 50px; margin: 15px; padding: 23px');
let container = document.querySelector('.container');
let firstDiv = document.getElementById('myfirst');

//Insert the element before the id firstDiv
container.insertBefore(divElement, firstDiv);

divElement.addEventListener('click', function () {
    let noTextAreas = document.getElementsByClassName('textArea').length;
    if(noTextAreas == 0){
        let html = divElement.innerHTML;
        divElement.innerHTML = `<textarea class="form-control textArea" placeholder="Leave a comment here" id="textArea" style=" height: 7px; width: 1375px; margin: 7px; padding: 15px">${html}</textarea>`;
    }
    let textArea = document.getElementById('textArea');
    textArea.addEventListener('blur', function () {
        divElement.innerHTML = textArea.value;
        localStorage.setItem('text', divElement.innerHTML);
    });
});



