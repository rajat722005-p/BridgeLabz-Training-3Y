// Promise-based function to fetch bugs
function getBugs() {
    return new Promise((resolve, reject) => {
        // Simulate a random API failure
        const isApiFailure = Math.random() < 0.3;

        setTimeout(() => {
            if (isApiFailure) {
                reject(new Error("Bug tracking API failed."));
            } else {
                resolve([
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ]);
            }
        }, 1000);
    });
}

// Fetch bugs and display them
getBugs()
    .then((bugs) => {
        console.log("Bug Tracker Results:");

        // Convert the bug list into objects for console.table()
        const bugDetails = bugs.map((bug, index) => ({
            "Bug Number": index + 1,
            "Bug Description": bug
        }));

        console.table(bugDetails);
    })
    .catch((error) => {
        console.error("Failed to fetch bugs:", error.message);
    });