// Get gallery and modal elements
const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");

// Open modal when an image is clicked
gallery.addEventListener("click", function (event) {
if (event.target.tagName !== "IMG") {
return;
}

```
modalImage.src = event.target.src;
modalImage.alt = event.target.alt;

modal.style.display = "flex";
```

});

// Close modal when the outside area is clicked
modal.addEventListener("click", function () {
modal.style.display = "none";
modalImage.src = "";
});

// Prevent clicks inside the modal image from closing it
modalImage.addEventListener("click", function (event) {
event.stopPropagation();
});
