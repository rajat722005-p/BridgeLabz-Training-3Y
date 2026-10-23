// Q5: Movie Ticket Booking

const bookingForm = document.getElementById("bookingForm");

const customerName = document.getElementById("customerName");
const customerEmail = document.getElementById("customerEmail");
const seatCount = document.getElementById("seatCount");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const seatsError = document.getElementById("seatsError");

const ticketDetails = document.getElementById("ticketDetails");

// Regular expressions
const namePattern = /^[A-Za-z]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const seatsPattern = /^(?:[1-9]|10)$/;

// Validate an input and display its status
function validateInput(input, errorElement, isValid, errorMessage) {
    if (isValid) {
        input.classList.remove("invalid");
        input.classList.add("valid");
        errorElement.textContent = "";
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
        errorElement.textContent = errorMessage;
    }
}

// Handle booking form submission
bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = customerName.value.trim();
    const email = customerEmail.value.trim();
    const seats = seatCount.value.trim();

    const isNameValid = namePattern.test(name);
    const isEmailValid = emailPattern.test(email);
    const areSeatsValid = seatsPattern.test(seats);

    validateInput(
        customerName,
        nameError,
        isNameValid,
        "Name must contain alphabets only."
    );

    validateInput(
        customerEmail,
        emailError,
        isEmailValid,
        "Enter a valid email address."
    );

    validateInput(
        seatCount,
        seatsError,
        areSeatsValid,
        "Seats must be a number between 1 and 10."
    );

    // Stop if any field is invalid
    if (!isNameValid || !isEmailValid || !areSeatsValid) {
        ticketDetails.textContent = "Please correct the errors above.";
        return;
    }

    // Store booking information in an object
    const booking = {
        name: name,
        email: email,
        seats: Number(seats)
    };

    // Display the booking ticket
    ticketDetails.textContent =
        "Booking Successful!\n\n" +
        "Name: " + booking.name + "\n" +
        "Email: " + booking.email + "\n" +
        "Number of Seats: " + booking.seats;
});