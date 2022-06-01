"use strict";
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 1742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ AppProvider),
/* harmony export */   "b": () => (/* binding */ useAppContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const AppContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
function AppProvider({
  children
}) {
  let sharedState = {
    pageRef: null,
    pageControlRef: null
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(AppContext.Provider, {
    value: sharedState,
    children: children
  });
}
function useAppContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AppContext);
}

/***/ }),

/***/ 7791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ service_GlobalStyle),
  "F": () => (/* reexport */ AppHead)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/service/Head/index.tsx

 // import { useData } from '../context/DataContext'



function AppHead({
  title = 'ATE'
}) {
  // const { metatitle, metadesc } = useData()
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "description",
      content: "meta description"
    })]
  });
}
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./src/components/service/GlobalStyle/modernNormalize.tsx

/* harmony default export */ const modernNormalize = ((0,external_styled_components_.css)(["/*! modern-normalize v0.5.0 | MIT License | https://github.com/sindresorhus/modern-normalize */ html{box-sizing:border-box;}*,*::before,*::after{box-sizing:inherit;}:root{-moz-tab-size:4;tab-size:4;}html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';}hr{height:0;}abbr[title]{text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp,pre{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,select{text-transform:none;}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;}button::-moz-focus-inner,[type='button']::-moz-focus-inner,[type='reset']::-moz-focus-inner,[type='submit']::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type='button']:-moz-focusring,[type='reset']:-moz-focusring,[type='submit']:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{padding:0;}progress{vertical-align:baseline;}[type='number']::-webkit-inner-spin-button,[type='number']::-webkit-outer-spin-button{height:auto;}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}[type='search']::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item;}"]));
;// CONCATENATED MODULE: ./src/components/service/GlobalStyle/myReset.tsx

/* harmony default export */ const myReset = ((0,external_styled_components_.css)(["body,h1,h2,h3,h4,h5,h6,ul,ol,li,p,pre,blockquote,figure,hr{margin:0;padding:0;}ul{list-style:none;}input,textarea,select,button{color:inherit;font:inherit;letter-spacing:inherit;}input[type='text'],textarea{width:100%;}input,textarea,button{border:1px solid gray;}button{padding:0.75em 1em;border-radius:0;line-height:1;background-color:transparent;}button *{pointer-events:none;}img,svg,iframe,video,object,embed{display:block;max-width:100%;}table{table-layout:fixed;width:100%;}[hidden]{display:none !important;}noscript{display:block;margin-bottom:1em;margin-top:1em;}[tabindex='-1']{outline:none !important;}main{display:block;}hr{box-sizing:content-box;overflow:visible;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;}img{border-style:none;}button,input{overflow:visible;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;white-space:normal;}[type='checkbox'],[type='radio']{box-sizing:border-box;padding:0;}details{display:block;}template{display:none;}[hidden]{display:none;}"]));
// EXTERNAL MODULE: ./src/theme/index.ts + 2 modules
var theme = __webpack_require__(101);
;// CONCATENATED MODULE: ./src/components/service/GlobalStyle/base.tsx


/* harmony default export */ const base = ((0,external_styled_components_.css)(["html,body,#__next{height:100%;}body{color:", ";font-family:", ";background-color:white;min-width:320px;}"], theme/* default.colors.body */.Z.colors.body, theme/* default.fonts.body */.Z.fonts.body));
;// CONCATENATED MODULE: ./src/components/service/GlobalStyle/typography.tsx

/* harmony default export */ const typography = ((0,external_styled_components_.css)([""]));
;// CONCATENATED MODULE: ./src/components/service/GlobalStyle/index.tsx





const GlobalStyle = (0,external_styled_components_.createGlobalStyle)(["", " ", " ", " ", ""], modernNormalize, myReset, base, typography);
/* harmony default export */ const service_GlobalStyle = (GlobalStyle);
;// CONCATENATED MODULE: ./src/components/service/index.ts



/***/ }),

/***/ 101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ theme)
});

// UNUSED EXPORTS: em, rem

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./src/utils/breakpoint.ts
// https://github.com/nicolas-cusan/breakpoint-helper
let breakpoints = {};
/**
 * @param {Object|String} config - Object containing the breakpoints, `'meta'` or `'custom'`.
 *
 * @returns {Object<function>} Object containing the instance's methods.
 */

function bph(config = {}) {
  if (typeof config === 'string' && config === 'meta') {
    breakpoints = _getBpsFromMeta();
  } else if (typeof config === 'string' && config === 'custom') {
    breakpoints = _getBpsFromCustomProps();
  } else {
    breakpoints = config;
  }

  if (Object.keys(breakpoints).length === 0) {
    throw new Error(`No breakpoints defined`);
  }

  return {
    getBreakpoints,
    getMediaQuery,
    isMatching,
    listen,
    listenAll,
    isScreenOf,
    getCurrentMediaQueryName
  };
}
/**
 * Generate a `meta` element with class `breakpoint-helper` and deserialize the css `font-family` value to retrieve the breakpoints.
 *
 * @private
 * @returns {Object} Breakpoint object.
 */


function _getBpsFromMeta() {
  const el = document.createElement('meta');
  el.classList.add('breakpoint-helper');
  document.getElementsByTagName('head')[0].appendChild(el);
  let fontFamily = window.getComputedStyle(el).getPropertyValue('font-family');
  if (fontFamily.length <= 0) return {};
  fontFamily = fontFamily.replace(/'|"/g, '').split('&');
  return fontFamily.reduce((obj, elem) => {
    const [name, value] = elem.split('=');
    obj[name] = value;
    return obj;
  }, {});
}
/**
 * Retrieve breakpoints by reading css custom properties on the `:root` selector, of all loaded stylesheets, starting with `--bph-`.
 *
 * @private
 * @returns {Object} Breakpoint object.
 */


function _getBpsFromCustomProps() {
  const sheets = [...document.styleSheets].filter(sheet => sheet.href.indexOf(window.location.origin) !== -1);
  const rules = [...sheets].reduce((acc, sheet) => {
    [...sheet.cssRules].forEach(rule => {
      if (rule.selectorText === ':root') {
        const css = rule.cssText.split('{')[1].replace('}', '').split(';');
        css.forEach(dec => {
          const [prop, val] = dec.split(':');

          if (prop.indexOf('--bph-') !== -1) {
            acc[prop.replace('--bph-', '').trim()] = val.trim();
          }
        });
      }
    });
    return acc;
  }, {});
  return rules;
}
/**
 * Check if the breakpoints in `keys` are matching
 *
 * @private
 * @param {Array} keys - Array of breakpoint names.
 * @param {boolean} [useMax=false] - Use `max-width` instead of `min-width`.
 *
 * @returns {Array<string>} Array containing matching breakpoint names in reverse order.
 */


function _matchAll(keys, useMax = false) {
  const matches = [];
  keys.forEach(bp => {
    if (isMatching(bp, useMax)) {
      matches.push(bp);
    }
  });
  return useMax ? matches : matches.reverse();
}
/**
 * Get all breakpoints as an object. Useful for debugging or passing breakpoint values to other libraries.
 *
 * @returns {Object} Object containing all instance breakpoints.
 */


function getBreakpoints() {
  return breakpoints;
}
/**
 * Get a `min-width`, `max-width` or `min-width and max-width` media query by breakpoint name.
 *
 * @param {string|Array} name - Breakpoint name or array of two breakpoint names.
 * @param {boolean} [useMax=false] - Use `max-width` instead of `min-width`.
 *
 * @returns {string} Media query string.
 */


function getMediaQuery(name, useMax = false) {
  if (Array.isArray(name)) {
    const [min, max] = name;
    return `${getMediaQuery(min)} and ${getMediaQuery(max, true)}`;
  }

  const min = breakpoints[name];

  if (typeof min === 'undefined') {
    throw new Error(`"${name}" does not seem to be a breakpoint name`);
  }

  if (useMax) {
    const number = parseFloat(min, 10);
    const unit = min.toString().replace(number, '');
    const substract = unit === 'em' ? 0.0635 : 1;
    return `(max-width: ${number - substract}${unit}px)`;
  }

  return `(min-width: ${min}px)`;
}
/**
 * Check if a breakpoint or breakpoint range is currently matching.
 *
 * @param {string} name - Breakpoint name or array of two breakpoint names.
 * @param {boolean} [useMax=false] - Use `max-width` instead of `min-width`.
 *
 * @returns {boolean} Whether the breakpoint or breakpoint range is matching or not.
 */


function isMatching(name, useMax = false) {
  return window.matchMedia(getMediaQuery(name, useMax)).matches;
}
/**
 * Listen to a breakpoint or breakpoint range change and execute a callback function. The callback function will receive a `MediaQueryList` object as parameter that can be used to check wether the breakpoint media query is matching or not. The callback function is called once on listener creation, it is possible to opt out of this behavior via options.
 *
 * @param {Object|String} options - Configuration Object, breakpoint name or array of two breakpoint names.
 * @param {string} options.name - Breakpoint name or array of two breakpoint names.
 * @param {boolean} [options.useMax=false] - Use `max-width` instead of `min-width`.
 * @param {boolean} [options.immediate=true] - Execute callback function on listener creation.
 * @param {function} callback - Callback function, receives a `MediaQueryList` as parameter.
 *
 * @returns {Object} Object containing the `on` and `off` listener methods.
 */


function listen(options, callback) {
  let mq = null;
  const {
    name,
    useMax,
    immediate
  } = options;
  const opts = {
    name,
    useMax: useMax || false,
    immediate: typeof immediate === 'undefined' ? true : immediate
  };

  function on() {
    if (typeof options === 'string' || Array.isArray(options)) {
      mq = window.matchMedia(getMediaQuery(options));
    } else {
      mq = window.matchMedia(getMediaQuery(opts.name, opts.useMax));
    }

    if (opts.immediate) callback(mq);
    mq.addEventListener('change', callback);
  }

  on();

  function off() {
    if (mq) {
      mq.removeListener(callback);
      mq = null;
    }
  }

  return {
    on,
    off
  };
}
/**
 * Listen to all breakpoints matching or un-matching and execute a callback function. The callback function will receive an array of the matching breakpoint names in reverse order as a parameter. That means the largest breakpoint name (or smallest when using `options.useMax`) comes first in the array. The array will be empty if no breakpoints are matching.
 *
 * @param {function} callback - Callback function, receives an array of breakpoint names as parameter.
 * @param {Object} [options] - Configuration Object.
 * @param {Array} [options.listenTo] - Array of breakpoint names. All are used by default.
 * @param {boolean} [options.useMax=false] - Use `max-width` instead of `min-width`.
 * @param {boolean} [options.immediate=true] - Execute callback function on listener creation.
 *
 * @returns {Object} Object containing the `on` and `off` listener methods.
 */


function listenAll(callback, options = {}) {
  const keys = Object.keys(breakpoints);
  let listeners = [];
  let bps = keys;
  if (keys.length === 0) return;
  const {
    useMax,
    immediate,
    listenTo
  } = options;
  const opts = {
    useMax: useMax || false,
    immediate: typeof immediate === 'undefined' ? true : immediate
  };

  if (listenTo) {
    bps = listenTo.sort((a, b) => {
      return parseInt(breakpoints[a], 10) - parseInt(breakpoints[b], 10);
    });
  }

  const cb = () => {
    callback(_matchAll(bps, opts.useMax));
  };

  function on() {
    bps.forEach(bp => {
      const listener = listen({
        name: bp,
        useMax: opts.useMax,
        immediate: false
      }, cb);
      listeners.push(listener);
    });
    if (opts.immediate) cb();
  }

  on();

  function off() {
    if (listeners.length) {
      listeners.forEach(listener => listener.off());
      listeners = [];
    }
  }

  return {
    on,
    off
  };
}

function getCurrentMediaQueryName() {
  const keys = Object.keys(breakpoints);

  const bps = _matchAll(keys);

  if (!bps.length) {
    return 'default';
  }

  return Object.keys(breakpoints)[bps.length - 1];
}

function isScreenOf(name) {
  return name === getCurrentMediaQueryName();
}

/* harmony default export */ const breakpoint = (bph);
;// CONCATENATED MODULE: ./src/theme/palette.ts
/* harmony default export */ const palette = ({
  brand: {
    50: '#dff6ff',
    100: '#bae0f6',
    200: '#92c9ea',
    300: '#6ab3e0',
    400: '#429ed6',
    500: '#2984bd',
    600: '#1c6794',
    700: '#0f4a6b',
    800: '#012d43',
    900: '#00111c',
    base: undefined,
    a400: '#4ea4d9',
    a500: '#2d74ad',
    a600: '#1a588b'
  },
  red: {
    '50': '#ffebee',
    '100': '#ffcdd2',
    '200': '#ef9a9a',
    '300': '#e57373',
    '400': '#ef5350',
    '500': '#f44336',
    '600': '#e53935',
    '700': '#d32f2f',
    '800': '#c62828',
    '900': '#b71c1c',
    a100: '#ff8a80',
    a200: '#ff5252',
    a400: '#ff1744',
    a700: '#d50000'
  },
  pink: {
    '50': '#fce4ec',
    '100': '#f8bbd0',
    '200': '#f48fb1',
    '300': '#f06292',
    '400': '#ec407a',
    '500': '#e91e63',
    '600': '#d81b60',
    '700': '#c2185b',
    '800': '#ad1457',
    '900': '#880e4f',
    a100: '#ff80ab',
    a200: '#ff4081',
    a400: '#f50057',
    a700: '#c51162'
  },
  purple: {
    '50': '#f3e5f5',
    '100': '#e1bee7',
    '200': '#ce93d8',
    '300': '#ba68c8',
    '400': '#ab47bc',
    '500': '#9c27b0',
    '600': '#8e24aa',
    '700': '#7b1fa2',
    '800': '#6a1b9a',
    '900': '#4a148c',
    a100: '#ea80fc',
    a200: '#e040fb',
    a400: '#d500f9',
    a700: '#aa00ff'
  },
  deeppurple: {
    '50': '#ede7f6',
    '100': '#d1c4e9',
    '200': '#b39ddb',
    '300': '#9575cd',
    '400': '#7e57c2',
    '500': '#673ab7',
    '600': '#5e35b1',
    '700': '#512da8',
    '800': '#4527a0',
    '900': '#311b92',
    a100: '#b388ff',
    a200: '#7c4dff',
    a400: '#651fff',
    a700: '#6200ea'
  },
  indigo: {
    '50': '#e8eaf6',
    '100': '#c5cae9',
    '200': '#9fa8da',
    '300': '#7986cb',
    '400': '#5c6bc0',
    '500': '#3f51b5',
    '600': '#3949ab',
    '700': '#303f9f',
    '800': '#283593',
    '900': '#1a237e',
    a100: '#8c9eff',
    a200: '#536dfe',
    a400: '#3d5afe',
    a700: '#304ffe'
  },
  blue: {
    '50': '#e3f2fd',
    '100': '#bbdefb',
    '200': '#90caf9',
    '300': '#64b5f6',
    '400': '#42a5f5',
    '500': '#2196f3',
    '600': '#1e88e5',
    '700': '#1976d2',
    '800': '#1565c0',
    '900': '#0d47a1',
    a100: '#82b1ff',
    a200: '#448aff',
    a400: '#2979ff',
    a700: '#2962ff'
  },
  lightblue: {
    '50': '#e1f5fe',
    '100': '#b3e5fc',
    '200': '#81d4fa',
    '300': '#4fc3f7',
    '400': '#29b6f6',
    '500': '#03a9f4',
    '600': '#039be5',
    '700': '#0288d1',
    '800': '#0277bd',
    '900': '#01579b',
    a100: '#80d8ff',
    a200: '#40c4ff',
    a400: '#00b0ff',
    a700: '#0091ea'
  },
  cyan: {
    '50': '#e0f7fa',
    '100': '#b2ebf2',
    '200': '#80deea',
    '300': '#4dd0e1',
    '400': '#26c6da',
    '500': '#00bcd4',
    '600': '#00acc1',
    '700': '#0097a7',
    '800': '#00838f',
    '900': '#006064',
    a100: '#84ffff',
    a200: '#18ffff',
    a400: '#00e5ff',
    a700: '#00b8d4'
  },
  teal: {
    '50': '#e0f2f1',
    '100': '#b2dfdb',
    '200': '#80cbc4',
    '300': '#4db6ac',
    '400': '#26a69a',
    '500': '#009688',
    '600': '#00897b',
    '700': '#00796b',
    '800': '#00695c',
    '900': '#004d40',
    a100: '#a7ffeb',
    a200: '#64ffda',
    a400: '#1de9b6',
    a700: '#00bfa5'
  },
  green: {
    '50': '#e8f5e9',
    '100': '#c8e6c9',
    '200': '#a5d6a7',
    '300': '#81c784',
    '400': '#66bb6a',
    '500': '#4caf50',
    '600': '#43a047',
    '700': '#388e3c',
    '800': '#2e7d32',
    '900': '#1b5e20',
    a100: '#b9f6ca',
    a200: '#69f0ae',
    a400: '#00e676',
    a700: '#00c853'
  },
  lightgreen: {
    '50': '#f1f8e9',
    '100': '#dcedc8',
    '200': '#c5e1a5',
    '300': '#aed581',
    '400': '#9ccc65',
    '500': '#8bc34a',
    '600': '#7cb342',
    '700': '#689f38',
    '800': '#558b2f',
    '900': '#33691e',
    a100: '#ccff90',
    a200: '#b2ff59',
    a400: '#76ff03',
    a700: '#64dd17'
  },
  lime: {
    '50': '#f9fbe7',
    '100': '#f0f4c3',
    '200': '#e6ee9c',
    '300': '#dce775',
    '400': '#d4e157',
    '500': '#cddc39',
    '600': '#c0ca33',
    '700': '#afb42b',
    '800': '#9e9d24',
    '900': '#827717',
    a100: '#f4ff81',
    a200: '#eeff41',
    a400: '#c6ff00',
    a700: '#aeea00'
  },
  yellow: {
    '50': '#fffde7',
    '100': '#fff9c4',
    '200': '#fff59d',
    '300': '#fff176',
    '400': '#ffee58',
    '500': '#ffeb3b',
    '600': '#fdd835',
    '700': '#fbc02d',
    '800': '#f9a825',
    '900': '#f57f17',
    a100: '#ffff8d',
    a200: '#ffff00',
    a400: '#ffea00',
    a700: '#ffd600'
  },
  amber: {
    '50': '#fff8e1',
    '100': '#ffecb3',
    '200': '#ffe082',
    '300': '#ffd54f',
    '400': '#ffca28',
    '500': '#ffc107',
    '600': '#ffb300',
    '700': '#ffa000',
    '800': '#ff8f00',
    '900': '#ff6f00',
    a100: '#ffe57f',
    a200: '#ffd740',
    a400: '#ffc400',
    a700: '#ffab00'
  },
  orange: {
    '50': '#fff3e0',
    '100': '#ffe0b2',
    '200': '#ffcc80',
    '300': '#ffb74d',
    '400': '#ffa726',
    '500': '#ff9800',
    '600': '#fb8c00',
    '700': '#f57c00',
    '800': '#ef6c00',
    '900': '#e65100',
    a100: '#ffd180',
    a200: '#ffab40',
    a400: '#ff9100',
    a700: '#ff6d00'
  },
  deeporange: {
    '50': '#fbe9e7',
    '100': '#ffccbc',
    '200': '#ffab91',
    '300': '#ff8a65',
    '400': '#ff7043',
    '500': '#ff5722',
    '600': '#f4511e',
    '700': '#e64a19',
    '800': '#d84315',
    '900': '#bf360c',
    a100: '#ff9e80',
    a200: '#ff6e40',
    a400: '#ff3d00',
    a700: '#dd2c00'
  },
  brown: {
    '50': '#efebe9',
    '100': '#d7ccc8',
    '200': '#bcaaa4',
    '300': '#a1887f',
    '400': '#8d6e63',
    '500': '#795548',
    '600': '#6d4c41',
    '700': '#5d4037',
    '800': '#4e342e',
    '900': '#3e2723'
  },
  gray: {
    '50': '#fafafa',
    '100': '#f5f5f5',
    '200': '#eeeeee',
    '300': '#e0e0e0',
    '400': '#bdbdbd',
    '500': '#9e9e9e',
    '600': '#757575',
    '700': '#616161',
    '800': '#424242',
    '900': '#212121'
  },
  bluegray: {
    '50': '#eceff1',
    '100': '#cfd8dc',
    '200': '#b0bec5',
    '300': '#90a4ae',
    '400': '#78909c',
    '500': '#607d8b',
    '600': '#546e7a',
    '700': '#455a64',
    '800': '#37474f',
    '900': '#263238'
  }
});
;// CONCATENATED MODULE: ./src/theme/index.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const space = [0, 4, 8, 12, 16, 20, 24, 32, 48, 64]; //                            [0  1  2   3   4   5   6   7   8   9]

const fontSizes = [0, 12, 14, 16, 18, 20, 24, 32, 40, 48]; //                                   [0   1   2   3   4   5   6   7   8   9]
// @ts-ignore

fontSizes.base = fontSizes[3];
const radii = [0, 2, 4, 6, 8, 10, 12, 16, 20]; //                 [0  1  2  3  4   5   6   7   8]

radii.pill = 9999;
radii.base = radii[2];
radii.circle = '100%';
const colors = {
  /* main */
  primary: '#FFCF3F',
  secondary: '#003FE0',
  tetriary: '',

  /* neutral */
  neutral: palette.gray[500],
  // color weights
  'neutral-50': palette.gray[50],
  'neutral-100': palette.gray[100],
  'neutral-200': palette.gray[200],
  'neutral-300': palette.gray[300],
  'neutral-400': palette.gray[400],
  'neutral-500': palette.gray[500],
  'neutral-600': palette.gray[600],
  'neutral-700': palette.gray[700],
  'neutral-800': palette.gray[800],
  'neutral-900': palette.gray[900],

  /* foreground (text) */
  body: '#000000',
  heading: '#000000',
  'heading-2': '#222222',
  text: '#000000',
  'text-2': '#778699',
  'text-3': '#637277',

  /* background */
  background: '#ffffff',
  'background-2': '#fafbfd',
  'background-3': '#FBFCFC',

  /* elements */
  discount: '#ff2131',

  /* semantic */
  danger: '#ee3945',
  success: '#01a64a'
};
const shadows = {
  'shadow-1': '11px 14px 31px 7px rgba(0, 0, 0, 0.13)'
};
const mainFontFamily = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`;
const monoFontFamily = `SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace`;
const fonts = {
  body: `Roboto, ${mainFontFamily}`,
  heading: `Roboto, ${mainFontFamily}`,
  monospace: monoFontFamily
};
const fontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 900
};
const theme_breakpoints = {
  // Extra small devices (portrait and landscape phones, less than 768px)
  // No media query for this case since this is the default
  // Medium devices (tablets, 648px and up)
  tablet: 648,
  // Large devices (desktops, 1200px and up)
  desktop: 1200,
  // Extra large devices (large desktops, 1440px and up)
  largeDesktop: 1670
};
const gridGutter = 30;
const maxContainerWidth = Object.entries(theme_breakpoints).reduce((acc, [key, value]) => {
  acc[key] = value - gridGutter;
  return acc;
}, {});
const bpu = breakpoint(theme_breakpoints);

const mq = key => `@media screen and ${bpu.getMediaQuery(key)}`;

const mqMax = key => `@media screen and ${bpu.getMediaQuery(key, true)}`;

const mqMinMax = (from, to) => `@media screen and ${bpu.getMediaQuery([from, to])}`;

const em = (value, base = fontSizes.base) => `${parseFloat(value) / base}em`;
const rem = value => `${parseFloat(value) / fontSizes.base}rem`;
const lineHeights = {
  body: 1.5,
  heading: 1.125
};
const variants = {
  buttons: {
    primary: (0,external_styled_components_.css)(["border-radius:9999px;padding:1.5em 5em;font-size:18px;"]),
    header: (0,external_styled_components_.css)(["border-radius:9999px;font-size:16px;padding:1.3em 5.4em;"])
  }
};
const headerSizes = [null, 1.62500, 1.5, 1.25, 1.2, 1.12500, 1]; //                  [    0        1    2     3    4,       5, 6 ]

const styled = {
  h1: {
    marginBottom: space[5],
    fontSize: fontSizes[8],
    fontWeight: fontWeights.semibold
  },
  h2: {
    marginBottom: space[4],
    fontSize: fontSizes[7],
    fontWeight: fontWeights.semibold
  },
  h3: {
    marginBottom: space[3],
    fontSize: fontSizes[6],
    fontWeight: fontWeights.semibold
  },
  h4: {
    marginBottom: space[300],
    fontSize: fontSizes[500],
    fontWeight: fontWeights.semibold
  },
  h5: {
    marginBottom: space[2],
    fontSize: fontSizes[4],
    fontWeight: fontWeights.semibold
  },
  h6: {
    marginBottom: space[2],
    fontSize: fontSizes[3],
    fontWeight: fontWeights.semibold
  }
};

const grid = _objectSpread({
  breakpoints: theme_breakpoints,
  maxContainerWidth,
  gutter: gridGutter,
  columns: 12,
  mq,
  mqMax,
  mqMinMax
}, bpu);

/* harmony default export */ const theme = (_objectSpread(_objectSpread({}, variants), {}, {
  space,
  colors,
  em,
  rem,
  fonts,
  fontWeights,
  lineHeights,
  breakpoints: theme_breakpoints,
  fontSizes,
  radii,
  shadows,
  styled,
  headerSizes,
  grid
}));

/***/ })

};
;