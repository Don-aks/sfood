const filters = getEl('.filters');
const filtersLinksAndBtns = getAllEls('.filters a, .filters button');
const filtersOpenBtn = getEl('.filters-btn');
const filtersCloseBtn = getEl('.filters__btn');
const filtersBtns = [filtersOpenBtn, filtersCloseBtn];

if (window.innerWidth < 768) {
  filtersSetTabIndex('-1');
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

      filtersOpenBtn.setAttribute('aria-expanded', isActive);
      filtersCloseBtn.setAttribute('aria-expanded', isActive);
      filters.setAttribute('aria-hidden', !isActive);

      filtersSetTabIndex(isActive ? '0' : '-1');
      return;
    }
  }

  if (isActive && !(e.target.closest('.filters') === filters)) {
    body.classList.remove('locked');
    filters.classList.remove('filters--active');
    filtersSetTabIndex('-1');
  }
}

function filtersSetTabIndex(tabindex) {
  for (let j = 0; j < filtersLinksAndBtns.length; j++) {
    filtersLinksAndBtns[j].setAttribute('tabindex', tabindex);
  }
}
