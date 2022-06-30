const body = document.body;

// Requisito 1
const title = document.createElement("h1");
title.innerText = "Exercício 5.2 - JavaScript DOM";
body.appendChild(title);

// Requisito 2
const mainElement = document.createElement("main");
mainElement.classList = "main-content";
body.appendChild(mainElement);

// Requisito 3
const sectionCenter = document.createElement("section");
sectionCenter.classList = "center-content";
mainElement.appendChild(sectionCenter);
