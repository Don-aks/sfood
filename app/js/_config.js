const config = {};

config.breakpoints = {
  mobile2: 320,
  mobile: 560,
  tablet: 768,
  tablet2: 992,
  desktop: 1200,
};

config.select = {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
};

config.rangeSelector = '.js-range';
config.range = {
  selector: config.rangeSelector,
  label: () => '',
};

config.restaurantsSwiper = {
  ...generateSwiperConfig('.restaurant-swiper__wrapper', 15),
  pagination: {
    el: '.restaurant-swiper__pagination',
    type: 'bullets',
    clickable: true,
  },
};

config.reviewsSwiper = {
  ...generateSwiperConfig('.reviews-slider__inner', 15),
  navigation: {
    prevEl: '.reviews-slider__btn--prev',
    nextEl: '.reviews-slider__btn--next',
  },
  pagination: {
    el: '.reviews-slider__pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    [config.breakpoints.mobile2]: {
      pagination: {
        enabled: false,
      },
    },

    [config.breakpoints.mobile]: {
      pagination: {
        el: '.reviews-slider__pagination',
        type: 'bullets',
        clickable: true,
      },
    },
  },
};

config.productGallerySwiper = {
  ...generateSwiperConfig('.product-gallery__wrapper'),
  navigation: {
    prevEl: '.product-gallery__btn--prev',
    nextEl: '.product-gallery__btn--next',
  },
};

config.offertsSwiper = {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 5,
  simulateTouch: false,
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
    [config.breakpoints.mobile2]: {
      pagination: {
        el: '.offerts__pagination',
        type: 'bullets',
        clickable: true,
      },
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 5,
    },

    [config.breakpoints.tablet]: {
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
  ...generateSwiperConfig('.modal-swiper__list'),
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
  onClose: () => {
    document.body.classList.remove('locked');
    setTabIndex(getAllEls('a, button, span[role="button"]', modal), '-1');
  },
};
