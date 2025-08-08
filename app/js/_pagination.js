const pagination = getEl('.pagination');
let pageLinks = getAllEls('a.pagination__link', pagination);

function initPagination() {
  if (!pagination) return;

  let currentIndex = 0;
  pagination.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % pageLinks.length;
      pageLinks[currentIndex].focus();
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + pageLinks.length) % pageLinks.length;
      pageLinks[currentIndex].focus();
      e.preventDefault();
    }
  });
}
