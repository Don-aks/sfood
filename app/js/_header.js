function setFixedHeader() {
  const className = 'header__wrapper--fixed';
  if (this.scrollY > 0) {
    header.classList.add(className);
  } else {
    header.classList.remove(className);
  }
}
