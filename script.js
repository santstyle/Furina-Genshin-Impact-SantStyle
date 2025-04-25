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
            popup.style.opacity = 1; 
        }, 10);
    });

    // CLOSE CLICK POP UP
    closePopupButton.addEventListener('click', function() {
    popup.style.opacity = 0; 
    setTimeout(() => {
        popup.style.display = 'none'; 
    }, 500); 
    });

    // TUTUP POP UP JIKA KLIK DI LUAR KONTEN POP UP
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.opacity = 0; 
            setTimeout(() => {
                popup.style.display = 'none'; 
            }, 500);
        }
    });
} else {
    console.error('Popup atau elemen terkait tidak ditemukan');
}

