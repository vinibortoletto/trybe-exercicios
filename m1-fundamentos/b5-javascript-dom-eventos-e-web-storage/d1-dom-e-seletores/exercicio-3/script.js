const pElmts = document.getElementsByTagName("p");
for (p of pElmts) {
  if (p.innerText.includes("-")) {
    p.innerText = "Me vejo como um excelente desenvolvedor.";
  }

  p.style.textTransform = "uppercase";
  p.style.color = "black";

  console.log(p.innerText);
}

const mainContent = document.getElementsByClassName("main-content");
mainContent[0].style.backgroundColor = "rgb(76, 164, 109)";

const centerContent = document.getElementsByClassName("center-content");
centerContent[0].style.backgroundColor = "white";

const title = document.getElementsByClassName("title");
title[0].innerText = "Exercício 5.1 - JavaScript";
