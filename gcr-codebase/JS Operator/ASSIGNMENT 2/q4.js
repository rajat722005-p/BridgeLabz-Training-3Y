// Generate 8 random scores between 30 and 100
let scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

// Find the highest and lowest scores
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

// Calculate the total score using reduce()
let totalScore = scores.reduce(
    (sum, score) => sum + score,
    0
);

// Calculate the average score
let averageScore = totalScore / scores.length;

// Find students who passed
let passedStudents = scores.filter(score => score >= 50);

// Calculate the number of failed students
let failedStudents = scores.length - passedStudents.length;

// Format student scores using map()
let formattedScores = scores.map(
    (score, index) => `Student ${index + 1}: ${score}`
);

// Display the performance report
console.log("Student Performance Report");
console.log("--------------------------");
console.log(formattedScores.join("\n"));
console.log("Highest Score:", highestScore);
console.log("Lowest Score:", lowestScore);
console.log("Average Score:", averageScore.toFixed(2));
console.log("Students Passed:", passedStudents.length);
console.log("Students Failed:", failedStudents);