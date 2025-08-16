const inputMin = getEl('.js-input-min');
const inputMax = getEl('.js-input-max');

if (getEl(config.rangeSelector)) {
  dualRange(config.range).on('change', (_, { start, end }) => {
    inputMin.value = start;
    inputMax.value = end;
  });
}
