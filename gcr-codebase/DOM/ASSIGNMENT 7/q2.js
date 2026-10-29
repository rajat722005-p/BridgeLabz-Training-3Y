const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

const maxCharacters = 100;
const warningLimit = 20;

// Update remaining characters and counter color
function updateCounter() {
    const remainingCharacters = maxCharacters - message.value.length;

    counter.textContent =
        `${remainingCharacters} characters remaining`;

    counter.classList.remove("warning", "danger");

    if (remainingCharacters === 0) {
        counter.classList.add("danger");
    } else if (remainingCharacters <= warningLimit) {
        counter.classList.add("warning");
    }
}

// Prevent additional typing when the limit is reached
message.addEventListener("keydown", function (event) {
    const selectedLength =
        message.selectionEnd - message.selectionStart;

    const currentLength = message.value.length - selectedLength;

    const isCharacterKey = event.key.length === 1;

    if (
        currentLength >= maxCharacters &&
        isCharacterKey &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey
    ) {
        event.preventDefault();
    }
});

// Prevent pasting text that would exceed the limit
message.addEventListener("paste", function (event) {
    const pastedText = event.clipboardData.getData("text");

    const selectedLength =
        message.selectionEnd - message.selectionStart;

    const newLength =
        message.value.length - selectedLength + pastedText.length;

    if (newLength > maxCharacters) {
        event.preventDefault();
    }
});

// Update counter while typing
message.addEventListener("input", updateCounter);

// Reset the textarea and counter
resetButton.addEventListener("click", function () {
    message.value = "";
    updateCounter();
    message.focus();
});

// Initialize the counter
updateCounter();