// Function to simulate a deployment server response
function deployServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate a random server failure
            if (Math.random() < 0.2) {
                reject(new Error(`${serverName} deployment failed.`));
            } else {
                resolve(`${serverName} deployment completed`);
            }
        }, delay);
    });
}

// Start both server requests concurrently
const serverA = deployServer("Server A", 2000);
const serverB = deployServer("Server B", 3000);

// Promise.all waits for both servers to succeed
Promise.all([serverA, serverB])
    .then((responses) => {
        console.log("Deployment completed for all servers");
        console.log(responses);
    })
    .catch((error) => {
        console.error("Deployment error:", error.message);
    });

// Promise.race returns the first settled result
Promise.race([serverA, serverB])
    .then((response) => {
        console.log("Fastest response:", response);
    })
    .catch((error) => {
        console.error("Fastest response failed:", error.message);
    });