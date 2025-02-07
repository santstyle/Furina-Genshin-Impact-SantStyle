document.addEventListener("DOMContentLoaded", function () {
    // Ambil semua elemen yang ingin dianimasikan
    const cards = document.querySelectorAll(".card");
    const paragraf = document.querySelector(".paragraf");

    // Tambahkan class animasi ke setiap card
    cards.forEach((card, index) => {
    setTimeout(() => {
        card.classList.remove("hidden");
        card.classList.add("fade-in");
      }, index * 300); // Delay animasi untuk setiap card
    });

    // Animasi untuk paragraf
    setTimeout(() => {
    paragraf.classList.remove("hidden");
    paragraf.classList.add("slide-up");
    }, cards.length * 300 + 300); // Delay animasi setelah card terakhir
});