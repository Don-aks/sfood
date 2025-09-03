const body = document.body;
const menu = getEl('.menu--mobile');
const menuBtns = [getEl('.menu__btn'), getEl('.menu__btn--close')];
const menuFocusableEls = getAllEls('a, button', menu);

function handleMenuToggle(e) {
  const btn = e.target.closest('.menu__btn');

  if (btn && menuBtns.includes(btn)) {
    isMenuActive() ? closeMenu() : openMenu();
    return;
  }

  if (isMenuActive() && !e.target.closest('.menu--mobile')) {
    closeMenu();
  }
}

function openMenu() {
  body.classList.add('locked');
  menu.classList.add('menu--active');
  showToSR(menuBtns, menu);
  setTabIndex(menuFocusableEls, '0');
  lastActiveEl = document.activeElement;
  // Сразу ставим фокус внутрь меню
  requestAnimationFrame(() => menuFocusableEls[0]?.focus());
}

function closeMenu() {
  body.classList.remove('locked');
  menu.classList.remove('menu--active');
  hideFromSR(menuBtns, menu);
  returnFocusToLastActiveEl();
  setTabIndex(menuFocusableEls, '-1');
}

function isMenuActive() {
  return menu?.classList.contains('menu--active');
}
