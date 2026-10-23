// Q3: Library Management System

const readline = require("node:readline");

// Create a Book class
class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    // Issue a book
    issueBook() {
        if (this.isIssued) {
            return `"${this.title}" is already issued.`;
        }

        this.isIssued = true;
        return `"${this.title}" has been issued successfully.`;
    }

    // Return a book
    returnBook() {
        if (!this.isIssued) {
            return `"${this.title}" is already available.`;
        }

        this.isIssued = false;
        return `"${this.title}" has been returned successfully.`;
    }

    // Display book details
    displayDetails() {
        return `Title: ${this.title} | Author: ${this.author} | ISBN: ${this.isbn}`;
    }
}

// Create an array of book objects
const books = [
    new Book("Java Programming", "James Gosling", "ISBN1001"),
    new Book("JavaScript Basics", "John Smith", "ISBN1002"),
    new Book("Python Programming", "Guido Rossum", "ISBN1003"),
    new Book("Web Development", "Tim Berners-Lee", "ISBN1004", true)
];

// Display all available books
function displayAvailableBooks() {
    const availableBooks = books.filter(book => !book.isIssued);

    if (availableBooks.length === 0) {
        console.log("No books are currently available.");
        return;
    }

    availableBooks.forEach(book => {
        console.log(book.displayDetails());
    });
}

console.log("Available Books:");
displayAvailableBooks();

// Create a readline interface for ISBN input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Allow the user to issue a book using its ISBN
rl.question("\nEnter the ISBN of the book you want to issue: ", function (inputIsbn) {
    const selectedBook = books.find(
        book => book.isbn.toLowerCase() === inputIsbn.trim().toLowerCase()
    );

    if (selectedBook) {
        console.log(selectedBook.issueBook());
    } else {
        console.log("Book not found. Please enter a valid ISBN.");
    }

    console.log("\nAvailable Books After the Request:");
    displayAvailableBooks();

    rl.close();
});