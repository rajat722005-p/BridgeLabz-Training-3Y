// Store cart items in an array of objects
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Calculate the original cart total using reduce()
const originalTotal = cart.reduce(
    (sum, product) => sum + product.price,
    0
);

// Initialize the discounted total
let discountedTotal = 0;

// Apply category-based discounts
for (const product of cart) {
    let discountRate = 0;

    // Determine the discount based on category
    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    // Calculate price after category discount
    let finalPrice = product.price * (1 - discountRate);

    // Add the final price to the discounted total
    discountedTotal += finalPrice;

    // Display product details
    console.log("Item:", product.item);
    console.log("Original Price: ₹" + product.price);
    console.log("Discount:", (discountRate * 100) + "%");
    console.log("Final Price: ₹" + finalPrice);
    console.log("--------------------------");
}

// Apply extra 5% discount if the original total exceeds ₹50,000
if (originalTotal > 50000) {
    discountedTotal *= 0.95;
}

// Calculate total savings
let totalSavings = originalTotal - discountedTotal;

// Display the final cart summary
console.log("Original Cart Total: ₹" + originalTotal);
console.log("Final Cart Total: ₹" + discountedTotal.toFixed(2));
console.log("Total Savings: ₹" + totalSavings.toFixed(2));