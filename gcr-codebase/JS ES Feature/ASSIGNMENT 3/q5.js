"use strict";

// Part 1: Observe hoisting behavior.
console.log("========== ORIGINAL CODE ==========");

console.log(score);

announce();

var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";

startGame();

function startGame() {
    console.log(status);
}

// Output:
// undefined
// Game started
// ready

// Part 2: Corrected version.
console.log("\n========== CORRECTED CODE ==========");

const fixedScore = 50;
const fixedStatus = "ready";

function announceFixed() {
    console.log("Game started");
}

function startGameFixed() {
    console.log(fixedStatus);
}

console.log(fixedScore);
announceFixed();
startGameFixed();

// Part 3: Rewrite using arrow functions.
console.log("\n========== ARROW FUNCTIONS ==========");

const announceArrow = () => {
    console.log("Game started");
};

const startGameArrow = () => {
    console.log(fixedStatus);
};

console.log(fixedScore);
announceArrow();
startGameArrow();

// Hoisting notes:
// var declarations are hoisted and initialized with undefined.
// Function declarations can be called before their declaration.
// let and const remain in the Temporal Dead Zone until initialized.
// Arrow functions assigned to const cannot be called before initialization.