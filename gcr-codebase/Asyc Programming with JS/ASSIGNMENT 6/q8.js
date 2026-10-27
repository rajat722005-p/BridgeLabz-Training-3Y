// Function that simulates order submission
function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // The order fails approximately 50% of the time
            if (Math.random() < 0.5) {
                reject(new Error("Order submission failed"));
            } else {
                resolve("Order submitted successfully");
            }
        }, 500);
    });
}

// Function that retries order submission up to three times
async function processOrder() {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const result = await submitOrder();

            console.log(`Attempt ${attempt}: Success`);
            console.log(result);

            // Stop retrying after success
            return result;
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed`);
        }
    }

    // Throw an error if all three attempts fail
    throw new Error("Order could not be processed");
}

// Handle the final result or failure
async function main() {
    try {
        await processOrder();
    } catch (error) {
        console.error("Final Error:", error.message);
    }
}

// Start order processing
main();