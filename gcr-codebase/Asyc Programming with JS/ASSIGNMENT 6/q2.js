// Synchronous execution starts
console.log("Start");

// setTimeout schedules a macrotask
setTimeout(() => {
    console.log("setTimeout callback (Macrotask)");
}, 0);

// Promise.then schedules a microtask
Promise.resolve().then(() => {
    console.log("Promise callback (Microtask)");
});

// This is a synchronous log
console.log("Synchronous log");

// End of synchronous execution
console.log("End");

// Explanation:
// 1. Synchronous statements execute first.
// 2. After synchronous execution, JavaScript processes microtasks.
// 3. Promise.then() callbacks are microtasks.
// 4. setTimeout() callbacks are macrotasks.
// Therefore, the Promise callback executes before the setTimeout callback.