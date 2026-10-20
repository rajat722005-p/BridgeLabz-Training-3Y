"use strict";

const apiData = [
    "25", "true", "false", "NaN", " ", "100px", "3.14",
    null, undefined
];

const validNumbers = [];
const invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];

    // Convert the value into three different forms.
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    // Blank strings are treated as invalid numeric data.
    const isBlank = typeof value === "string" && value.trim() === "";

    if (!isBlank && Number.isFinite(numberValue)) {
        validNumbers.push(numberValue);
    } else {
        invalidNumbers.push(value);
    }

    // Print the conversion report.
    console.log(`\nItem ${i + 1}`);
    console.log("Original Value:", value);
    console.log("Number:", numberValue);
    console.log("Boolean:", booleanValue);
    console.log("String:", stringValue);
}

// Print final results.
console.log("\n========== FINAL REPORT ==========");
console.log("Valid Numbers:", validNumbers);
console.log("Invalid Values:", invalidNumbers);
console.log("Total Valid:", validNumbers.length);
console.log("Total Invalid:", invalidNumbers.length);