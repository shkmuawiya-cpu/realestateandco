
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");

    if (menu && nav) {
        menu.addEventListener("click", function () {
            nav.classList.toggle("active");
        });
    }

    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    console.log("Real Estate & Co. website loaded successfully!");
});
