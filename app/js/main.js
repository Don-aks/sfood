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

new Swiper('.product-gallery', config.productGallerySwiper);
new Swiper('.offerts__inner', config.offertsSwiper);

// RANGE
const inputMin = getEl('.js-input-min');
const inputMax = getEl('.js-input-max');
if (getEl(config.selector)) {
  dualRange(config.range).on('change', (_, { start, end }) => {
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

// MODAL
MicroModal.init(config.modal);

// PRODUCT COUNT
productWrapper?.addEventListener('click', handleClickOnProductCount);
productCounter?.addEventListener('input', handleInputChangeOnProductCount);
