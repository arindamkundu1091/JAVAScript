//! AJAX = Asynchronous JAVAScript XML...

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log("You have clicked the fetch button...");
    //Instantiate an xhr object...
    const xhr = new XMLHttpRequest();
    //Open the Object...send the get request...
    xhr.open('GET', "https://jsonplaceholder.typicode.com/todos/1", true);
    //use this for post request...
    // xhr.open('POST', "https://dummy.restapiexample.com/api/v1/create", true);
    // xhr.getResponseHeader('Content-type', 'application/json');
    //what to do on progress...
    xhr.onprogress = function() {
        console.log("on progress...");
    }
    //to show the ready state...
    xhr.onreadystatechange = function() {
        console.log("ready state: ",xhr.readyState);
    }
    //what to do when response is ready...
    xhr.onload = function() {
        if(this.status === 200) {
            console.log(this.responseText);
        } else {
            console.log("Error! some error occered...");
        }
        // console.log(this.responseText);
    }
    //send the request...
    // let params = `{"name":"test","salary":"123","age":"23"}`;
    // xhr.send(params);
    xhr.send();

    console.log("we are done...");
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log("You have clicked the fetch button...");
    //Instantiate an xhr object...
    const xhr = new XMLHttpRequest();
    //Open the Object...send the get request...
    xhr.open('GET', 'https://dummyjson.com/users', true);
    //what to do when response is ready...
    xhr.onload = function() {
        if(this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            let str ="";
            for (key in obj) {
                str += `
                <tr>
                    <th scope="row">${obj[key].id}</th>
                    <td>${obj[key].firstName}</td>
                    <td>${obj[key].lastName}</td>
                    <td>${obj[key].age}</td>
                </tr>`;
            }
            list.innerHTML = str;
        } else {
            console.log("Error! some error occered...");
        }
        // console.log(this.responseText);
    }
    //send the request...
    xhr.send();
    console.log("we are done...")
}


