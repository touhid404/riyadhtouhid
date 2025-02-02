document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll("#darkModeToggle");
    const body = document.getElementById("body");
    const html = document.documentElement;
    const darkModeIcon = document.getElementById("darkModeIcon");

    // Retrieve theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const newTheme = html.getAttribute("data-theme") === "light" ? "dark" : "light";
            applyTheme(newTheme);
            localStorage.setItem("theme", newTheme);
        });
    });

    function applyTheme(theme) {
        if (theme === "dark") {
            html.setAttribute("data-theme", "dark");
            body.classList.remove("bg-grid-light", "bg-gray-50");
            body.classList.add("bg-dark", "dark-mode-text");
            toggleButtons.forEach(button => {
                button.innerHTML = '<i class="fas fa-sun text-md"></i>';
                button.classList.add("border-gray-400"); // Light theme icon
                button.classList.remove("border-dark-300"); // Remove dark border
            });
        } else {
            html.setAttribute("data-theme", "light");
            body.classList.remove("bg-dark", "dark-mode-text");
            body.classList.add("bg-grid-light", "bg-gray-50");
            toggleButtons.forEach(button => {
                button.innerHTML = '<i class="fas fa-moon text-md"></i>';
                button.classList.add("border-dark-300"); // Dark theme icon
                button.classList.remove("border-gray-400"); // Remove light border
            });
        }
    }
});
