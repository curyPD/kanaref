// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9GjUt":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aenu9":[function(require,module,exports) {
var _modeViewJs = require("./views/modeView.js");
var _scriptPopupViewJs = require("./views/scriptPopupView.js");
var _chartViewJs = require("./views/chartView.js");
var _searchViewJs = require("./views/searchView.js");
var _modelJs = require("./model.js");
var _navViewJs = require("./views/navView.js");
var _yearViewJs = require("./views/yearView.js");
const controlDisplayTheme = function() {
    _modelJs.setThemeOnLoad();
    const { theme  } = _modelJs.state;
    _modeViewJs.displayTheme(theme, !('theme' in localStorage));
    localStorage.setItem('theme', theme);
};
const controlDisplayScript = function() {
    _modelJs.setScriptOnLoad();
    const { script  } = _modelJs.state;
    _scriptPopupViewJs.displayScriptInPopup(script);
    _chartViewJs.displayScript(_modelJs.state);
};
const controlSwitchMode = function(e) {
    const li = e.target.closest('li');
    if (!li) return;
    const { theme  } = li.dataset;
    if (theme === 'system') {
        localStorage.removeItem('theme');
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) _modelJs.state.theme = 'dark';
        else _modelJs.state.theme = 'light';
        _modeViewJs.displayTheme(_modelJs.state.theme, !('theme' in localStorage));
        return;
    }
    localStorage.theme = theme;
    _modelJs.state.theme = theme;
    _modeViewJs.displayTheme(theme);
};
const controlSwitchScript = function(e) {
    const li = e.target.closest('li');
    if (!li) return;
    const { script  } = li.dataset;
    _modelJs.state.script = script;
    localStorage.script = script;
    _scriptPopupViewJs.displayScriptInPopup(script);
    _chartViewJs.displayScript(_modelJs.state);
};
const controlOpenCharModal = function(e) {
    const charBox = e.target.closest('[data-char]');
    if (!charBox) return;
    const { char  } = charBox.dataset;
    const character = _modelJs.state.characters[char];
    _modelJs.state.curLearningChar = character;
    _chartViewJs.displayModal(character, _modelJs.state.script);
};
const controlSeeKanaVersion = function(e) {
    const btnSwitchVersion = e.target.closest('[data-see-script]');
    if (!btnSwitchVersion) return;
    const script = btnSwitchVersion.dataset.seeScript;
    _chartViewJs.displayModal(_modelJs.state.curLearningChar, script);
};
const controlModalCharClick = function(e) {
    const clicked = e.target.closest('[data-char]');
    if (!clicked) return;
    const { char  } = clicked.dataset;
    const character = _modelJs.state.characters[char];
    _modelJs.state.curLearningChar = character;
    const curLearningTextEl = _chartViewJs.modal.querySelector('[data-cur-learning]');
    const script = curLearningTextEl.dataset.curLearning;
    _chartViewJs.displayModal(character, clicked.closest('#search-results-box') ? _modelJs.state.script : script);
};
const controlFormInput = function(e) {
    const inputEl = e.target.closest('#search-field');
    if (!inputEl) return;
    const input = inputEl.value.toLowerCase();
    const results = Object.entries(_modelJs.state.characters).filter((entry)=>(entry[0].includes(input) || entry[1].romaji.includes(input)) && input !== ''
    ).map((result)=>_modelJs.state.characters[result[0]]
    );
    _searchViewJs.renderSearchResults(results, _modelJs.state.script);
};
const controlFormSubmit = function(e) {
    e.preventDefault();
    const inputEl = e.target.querySelector('input');
    const input = inputEl.value.toLowerCase();
    if (!input) return;
    inputEl.value = '';
    if (_modelJs.state.characters[input] || Object.entries(_modelJs.state.characters).some((entry)=>entry[1].romaji === input
    )) {
        _modelJs.state.curLearningChar = _modelJs.state.characters[input];
        _chartViewJs.displayModal(_modelJs.state.curLearningChar, _modelJs.state.script);
        return;
    }
    const results = Object.entries(_modelJs.state.characters).filter((entry)=>entry[0].includes(input) || entry[1].romaji.includes(input)
    ).map((result)=>_modelJs.state.characters[result[0]]
    );
    if (results.length > 0) {
        _modelJs.state.curLearningChar = results[0];
        _chartViewJs.displayModal(_modelJs.state.curLearningChar, _modelJs.state.script);
        return;
    }
};
const init = function() {
    _modeViewJs.addEventHandlers();
    _modeViewJs.addHandlerSwitchMode(controlSwitchMode);
    _scriptPopupViewJs.addEventHandlers();
    _scriptPopupViewJs.addHandlerSwitchScript(controlSwitchScript);
    _chartViewJs.addHandlerOpenCharModal(controlOpenCharModal);
    _chartViewJs.addHandlerSeeKanaVersion(controlSeeKanaVersion);
    _chartViewJs.addHandlerModalCharClick(controlModalCharClick);
    _searchViewJs.addHandlerFormInput(controlFormInput);
    _searchViewJs.addHandlerFormSubmit(controlFormSubmit);
    controlDisplayTheme();
    controlDisplayScript();
    _modelJs.setAudioProperties();
};
init();

},{"./views/modeView.js":"3nARV","./views/scriptPopupView.js":"8yEI2","./views/chartView.js":"icslX","./views/searchView.js":"9OQAM","./model.js":"Y4A21","./views/navView.js":"82Kie","./views/yearView.js":"h1NOz"}],"3nARV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addEventHandlers", ()=>addEventHandlers
);
parcelHelpers.export(exports, "addHandlerSwitchMode", ()=>addHandlerSwitchMode
);
parcelHelpers.export(exports, "displayTheme", ()=>displayTheme
);
const btnOpenModes = document.getElementById('btn-open-modes');
const modesBox = document.getElementById('modes-box');
const openModes = function() {
    modesBox.classList.remove('hidden');
};
const closeModes = function() {
    modesBox.classList.add('hidden');
};
const addEventHandlers = function() {
    btnOpenModes.addEventListener('click', openModes);
    document.addEventListener('click', function(e) {
        if (e.target.closest('#btn-open-modes') || e.target.closest('#modes-box')) return;
        closeModes();
    });
};
const addHandlerSwitchMode = function(handler) {
    modesBox.addEventListener('click', handler);
};
const displayTheme = function(theme, systemMode = false) {
    if (theme === 'dark') document.documentElement.classList.add('dark');
    if (theme === 'light') document.documentElement.classList.remove('dark');
    modesBox.querySelectorAll('[data-theme]').forEach((el)=>{
        el.classList.remove('mode-active');
    });
    if (!systemMode) {
        modesBox.querySelector(`[data-theme="${theme}"]`).classList.add('mode-active');
        btnOpenModes.innerHTML = theme === 'light' ? `
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
  ` : `
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
        modesBox.querySelector(`[data-theme="system"]`).classList.add('mode-active');
    }
    closeModes();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8yEI2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addEventHandlers", ()=>addEventHandlers
);
parcelHelpers.export(exports, "addHandlerSwitchScript", ()=>addHandlerSwitchScript
);
parcelHelpers.export(exports, "displayScriptInPopup", ()=>displayScriptInPopup
);
const btnOpenScripts = document.getElementById('btn-open-scripts');
const scriptsBox = document.getElementById('scripts-box');
const openScripts = function() {
    scriptsBox.classList.remove('hidden');
};
const closeScripts = function() {
    scriptsBox.classList.add('hidden');
};
const addEventHandlers = function() {
    btnOpenScripts.addEventListener('click', openScripts);
    document.addEventListener('click', function(e) {
        if (e.target.closest('#btn-open-scripts') || e.target.closest('#scripts-box')) return;
        closeScripts();
    });
};
const addHandlerSwitchScript = function(handler) {
    scriptsBox.addEventListener('click', handler);
};
const displayScriptInPopup = function(script) {
    scriptsBox.querySelectorAll('[data-script]').forEach((el)=>el.classList.remove('script-active')
    );
    scriptsBox.querySelector(`[data-script="${script}"]`).classList.add('script-active');
    btnOpenScripts.querySelector('span').textContent = script.replace(script[0], script[0].toUpperCase());
    closeScripts();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"icslX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "modal", ()=>modal
);
parcelHelpers.export(exports, "displayScript", ()=>displayScript
);
parcelHelpers.export(exports, "addHandlerOpenCharModal", ()=>addHandlerOpenCharModal
);
parcelHelpers.export(exports, "addHandlerSeeKanaVersion", ()=>addHandlerSeeKanaVersion
);
parcelHelpers.export(exports, "addHandlerModalCharClick", ()=>addHandlerModalCharClick
);
parcelHelpers.export(exports, "displayModal", ()=>displayModal
);
const chartSection = document.getElementById('chart-section');
const chart = document.getElementById('chart');
const heading = document.getElementById('heading-primary');
const btnSeeChart = document.getElementById('btn-see-chart');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
const controlAudio = function() {
    const audio = modal.querySelector('#kana-audio');
    const playBtn = modal.querySelector('#btn-play-audio');
    const pauseBtn = modal.querySelector('#btn-pause-audio');
    const displayControls = function() {
        pauseBtn.classList.remove('flex');
        pauseBtn.classList.add('hidden');
        playBtn.classList.add('flex');
        playBtn.classList.remove('hidden');
    };
    const hideControls = function() {
        pauseBtn.classList.add('flex');
        pauseBtn.classList.remove('hidden');
        playBtn.classList.remove('flex');
        playBtn.classList.add('hidden');
    };
    if (audio.paused) displayControls();
    else audio.addEventListener('canplay', function() {
        displayControls();
    });
    playBtn.addEventListener('click', function() {
        audio.play();
        hideControls();
    });
    pauseBtn.addEventListener('click', function() {
        audio.pause();
        displayControls();
    });
    audio.addEventListener('ended', displayControls);
};
overlay.addEventListener('click', closeModal);
modal.addEventListener('click', function(e) {
    const btnCloseModal = e.target.closest('#btn-close-modal');
    if (!btnCloseModal) return;
    closeModal();
});
document.addEventListener('keydown', function(e) {
    if (e.key !== 'Escape') return;
    closeModal();
});
const displayScript = function(data) {
    chart.querySelectorAll('[data-char]').forEach((character)=>{
        const { char  } = character.dataset;
        character.querySelector('.kana-char').textContent = data.characters[char][data.script];
    });
    heading.textContent = `${data.script.replace(data.script[0], data.script[0].toUpperCase())} Chart`;
};
const addHandlerOpenCharModal = function(handler) {
    chart.addEventListener('click', handler);
};
const addHandlerSeeKanaVersion = function(handler) {
    modal.addEventListener('click', handler);
};
const addHandlerModalCharClick = function(handler) {
    modal.addEventListener('click', handler);
};
const displayModal = function(character, script) {
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
                <p class="kana-char text-slate-800 dark:text-slate-300">${character[script]}</p>
                <p class="text-center text-sm text-slate-800 dark:text-slate-300">${character.romaji.toUpperCase()}</p>
              </figcaption>
            </figure>
            ${character.variations ? `
            <div id="variations" class="flex items-center space-x-3 ">
              <p class="text-sm text-slate-500">Variations:</p>
              <div class="flex space-x-1">
              ${character.variations.map((variation)=>`
              <span
                data-char="${(variation.di ?? variation.du) ?? variation.romaji}"
                class="kana-char cursor-pointer rounded px-1 py-1 text-lg font-semibold text-slate-600 hover:text-slate-500 dark:font-normal dark:text-slate-300 dark:hover:text-slate-50 md:text-xl"
                >${variation[script]}</span
              >
              `
    ).join('')}
                
              </div>
            </div>
            
            ` : ''}
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
btnSeeChart.addEventListener('click', function() {
    chartSection.scrollIntoView({
        behavior: 'smooth'
    });
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9OQAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addHandlerFormInput", ()=>addHandlerFormInput
);
parcelHelpers.export(exports, "addHandlerFormSubmit", ()=>addHandlerFormSubmit
);
parcelHelpers.export(exports, "renderSearchResults", ()=>renderSearchResults
);
var _chartViewJs = require("./chartView.js");
const heroForm = document.getElementById('hero-form');
const addHandlerFormInput = function(handler) {
    _chartViewJs.modal.addEventListener('input', handler);
};
const addHandlerFormSubmit = function(handler) {
    [
        _chartViewJs.modal,
        heroForm
    ].forEach((el)=>el.addEventListener('submit', handler)
    );
};
const renderSearchResults = function(characters, script) {
    const html = generateMarkup(characters, script);
    const searchResultsBox = _chartViewJs.modal.querySelector('#search-results-box');
    searchResultsBox.innerHTML = '';
    searchResultsBox.classList.remove('hidden');
    searchResultsBox.insertAdjacentHTML('afterbegin', html);
};
const generateMarkup = function(characters, script) {
    let html = '<ul class="flex flex-col space-y-2">';
    html += characters.reduce((str, char)=>{
        return str + `
      <li
      data-char="${(char.di ?? char.du) ?? char.romaji}"
      class="group flex space-x-4 items-center p-3 rounded-md cursor-pointer bg-slate-100 dark:bg-slate-700/[.3] hover:bg-sky-500 dark:hover:bg-sky-400">
        <p
          class="kana-char rounded bg-slate-200 group-hover:bg-slate-100 dark:group-hover:bg-slate-900 px-2 py-1 text-xl font-semibold text-sky-600 dark:bg-slate-900 dark:font-normal dark:text-sky-400 md:text-xl"
        >${char[script]}</p>
        <p class="text-base text-slate-700 dark:text-slate-500 group-hover:text-slate-100">${char.romaji}</p>
      </li>
    `;
    }, '');
    html += '</ul>';
    return html;
};
heroForm.addEventListener('focusin', function() {
    this.classList.add('outline', 'outline-2', 'outline-sky-500');
});
heroForm.addEventListener('focusout', function() {
    this.classList.remove('outline', 'outline-2', 'outline-sky-500');
});

},{"./chartView.js":"icslX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setAudioProperties", ()=>setAudioProperties
);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "setThemeOnLoad", ()=>setThemeOnLoad
);
parcelHelpers.export(exports, "setScriptOnLoad", ()=>setScriptOnLoad
);
var _audioLibraryJs = require("./audioLibrary.js");
const setAudioProperties = function() {
    Object.entries(state.characters).forEach((entry)=>{
        entry[1].audio = _audioLibraryJs[`${entry[1].romaji}Sound`];
    });
};
const state = {
    theme: '',
    script: 'hiragana',
    characters: {
        a: {
            romaji: 'a',
            hiragana: 'あ',
            katakana: 'ア',
            pronunciation: `is pronounced like "a" in "c<span class="mx-1 text-sky-600 dark:text-sky-400">a</span>r"`
        },
        i: {
            romaji: 'i',
            hiragana: 'い',
            katakana: 'イ',
            pronunciation: `is pronounced like "ee" in "gr<span class="mx-1 text-sky-600 dark:text-sky-400">ee</span>n"`
        },
        u: {
            romaji: 'u',
            hiragana: 'う',
            katakana: 'ウ',
            pronunciation: `is pronounced like "oo" in "c<span class="mx-1 text-sky-600 dark:text-sky-400">oo</span>kie"`
        },
        e: {
            romaji: 'e',
            hiragana: 'え',
            katakana: 'エ',
            pronunciation: `is pronounced like "e" in "p<span class="mx-1 text-sky-600 dark:text-sky-400">e</span>n"`
        },
        o: {
            romaji: 'o',
            hiragana: 'お',
            katakana: 'オ',
            pronunciation: `is pronounced like "o" in "t<span class="mx-1 text-sky-600 dark:text-sky-400">o</span>p"`
        },
        ka: {
            romaji: 'ka',
            hiragana: 'か',
            katakana: 'カ',
            pronunciation: `is like "k" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ka</span>"`,
            get variations () {
                return [
                    state.characters.ga
                ];
            }
        },
        ki: {
            romaji: 'ki',
            hiragana: 'き',
            katakana: 'キ',
            pronunciation: `is like "k" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ki</span>"`,
            get variations () {
                return [
                    state.characters.gi
                ];
            }
        },
        ku: {
            romaji: 'ku',
            hiragana: 'く',
            katakana: 'ク',
            pronunciation: `is like "k" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ku</span>"`,
            get variations () {
                return [
                    state.characters.gu
                ];
            }
        },
        ke: {
            romaji: 'ke',
            hiragana: 'け',
            katakana: 'ケ',
            pronunciation: `is like "k" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ke</span>"`,
            get variations () {
                return [
                    state.characters.ge
                ];
            }
        },
        ko: {
            romaji: 'ko',
            hiragana: 'こ',
            katakana: 'コ',
            pronunciation: `is like "k" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ko</span>"`,
            get variations () {
                return [
                    state.characters.go
                ];
            }
        },
        sa: {
            romaji: 'sa',
            hiragana: 'さ',
            katakana: 'サ',
            pronunciation: `is like "s" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">sa</span>"`,
            get variations () {
                return [
                    state.characters.za
                ];
            }
        },
        shi: {
            romaji: 'shi',
            hiragana: 'し',
            katakana: 'シ',
            pronunciation: `is like "sh" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">shi</span>"`,
            get variations () {
                return [
                    state.characters.ji
                ];
            }
        },
        su: {
            romaji: 'su',
            hiragana: 'す',
            katakana: 'ス',
            pronunciation: `is like "s" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">su</span>"`,
            get variations () {
                return [
                    state.characters.zu
                ];
            }
        },
        se: {
            romaji: 'se',
            hiragana: 'せ',
            katakana: 'セ',
            pronunciation: `is like "s" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">se</span>"`,
            get variations () {
                return [
                    state.characters.ze
                ];
            }
        },
        so: {
            romaji: 'so',
            hiragana: 'そ',
            katakana: 'ソ',
            pronunciation: `is like "s" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">so</span>"`,
            get variations () {
                return [
                    state.characters.zo
                ];
            }
        },
        ta: {
            romaji: 'ta',
            hiragana: 'た',
            katakana: 'タ',
            pronunciation: `is like "t" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ta</span>"`,
            get variations () {
                return [
                    state.characters.da
                ];
            }
        },
        chi: {
            romaji: 'chi',
            hiragana: 'ち',
            katakana: 'チ',
            pronunciation: `is like "ch" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">chi</span>"`,
            get variations () {
                return [
                    state.characters.di
                ];
            }
        },
        tsu: {
            romaji: 'tsu',
            hiragana: 'つ',
            katakana: 'ツ',
            pronunciation: `is like "ts" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">tsu</span>"`,
            get variations () {
                return [
                    state.characters.du
                ];
            }
        },
        te: {
            romaji: 'te',
            hiragana: 'て',
            katakana: 'テ',
            pronunciation: `is like "t" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">te</span>"`,
            get variations () {
                return [
                    state.characters.de
                ];
            }
        },
        to: {
            romaji: 'to',
            hiragana: 'と',
            katakana: 'ト',
            pronunciation: `is like "t" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">to</span>"`,
            get variations () {
                return [
                    state.characters.do
                ];
            }
        },
        na: {
            romaji: 'na',
            hiragana: 'な',
            katakana: 'ナ',
            pronunciation: `is like "n" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">na</span>"`
        },
        ni: {
            romaji: 'ni',
            hiragana: 'に',
            katakana: 'ニ',
            pronunciation: `is like "n" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ni</span>"`
        },
        nu: {
            romaji: 'nu',
            hiragana: 'ぬ',
            katakana: 'ヌ',
            pronunciation: `is like "n" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">nu</span>"`
        },
        ne: {
            romaji: 'ne',
            hiragana: 'ね',
            katakana: 'ネ',
            pronunciation: `is like "n" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ne</span>"`
        },
        no: {
            romaji: 'no',
            hiragana: 'の',
            katakana: 'ノ',
            pronunciation: `is like "n" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">no</span>"`
        },
        ha: {
            romaji: 'ha',
            hiragana: 'は',
            katakana: 'ハ',
            pronunciation: `is like "h" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ha</span>"`,
            get variations () {
                return [
                    state.characters.ba,
                    state.characters.pa
                ];
            }
        },
        hi: {
            romaji: 'hi',
            hiragana: 'ひ',
            katakana: 'ヒ',
            pronunciation: `is like "h" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">hi</span>"`,
            get variations () {
                return [
                    state.characters.bi,
                    state.characters.pi
                ];
            }
        },
        fu: {
            romaji: 'fu',
            hiragana: 'ふ',
            katakana: 'フ',
            pronunciation: `is like "f/h" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">fu/hu</span>"`,
            get variations () {
                return [
                    state.characters.bu,
                    state.characters.pu
                ];
            }
        },
        he: {
            romaji: 'he',
            hiragana: 'へ',
            katakana: 'へ',
            pronunciation: `is like "h" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">he</span>"`,
            get variations () {
                return [
                    state.characters.be,
                    state.characters.pe
                ];
            }
        },
        ho: {
            romaji: 'ho',
            hiragana: 'ほ',
            katakana: 'ホ',
            pronunciation: `is like "h" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ho</span>"`,
            get variations () {
                return [
                    state.characters.bo,
                    state.characters.po
                ];
            }
        },
        ma: {
            romaji: 'ma',
            hiragana: 'ま',
            katakana: 'マ',
            pronunciation: `is like "m" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ma</span>"`
        },
        mi: {
            romaji: 'mi',
            hiragana: 'み',
            katakana: 'ミ',
            pronunciation: `is like "m" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">mi</span>"`
        },
        mu: {
            romaji: 'mu',
            hiragana: 'む',
            katakana: 'ム',
            pronunciation: `is like "m" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">mu</span>"`
        },
        me: {
            romaji: 'me',
            hiragana: 'め',
            katakana: 'メ',
            pronunciation: `is like "m" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">me</span>"`
        },
        mo: {
            romaji: 'mo',
            hiragana: 'も',
            katakana: 'モ',
            pronunciation: `is like "m" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">mo</span>"`
        },
        ya: {
            romaji: 'ya',
            hiragana: 'や',
            katakana: 'ヤ',
            pronunciation: `is like "Y" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ya</span>"`
        },
        yu: {
            romaji: 'yu',
            hiragana: 'ゆ',
            katakana: 'ユ',
            pronunciation: `is like "Y" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">yu</span>"`
        },
        yo: {
            romaji: 'yo',
            hiragana: 'よ',
            katakana: 'ヨ',
            pronunciation: `is like "Y" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">yo</span>"`
        },
        ra: {
            romaji: 'ra',
            hiragana: 'ら',
            katakana: 'ラ',
            pronunciation: `is like "r" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ra</span>"`
        },
        ri: {
            romaji: 'ri',
            hiragana: 'り',
            katakana: 'リ',
            pronunciation: `is like "r" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ri</span>"`
        },
        ru: {
            romaji: 'ru',
            hiragana: 'る',
            katakana: 'ル',
            pronunciation: `is like "r" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ru</span>"`
        },
        re: {
            romaji: 're',
            hiragana: 'れ',
            katakana: 'レ',
            pronunciation: `is like "r" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">re</span>"`
        },
        ro: {
            romaji: 'ro',
            hiragana: 'ろ',
            katakana: 'ロ',
            pronunciation: `is like "r" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ro</span>"`
        },
        wa: {
            romaji: 'wa',
            hiragana: 'わ',
            katakana: 'ワ',
            pronunciation: `is simply "w" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">wa</span>"`
        },
        wo: {
            romaji: 'wo',
            hiragana: 'を',
            katakana: 'ヲ',
            pronunciation: `is simply "w" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">wo</span>"`
        },
        n: {
            romaji: 'n',
            hiragana: 'ん',
            katakana: 'ン',
            pronunciation: `is simply the "<span class="mx-1 text-sky-600 dark:text-sky-400">n</span>" sound`
        },
        ga: {
            romaji: 'ga',
            hiragana: 'が',
            katakana: 'ガ',
            pronunciation: `is like "g" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ga</span>"`,
            get variations () {
                return [
                    state.characters.ka
                ];
            }
        },
        gi: {
            romaji: 'gi',
            hiragana: 'ぎ',
            katakana: 'ギ',
            pronunciation: `is like "g" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">gi</span>"`,
            get variations () {
                return [
                    state.characters.ki
                ];
            }
        },
        gu: {
            romaji: 'gu',
            hiragana: 'ぐ',
            katakana: 'グ',
            pronunciation: `is like "g" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">gu</span>"`,
            get variations () {
                return [
                    state.characters.ku
                ];
            }
        },
        ge: {
            romaji: 'ge',
            hiragana: 'げ',
            katakana: 'ゲ',
            pronunciation: `is like "g" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ge</span>"`,
            get variations () {
                return [
                    state.characters.ke
                ];
            }
        },
        go: {
            romaji: 'go',
            hiragana: 'ご',
            katakana: 'ゴ',
            pronunciation: `is like "g" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">go</span>"`,
            get variations () {
                return [
                    state.characters.ko
                ];
            }
        },
        za: {
            romaji: 'za',
            hiragana: 'ざ',
            katakana: 'ザ',
            pronunciation: `is like "z" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">za</span>"`,
            get variations () {
                return [
                    state.characters.sa
                ];
            }
        },
        ji: {
            romaji: 'ji',
            hiragana: 'じ',
            katakana: 'ジ',
            pronunciation: `is like "j" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ji</span>"`,
            get variations () {
                return [
                    state.characters.shi
                ];
            }
        },
        zu: {
            romaji: 'zu',
            hiragana: 'ず',
            katakana: 'ズ',
            pronunciation: `is like "z" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">zu</span>"`,
            get variations () {
                return [
                    state.characters.su
                ];
            }
        },
        ze: {
            romaji: 'ze',
            hiragana: 'ぜ',
            katakana: 'ゼ',
            pronunciation: `is like "z" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ze</span>"`,
            get variations () {
                return [
                    state.characters.se
                ];
            }
        },
        zo: {
            romaji: 'zo',
            hiragana: 'ぞ',
            katakana: 'ゾ',
            pronunciation: `is like "z" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">zo</span>"`,
            get variations () {
                return [
                    state.characters.so
                ];
            }
        },
        da: {
            romaji: 'da',
            hiragana: 'だ',
            katakana: 'ダ',
            pronunciation: `is like "d" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">da</span>"`,
            get variations () {
                return [
                    state.characters.ta
                ];
            }
        },
        di: {
            di: 'di',
            romaji: 'ji',
            hiragana: 'ぢ',
            katakana: 'ヂ',
            pronunciation: `sounds like "j" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ji</span>"`,
            get variations () {
                return [
                    state.characters.chi
                ];
            }
        },
        du: {
            du: 'du',
            romaji: 'zu',
            hiragana: 'づ',
            katakana: 'ヅ',
            pronunciation: `sounds like "z" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">zu</span>"`,
            get variations () {
                return [
                    state.characters.tsu
                ];
            }
        },
        de: {
            romaji: 'de',
            hiragana: 'で',
            katakana: 'デ',
            pronunciation: `is like "d" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">de</span>"`,
            get variations () {
                return [
                    state.characters.te
                ];
            }
        },
        do: {
            romaji: 'do',
            hiragana: 'ど',
            katakana: 'ド',
            pronunciation: `is like "d" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">do</span>"`,
            get variations () {
                return [
                    state.characters.to
                ];
            }
        },
        ba: {
            romaji: 'ba',
            hiragana: 'ば',
            katakana: 'バ',
            pronunciation: `is like "b" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">ba</span>"`,
            get variations () {
                return [
                    state.characters.ha,
                    state.characters.pa
                ];
            }
        },
        bi: {
            romaji: 'bi',
            hiragana: 'び',
            katakana: 'ビ',
            pronunciation: `is like "b" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">bi</span>"`,
            get variations () {
                return [
                    state.characters.hi,
                    state.characters.pi
                ];
            }
        },
        bu: {
            romaji: 'bu',
            hiragana: 'ぶ',
            katakana: 'ブ',
            pronunciation: `is like "b" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">bu</span>"`,
            get variations () {
                return [
                    state.characters.fu,
                    state.characters.pu
                ];
            }
        },
        be: {
            romaji: 'be',
            hiragana: 'べ',
            katakana: 'べ',
            pronunciation: `is like "b" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">be</span>"`,
            get variations () {
                return [
                    state.characters.he,
                    state.characters.pe
                ];
            }
        },
        bo: {
            romaji: 'bo',
            hiragana: 'ぼ',
            katakana: 'ボ',
            pronunciation: `is like "b" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">bo</span>"`,
            get variations () {
                return [
                    state.characters.ho,
                    state.characters.po
                ];
            }
        },
        pa: {
            romaji: 'pa',
            hiragana: 'ぱ',
            katakana: 'パ',
            pronunciation: `is like "p" plus <span class="kana-char">あ</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">pa</span>"`,
            get variations () {
                return [
                    state.characters.ha,
                    state.characters.ba
                ];
            }
        },
        pi: {
            romaji: 'pi',
            hiragana: 'ぴ',
            katakana: 'ピ',
            pronunciation: `is like "p" plus <span class="kana-char">い</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">pi</span>"`,
            get variations () {
                return [
                    state.characters.hi,
                    state.characters.bi
                ];
            }
        },
        pu: {
            romaji: 'pu',
            hiragana: 'ぷ',
            katakana: 'プ',
            pronunciation: `is like "p" plus <span class="kana-char">う</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">pu</span>"`,
            get variations () {
                return [
                    state.characters.fu,
                    state.characters.bu
                ];
            }
        },
        pe: {
            romaji: 'pe',
            hiragana: 'ぺ',
            katakana: 'ぺ',
            pronunciation: `is like "p" plus <span class="kana-char">え</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">pe</span>"`,
            get variations () {
                return [
                    state.characters.he,
                    state.characters.be
                ];
            }
        },
        po: {
            romaji: 'po',
            hiragana: 'ぽ',
            katakana: 'ポ',
            pronunciation: `is like "p" plus <span class="kana-char">お</span>, making "<span class="mx-1 text-sky-600 dark:text-sky-400">po</span>"`,
            get variations () {
                return [
                    state.characters.ho,
                    state.characters.bo
                ];
            }
        }
    },
    curLearningChar: undefined
};
const setThemeOnLoad = function() {
    if (localStorage.theme === 'dark' || !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) state.theme = 'dark';
    else state.theme = 'light';
};
const setScriptOnLoad = function() {
    if (localStorage.script === 'katakana') state.script = 'katakana';
    if (!('script' in localStorage) || localStorage.script === 'hiragana') {
        state.script = 'hiragana';
        localStorage.script = 'hiragana';
    }
};

},{"./audioLibrary.js":"atphX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"atphX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "aSound", ()=>_kanasoundAMp3Default.default
);
parcelHelpers.export(exports, "iSound", ()=>_kanasoundIMp3Default.default
);
parcelHelpers.export(exports, "uSound", ()=>_kanasoundUMp3Default.default
);
parcelHelpers.export(exports, "eSound", ()=>_kanasoundEMp3Default.default
);
parcelHelpers.export(exports, "oSound", ()=>_kanasoundOMp3Default.default
);
parcelHelpers.export(exports, "kaSound", ()=>_kanasoundKaMp3Default.default
);
parcelHelpers.export(exports, "kiSound", ()=>_kanasoundKiMp3Default.default
);
parcelHelpers.export(exports, "kuSound", ()=>_kanasoundKuMp3Default.default
);
parcelHelpers.export(exports, "keSound", ()=>_kanasoundKeMp3Default.default
);
parcelHelpers.export(exports, "koSound", ()=>_kanasoundKoMp3Default.default
);
parcelHelpers.export(exports, "saSound", ()=>_kanasoundSaMp3Default.default
);
parcelHelpers.export(exports, "shiSound", ()=>_kanasoundShiMp3Default.default
);
parcelHelpers.export(exports, "suSound", ()=>_kanasoundSuMp3Default.default
);
parcelHelpers.export(exports, "seSound", ()=>_kanasoundSeMp3Default.default
);
parcelHelpers.export(exports, "soSound", ()=>_kanasoundSoMp3Default.default
);
parcelHelpers.export(exports, "taSound", ()=>_kanasoundTaMp3Default.default
);
parcelHelpers.export(exports, "chiSound", ()=>_kanasoundChiMp3Default.default
);
parcelHelpers.export(exports, "tsuSound", ()=>_kanasoundTsuMp3Default.default
);
parcelHelpers.export(exports, "teSound", ()=>_kanasoundTeMp3Default.default
);
parcelHelpers.export(exports, "toSound", ()=>_kanasoundToMp3Default.default
);
parcelHelpers.export(exports, "naSound", ()=>_kanasoundNaMp3Default.default
);
parcelHelpers.export(exports, "niSound", ()=>_kanasoundNiMp3Default.default
);
parcelHelpers.export(exports, "nuSound", ()=>_kanasoundNuMp3Default.default
);
parcelHelpers.export(exports, "neSound", ()=>_kanasoundNeMp3Default.default
);
parcelHelpers.export(exports, "noSound", ()=>_kanasoundNoMp3Default.default
);
parcelHelpers.export(exports, "haSound", ()=>_kanasoundHaMp3Default.default
);
parcelHelpers.export(exports, "hiSound", ()=>_kanasoundHiMp3Default.default
);
parcelHelpers.export(exports, "fuSound", ()=>_kanasoundFuMp3Default.default
);
parcelHelpers.export(exports, "heSound", ()=>_kanasoundHeMp3Default.default
);
parcelHelpers.export(exports, "hoSound", ()=>_kanasoundHoMp3Default.default
);
parcelHelpers.export(exports, "maSound", ()=>_kanasoundMaMp3Default.default
);
parcelHelpers.export(exports, "miSound", ()=>_kanasoundMiMp3Default.default
);
parcelHelpers.export(exports, "muSound", ()=>_kanasoundMuMp3Default.default
);
parcelHelpers.export(exports, "meSound", ()=>_kanasoundMeMp3Default.default
);
parcelHelpers.export(exports, "moSound", ()=>_kanasoundMoMp3Default.default
);
parcelHelpers.export(exports, "yaSound", ()=>_kanasoundYaMp3Default.default
);
parcelHelpers.export(exports, "yuSound", ()=>_kanasoundYuMp3Default.default
);
parcelHelpers.export(exports, "yoSound", ()=>_kanasoundYoMp3Default.default
);
parcelHelpers.export(exports, "raSound", ()=>_kanasoundRaMp3Default.default
);
parcelHelpers.export(exports, "riSound", ()=>_kanasoundRiMp3Default.default
);
parcelHelpers.export(exports, "ruSound", ()=>_kanasoundRuMp3Default.default
);
parcelHelpers.export(exports, "reSound", ()=>_kanasoundReMp3Default.default
);
parcelHelpers.export(exports, "roSound", ()=>_kanasoundRoMp3Default.default
);
parcelHelpers.export(exports, "waSound", ()=>_kanasoundWaMp3Default.default
);
parcelHelpers.export(exports, "woSound", ()=>_kanasoundWoMp3Default.default
);
parcelHelpers.export(exports, "nSound", ()=>_kanasoundNMp3Default.default
);
parcelHelpers.export(exports, "gaSound", ()=>_kanasoundGaMp3Default.default
);
parcelHelpers.export(exports, "giSound", ()=>_kanasoundGiMp3Default.default
);
parcelHelpers.export(exports, "guSound", ()=>_kanasoundGuMp3Default.default
);
parcelHelpers.export(exports, "geSound", ()=>_kanasoundGeMp3Default.default
);
parcelHelpers.export(exports, "goSound", ()=>_kanasoundGoMp3Default.default
);
parcelHelpers.export(exports, "zaSound", ()=>_kanasoundZaMp3Default.default
);
parcelHelpers.export(exports, "jiSound", ()=>_kanasoundJiMp3Default.default
);
parcelHelpers.export(exports, "zuSound", ()=>_kanasoundZuMp3Default.default
);
parcelHelpers.export(exports, "zeSound", ()=>_kanasoundZeMp3Default.default
);
parcelHelpers.export(exports, "zoSound", ()=>_kanasoundZoMp3Default.default
);
parcelHelpers.export(exports, "daSound", ()=>_kanasoundDaMp3Default.default
);
parcelHelpers.export(exports, "diSound", ()=>_kanasoundDiMp3Default.default
);
parcelHelpers.export(exports, "duSound", ()=>_kanasoundDuMp3Default.default
);
parcelHelpers.export(exports, "deSound", ()=>_kanasoundDeMp3Default.default
);
parcelHelpers.export(exports, "doSound", ()=>_kanasoundDoMp3Default.default
);
parcelHelpers.export(exports, "baSound", ()=>_kanasoundBaMp3Default.default
);
parcelHelpers.export(exports, "biSound", ()=>_kanasoundBiMp3Default.default
);
parcelHelpers.export(exports, "buSound", ()=>_kanasoundBuMp3Default.default
);
parcelHelpers.export(exports, "beSound", ()=>_kanasoundBeMp3Default.default
);
parcelHelpers.export(exports, "boSound", ()=>_kanasoundBoMp3Default.default
);
parcelHelpers.export(exports, "paSound", ()=>_kanasoundPaMp3Default.default
);
parcelHelpers.export(exports, "piSound", ()=>_kanasoundPiMp3Default.default
);
parcelHelpers.export(exports, "puSound", ()=>_kanasoundPuMp3Default.default
);
parcelHelpers.export(exports, "peSound", ()=>_kanasoundPeMp3Default.default
);
parcelHelpers.export(exports, "poSound", ()=>_kanasoundPoMp3Default.default
);
var _kanasoundAMp3 = require("url:../audio/kanasound-a.mp3");
var _kanasoundAMp3Default = parcelHelpers.interopDefault(_kanasoundAMp3);
var _kanasoundIMp3 = require("url:../audio/kanasound-i.mp3");
var _kanasoundIMp3Default = parcelHelpers.interopDefault(_kanasoundIMp3);
var _kanasoundUMp3 = require("url:../audio/kanasound-u.mp3");
var _kanasoundUMp3Default = parcelHelpers.interopDefault(_kanasoundUMp3);
var _kanasoundEMp3 = require("url:../audio/kanasound-e.mp3");
var _kanasoundEMp3Default = parcelHelpers.interopDefault(_kanasoundEMp3);
var _kanasoundOMp3 = require("url:../audio/kanasound-o.mp3");
var _kanasoundOMp3Default = parcelHelpers.interopDefault(_kanasoundOMp3);
var _kanasoundKaMp3 = require("url:../audio/kanasound-ka.mp3");
var _kanasoundKaMp3Default = parcelHelpers.interopDefault(_kanasoundKaMp3);
var _kanasoundKiMp3 = require("url:../audio/kanasound-ki.mp3");
var _kanasoundKiMp3Default = parcelHelpers.interopDefault(_kanasoundKiMp3);
var _kanasoundKuMp3 = require("url:../audio/kanasound-ku.mp3");
var _kanasoundKuMp3Default = parcelHelpers.interopDefault(_kanasoundKuMp3);
var _kanasoundKeMp3 = require("url:../audio/kanasound-ke.mp3");
var _kanasoundKeMp3Default = parcelHelpers.interopDefault(_kanasoundKeMp3);
var _kanasoundKoMp3 = require("url:../audio/kanasound-ko.mp3");
var _kanasoundKoMp3Default = parcelHelpers.interopDefault(_kanasoundKoMp3);
var _kanasoundSaMp3 = require("url:../audio/kanasound-sa.mp3");
var _kanasoundSaMp3Default = parcelHelpers.interopDefault(_kanasoundSaMp3);
var _kanasoundShiMp3 = require("url:../audio/kanasound-shi.mp3");
var _kanasoundShiMp3Default = parcelHelpers.interopDefault(_kanasoundShiMp3);
var _kanasoundSuMp3 = require("url:../audio/kanasound-su.mp3");
var _kanasoundSuMp3Default = parcelHelpers.interopDefault(_kanasoundSuMp3);
var _kanasoundSeMp3 = require("url:../audio/kanasound-se.mp3");
var _kanasoundSeMp3Default = parcelHelpers.interopDefault(_kanasoundSeMp3);
var _kanasoundSoMp3 = require("url:../audio/kanasound-so.mp3");
var _kanasoundSoMp3Default = parcelHelpers.interopDefault(_kanasoundSoMp3);
var _kanasoundTaMp3 = require("url:../audio/kanasound-ta.mp3");
var _kanasoundTaMp3Default = parcelHelpers.interopDefault(_kanasoundTaMp3);
var _kanasoundChiMp3 = require("url:../audio/kanasound-chi.mp3");
var _kanasoundChiMp3Default = parcelHelpers.interopDefault(_kanasoundChiMp3);
var _kanasoundTsuMp3 = require("url:../audio/kanasound-tsu.mp3");
var _kanasoundTsuMp3Default = parcelHelpers.interopDefault(_kanasoundTsuMp3);
var _kanasoundTeMp3 = require("url:../audio/kanasound-te.mp3");
var _kanasoundTeMp3Default = parcelHelpers.interopDefault(_kanasoundTeMp3);
var _kanasoundToMp3 = require("url:../audio/kanasound-to.mp3");
var _kanasoundToMp3Default = parcelHelpers.interopDefault(_kanasoundToMp3);
var _kanasoundNaMp3 = require("url:../audio/kanasound-na.mp3");
var _kanasoundNaMp3Default = parcelHelpers.interopDefault(_kanasoundNaMp3);
var _kanasoundNiMp3 = require("url:../audio/kanasound-ni.mp3");
var _kanasoundNiMp3Default = parcelHelpers.interopDefault(_kanasoundNiMp3);
var _kanasoundNuMp3 = require("url:../audio/kanasound-nu.mp3");
var _kanasoundNuMp3Default = parcelHelpers.interopDefault(_kanasoundNuMp3);
var _kanasoundNeMp3 = require("url:../audio/kanasound-ne.mp3");
var _kanasoundNeMp3Default = parcelHelpers.interopDefault(_kanasoundNeMp3);
var _kanasoundNoMp3 = require("url:../audio/kanasound-no.mp3");
var _kanasoundNoMp3Default = parcelHelpers.interopDefault(_kanasoundNoMp3);
var _kanasoundHaMp3 = require("url:../audio/kanasound-ha.mp3");
var _kanasoundHaMp3Default = parcelHelpers.interopDefault(_kanasoundHaMp3);
var _kanasoundHiMp3 = require("url:../audio/kanasound-hi.mp3");
var _kanasoundHiMp3Default = parcelHelpers.interopDefault(_kanasoundHiMp3);
var _kanasoundFuMp3 = require("url:../audio/kanasound-fu.mp3");
var _kanasoundFuMp3Default = parcelHelpers.interopDefault(_kanasoundFuMp3);
var _kanasoundHeMp3 = require("url:../audio/kanasound-he.mp3");
var _kanasoundHeMp3Default = parcelHelpers.interopDefault(_kanasoundHeMp3);
var _kanasoundHoMp3 = require("url:../audio/kanasound-ho.mp3");
var _kanasoundHoMp3Default = parcelHelpers.interopDefault(_kanasoundHoMp3);
var _kanasoundMaMp3 = require("url:../audio/kanasound-ma.mp3");
var _kanasoundMaMp3Default = parcelHelpers.interopDefault(_kanasoundMaMp3);
var _kanasoundMiMp3 = require("url:../audio/kanasound-mi.mp3");
var _kanasoundMiMp3Default = parcelHelpers.interopDefault(_kanasoundMiMp3);
var _kanasoundMuMp3 = require("url:../audio/kanasound-mu.mp3");
var _kanasoundMuMp3Default = parcelHelpers.interopDefault(_kanasoundMuMp3);
var _kanasoundMeMp3 = require("url:../audio/kanasound-me.mp3");
var _kanasoundMeMp3Default = parcelHelpers.interopDefault(_kanasoundMeMp3);
var _kanasoundMoMp3 = require("url:../audio/kanasound-mo.mp3");
var _kanasoundMoMp3Default = parcelHelpers.interopDefault(_kanasoundMoMp3);
var _kanasoundYaMp3 = require("url:../audio/kanasound-ya.mp3");
var _kanasoundYaMp3Default = parcelHelpers.interopDefault(_kanasoundYaMp3);
var _kanasoundYuMp3 = require("url:../audio/kanasound-yu.mp3");
var _kanasoundYuMp3Default = parcelHelpers.interopDefault(_kanasoundYuMp3);
var _kanasoundYoMp3 = require("url:../audio/kanasound-yo.mp3");
var _kanasoundYoMp3Default = parcelHelpers.interopDefault(_kanasoundYoMp3);
var _kanasoundRaMp3 = require("url:../audio/kanasound-ra.mp3");
var _kanasoundRaMp3Default = parcelHelpers.interopDefault(_kanasoundRaMp3);
var _kanasoundRiMp3 = require("url:../audio/kanasound-ri.mp3");
var _kanasoundRiMp3Default = parcelHelpers.interopDefault(_kanasoundRiMp3);
var _kanasoundRuMp3 = require("url:../audio/kanasound-ru.mp3");
var _kanasoundRuMp3Default = parcelHelpers.interopDefault(_kanasoundRuMp3);
var _kanasoundReMp3 = require("url:../audio/kanasound-re.mp3");
var _kanasoundReMp3Default = parcelHelpers.interopDefault(_kanasoundReMp3);
var _kanasoundRoMp3 = require("url:../audio/kanasound-ro.mp3");
var _kanasoundRoMp3Default = parcelHelpers.interopDefault(_kanasoundRoMp3);
var _kanasoundWaMp3 = require("url:../audio/kanasound-wa.mp3");
var _kanasoundWaMp3Default = parcelHelpers.interopDefault(_kanasoundWaMp3);
var _kanasoundWoMp3 = require("url:../audio/kanasound-wo.mp3");
var _kanasoundWoMp3Default = parcelHelpers.interopDefault(_kanasoundWoMp3);
var _kanasoundNMp3 = require("url:../audio/kanasound-n.mp3");
var _kanasoundNMp3Default = parcelHelpers.interopDefault(_kanasoundNMp3);
var _kanasoundGaMp3 = require("url:../audio/kanasound-ga.mp3");
var _kanasoundGaMp3Default = parcelHelpers.interopDefault(_kanasoundGaMp3);
var _kanasoundGiMp3 = require("url:../audio/kanasound-gi.mp3");
var _kanasoundGiMp3Default = parcelHelpers.interopDefault(_kanasoundGiMp3);
var _kanasoundGuMp3 = require("url:../audio/kanasound-gu.mp3");
var _kanasoundGuMp3Default = parcelHelpers.interopDefault(_kanasoundGuMp3);
var _kanasoundGeMp3 = require("url:../audio/kanasound-ge.mp3");
var _kanasoundGeMp3Default = parcelHelpers.interopDefault(_kanasoundGeMp3);
var _kanasoundGoMp3 = require("url:../audio/kanasound-go.mp3");
var _kanasoundGoMp3Default = parcelHelpers.interopDefault(_kanasoundGoMp3);
var _kanasoundZaMp3 = require("url:../audio/kanasound-za.mp3");
var _kanasoundZaMp3Default = parcelHelpers.interopDefault(_kanasoundZaMp3);
var _kanasoundJiMp3 = require("url:../audio/kanasound-ji.mp3");
var _kanasoundJiMp3Default = parcelHelpers.interopDefault(_kanasoundJiMp3);
var _kanasoundZuMp3 = require("url:../audio/kanasound-zu.mp3");
var _kanasoundZuMp3Default = parcelHelpers.interopDefault(_kanasoundZuMp3);
var _kanasoundZeMp3 = require("url:../audio/kanasound-ze.mp3");
var _kanasoundZeMp3Default = parcelHelpers.interopDefault(_kanasoundZeMp3);
var _kanasoundZoMp3 = require("url:../audio/kanasound-zo.mp3");
var _kanasoundZoMp3Default = parcelHelpers.interopDefault(_kanasoundZoMp3);
var _kanasoundDaMp3 = require("url:../audio/kanasound-da.mp3");
var _kanasoundDaMp3Default = parcelHelpers.interopDefault(_kanasoundDaMp3);
var _kanasoundDiMp3 = require("url:../audio/kanasound-di.mp3");
var _kanasoundDiMp3Default = parcelHelpers.interopDefault(_kanasoundDiMp3);
var _kanasoundDuMp3 = require("url:../audio/kanasound-du.mp3");
var _kanasoundDuMp3Default = parcelHelpers.interopDefault(_kanasoundDuMp3);
var _kanasoundDeMp3 = require("url:../audio/kanasound-de.mp3");
var _kanasoundDeMp3Default = parcelHelpers.interopDefault(_kanasoundDeMp3);
var _kanasoundDoMp3 = require("url:../audio/kanasound-do.mp3");
var _kanasoundDoMp3Default = parcelHelpers.interopDefault(_kanasoundDoMp3);
var _kanasoundBaMp3 = require("url:../audio/kanasound-ba.mp3");
var _kanasoundBaMp3Default = parcelHelpers.interopDefault(_kanasoundBaMp3);
var _kanasoundBiMp3 = require("url:../audio/kanasound-bi.mp3");
var _kanasoundBiMp3Default = parcelHelpers.interopDefault(_kanasoundBiMp3);
var _kanasoundBuMp3 = require("url:../audio/kanasound-bu.mp3");
var _kanasoundBuMp3Default = parcelHelpers.interopDefault(_kanasoundBuMp3);
var _kanasoundBeMp3 = require("url:../audio/kanasound-be.mp3");
var _kanasoundBeMp3Default = parcelHelpers.interopDefault(_kanasoundBeMp3);
var _kanasoundBoMp3 = require("url:../audio/kanasound-bo.mp3");
var _kanasoundBoMp3Default = parcelHelpers.interopDefault(_kanasoundBoMp3);
var _kanasoundPaMp3 = require("url:../audio/kanasound-pa.mp3");
var _kanasoundPaMp3Default = parcelHelpers.interopDefault(_kanasoundPaMp3);
var _kanasoundPiMp3 = require("url:../audio/kanasound-pi.mp3");
var _kanasoundPiMp3Default = parcelHelpers.interopDefault(_kanasoundPiMp3);
var _kanasoundPuMp3 = require("url:../audio/kanasound-pu.mp3");
var _kanasoundPuMp3Default = parcelHelpers.interopDefault(_kanasoundPuMp3);
var _kanasoundPeMp3 = require("url:../audio/kanasound-pe.mp3");
var _kanasoundPeMp3Default = parcelHelpers.interopDefault(_kanasoundPeMp3);
var _kanasoundPoMp3 = require("url:../audio/kanasound-po.mp3");
var _kanasoundPoMp3Default = parcelHelpers.interopDefault(_kanasoundPoMp3);

},{"url:../audio/kanasound-a.mp3":"5WFnv","url:../audio/kanasound-i.mp3":"iyzVB","url:../audio/kanasound-u.mp3":"i2Tql","url:../audio/kanasound-e.mp3":"ChAw2","url:../audio/kanasound-o.mp3":"dER9B","url:../audio/kanasound-ka.mp3":"lnqz9","url:../audio/kanasound-ki.mp3":"64Zic","url:../audio/kanasound-ku.mp3":"dbDYZ","url:../audio/kanasound-ke.mp3":"3HKWg","url:../audio/kanasound-ko.mp3":"6cizy","url:../audio/kanasound-sa.mp3":"esJMm","url:../audio/kanasound-shi.mp3":"7Uxv2","url:../audio/kanasound-su.mp3":"8nV5H","url:../audio/kanasound-se.mp3":"ed9dv","url:../audio/kanasound-so.mp3":"k1V6C","url:../audio/kanasound-ta.mp3":"boA4d","url:../audio/kanasound-chi.mp3":"5g4HM","url:../audio/kanasound-tsu.mp3":"iZjF7","url:../audio/kanasound-te.mp3":"bZyAD","url:../audio/kanasound-to.mp3":"eXLsv","url:../audio/kanasound-na.mp3":"70ZcY","url:../audio/kanasound-ni.mp3":"kDVCC","url:../audio/kanasound-nu.mp3":"apdDg","url:../audio/kanasound-ne.mp3":"l039P","url:../audio/kanasound-no.mp3":"kYjBU","url:../audio/kanasound-ha.mp3":"6LIzO","url:../audio/kanasound-hi.mp3":"2GLdK","url:../audio/kanasound-fu.mp3":"aWywV","url:../audio/kanasound-he.mp3":"jBZL5","url:../audio/kanasound-ho.mp3":"4NaQo","url:../audio/kanasound-ma.mp3":"03cnB","url:../audio/kanasound-mi.mp3":"g9jGp","url:../audio/kanasound-mu.mp3":"5nwTU","url:../audio/kanasound-me.mp3":"d8xu2","url:../audio/kanasound-mo.mp3":"8nNeA","url:../audio/kanasound-ya.mp3":"cz1Gx","url:../audio/kanasound-yu.mp3":"2by9h","url:../audio/kanasound-yo.mp3":"4W0rR","url:../audio/kanasound-ra.mp3":"evHK8","url:../audio/kanasound-ri.mp3":"d8AK9","url:../audio/kanasound-ru.mp3":"1CvNZ","url:../audio/kanasound-re.mp3":"2gs70","url:../audio/kanasound-ro.mp3":"41hcM","url:../audio/kanasound-wa.mp3":"lHcee","url:../audio/kanasound-wo.mp3":"f8xbr","url:../audio/kanasound-n.mp3":"vdQxf","url:../audio/kanasound-ga.mp3":"3bJ8N","url:../audio/kanasound-gi.mp3":"6qKbv","url:../audio/kanasound-gu.mp3":"a1Pyi","url:../audio/kanasound-ge.mp3":"3tSTb","url:../audio/kanasound-go.mp3":"kEW9h","url:../audio/kanasound-za.mp3":"3ulkU","url:../audio/kanasound-ji.mp3":"eAp6S","url:../audio/kanasound-zu.mp3":"lGMD4","url:../audio/kanasound-ze.mp3":"5PHHG","url:../audio/kanasound-zo.mp3":"itcpL","url:../audio/kanasound-da.mp3":"1z7gq","url:../audio/kanasound-di.mp3":"a05ze","url:../audio/kanasound-du.mp3":"3Lcd0","url:../audio/kanasound-de.mp3":"bPAxV","url:../audio/kanasound-do.mp3":"66bc5","url:../audio/kanasound-ba.mp3":"iOnsc","url:../audio/kanasound-bi.mp3":"341LR","url:../audio/kanasound-bu.mp3":"01bW2","url:../audio/kanasound-be.mp3":"jtpk5","url:../audio/kanasound-bo.mp3":"1FSNB","url:../audio/kanasound-pa.mp3":"6JQXC","url:../audio/kanasound-pi.mp3":"8EuqG","url:../audio/kanasound-pu.mp3":"lcMQX","url:../audio/kanasound-pe.mp3":"im4W3","url:../audio/kanasound-po.mp3":"lFYZC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5WFnv":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-a.70b6b980.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"iyzVB":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-i.55ed6944.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"i2Tql":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-u.b9727c0e.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"ChAw2":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-e.fcb0dba2.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dER9B":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-o.8c56224a.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lnqz9":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-ka.4e1eeb77.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"64Zic":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-ki.7a92cf60.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dbDYZ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-ku.b82351b5.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3HKWg":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-ke.d059429b.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6cizy":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-ko.f4af0020.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"esJMm":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-sa.54e461f6.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7Uxv2":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-shi.2b1fa693.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"8nV5H":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-su.1b5f9bf4.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"ed9dv":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-se.9e8ef335.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"k1V6C":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-so.96e15b89.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"boA4d":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-ta.266e7c28.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5g4HM":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-chi.8e8486fa.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"iZjF7":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-tsu.b03db160.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bZyAD":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-te.65355f2e.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"eXLsv":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-to.bfc58e73.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"70ZcY":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-na.b82571cb.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"kDVCC":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-ni.f0b27b52.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"apdDg":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-nu.8dbcc665.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"l039P":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-ne.07549422.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"kYjBU":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-no.6e3ef556.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6LIzO":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-ha.abc8f61d.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2GLdK":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-hi.66e62b35.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"aWywV":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-fu.8639c584.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"jBZL5":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-he.ff54599a.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4NaQo":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-ho.4b243bd2.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"03cnB":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-ma.deb6e226.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"g9jGp":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-mi.c83dae63.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5nwTU":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-mu.5961679c.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"d8xu2":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-me.ecbc87c5.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"8nNeA":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-mo.8adc4875.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"cz1Gx":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-ya.dff9043b.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2by9h":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-yu.91931846.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4W0rR":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-yo.edb38d70.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"evHK8":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-ra.8e37a8d7.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"d8AK9":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-ri.9c4e5a2b.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"1CvNZ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-ru.9418f67e.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2gs70":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-re.563522f6.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"41hcM":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-ro.cc7664a4.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lHcee":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-wa.647a1ad2.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"f8xbr":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-wo.f97fdf58.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"vdQxf":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-n.0364e3ec.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3bJ8N":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-ga.0cd3f160.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6qKbv":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-gi.c31ee087.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"a1Pyi":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-gu.51ead897.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3tSTb":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-ge.821d326a.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"kEW9h":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-go.3f2081f4.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3ulkU":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-za.0fbcc0d2.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"eAp6S":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-ji.89766e77.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lGMD4":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-zu.e5523e90.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5PHHG":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-ze.4846516d.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"itcpL":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-zo.0546bfd7.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"1z7gq":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-da.819f8bb5.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"a05ze":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-di.7ccc2570.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3Lcd0":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-du.37343b03.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bPAxV":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-de.92663d9c.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"66bc5":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-do.3a20a6c9.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"iOnsc":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-ba.20bba916.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"341LR":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-bi.fb9463f0.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"01bW2":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-bu.ae3b219b.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"jtpk5":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-be.c4138e60.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"1FSNB":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-bo.ac0d367e.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6JQXC":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-pa.ca7273f8.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"8EuqG":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-pi.15de2327.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lcMQX":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-pu.49a57fe1.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"im4W3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-pe.5b407f7a.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lFYZC":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "kanasound-po.c57209d6.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"82Kie":[function(require,module,exports) {
const nav = document.getElementById('nav');
const h1 = document.querySelector('h1');
const options = {
    root: null,
    threshold: 1
};
const callback = function(entries, observer) {
    entries.forEach((entry)=>{
        console.log(entry);
        if (!entry.isIntersecting) nav.classList.add('sticky', 'top-0', 'z-30', 'bg-slate-50/90', 'dark:bg-slate-900/90');
        nav.classList.remove('bg-slate-50', 'dark:bg-slate-900');
        if (entry.isIntersecting) nav.classList.remove('sticky', 'top-0', 'z-30', 'bg-slate-50/90', 'dark:bg-slate-900/90');
        nav.classList.add('bg-slate-50', 'dark:bg-slate-900');
    });
};
const observer = new IntersectionObserver(callback, options);
observer.observe(h1);

},{}],"h1NOz":[function(require,module,exports) {
const yearText = document.getElementById('year');
const now = new Date();
const year = now.getFullYear();
const setCurrentYear = function() {
    yearText.textContent = year;
};
setCurrentYear();

},{}]},["9GjUt","aenu9"], "aenu9", "parcelRequirec3d2")

//# sourceMappingURL=index.e37f48ea.js.map
