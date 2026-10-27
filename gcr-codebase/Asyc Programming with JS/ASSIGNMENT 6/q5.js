// ========================================
// PART 1: CALLBACK HELL
// ========================================

// Function that executes a stage using a callback
function runStage(stageName, callback) {
    setTimeout(() => {
        console.log(stageName);
        callback();
    }, 1000);
}

// Execute five asynchronous stages using nested callbacks
function runCallbackPipeline() {
    console.log("Starting callback pipeline...");

    runStage("design", () => {
        runStage("build", () => {
            runStage("test", () => {
                runStage("deploy", () => {
                    runStage("celebrate", () => {
                        console.log("Callback pipeline completed.");

                        // Start the async/await version after this pipeline
                        runAsyncPipeline();
                    });
                });
            });
        });
    });
}

// ========================================
// PART 2: ASYNC/AWAIT
// ========================================

// Promise-based function that waits for one second
function delayOneSecond() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
}

// Execute the same pipeline using async/await
async function runAsyncPipeline() {
    console.log("Starting async/await pipeline...");

    await delayOneSecond();
    console.log("design");

    await delayOneSecond();
    console.log("build");

    await delayOneSecond();
    console.log("test");

    await delayOneSecond();
    console.log("deploy");

    await delayOneSecond();
    console.log("celebrate");

    console.log("Async/await pipeline completed.");
}

// Start the complete demonstration
runCallbackPipeline();

// Explanation:
// Callback hell creates deeply nested functions that are difficult to read.
// Async/await makes asynchronous code look more like sequential code.
// Each await pauses the async function until its Promise settles,
// without blocking the JavaScript event loop.