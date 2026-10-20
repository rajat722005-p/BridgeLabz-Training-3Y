"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

// Custom error class.
class TransactionError extends Error {
    constructor(category, message) {
        super(message);
        this.name = "TransactionError";
        this.category = category;
    }
}

console.log("========== TRANSACTION REPORT ==========");

for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];

    // Set a breakpoint here to inspect variables.
    debugger;

    try {
        if (transaction === null) {
            throw new TransactionError(
                "NULL_ENTRY",
                "Transaction is null."
            );
        }

        if (
            transaction.id === undefined ||
            transaction.amount === undefined
        ) {
            throw new TransactionError(
                "MISSING_DATA",
                "Transaction ID or amount is missing."
            );
        }

        if (
            typeof transaction.amount !== "number" ||
            !Number.isFinite(transaction.amount)
        ) {
            throw new TransactionError(
                "INVALID_AMOUNT",
                "Amount must be a valid number."
            );
        }

        if (transaction.amount < 0) {
            throw new TransactionError(
                "NEGATIVE_AMOUNT",
                "Negative amount is not allowed."
            );
        }

        validTransactions.push(transaction);

        console.log(
            `Transaction ${transaction.id}: VALID`
        );
    } catch (error) {
        invalidTransactions.push({
            transaction: transaction,
            category: error.category || "UNEXPECTED_ERROR",
            message: error.message
        });

        console.log(
            `Transaction ${i + 1}: INVALID - ${error.message}`
        );
    }
}

console.log("\n========== FINAL SUMMARY ==========");
console.log("Valid Transactions:", validTransactions);
console.log("Invalid Transactions:", invalidTransactions);
console.log("Successful Count:", validTransactions.length);
console.log("Failed Count:", invalidTransactions.length);