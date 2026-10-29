// Get HTML elements
const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

// Add a new product
function addProduct() {
const productName = productInput.value.trim();

```
// Do not add an empty product
if (productName === "") {
    alert("Please enter a product name!");
    return;
}

// Create a new list item
const listItem = document.createElement("li");

// Create a span to display the product name safely
const nameSpan = document.createElement("span");
nameSpan.className = "product-name";
nameSpan.textContent = productName;

// Create the Edit button
const editButton = document.createElement("button");
editButton.textContent = "Edit";
editButton.className = "edit-button";
editButton.dataset.action = "edit";

// Create the Delete button
const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
deleteButton.className = "delete-button";
deleteButton.dataset.action = "delete";

// Add elements to the list item
listItem.append(nameSpan, editButton, deleteButton);

// Add the product to the list
productList.appendChild(listItem);

// Clear the input field
productInput.value = "";
productInput.focus();
```

}

// Handle Add button click
addButton.addEventListener("click", addProduct);

// Allow adding a product by pressing Enter
productInput.addEventListener("keydown", function (event) {
if (event.key === "Enter") {
addProduct();
}
});

// Save the currently edited product
function saveEdit(listItem) {
if (!listItem) {
return;
}

```
const editInput = listItem.querySelector(".edit-input");

if (!editInput) {
    return;
}

const newName = editInput.value.trim();

// Save the edited name if it is not empty
if (newName !== "") {
    const nameSpan = document.createElement("span");
    nameSpan.className = "product-name";
    nameSpan.textContent = newName;

    listItem.replaceChild(nameSpan, editInput);
} else {
    // Restore the previous name if the input is empty
    const nameSpan = document.createElement("span");
    nameSpan.className = "product-name";
    nameSpan.textContent = editInput.dataset.oldName;

    listItem.replaceChild(nameSpan, editInput);
}
```

}

// Use event delegation for Edit and Delete
productList.addEventListener("click", function (event) {
const button = event.target.closest("button[data-action]");

```
// Ignore clicks that are not on an action button
if (!button || !productList.contains(button)) {
    return;
}

const listItem = button.closest("li");

if (!listItem) {
    return;
}

const action = button.dataset.action;

// Delete the selected product
if (action === "delete") {
    listItem.remove();
}

// Enable inline editing
if (action === "edit") {
    const nameSpan = listItem.querySelector(".product-name");

    // Avoid creating multiple edit inputs
    if (!nameSpan) {
        return;
    }

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.className = "edit-input";
    editInput.value = nameSpan.textContent;
    editInput.dataset.oldName = nameSpan.textContent;

    listItem.replaceChild(editInput, nameSpan);

    editInput.focus();
    editInput.select();

    // Save when the user presses Enter
    editInput.addEventListener("keydown", function (keyEvent) {
        if (keyEvent.key === "Enter") {
            saveEdit(listItem);
        }

        // Restore the old name when Escape is pressed
        if (keyEvent.key === "Escape") {
            editInput.value = "";
            saveEdit(listItem);
        }
    });
}
```

});

// Automatically save when clicking outside the edited product
document.addEventListener("click", function (event) {
const editedItems = productList.querySelectorAll("li");

```
editedItems.forEach(function (listItem) {
    const editInput = listItem.querySelector(".edit-input");

    if (editInput && !listItem.contains(event.target)) {
        saveEdit(listItem);
    }
});
```

});
