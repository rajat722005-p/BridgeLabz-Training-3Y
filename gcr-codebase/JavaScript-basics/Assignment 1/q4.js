// Q4. Academic Performance Evaluator

// Marks of five subjects, each out of 100.
const marks = [88, 92, 79, 85, 90];

// Calculate total marks.
const totalMarks = marks.reduce((total, mark) => total + mark, 0);

// Calculate average and overall percentage.
const averageMarks = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

console.log(`Average marks: ${averageMarks.toFixed(2)}`);
console.log(`Overall percentage: ${percentage.toFixed(2)}%`);

// Check whether any subject has marks below 35.
if (marks.some((mark) => mark < 35)) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
} else {
    console.log("Detained");
}