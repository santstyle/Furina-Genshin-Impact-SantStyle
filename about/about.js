
document.addEventListener('DOMContentLoaded', () => {
    const contentSections = document.querySelectorAll('.content-section');
    let currentIndex = 0;

    // Hide all sections except the first
    contentSections.forEach((section, index) => {
        if (index !== 0) {
            section.style.display = 'none';
        }
    });

    // Add event listeners to Next buttons
    const nextButtons = document.querySelectorAll('.next-btn');
    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            contentSections[currentIndex].style.display = 'none';
            currentIndex++;
            if (currentIndex < contentSections.length) {
                contentSections[currentIndex].style.display = 'block';
                contentSections[currentIndex].scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Initialize styles for animation
    contentSections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });

    // Sequential fade-in on page load
    contentSections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }, index * 300);
    });

    // Intersection Observer for scroll reveal
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealOnScroll, observerOptions);

    contentSections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scrolling
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

    // PAGE LOAD ANIMATION 
    gsap.fromTo('body', 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.8, ease: "power1.out" }
    );

    // PAGE TRANSITION ANIMATION ON NAVIGATION LINKS 
    const navLinks = document.querySelectorAll('a[href]:not([href^="#"])');
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const href = link.getAttribute('href');
            if (!href || href.startsWith('#')) {
                return;
            }
            gsap.to('body', {
                duration: 0.6,
                opacity: 0,
                ease: "power1.inOut",
                onComplete: () => {
                    window.location.href = href;
                }
            });
        });
    });
});
