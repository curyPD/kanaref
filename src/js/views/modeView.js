const btnOpenModes = document.getElementById('btn-open-modes');
const modesBox = document.getElementById('modes-box');

const openModes = function () {
  modesBox.classList.remove('hidden');
};

const closeModes = function () {
  modesBox.classList.add('hidden');
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

export const displayTheme = function (theme, systemMode = false) {
  if (theme === 'dark') document.documentElement.classList.add('dark');
  if (theme === 'light') document.documentElement.classList.remove('dark');
  modesBox.querySelectorAll('[data-theme]').forEach(el => {
    el.classList.remove('mode-active');
  });
  if (!systemMode) {
    modesBox
      .querySelector(`[data-theme="${theme}"]`)
      .classList.add('mode-active');
    btnOpenModes.innerHTML =
      theme === 'light'
        ? `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-sky-500 dark:text-sky-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
  `
        : `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-sky-500 dark:text-sky-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        >
        <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
        </svg>
        `;
  } else {
    btnOpenModes.innerHTML = `
    <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
    
    `;
    modesBox
      .querySelector(`[data-theme="system"]`)
      .classList.add('mode-active');
  }
  closeModes();
};
