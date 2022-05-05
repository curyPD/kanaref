const btnOpenScripts = document.getElementById('btn-open-scripts');
const scriptsBox = document.getElementById('scripts-box');

const openScripts = function () {
  scriptsBox.classList.remove('hidden');
};

const closeScripts = function () {
  scriptsBox.classList.add('hidden');
};

export const addEventHandlers = function () {
  btnOpenScripts.addEventListener('click', openScripts);
  document.addEventListener('click', function (e) {
    if (
      e.target.closest('#btn-open-scripts') ||
      e.target.closest('#scripts-box')
    )
      return;
    closeScripts();
  });
};

export const addHandlerSwitchScript = function (handler) {
  scriptsBox.addEventListener('click', handler);
};

export const displayScriptInPopup = function (script) {
  scriptsBox
    .querySelectorAll('[data-script]')
    .forEach(el => el.classList.remove('script-active'));
  scriptsBox
    .querySelector(`[data-script="${script}"]`)
    .classList.add('script-active');
  btnOpenScripts.querySelector('span').textContent = script.replace(
    script[0],
    script[0].toUpperCase()
  );
  closeScripts();
};
