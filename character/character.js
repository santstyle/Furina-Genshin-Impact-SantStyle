// PAGE LOAD ANIMATION 
if (typeof gsap !== 'undefined') {
    gsap.fromTo('body',
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power1.out" }
    );
}

// PAGE TRANSITION ANIMATION ON NAVIGATION LINKS 
const navLinks = document.querySelectorAll('.nav-link');
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



