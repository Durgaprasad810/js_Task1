class Vehicle {
    constructor(model, year) {
      this.model = model;
      this.year = year;
      this.speed = 0;
    }
    start() {
      console.log(`${this.year} ${this.model} is starting.`);
    }
    accelerate(speedIncrement) {
      this.speed += speedIncrement;
      console.log(`Accelerating to ${this.speed} mph.`);
    }
    brake(speedDecrement) {
      this.speed -= speedDecrement;
      console.log(`Slowing down to ${this.speed} mph.`);
    }
  }
  class Car extends Vehicle {
    constructor(model, year, fuelType) {
      super(model, year);
      this.fuelType = fuelType;
    }
    refuel() {
      console.log(`Refueling the ${this.year} ${this.model} with ${this.fuelType} fuel.`);
    }
  }
  function drive(vehicle) {
    vehicle.start();
    vehicle.accelerate(30);
    vehicle.brake(10);
  }
  const myCar = new Car("Camry", 2022, "Gasoline");
  drive(myCar);
  myCar.refuel(); 