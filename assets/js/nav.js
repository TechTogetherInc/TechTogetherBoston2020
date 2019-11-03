// Not needed at the moment...

// Closes hamburger nav when FAQ is clicked on for mobile
const faq = document.getElementById("faqButton");

faq.addEventListener("click", closeNav);

function closeNav() {
    const toggle = document.getElementById("toggle");
    const attribute = toggle.getAttribute("aria-expanded");
    const navBar = document.getElementById("navbarNav");

    if(attribute === "true"){
        toggle.classList.add("collapsed");
        navBar.classList.remove("show");
    }

}

