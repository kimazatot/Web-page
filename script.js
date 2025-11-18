document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggle-theme");
    const body = document.body;

    const sunIcon = "🌞";   
    const moonIcon = "🌙";

    const updateThemeIcon = () => {
        if (body.classList.contains("dark-theme")) {
            toggleBtn.innerHTML = sunIcon;
        } else {
            toggleBtn.innerHTML = moonIcon;
        }
        toggleBtn.style.transition = "transform 0.5s ease";
        toggleBtn.style.transform = "rotate(360deg)";
        setTimeout(() => {
            toggleBtn.style.transform = "";
        }, 500);
    };

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-theme");
    }

    updateThemeIcon();

    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-theme");

        const isDark = body.classList.contains("dark-theme");
        localStorage.setItem("theme", isDark ? "dark" : "light");

        updateThemeIcon();
    });
});