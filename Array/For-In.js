const Student = {
    name: "Arindam",
    class: 12,
    age: 21
};
//use for...in which is based on object
for (let key in Student) {          //here keys act as index
    console.log(`${key} => ${Student[key]}`);
}


const Costs = {
    'iphone': 98,
    'samsung': 79,
    'sony': 89
};
for(let i in Costs) {
    let price = "$"+ Costs[i];
    console.log(`${i} : ${price}`);
}


//working with array
const arr = [34, 35, 36, 37, 38];
for(let i in arr) {
    console.log(arr[i]);
}


//working with String
const Company = 'VIRTUSA';
for(let i in Company) {
    console.log(Company[i]);
}


