"use strict";

// Correct ES6 version.
function demo(first, second) {
    let total = first + second;

    const record = {
        total: total
    };

    console.log("First Number:", first);
    console.log("Second Number:", second);
    console.log("Total:", total);

    // Deleting an object property is allowed.
    delete record.total;

    console.log("Record After Deletion:", record);
}

demo(5, 10);