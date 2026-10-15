// Declare a global variable
let bonus = 5000;

// Function to calculate salary
function calculateSalary() {
    // Declare local variables
    let salary = 40000;
    let isPermanent = true;

    // Calculate total salary
    let totalSalary = salary;

    // Add bonus if the employee is permanent
    if (isPermanent) {
        totalSalary += bonus;
    }

    console.log("Is Permanent:", isPermanent);
    console.log("Total Salary:", totalSalary);

    // Change the local variable
    isPermanent = false;

    // Recalculate the salary
    totalSalary = salary;

    if (isPermanent) {
        totalSalary += bonus;
    }

    console.log("After Changing isPermanent:", isPermanent);
    console.log("Updated Total Salary:", totalSalary);
    console.log("Global Bonus Inside Function:", bonus);
}

// Call the function
calculateSalary();

// Display the global bonus outside the function
console.log("Global Bonus Outside Function:", bonus);