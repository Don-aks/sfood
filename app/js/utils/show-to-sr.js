function showToSR(btns, el) {
  btns?.forEach(btn => {
    btn?.setAttribute('aria-expanded', 'true');
  });
  el?.setAttribute('aria-hidden', 'false');
}
