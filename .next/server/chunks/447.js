"use strict";
exports.id = 447;
exports.ids = [447];
exports.modules = {

/***/ 6487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "lr": () => (/* reexport */ composite_Carousel),
  "$J": () => (/* reexport */ composite_PageControl),
  "PZ": () => (/* reexport */ composite_PopupWindow)
});

// UNUSED EXPORTS: Slider

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/composite/Slider/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class SimpleSlider extends (/* unused pure expression or super */ null && (Component)) {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("h2", {
        children: " Single Item"
      }), /*#__PURE__*/_jsxs(Slider, _objectSpread(_objectSpread({}, settings), {}, {
        children: [/*#__PURE__*/_jsx("div", {
          children: /*#__PURE__*/_jsx("h3", {
            children: "1"
          })
        }), /*#__PURE__*/_jsx("div", {
          children: /*#__PURE__*/_jsx("h3", {
            children: "2"
          })
        }), /*#__PURE__*/_jsx("div", {
          children: /*#__PURE__*/_jsx("h3", {
            children: "3"
          })
        }), /*#__PURE__*/_jsx("div", {
          children: /*#__PURE__*/_jsx("h3", {
            children: "4"
          })
        }), /*#__PURE__*/_jsx("div", {
          children: /*#__PURE__*/_jsx("h3", {
            children: "5"
          })
        }), /*#__PURE__*/_jsx("div", {
          children: /*#__PURE__*/_jsx("h3", {
            children: "6"
          })
        })]
      }))]
    });
  }

}
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/composite/Carousel/styles.tsx

const SlickStyles = (0,external_styled_components_.createGlobalStyle)([".slick-slider{position:relative;display:block;box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent;&:focus{outline:none;}}div{&:focus{outline:none;}}.slick-list{position:relative;overflow:hidden;display:block;margin:0;padding:0;&:focus{outline:none;}&.dragging{cursor:pointer;cursor:hand;}}.slick-slider .slick-track,.slick-slider .slick-list{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}.slick-track{position:relative;left:0;top:0;display:block;margin-left:auto;margin-right:auto;&:before,&:after{content:'';display:table;}&:after{clear:both;}.slick-loading &{visibility:hidden;}}.slick-slide{float:left;height:100%;min-height:1px;[dir='rtl'] &{float:right;}img{display:block;}&.slick-loading img{display:none;}display:none;&.dragging img{pointer-events:none;}.slick-initialized &{display:block;}.slick-loading &{visibility:hidden;}.slick-vertical &{display:block;height:auto;border:1px solid transparent;}}.slick-arrow.slick-hidden{display:none;}"]);
/* harmony default export */ const styles = (SlickStyles);
;// CONCATENATED MODULE: ./src/components/composite/Carousel/index.tsx
function Carousel_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Carousel_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Carousel_ownKeys(Object(source), true).forEach(function (key) { Carousel_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Carousel_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Carousel_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function Carousel(props, ref) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(styles, {}), /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), Carousel_objectSpread(Carousel_objectSpread({}, props), {}, {
      ref: ref
    }))]
  });
}

/* harmony default export */ const composite_Carousel = (/*#__PURE__*/(0,external_react_.forwardRef)(Carousel));
// EXTERNAL MODULE: ./src/components/context/App/index.tsx
var App = __webpack_require__(1742);
// EXTERNAL MODULE: ./src/components/ui/index.ts + 5 modules
var ui = __webpack_require__(2783);
// EXTERNAL MODULE: ./src/components/svg/index.ts + 10 modules
var svg = __webpack_require__(541);
;// CONCATENATED MODULE: ./src/components/composite/PageControl/index.tsx
// Core

 // Service

 // Components





const Root = external_styled_components_default().div.withConfig({
  displayName: "PageControl__Root",
  componentId: "sc-2ie623-0"
})(["display:flex;button + button{margin-left:-1px;}"]);

const PageControl = () => {
  const ref = (0,external_react_.useRef)();
  const appContext = (0,App/* useAppContext */.b)();
  const {
    0: toggleMusic,
    1: setToggleMusic
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    // Записываем ссылку на PageControl для добавления доп элементов через портал
    if (ref && !appContext.pageControlRef) {
      appContext.pageControlRef = ref;
    }
  }, [ref]);
  return /*#__PURE__*/jsx_runtime_.jsx(Root, {
    ref: ref,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ui/* Control */.oT, {
      onClick: () => setToggleMusic(prev => !prev),
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("audio", {
        autoPlay: toggleMusic,
        children: [/*#__PURE__*/jsx_runtime_.jsx("source", {
          src: "/creative.ogg",
          type: "audio/ogg; codecs=vorbis"
        }), /*#__PURE__*/jsx_runtime_.jsx("source", {
          src: "/creative.mp3",
          type: "audio/mpeg"
        })]
      }, +toggleMusic), /*#__PURE__*/jsx_runtime_.jsx(svg/* Volume */.ff, {})]
    })
  });
};

/* harmony default export */ const composite_PageControl = (PageControl);
;// CONCATENATED MODULE: ./src/components/composite/PopupWindow/index.tsx
const _excluded = ["children", "onCloseHandler"];

function PopupWindow_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function PopupWindow_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PopupWindow_ownKeys(Object(source), true).forEach(function (key) { PopupWindow_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PopupWindow_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PopupWindow_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // Components

 // Styles



const PopupWindow_Root = external_styled_components_default().div.withConfig({
  displayName: "PopupWindow__Root",
  componentId: "sc-nqat8k-0"
})(["position:fixed;top:0;right:0;left:0;bottom:0;z-index:1000;background-color:white;padding:173px 0;"]);
const ControlsContainer = external_styled_components_default()(ui/* Container */.W2).withConfig({
  displayName: "PopupWindow__ControlsContainer",
  componentId: "sc-nqat8k-1"
})(["position:absolute;z-index:10;top:54px;right:0;left:0;display:flex;justify-content:flex-end;"]);
const Content = external_styled_components_default().div.withConfig({
  displayName: "PopupWindow__Content",
  componentId: "sc-nqat8k-2"
})(["position:relative;z-index:5;"]);

const PopupWindow = _ref => {
  let {
    children,
    onCloseHandler
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(PopupWindow_Root, PopupWindow_objectSpread(PopupWindow_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(ControlsContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(ui/* CloseButton */.PZ, {
        onClick: onCloseHandler
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Content, {
      children: children
    })]
  }));
};

/* harmony default export */ const composite_PopupWindow = (PopupWindow);
;// CONCATENATED MODULE: ./src/components/composite/index.ts
// export { default as Content } from "./Content";





/***/ }),

/***/ 4447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ general)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/service/index.ts + 6 modules
var service = __webpack_require__(7791);
// EXTERNAL MODULE: ./src/components/context/App/index.tsx
var App = __webpack_require__(1742);
;// CONCATENATED MODULE: ./src/common/constants/nav.ts
/* harmony default export */ const nav = ([// {
//   id: 0,
//   name: 'Выполненные проекты АТЭ',
//   href: '/project/?filters[status][$eq]=done',
//   order: 1,
// },
{
  id: 1,
  name: 'Текущие и выполненные проекты АТЭ',
  pathname: '/project',
  // search: '?filters[status][$eq]=progress&filters[status][$eq]=done', // done|progress|new
  order: 20
}, {
  id: 2,
  name: 'Филиалы и Представительства АТЭ',
  pathname: '/branch',
  // search: '',
  order: 10
}, {
  id: 3,
  name: 'История АО «Атомтехэнерго»',
  pathname: '/history',
  // search: '',
  order: 40
}, {
  id: 4,
  name: 'Этапы пусконаладочных работ АЭС',
  pathname: '/work-stages',
  // search: '',
  order: 50
}, // {
//   id: 5,
//   name: 'Тест Verge3D',
//   href: '/test/',
//   order: 6,
// },
// {
//   id: 6,
//   name: 'Тест Verge3D 2',
//   href: '/test-2/',
//   order: 7,
// },
// {
//   id: 7,
//   name: 'Все проекты',
//   href: '/project/',
//   order: 8,
// },
// {
//   id: 8,
//   name: 'Зарубежные проекты АТЭ',
//   href: '/project/?filters[location][$ne]=ru',
//   order: 80,
// },
{
  id: 9,
  name: 'Портфель заказов АТЭ',
  pathname: '/portfolio',
  // search: '',
  order: 30
}]);
;// CONCATENATED MODULE: ./src/common/constants/section.ts
/* harmony default export */ const section = ({
  home: '/',
  branch: '/branch',
  // history: '/history',
  timeline: '/timeline',
  portfolio: '/portfolio',
  project: '/project'
});
;// CONCATENATED MODULE: ./src/common/constants/index.ts


// EXTERNAL MODULE: ./src/components/ui/index.ts + 5 modules
var ui = __webpack_require__(2783);
// EXTERNAL MODULE: ./src/components/composite/index.ts + 5 modules
var composite = __webpack_require__(6487);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/layout/general/index.tsx



 // Service


 // Constants

 // Components


 // STYLES



const Content = external_styled_components_default().div.withConfig({
  displayName: "general__Content",
  componentId: "sc-1v81fco-0"
})(["position:relative;height:100%;", ""], ({
  fullsize
}) => !fullsize && (0,external_styled_components_.css)(["padding-top:88px;"]));
const Header = external_styled_components_default().header.withConfig({
  displayName: "general__Header",
  componentId: "sc-1v81fco-1"
})(["position:absolute;z-index:10;top:0;right:0;left:0;color:#000000;border-bottom:1px solid #DBDBDB;height:8vh;max-height:88px;min-height:55px;display:flex;align-items:center;justify-content:space-between;background-color:white;"]);
const Page = external_styled_components_default().div.withConfig({
  displayName: "general__Page",
  componentId: "sc-1v81fco-2"
})(["position:relative;height:100%;overflow:hidden;"]);
const LogoLink = external_styled_components_default().a.withConfig({
  displayName: "general__LogoLink",
  componentId: "sc-1v81fco-3"
})(["margin:0 50px;cursor:pointer;"]);
const PageTitle = external_styled_components_default().div.withConfig({
  displayName: "general__PageTitle",
  componentId: "sc-1v81fco-4"
})(["font-weight:bold;font-size:18px;line-height:21px;letter-spacing:0.25em;text-transform:uppercase;"]);
const MenuButton = external_styled_components_default().button.withConfig({
  displayName: "general__MenuButton",
  componentId: "sc-1v81fco-5"
})(["height:100%;display:flex;align-items:center;padding-right:100px;padding-left:40px;background-color:#4EA4D9;font-weight:bold;font-size:11px;line-height:13px;letter-spacing:0.13em;text-transform:uppercase;color:#ffffff;white-space:nowrap;cursor:pointer;appearance:none;outline:none;border:none;margin-left:auto;position:relative;transition:.15s ease-in-out background-color;&:after,&:before{content:'';position:absolute;left:100%;margin-left:-72px;top:50%;height:2px;background-color:white;border-radius:9999px;}&:after{width:26px;margin-top:-8px;}&:before{width:19px;margin-bottom:-8px;}&:hover{background-color:#2D74AD;}&:active{background-color:#1A588B;}"]);
const CloseMenuButton = external_styled_components_default()(MenuButton).withConfig({
  displayName: "general__CloseMenuButton",
  componentId: "sc-1v81fco-6"
})(["position:absolute;top:0;right:0;height:88px;background-color:transparent;padding-right:0;padding-left:0;width:115px;&:after{margin-top:0;}&:before{display:none;}"]);
const Menu = external_styled_components_default().div.withConfig({
  displayName: "general__Menu",
  componentId: "sc-1v81fco-7"
})(["position:fixed;z-index:100;top:0;right:0;bottom:0;left:0;background-color:#263973;display:flex;align-items:center;justify-content:center;transform:translateY(-200vh);transition:transform .3s ease-in-out .1s;", ""], p => p.active && (0,external_styled_components_.css)(["transform:translateY(0);transition:transform .3s ease-in-out;"]));
const NavList = external_styled_components_default().ul.withConfig({
  displayName: "general__NavList",
  componentId: "sc-1v81fco-8"
})(["font-weight:300;font-size:27px;line-height:32px;letter-spacing:0.12em;width:64.376%;"]);
const activeItem = (0,external_styled_components_.css)(["opacity:1;transition:opacity .15s ease-in-out;&:before{background-color:#ffffff;transition:background-color .15s ease-in-out;}"]);
const NavListItem = external_styled_components_default().li.withConfig({
  displayName: "general__NavListItem",
  componentId: "sc-1v81fco-9"
})(["+ li{margin-top:114px;}a{text-decoration:none;color:#FFFFFF;opacity:0.3;transition:opacity .15s ease-in-out .3s;position:relative;&:before{content:'';position:absolute;top:1em;right:100%;margin-right:24px;width:92px;height:1px;background-color:transparent;transition:background-color .15s ease-in-out .3s;}", " &:hover{", "}}"], ({
  active
}) => active && (0,external_styled_components_.css)(["", ""], activeItem), activeItem);
const ControlWrapper = external_styled_components_default().div.withConfig({
  displayName: "general__ControlWrapper",
  componentId: "sc-1v81fco-10"
})(["padding:0 50px;position:absolute;right:0;bottom:40px;left:0;"]);

const Layout = ({
  children,
  title,
  fullsize = false
}) => {
  const pageRef = (0,external_react_.useRef)();
  const appContext = (0,App/* useAppContext */.b)();
  const {
    0: menuVisibility,
    1: setMenuVisibility
  } = (0,external_react_.useState)(false);
  const navigationElements = nav.sort((a, b) => a.order - b.order);
  const router = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
    // Записываем ссылку на PopupContainer для добавления доп элементов через портал
    if (pageRef && !appContext.pageRef) {
      appContext.pageRef = pageRef;
    }
  }, [pageRef]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Page, {
    ref: pageRef,
    children: [/*#__PURE__*/jsx_runtime_.jsx(service/* Head */.F, {
      title: title
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Header, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: section.home,
        children: /*#__PURE__*/jsx_runtime_.jsx(LogoLink, {
          children: /*#__PURE__*/jsx_runtime_.jsx(ui/* Logo */.TR, {})
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(PageTitle, {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx(MenuButton, {
        children: "\u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Content, {
      fullsize: fullsize,
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(ControlWrapper, {
      children: /*#__PURE__*/jsx_runtime_.jsx(composite/* PageControl */.$J, {})
    })]
  });
};

/* harmony default export */ const general = (Layout);

/***/ }),

/***/ 541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X1": () => (/* reexport */ Cross),
  "Pj": () => (/* reexport */ Ellipse),
  "Uo": () => (/* reexport */ EllipseActive),
  "uv": () => (/* reexport */ EllipseGray),
  "LI": () => (/* reexport */ SlideArrow),
  "CF": () => (/* reexport */ SlideArrowSmall),
  "m0": () => (/* reexport */ SliderEllipse),
  "rt": () => (/* reexport */ SliderEllipseActive),
  "ff": () => (/* reexport */ Volume)
});

// UNUSED EXPORTS: Question

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/svg/Question/index.tsx
const _excluded = (/* unused pure expression or super */ null && (["size"]));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const SvgComponent = _ref => {
  let {
    size = '1em'
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_jsx("svg", _objectSpread(_objectSpread({
    width: size,
    height: size,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/_jsx("path", {
      d: "M8.667 8.667c0-.862.4-1.689 1.11-2.298.712-.61 1.676-.952 2.682-.952h1.083c1.006 0 1.97.342 2.681.952.711.61 1.11 1.436 1.11 2.298a3.25 3.25 0 0 1-2.166 3.25c-.665.311-1.235.902-1.626 1.684-.39.782-.58 1.711-.54 2.65M13 20.583v.011",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  }));
};

/* harmony default export */ const Question = ((/* unused pure expression or super */ null && (SvgComponent)));
;// CONCATENATED MODULE: ./src/components/svg/Volume/index.tsx
const Volume_excluded = ["size"];

function Volume_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Volume_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Volume_ownKeys(Object(source), true).forEach(function (key) { Volume_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Volume_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Volume_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Volume_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Volume_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Volume_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Volume_SvgComponent = _ref => {
  let {
    size = '1em'
  } = _ref,
      props = Volume_objectWithoutProperties(_ref, Volume_excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("svg", Volume_objectSpread(Volume_objectSpread({
    width: size,
    height: size,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M16.25 8.667a5.417 5.417 0 0 1 0 8.666M19.175 5.417a9.749 9.749 0 0 1 0 15.166M6.5 16.25H4.333a1.083 1.083 0 0 1-1.083-1.083v-4.334A1.083 1.083 0 0 1 4.333 9.75H6.5l3.792-4.875a.867.867 0 0 1 1.625.542v15.166a.866.866 0 0 1-1.625.542L6.5 16.25Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  }));
};

/* harmony default export */ const Volume = (Volume_SvgComponent);
;// CONCATENATED MODULE: ./src/components/svg/Cross/index.tsx
function Cross_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Cross_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Cross_ownKeys(Object(source), true).forEach(function (key) { Cross_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Cross_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Cross_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Cross_SvgComponent = props => /*#__PURE__*/jsx_runtime_.jsx("svg", Cross_objectSpread(Cross_objectSpread({
  viewBox: "0 0 14 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), {}, {
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M13 1 1 13M1 1l12 12L1 1Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })
}));

/* harmony default export */ const Cross = (Cross_SvgComponent);
;// CONCATENATED MODULE: ./src/components/svg/EllipseActive/index.tsx



const EllipseActive_SvgComponent = props => /*#__PURE__*/jsx_runtime_.jsx("svg", {
  width: "9",
  height: "12",
  viewBox: "0 0 9 12",
  fill: "#263973",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M4.5 10.6429C2.29086 10.6429 0.5 8.852 0.5 6.64286C0.5 6.13337 0.696676 5.48863 1.0464 4.77695C1.39158 4.07451 1.8644 3.34974 2.36609 2.69296C2.86768 2.03631 3.38854 1.46013 3.8225 1.05317C4.04042 0.848798 4.22747 0.695562 4.37247 0.59696C4.42538 0.560982 4.46778 0.535655 4.5 0.518625C4.53222 0.535655 4.57462 0.560982 4.62753 0.59696C4.77253 0.695562 4.95958 0.848798 5.1775 1.05317C5.61146 1.46013 6.13232 2.03631 6.63391 2.69296C7.1356 3.34974 7.60842 4.07451 7.9536 4.77695C8.30332 5.48863 8.5 6.13337 8.5 6.64286C8.5 8.852 6.70914 10.6429 4.5 10.6429ZM4.55506 0.493659C4.55505 0.49369 4.55427 0.493955 4.55275 0.49436C4.55432 0.493831 4.55507 0.493628 4.55506 0.493659ZM4.44725 0.49436C4.44573 0.493955 4.44495 0.49369 4.44494 0.493659C4.44493 0.493628 4.44568 0.493831 4.44725 0.49436Z",
    fill: "#263973",
    stroke: "#263973"
  })
});

/* harmony default export */ const EllipseActive = (EllipseActive_SvgComponent);
;// CONCATENATED MODULE: ./src/components/svg/Ellipse/index.tsx



const Ellipse_SvgComponent = props => /*#__PURE__*/jsx_runtime_.jsx("svg", {
  width: "9",
  height: "12",
  viewBox: "0 0 9 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M4.5 10.6429C2.29086 10.6429 0.5 8.852 0.5 6.64286C0.5 6.13337 0.696676 5.48863 1.0464 4.77695C1.39158 4.07451 1.8644 3.34974 2.36609 2.69296C2.86768 2.03631 3.38854 1.46013 3.8225 1.05317C4.04042 0.848798 4.22747 0.695562 4.37247 0.59696C4.42538 0.560982 4.46778 0.535655 4.5 0.518625C4.53222 0.535655 4.57462 0.560982 4.62753 0.59696C4.77253 0.695562 4.95958 0.848798 5.1775 1.05317C5.61146 1.46013 6.13232 2.03631 6.63391 2.69296C7.1356 3.34974 7.60842 4.07451 7.9536 4.77695C8.30332 5.48863 8.5 6.13337 8.5 6.64286C8.5 8.852 6.70914 10.6429 4.5 10.6429ZM4.55506 0.493659C4.55505 0.49369 4.55427 0.493955 4.55275 0.49436C4.55432 0.493831 4.55507 0.493628 4.55506 0.493659ZM4.44725 0.49436C4.44573 0.493955 4.44495 0.49369 4.44494 0.493659C4.44493 0.493628 4.44568 0.493831 4.44725 0.49436Z",
    fill: "white",
    stroke: "#C4C4C4"
  })
});

/* harmony default export */ const Ellipse = (Ellipse_SvgComponent);
;// CONCATENATED MODULE: ./src/components/svg/SlideArrow/index.tsx



const SlideArrow_SvgComponent = props => /*#__PURE__*/jsx_runtime_.jsx("svg", {
  width: "134",
  height: "94",
  viewBox: "0 0 134 94",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M76.9285 82.3683L102.413 55.9614L102.985 55.3683H102.161H0.35V38.8451H102.181H103.001L102.434 38.253L76.9276 11.6325L89.1909 0.490401L133.019 47.0963L89.1915 93.5101L76.9285 82.3683Z",
    stroke: "#4F4F4F",
    strokeWidth: "0.7"
  })
});

/* harmony default export */ const SlideArrow = (SlideArrow_SvgComponent);
;// CONCATENATED MODULE: ./src/components/svg/SlideArrowSmall/index.tsx



const SlideArrowSmall_SvgComponent = props => /*#__PURE__*/jsx_runtime_.jsx("svg", {
  width: "46",
  height: "33",
  viewBox: "0 0 46 33",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M35.2016 19.2107H0.35V13.8643H35.2085H36.0181L35.4634 13.2745L26.8308 4.09488L30.7197 0.494952L45.5233 16.5335L30.7202 32.5055L26.8317 28.906L35.4557 19.8014L36.0152 19.2107H35.2016Z",
    stroke: "#4F4F4F",
    strokeWidth: "0.7"
  })
});

/* harmony default export */ const SlideArrowSmall = (SlideArrowSmall_SvgComponent);
;// CONCATENATED MODULE: ./src/components/svg/SliderEllipseActive/index.tsx



const SliderEllipseActive_SvgComponent = props => /*#__PURE__*/jsx_runtime_.jsx("svg", {
  width: "16",
  height: "20",
  viewBox: "0 0 16 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M8 2.00004C11.3137 2.00004 14 4.68633 14 8.00004C14 8.65728 13.7341 9.62327 13.1425 10.8272C12.5691 11.9941 11.7715 13.2206 10.9106 14.3476C10.0501 15.4742 9.16457 16.4514 8.44438 17.1268C8.27985 17.2811 8.13125 17.4128 8 17.5228C7.86876 17.4128 7.72015 17.2811 7.55562 17.1268C6.83543 16.4514 5.94988 15.4742 5.08937 14.3476C4.22845 13.2206 3.43092 11.9941 2.85748 10.8272C2.26587 9.62327 2 8.65728 2 8.00004C2 4.68633 4.68629 2.00004 8 2.00004Z",
    fill: "#263973",
    stroke: "#263973",
    strokeWidth: "4"
  })
});

/* harmony default export */ const SliderEllipseActive = (SliderEllipseActive_SvgComponent);
;// CONCATENATED MODULE: ./src/components/svg/SliderEllipse/index.tsx



const SliderEllipse_SvgComponent = props => /*#__PURE__*/jsx_runtime_.jsx("svg", {
  width: "16",
  height: "20",
  viewBox: "0 0 16 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M8 2.00004C11.3137 2.00004 14 4.68633 14 8.00004C14 8.65728 13.7341 9.62327 13.1425 10.8272C12.5691 11.9941 11.7715 13.2206 10.9106 14.3476C10.0501 15.4742 9.16457 16.4514 8.44438 17.1268C8.27985 17.2811 8.13125 17.4128 8 17.5228C7.86876 17.4128 7.72015 17.2811 7.55562 17.1268C6.83543 16.4514 5.94988 15.4742 5.08937 14.3476C4.22845 13.2206 3.43092 11.9941 2.85748 10.8272C2.26587 9.62327 2 8.65728 2 8.00004C2 4.68633 4.68629 2.00004 8 2.00004Z",
    fill: "white",
    stroke: "#263973",
    strokeWidth: "4"
  })
});

/* harmony default export */ const SliderEllipse = (SliderEllipse_SvgComponent);
;// CONCATENATED MODULE: ./src/components/svg/EllipseGray/index.tsx



const EllipseGray_SvgComponent = props => /*#__PURE__*/jsx_runtime_.jsx("svg", {
  width: "9",
  height: "12",
  viewBox: "0 0 9 12",
  fill: "#C4C4C4",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M4.5 10.6429C2.29086 10.6429 0.5 8.852 0.5 6.64286C0.5 6.13337 0.696676 5.48863 1.0464 4.77695C1.39158 4.07451 1.8644 3.34974 2.36609 2.69296C2.86768 2.03631 3.38854 1.46013 3.8225 1.05317C4.04042 0.848798 4.22747 0.695562 4.37247 0.59696C4.42538 0.560982 4.46778 0.535655 4.5 0.518625C4.53222 0.535655 4.57462 0.560982 4.62753 0.59696C4.77253 0.695562 4.95958 0.848798 5.1775 1.05317C5.61146 1.46013 6.13232 2.03631 6.63391 2.69296C7.1356 3.34974 7.60842 4.07451 7.9536 4.77695C8.30332 5.48863 8.5 6.13337 8.5 6.64286C8.5 8.852 6.70914 10.6429 4.5 10.6429ZM4.55506 0.493659C4.55505 0.49369 4.55427 0.493955 4.55275 0.49436C4.55432 0.493831 4.55507 0.493628 4.55506 0.493659ZM4.44725 0.49436C4.44573 0.493955 4.44495 0.49369 4.44494 0.493659C4.44493 0.493628 4.44568 0.493831 4.44725 0.49436Z",
    fill: "#C4C4C4",
    stroke: "#C4C4C4"
  })
});

/* harmony default export */ const EllipseGray = (EllipseGray_SvgComponent);
;// CONCATENATED MODULE: ./src/components/svg/index.ts











/***/ }),

/***/ 2783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zx": () => (/* reexport */ ui_Button),
  "PZ": () => (/* reexport */ ui_CloseButton),
  "W2": () => (/* reexport */ ui_Container),
  "oT": () => (/* reexport */ ui_Control),
  "TR": () => (/* reexport */ ui_Logo)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/ui/Button/index.tsx
const _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Root = external_styled_components_default().button.withConfig({
  displayName: "Button__Root",
  componentId: "sc-12fo528-0"
})(["display:flex;align-items:center;justify-content:center;width:65px;height:65px;background:transparent;border:0.5px solid #000000;color:#000000;font-size:12px;cursor:pointer;"]);

const Button = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx(Root, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }));
};

/* harmony default export */ const ui_Button = (Button);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/components/svg/index.ts + 10 modules
var svg = __webpack_require__(541);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/ui/CloseButton/index.tsx
const CloseButton_excluded = ["href"];

function CloseButton_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function CloseButton_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CloseButton_ownKeys(Object(source), true).forEach(function (key) { CloseButton_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CloseButton_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CloseButton_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CloseButton_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CloseButton_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CloseButton_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // Components




const RootWithHref = external_styled_components_default()(next_link["default"]).withConfig({
  displayName: "CloseButton__RootWithHref",
  componentId: "sc-alvak4-0"
})([""]);
const CloseButton_Button = external_styled_components_default().a.withConfig({
  displayName: "CloseButton__Button",
  componentId: "sc-alvak4-1"
})(["display:flex;align-items:center;justify-content:center;width:65px;height:65px;background:rgba(0,0,0,0.27);border:0.5px solid #FFFFFF;color:#fff;font-size:12px;cursor:pointer;transition:.15s ease-in-out background-color,.15s ease-in-out color,.15s ease-in-out border-color;&:hover{background-color:#2D74AD;color:#fff;z-index:10;}&:active{background-color:#1A588B;color:#fff;z-index:10;}"]);
const Icon = external_styled_components_default()(svg/* Cross */.X1).withConfig({
  displayName: "CloseButton__Icon",
  componentId: "sc-alvak4-2"
})(["color:currentColor;width:1em;height:1em;"]);

const CloseButton = _ref => {
  let {
    href
  } = _ref,
      props = CloseButton_objectWithoutProperties(_ref, CloseButton_excluded);

  const router = (0,router_.useRouter)();

  if (href) {
    return /*#__PURE__*/jsx_runtime_.jsx(RootWithHref, {
      href: href,
      children: /*#__PURE__*/jsx_runtime_.jsx(CloseButton_Button, CloseButton_objectSpread(CloseButton_objectSpread({
        onClick: () => router.back()
      }, props), {}, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Icon, {})
      }))
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(CloseButton_Button, CloseButton_objectSpread(CloseButton_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Icon, {})
  }));
};

/* harmony default export */ const ui_CloseButton = (CloseButton);
;// CONCATENATED MODULE: ./src/components/ui/Container/index.tsx

const Container = external_styled_components_default().div.withConfig({
  displayName: "Container",
  componentId: "sc-1pazata-0"
})(["width:100%;", " margin-right:auto;margin-left:auto;", ""], ({
  theme
}) => (0,external_styled_components_.css)(["padding-right:", "px;padding-left:", "px;"], theme.grid.gutter / 2, theme.grid.gutter / 2), ({
  isFluid,
  theme
}) => !isFluid && (0,external_styled_components_.css)(["max-width:480px;", ""], Object.keys(theme.grid.breakpoints).map(bpItem => `
      ${theme.grid.mq(bpItem)} {
        max-width: ${theme.grid.maxContainerWidth[bpItem]}px;
      }
    `)));
Container.defaultProps = {
  isFluid: false
};
/* harmony default export */ const ui_Container = (Container);
;// CONCATENATED MODULE: ./src/components/ui/Logo/index.tsx



const Logo = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("img", {
    src: "/images/logo.jpg",
    style: {
      height: "7vh",
      maxHeight: "88px"
    },
    alt: "\u0410\u0422\u041E\u041C\u0422\u0415\u0425\u042D\u041D\u0415\u0420\u0413\u041E \u0420\u041E\u0421\u0410\u0422\u041E\u041C"
  });
};

/* harmony default export */ const ui_Logo = (Logo);
;// CONCATENATED MODULE: ./src/components/ui/Control/index.tsx
const Control_excluded = ["children"];

function Control_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Control_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Control_ownKeys(Object(source), true).forEach(function (key) { Control_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Control_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Control_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Control_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Control_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Control_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


 // Components



const Control_Root = external_styled_components_default()(ui_Button).withConfig({
  displayName: "Control__Root",
  componentId: "sc-m7hl8w-0"
})(["font-size:26px;padding-right:0;padding-left:0;transition:.15s ease-in-out background-color,.15s ease-in-out color,.15s ease-in-out border-color;&:hover{background-color:#2D74AD;color:#fff;z-index:10;border-color:#2D74AD;}&:active{background-color:#1A588B;color:#fff;z-index:10;border-color:#1A588B;}"]);

const Control = _ref => {
  let {
    children
  } = _ref,
      props = Control_objectWithoutProperties(_ref, Control_excluded);

  return /*#__PURE__*/jsx_runtime_.jsx(Control_Root, Control_objectSpread(Control_objectSpread({}, props), {}, {
    children: children
  }));
};

/* harmony default export */ const ui_Control = (Control);
;// CONCATENATED MODULE: ./src/components/ui/index.ts






/***/ })

};
;