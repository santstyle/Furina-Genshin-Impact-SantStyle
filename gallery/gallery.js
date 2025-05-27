<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('upload-form');
    const uploadPopup = document.getElementById('upload-popup');
    const uploadPopupMessage = document.getElementById('upload-popup-message');
    const uploadPopupClose = document.getElementById('upload-popup-close');

    function showPopup(message) {
        uploadPopupMessage.textContent = message;
        uploadPopup.classList.add('show');
        uploadPopup.classList.remove('hidden');
    }

    function hidePopup() {
        uploadPopup.classList.remove('show');
        uploadPopup.classList.add('hidden');
    }

    uploadForm.addEventListener('submit', (event) => {
        event.preventDefault();
        showPopup('Maaf fitur ini sedang dalam perbaikan');
    });

    if (uploadPopupClose) {
        uploadPopupClose.addEventListener('click', () => {
            console.log('Close button clicked');
            hidePopup();
        });
    } 

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
=======
document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('upload-form');
    const uploadPopup = document.getElementById('upload-popup');
    const uploadPopupMessage = document.getElementById('upload-popup-message');
    const uploadPopupClose = document.getElementById('upload-popup-close');

    function showPopup(message) {
        uploadPopupMessage.textContent = message;
        uploadPopup.classList.add('show');
        uploadPopup.classList.remove('hidden');
    }

    function hidePopup() {
        uploadPopup.classList.remove('show');
        uploadPopup.classList.add('hidden');
    }
    uploadPopupClose.addEventListener('click', () => {
        hidePopup();
    });

    uploadForm.addEventListener('submit', (event) => {
        event.preventDefault();
        showPopup('Maaf fitur ini sedang dalam perbaikan');
    });


    // PAGE LOAD ANIMATION (fade in opacity from 0 to 1)
    gsap.fromTo('body', 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.8, ease: "power1.out" }
    );

    // PAGE TRANSITION ANIMATION ON NAVIGATION LINKS (fade out only)
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
>>>>>>> 16530512b57ab2533c3c43fc5c1b0bfbbff046c9
