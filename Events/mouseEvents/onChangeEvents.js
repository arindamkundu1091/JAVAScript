
function changeCase(element) {
    element.value = element.value.toUpperCase();
}


function showValue(value) {
    alert("The value is: " + value)
}


document.getElementById('dept').addEventListener('change', () => {
    let val = document.getElementById('dept').value;
    alert("Selected value is: " + val);
});



