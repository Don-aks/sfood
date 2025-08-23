const modal = getEl('.modal-swiper');
const modalFocusableEls = getAllEls('a, button, span[role="button"]', modal);
const openModalBtns = getAllEls('.product-gallery__open-modal');
const modalSwiper = createSwiper(config.modalSwiper);

function openModal(e) {
  const btn = e.target.closest('.product-gallery__open-modal');
  const productId = btn.dataset.modalSlideId;

  lastActiveEl = document.activeElement;
  if (productId) modalSwiper.slideToLoop(productId - 1, 0);
  MicroModal.show(config.modalId, config.modal);
  document.body.classList.add('locked');
}
