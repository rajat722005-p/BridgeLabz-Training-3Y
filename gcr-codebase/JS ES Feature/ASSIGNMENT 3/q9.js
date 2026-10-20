"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const auditErrors = [];

console.log("========== JSON AUDIT ==========");

for (let i = 0; i < rawData.length; i++) {
    const lineNumber = i + 1;

    try {
        // Pause execution here to inspect the current line.
        debugger;

        // Parse the JSON string.
        const parsedData = JSON.parse(rawData[i]);

        if (
            parsedData === null ||
            typeof parsedData !== "object" ||
            Array.isArray(parsedData)
        ) {
            throw new Error("Expected a JSON object.");
        }

        // Detect missing required keys.
        const missingKeys = [];

        if (parsedData.user === undefined) {
            missingKeys.push("user");
        }

        if (parsedData.age === undefined) {
            missingKeys.push("age");
        }

        if (missingKeys.length > 0) {
            throw new Error(
                `Missing keys: ${missingKeys.join(", ")}`
            );
        }

        // Validate the user field.
        if (
            typeof parsedData.user !== "string" ||
            parsedData.user.trim() === ""
        ) {
            throw new Error("Invalid user name.");
        }

        // Convert age to Number.
        const age = Number(parsedData.age);

        if (!Number.isFinite(age) || age < 0) {
            throw new Error("Invalid age.");
        }

        const cleanEntry = {
            user: parsedData.user,
            age: age
        };

        cleanData.push(cleanEntry);

        console.log(`Line ${lineNumber}: VALID`, cleanEntry);
    } catch (error) {
        const category = error instanceof SyntaxError
            ? "INVALID_JSON"
            : "INVALID_DATA";

        auditErrors.push({
            line: lineNumber,
            category: category,
            message: error.message
        });

        console.log(
            `Line ${lineNumber}: ${category} - ${error.message}`
        );
    }
}

// Filter users younger than 18.
const under18Users = cleanData.filter(user => user.age < 18);

console.log("\n========== FINAL REPORT ==========");
console.log("Clean Data:", cleanData);
console.log("Audit Errors:", auditErrors);
console.log("Valid Count:", cleanData.length);
console.log("Invalid Count:", auditErrors.length);
console.log("Users Under 18:", under18Users);