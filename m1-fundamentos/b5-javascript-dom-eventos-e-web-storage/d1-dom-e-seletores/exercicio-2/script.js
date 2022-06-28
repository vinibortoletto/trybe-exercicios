const body = document.querySelector("body");
body.style.backgroundColor = "#212121";

const header = document.getElementById("header-container");
header.style.backgroundColor = "darkgreen";

const emergencyTasksSection = document.querySelector(".emergency-tasks");
emergencyTasksSection.style.backgroundColor = "lightsalmon";

const emergencyTasksTitles = document.querySelectorAll(".emergency-tasks h3");
emergencyTasksTitles.forEach(
  (title) => (title.style.backgroundColor = "purple")
);

const noEmergencyTasksSection = document.querySelector(".no-emergency-tasks");
noEmergencyTasksSection.style.backgroundColor = "orange";

const noEmergencyTasksSectionTitles = document.querySelectorAll(
  ".no-emergency-tasks h3"
);
noEmergencyTasksSectionTitles.forEach(
  (title) => (title.style.backgroundColor = "black")
);

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "darkgreen";
footer.style.marginTop = "2rem";
