const pagination = getEl('.pagination');
let pages = pagination?.querySelectorAll('a.pagination__link');

function initPagination() {
  if (!pagination) return;

  function setFocus(index) {
    pages.forEach((page, i) => {
      page.setAttribute('tabindex', i === index ? '0' : '-1');
    });
    pages[index].focus();
  }

  let currentIndex = 0;

  pagination.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % pages.length;
      setFocus(currentIndex);
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + pages.length) % pages.length;
      setFocus(currentIndex);
      e.preventDefault();
    }
  });
}
