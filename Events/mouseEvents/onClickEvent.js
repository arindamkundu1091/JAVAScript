
//? Click Event
//? using onClick
function clickEvent() {
    document.getElementById('cl1').innerText = 'Click Happend...';
};

//? using eventListener
document.getElementById('cl3').addEventListener('click', ()=> {
    document.getElementById('cl3').style.color = 'red';
});

//? using function
function changeColor(element, userColor) {
    element.style.color = userColor;
}

document.getElementById('btn').addEventListener('click', () => {
    document.getElementById('v2').value = document.getElementById('v1').value;
});

window.onclick = bodyColor();
function bodyColor() {
    document.getElementsByTagName("BODY")[0].style.backgroundColor = 'green';
}



