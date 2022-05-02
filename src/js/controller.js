import * as modeView from './views/modeView.js';
import * as model from './model.js';

const controlSwitchMode = function (e) {
  const li = e.target.closest('li');
  if (!li) return;
  const { mode } = li.dataset;
  console.log(mode);
  model.state.mode = mode;
};

const init = function () {
  modeView.addEventHandlers();
  modeView.setThemeOnLoad();
  modeView.addHandlerSwitchMode(controlSwitchMode);
};
init();
