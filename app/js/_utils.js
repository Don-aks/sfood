function debounce(func) {
  var timer;
  return function (event) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 100, event);
  };
}

function getEl(selector) {
  return document.querySelector(selector);
}

function getAllEls(selector) {
  return document.querySelectorAll(selector);
}
