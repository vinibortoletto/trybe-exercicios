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
