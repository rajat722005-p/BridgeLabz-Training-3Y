// Initialize the counter
let count = 0;

// Function to increment the counter
function increment() {
    count++;
    console.log("Counter After Increment:", count);
}

// Function to decrement the counter
function decrement() {
    count--;
    console.log("Counter After Decrement:", count);
}

// Function demonstrating nested function scope
function counterDemo() {
    // Nested function accesses the count variable
    function showCount() {
        console.log("Current Count Inside Nested Function:", count);
    }

    // Call the nested function
    showCount();
}

// Simulate click events
increment();
increment();
increment();
decrement();

// Demonstrate nested function scope
counterDemo();

// Display the final counter value
console.log("Final Counter Value:", count);