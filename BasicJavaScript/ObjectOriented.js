//! Object Literal, Constructor and Object oriented...

// Object Literals...
let car = {
    name: "Maruti",
    topSpeed: 110,
    run: function () {
        console.log("Car is running");
    }
}

//Creating a constructor for car...
function generalCar(n, speed) {
    this.name = n;
    this.topSpeed = speed;
    this.run = function() {
        console.log(`${this.name} is running`);
    }
    this.analyze = function() {
        console.log(`${this.name} is difference than BMW by ${200-this.topSpeed} speed...`)
    }
}
let car1 = new generalCar("Nissan", 180);
let car2 = new generalCar("Maruti", 110);
// car2.analyze();
// car1.run();
console.log(car);


