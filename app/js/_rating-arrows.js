const fieldsets = getAllEls('.rating');

for (const ratingFieldset of fieldsets) {
  const inputs = [...getAllEls('.rating__input', ratingFieldset)];
  if (!inputs.length) continue;

  ratingFieldset.addEventListener(
    'focus',
    () => inputs[inputs.length - 1].focus(),
    true
  );

  ratingFieldset.addEventListener('keydown', e => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();

    let currentIndex = inputs.findIndex(input => input.checked);
    if (currentIndex === -1) {
      currentIndex = inputs.length - 1;
    }
    console.log(currentIndex);
    if (currentIndex === -1) return;

    const delta = e.key === 'ArrowLeft' ? 1 : -1;
    let newIndex = (currentIndex + delta + inputs.length) % inputs.length;

    inputs[newIndex].checked = true;
    inputs[newIndex].focus();
  });
}
