// Create an empty array for numbers
let numbers = [];

// Store numbers from 1 to 30 using a loop
for (let number = 1; number <= 30; number++) {
    numbers.push(number);
}

// Create an empty array for results
let results = [];

// Analyze each number
for (let number of numbers) {
    // Check if divisible by both 3 and 5
    if (number % 3 === 0 && number % 5 === 0) {
        results.push(`${number}: FizzBuzz`);
    } else if (number % 2 === 0) {
        // Check if the number is even
        results.push(`${number}: Even`);
    } else {
        // Otherwise, the number is odd
        results.push(`${number}: Odd`);
    }
}

// Display all results
console.log("Odd-Even Number Analyzer");
console.log("------------------------");
console.log(results.join("\n"));