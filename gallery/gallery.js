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
});
