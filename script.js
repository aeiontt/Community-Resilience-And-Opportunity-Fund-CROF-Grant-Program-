/* =========================
   NAVIGATION SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(7, 42, 96, 0.95)";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)";
    } else {
        navbar.style.background = "rgba(7, 42, 96, 0.75)";
        navbar.style.boxShadow = "none";
    }
});


/* =========================
   ANIMATED IMPACT COUNTERS
========================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {
        const target = +counter.dataset.target;
        const current = +counter.innerText;

        const increment = target / 150;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText =
                target.toLocaleString() + "+";
        }
    };

    updateCounter();

});


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition =
        "all 0.8s ease";

    observer.observe(card);

});


/* =========================
   BUTTON INTERACTIONS
========================= */

const buttons = document.querySelectorAll(
    ".primary-btn, .nav-button"
);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.boxShadow =
        "0 10px 25px rgba(212,175,55,0.6)";

    });


    button.addEventListener("mouseleave", () => {

        button.style.boxShadow =
        "none";

    });

});


/* =========================
   PAGE LOADED MESSAGE
========================= */

window.addEventListener("load", () => {

    console.log(
        "CROF Grants Premium V2 Loaded Successfully"
    );

});