// Q6. Progressive Discount System

// Sample purchase amount.
const totalPurchaseAmount = 7500;
let discountPercentage;

// Determine the discount percentage.
if (totalPurchaseAmount >= 10000) {
    discountPercentage = 25;
} else if (totalPurchaseAmount >= 5000) {
    discountPercentage = 15;
} else if (totalPurchaseAmount >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

// Calculate the discount and final price.
const discountAmount = Math.round(
    totalPurchaseAmount * discountPercentage / 100
);

const finalPrice = Math.round(
    totalPurchaseAmount - discountAmount
);

// Display the results.
console.log(`Original total: ₹${Math.round(totalPurchaseAmount)}`);
console.log(`Discount percentage: ${discountPercentage}%`);
console.log(`Discount amount: ₹${discountAmount}`);
console.log(`Final price after discount: ₹${finalPrice}`);