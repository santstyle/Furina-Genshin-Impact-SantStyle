document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 25,
            },
        },
    });

    // Image loading animation
    const galleryImages = document.querySelectorAll('#gallery img');

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll animations
    function handleScrollAnimations() {
        galleryImages.forEach((img, index) => {
            if (isInViewport(img) && !img.classList.contains('fade-in')) {
                setTimeout(() => {
                    img.classList.add('fade-in');
                }, index * 100);
            }
        });
    }

    // Initial load animation
    setTimeout(() => {
        galleryImages.forEach((img, index) => {
            setTimeout(() => {
                img.classList.add('fade-in');
            }, index * 100);
        });
    }, 500);

    // Add scroll event listener for new images coming into view
    window.addEventListener('scroll', handleScrollAnimations);

    // Smooth hover effect for gallery images
    galleryImages.forEach(img => {
        img.addEventListener('mouseenter', function () {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });

        img.addEventListener('mouseleave', function () {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });

        // Add click event to navigate to image info page
        img.addEventListener('click', function () {
            // Extract image filename without extension and spaces for id
            const src = this.getAttribute('src');
            const match = src.match(/furina \((\d+)\)\.jpeg$/);
            if (match) {
                const imgId = 'furina' + match[1];
                window.location.href = `image-info.html?img=${imgId}`;
            }
        });
    });

    // Shuffle content 2 gallery images
    const content2Gallery = document.getElementById('content2-gallery');
    if (content2Gallery) {
        const slides = Array.from(content2Gallery.children);
        for (let i = slides.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [slides[i], slides[j]] = [slides[j], slides[i]];
        }
        slides.forEach(slide => content2Gallery.appendChild(slide));
    }
});
