function setFixedHeader() {
  const className = 'header__wrapper--fixed';
  if (window.scrollY > 0) {
    header.classList.add(className);
  } else {
    header.classList.remove(className);
  }
}
