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
  navigation: {
    nextEl: '.product-swiper__btn--next',
    prevEl: '.product-swiper__btn--prev',
  },
  a11y: {
    prevSlideMessage: 'Попередній слайд',
    nextSlideMessage: 'Наступний слайд',
  },

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
