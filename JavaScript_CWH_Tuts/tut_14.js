console.log("This is a OOPS tutorial");
let car = {
    carName: 'maruti 800',
    carSpeed: 89,
    run: function () {
        console.log("Car is running...");
    }

}

//We have already seen costructor like these:
// new Date();

// Creating a constructor for cars
function GeneralCar(carName, carSpeed) {
    this.carName = carName;
    this.carSpeed = carSpeed;
    this.run = function () {
        console.log(`${this.carName} is running...`);
    }

    this.analyze = function () {
        console.log(`This car is slower by ${200 - this.carSpeed} km/H than mercedes.`)
    }
}

car1 = new GeneralCar("Nissan", 185);
car2 = new GeneralCar("Maruti Aulto", 80);
car1.run();
car1.analyze();
car2.run();
console.log(car);