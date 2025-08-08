const fieldsets = getAllEls('.rating');

for (ratingFieldset of fieldsets) {
  const inputs = [...getAllEls('.rating__input', ratingFieldset)];

  if (inputs.length) {
    ratingFieldset.addEventListener('keydown', e => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      e.preventDefault();

      const currentIndex = inputs.findIndex(input => input.checked);
      if (currentIndex === -1) return;

      const delta = e.key === 'ArrowLeft' ? -1 : 1;
      const newIndex = currentIndex - delta;

      if (inputs[newIndex]) {
        inputs[newIndex].checked = true;
        inputs[newIndex].focus();
      }
    });
  }
}
