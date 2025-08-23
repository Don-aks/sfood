const productWrapper = getEl('.product-count');
const productCounter = getEl('.js-product-counter');
const productMinCount = +productCounter?.getAttribute('min');
const productMaxCount = +productCounter?.getAttribute('max');

function handleClickOnProductCount(e) {
  const btn = e.target.closest('.js-product-plus, .js-product-minus');
  if (!btn) return;

  const delta = btn.classList.contains('js-product-plus') ? 1 : -1;
  updateProductCount(delta);
}

function handleInputChangeOnProductCount() {
  let val = productCounter.valueAsNumber;

  if (val > productMaxCount) {
    val = productMaxCount;
  }

  if (val < productMinCount) {
    val = productMinCount;
  }

  productCounter.value = val;
}

function updateProductCount(delta) {
  let val = productCounter.valueAsNumber + delta;

  if (val > productMaxCount) val = productMaxCount;
  if (val < productMinCount) val = productMinCount;

  productCounter.value = val;
}
