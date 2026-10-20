// Do not add "use strict" to this file.

function demo(a, a) {
    console.log("Value of a:", a);

    // In non-strict mode, this creates an implicit global.
    total = 10;

    console.log("Total:", total);

    // The implicit global property can be deleted.
    console.log("Delete Result:", delete total);

    console.log("Total After Delete:", typeof total);
}

demo(5, 10);