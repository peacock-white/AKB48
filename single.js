'use strict';

{

  const swiper1 = new Swiper('.swiper1', {
    loop: true,
    loopAdditionalSlides: 1,
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
      delay: 1000,
    },
    // effect: 'fade',
    speed: 1000,
    navigation: {
      prevEl: '.my-button-prev',
      nextEl: '.my-button-next',
    },
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    //   type: 'fraction',
    // },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    watchSlidesProgress: true,
  });

 const swiper2 = new Swiper('.swiper2', {
    loop: true,
    loopAdditionalSlides: 1,
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
      delay: 0,
    },
    speed: 3000,
   
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    //   type: 'fraction',
    // },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    watchSlidesProgress: true,
  });














}