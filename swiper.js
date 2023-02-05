var swiper = new Swiper(".mySwiper", {
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
       },
        autoplay: {
        delay: 3000
    },
    speed: 1200,
  loom: true,
    });