document.addEventListener('DOMContentLoaded', () => {
    const episodeCards = document.querySelectorAll('.episode-card');
    const characterCards = document.querySelectorAll('.character-card');

    const animateCards = (cards) => {
        cards.forEach((card, index) => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            setTimeout(() => {
                card.style.opacity = 1;
                card.style.transform = 'translateY(0)';
            }, index * 150);
        });
    };

    animateCards(episodeCards);
    animateCards(characterCards);

    // Scroll reveal animation for furina gameplay guide section
    const guideSection = document.getElementById('furina-gameplay-guide');
    if (guideSection) {
        const children = Array.from(guideSection.children);
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const revealOnScroll = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    target.classList.add('visible');
                    observer.unobserve(target);
                }
            });
        };

        const observer = new IntersectionObserver(revealOnScroll, observerOptions);
        children.forEach((child, index) => {
            child.style.transitionDelay = `${index * 150}ms`;
            observer.observe(child);
        });
    }
});
