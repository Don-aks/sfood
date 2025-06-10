// STICKY HEADER
const header = getEl('.header__wrapper');
window.addEventListener('scroll', setFixedHeader);
setFixedHeader();

// MENU & FILTERS
body.addEventListener('click', handleClickOnMenu);
body.addEventListener('click', handleClickOnFilters);

// TABS
activateTabHandlers();

// PAGINATION
initPagination();

// SWIPERS
new Swiper('.reviews-slider', config.reviewsSwiper);

let restaurantsSwiper;
loadRestaurantsSwiper();
window.addEventListener('resize', debounce(loadRestaurantsSwiper));

function loadRestaurantsSwiper() {
  if (window.innerWidth <= 768) {
    if (getEl('.restaurant-swiper.swiper-initialized')) {
      return;
    }

    restaurantsSwiper = new Swiper(
      '.restaurant-swiper',
      config.restaurantsSwiper
    );
  } else if (getEl('.restaurant-swiper.swiper-initialized')) {
    restaurantsSwiper.destroy();
  }
}

new Swiper('.product-swiper', config.productSwiper);

// RANGE
const inputMin = getEl('.js-input-min');
const inputMax = getEl('.js-input-max');
if (getEl(config.selector)) {
  dualRange(config.range).on('change', (e, { start, end }) => {
    inputMin.value = start;
    inputMax.value = end;
  });
}

// SELECTS
const selects = getAllEls('.js-select');
if (selects.length) {
  for (let select of selects) {
    new Choices(select, config.select);
  }
}

// PRODUCT COUNT
productWrapper?.addEventListener('click', handleClickOnProductCount);
