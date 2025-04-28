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
});
