const chartSection = document.getElementById('chart-section');
const chart = document.getElementById('chart');
const heading = document.getElementById('heading-primary');
const btnSeeChart = document.getElementById('btn-see-chart');
const overlay = document.getElementById('overlay');
export const modal = document.getElementById('modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const controlAudio = function () {
  const audio = modal.querySelector('#kana-audio');
  const playBtn = modal.querySelector('#btn-play-audio');
  const pauseBtn = modal.querySelector('#btn-pause-audio');

  const displayControls = function () {
    pauseBtn.classList.remove('flex');
    pauseBtn.classList.add('hidden');
    playBtn.classList.add('flex');
    playBtn.classList.remove('hidden');
  };

  const hideControls = function () {
    pauseBtn.classList.add('flex');
    pauseBtn.classList.remove('hidden');
    playBtn.classList.remove('flex');
    playBtn.classList.add('hidden');
  };

  if (audio.paused) {
    displayControls();
  } else {
    audio.addEventListener('canplay', function () {
      displayControls();
    });
  }

  playBtn.addEventListener('click', function () {
    audio.play();
    hideControls();
  });

  pauseBtn.addEventListener('click', function () {
    audio.pause();
    displayControls();
  });

  audio.addEventListener('ended', displayControls);
};

overlay.addEventListener('click', closeModal);

modal.addEventListener('click', function (e) {
  const btnCloseModal = e.target.closest('#btn-close-modal');
  if (!btnCloseModal) return;
  closeModal();
});

document.addEventListener('keydown', function (e) {
  if (e.key !== 'Escape') return;
  closeModal();
});

export const displayScript = function (data) {
  chart.querySelectorAll('[data-char]').forEach(character => {
    const { char } = character.dataset;
    character.querySelector('.kana-char').textContent =
      data.characters[char][data.script];
  });
  heading.textContent = `${data.script.replace(
    data.script[0],
    data.script[0].toUpperCase()
  )} Chart`;
};

export const addHandlerOpenCharModal = function (handler) {
  chart.addEventListener('click', handler);
};

export const addHandlerSeeKanaVersion = function (handler) {
  modal.addEventListener('click', handler);
};

export const addHandlerModalCharClick = function (handler) {
  modal.addEventListener('click', handler);
};

export const displayModal = function (character, script) {
  const html = `
      <button
        id="btn-close-modal"
        class="absolute top-0 right-0 -translate-x-2 translate-y-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-slate-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <form
        action="#"
        id="form"
        class="relative mb-6 flex items-center border-b border-slate-200 pb-3 dark:border-slate-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-slate-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search kana characters"
          id="search-field"
          class="ml-4 w-5/6 bg-white text-sm text-slate-700 placeholder:text-slate-600 focus:outline-none dark:bg-slate-800 dark:text-slate-300 dark:placeholder:text-slate-500"
        />
        <div
          id="search-results-box"
          class="z-20 absolute  shadow-xl top-full hidden w-full translate-y-2 max-h-48 overflow-y-auto rounded-lg bg-slate-50 p-2 dark:bg-slate-800">
        </div>
      </form>
      <div class="mb-6 sm:flex flex-between sm:items-start md:items-center sm:space-x-5 md:space-x-8">
        <div
          class="mb-9 rounded-xl bg-slate-200 px-4 py-5 text-center dark:bg-slate-700 sm:mb-0"
        >
          <p
            class="kana-char cursor-default text-8xl font-medium text-slate-800 dark:text-slate-50 md:text-9xl"
          >
            ${character[script]}
          </p>
        </div>
        <div class="text-center sm:text-left basis-full">
          <p
            class="mb-8 sm:mt-2 text-sm md:text-base md:mb-10 leading-loose text-slate-800 dark:text-slate-300"
          >
            <span
              class="kana-char rounded bg-slate-100 px-2 py-1 text-xl font-semibold text-sky-600 dark:bg-slate-900 dark:font-normal dark:text-sky-400 md:text-xl"
              >${character[script]}</span
            >
            ${character.pronunciation}
          </p>
          <div
            class="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:justify-start space-x-8 md:space-x-14 sm:space-y-0"
          >
            <figure class="relative flex items-center">
              <button
                id="btn-play-audio"
                class="group relative flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 dark:bg-slate-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-slate-300 dark:text-slate-900 group-hover:text-slate-200 dark:group-hover:text-slate-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                </svg>
              </button>
              <button
                id="btn-pause-audio"
                class="group hidden relative h-8 w-8 items-center justify-center rounded-full bg-slate-800 dark:bg-slate-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-slate-300 dark:text-slate-900 group-hover:text-slate-200 dark:group-hover:text-slate-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
              </button>

              <audio id="kana-audio">
                <source src="${character.audio}" type="audio/mpeg" />
                <p class="absolute -top-1/2 -left-6 rounded-md p-2 w-32 text-xs text-slate-600 dark:text-slate-300">Sorry, but your browser doesn't support the audio tag</p>
                </audio>

              <figcaption class="flex flex-col space-y-1 ml-3">
                <p class="kana-char text-slate-800 dark:text-slate-300">${
                  character[script]
                }</p>
                <p class="text-center text-sm text-slate-800 dark:text-slate-300">${character.romaji.toUpperCase()}</p>
              </figcaption>
            </figure>
            ${
              character.variations
                ? `
            <div id="variations" class="flex items-center space-x-3 ">
              <p class="text-sm text-slate-500">Variations:</p>
              <div class="flex space-x-1">
              ${character.variations
                .map(
                  variation => `
              <span
                data-char="${variation.di ?? variation.du ?? variation.romaji}"
                class="kana-char cursor-pointer rounded px-1 py-1 text-lg font-semibold text-slate-600 hover:text-slate-500 dark:font-normal dark:text-slate-300 dark:hover:text-slate-50 md:text-xl"
                >${variation[script]}</span
              >
              `
                )
                .join('')}
                
              </div>
            </div>
            
            `
                : ''
            }
          </div>
        </div>
      </div>

      <footer
        class="flex flex-col space-y-3 border-t border-slate-200 pt-3 dark:border-slate-700 md:flex-row md:items-center md:justify-between md:space-y-0"
      >
        <p class="text-sm text-slate-600 dark:text-slate-500">
          Currently learning:
          <span class="text-sm font-medium text-slate-900 dark:text-slate-400" data-cur-learning="${script}"
            >${script.replace(script[0], script[0].toUpperCase())}</span
          >
        </p>
        <p class="text-sm text-slate-600 dark:text-slate-500">
          See the
          <button
            data-see-script="${script === 'hiragana' ? 'katakana' : 'hiragana'}"
            class="text-sm font-medium text-sky-600 underline hover:no-underline dark:text-sky-400"
          >
          ${script === 'hiragana' ? 'Katakana' : 'Hiragana'} version
          </button>
        </p>
      </footer>
  `;
  modal.innerHTML = '';
  modal.insertAdjacentHTML('afterbegin', html);
  openModal();
  controlAudio();
};

btnSeeChart.addEventListener('click', function () {
  chartSection.scrollIntoView({ behavior: 'smooth' });
});
