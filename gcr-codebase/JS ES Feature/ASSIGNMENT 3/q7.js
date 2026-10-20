"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];

const num1 = 25;
const num2 = 0;

// Custom error classes.
class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

class CalculationError extends Error {
    constructor(message) {
        super(message);
        this.name = "CalculationError";
    }
}

// Perform the requested calculation.
function calculate(operation, first = num1, second = num2) {
    switch (operation) {
        case "add":
            return first + second;

        case "divide":
            if (second === 0) {
                throw new CalculationError(
                    "Division by zero is not allowed."
                );
            }
            return first / second;

        case "power":
            return first ** second;

        case "root":
            if (first < 0) {
                throw new CalculationError(
                    "Square root of a negative number is not supported."
                );
            }
            return Math.sqrt(first);

        case "subtract":
            return first - second;

        default:
            throw new InvalidOperationError(
                `Unknown operation: ${operation}`
            );
    }
}

const successfulResults = [];
const failedOperations = [];

// Include multiply to test invalid-operation handling.
const testOperations = [...operations, "multiply"];

console.log("========== SMART CALCULATOR ==========");
console.log(`Number 1: ${num1}`);
console.log(`Number 2: ${num2}`);

for (const operation of testOperations) {
    try {
        const result = calculate(operation);

        successfulResults.push({ operation, result });

        console.log(`${operation.toUpperCase()}: ${result}`);
    } catch (error) {
        failedOperations.push({
            operation: operation,
            error: error.message
        });

        console.log(
            `${operation.toUpperCase()} ERROR: ${error.name} - ${error.message}`
        );
    }
}

console.log("\n========== FINAL SUMMARY ==========");
console.log("Successful Operations:", successfulResults.length);
console.log("Failed Operations:", failedOperations.length);
console.log("Results:", successfulResults);
console.log("Errors:", failedOperations);

// Test a negative square root separately.
try {
    calculate("root", -25);
} catch (error) {
    console.log("Negative Root Test:", error.message);
}