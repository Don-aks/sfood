const tabClass = 'js-tab';
const tabContainerClass = 'js-tabs';
const contentClass = 'js-tab-content';
const contentContainerClass = 'js-tab-contents';
const activeClass = 'is-active';

const tabContainers = getAllEls(`.${tabContainerClass}`);
tabContainers.forEach(tabs => {
  const groupName = tabs.dataset.tabGroup;
  if (!groupName) return;

  const buttons = getAllEls(`.${tabClass}`, tabs);
  const contents = getAllEls(
    `.${contentContainerClass}[data-tab-group="${groupName}"] .${contentClass}`
  );

  // Клик
  tabs.addEventListener('click', e => {
    const btn = e.target.closest(`.${tabClass}`);
    if (btn && tabs.contains(btn)) {
      activateTab(btn, groupName);
    }
  });

  // Клавиатура
  tabs.addEventListener('keydown', e => {
    const current = document.activeElement;
    if (!current.classList.contains(tabClass)) return;

    const index = Array.prototype.indexOf.call(buttons, current);
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
      default:
        return;
    }

    e.preventDefault();
    buttons[newIndex].focus();
    activateTab(buttons[newIndex], groupName);
  });

  // ARIA-атрибуты и начальное состояние
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
    content.classList.toggle('active', i === 0);
  });

  // Добавляем состояние focus для tabContainer
  tabs.addEventListener('focusin', e => {
    if (e.target.classList.contains(tabClass)) {
      tabs.classList.add('is-focus');
    }
  });

  tabs.addEventListener('focusout', e => {
    tabs.classList.remove('is-focus');
  });
});

function activateTab(tabButton, groupName) {
  const tabsContainer = tabButton.closest(`.${tabContainerClass}`);
  if (!tabsContainer || !groupName) return;

  const buttons = getAllEls(`.${tabClass}`, tabsContainer);
  const contents = getAllEls(
    `.${contentContainerClass}[data-tab-group="${groupName}"] .${contentClass}`
  );

  const selectedTab = tabButton.dataset.tab;

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
