// STICKY HEADER
const header = getEl(config.headerSelector);
window.addEventListener('scroll', setFixedHeader);
setFixedHeader();

// MENU & FILTERS
document.addEventListener('click', handleClickOnMenu);
document.addEventListener('click', handleClickOnFilters);

// SWIPERS
new Swiper('.reviews-slider', config.reviewsSwiper);

let restaurantsSwiper;
loadRestaurantsSwiper();
window.addEventListener('resize', debounce(loadRestaurantsSwiper));

new Swiper('.product-gallery', config.productGallerySwiper);
new Swiper('.offerts__inner', config.offertsSwiper);

// SELECTS
getAllEls('.js-select')?.forEach(select => {
  new Choices(select, config.select);
});

// MODAL
MicroModal.init(config.modal);

// PRODUCT COUNT
productWrapper?.addEventListener('click', handleClickOnProductCount);
productCounter?.addEventListener('input', handleInputChangeOnProductCount);
