// Get search input and table rows
const searchInput = document.getElementById("searchInput");
const studentTable = document.getElementById("studentTable");
const noResults = document.getElementById("noResults");

// Filter rows whenever the user types
searchInput.addEventListener("input", function () {
const searchText = searchInput.value.toLowerCase().trim();
const rows = studentTable.querySelectorAll("tr");

```
let visibleRows = 0;

rows.forEach(function (row) {
    const rowText = row.textContent.toLowerCase();

    // Show rows containing the search text
    if (rowText.includes(searchText)) {
        row.style.display = "";
        visibleRows++;
    } else {
        row.style.display = "none";
    }
});

// Show a message if there are no matching rows
noResults.hidden = visibleRows !== 0;
```

});
