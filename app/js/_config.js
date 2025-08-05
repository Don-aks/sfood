const config = {};

config.select = {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
};

config.selector = '.js-range';
config.range = {
  selector: config.selector,
  label: () => '',
};

config.restaurantsSwiper = {
  pagination: {
    el: '.restaurant-swiper__pagination',
    type: 'bullets',
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
};

config.reviewsSwiper = {
  navigation: {
    prevEl: '.reviews-slider__btn--prev',
    nextEl: '.reviews-slider__btn--next',
  },
  pagination: {
    el: '.reviews-slider__pagination',
    type: 'bullets',
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    320: {
      pagination: {
        enabled: false,
      },
    },

    560: {
      pagination: {
        el: '.reviews-slider__pagination',
        type: 'bullets',
        clickable: true,
      },
    },
  },
};

config.productGallerySwiper = {
  navigation: {
    prevEl: '.product-gallery__btn--prev',
    nextEl: '.product-gallery__btn--next',
  },
  keyboard: {
    enabled: true,
  },
};

config.offertsSwiper = {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 5,
  simulateTouch: false,
  keyboard: {
    enabled: true,
  },
  navigation: {
    prevEl: '.offerts__btn--prev',
    nextEl: '.offerts__btn--next',
  },
  pagination: {
    el: '.offerts__pagination',
    type: 'bullets',
    clickable: true,
    enabled: true,
  },
  breakpoints: {
    320: {
      pagination: {
        el: '.offerts__pagination',
        type: 'bullets',
        clickable: true,
      },
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 5,
    },

    560: {
      slidesPerView: 3,
      pagination: {
        enabled: false,
      },
    },

    768: {
      slidesPerView: 4,
      slidesPerGroup: 1,
    },

    992: {
      spaceBetween: 15,
    },

    1200: {
      spaceBetween: 30,
      slidesPerView: 5,
    },
  },
};

config.modalSwiper = {
  keyboard: {
    enabled: true,
  },
  navigation: {
    prevEl: '.modal-swiper__btn--prev',
    nextEl: '.modal-swiper__btn--next',
  },
  pagination: {
    el: '.modal-swiper__pagination',
    type: 'bullets',
    clickable: true,
  },
};

// config.modal = {
//   onShow: () => document.body.classList.add('locked'),
//   onClose: () => document.body.classList.remove('locked'),
// };
