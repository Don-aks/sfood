// STICKY HEADER
const header = getEl(config.headerSelector);
window.addEventListener('scroll', setFixedHeader);
setFixedHeader();

// MENU & FILTERS
document.addEventListener('click', handleMenuToggle);
document.addEventListener('click', handleFiltersToggle);
document.addEventListener('keydown', handleEscClosing);

if (window.innerWidth < config.breakpoints.tablet) {
  setTabIndex(filtresFocusableEls, '-1');
  hideFromSR(filtersBtns, filters);
}

// SWIPERS
createSwiper(config.reviewsSwiper);

let restaurantsSwiper;
loadRestaurantsSwiper();
window.addEventListener('resize', debounce(loadRestaurantsSwiper));

createSwiper(config.productGallerySwiper);
// Объявление свайпера с модальной галереей находится в _modal-swiper.js
createSwiper(config.offertsSwiper);

// SELECTS
getAllEls('.js-select')?.forEach(select => {
  new Choices(select, config.select);
});

// RANGE
const inputMin = getEl('.js-input-min');
const inputMax = getEl('.js-input-max');

if (getEl(config.rangeSelector)) {
  dualRange(config.range).on('change', (_, { start, end }) => {
    inputMin.value = start;
    inputMax.value = end;
  });
}

// PAGINATION
initPagination();

// MODAL
MicroModal.init(config.modal);
openModalBtns?.forEach(btn => {
  btn.addEventListener('click', openModal);
});

// PRODUCT COUNT
productWrapper?.addEventListener('click', handleClickOnProductCount);
productCounter?.addEventListener('input', handleInputChangeOnProductCount);
