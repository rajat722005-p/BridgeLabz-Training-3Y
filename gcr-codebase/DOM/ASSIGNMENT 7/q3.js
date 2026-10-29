const steps = document.querySelectorAll(".step");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const summary = document.getElementById("summary");
const registrationForm = document.getElementById("registrationForm");

let currentStep = 0;

// Display the selected step
function showStep(stepIndex) {
    steps.forEach(function (step, index) {
        step.hidden = index !== stepIndex;
    });

    currentStep = stepIndex;
}

// Validate the current step
function validateStep() {
    if (currentStep === 0) {
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required.";
            nameInput.focus();
            return false;
        }

        nameError.textContent = "";
    }

    if (currentStep === 1) {
        if (!emailInput.checkValidity() || emailInput.value.trim() === "") {
            emailError.textContent = "Enter a valid email.";
            emailInput.focus();
            return false;
        }

        emailError.textContent = "";
    }

    if (currentStep === 2) {
        if (passwordInput.value.length < 6) {
            passwordError.textContent =
                "Password must contain at least 6 characters.";

            passwordInput.focus();
            return false;
        }

        passwordError.textContent = "";
    }

    return true;
}

// Move to the next step after validation
document.getElementById("nameNext").addEventListener("click", function () {
    if (validateStep()) {
        showStep(1);
    }
});

document.getElementById("emailNext").addEventListener("click", function () {
    if (validateStep()) {
        showStep(2);
    }
});

// Go back to the previous step
document.querySelectorAll(".backButton").forEach(function (button) {
    button.addEventListener("click", function () {
        showStep(currentStep - 1);
    });
});

// Display the final summary
document.getElementById("finishButton").addEventListener("click", function () {
    if (validateStep()) {
        document.getElementById("summaryName").textContent =
            "Name: " + nameInput.value.trim();

        document.getElementById("summaryEmail").textContent =
            "Email: " + emailInput.value.trim();

        registrationForm.hidden = true;
        summary.hidden = false;
    }
});