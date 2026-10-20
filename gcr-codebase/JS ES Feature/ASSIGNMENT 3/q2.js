"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("========== EMPLOYEE BONUS REPORT ==========");

for (const employee of employees) {
    try {
        // Validate employee information.
        if (
            employee === null ||
            typeof employee !== "object" ||
            employee.name === undefined ||
            employee.salary === undefined ||
            employee.years === undefined
        ) {
            throw new Error("Missing employee information.");
        }

        // Convert strings into numbers.
        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (
            !Number.isFinite(salary) ||
            !Number.isFinite(years) ||
            salary < 0 ||
            years < 0
        ) {
            throw new Error("Invalid salary or experience.");
        }

        // Calculate bonus based on experience.
        const bonus = years > 3
            ? salary * 0.10
            : salary * 0.05;

        const totalSalary = salary + bonus;

        console.log(`
Employee: ${employee.name}
Salary: ₹${salary.toFixed(2)}
Experience: ${years} years
Bonus: ₹${bonus.toFixed(2)}
Total Salary: ₹${totalSalary.toFixed(2)}
------------------------------
`);
    } catch (error) {
        console.log("Error:", error.message);
    }
}