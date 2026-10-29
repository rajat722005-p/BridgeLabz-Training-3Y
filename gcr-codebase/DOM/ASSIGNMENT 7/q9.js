// Get form and input elements
const registrationForm = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const successMessage = document.getElementById("successMessage");

// Validate the name
function validateName() {
if (nameInput.value.trim() === "") {
nameError.textContent = "Name is required.";
return false;
}

nameError.textContent = "";
return true;

}

// Validate the email
function validateEmail() {
const email = emailInput.value.trim();

if (email === "") {
    emailError.textContent = "Email is required.";
    return false;
}

if (!email.includes("@")) {
    emailError.textContent = "Email must contain @.";
    return false;
}

emailError.textContent = "";
return true;

}

// Validate the password
function validatePassword() {
if (passwordInput.value.length < 6) {
passwordError.textContent =
"Password must contain at least 6 characters.";
return false;
}

passwordError.textContent = "";
return true;

}

// Remove errors automatically when inputs change
nameInput.addEventListener("input", function () {
validateName();
successMessage.textContent = "";
});

emailInput.addEventListener("input", function () {
validateEmail();
successMessage.textContent = "";
});

passwordInput.addEventListener("input", function () {
validatePassword();
successMessage.textContent = "";
});

// Handle form submission
registrationForm.addEventListener("submit", function (event) {
// Prevent the page from reloading
event.preventDefault();

// Validate all fields
const isNameValid = validateName();
const isEmailValid = validateEmail();
const isPasswordValid = validatePassword();

// Stop if any field is invalid
if (!isNameValid || !isEmailValid || !isPasswordValid) {
    successMessage.textContent = "";
    return;
}

// Display success message
successMessage.textContent = "Form Submitted Successfully!";

});