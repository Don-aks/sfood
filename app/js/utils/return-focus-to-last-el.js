let lastActiveEl;
function returnFocusToLastActiveEl() {
  if (lastActiveEl) {
    lastActiveEl.focus();
    lastActiveEl = null;
  }
}
