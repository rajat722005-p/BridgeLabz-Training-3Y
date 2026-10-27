// Function to simulate boiling water
function boilWater() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error("Failed to boil water!"));
            } else {
                console.log("Water boiled successfully.");
                resolve();
            }
        }, delay);
    });
}

// Function to simulate brewing coffee
function brewCoffee() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error("Failed to brew coffee!"));
            } else {
                console.log("Coffee brewed successfully.");
                resolve();
            }
        }, delay);
    });
}

// Function to simulate pouring coffee
function pourCoffee() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error("Failed to pour coffee!"));
            } else {
                console.log("Coffee poured into the cup.");
                resolve();
            }
        }, delay);
    });
}

// Execute the asynchronous coffee preparation process
console.log("Starting coffee preparation...");

boilWater()
    .then(() => {
        return brewCoffee();
    })
    .then(() => {
        return pourCoffee();
    })
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.error("Coffee preparation failed:", error.message);
    });