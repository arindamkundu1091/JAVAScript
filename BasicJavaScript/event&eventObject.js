//! Event and Event Object

document.getElementById('heading').addEventListener('click', function (e) {
    console.log('You have clicked Heading');
    let variable;
    variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
    variable = Array.from(e.target.classList);
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;

    // console.log(variable);
    // location.href = './index.html';
});





