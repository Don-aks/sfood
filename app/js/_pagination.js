const pagination = getEl('.pagination');
let pageLinks = getAllEls('a.pagination__link', pagination);

function initPagination() {
  if (!pagination) return;

  // Изначально делаем roving tabindex
  pageLinks.forEach((link, i) => {
    link.setAttribute('tabindex', i === 0 ? '0' : '-1');
  });

  function setFocus(index) {
    pageLinks.forEach((page, i) => {
      page.setAttribute('tabindex', i === index ? '0' : '-1');
      if (i === index) {
        page.setAttribute('aria-current', 'page');
      } else {
        page.removeAttribute('aria-current');
      }
    });
    pageLinks[index].focus();
  }

  let currentIndex = 0;
  pagination.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % pageLinks.length;
      setFocus(currentIndex);
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + pageLinks.length) % pageLinks.length;
      setFocus(currentIndex);
      e.preventDefault();
    } else if (e.key === 'Home') {
      currentIndex = 0;
      setFocus(currentIndex);
      e.preventDefault();
    } else if (e.key === 'End') {
      currentIndex = pageLinks.length - 1;
      setFocus(currentIndex);
      e.preventDefault();
    }
  });

  // Обновляем индекс, если фокус поставили не с клавиатуры
  pagination.addEventListener('focusin', e => {
    const idx = pageLinks.indexOf(e.target);
    if (idx !== -1) currentIndex = idx;
  });
}
