// Q5. Weather Activity Planner

// Declare weather conditions.
const temperature = 12;
const isRaining = false;
const windSpeed = 25;

// Combine logical OR (||) and AND (&&) operators.
const shouldStayIndoors =
    isRaining || (temperature < 15 && windSpeed > 20);

// Decide the activity based on weather conditions.
if (shouldStayIndoors) {
    if (isRaining) {
        console.log("Stay indoors with hot coffee.");
    } else {
        console.log("Too cold and windy — stay home.");
    }
} else if (temperature > 35) {
    console.log("Go swimming.");
} else {
    console.log("Perfect day for a walk.");
}