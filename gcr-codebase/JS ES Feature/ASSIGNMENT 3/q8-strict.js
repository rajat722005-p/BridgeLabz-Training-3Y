"use strict";

// This code produces a SyntaxError because strict mode
// does not allow duplicate parameter names.
function demo(a, a) {
    total = 10;
    delete total;
}

demo(5, 10);