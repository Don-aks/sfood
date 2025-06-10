const productWrapper = getEl('.product-count');
const productCounter = getEl('.js-product-counter');
const productMinCount = +productCounter?.getAttribute('min');
const productMaxCount = +productCounter?.getAttribute('max');

function handleClickOnProductCount(e) {
  const targetClasses = e.target.classList;
  let val = productCounter.valueAsNumber;

  if (targetClasses.contains('js-product-plus')) {
    if (++val > productMaxCount) return;
    productCounter.value = val;
  } else if (targetClasses.contains('js-product-minus')) {
    if (--val < productMinCount) return;
    productCounter.value = val;
  }
}
