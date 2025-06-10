function dualRange(opts) {
  if (typeof opts == 'string') {
    opts = {
      selector: opts,
    };
  }
  opts.label =
    opts.label ||
    function (d) {
      return d;
    };

  opts.onChange = opts.onChange || function (e, data) {};

  const root = document.querySelector(opts.selector);
  const rangeStart = root.querySelector('.range-start');
  const rangeEnd = root.querySelector('.range-end');
  let dragging = false;

  setup(rangeStart);
  setup(rangeEnd);

  root.addEventListener('pointerdown', onMouseDown);
  addEventListener('pointerup', onMouseUp);
  addEventListener('pointermove', onMouseMove);

  const ui = createAndAddElement('div', 'ui', root);
  const uiStart = createAndAddElement('div', 'start', ui);
  const middle = createAndAddElement('div', 'middle', ui);
  const uiEnd = createAndAddElement('div', 'end', ui);

  render();

  function setup(range) {
    range.addEventListener('input', onChange);
    range.addEventListener('change', onChange);
    if (!opts.debug) range.classList.add('sr-only');
  }

  function render() {
    const startPercent =
      (100 * rangeStart.value) / rangeStart.getAttribute('max');
    const endPercent = (100 * rangeEnd.value) / rangeEnd.getAttribute('max');
    uiStart.innerHTML = '<span>' + opts.label(rangeStart.value) + '</span>';
    uiEnd.innerHTML = '<span>' + opts.label(rangeEnd.value) + '</span>';

    uiStart.style.left = startPercent + '%';
    middle.style.left = startPercent + '%';
    uiEnd.style.left = endPercent + '%';

    middle.style.width = endPercent - startPercent + '%';
    middle.style.transform =
      parseInt(rangeStart.value) > rangeEnd.value
        ? 'translateX(-100%)'
        : 'translateX(0)';
  }

  function createAndAddElement(tagName, classList, parent) {
    const child = document.createElement(tagName);
    child.classList.add(classList);
    parent.appendChild(child);
    return child;
  }

  function onMouseDown(e) {
    dragging = e.target;
    dragging.classList?.add('active');
  }

  function onMouseUp(e) {
    dragging.classList?.remove('active');
    dragging = false;
  }

  const targetRange = element => {
    if (element.value) return element;
    if (dragging.classList.contains('start')) return rangeStart;
    if (dragging.classList.contains('end')) return rangeEnd;
  };

  function onMouseMove(e) {
    if (!dragging) return;
    if (dragging.getAttribute('type') === 'range') return;
    const total = ui.clientWidth;
    const mouseMoveX = e.clientX - ui.offsetLeft;
    const percent = Math.floor((100 * mouseMoveX) / total);
    const tr = targetRange(e.target);
    tr.value = (percent / 100) * tr.getAttribute('max');
    render();
    onChange(e);
  }

  let listeners = {};

  function onChange(e) {
    if (typeof listeners.change === 'function') {
      listeners.change(e, {
        start: rangeStart.value,
        end: rangeEnd.value,
      });
    }
    const tr = targetRange(e.target);
    const condition = parseInt(rangeEnd.value) <= rangeStart.value;
    if (tr.classList.contains('range-end') && condition) {
      update({ start: rangeEnd.value });
    }
    if (tr.classList.contains('range-start') && condition) {
      update({ end: rangeStart.value });
    }
    render();
  }

  function on(name, callback) {
    listeners[name] = callback;
  }

  function update(opts) {
    if (opts.start) {
      rangeStart.value = opts.start;
    }
    if (opts.end) {
      rangeEnd.value = opts.end;
    }
    if (opts.min) {
      rangeStart.setAttribute('min', opts.min);
      rangeEnd.setAttribute('min', opts.min);
    }
    if (opts.max) {
      rangeStart.setAttribute('max', opts.max);
      rangeEnd.setAttribute('max', opts.max);
    }
    render();
  }

  return {
    on,
    update,
  };
}

window.dualRange = dualRange;
