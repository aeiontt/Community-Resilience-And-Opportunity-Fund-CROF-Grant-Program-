document.addEventListener("DOMContentLoaded", () => {
    
    /* ==============================================
       1. STICKY HEADER SHADOW ON SCROLL
       ============================================== */
    const header = document.getElementById("main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    /* ==============================================
       2. MOBILE MENU TOGGLE LOGIC
       ============================================== */
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-item");
    const menuIcon = mobileMenuBtn.querySelector("i");

    mobileMenuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        
        // Toggle FontAwesome Icon (Bars to X)
        if (navLinks.classList.contains("active")) {
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-xmark");
        } else {
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
        }
    });

    // Close mobile menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
        });
    });

    /* ==============================================
       3. ACTIVE NAV LINK HIGHLIGHTING
       ============================================== */
    const sections = document.querySelectorAll("section[id]");
    
    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        
        sections.forEach((section) => {
            // Offset for fixed header
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

    /* ==============================================
       4. PRO SCROLL REVEAL ANIMATIONS (IntersectionObserver)
       ============================================== */
    const revealElements = document.querySelectorAll('.fade-up');

    const revealOptions = {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

});