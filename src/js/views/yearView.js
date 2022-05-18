const yearText = document.getElementById('year');

const now = new Date();
const year = now.getFullYear();

const setCurrentYear = function () {
  yearText.textContent = year;
};

setCurrentYear();
