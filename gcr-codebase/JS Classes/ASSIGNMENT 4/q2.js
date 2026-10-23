// Q2: Student Form Validator

const registrationForm = document.getElementById("registrationForm");

const studentName = document.getElementById("studentName");
const studentEmail = document.getElementById("studentEmail");
const studentPhone = document.getElementById("studentPhone");
const studentPassword = document.getElementById("studentPassword");

const formMessage = document.getElementById("formMessage");

// Regular expressions for validation
const namePattern = /^[A-Za-z]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\d{10}$/;
const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;

// Store input fields and their validation rules
const validationFields = [
    {
        input: studentName,
        error: document.getElementById("nameError"),
        pattern: namePattern,
        message: "Name must contain alphabets only."
    },
    {
        input: studentEmail,
        error: document.getElementById("emailError"),
        pattern: emailPattern,
        message: "Enter a valid email address."
    },
    {
        input: studentPhone,
        error: document.getElementById("phoneError"),
        pattern: phonePattern,
        message: "Phone number must contain exactly 10 digits."
    },
    {
        input: studentPassword,
        error: document.getElementById("passwordError"),
        pattern: passwordPattern,
        message: "Password must contain an uppercase letter, a number, and a special character."
    }
];

// Validate a single input field
function validateField(field) {
    const value = field.input.type === "password"
        ? field.input.value
        : field.input.value.trim();

    const isValid = field.pattern.test(value);

    if (isValid) {
        field.input.classList.remove("invalid");
        field.input.classList.add("valid");
        field.error.textContent = "";
    } else {
        field.input.classList.remove("valid");
        field.input.classList.add("invalid");
        field.error.textContent = field.message;
    }

    return isValid;
}

// Validate fields while the user types
validationFields.forEach(field => {
    field.input.addEventListener("input", () => {
        if (field.input.value === "") {
            field.input.classList.remove("valid", "invalid");
            field.error.textContent = "";
            return;
        }

        validateField(field);
    });
});

// Validate the complete form on submission
registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const allValid = validationFields
        .map(field => validateField(field))
        .every(isValid => isValid);

    if (allValid) {
        formMessage.textContent = "Registration successful!";
        formMessage.style.color = "green";
    } else {
        formMessage.textContent = "Please correct the highlighted fields.";
        formMessage.style.color = "red";
    }
});