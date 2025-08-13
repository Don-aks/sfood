const openModalBtns = getAllEls('.product-gallery__open-modal');
const modal = getEl('.modal-swiper');
const modalSwiper = new Swiper('.modal-swiper__carousel', config.modalSwiper);

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const productId = btn.dataset.modalSlideId;

    modalSwiper.slideTo(productId - 1, 0);
    MicroModal.show(modal, config.modal);
    document.body.classList.add('locked');
  });
});
