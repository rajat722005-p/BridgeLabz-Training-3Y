// Q8. Employee Salary Projection

// Declare the current salary and annual increment rate.
let currentSalary = 50000;
const annualIncrementRate = 10;

// Store the projected salaries.
const salaryProjection = [];

// Calculate the salary for each of the next five years.
for (let year = 1; year <= 5; year++) {
    currentSalary += currentSalary * (annualIncrementRate / 100);

    // Round the salary to the nearest whole number.
    currentSalary = Math.round(currentSalary);

    // Store the year and projected salary.
    salaryProjection.push({
        Year: year,
        "Projected Salary": currentSalary
    });
}

// Display the salary projection in a table.
console.table(salaryProjection);