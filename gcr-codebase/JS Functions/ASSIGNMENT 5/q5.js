// Parent constructor
function Person(name) {
    this.name = name;
}

// Method of Person
Person.prototype.showName = function () {
    console.log("Name:", this.name);
};

// Child constructor
function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

// Inherit from Person
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Method of Student
Student.prototype.showBranch = function () {
    console.log("Branch:", this.branch);
};

// Display both name and branch
Student.prototype.showDetails = function () {
    this.showName();
    this.showBranch();
};

// Create a student object
const student1 = new Student("Rajat", "CSE");

// Call methods
student1.showName();
student1.showBranch();
student1.showDetails();

// Check inheritance
console.log("Inherits from Person:", student1 instanceof Person);