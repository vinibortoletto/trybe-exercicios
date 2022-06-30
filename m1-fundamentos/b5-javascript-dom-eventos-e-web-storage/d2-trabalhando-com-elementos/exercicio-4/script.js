const bodyElement = document.body;

// Requisito 1
const titleElement = document.createElement("h1");
titleElement.innerText = "Exercício 5.2 - JavaScript DOM";
bodyElement.appendChild(titleElement);

// Requisito 2
const mainElement = document.createElement("main");
mainElement.classList = "main-content";
bodyElement.appendChild(mainElement);

// Requisito 3
const sectionCenterElement = document.createElement("section");
sectionCenterElement.classList = "center-content";
mainElement.appendChild(sectionCenterElement);

// Requisito 4
const pElement = document.createElement("p");
sectionCenterElement.appendChild(pElement);

// Requisito 5
const sectionLeftElement = document.createElement("section");
sectionLeftElement.classList = "left-content";
mainElement.appendChild(sectionLeftElement);

// Requisito 6
const sectionRightElement = document.createElement("section");
sectionRightElement.classList = "right-content";
mainElement.appendChild(sectionRightElement);

// Requisito 7
const imageElement = document.createElement("img");
imageElement.src = "https://picsum.photos/200";
imageElement.classList = "small-image";
sectionLeftElement.appendChild(imageElement);

// Requisito 8
const listElement = document.createElement("ul");
const listItemContent = [
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];

for (let i = 0; i < 10; i += 1) {
  const listItemElement = document.createElement("li");
  listItemElement.innerText = listItemContent[i];
  listElement.appendChild(listItemElement);
}

sectionRightElement.appendChild(listElement);

// Requisito 9
for (let i = 0; i < 3; i += 1) {
  const subtitleElement = document.createElement("h3");
  mainElement.appendChild(subtitleElement);
}

// Requisito 10
titleElement.classList = "title";

// Requisito 11
const subtitleElements = document.getElementsByTagName("h3");
for (element of subtitleElements) {
  element.classList = "description";
}

// Requisito 12
mainElement.removeChild(sectionLeftElement);

// Requisito 13
sectionRightElement.style.marginRight = "auto";

// Requisito 14
mainElement.style.backgroundColor = "green";

// Requisito 15
listElement.lastElementChild.remove();
listElement.lastElementChild.remove();
