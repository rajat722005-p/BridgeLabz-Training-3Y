// Constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Add a method to the prototype
Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

// Create two car objects
const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Tesla", "Model 3");

// Call the prototype method
car1.getDetails();
car2.getDetails();

// Check whether both objects share the same method
console.log("Same method shared:", car1.getDetails === car2.getDetails);