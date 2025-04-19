






const swiper = new Swiper('.payment-swiper', {
    loop: true,
    slidesPerView: 4,
    speed: 900,



    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {slidesPerView: 2.5,},
        490: {slidesPerView: 3,},
        620: {slidesPerView: 3,},
        810: {slidesPerView: 3},
        992: {slidesPerView: 3},
        1096: {slidesPerView: 3},
        1232: {slidesPerView: 4},
        1920: {slidesPerView: 4},
    },


});
