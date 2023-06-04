/************************
 ******* SWIPER *********
 ************************/

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 18,

    breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2.47,
      spaceBetween: 18
    },
    // when window width is >= 1200px
    1138: {
      slidesPerView: 4,
      spaceBetween: 18
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});