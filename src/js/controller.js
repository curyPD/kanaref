import * as modeView from './views/modeView.js';
import * as scriptPopupView from './views/scriptPopupView.js';
import { displayScript } from './views/chartView.js';
import * as model from './model.js';

const controlDisplayTheme = function () {
  model.setThemeOnLoad();
  const { theme } = model.state;
  modeView.displayTheme(theme, !('theme' in localStorage));
  localStorage.setItem('theme', theme);
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
  displayScript(model.state);
};

const init = function () {
  modeView.addEventHandlers();
  modeView.addHandlerSwitchMode(controlSwitchMode);
  scriptPopupView.addEventHandlers();
  scriptPopupView.addHandlerSwitchScript(controlSwitchScript);
  controlDisplayTheme();
};
init();
