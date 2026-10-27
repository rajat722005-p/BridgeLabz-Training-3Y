// Randomly select exactly one module that will fail
const moduleNames = ["Profile", "Posts", "Messages"];

const failedModule = moduleNames[
    Math.floor(Math.random() * moduleNames.length)
];

// Helper function to simulate an asynchronous module
function loadModule(moduleName, successMessage, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (moduleName === failedModule) {
                reject(new Error(`${moduleName} failed to load`));
            } else {
                resolve(successMessage);
            }
        }, delay);
    });
}

// Load profile after two seconds
function loadProfile() {
    return loadModule("Profile", "Profile Loaded", 2000);
}

// Load posts after one and a half seconds
function loadPosts() {
    return loadModule("Posts", "Posts Loaded", 1500);
}

// Load messages after one second
function loadMessages() {
    return loadModule("Messages", "Messages Loaded", 1000);
}

// Record the starting time
const startTime = Date.now();

// Load all modules concurrently
Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages()
]).then((results) => {
    console.log("Dashboard Loading Results:\n");

    // Display the result of each module
    results.forEach((result, index) => {
        const moduleName = moduleNames[index];

        if (result.status === "fulfilled") {
            console.log(`${moduleName}: Success - ${result.value}`);
        } else {
            console.log(
                `${moduleName}: Failed - ${result.reason.message}`
            );
        }
    });

    // Calculate total execution time
    const endTime = Date.now();
    const totalTime = endTime - startTime;

    console.log(`\nTotal time taken: ${totalTime} ms`);
});