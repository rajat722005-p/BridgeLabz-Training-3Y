// Fake Store API URL
const apiUrl = "https://fakestoreapi.com/products";

// Get HTML elements
const productContainer = document.getElementById("product-container");
const loadingMessage = document.getElementById("loading-message");
const errorMessage = document.getElementById("error-message");

// Async function to fetch and display products
async function fetchProducts() {
    try {
        // Fetch product data from the API
        const response = await fetch(apiUrl);

        // Check whether the request was successful
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        // Convert the response into JavaScript data
        const products = await response.json();

        // Validate the API response
        if (!Array.isArray(products)) {
            throw new Error("Invalid product data received.");
        }

        // Remove the loading message
        loadingMessage.textContent = "";

        // Display a message if the product list is empty
        if (products.length === 0) {
            loadingMessage.textContent = "No products available.";
            return;
        }

        // Create a product card for every product
        products.forEach((product) => {

            // Display product details in the browser console
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${Number(product.price).toFixed(2)}`);
            console.log(`Image: ${product.image}`);
            console.log("--------------------------------");

            // Create the main product card
            const productCard = document.createElement("div");
            productCard.className = "product-card";

            // Create the product image
            const productImage = document.createElement("img");
            productImage.className = "product-image";
            productImage.src = product.image;
            productImage.alt = product.title;
            productImage.loading = "lazy";

            // Display alternative text if the image cannot load
            productImage.onerror = function () {
                this.alt = "Product image unavailable";
                this.removeAttribute("src");
            };

            // Create the product title
            const productTitle = document.createElement("h2");
            productTitle.className = "product-title";
            productTitle.textContent = product.title;

            // Create the product price
            const productPrice = document.createElement("p");
            productPrice.className = "product-price";
            productPrice.textContent =
                `$${Number(product.price).toFixed(2)}`;

            // Add elements to the product card
            productCard.append(
                productImage,
                productTitle,
                productPrice
            );

            // Add the product card to the webpage
            productContainer.appendChild(productCard);
        });

    } catch (error) {
        // Handle API, network, and data-processing errors
        console.error("Failed to load products:", error);

        // Remove the loading message
        loadingMessage.textContent = "";

        // Display the required error message
        errorMessage.textContent =
            "Failed to load products. Please try again.";
    }
}

// Start fetching the products
fetchProducts();