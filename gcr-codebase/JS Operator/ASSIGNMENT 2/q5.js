// Declare security condition variables
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Function to check security status
function checkSecurity() {
    // Check all security conditions
    let isSecure = isAlarmOn &&
                   isDoorLocked &&
                   isWindowClosed &&
                   isOwnerInside;

    // Display the security status
    if (isSecure) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }
}

// Test Case 1: All conditions are true
console.log("Test Case 1:");
checkSecurity();

// Test Case 2: Alarm is turned off
isAlarmOn = false;
console.log("Test Case 2:");
checkSecurity();

// Test Case 3: Window is open
isAlarmOn = true;
isWindowClosed = false;
console.log("Test Case 3:");
checkSecurity();

// Test Case 4: Restore all conditions
isWindowClosed = true;
console.log("Test Case 4:");
checkSecurity();

// Demonstrate the NOT operator
console.log("Is Owner Outside:", !isOwnerInside);

// Demonstrate the OR operator
console.log(
    "Alarm Is On OR Door Is Locked:",
    isAlarmOn || isDoorLocked
);