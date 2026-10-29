const themeButtons = document.querySelectorAll("[data-theme-choice]");
const currentTheme = document.getElementById("currentTheme");
const pageBody = document.body;

// Apply theme using setAttribute()
function setTheme(themeName) {
    pageBody.setAttribute("class", `theme-${themeName}`);

    // Save the selected theme in a custom attribute
    pageBody.setAttribute("data-theme", themeName);

    currentTheme.textContent =
        themeName.charAt(0).toUpperCase() + themeName.slice(1);
}

// Change theme when a button is clicked
themeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedTheme = button.getAttribute("data-theme-choice");

        setTheme(selectedTheme);
    });
});

// Set the initial theme
setTheme("light");