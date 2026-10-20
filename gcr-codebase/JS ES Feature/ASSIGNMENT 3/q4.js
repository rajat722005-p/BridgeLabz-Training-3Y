"use strict";

// Original code: assigning to an undeclared variable causes an error.
function brokenMessage() {
    greeting = "Welcome";
    console.log(greeting);
}

try {
    brokenMessage();
} catch (error) {
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);
}

// Corrected code: declare the variable before using it.
function showMessage() {
    const greeting = "Welcome";

    // Set a breakpoint here and add greeting to the Watch panel.
    debugger;

    console.log(greeting);
}

showMessage();