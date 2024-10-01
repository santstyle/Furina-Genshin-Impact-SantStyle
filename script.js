// AMBIL ELEMENT
const openPopupButton = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('closePopup');

// CEK JIKA ELEMEN TERDAPAT DI HALAMAN
if (popup && openPopup && closePopup) {
    // START CLICK POP UP
    openPopupButton.addEventListener('click', function() {
        popup.style.display = 'block';
        setTimeout(() => {
            popup.style.opacity = 1; // Fade-in effect
        }, 10);
    });

    // CLOSE CLICK POP UP
    closePopupButton.addEventListener('click', function() {
    popup.style.opacity = 0; // Fade-out effect
    setTimeout(() => {
        popup.style.display = 'none'; // Hide after fade out
    }, 500); // Match the timeout with the CSS transition
    });

    // TUTUP POP UP JIKA KLIK DI LUAR KONTEN POP UP
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.opacity = 0; // Fade-out effect
            setTimeout(() => {
                popup.style.display = 'none'; // Hide after fade out
            }, 500); // Durasi sama seperti di atas
        }
    });
} else {
    console.error('Popup atau elemen terkait tidak ditemukan');
}

