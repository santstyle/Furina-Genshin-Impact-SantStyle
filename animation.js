// animation.js
document.addEventListener('DOMContentLoaded', function () {
    // Initialize GSAP and plugins
    gsap.registerPlugin(ScrollTrigger);

    // 1. HERO SECTION ANIMATIONS
    animateHeroSection();

    // 2. FEATURED EPISODES ANIMATIONS
    animateFeaturedEpisodes();

    // 3. CHARACTER PROFILE ANIMATIONS
    animateCharacterProfile();

    // 4. GALLERY ANIMATIONS
    animateGalleries();

    // 5. CHARACTER SPOTLIGHT ANIMATIONS
    animateCharacterSpotlight();

    // 6. FOOTER ANIMATIONS
    animateFooter();

    // Helper functions for each section
    function animateHeroSection() {
        // Typewriter effect for main title
        const heroTitle = document.querySelector('.hero h1');
        if (heroTitle) {
            const text = heroTitle.textContent;
            heroTitle.textContent = '';
            typewriterEffect(heroTitle, text, 100);
        }

        // Glow on hover
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
        // Episode cards animation
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

            // Hover effect
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

        // Play button animation
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
        // Profile image animation
        gsap.from('#furina-profile img', {
            opacity: 0,
            x: -50,
            duration: 1,
            scrollTrigger: {
                trigger: '#furina-profile',
                start: "top 80%"
            }
        });

        // Text content animation
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

        // Border animation
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
        // Animasi untuk semua gallery (1-4)
        const galleries = [
            { id: '#furina-gallery', direction: 'left', index: 0 }, // Gallery 1
            { id: '#furina-gallery2', direction: 'right', index: 0 }, // Gallery 2
            { id: '#furina-gallery3', direction: 'left', index: 1 }, // Gallery 3
            { id: '#furina-gallery4', direction: 'right', index: 1 } // Gallery 4
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
    
            // Image animation
            gsap.from(img, {
                ...imgFrom,
                duration: 1,
                delay: delay,
                scrollTrigger: {
                    trigger: gallery,
                    start: "top 80%"
                }
            });
    
            // Title animation
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
    
            // Button animation
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
    
            // Button hover effect
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

        // Card animation
        gsap.from('.character-card', {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: spotlight,
                start: "top 80%"
            }
        });

        // Image hover effect
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

        // Column animations
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

        // Social icons animation
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

        // Input focus effect
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

    // Common animation functions
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

    // Initialize scroll animations
    ScrollTrigger.refresh();
});