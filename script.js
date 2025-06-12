document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to Mbavhalelo's Portfolio!");
});

const toggleTheme = document.getElementById("toggle-theme");

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
