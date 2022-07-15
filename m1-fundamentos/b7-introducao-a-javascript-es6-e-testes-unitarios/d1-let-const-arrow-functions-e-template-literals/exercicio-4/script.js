const counter = document.createElement('span');
counter.innerText = '0';

const button = document.createElement('button');
button.innerText = 'incrementar';

button.onclick = () => {
  const counterElement = document.querySelector('span');
  counterElement.innerText = parseFloat(counterElement.innerText) + 1;
};

document.body.append(button, counter);
