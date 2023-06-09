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
    1200: {
      slidesPerView: 4,
      spaceBetween: 18
    }
  },
    
    mousewheel: { },


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

});