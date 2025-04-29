document.addEventListener("DOMContentLoaded", function () {
    const loreCards = document.querySelectorAll(".lore-card");
    const funFact = document.querySelector(".fun-fact");

    // Set initial state for animation
    loreCards.forEach(card => {
        card.classList.add("hidden");
    });
    if (funFact) {
        funFact.classList.add("hidden");
    }

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                entry.target.classList.remove("hidden");
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealOnScroll, observerOptions);

    loreCards.forEach(card => {
        observer.observe(card);
    });

    if (funFact) {
        observer.observe(funFact);
    }
});
