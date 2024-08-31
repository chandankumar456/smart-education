
var swiper = new Swiper(".div-testimonial-pg", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    disableOnInteraction: false,
    autoplay:{
      delay:2000
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });