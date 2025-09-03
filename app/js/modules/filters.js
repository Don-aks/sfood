const filters = getEl('.filters');
const filtersFocusableEls = getAllEls('a, button', filters);
const filtersOpenBtn = getEl('.filters-btn');
const filtersCloseBtn = getEl('.filters__btn');
const filtersBtns = [filtersOpenBtn, filtersCloseBtn];

function handleFiltersToggle(e) {
  const btn = e.target.closest('.filters__btn, .filters-btn');

  if (btn && filtersBtns.includes(btn)) {
    isFiltersActive() ? closeFilters() : openFilters();
    return;
  }

  if (isFiltersActive() && !e.target.closest('.filters')) {
    closeFilters();
  }
}

function openFilters() {
  body.classList.add('locked');
  filters.classList.add('filters--active');
  showToSR(filtersBtns, filters);
  setTabIndex(filtersFocusableEls, '0');
  lastActiveEl = document.activeElement;
  // Сразу ставим фокус внутрь фильтров
  requestAnimationFrame(() => filtersFocusableEls[0]?.focus());
}

function closeFilters() {
  body.classList.remove('locked');
  filters.classList.remove('filters--active');
  hideFromSR(filtersBtns, filters);
  returnFocusToLastActiveEl();
  setTabIndex(filtersFocusableEls, '-1');
}

function isFiltersActive() {
  return filters?.classList.contains('filters--active');
}
