const body = document.body;
const menu = getEl('.menu--mobile');
const menuLinksAndBtns = getAllEls('.menu--mobile a, .menu--mobile button');
const menuOpenBtn = getEl('.menu__btn');
const menuCloseBtn = getEl('.menu__btn--close');
const menuBtns = [menuOpenBtn, menuCloseBtn];

function handleClickOnMenu(e) {
  let isActive = menu.classList.contains('menu--active');

  for (let i = 0; i < menuBtns.length; i++) {
    if (
      e.target === menuBtns[i] ||
      e.target.closest('.menu__btn') === menuBtns[i]
    ) {
      body.classList.toggle('locked');
      menu.classList.toggle('menu--active');
      isActive = !isActive;

      menuOpenBtn.setAttribute('aria-expanded', isActive);
      menuCloseBtn.setAttribute('aria-expanded', isActive);
      menuCloseBtn.blur();
      menu.setAttribute('aria-hidden', !isActive);

      for (let j = 0; j < menuLinksAndBtns.length; j++) {
        menuLinksAndBtns[j].setAttribute('tabindex', isActive ? '0' : '-1');
      }
      return;
    }
  }

  if (isActive && !(e.target.closest('.menu--mobile') === menu)) {
    body.classList.remove('locked');
    menu.classList.remove('menu--active');

    for (let j = 0; j < menuLinksAndBtns.length; j++) {
      menuLinksAndBtns[j].setAttribute('tabindex', '-1');
    }
  }
}
