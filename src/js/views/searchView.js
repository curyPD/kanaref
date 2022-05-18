import { modal } from './chartView.js';
const heroForm = document.getElementById('hero-form');

export const addHandlerFormInput = function (handler) {
  modal.addEventListener('input', handler);
};

export const addHandlerFormSubmit = function (handler) {
  [modal, heroForm].forEach(el => el.addEventListener('submit', handler));
};

export const renderSearchResults = function (characters, script) {
  const html = generateMarkup(characters, script);
  const searchResultsBox = modal.querySelector('#search-results-box');
  searchResultsBox.innerHTML = '';
  searchResultsBox.classList.remove('hidden');
  searchResultsBox.insertAdjacentHTML('afterbegin', html);
};

const generateMarkup = function (characters, script) {
  let html = '<ul class="flex flex-col space-y-2">';
  html += characters.reduce((str, char) => {
    return (
      str +
      `
      <li
      data-char="${char.di ?? char.du ?? char.romaji}"
      class="group flex space-x-4 items-center p-3 rounded-md cursor-pointer bg-slate-100 dark:bg-slate-700/[.3] hover:bg-sky-500 dark:hover:bg-sky-400">
        <p
          class="kana-char rounded bg-slate-200 group-hover:bg-slate-100 dark:group-hover:bg-slate-900 px-2 py-1 text-xl font-semibold text-sky-600 dark:bg-slate-900 dark:font-normal dark:text-sky-400 md:text-xl"
        >${char[script]}</p>
        <p class="text-base text-slate-700 dark:text-slate-500 group-hover:text-slate-100">${
          char.romaji
        }</p>
      </li>
    `
    );
  }, '');
  html += '</ul>';
  return html;
};

heroForm.addEventListener('focusin', function () {
  this.classList.add('outline', 'outline-2', 'outline-sky-500');
});

heroForm.addEventListener('focusout', function () {
  this.classList.remove('outline', 'outline-2', 'outline-sky-500');
});
