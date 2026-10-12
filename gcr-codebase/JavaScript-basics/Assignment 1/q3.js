// Q3. Monthly Expense Tracker

// Store monthly expenses for five categories.
const expenses = [
    { category: "Food", amount: 4500 },
    { category: "Travel", amount: 1800 },
    { category: "Rent", amount: 9000 },
    { category: "Bills", amount: 2200 },
    { category: "Leisure", amount: 1500 }
];

// Calculate the total expense.
let totalExpense = 0;

for (const expense of expenses) {
    totalExpense += expense.amount;
}

// Calculate average expense.
const averageExpense = totalExpense / expenses.length;

// Calculate 10% tax.
const taxAmount = totalExpense * 0.10;

// Add tax to the total using an assignment operator.
let finalAmount = totalExpense;
finalAmount += taxAmount;

// Display the results with two decimal places.
console.log("Monthly Expense Summary");
console.log(`Total expenses: ₹${totalExpense.toFixed(2)}`);
console.log(`Average expense: ₹${averageExpense.toFixed(2)}`);
console.log(`Tax (10%): ₹${taxAmount.toFixed(2)}`);
console.log(`Final amount after tax: ₹${finalAmount.toFixed(2)}`);