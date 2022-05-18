import * as modeView from './views/modeView.js';
import * as scriptPopupView from './views/scriptPopupView.js';
import * as chartView from './views/chartView.js';
import * as searchView from './views/searchView.js';
import * as model from './model.js';
import './views/navView.js';
import './views/yearView.js';

const controlDisplayTheme = function () {
  model.setThemeOnLoad();
  const { theme } = model.state;
  modeView.displayTheme(theme, !('theme' in localStorage));
  localStorage.setItem('theme', theme);
};

const controlDisplayScript = function () {
  model.setScriptOnLoad();
  const { script } = model.state;
  scriptPopupView.displayScriptInPopup(script);
  chartView.displayScript(model.state);
};

const controlSwitchMode = function (e) {
  const li = e.target.closest('li');
  if (!li) return;
  const { theme } = li.dataset;
  if (theme === 'system') {
    localStorage.removeItem('theme');
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      model.state.theme = 'dark';
    } else {
      model.state.theme = 'light';
    }
    modeView.displayTheme(model.state.theme, !('theme' in localStorage));
    return;
  }
  localStorage.theme = theme;
  model.state.theme = theme;
  modeView.displayTheme(theme);
};

const controlSwitchScript = function (e) {
  const li = e.target.closest('li');
  if (!li) return;
  const { script } = li.dataset;
  model.state.script = script;
  localStorage.script = script;
  scriptPopupView.displayScriptInPopup(script);
  chartView.displayScript(model.state);
};

const controlOpenCharModal = function (e) {
  const charBox = e.target.closest('[data-char]');
  if (!charBox) return;
  const { char } = charBox.dataset;
  const character = model.state.characters[char];
  model.state.curLearningChar = character;
  chartView.displayModal(character, model.state.script);
};

const controlSeeKanaVersion = function (e) {
  const btnSwitchVersion = e.target.closest('[data-see-script]');
  if (!btnSwitchVersion) return;
  const script = btnSwitchVersion.dataset.seeScript;
  chartView.displayModal(model.state.curLearningChar, script);
};

const controlModalCharClick = function (e) {
  const clicked = e.target.closest('[data-char]');
  if (!clicked) return;
  const { char } = clicked.dataset;
  const character = model.state.characters[char];
  model.state.curLearningChar = character;
  const curLearningTextEl = chartView.modal.querySelector(
    '[data-cur-learning]'
  );
  const script = curLearningTextEl.dataset.curLearning;
  chartView.displayModal(
    character,
    clicked.closest('#search-results-box') ? model.state.script : script
  );
};

const controlFormInput = function (e) {
  const inputEl = e.target.closest('#search-field');
  if (!inputEl) return;
  const input = inputEl.value.toLowerCase();
  const results = Object.entries(model.state.characters)
    .filter(
      entry =>
        (entry[0].includes(input) || entry[1].romaji.includes(input)) &&
        input !== ''
    )
    .map(result => model.state.characters[result[0]]);

  searchView.renderSearchResults(results, model.state.script);
};

const controlFormSubmit = function (e) {
  e.preventDefault();
  const inputEl = e.target.querySelector('input');
  const input = inputEl.value.toLowerCase();
  if (!input) return;
  inputEl.value = '';
  if (
    model.state.characters[input] ||
    Object.entries(model.state.characters).some(
      entry => entry[1].romaji === input
    )
  ) {
    model.state.curLearningChar = model.state.characters[input];
    chartView.displayModal(model.state.curLearningChar, model.state.script);
    return;
  }
  const results = Object.entries(model.state.characters)
    .filter(
      entry => entry[0].includes(input) || entry[1].romaji.includes(input)
    )
    .map(result => model.state.characters[result[0]]);
  if (results.length > 0) {
    model.state.curLearningChar = results[0];
    chartView.displayModal(model.state.curLearningChar, model.state.script);
    return;
  }
};

const init = function () {
  modeView.addEventHandlers();
  modeView.addHandlerSwitchMode(controlSwitchMode);
  scriptPopupView.addEventHandlers();
  scriptPopupView.addHandlerSwitchScript(controlSwitchScript);
  chartView.addHandlerOpenCharModal(controlOpenCharModal);
  chartView.addHandlerSeeKanaVersion(controlSeeKanaVersion);
  chartView.addHandlerModalCharClick(controlModalCharClick);
  searchView.addHandlerFormInput(controlFormInput);
  searchView.addHandlerFormSubmit(controlFormSubmit);
  controlDisplayTheme();
  controlDisplayScript();
  model.setAudioProperties();
};
init();
