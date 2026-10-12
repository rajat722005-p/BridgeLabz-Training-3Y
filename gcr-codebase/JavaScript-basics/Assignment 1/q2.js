// Q2. Multi-Type Data Summary

// Declare variables of different data types.
const stringValue = "Rajat";
const numberValue = 21;
const booleanValue = true;
const arrayValue = ["HTML", "CSS", "JavaScript"];
const objectValue = { name: "Rajat", course: "B.Tech CSE" };
const nullValue = null;
let undefinedValue;

// Create a report showing each value and its type.
const dataSummary = [
    { Label: "String", Value: stringValue, Type: typeof stringValue },
    { Label: "Number", Value: numberValue, Type: typeof numberValue },
    { Label: "Boolean", Value: booleanValue, Type: typeof booleanValue },
    {
        Label: "Array",
        Value: arrayValue,
        Type: Array.isArray(arrayValue) ? "array" : typeof arrayValue
    },
    { Label: "Object", Value: objectValue, Type: typeof objectValue },
    {
        Label: "Null",
        Value: nullValue,
        Type: nullValue === null ? "null" : typeof nullValue
    },
    {
        Label: "Undefined",
        Value: undefinedValue,
        Type: typeof undefinedValue
    }
];

// Display the report using one console.table() statement.
console.table(dataSummary);