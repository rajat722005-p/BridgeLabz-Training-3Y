// Q7: Login Form Validation using RegExp

const loginForm = document.getElementById("loginForm");

const username = document.getElementById("username");
const password = document.getElementById("password");

const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const loginMessage = document.getElementById("loginMessage");

// Password validation rules
const passwordRules = [
    {
        pattern: /^.{8,}$/,
        message: "Password must contain at least 8 characters."
    },
    {
        pattern: /\d/,
        message: "Password must contain at least one number."
    },
    {
        pattern: /[A-Z]/,
        message: "Password must contain at least one uppercase letter."
    },
    {
        pattern: /[a-z]/,
        message: "Password must contain at least one lowercase letter."
    },
    {
        pattern: /[^A-Za-z0-9]/,
        message: "Password must contain at least one special character."
    }
];

// Validate the login form
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredUsername = username.value.trim();
    const enteredPassword = password.value;

    let isUsernameValid = true;

    // Validate username length
    if (enteredUsername.length < 5) {
        usernameError.textContent =
            "Username must contain at least 5 characters.";

        username.classList.remove("valid");
        username.classList.add("invalid");

        isUsernameValid = false;
    } else {
        usernameError.textContent = "";

        username.classList.remove("invalid");
        username.classList.add("valid");
    }

    // Check every password requirement
    const passwordErrors = passwordRules
        .filter(rule => !rule.pattern.test(enteredPassword))
        .map(rule => rule.message);

    const isPasswordValid = passwordErrors.length === 0;

    // Display specific password errors
    passwordError.textContent = passwordErrors.join(" ");

    if (isPasswordValid) {
        password.classList.remove("invalid");
        password.classList.add("valid");
    } else {
        password.classList.remove("valid");
        password.classList.add("invalid");
    }

    // Display final validation result
    if (isUsernameValid && isPasswordValid) {
        loginMessage.textContent = "Login validation successful!";
        loginMessage.className = "success";
    } else {
        loginMessage.textContent =
            "Login failed. Please correct the errors above.";

        loginMessage.className = "error";
    }
});