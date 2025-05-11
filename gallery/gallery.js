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

    // Set href of source buttons dynamically based on data-source attribute for all swiper slides including content2-gallery
    const swiperSlides = document.querySelectorAll('#gallery .swiper-slide, #content2-gallery .swiper-slide');
    swiperSlides.forEach(slide => {
        const sourceUrl = slide.getAttribute('data-source');
        const sourceButton = slide.querySelector('.source-button');
        if (sourceUrl && sourceButton) {
            sourceButton.href = sourceUrl;
        }
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

    // New Lightbox Modal Feature
    // Create modal elements
    const modal = document.createElement('div');
    modal.id = 'lightbox-modal';
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    modal.style.zIndex = '1000';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.cursor = 'pointer';

    const modalContent = document.createElement('div');
    modalContent.style.position = 'relative';
    modalContent.style.maxWidth = '90%';
    modalContent.style.maxHeight = '90%';

    const modalImage = document.createElement('img');
    modalImage.style.width = '100%';
    modalImage.style.height = 'auto';
    modalImage.style.borderRadius = '8px';
    modalImage.style.boxShadow = '0 0 15px rgba(255,255,255,0.5)';
    modalImage.alt = 'Gallery Image';

    // Navigation buttons
    const prevButton = document.createElement('button');
    prevButton.innerHTML = '&#10094;';
    prevButton.style.position = 'absolute';
    prevButton.style.top = '50%';
    prevButton.style.left = '10px';
    prevButton.style.transform = 'translateY(-50%)';
    prevButton.style.fontSize = '2rem';
    prevButton.style.color = 'white';
    prevButton.style.background = 'transparent';
    prevButton.style.border = 'none';
    prevButton.style.cursor = 'pointer';
    prevButton.style.userSelect = 'none';

    const nextButton = document.createElement('button');
    nextButton.innerHTML = '&#10095;';
    nextButton.style.position = 'absolute';
    nextButton.style.top = '50%';
    nextButton.style.right = '10px';
    nextButton.style.transform = 'translateY(-50%)';
    nextButton.style.fontSize = '2rem';
    nextButton.style.color = 'white';
    nextButton.style.background = 'transparent';
    nextButton.style.border = 'none';
    nextButton.style.cursor = 'pointer';
    nextButton.style.userSelect = 'none';

    // Close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.fontSize = '2rem';
    closeButton.style.color = 'white';
    closeButton.style.background = 'transparent';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
    closeButton.style.userSelect = 'none';

    modalContent.appendChild(modalImage);
    modalContent.appendChild(prevButton);
    modalContent.appendChild(nextButton);
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Gallery images array and current index
    let galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
    let currentIndex = 0;

    // Function to open modal with specific image index
    function openModal(index) {
        currentIndex = index;
        modalImage.src = galleryItems[currentIndex].src;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Disable scroll on body
    }

    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Enable scroll on body
    }

    // Function to show next image
    function showNext() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        modalImage.src = galleryItems[currentIndex].src;
    }

    // Function to show previous image
    function showPrev() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        modalImage.src = galleryItems[currentIndex].src;
    }

    // Event listeners
    function addGalleryItemListeners() {
        galleryItems.forEach((img, index) => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', (e) => {
                e.preventDefault();
                openModal(index);
            });
        });
    }
    addGalleryItemListeners();

    closeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        closeModal();
    });

    modal.addEventListener('click', () => {
        closeModal();
    });

    prevButton.addEventListener('click', (e) => {
        e.stopPropagation();
        showPrev();
    });

    nextButton.addEventListener('click', (e) => {
        e.stopPropagation();
        showNext();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'flex') {
            if (e.key === 'ArrowRight') {
                showNext();
            } else if (e.key === 'ArrowLeft') {
                showPrev();
            } else if (e.key === 'Escape') {
                closeModal();
            }
        }
    });

    // Lazy loading for gallery images
    galleryItems.forEach(img => {
        img.loading = 'lazy';
    });

    // Upload form handling
    const uploadForm = document.getElementById('upload-form');
    const imageInput = document.getElementById('image-input');
    const sourceInput = document.getElementById('source-input');
    const galleryRow = document.getElementById('gallery-row');

    uploadForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const file = imageInput.files[0];
        const sourceUrl = sourceInput.value.trim();

        if (!file) {
            alert('Please select an image file.');
            return;
        }

        if (!sourceUrl) {
            alert('Please enter the source URL.');
            return;
        }

        // Validate source URL format
        try {
            new URL(sourceUrl);
        } catch (_) {
            alert('Please enter a valid URL.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function (event) {
            const imgSrc = event.target.result;

            // Create new gallery item elements
            const colDiv = document.createElement('div');
            colDiv.className = 'col-6 col-sm-4 col-md-3 col-lg-2';
            colDiv.style.position = 'relative';

            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = 'Uploaded Image';
            img.className = 'gallery-item img-fluid';
            img.loading = 'lazy';

            const sourceLink = document.createElement('a');
            sourceLink.href = sourceUrl;
            sourceLink.target = '_blank';
            sourceLink.rel = 'noopener noreferrer';
            sourceLink.className = 'source-button text-center';
            sourceLink.textContent = 'Lihat Sumber';

            colDiv.appendChild(img);
            colDiv.appendChild(sourceLink);

            galleryRow.appendChild(colDiv);

            // Update galleryItems and add click listener for new image
            galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
            addGalleryItemListeners();

            // Reset form
            uploadForm.reset();
        };

        reader.readAsDataURL(file);
    });
});
