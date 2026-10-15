// Store the original product name
let productName = " wireless headphones PRO ";

// Remove extra spaces and convert to lowercase
let cleanedName = productName.trim().toLowerCase();

// Capitalize the first letter of each word
cleanedName = cleanedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace Pro with Pro Edition
cleanedName = cleanedName.replace("Pro", "Pro Edition");

// Display the cleaned title and its length
console.log("Cleaned Product Title:", cleanedName);
console.log("Title Length:", cleanedName.length);