// Закрытие меню и фильтров при нажатии на Esc

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' || event.key === 'Esc') {
    menu?.classList.remove('menu--active');
    filters?.classList.remove('filters--active');
    document.body.classList.remove('locked');
    MicroModal.close('modal-product-swiper');
  }
});
