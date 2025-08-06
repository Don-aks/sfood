const body = document.body;
const menu = getEl('.menu--mobile');
const menuLinksAndBtns = getAllEls('a, button', menu);
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

      if (isActive) showToSR(menuBtns, menu);
      else hideFromSR(menuBtns, menu);

      blurEls(menuLinksAndBtns);
      setTabIndex(menuLinksAndBtns, isActive ? '0' : '-1');
      return;
    }
  }

  if (isActive && !(e.target.closest('.menu--mobile') === menu)) {
    body.classList.remove('locked');
    menu.classList.remove('menu--active');

    setTabIndex(menuLinksAndBtns, '-1');
    blurEls(menuLinksAndBtns);
    hideFromSR(menuBtns, menu);
  }
}
