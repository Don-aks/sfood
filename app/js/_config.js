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

config.reviewsSwiper = {
  navigation: {
    nextEl: '.reviews-slider__btn--next',
    prevEl: '.reviews-slider__btn--prev',
  },
  pagination: {
    el: '.reviews-slider__pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    320: {
      pagination: {
        el: null,
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

config.restaurantsSwiper = {
  pagination: {
    el: '.restaurant-swiper__pagination',
    type: 'bullets',
    clickable: true,
  },
};

config.productGallerySwiper = {
  navigation: {
    prevEl: '.product-gallery__btn--prev',
    nextEl: '.product-gallery__btn--next',
  },
  a11y: {
    prevSlideMessage: 'Попередній слайд',
    nextSlideMessage: 'Наступний слайд',
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
        el: null,
        enabled: false,
      },
    },

    768: {
      slidesPerView: 4,
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

config.modal = {
  onShow: () => document.body.classList.add('locked'),
  onClose: () => document.body.classList.remove('locked'),
};
