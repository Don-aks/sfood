function getEl(selector, context = document) {
  return context?.querySelector(selector);
}

function getAllEls(selector, context = document) {
  return context?.querySelectorAll(selector);
}
