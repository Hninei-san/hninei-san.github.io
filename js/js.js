var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,  /* Adjust for responsiveness */
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        576: { slidesPerView: 1 }
    }
});


