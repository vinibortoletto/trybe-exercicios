// Create main ----------------------------------------------------|
const body = document.body;
const main = document.createElement('main');
body.appendChild(main);

// Create title ----------------------------------------------------|
const title = document.createElement('h1');
title.innerText = 'Dia 5.4 - Exercício sobre Web Storage';
main.appendChild(title);

// Create description ----------------------------------------------------|
const descriptionContainer = document.createElement('section');
const descriptionText = document.createElement('p');
descriptionText.innerText =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ipsa voluptas quos! Optio quis consequatur ab ratione doloremque repudiandae voluptates voluptatem magni minima rerum? At tempora fugiat repellat. Veniam expedita ipsum temporibus cum omnis qui rerum dolore quas? Provident dolor ullam reiciendis a architecto. Animi, voluptates autem. Id perspiciatis voluptatibus nulla, corrupti sequi earum reprehenderit error voluptate ipsa impedit aliquam minima aspernatur incidunt magni delectus, qui velit, ratione sapiente soluta illo tempore iste ipsam. Officiis quae quibusdam sint commodi iste repellendus iusto mollitia quas nemo consectetur! Repudiandae, molestiae eos ducimus eligendi cumque fuga atque unde ipsum architecto et accusamus maxime!';
main.appendChild(descriptionContainer);
descriptionContainer.appendChild(descriptionText);

// Create Inputs ----------------------------------------------------|
const inputContainer = document.createElement('section');

// Title
const inputContainerTitle = document.createElement('h2');
inputContainerTitle.innerText = 'Altere elementos da página';

// Background color
const inputBgColor = document.createElement('input');
inputBgColor.id = 'bg-color';
inputBgColor.placeholder = 'Altere a cor de fundo';

// Text color
const inputTextColor = document.createElement('input');
inputTextColor.id = 'text-color';
inputTextColor.placeholder = 'Altere a cor do texto';

// Font size
const inputFontSize = document.createElement('input');
inputFontSize.id = 'font-size';
inputFontSize.placeholder = 'Altere o tamanho do texto';

// Line hight
const inputLineHeight = document.createElement('input');
inputLineHeight.id = 'line-height';
inputLineHeight.placeholder = 'Altere o espaçamento das linhas';

// Font family
const selectFontFamily = document.createElement('select');
selectFontFamily.id = 'font-family';
const fontFamilies = {
  courierNew: "'Courier New', Courier, monospace",
  arial: 'Arial, Helvetica, sans-serif',
  georgia: "Georgia, 'Times New Roman', Times, serif",
};

for (font in fontFamilies) {
  const option = document.createElement('option');
  option.value = font;
  option.innerText = fontFamilies[font];
  selectFontFamily.appendChild(option);
}

// Append elements
main.append(inputContainer);
inputContainer.append(
  inputContainerTitle,
  inputBgColor,
  inputTextColor,
  inputFontSize,
  inputLineHeight,
  selectFontFamily
);

function handleInput(e) {
  const inputId = e.target.id;

  if (inputId === 'bg-color') {
    body.style.backgroundColor = e.target.value;
  }

  if (inputId === 'text-color') {
    body.style.color = e.target.value;
  }

  if (inputId === 'font-size') {
    if (e.target.value === '') body.style.fontSize = '16px';
    else body.style.fontSize = e.target.value + 'px';
  }

  if (inputId === 'line-height') {
    body.style.lineHeight = e.target.value;
  }
}

const inputs = document.querySelectorAll('input');
for (input of inputs) {
  input.addEventListener('keyup', handleInput);
}

const selectInput = document.querySelector('select');
selectInput.addEventListener('change', (e) => {
  for (font in fontFamilies) {
    if (e.target.value === font) {
      body.style.fontFamily = fontFamilies[font];
    }
  }
});

// Save config to localStorage ----------------------------------------------------|
const saveButton = document.createElement('button');
saveButton.innerText = 'Salvar';

saveButton.addEventListener('click', () => {
  const styles = {};

  styles.bgColor = body.style.backgroundColor;
  styles.textColor = body.style.color;
  styles.fontSize = body.style.fontSize;
  styles.lineHeight = body.style.lineHeight;
  styles.fontFamily = body.style.fontFamily;

  localStorage.setItem('styles', JSON.stringify(styles));

  console.log(styles);
});

main.appendChild(saveButton);

window.onload = () => {
  const savedStyles = JSON.parse(localStorage.getItem('styles'));

  body.style.backgroundColor = savedStyles['bgColor'];
  body.style.color = savedStyles['textColor'];
  body.style.fontSize = savedStyles['fontSize'];
  body.style.lineHeight = savedStyles['lineHeight'];
  body.style.fontFamily = savedStyles['fontFamily'];
};
