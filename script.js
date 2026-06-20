document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("main-header");
    const navItems = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll("section[id]");

    // 1. Header shadow modification on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        
        // 2. Active element highlighting logic
        let currentSectionId = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 120; 
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navItems.forEach((item) => {
            item.classList.remove("active");
            if (item.getAttribute("href") === `#${currentSectionId}`) {
                item.classList.add("active");
            }
        });
    });
});