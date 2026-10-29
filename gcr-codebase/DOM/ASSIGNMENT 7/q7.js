const mouseBox = document.getElementById("mouseBox");
const coordinates = document.getElementById("coordinates");

// Track mouse movement inside the box
mouseBox.addEventListener("mousemove", function (event) {
    const clientX = event.clientX;
    const clientY = event.clientY;

    coordinates.textContent =
        `clientX: ${clientX}, clientY: ${clientY}`;

    // Log coordinates in the browser console
    console.log(`clientX: ${clientX}, clientY: ${clientY}`);
});

// Place a red dot on double-click
mouseBox.addEventListener("dblclick", function (event) {
    const boxPosition = mouseBox.getBoundingClientRect();

    const dot = document.createElement("div");
    dot.className = "red-dot";

    // Convert client coordinates to box-relative coordinates
    const xPosition = event.clientX - boxPosition.left;
    const yPosition = event.clientY - boxPosition.top;

    dot.style.left = `${xPosition}px`;
    dot.style.top = `${yPosition}px`;

    mouseBox.appendChild(dot);
});