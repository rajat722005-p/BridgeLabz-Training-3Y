// PART 1: INHERITANCE USING PROTOTYPES

// Parent constructor
function PersonPrototype(name) {
    this.name = name;
}

// Parent prototype method
PersonPrototype.prototype.showDetails = function () {
    console.log("Name:", this.name);
    console.log("Branch:", this.branch);
};

// Child constructor
function StudentPrototype(name, branch) {
    PersonPrototype.call(this, name);
    this.branch = branch;
}

// Establish inheritance
StudentPrototype.prototype = Object.create(PersonPrototype.prototype);
StudentPrototype.prototype.constructor = StudentPrototype;

// Create an object using prototypes
const student1 = new StudentPrototype("Rajat", "CSE");

console.log("Prototype Approach:");
student1.showDetails();


// PART 2: INHERITANCE USING ES6 CLASSES

// Parent class
class PersonClass {
    constructor(name) {
        this.name = name;
    }

    showDetails() {
        console.log("Name:", this.name);
        console.log("Branch:", this.branch);
    }
}

// Child class
class StudentClass extends PersonClass {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }
}

// Create an object using classes
const student2 = new StudentClass("Rajat", "CSE");

console.log("ES6 Class Approach:");
student2.showDetails();


// PART 3: COMPARE BOTH OBJECTS

console.log("Same name:", student1.name === student2.name);
console.log("Same branch:", student1.branch === student2.branch);