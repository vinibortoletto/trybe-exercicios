function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Requisito 1
let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const daysList = document.querySelector("#days");

for (day of decemberDaysList) {
  const listItemElement = document.createElement("li");
  listItemElement.classList.add("day");

  if (day === 24 || day === 25 || day === 31) {
    listItemElement.classList.add("holiday");
  }

  if (day === 4 || day === 11 || day === 18 || day === 25) {
    listItemElement.classList.add("friday");
  }

  listItemElement.innerText = day;
  daysList.appendChild(listItemElement);
}

// Requisito 2
function createHolidayButton(buttonText) {
  const buttonsContainerElement = document.querySelector(".buttons-container");

  const buttonElement = document.createElement("button");
  buttonElement.id = "btn-holiday";
  buttonElement.innerText = buttonText;
  buttonsContainerElement.appendChild(buttonElement);
}

createHolidayButton("Feriados");

// Requisito 3
const holidayButton = document.querySelector("#btn-holiday");

function toggleHolidayColor() {
  const dayElemets = document.querySelectorAll(".day");

  for (day of dayElemets) {
    if (day.classList.contains("holiday")) {
      if (day.style.backgroundColor === "lightgreen") {
        day.style.backgroundColor = "rgb(238,238,238)";
      } else {
        day.style.backgroundColor = "lightgreen";
      }
    }
  }
}

holidayButton.addEventListener("click", toggleHolidayColor);

// Requisito 4
function createFridayButton(buttonText) {
  const buttonsContainerElement = document.querySelector(".buttons-container");

  const buttonElement = document.createElement("button");
  buttonElement.id = "btn-friday";
  buttonElement.innerText = buttonText;

  buttonsContainerElement.appendChild(buttonElement);
}

createFridayButton("Sexta-feita");

// Requisito 5
function modifyFridayText() {
  const fridayElements = document.querySelectorAll(".friday");
  const fridayNumbers = [4, 11, 18, 25];

  for (let i = 0; i < fridayElements.length; i += 1) {
    if (fridayElements[i].innerText === "SEXTASTES") {
      fridayElements[i].innerText = fridayNumbers[i];
    } else {
      fridayElements[i].innerText = "SEXTASTES";
    }
  }
}

const fridayButton = document.querySelector("#btn-friday");
fridayButton.addEventListener("click", modifyFridayText);

// Requisito 6
function animateDays() {
  const dayElements = document.querySelectorAll(".day");

  for (day of dayElements) {
    day.addEventListener("mouseenter", (e) => {
      e.target.style.fontSize = "30px";
    });

    day.addEventListener("mouseleave", (e) => {
      e.target.style.fontSize = "20px";
    });
  }
}

window.onload = animateDays;
