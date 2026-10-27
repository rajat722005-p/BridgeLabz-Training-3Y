// Function to display the end message
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Function that accepts a callback
function greetUser(name, callback) {
    console.log(`Hello ${name}`);

    console.log("Executing callback...");
    callback();
}

// Call the function
greetUser("Rajat", showEndMessage);