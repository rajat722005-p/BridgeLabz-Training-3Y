"use strict";

// Add a custom myMap method to the Array prototype
Object.defineProperty(Array.prototype, "myMap", {
    value: function (callback, thisArg) {
        // Validate the callback
        if (typeof callback !== "function") {
            throw new TypeError("Callback must be a function");
        }

        const array = Object(this);
        const length = array.length >>> 0;
        const result = new Array(length);

        // Apply the callback to each existing element
        for (let index = 0; index < length; index++) {
            if (index in array) {
                result[index] = callback.call(
                    thisArg,
                    array[index],
                    index,
                    array
                );
            }
        }

        return result;
    },
    writable: true,
    configurable: true
});

// Test myMap()
const numbers = [1, 2, 3];

const doubledNumbers = numbers.myMap(number => number * 2);
console.log("Doubled Numbers:", doubledNumbers);

const squaredNumbers = numbers.myMap(number => number * number);
console.log("Squared Numbers:", squaredNumbers);