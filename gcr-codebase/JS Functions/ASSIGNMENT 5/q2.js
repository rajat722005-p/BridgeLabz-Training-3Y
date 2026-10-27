```javascript
// Function to apply an operation to an array
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

// Function to double a number
function doubleNumber(number) {
    return number * 2;
}

// Function to square a number
function squareNumber(number) {
    return number * number;
}

const numbers = [1, 2, 3, 4];

// Double each number
console.log("Doubled Numbers:", applyOperation(numbers, doubleNumber));

// Square each number
console.log("Squared Numbers:", applyOperation(numbers, squareNumber));
```
