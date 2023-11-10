const dest = new Swiper('.dest-cards', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 32,
  slidesPerView: 3,

  navigation: {
    nextEl: '.destinations__right',
    prevEl: '.destinations__left'
  },
  
  breakpoints: {
    1205:{
      spaceBetween: 32,
      slidesPerView: 3
    },
    1015: {
      spaceBetween: 16,
      slidesPerView: 2
    },
    0:{
      spaceBetween: 0,
      slidesPerView: 1
    }
  }
});

const offer = new Swiper('.offer-cards', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 32,
  slidesPerView: 3,

  navigation: {
    nextEl: '.offer__right',
    prevEl: '.offer__left'
  },
  
  breakpoints: {
    1205:{
      spaceBetween: 32,
      slidesPerView: 3
    },
    1015: {
      spaceBetween: 16,
      slidesPerView: 2
    },
    0:{
      spaceBetween: 0,
      slidesPerView: 1
    }
  }
});

const trip = new Swiper('.trip-cards', {
  direction: 'horizontal',
  loop: false,
  spaceBetween: 32,
  slidesPerView: 3.5,

  breakpoints: {
    1440:{
      spaceBetween: 32,
      slidesPerView: 3.5
    },
    1205:{
      spaceBetween: 28,
      slidesPerView: 2.5
    },
    1015: {
      spaceBetween: 16,
      slidesPerView: 2
    },
    0:{
      spaceBetween: 0,
      slidesPerView: 1
    }
  }
})

