const openModalBtns = getAllEls('.product-gallery__open-modal');
const modal = getEl('.modal-swiper');
const modalSwiper = new Swiper('.modal-swiper__carousel', config.modalSwiper);

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log(btn.dataset);
    const productId = btn.dataset.modalSlideId;

    modalSwiper.slideTo(productId - 1, 0);
    MicroModal.show(modal, {
      onClose: () => {
        document.body.classList.remove('locked');
        setTabIndex(
          modal.querySelectorAll('a, button, span[role="button"]'),
          '-1'
        );
      },
    });
    document.body.classList.add('locked');
  });
});
