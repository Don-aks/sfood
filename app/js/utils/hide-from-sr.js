function hideFromSR(btns, el) {
  btns?.forEach(btn => {
    btn?.setAttribute('aria-expanded', 'false');
  });
  el?.setAttribute('aria-hidden', 'true');
}
