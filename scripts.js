document.addEventListener("DOMContentLoaded", function () {
    function initializeSwiper() {
        const backgroundMusic = document.getElementById('background-music');
        backgroundMusic.volume = 0.05; // Ajusta el volumen (0.0 a 1.0)
        backgroundMusic.play();
        new Swiper(".swiper-container", {
            loop: true,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 1,
            effect: "cards",
            cardsEffect: {
            perSlideOffset: 8,
            perSlideRotate: 2,
            slideShadows: false,
            }
        });
    }

    function showSwiper() {
        const questionContainer = document.getElementById('question-container');
        const swiperContainer = document.getElementById('swiper-container');

        questionContainer.classList.add('fade-out');
        setTimeout(() => {
            questionContainer.style.display = 'none';
            swiperContainer.style.display = 'block';
            swiperContainer.classList.add('fade-in');
            setTimeout(initializeSwiper, 1); // Inicializa Swiper después de 1 segundo
        }, 1000); // Tiempo de la animación fade-out
    }

    function showImage() {
        const questionContainer = document.getElementById('question-container');
        const imageContainer = document.getElementById('image-container');

        questionContainer.classList.add('fade-out');
        setTimeout(() => {
            questionContainer.style.display = 'none';
            imageContainer.style.display = 'block';
            imageContainer.classList.add('fade-in');
        }, 1000); // Tiempo de la animación fade-out
    }

    // Asegúrate de que las funciones showSwiper y showImage estén disponibles globalmente
    window.showSwiper = showSwiper;
    window.showImage = showImage;
});