function loadRestaurantsSwiper() {
  if (window.innerWidth < config.breakpoints.tablet) {
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
