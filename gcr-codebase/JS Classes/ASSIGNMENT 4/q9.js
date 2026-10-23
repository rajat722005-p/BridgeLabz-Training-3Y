// Q9: Shopping Cart Total

const readline = require("node:readline");

// Create a Cart class
class Cart {
    constructor() {
        this.items = [];
    }

    // Add an item to the cart
    addItem(name, price, quantity) {
        if (price < 0 || quantity <= 0) {
            throw new Error("Price must be non-negative and quantity must be positive.");
        }

        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }

    // Calculate the total price of all items
    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }

    // Apply a coupon after validating its format
    applyCoupon(couponCode) {
        const couponPattern = /^(SAVE|DISC)(\d{1,2})$/;

        const match = couponCode.trim().match(couponPattern);

        // Check whether the coupon format is valid
        if (!match) {
            return {
                valid: false,
                message: "Invalid coupon! Use a format like SAVE20 or DISC10."
            };
        }

        const discountPercent = Number(match[2]);

        // Discount must be between 1% and 100%
        if (discountPercent < 1 || discountPercent > 100) {
            return {
                valid: false,
                message: "Coupon discount must be between 1% and 100%."
            };
        }

        const total = this.getTotal();

        const discountAmount = total * discountPercent / 100;

        const finalTotal = total - discountAmount;

        return {
            valid: true,
            discountPercent: discountPercent,
            total: total,
            discountAmount: discountAmount,
            finalTotal: finalTotal
        };
    }
}

// Create a cart object
const cart = new Cart();

// Add products to the shopping cart
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 800, 2);
cart.addItem("Keyboard", 1500, 1);

// Display cart items
console.log("Shopping Cart:");

cart.items.forEach(item => {
    console.log(
        `${item.name} | Price: ₹${item.price} | Quantity: ${item.quantity}`
    );
});

// Display total price
console.log("\nTotal Price: ₹" + cart.getTotal().toFixed(2));

// Create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user to enter a coupon
rl.question("\nEnter coupon code (e.g. SAVE20 or DISC10): ", function (couponCode) {
    const result = cart.applyCoupon(couponCode);

    if (!result.valid) {
        console.log(result.message);

        console.log(
            "Final Total Without Discount: ₹" +
            cart.getTotal().toFixed(2)
        );
    } else {
        console.log("\nCoupon Applied Successfully!");

        console.log(
            "Discount Percentage: " + result.discountPercent + "%"
        );

        console.log(
            "Original Total: ₹" + result.total.toFixed(2)
        );

        console.log(
            "Discount Amount: ₹" + result.discountAmount.toFixed(2)
        );

        console.log(
            "Final Total: ₹" + result.finalTotal.toFixed(2)
        );
    }

    rl.close();
});