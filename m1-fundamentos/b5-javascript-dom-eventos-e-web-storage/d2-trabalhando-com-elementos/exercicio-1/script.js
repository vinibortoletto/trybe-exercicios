// Exercício 1 --------------------------------------------------

// Requisito 1
const sectionWhereAreYou = document.getElementById("elementoOndeVoceEsta");

// Requisito 2
sectionWhereAreYou.parentElement.style.color = "red";

// Requisito 3
const sectionFirstSonOfSon = document.getElementById("primeiroFilhoDoFilho");
sectionFirstSonOfSon.innerText = "Seção: primeiro filho do filho";

// Requisito 4
const sectionFather = document.getElementById("pai");
console.log(sectionFather.firstElementChild);

// Requisito 5
console.log(sectionWhereAreYou.previousElementSibling);

// Requisito 6
console.log(sectionWhereAreYou.nextSibling);

// Requisito 7
console.log(sectionWhereAreYou.nextElementSibling);

// Requisito 8
console.log(sectionFather.lastElementChild.previousElementSibling);

// Exercício 2 --------------------------------------------------

// Requisito 1
let brotherElement = document.createElement("section");
brotherElement.id = "irmãoElementoOndeVoceEsta";
sectionFather.appendChild(brotherElement);

// Requisito 2
let sonElement = document.createElement("p");
sonElement.id = "filhoElementOndeVoceEsta";
sectionWhereAreYou.appendChild(sonElement);

// Requisito 3
let sonElement2 = document.createElement("p");
sonElement2.id = "filhoDoPrimeiroFilhoDoFilho";
sectionFirstSonOfSon.appendChild(sonElement2);

// Requisito 4
console.log(sonElement2.parentElement.parentElement.nextElementSibling);
