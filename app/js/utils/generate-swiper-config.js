function generateSwiperConfig(selector, spaceBetween = 0) {
  function setCursor(cursor) {
    const el = getEl('.swiper-wrapper', getEl(selector));
    if (el) el.style.cursor = cursor;
  }

  return {
    selector,
    spaceBetween,
    keyboard: { enabled: true },
    on: {
      init(swiper) {
        const wrapper = getEl('.swiper-wrapper', swiper.el);
        if (wrapper) wrapper.style.cursor = 'grab';
      },
      touchStart() {
        setCursor('grabbing');
        document.body.style.cursor = 'grabbing';
      },
      touchEnd() {
        setCursor('grab');
        document.body.style.cursor = '';
      },
    },
  };
}
