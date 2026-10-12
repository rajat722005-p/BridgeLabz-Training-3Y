// Q9. Random Math Quiz Generator

// Generate two random integers between 1 and 20.
const firstNumber = Math.floor(Math.random() * 20) + 1;
const secondNumber = Math.floor(Math.random() * 20) + 1;

// Select a random arithmetic operator.
const operators = ["+", "-", "*", "/"];
const operator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

// Calculate the answer using a switch statement.
switch (operator) {
    case "+":
        correctAnswer = firstNumber + secondNumber;
        break;

    case "-":
        correctAnswer = firstNumber - secondNumber;
        break;

    case "*":
        correctAnswer = firstNumber * secondNumber;
        break;

    case "/":
        correctAnswer = Number(
            (firstNumber / secondNumber).toFixed(2)
        );
        break;

    default:
        console.log("Invalid operator.");
}

// Declare a test answer. Change this value to test the quiz.
const userAnswer = 10;

// Check whether the user's answer is correct.
const isAnswerCorrect = Number(userAnswer) === correctAnswer;

// Display the question and result.
console.log(`Question: ${firstNumber} ${operator} ${secondNumber} = ?`);
console.log(`Your answer: ${userAnswer}`);
console.log(
    isAnswerCorrect ? "Correct answer!" : "Incorrect answer."
);
console.log(
    `Correct answer: ${
        operator === "/" ? correctAnswer.toFixed(2) : correctAnswer
    }`
);