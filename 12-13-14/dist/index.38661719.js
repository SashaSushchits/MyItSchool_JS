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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
})({"5UGAA":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "31648ca538661719";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
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
            it = o[Symbol.iterator]();
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
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
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
        checkedAssets = {
        };
        acceptedAssets = {
        };
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
            } else window.location.reload();
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
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
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
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
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

},{}],"7BQdY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _app = require("./components/App");
var _appDefault = parcelHelpers.interopDefault(_app);

},{"./components/App":"lf6N3","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lf6N3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CONTAINER", ()=>CONTAINER
);
var _utils = require("./../utils");
var _cart = require("./Cart");
var _main = require("./Main");
var _nav = require("./Nav");
var _productsJs = require("./Products.js");
class App {
    constructor(){
        this.menu = [
            {
                name: 'Main',
                element: _utils.$('li'),
                action: _main.main.init
            },
            {
                name: 'Products',
                element: _utils.$('li'),
                action: ()=>_productsJs.products(this.data)
            },
            {
                name: 'Cart',
                element: _utils.$('li'),
                action: ()=>_cart.cartPage.create(this.data)
            }, 
        ], this.container = _utils.$('main');
        this.container.classList.add('main');
        this.data = {
            products: [],
            // cartList: JSON.parse(localStorage.getItem('cart')) || [],
            cartList: _utils.getCookie('cart') || []
        };
    }
    create() {
        const mainDiv = _utils.$("div");
        mainDiv.classList.add('app');
        this.element = mainDiv;
    }
    render() {
        document.body.appendChild(this.element);
    }
    initHeader() {
        const metaCharset = _utils.$('meta');
        metaCharset.setAttribute('charset', "UTF-8");
        document.head.appendChild(metaCharset);
        const metaHttp = _utils.$('meta');
        metaHttp.setAttribute('http-equiv', "X-UA-Compatible");
        metaHttp.setAttribute('content', "IE=edge");
        document.head.appendChild(metaHttp);
        const metaName = _utils.$('meta');
        metaName.setAttribute('name', "viewport");
        metaName.setAttribute('content', "width=device-width, initial-scale=1.0");
        document.head.appendChild(metaName);
        const tegLink = _utils.$('link');
        tegLink.setAttribute('rel', "stylesheet");
        tegLink.setAttribute('href', "./style.css");
        document.head.appendChild(tegLink);
        const title = _utils.$('title');
        title.innerText = 'Shop';
        document.head.appendChild(title);
    }
    init() {
        this.create();
        this.render();
        this.initHeader();
        _nav.nav.create(this.menu);
        document.body.appendChild(this.container);
        _main.main.init();
        if (location.hash) _utils.checkHash(this.data);
        else _main.main.init;
    }
}
const app = new App();
const CONTAINER = app.container;
app.init();
const dataHash = app.data;
window.addEventListener('hashchange', ()=>_utils.checkHash(dataHash)
) // export default new App().init();
 // const app = new App();
 // export {app}
;

},{"./../utils":"5m6Az","./Main":"k50zC","./Nav":"9wZ2g","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./Products.js":"Qm8g1","./Cart":"iEdNc"}],"5m6Az":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$", ()=>$
);
parcelHelpers.export(exports, "openModal", ()=>openModal
);
parcelHelpers.export(exports, "closeModal", ()=>closeModal
);
parcelHelpers.export(exports, "checkHash", ()=>checkHash
);
// window.addEventListener('hashchange', () => checkHash(dataHash))
parcelHelpers.export(exports, "setCookie", ()=>setCookie
);
parcelHelpers.export(exports, "getCookie", ()=>getCookie
);
parcelHelpers.export(exports, "getTotalPrice", ()=>getTotalPrice
);
var _cart = require("./components/Cart");
var _main = require("./components/Main");
var _products = require("./components/Products");
const $ = (tag)=>{
    return document.createElement(tag);
};
function openModal(htmlElement) {
    document.body.insertAdjacentHTML('beforeend', `
    <div class="modal-wrapper">
        <div class="modal-box">
            <span class="close">x</span>
            
        </div>
    </div>
    `);
    const modalBox = document.querySelector('.modal-box');
    modalBox.appendChild(htmlElement);
    const close = document.querySelector('.close');
    close.addEventListener('click', closeModal);
}
function closeModal() {
    const modalWindow = document.querySelector('.modal-wrapper');
    modalWindow.remove();
    location.hash = `#products`;
}
const checkHash = (data)=>{
    const hash = location.hash;
    console.log(hash);
    if (hash === '#cart') _cart.cartPage.create(data);
    else {
        if (hash === '#main') _main.main.create();
        else if (hash.includes('#products')) _products.products(data);
    }
};
function setCookie(cname, cvalue, exdays = 10) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 86400000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + JSON.stringify(cvalue) + ";" + expires + ";path=/";
}
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        while(c.charAt(0) == ' ')c = c.substring(1);
        if (c.indexOf(name) == 0) {
            const value = c.substring(name.length, c.length);
            return JSON.parse(value);
        }
    }
    return "";
}
function getTotalPrice(products) {
    const cart = getCookie('cart');
    let total = 0;
    cart.map((item)=>{
        const currentProduct = products.find((product)=>product.id === item.id
        );
        total += currentProduct.price * item.count;
    });
    return total.toFixed(2);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./components/Cart":"iEdNc","./components/Products":"Qm8g1","./components/Main":"k50zC"}],"ciiiV":[function(require,module,exports) {
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

},{}],"iEdNc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cartPage", ()=>cartPage
);
var _utils = require("../utils");
var _app = require("./App");
class Cart {
    constructor(){
    }
    create(data) {
        _app.CONTAINER.innerHTML = '';
        _app.CONTAINER.insertAdjacentHTML('afterbegin', `
            <h1 class='cart'> Корзина: </h1>
        `);
        const totalPrice = _utils.$('strong');
        const products = JSON.parse(localStorage.getItem('products'));
        const cartList = _utils.getCookie('cart');
        console.log(data.cartList);
        if (data.cartList.length === 0) {
            const title = _utils.$('h1');
            title.innerText = 'Ваша корзина пуста';
            _app.CONTAINER.appendChild(title);
        } else cartList.map((cartItem)=>{
            const currentProduct = products.find((item)=>item.id === cartItem.id
            );
            console.log(currentProduct);
            const cartContainer = _utils.$('div');
            cartContainer.classList.add('cart-container');
            const title = _utils.$('h2');
            title.innerHTML = currentProduct.title;
            const img = new Image(100);
            img.src = currentProduct.image;
            const price = _utils.$('strong');
            price.innerText = (cartItem.count * currentProduct.price).toFixed(2);
            const counterBlock = _utils.$('div');
            counterBlock.classList.add('counter-block');
            const countMinus = _utils.$('span');
            countMinus.innerText = '—';
            const countPlus = _utils.$('span');
            countPlus.innerText = '+';
            const countText = _utils.$('strong');
            countText.innerText = cartItem.count;
            countMinus.addEventListener('click', ()=>{
                if (cartItem.count > 1) {
                    cartItem.count--;
                    countText.innerText = cartItem.count;
                    price.innerText = (cartItem.count * currentProduct.price).toFixed(2);
                    _utils.setCookie('cart', cartList);
                    totalPrice.innerText = _utils.getTotalPrice(products);
                }
            });
            countPlus.addEventListener('click', ()=>{
                cartItem.count++;
                countText.innerText = cartItem.count;
                price.innerText = (cartItem.count * currentProduct.price).toFixed(2);
                // localStorage.setItem('cart', JSON.stringify(cartList))
                _utils.setCookie('cart', cartList);
                totalPrice.innerText = _utils.getTotalPrice(products);
            });
            counterBlock.appendChild(countMinus);
            counterBlock.appendChild(countText);
            counterBlock.appendChild(countPlus);
            cartContainer.appendChild(img);
            cartContainer.appendChild(title);
            cartContainer.appendChild(counterBlock);
            cartContainer.appendChild(price);
            _app.CONTAINER.appendChild(cartContainer);
            const btnRemove = _utils.$('button');
            btnRemove.innerText = 'Удалить данный товар';
            btnRemove.addEventListener('click', ()=>{
                const filteredCartList = cartList.filter((item)=>item.id !== cartItem.id
                );
                // localStorage.setItem('cart', JSON.stringify(filteredCartList));
                _utils.setCookie('cart', filteredCartList);
                this.create(data);
            });
            cartContainer.appendChild(btnRemove);
        });
        totalPrice.innerText = _utils.getTotalPrice(products);
        document.querySelector('.cart').appendChild(totalPrice);
    }
    init() {
    }
}
const cartPage = new Cart();

},{"../utils":"5m6Az","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./App":"lf6N3"}],"Qm8g1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "products", ()=>products1
);
var _utils = require("./../utils");
var _app = require("./App");
// class Products {
//     constructor() {
//     }
//     create() {
//         const productCard = (data) => {
//             let counter = 1;
//             const block = $('section');
//             block.classList.add('block')
//             const descBlock = $('div')
//             const imgWrapper = $('div');
//             imgWrapper.classList.add('modal-image-block');
//             const img = new Image(150);
//             img.src = data.image;
//             imgWrapper.appendChild(img);
//             const title = $('h2');
//             title.innerText = data.title;
//             const desc = $('p');
//             desc.innerText = data.description;
//             const counterBlock = $('div');
//             counterBlock.classList.add('counter-block');
//             const countMinus = $('span');
//             countMinus.innerText = '—';
//             const countPlus = $('span');
//             countPlus.innerText = '+';
//             const countText = $('strong');
//             countText.innerText = counter;
//             countMinus.addEventListener('click', () => {
//                 if (counter > 1) {
//                     counter--;
//                     countText.innerText = counter;
//                 }
//             });
//             countPlus.addEventListener('click', () => {counter++; countText.innerText = counter;})
//             counterBlock.appendChild(countMinus);
//             counterBlock.appendChild(countText);
//             counterBlock.appendChild(countPlus);
//             const btnAdd = $('button');
//             btnAdd.innerText = 'Add to cart'
//             btnAdd.addEventListener('click', () => {
//                 const cartList = JSON.parse(localStorage.getItem('cart')) || [];
//                 if(cartList?.find(item => item.id === data.id)) {
//                     alert('This product in the cart already')
//                 } else {
//                     cartList.push({
//                         id: data.id,
//                         count: counter
//                     })
//                     localStorage.setItem('cart', JSON.stringify(cartList))
//                 }
//             })
//             block.appendChild(title);
//             block.appendChild(imgWrapper);
//             block.appendChild(descBlock);
//             block.appendChild(counterBlock);
//             block.appendChild(btnAdd);
//             return block;
//         }
//         const products = async (data) => {
//             CONTAINER.innerHTML = '';
//             CONTAINER.insertAdjacentHTML('afterbegin', `
//                 <h1> Наши товары </h1>
//             `)
//             const cardsContainer = $('div');
//             cardsContainer.classList.add('cards-wrapper');
//             let products;
//             if(localStorage.getItem('products')) {
//                 products = JSON.parse(localStorage.getItem('products'));
//             } else {
//                 const response = await fetch('https://fakestoreapi.com/products');
//                 products = await response.json();
//                 localStorage.setItem('products', JSON.stringify(products));
//             }
//             await products.map((item) => {
//                 const cardItem = $('div');
//                 cardItem.classList.add('card')
//                 const imgItem = new Image(300);
//                 imgItem.src = item.image;
//                 const title = $('h3');
//                 title.innerText = item.title;
//                 const price = $('strong');
//                 price.innerText = item.price;
//                 cardItem.appendChild(imgItem);
//                 cardItem.appendChild(title);
//                 cardItem.appendChild(price);
//                 // const modalCardItem = productCard(item, data.cartList);
//                 cardItem.addEventListener('click', () => {
//                     location.hash = `#products/${item.id}`
//                 });
//                 cardsContainer.appendChild(cardItem);
//             })
//             CONTAINER.appendChild(cardsContainer);
//             if(location.hash !== '#products' && location.hash !== '#main') {
//                 const productId = location.hash.replace('#products/', '');
//                 const product = products.find((item) => item.id == productId);
//                 console.log(product);
//                 if(product) {
//                     const productHtml = productCard(product, data.cartList)
//                     openModal(productHtml)
//                 } else {
//                     alert('Sorry, we can`t find this product')
//                 }
//             }
//         }
//     }
//     init() {
//         this.create()
//         // return this.element
//     }
// }
// const products = new Products();
// export {products};
const productCard = (data)=>{
    let counter = 1;
    const block = _utils.$('section');
    block.classList.add('block');
    const descBlock = _utils.$('div');
    const imgWrapper = _utils.$('div');
    imgWrapper.classList.add('modal-image-block');
    const img = new Image(150);
    img.src = data.image;
    imgWrapper.appendChild(img);
    const title = _utils.$('h2');
    title.innerText = data.title;
    const desc = _utils.$('p');
    desc.innerText = data.description;
    const counterBlock = _utils.$('div');
    counterBlock.classList.add('counter-block');
    const countMinus = _utils.$('span');
    countMinus.innerText = '—';
    const countPlus = _utils.$('span');
    countPlus.innerText = '+';
    const countText = _utils.$('strong');
    countText.innerText = counter;
    countMinus.addEventListener('click', ()=>{
        if (counter > 1) {
            counter--;
            countText.innerText = counter;
        }
    });
    countPlus.addEventListener('click', ()=>{
        counter++;
        countText.innerText = counter;
    });
    counterBlock.appendChild(countMinus);
    counterBlock.appendChild(countText);
    counterBlock.appendChild(countPlus);
    const btnAdd = _utils.$('button');
    btnAdd.innerText = 'Добавить в корзину';
    btnAdd.addEventListener('click', ()=>{
        // const cartList = JSON.parse(localStorage.getItem('cart')) || [];
        const cartList = _utils.getCookie('cart') || [];
        if (cartList?.find((item)=>item.id === data.id
        )) alert('Этот продукт уже добавлен в корзину');
        else {
            cartList.push({
                id: data.id,
                count: counter
            });
            // localStorage.setItem('cart', JSON.stringify(cartList))
            _utils.setCookie('cart', cartList);
        }
        _utils.closeModal();
    });
    block.appendChild(title);
    block.appendChild(imgWrapper);
    block.appendChild(descBlock);
    block.appendChild(counterBlock);
    block.appendChild(btnAdd);
    return block;
};
const products1 = async (data)=>{
    _app.CONTAINER.innerHTML = '';
    _app.CONTAINER.insertAdjacentHTML('afterbegin', `
        <h1> Наши товары </h1>
    `);
    const cardsContainer = _utils.$('div');
    cardsContainer.classList.add('cards-wrapper');
    let products;
    if (localStorage.getItem('products')) products = JSON.parse(localStorage.getItem('products'));
    else {
        const response = await fetch('https://fakestoreapi.com/products');
        products = await response.json();
        localStorage.setItem('products', JSON.stringify(products));
    }
    await products.map((item)=>{
        const cardItem = _utils.$('div');
        cardItem.classList.add('card');
        const imgItem = new Image(300);
        imgItem.src = item.image;
        const title = _utils.$('h3');
        title.innerText = item.title;
        const price = _utils.$('strong');
        price.innerText = item.price;
        cardItem.appendChild(imgItem);
        cardItem.appendChild(title);
        cardItem.appendChild(price);
        // const modalCardItem = productCard(item, data.cartList);
        cardItem.addEventListener('click', ()=>{
            location.hash = `#products/${item.id}`;
        });
        cardsContainer.appendChild(cardItem);
    });
    _app.CONTAINER.appendChild(cardsContainer);
    if (location.hash !== '#products' && location.hash !== '#main') {
        const productId = location.hash.replace('#products/', '');
        const product = products.find((item)=>item.id == productId
        );
        console.log(product);
        if (product) {
            const productHtml = productCard(product, data.cartList);
            _utils.openModal(productHtml);
        } else alert('Извините, но что-то пошло не так');
    }
};

},{"./../utils":"5m6Az","./App":"lf6N3","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"k50zC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "main", ()=>main
);
var _utils = require("./../utils");
var _app = require("./App");
var _products = require("./Products");
var _footer = require("./Footer");
class Main {
    constructor(){
    }
    create() {
        _app.CONTAINER.innerHTML = '';
        _app.CONTAINER.insertAdjacentHTML('afterbegin', `
        <h1> Главная страница </h1>
        `);
        const btnLink = document.querySelector('.main');
        const link = _utils.$('button');
        link.classList.add('btnLink');
        link.innerText = 'Скорее переходи к товарам, просто нажми здесь';
        link.addEventListener('click', _products.products);
        btnLink.appendChild(link);
        this.element = btnLink;
    }
    init() {
        this.create();
        _footer.footer.create();
    // return this.element
    }
}
const main = new Main();

},{"./../utils":"5m6Az","./App":"lf6N3","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./Products":"Qm8g1","./Footer":"fU3yX"}],"fU3yX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "footer", ()=>footer
);
var _utils = require("./../utils");
var _app = require("./App");
class Footer {
    constructor(){
    }
    create() {
        _app.CONTAINER.innerHTML = '';
        _app.CONTAINER.insertAdjacentHTML('afterend', `
        <div class='footer'></div>
        `);
        const footer = document.querySelector('.footer');
        const listLink_1 = _utils.$('a');
        listLink_1.classList.add('footer-1');
        listLink_1.setAttribute('href', "#");
        listLink_1.innerText = "+375 (29) 123-45-77";
        const listLink_2 = _utils.$('a');
        listLink_2.classList.add('footer-2');
        listLink_2.setAttribute('href', "#");
        listLink_2.innerText = "+375 (29) 123-45-66";
        const listLink_3 = _utils.$('a');
        listLink_3.classList.add('footer-3');
        listLink_3.setAttribute('href', "#");
        listLink_3.innerText = "info@shop.ru";
        const listLink_4 = _utils.$('a');
        listLink_4.classList.add('footer-4');
        listLink_4.setAttribute('href', "#");
        listLink_4.innerText = "г. Минск";
        const input_1 = _utils.$('input');
        input_1.classList.add('footer-5');
        input_1.setAttribute('type', "text");
        input_1.setAttribute('placeholder', "Имя");
        const input_2 = _utils.$('input');
        input_2.classList.add('footer-6');
        input_2.setAttribute('type', "text");
        input_2.setAttribute('placeholder', "Фамилия");
        const input_3 = _utils.$('input');
        input_3.classList.add('footer-7');
        input_3.setAttribute('type', "text");
        input_3.setAttribute('placeholder', "Телефон");
        const input_4 = _utils.$('input');
        input_4.classList.add('footer-8');
        input_4.setAttribute('type', "text");
        input_4.setAttribute('placeholder', "E-mail");
        const textarea = _utils.$('textarea');
        textarea.classList.add('footer-9');
        textarea.setAttribute('cols', "60");
        textarea.setAttribute('rows', "5");
        textarea.setAttribute('placeholder', "Сообщение");
        const button = _utils.$('button');
        button.classList.add('footer-11');
        button.classList.add('send');
        button.innerText = "Отправить";
        footer.appendChild(listLink_1);
        footer.appendChild(listLink_2);
        footer.appendChild(listLink_3);
        footer.appendChild(listLink_4);
        footer.appendChild(input_1);
        footer.appendChild(input_2);
        footer.appendChild(input_3);
        footer.appendChild(input_4);
        footer.appendChild(textarea);
        footer.appendChild(button);
    }
    init() {
    }
}
const footer = new Footer();

},{"./../utils":"5m6Az","./App":"lf6N3","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9wZ2g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nav", ()=>nav
);
var _utils = require("./../utils");
class Nav {
    constructor(){
    }
    create(menu) {
        const menuDom = _utils.$("menu");
        const navigationMenu = document.querySelector('.app');
        navigationMenu.appendChild(menuDom);
        menu.map((item)=>{
            item.element.addEventListener('click', ()=>{
                location.hash = '#' + item.name.toLowerCase();
            }); //menu.element
            item.element.innerText = item.name;
            menuDom.appendChild(item.element);
        });
        this.element = menuDom;
    }
    init() {
    // this.create();
    // return this.element
    }
}
const nav = new Nav();

},{"./../utils":"5m6Az","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["5UGAA","7BQdY"], "7BQdY", "parcelRequire8cd9")

//# sourceMappingURL=index.38661719.js.map
