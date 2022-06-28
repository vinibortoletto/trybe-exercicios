/*
  Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()
   
    
   Crie uma função que mude a cor do quadrado vermelho para branco.
   Crie uma função que corrija o texto da tag <h1>.
   Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
   Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

const pElmts = document.getElementsByTagName("p");
for (p of pElmts) {
  if (p.innerText.includes("-")) {
    p.innerText = "Me vejo como um excelente desenvolvedor.";
  }
}

const mainContent = document.getElementsByClassName("main-content");
mainContent[0].style.backgroundColor = "rgb(76, 164, 109)";
