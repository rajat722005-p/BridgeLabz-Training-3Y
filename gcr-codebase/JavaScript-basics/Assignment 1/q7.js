// Q7. Smart Guessing Game

// Generate a random secret number between 1 and 50.
const secretNumber = Math.floor(Math.random() * 50) + 1;

// Declare a test guess.
const userGuess = 25;

// Check the guess.
if (userGuess >= 1 && userGuess <= 50) {
    if (userGuess === secretNumber) {
        console.log("Correct guess!");
    } else if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
} else {
    console.log("Please enter a number between 1 and 50.");
}