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
