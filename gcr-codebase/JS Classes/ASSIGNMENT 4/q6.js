// Q6: Employee Management System

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary
    }

    // Calculate annual salary
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Calculate annual payout including bonus
    applyBonus(percent) {
        const annualSalary = this.getAnnualSalary();

        return annualSalary + (annualSalary * percent / 100);
    }

    // Display employee details
    displayDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Department: ${this.department}`;
    }
}

// Create five employee objects
const employees = [
    new Employee(101, "Aman", "IT", 50000),
    new Employee(102, "Priya", "HR", 40000),
    new Employee(103, "Rahul", "Finance", 45000),
    new Employee(104, "Neha", "Marketing", 35000),
    new Employee(105, "Karan", "IT", 60000)
];

// Define the bonus percentage
const bonusPercent = 10;

// Calculate annual salary and bonus payout for every employee
console.log("Employee Annual Salary Details:\n");

employees.forEach(employee => {
    console.log(employee.displayDetails());

    console.log(
        "Annual Salary: ₹" + employee.getAnnualSalary().toFixed(2)
    );

    console.log(
        "Annual Payout with Bonus: ₹" +
        employee.applyBonus(bonusPercent).toFixed(2)
    );

    console.log("------------------------------");
});

// Use reduce() to calculate total annual payout including bonus
const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.applyBonus(bonusPercent),
    0
);

console.log(
    "\nTotal Annual Company Payout: ₹" +
    totalAnnualPayout.toFixed(2)
);