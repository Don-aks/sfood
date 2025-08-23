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
  elements?.forEach(el => {
    el?.setAttribute('tabindex', tabindex);
  });
}

let lastActiveEl;
function returnFocusToLastActiveEl() {
  if (lastActiveEl) {
    lastActiveEl.focus();
    lastActiveEl = null;
  }
}

function hideFromSR(btns, el) {
  btns?.forEach(btn => {
    btn?.setAttribute('aria-expanded', 'false');
  });
  el?.setAttribute('aria-hidden', 'true');
}

function showToSR(btns, el) {
  btns?.forEach(btn => {
    btn?.setAttribute('aria-expanded', 'true');
  });
  el?.setAttribute('aria-hidden', 'false');
}

function generateSwiperConfig(selector, spaceBetween = 0) {
  function setCursor(cursor) {
    const el = getEl('.swiper-wrapper', getEl(selector));
    if (el) el.style.cursor = cursor;
  }

  return {
    selector,
    spaceBetween,
    keyboard: { enabled: true },
    on: {
      init(swiper) {
        const wrapper = getEl('.swiper-wrapper', swiper.el);
        if (wrapper) wrapper.style.cursor = 'grab';
      },
      touchStart() {
        setCursor('grabbing');
        document.body.style.cursor = 'grabbing';
      },
      touchEnd() {
        setCursor('grab');
        document.body.style.cursor = '';
      },
    },
  };
}

function createSwiper({ selector, ...config }) {
  return new Swiper(selector, config);
}
