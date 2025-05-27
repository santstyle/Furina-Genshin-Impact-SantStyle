document.addEventListener('DOMContentLoaded', () => {
    // Animate hero 
    const heroTitle = document.querySelector('.hero h1');
    const heroRating = document.querySelector('.hero .rating');
    const heroDescription = document.querySelector('.hero .description');
    const heroActions = document.querySelector('.actions');
    const heroMetaInfo = document.querySelector('.meta-info');

    if (heroTitle) {
        heroTitle.style.opacity = 0;
        heroTitle.style.transform = 'translateY(20px)';
        heroTitle.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        setTimeout(() => {
            heroTitle.style.opacity = 1;
            heroTitle.style.transform = 'translateY(0)';
        }, 200);
    }

    if (heroRating) {
        heroRating.style.opacity = 0;
        heroRating.style.transform = 'translateY(20px)';
        heroRating.style.transition = 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s';
        setTimeout(() => {
            heroRating.style.opacity = 1;
            heroRating.style.transform = 'translateY(0)';
        }, 500);
    }

    if (heroDescription) {
        heroDescription.style.opacity = 0;
        heroDescription.style.transform = 'translateY(20px)';
        heroDescription.style.transition = 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s';
        setTimeout(() => {
            heroDescription.style.opacity = 1;
            heroDescription.style.transform = 'translateY(0)';
        }, 800);
    }

    if (heroActions) {
        heroActions.style.opacity = 0;
        heroActions.style.transform = 'translateY(20px)';
        heroActions.style.transition = 'opacity 0.8s ease-out 0.9s, transform 0.8s ease-out 0.9s';
        setTimeout(() => {
            heroActions.style.opacity = 1;
            heroActions.style.transform = 'translateY(0)';
        }, 1100);
    }

    if (heroMetaInfo) {
        heroMetaInfo.style.opacity = 0;
        heroMetaInfo.style.transform = 'translateY(20px)';
        heroMetaInfo.style.transition = 'opacity 0.8s ease-out 1.1s, transform 0.8s ease-out 1.1s';
        setTimeout(() => {
            heroMetaInfo.style.opacity = 1;
            heroMetaInfo.style.transform = 'translateY(0)';
        }, 1300);
    }

    // SMOOTH SCROLL
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // NAVBAR ACTIVE LINK
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (href === '/' && currentPath === '/index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // NAVBAR TOGGLER ANIMATION
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
        navbarToggler.addEventListener('click', () => {
            navbarToggler.classList.toggle('open');
        });
    }

    // PAGE LOAD ANIMATION 
    if (typeof gsap !== 'undefined') {
        gsap.fromTo('body',
            { opacity: 0 },
            { opacity: 1, duration: 0.8, ease: "power1.out" }
        );
    }

    // PAGE TRANSITION ANIMATION ON NAVIGATION LINKS 
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = link.getAttribute('href');
            if (!href || href.startsWith('#')) {
                return;
            }
            e.preventDefault();
            if (typeof gsap !== 'undefined') {
                gsap.to('body', {
                    duration: 0.6,
                    opacity: 0,
                    ease: "power1.inOut",
                    onComplete: () => {
                        window.location.href = href;
                    }
                });
            } else {
                window.location.href = href;
            }
        });
    });
});

// EPISODE 
document.querySelectorAll('.episode-thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const url = thumbnail.getAttribute('data-url'); 
        if (url) {
            window.open(url, '_blank'); 
        }
    });
});
