<<<<<<< HEAD

document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);
    animateHeroSection();
    animateFeaturedEpisodes();
    animateCharacterProfile();
    animateGalleries();
    animateCharacterSpotlight();
    animateFooter();

    function animateHeroSection() {
        const heroTitle = document.querySelector('.hero h1');
        if (heroTitle) {
            const text = heroTitle.textContent;
            heroTitle.textContent = '';
            typewriterEffect(heroTitle, text, 100);
        }
        const glowElements = document.querySelectorAll('.hero h1, .judul-gambar, .judul-gambar2');
        glowElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(el, {
                    duration: 0.3
                });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(el, {
                    textShadow: 'none',
                    duration: 0.3
                });
            });
        });
    }

    function animateFeaturedEpisodes() {
        const episodeCards = document.querySelectorAll('.episode-card');
        episodeCards.forEach((card, index) => {
            gsap.from(card, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: index * 0.15,
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: 1.03,
                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                    duration: 0.3
                });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    scale: 1,
                    boxShadow: 'none',
                    duration: 0.3
                });
            });
        });

        const playButtons = document.querySelectorAll('.play-btn');
        playButtons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                gsap.to(btn, {
                    scale: 1.2,
                    backgroundColor: '#007bff',
                    duration: 0.2
                });
            });
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    scale: 1,
                    backgroundColor: '#ffffff',
                    duration: 0.2
                });
            });
        });
    }

    function animateCharacterProfile() {
        gsap.from('#furina-profile img', {
            opacity: 0,
            x: -50,
            duration: 1,
            scrollTrigger: {
                trigger: '#furina-profile',
                start: "top 80%"
            }
        });

        gsap.from('#furina-profile h3, #furina-profile p, #furina-profile li', {
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '#furina-profile',
                start: "top 70%"
            }
        });

        gsap.from('#furina-profile h2', {
            opacity: 0,
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.5,
            scrollTrigger: {
                trigger: '#furina-profile',
                start: "top 90%"
            }
        });
    }

    function animateGalleries() {
        const galleries = [
            { id: '#furina-gallery', direction: 'left', index: 0 },
            { id: '#furina-gallery2', direction: 'right', index: 0 },
            { id: '#furina-gallery3', direction: 'left', index: 1 },
            { id: '#furina-gallery4', direction: 'right', index: 1 }
        ];

        galleries.forEach(gallery => {
            animateGallery(gallery.id, gallery.direction, gallery.index);
        });

        function animateGallery(gallerySelector, direction, index) {
            const gallery = document.querySelector(gallerySelector);
            if (!gallery) return;

            const img = gallery.querySelector('img');
            const content = gallery.querySelector('.text-center');
            const title = gallery.querySelector('.judul-gambar, .judul-gambar2, .judul-gambar3, .judul-gambar4');
            const button = gallery.querySelector('.btn-watch');

            const imgFrom = direction === 'left' ? { x: -100, opacity: 0 } : { x: 100, opacity: 0 };
            const contentFrom = direction === 'left' ? { x: 100, opacity: 0 } : { x: -100, opacity: 0 };
            const delay = index * 0.3;

            gsap.from(img, {
                ...imgFrom,
                duration: 1,
                delay: delay,
                scrollTrigger: {
                    trigger: gallery,
                    start: "top 80%"
                }
            });

            gsap.from(title, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: delay + 0.2,
                scrollTrigger: {
                    trigger: gallery,
                    start: "top 80%"
                }
            });

            gsap.from(button, {
                y: 20,
                opacity: 0,
                duration: 0.6,
                delay: delay + 0.4,
                scrollTrigger: {
                    trigger: gallery,
                    start: "top 80%"
                }
            });

            button.addEventListener('mouseenter', () => {
                gsap.to(button, {
                    y: -3,
                    boxShadow: '0 4px 15px rgba(98, 164, 255, 0.4)',
                    duration: 0.3
                });
            });
            button.addEventListener('mouseleave', () => {
                gsap.to(button, {
                    y: 0,
                    boxShadow: 'none',
                    duration: 0.3
                });
            });
        }
    }

    function animateCharacterSpotlight() {
        const spotlight = document.querySelector('.characters-section');
        if (!spotlight) return;
        gsap.from('.character-card', {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: spotlight,
                start: "top 80%"
            }
        });

        const characterCards = document.querySelectorAll('.character-card');
        characterCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card.querySelector('.character-img'), {
                    scale: 1.1,
                    boxShadow: '0 10px 30px rgba(98, 164, 255, 0.5)',
                    duration: 0.3
                });
                gsap.to(card.querySelector('h3'), {
                    y: -5,
                    color: '#ffffff',
                    duration: 0.3
                });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(card.querySelector('.character-img'), {
                    scale: 1,
                    boxShadow: 'none',
                    duration: 0.3
                });
                gsap.to(card.querySelector('h3'), {
                    y: 0,
                    color: 'inherit',
                    duration: 0.3
                });
            });
        });
    }

    function animateFooter() {
        const footer = document.querySelector('footer');
        if (!footer) return;

        gsap.from('footer .col-lg-4, footer .col-lg-2', {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: footer,
                start: "top 90%"
            }
        });

        gsap.from('.social-links a', {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
                trigger: footer,
                start: "top 80%"
            }
        });

        const input = document.querySelector('.subscribe-form input');
        if (input) {
            input.addEventListener('focus', () => {
                gsap.to(input, {
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    duration: 0.3
                });
            });
            input.addEventListener('blur', () => {
                gsap.to(input, {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    duration: 0.3
                });
            });
        }
    }


    function typewriterEffect(element, text, speed) {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }

    function createRipple(e) {
        const button = e.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');

        const existingRipple = button.querySelector('.ripple');
        if (existingRipple) {
            existingRipple.remove();
        }

        button.appendChild(circle);

        gsap.fromTo(circle,
            { scale: 0, opacity: 1 },
            { scale: 4, opacity: 0, duration: 0.6, ease: "power2.out" }
        );
    }

    ScrollTrigger.refresh();
=======

document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);
    animateHeroSection();
    animateFeaturedEpisodes();
    animateCharacterProfile();
    animateGalleries();
    animateCharacterSpotlight();
    animateFooter();

    function animateHeroSection() {
        const heroTitle = document.querySelector('.hero h1');
        if (heroTitle) {
            const text = heroTitle.textContent;
            heroTitle.textContent = '';
            typewriterEffect(heroTitle, text, 100);
        }
        const glowElements = document.querySelectorAll('.hero h1, .judul-gambar, .judul-gambar2');
        glowElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(el, {
                    duration: 0.3
                });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(el, {
                    textShadow: 'none',
                    duration: 0.3
                });
            });
        });
    }

    function animateFeaturedEpisodes() {
        const episodeCards = document.querySelectorAll('.episode-card');
        episodeCards.forEach((card, index) => {
            gsap.from(card, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: index * 0.15,
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: 1.03,
                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                    duration: 0.3
                });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    scale: 1,
                    boxShadow: 'none',
                    duration: 0.3
                });
            });
        });

        const playButtons = document.querySelectorAll('.play-btn');
        playButtons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                gsap.to(btn, {
                    scale: 1.2,
                    backgroundColor: '#007bff',
                    duration: 0.2
                });
            });
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    scale: 1,
                    backgroundColor: '#ffffff',
                    duration: 0.2
                });
            });
        });
    }

    function animateCharacterProfile() {
        gsap.from('#furina-profile img', {
            opacity: 0,
            x: -50,
            duration: 1,
            scrollTrigger: {
                trigger: '#furina-profile',
                start: "top 80%"
            }
        });

        gsap.from('#furina-profile h3, #furina-profile p, #furina-profile li', {
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '#furina-profile',
                start: "top 70%"
            }
        });

        gsap.from('#furina-profile h2', {
            opacity: 0,
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.5,
            scrollTrigger: {
                trigger: '#furina-profile',
                start: "top 90%"
            }
        });
    }

    function animateGalleries() {
        const galleries = [
            { id: '#furina-gallery', direction: 'left', index: 0 },
            { id: '#furina-gallery2', direction: 'right', index: 0 },
            { id: '#furina-gallery3', direction: 'left', index: 1 },
            { id: '#furina-gallery4', direction: 'right', index: 1 }
        ];

        galleries.forEach(gallery => {
            animateGallery(gallery.id, gallery.direction, gallery.index);
        });

        function animateGallery(gallerySelector, direction, index) {
            const gallery = document.querySelector(gallerySelector);
            if (!gallery) return;

            const img = gallery.querySelector('img');
            const content = gallery.querySelector('.text-center');
            const title = gallery.querySelector('.judul-gambar, .judul-gambar2, .judul-gambar3, .judul-gambar4');
            const button = gallery.querySelector('.btn-watch');

            const imgFrom = direction === 'left' ? { x: -100, opacity: 0 } : { x: 100, opacity: 0 };
            const contentFrom = direction === 'left' ? { x: 100, opacity: 0 } : { x: -100, opacity: 0 };
            const delay = index * 0.3;

            gsap.from(img, {
                ...imgFrom,
                duration: 1,
                delay: delay,
                scrollTrigger: {
                    trigger: gallery,
                    start: "top 80%"
                }
            });

            gsap.from(title, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: delay + 0.2,
                scrollTrigger: {
                    trigger: gallery,
                    start: "top 80%"
                }
            });

            gsap.from(button, {
                y: 20,
                opacity: 0,
                duration: 0.6,
                delay: delay + 0.4,
                scrollTrigger: {
                    trigger: gallery,
                    start: "top 80%"
                }
            });

            button.addEventListener('mouseenter', () => {
                gsap.to(button, {
                    y: -3,
                    boxShadow: '0 4px 15px rgba(98, 164, 255, 0.4)',
                    duration: 0.3
                });
            });
            button.addEventListener('mouseleave', () => {
                gsap.to(button, {
                    y: 0,
                    boxShadow: 'none',
                    duration: 0.3
                });
            });
        }
    }

    function animateCharacterSpotlight() {
        const spotlight = document.querySelector('.characters-section');
        if (!spotlight) return;
        gsap.from('.character-card', {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: spotlight,
                start: "top 80%"
            }
        });

        const characterCards = document.querySelectorAll('.character-card');
        characterCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card.querySelector('.character-img'), {
                    scale: 1.1,
                    boxShadow: '0 10px 30px rgba(98, 164, 255, 0.5)',
                    duration: 0.3
                });
                gsap.to(card.querySelector('h3'), {
                    y: -5,
                    color: '#ffffff',
                    duration: 0.3
                });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(card.querySelector('.character-img'), {
                    scale: 1,
                    boxShadow: 'none',
                    duration: 0.3
                });
                gsap.to(card.querySelector('h3'), {
                    y: 0,
                    color: 'inherit',
                    duration: 0.3
                });
            });
        });
    }

    function animateFooter() {
        const footer = document.querySelector('footer');
        if (!footer) return;

        gsap.from('footer .col-lg-4, footer .col-lg-2', {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: footer,
                start: "top 90%"
            }
        });

        gsap.from('.social-links a', {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
                trigger: footer,
                start: "top 80%"
            }
        });

        const input = document.querySelector('.subscribe-form input');
        if (input) {
            input.addEventListener('focus', () => {
                gsap.to(input, {
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    duration: 0.3
                });
            });
            input.addEventListener('blur', () => {
                gsap.to(input, {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    duration: 0.3
                });
            });
        }
    }


    function typewriterEffect(element, text, speed) {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }

    function createRipple(e) {
        const button = e.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');

        const existingRipple = button.querySelector('.ripple');
        if (existingRipple) {
            existingRipple.remove();
        }

        button.appendChild(circle);

        gsap.fromTo(circle,
            { scale: 0, opacity: 1 },
            { scale: 4, opacity: 0, duration: 0.6, ease: "power2.out" }
        );
    }

    ScrollTrigger.refresh();
>>>>>>> 16530512b57ab2533c3c43fc5c1b0bfbbff046c9
});