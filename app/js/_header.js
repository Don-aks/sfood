function setFixedHeader() {
  const className = config.fixedHeaderWrapperClassName;

  if (window.scrollY > 0) {
    header.classList.add(className);
  } else {
    header.classList.remove(className);
  }
}
