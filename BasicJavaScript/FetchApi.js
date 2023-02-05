//! Fetch API...

// let fetchBtn = document.getElementById('fetchBtn');
// let content = document.getElementById('content');

// function getData() {

//     let url = "data.txt";
//     fetch(url).then((response)=> {
//         return response.text();
//     }).then((data)=>{console.log(data)});
// }


function getData() {

    let url = "https://api.github.com/users";
    fetch(url).then((response)=> {
        return response.json();
    }).then((data)=>{console.log(data)});
}
// getData();


function postData() {
    let url = "https://dummy.restapiexample.com/api/v1/create";
    let data = `{"name":"api123456","salary":"123","age":"23"}`;
    let params = {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response=> response.json())
    .then(data => console.log(data));
}
// postData();


