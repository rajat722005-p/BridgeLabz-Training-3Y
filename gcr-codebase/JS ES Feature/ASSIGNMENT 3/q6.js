"use strict";

// Default number of rows.
let limit = 5;

// prompt() works in a browser; Node.js uses the default value.
if (typeof prompt === "function") {
    const input = prompt("Enter number of rows (default: 5):");

    if (input !== null && input.trim() !== "") {
        const userLimit = Number(input);

        if (Number.isInteger(userLimit) && userLimit > 0) {
            limit = userLimit;
        } else {
            console.log("Invalid input. Using default: 5");
        }
    }
}

console.log("========== LET VERSION ==========");

// Generate the pyramid using let.
for (let row = 1; row <= limit; row++) {
    let pattern = "";

    for (let column = 1; column <= row; column++) {
        pattern += "* ";
    }

    console.log(pattern.trim());
}

// Set breakpoints inside the loops to inspect row, column and pattern.

// Repeat the pattern using var to observe its scope.
console.log("\n========== VAR VERSION ==========");

for (var row = 1; row <= limit; row++) {
    var pattern = "";

    for (var column = 1; column <= row; column++) {
        pattern += "* ";
    }

    console.log(pattern.trim());
}

// var is not block-scoped, so row remains accessible here.
console.log("Value of row after loop:", row);

// Strict mode catches undeclared variables.
// Example: total = 10; // ReferenceError