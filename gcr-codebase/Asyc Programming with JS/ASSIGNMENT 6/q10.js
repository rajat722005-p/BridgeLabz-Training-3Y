// Helper function to simulate an asynchronous delivery step
function simulateStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        // Generate a random delay between one and two seconds
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            // Randomly fail approximately 20% of the time
            if (Math.random() < 0.2) {
                reject(new Error(`${stepName} failed`));
            } else {
                console.log(successMessage);
                resolve(successMessage);
            }
        }, delay);
    });
}

// Step 1: Take the order
function takeOrder() {
    return simulateStep("takeOrder", "Step 1: Order taken");
}

// Step 2: Prepare the food
function prepare() {
    return simulateStep("prepare", "Step 2: Food prepared");
}

// Step 3: Pack the order
function pack() {
    return simulateStep("pack", "Step 3: Package ready");
}

// Step 4: Dispatch the order
function dispatch() {
    return simulateStep("dispatch", "Step 4: Out for delivery");
}

// Step 5: Deliver the order
function deliver() {
    return simulateStep("deliver", "Delivery completed!");
}

// Run the delivery pipeline sequentially
async function runPipeline() {
    console.log("Start Pipeline");

    try {
        // Await each Promise before starting the next step
        await takeOrder();
        await prepare();
        await pack();
        await dispatch();
        await deliver();
    } catch (error) {
        // Stop the pipeline if any step fails
        console.error("Pipeline failed!");
        console.error("Error details:", error.message);
    }
}

// Start the pipeline
runPipeline();

// Async behavior and event loop explanation:
// 1. Each step returns a Promise.
// 2. setTimeout() schedules its callback for later execution.
// 3. await pauses runPipeline() until the current Promise settles.
// 4. The JavaScript event loop can process other work while a
//    Promise is waiting; await does not block the entire thread.
// 5. When a Promise resolves, the async function resumes.
// 6. If a Promise rejects, control moves to the catch block.
// 7. Later steps do not execute after a failure.