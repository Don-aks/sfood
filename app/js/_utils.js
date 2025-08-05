function debounce(func) {
  var timer;
  return function (event) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 100, event);
  };
}

function getEl(selector, context = document) {
  return context?.querySelector(selector);
}

function getAllEls(selector, context = document) {
  return context?.querySelectorAll(selector);
}

function setTabIndex(elements, tabindex) {
  if (!elements || !elements.length) return;

  for (let j = 0; j < elements.length; j++) {
    elements[j].setAttribute('tabindex', tabindex);
  }
}
