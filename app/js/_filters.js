const filters = getEl('.filters');
const filtersLinksAndBtns = getAllEls('a, button', filters);
const filtersOpenBtn = getEl('.filters-btn');
const filtersCloseBtn = getEl('.filters__btn');
const filtersBtns = [filtersOpenBtn, filtersCloseBtn];

if (window.innerWidth < 768) {
  setTabIndex(filtersLinksAndBtns, '-1');
  hideFromSR(filtersBtns, filters);
}

function handleClickOnFilters(e) {
  let isActive = filters?.classList.contains('filters--active');

  for (let i = 0; i < filtersBtns.length; i++) {
    if (
      filtersBtns[i] &&
      (e.target === filtersBtns[i] ||
        e.target.closest('.filters-btn') === filtersBtns[i])
    ) {
      body.classList.toggle('locked');
      filters.classList.toggle('filters--active');
      isActive = !isActive;

      if (isActive) showToSR(menuBtns, menu);
      else hideFromSR(menuBtns, menu);

      blurEls(menuLinksAndBtns);
      setTabIndex(filtersLinksAndBtns, isActive ? '0' : '-1');
      return;
    }
  }

  if (isActive && !(e.target.closest('.filters') === filters)) {
    body.classList.remove('locked');
    filters.classList.remove('filters--active');

    blurEls(filtersLinksAndBtns);
  }
}
