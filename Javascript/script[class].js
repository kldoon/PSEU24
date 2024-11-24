class Vehicle {
    make = '';
    constructor() {
    }
}

class Car extends Vehicle {
    #engineSize = 2000;
    constructor(make, model, year) {
        super();
        // this.make = make;
        this.model = model;
        this.year = year;
        super.make = make;
    }

    set engineSize(size) {
        this.#engineSize = size;
    }

    set setMake(newMake) {
        this.make = newMake;
    }

    get getMake() {
        return this.make;
    }

    printCard() {
        console.log(`Car Make: ${this.make}\nCar Model: ${this.model}\nCar Year: ${this.year}\nEngine Size:${this.#engineSize}`);
    }
}

const car1 = new Car("BMW", "x5", 2023);
car1.year = 2022;

const car2 = new Car("reno", "Explorer", 2010);
car2.engineSize = 4000;
// car1.#engineSize = 1000;  // This is wrong because #engineSize is private
car2.setMake = 'Ford';
console.log(car2.getMake);


const arr = [car1, car2];
arr.forEach(car => {
    car.printCard();
})