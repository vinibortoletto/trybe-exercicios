// SELETORES
const INPUT_TEXT = document.querySelector('#input-text');
const INPUT_CHECKBOX = document.querySelector('#input-checkbox');
const HREF_LINK = document.querySelector('#href');

HREF_LINK.onclick = (e) => e.preventDefault();
INPUT_CHECKBOX.onclick = (e) => e.preventDefault();
INPUT_TEXT.onkeypress = (e) => {
  if (e.key !== 'a') {
    e.preventDefault();
  }
};
