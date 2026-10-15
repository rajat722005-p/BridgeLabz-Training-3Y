// Store customer feedback
let feedback = "Great product! Fast delivery and amazing sound quality!";

// Convert feedback to lowercase
let lowerFeedback = feedback.toLowerCase();

// Split feedback into words
let words = feedback.trim().split(/\s+/);

// Count the total words
let wordCount = words.length;

// Check for negative words
let containsBad = lowerFeedback.includes("bad");
let containsPoor = lowerFeedback.includes("poor");

// Display feedback details
console.log("Customer Feedback:", feedback);
console.log("Word Count:", wordCount);

// Classify the feedback
if (!containsBad && !containsPoor) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}