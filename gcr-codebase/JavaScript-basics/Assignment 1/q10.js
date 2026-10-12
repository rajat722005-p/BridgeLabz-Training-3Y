// Q10. Citizen Eligibility Validator

// Declare the person's age and citizenship status.
const age = 20;
const isCitizen = true;

// Check eligibility using nested if-else conditions.
if (isCitizen) {
    if (age >= 18 && age <= 20) {
        console.log("Eligible to vote only.");
    } else if (age >= 18) {
        console.log("Eligible for all services.");
    } else {
        console.log("Not eligible yet.");
    }
} else if (age >= 18) {
    console.log("Only age criteria met.");
} else {
    console.log("Not eligible yet.");
}