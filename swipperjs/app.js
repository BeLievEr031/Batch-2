const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: false,
    // cursor: 'grab',
    // grabCursor: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
