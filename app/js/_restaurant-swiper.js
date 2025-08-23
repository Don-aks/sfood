function loadRestaurantsSwiper() {
  if (window.innerWidth < config.breakpoints.tablet) {
    if (getEl('.restaurant-swiper.swiper-initialized')) {
      return;
    }

    restaurantsSwiper = new Swiper(
      '.restaurant-swiper',
      config.restaurantsSwiper
    );
  } else {
    if (restaurantsSwiper) {
      restaurantsSwiper.destroy(false, true);
      restaurantsSwiper = null;
    }
  }
}
