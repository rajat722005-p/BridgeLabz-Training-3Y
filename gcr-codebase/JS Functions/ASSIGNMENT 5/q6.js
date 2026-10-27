// Person constructor
function Person(name) {
    this.name = name;
}

// Person prototype method
Person.prototype.showPerson = function () {
    console.log("Person Name:", this.name);
};

// Faculty constructor
function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

// Faculty inherits from Person
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

// Faculty prototype method
Faculty.prototype.showFaculty = function () {
    console.log("Department:", this.department);
};

// Professor constructor
function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

// Professor inherits from Faculty
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

// Professor prototype method
Professor.prototype.showProfessor = function () {
    console.log("Subject:", this.subject);
};

// Create a professor object
const professor1 = new Professor(
    "Dr. Sharma",
    "Computer Science",
    "JavaScript"
);

// Access methods from all three levels
professor1.showPerson();
professor1.showFaculty();
professor1.showProfessor();

// Check the prototype chain
console.log("Inherits from Person:", professor1 instanceof Person);
console.log("Inherits from Faculty:", professor1 instanceof Faculty);