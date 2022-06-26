/**
 * @jest-environment jsdom
 */

import Popover from '../Popover';

test('При клике на элемент с классом "js-popover" должно показываться окно с соответствующим текстом', () => {
  const popover = new Popover();
  popover.init();

  document.body.innerHTML = `<button type="button" class="button button_green js-popover" data-popover-title="Заголовок 1" data-popover-text="Текст подсказки при клике по кнопке 1">Кнопка 1</button>`;
  const element = document.querySelector('.js-popover');
  const popoverBlock = popover.popover;
  element.click();
  const { popoverTitle, popoverText } = popover.targetElement.dataset;

  expect(popoverBlock.classList.contains('_hide')).toBeFalsy();
  expect(popoverTitle).toEqual('Заголовок 1');
  expect(popoverText).toEqual('Текст подсказки при клике по кнопке 1');
});
