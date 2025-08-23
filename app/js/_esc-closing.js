// Закрытие меню и фильтров при нажатии на Esc

function handleEscClosing(event) {
  if (event.key === 'Escape' || event.key === 'Esc') {
    menu?.classList.remove('menu--active');
    filters?.classList.remove('filters--active');
    document.body.classList.remove('locked');
    MicroModal.close(config.modalId);
  }
}
