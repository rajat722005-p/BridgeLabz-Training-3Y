// Store department names and their performance scores
const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

// Display the report heading
console.log("Department Performance Report");
console.log("------------------------------");

// Evaluate each department
for (let i = 0; i < departments.length; i++) {
    // Get the department name and score
    let departmentName = departments[i][0];
    let score = departments[i][1];
    let performance;

    // Evaluate performance using nested if-else conditions
    if (score >= 90) {
        performance = "Excellent";
    } else {
        if (score >= 75) {
            performance = "Good";
        } else {
            if (score >= 60) {
                performance = "Average";
            } else {
                performance = "Needs Improvement";
            }
        }
    }

    // Display the department's performance
    console.log(
        `${departmentName}: Score = ${score}, Performance = ${performance}`
    );
}