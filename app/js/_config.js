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

config.productSwiper = {
  navigation: {
    nextEl: '.product-swiper__btn--next',
    prevEl: '.product-swiper__btn--prev',
  },
  a11y: {
    prevSlideMessage: 'Попередній слайд',
    nextSlideMessage: 'Наступний слайд',
  },
};

config.offertsSwiper = {
  navigation: {
    nextEl: '.product-swiper__btn--next',
    prevEl: '.product-swiper__btn--prev',
  },
  a11y: {
    prevSlideMessage: 'Попередній слайд',
    nextSlideMessage: 'Наступний слайд',
  },
};
