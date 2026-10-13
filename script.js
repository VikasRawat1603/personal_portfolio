
/* 1. Mobile Navigation */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-navigation");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
        const isOpen = nav.classList.toggle("nav-open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });

    // Close menu after clicking a navigation link
    nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("nav-open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}


/* 2. Active Navigation Link */

const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(
    "#primary-navigation a"
);

function updateActiveLink() {
    let currentSection = "";

    sections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 160) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(function (link) {
        const isActive =
            link.getAttribute("href") === "#" + currentSection;

        link.classList.toggle("active", isActive);

        if (isActive) {
            link.setAttribute("aria-current", "location");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);


/* 3. Contact Form Validation With Popups */

const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

if (contactForm && nameInput && emailInput && messageInput) {
    contactForm.addEventListener("submit", function (event) {
        // Prevent page refresh
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Check empty fields
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Check email format
        if (!emailInput.validity.valid) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            return;
        }

        // Show success popup
        alert(
            "Thank you, " + name +
            "! Your form is valid."
        );

        // Clear form fields
        contactForm.reset();
    });
}


/* 4. Automatic Footer Year */

const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
