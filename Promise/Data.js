// async function FetchData() {     //// It is a process approach and it has no conditional approach so it is wrong...
//     const response = await fetch('https://fakestoreapi.com/products');
//     const Data = await response.json();
//     console.table(Data);
// }
// FetchData();


// It is conditional approach and light code so it is right code...
const product = fetch('https://fakestoreapi.com/products').then(res => res.json());

