const tabClass = 'js-tab';
const tabContainerClass = 'js-tabs';
const contentClass = 'js-tab-content';
const contentContainerClass = 'js-tab-contents';
const activeClass = 'is-active';

const tabContainers = getAllEls(`.${tabContainerClass}`);

tabContainers.forEach(tabs => {
  const groupName = tabs.dataset.tabGroup;
  if (!groupName) return;

  const buttons = [...getAllEls(`.${tabClass}`, tabs)];
  if (!buttons.length) return;

  const contentContainer = getEl(
    `.${contentContainerClass}[data-tab-group="${groupName}"]`
  );
  const contents = contentContainer
    ? getAllEls(`.${contentClass}`, contentContainer)
    : [];
  if (!contents.length) return;

  // Начальное состояние и ARIA
  buttons.forEach((btn, i) => {
    btn.setAttribute('role', 'tab');
    btn.setAttribute('tabindex', i === 0 ? '0' : '-1');
    btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    btn.setAttribute('aria-controls', `${groupName}-content-${i}`);
    btn.id = `${groupName}-tab-${i}`;
  });

  contents.forEach((content, i) => {
    content.setAttribute('role', 'tabpanel');
    content.setAttribute('aria-labelledby', `${groupName}-tab-${i}`);
    content.id = `${groupName}-content-${i}`;
    content.hidden = i !== 0;
    content.classList.toggle(activeClass, i === 0);
  });

  // Обработчик клика
  tabs.addEventListener('click', e => {
    const btn = e.target.closest(`.${tabClass}`);
    if (btn && buttons.includes(btn)) {
      activateTab(btn, buttons, contents);
    }
  });

  // Клавиатура
  tabs.addEventListener('keydown', e => {
    const current = document.activeElement;
    if (!buttons.includes(current)) return;

    let index = buttons.indexOf(current);
    let newIndex = index;

    switch (e.key) {
      case 'ArrowRight':
        newIndex = (index + 1) % buttons.length;
        break;
      case 'ArrowLeft':
        newIndex = (index - 1 + buttons.length) % buttons.length;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = buttons.length - 1;
        break;
      case 'Enter':
      case ' ':
        activateTab(current, buttons, contents);
        e.preventDefault();
        return;
      default:
        return;
    }

    e.preventDefault();
    buttons[newIndex].focus();
    activateTab(buttons[newIndex], buttons, contents);
  });

  // Фокус
  tabs.addEventListener('focusin', e => {
    if (buttons.includes(e.target)) {
      tabs.classList.add('is-focus');
    }
  });

  tabs.addEventListener('focusout', e => {
    if (!tabs.contains(e.relatedTarget)) {
      tabs.classList.remove('is-focus');
    }
  });
});

function activateTab(tabButton, buttons, contents) {
  const selectedTab = tabButton.dataset.tab;
  if (!selectedTab) return;

  buttons.forEach(btn => {
    const isActive = btn.dataset.tab === selectedTab;
    btn.classList.toggle(activeClass, isActive);
    btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    btn.tabIndex = isActive ? 0 : -1;
  });

  contents.forEach(content => {
    const isActive = content.dataset.tab === selectedTab;
    content.classList.toggle(activeClass, isActive);
    content.hidden = !isActive;
  });
}
