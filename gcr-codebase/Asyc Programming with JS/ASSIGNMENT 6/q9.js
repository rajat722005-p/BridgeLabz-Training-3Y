// Predicted output order:
// 1. Script start
// 2. Script end
// 3. Promise callback
// 4. Timeout callback

console.log("Script start");

// Schedule a macrotask
setTimeout(() => {
    console.log("Timeout callback");
}, 0);

// Schedule a microtask
Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Script end");

// Explanation:
// Synchronous statements execute first.
// Promise.then() schedules a microtask.
// setTimeout() schedules a macrotask.
// Once the synchronous code finishes, JavaScript processes
// pending microtasks before moving to the next macrotask.