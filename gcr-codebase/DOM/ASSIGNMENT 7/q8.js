const dropdown = document.getElementById("dropdown");
const dropdownToggle = document.getElementById("dropdownToggle");
const dropdownOptions = document.getElementById("dropdownOptions");
const selectedOption = document.getElementById("selectedOption");

const optionButtons = document.querySelectorAll(".dropdown-option");

// Show or hide the dropdown
dropdownToggle.addEventListener("click", function () {
    const isCurrentlyHidden = dropdownOptions.hidden;

    dropdownOptions.hidden = !isCurrentlyHidden;

    dropdownToggle.setAttribute(
        "aria-expanded",
        String(isCurrentlyHidden)
    );
});

// Update button text when an option is selected
optionButtons.forEach(function (optionButton) {
    optionButton.addEventListener("click", function () {
        selectedOption.textContent = optionButton.textContent;

        dropdownOptions.hidden = true;

        dropdownToggle.setAttribute("aria-expanded", "false");
    });
});

// Close the dropdown when clicking outside
// The third argument, true, enables the capturing phase
document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
        dropdownOptions.hidden = true;

        dropdownToggle.setAttribute("aria-expanded", "false");
    }
}, true);