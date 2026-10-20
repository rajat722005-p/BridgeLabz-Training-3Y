"use strict";

// Part 1: Original code.
console.log("========== ORIGINAL CODE ==========");

function outer() {
    // Set a breakpoint here to inspect outer's count.
    console.log(count);

    var count = 5;

    function inner() {
        // The local count shadows outer's count.
        // Set a breakpoint here to inspect inner's count.
        console.log(count);

        var count = 10;
    }

    inner();
}

outer();

// Expected output:
// undefined
// undefined

// Part 2: Convert the inner function into an arrow function.
console.log("\n========== ARROW FUNCTION VERSION ==========");

function outerArrow() {
    console.log(count);

    var count = 5;

    const innerArrow = () => {
        // This local variable still shadows the outer count.
        console.log(count);

        var count = 10;
    };

    innerArrow();
}

outerArrow();

// Part 3: Simple closure example.
console.log("\n========== CLOSURE EXAMPLE ==========");

function createCounter() {
    let count = 0;

    // The inner function remembers its outer variable.
    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Debugging:
// Set breakpoints inside outer(), inner(), and innerArrow().
// Inspect the Call Stack and the local variables of each function.
// The two count variables in the original example are separate.