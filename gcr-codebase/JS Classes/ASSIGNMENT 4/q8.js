// Q8: Dynamic Object Updater

// Create the original user object
const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

// Select HTML elements
const userForm = document.getElementById("userForm");

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userAge = document.getElementById("userAge");

const userDetails = document.getElementById("userDetails");

// Display object properties on the page
function displayUserDetails() {
    userDetails.textContent = JSON.stringify(user, null, 2);
}

// Display the original object
displayUserDetails();

// Update object properties when the form is submitted
userForm.addEventListener("submit", function (event) {
    event.preventDefault();

    user.name = userName.value.trim();
    user.email = userEmail.value.trim();
    user.age = Number(userAge.value);

    // Display the updated object
    displayUserDetails();
});