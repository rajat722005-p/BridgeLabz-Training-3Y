// Q1: E-Commerce Product Manager

// Create a Product class
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply discount to the product price
    applyDiscount(percent) {
        if (percent < 0 || percent > 100) {
            throw new Error("Discount must be between 0 and 100.");
        }

        this.price = this.price - (this.price * percent / 100);
    }

    // Display product details in a formatted string
    displayDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
    }
}

// Create multiple product objects
const products = [
    new Product(101, "Laptop", 50000, "Electronics"),
    new Product(102, "Headphones", 2000, "Electronics"),
    new Product(103, "Notebook", 100, "Stationery"),
    new Product(104, "Keyboard", 1500, "Accessories"),
    new Product(105, "Water Bottle", 500, "Home")
];

// Apply a 10% discount to the headphones
products[1].applyDiscount(10);

// Display all products
console.log("All Products:");

products.forEach(product => {
    console.log(product.displayDetails());
});

// Filter products with a price greater than 1000
const expensiveProducts = products.filter(product => product.price > 1000);

console.log("\nProducts with Price Greater Than ₹1000:");

expensiveProducts.forEach(product => {
    console.log(product.displayDetails());
});