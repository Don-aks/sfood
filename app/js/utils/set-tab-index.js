function setTabIndex(elements, tabindex) {
  elements?.forEach(el => {
    el?.setAttribute('tabindex', tabindex);
  });
}
