const btnOpenModes = document.getElementById('btn-open-modes');
const modesBox = document.getElementById('modes-box');

const openModes = function () {
  modesBox.classList.remove('hidden');
};

const closeModes = function () {
  modesBox.classList.add('hidden');
  modesBox.querySelector('[data-mode]').classList.remove('mode-active');
  modesBox.querySelector('[data-mode="system"]').classList.add('mode-active');
};

export const addEventHandlers = function () {
  btnOpenModes.addEventListener('click', openModes);
  document.addEventListener('click', function (e) {
    if (e.target.closest('#btn-open-modes') || e.target.closest('#modes-box'))
      return;
    closeModes();
  });
};

export const addHandlerSwitchMode = function (handler) {
  modesBox.addEventListener('click', handler);
};

export const setThemeOnLoad = function () {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  modesBox.querySelector('[data-mode]').classList.remove('mode-active');
  modesBox.querySelector('[data-mode="system"]').classList.add('mode-active');
};
/*
// Whenever the user explicitly chooses light mode
localStorage.theme = 'light';

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark';

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme');
*/
