"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/layout/general/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/layout/general/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/service */ \"./src/components/service/index.ts\");\n/* harmony import */ var _components_context_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/context/App */ \"./src/components/context/App/index.tsx\");\n/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/common/constants */ \"./src/common/constants/index.ts\");\n/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui */ \"./src/components/ui/index.ts\");\n/* harmony import */ var _components_composite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/composite */ \"./src/components/composite/index.ts\");\n\n\n\n\n\n// Service\n\n\n// Constants\n\n// Components\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    padding-top: 88px;\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  position: relative;\\n  // z-index: 5;\\n  height: 100%;\\n  \\n  \",\n        \"\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  position: absolute;\\n  z-index: 10;\\n  top: 0;\\n  right: 0;\\n  left: 0;\\n  color: #000000;\\n  border-bottom: 1px solid #DBDBDB;\\n  height: 88px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  background-color: white;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  position: relative;\\n  height: 100%;\\n  overflow: hidden;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin: 0 50px;\\n  cursor: pointer;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-weight: bold;\\n  font-size: 18px;\\n  line-height: 21px;\\n  letter-spacing: 0.25em;\\n  text-transform: uppercase;\\n  margin-left: 178px;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  height: 100%;\\n  display: flex;\\n  align-items: center;\\n  padding: 38px 105px 37px 38px;\\n  background-color: #4EA4D9;\\n  font-weight: bold;\\n  font-size: 11px;\\n  line-height: 13px;\\n  letter-spacing: 0.13em;\\n  text-transform: uppercase;\\n  color: #ffffff;\\n  white-space: nowrap;\\n  cursor: pointer;\\n  appearance: none;\\n  outline: none;\\n  border: none;\\n  margin-left: auto;\\n  position: relative;\\n  transition: .15s ease-in-out background-color;\\n  \\n  &:after,\\n  &:before {\\n    content: '';\\n    position: absolute;\\n    left: 100%;\\n    margin-left: -72px;\\n    top: 50%;\\n    height: 2px;\\n    background-color: white;\\n    border-radius: 9999px;\\n  }\\n  \\n  &:after {\\n    width: 26px;\\n    margin-top: -8px;\\n  }\\n  \\n  &:before {\\n    width: 19px;\\n    margin-bottom: -8px;\\n  }\\n  \\n  &:hover {\\n    background-color: #2D74AD;\\n  }\\n  \\n  &:active {\\n    background-color: #1A588B;\\n  }\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  height: 88px;\\n  background-color: transparent;\\n  padding-right: 0;\\n  padding-left: 0;\\n  width: 115px;\\n  \\n  &:after {\\n    margin-top: 0;\\n  }\\n  \\n  &:before {\\n    display: none;\\n  }\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    transform: translateY(0);\\n    transition: transform .3s ease-in-out;\\n  \"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  position: fixed;\\n  z-index: 100;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  background-color: #263973;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  transform: translateY(-200vh);\\n  transition: transform .3s ease-in-out .1s;\\n  \\n  \",\n        \"\\n\"\n    ]);\n    _templateObject9 = function _templateObject9() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject10() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-weight: 300;\\n  font-size: 27px;\\n  line-height: 32px;\\n  letter-spacing: 0.12em;\\n  width: 64.376%;\\n\"\n    ]);\n    _templateObject10 = function _templateObject10() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject11() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  opacity: 1;\\n  transition: opacity .15s ease-in-out;\\n  \\n  &:before {\\n    background-color: #ffffff;\\n    transition: background-color .15s ease-in-out;\\n  }\\n\"\n    ]);\n    _templateObject11 = function _templateObject11() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject12() {\n    var data = _taggedTemplateLiteral([\n        \"\\n      \",\n        \"\\n    \"\n    ]);\n    _templateObject12 = function _templateObject12() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject13() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  + li {\\n    margin-top: 114px;\\n  }\\n\\n  a {\\n    text-decoration: none;\\n    color: #FFFFFF;\\n    opacity: 0.3;\\n    transition: opacity .15s ease-in-out .3s;\\n    position: relative;\\n    \\n    &:before {\\n      content: '';\\n      position: absolute;\\n      top: 1em;\\n      right: 100%;\\n      margin-right: 24px;\\n      width: 92px;\\n      height: 1px;\\n      background-color: transparent;\\n      transition: background-color .15s ease-in-out .3s;\\n    }\\n    \\n    \",\n        \"\\n    \\n    &:hover {\\n      \",\n        \"\\n    }\\n  }\\n\"\n    ]);\n    _templateObject13 = function _templateObject13() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject14() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 0 50px;\\n  position: absolute;\\n  /* z-index: 10; */\\n  right: 0;\\n  bottom: 40px;\\n  left: 0;\\n\"\n    ]);\n    _templateObject14 = function _templateObject14() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Layout = function(param) {\n    var children = param.children, title = param.title, _fullsize = param.fullsize, fullsize = _fullsize === void 0 ? false : _fullsize;\n    _s();\n    var pageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var appContext = (0,_components_context_App__WEBPACK_IMPORTED_MODULE_5__.useAppContext)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), menuVisibility = ref[0], setMenuVisibility = ref[1];\n    var navigationElements = _common_constants__WEBPACK_IMPORTED_MODULE_6__.nav.sort(function(a, b) {\n        return a.order - b.order;\n    });\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // Записываем ссылку на PopupContainer для добавления доп элементов через портал\n        if (pageRef && !appContext.pageRef) {\n            appContext.pageRef = pageRef;\n        }\n    }, [\n        pageRef\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Page, {\n        ref: pageRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_service__WEBPACK_IMPORTED_MODULE_4__.Head, {\n                title: title\n            }, void 0, false, {\n                fileName: \"/Users/mihailpotapov/Documents/GitHub/ate_history/src/components/layout/general/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: _common_constants__WEBPACK_IMPORTED_MODULE_6__.section.home,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogoLink, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_7__.Logo, {}, void 0, false, {\n                                fileName: \"/Users/mihailpotapov/Documents/GitHub/ate_history/src/components/layout/general/index.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mihailpotapov/Documents/GitHub/ate_history/src/components/layout/general/index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mihailpotapov/Documents/GitHub/ate_history/src/components/layout/general/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PageTitle, {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/mihailpotapov/Documents/GitHub/ate_history/src/components/layout/general/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuButton, {\n                        children: \"Интерактивные проекты\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mihailpotapov/Documents/GitHub/ate_history/src/components/layout/general/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mihailpotapov/Documents/GitHub/ate_history/src/components/layout/general/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                fullsize: fullsize,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/mihailpotapov/Documents/GitHub/ate_history/src/components/layout/general/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ControlWrapper, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_composite__WEBPACK_IMPORTED_MODULE_8__.PageControl, {}, void 0, false, {\n                    fileName: \"/Users/mihailpotapov/Documents/GitHub/ate_history/src/components/layout/general/index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mihailpotapov/Documents/GitHub/ate_history/src/components/layout/general/index.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mihailpotapov/Documents/GitHub/ate_history/src/components/layout/general/index.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this));\n};\n_s(Layout, \"39WCKMGMjHNvWinNIvJZMbSCpQs=\", false, function() {\n    return [\n        _components_context_App__WEBPACK_IMPORTED_MODULE_5__.useAppContext,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar Content = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('div')(_templateObject1(), function(param) {\n    var fullsize = param.fullsize;\n    return !fullsize && (0,styled_components__WEBPACK_IMPORTED_MODULE_9__.css)(_templateObject());\n});\n_c1 = Content;\nvar Header = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('header')(_templateObject2());\n_c2 = Header;\nvar Page = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('div')(_templateObject3());\n_c3 = Page;\nvar LogoLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('a')(_templateObject4());\n_c4 = LogoLink;\nvar PageTitle = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('div')(_templateObject5());\n_c5 = PageTitle;\nvar MenuButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('button')(_templateObject6());\n_c6 = MenuButton;\nvar CloseMenuButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(MenuButton)(_templateObject7());\nvar Menu = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('div')(_templateObject9(), function(p) {\n    return p.active && (0,styled_components__WEBPACK_IMPORTED_MODULE_9__.css)(_templateObject8());\n});\nvar NavList = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('ul')(_templateObject10());\nvar activeItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__.css)(_templateObject11());\nvar NavListItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('li')(_templateObject13(), function(param) {\n    var active = param.active;\n    return active && (0,styled_components__WEBPACK_IMPORTED_MODULE_9__.css)(_templateObject12(), activeItem);\n}, activeItem);\nvar ControlWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('div')(_templateObject14());\n_c7 = ControlWrapper;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;\n$RefreshReg$(_c, \"Layout\");\n$RefreshReg$(_c1, \"Content\");\n$RefreshReg$(_c2, \"Header\");\n$RefreshReg$(_c3, \"Page\");\n$RefreshReg$(_c4, \"LogoLink\");\n$RefreshReg$(_c5, \"PageTitle\");\n$RefreshReg$(_c6, \"MenuButton\");\n$RefreshReg$(_c7, \"ControlWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvZ2VuZXJhbC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNKO0FBQ25CO0FBQ1c7QUFFdkMsRUFBVTtBQUNpQztBQUNhO0FBRXhELEVBQVk7QUFDcUM7QUFFakQsRUFBYTtBQUN5QjtBQUNjOzs7Ozs7Ozs7Ozs7OztRQXNFYixDQUVyQzs7Ozs7Ozs7O1FBUDRCLENBSzVCO1FBRUUsQ0FDSjs7Ozs7Ozs7O1FBRWdDLENBYWhDOzs7Ozs7Ozs7UUFFMkIsQ0FJM0I7Ozs7Ozs7OztRQUU2QixDQUc3Qjs7Ozs7Ozs7O1FBRWdDLENBT2hDOzs7Ozs7Ozs7UUFFb0MsQ0FrRHBDOzs7Ozs7Ozs7UUFFMkMsQ0FpQjNDOzs7Ozs7Ozs7UUFnQjJCLENBR3pCOzs7Ozs7Ozs7UUFqQnlCLENBY3pCO1FBR0UsQ0FDSjs7Ozs7Ozs7O1FBRTZCLENBTTdCOzs7Ozs7Ozs7UUFFdUIsQ0FRdkI7Ozs7Ozs7OztRQTBCb0MsQ0FDOUI7UUFBYSxDQUNmOzs7Ozs7Ozs7UUExQjZCLENBd0I3QjtRQUVFLENBR0E7UUFBYSxDQUduQjs7Ozs7Ozs7O1FBRXFDLENBT3JDOzs7Ozs7OztBQWxRQSxHQUFLLENBQUNhLE1BQU0sR0FBRyxRQUFRLFFBQW1DLENBQUM7UUFBekNDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxLQUFLLFNBQUxBLEtBQUssb0JBQUVDLFFBQVEsRUFBUkEsUUFBUSwwQkFBRyxLQUFLOztJQUNqRCxHQUFLLENBQUNDLE9BQU8sR0FBR2hCLDZDQUFNO0lBQ3RCLEdBQUssQ0FBQ2lCLFVBQVUsR0FBR1Ysc0VBQWE7SUFDaEMsR0FBSyxDQUF5Q04sR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBcERpQixjQUFjLEdBQXdCakIsR0FBZSxLQUFyQ2tCLGlCQUFpQixHQUFLbEIsR0FBZTtJQUM3RCxHQUFLLENBQUNtQixrQkFBa0IsR0FBR1osdURBQVEsQ0FBQyxRQUFRLENBQVBjLENBQUMsRUFBRUMsQ0FBQztRQUFLRCxNQUFNLENBQU5BLENBQUMsQ0FBQ0UsS0FBSyxHQUFHRCxDQUFDLENBQUNDLEtBQUs7O0lBQy9ELEdBQUssQ0FBQ0MsTUFBTSxHQUFHcEIsc0RBQVM7SUFFeEJOLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsRUFBZ0Y7UUFDMUIsRUFBcEQsRUFBRWlCLE9BQU8sS0FBS0MsVUFBVSxDQUFDRCxPQUFPLEVBQUUsQ0FBQztZQUNuQ0MsVUFBVSxDQUFDRCxPQUFPLEdBQUdBLE9BQU87UUFDOUIsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDO1FBQUNBLE9BQU87SUFBQyxDQUFDO0lBRWQsTUFBTSw2RUFDSFUsSUFBSTtRQUFDQyxHQUFHLEVBQUVYLE9BQU87O3dGQUNmVixxREFBSTtnQkFBQ1EsS0FBSyxFQUFFQSxLQUFLOzs7Ozs7d0ZBRWpCYyxNQUFNOztnR0FDSnhCLGtEQUFJO3dCQUFDeUIsSUFBSSxFQUFFcEIsMkRBQVk7OEdBQ3JCc0IsUUFBUTtrSEFDTnJCLGdEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Z0dBSVJzQixTQUFTO2tDQUFFbEIsS0FBSzs7Ozs7O2dHQUdoQm1CLFVBQVU7a0NBQUMsQ0FFWjs7Ozs7Ozs7Ozs7O3dGQUdEQyxPQUFPO2dCQUFDbkIsUUFBUSxFQUFFQSxRQUFROzBCQUN4QkYsUUFBUTs7Ozs7O3dGQUdWc0IsY0FBYztzR0FDWnhCLDhEQUFXOzs7Ozs7Ozs7Ozs7Ozs7O0FBcUJwQixDQUFDO0dBM0RLQyxNQUFNOztRQUVTTCxrRUFBYTtRQUdqQkYsa0RBQVM7OztLQUxwQk8sTUFBTTtBQTZEWiwrREFBZUEsTUFBTTtBQUVyQixHQUFLLENBQUNzQixPQUFPLEdBQUdoQyw2REFBTSxDQUFDLENBQUssMEJBS3hCLFFBQVE7UUFBTGEsUUFBUSxTQUFSQSxRQUFRO0lBQU8sTUFBTSxFQUFMQSxRQUFRLElBQUlaLHNEQUFHOztNQUxoQytCLE9BQU87QUFVYixHQUFLLENBQUNOLE1BQU0sR0FBRzFCLDZEQUFNLENBQUMsQ0FBUTtNQUF4QjBCLE1BQU07QUFlWixHQUFLLENBQUNGLElBQUksR0FBR3hCLDZEQUFNLENBQUMsQ0FBSztNQUFuQndCLElBQUk7QUFNVixHQUFLLENBQUNLLFFBQVEsR0FBRzdCLDZEQUFNLENBQUMsQ0FBRztNQUFyQjZCLFFBQVE7QUFLZCxHQUFLLENBQUNDLFNBQVMsR0FBRzlCLDZEQUFNLENBQUMsQ0FBSztNQUF4QjhCLFNBQVM7QUFTZixHQUFLLENBQUNDLFVBQVUsR0FBRy9CLDZEQUFNLENBQUMsQ0FBUTtNQUE1QitCLFVBQVU7QUFvRGhCLEdBQUssQ0FBQ0csZUFBZSxHQUFHbEMsNkRBQU0sQ0FBQytCLFVBQVU7QUFtQnpDLEdBQUssQ0FBQ0ksSUFBSSxHQUFHbkMsNkRBQU0sQ0FBQyxDQUFLLDBCQWNyQixRQUFRLENBQVBvQyxDQUFDO0lBQUtBLE1BQU0sQ0FBTkEsQ0FBQyxDQUFDQyxNQUFNLElBQUlwQyxzREFBRzs7QUFNMUIsR0FBSyxDQUFDcUMsT0FBTyxHQUFHdEMsNkRBQU0sQ0FBQyxDQUFJO0FBUTNCLEdBQUssQ0FBQ3VDLFVBQVUsR0FBR3RDLHNEQUFHO0FBVXRCLEdBQUssQ0FBQ3VDLFdBQVcsR0FBR3hDLDZEQUFNLENBQUMsQ0FBSSwwQkF3QnpCLFFBQVE7UUFBTHFDLE1BQU0sU0FBTkEsTUFBTTtJQUFPQSxNQUFNLENBQU5BLE1BQU0sSUFBSXBDLHNEQUFHLHNCQUMzQnNDLFVBQVU7R0FJVkEsVUFBVTtBQUtsQixHQUFLLENBQUNOLGNBQWMsR0FBR2pDLDZEQUFNLENBQUMsQ0FBSztNQUE3QmlDLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2dlbmVyYWwvaW5kZXgudHN4P2M2ZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuLy8gU2VydmljZVxuaW1wb3J0IHsgSGVhZCB9IGZyb20gXCJAL2NvbXBvbmVudHMvc2VydmljZVwiXG5pbXBvcnQgeyB1c2VBcHBDb250ZXh0IH0gZnJvbSBcIkAvY29tcG9uZW50cy9jb250ZXh0L0FwcFwiO1xuXG4vLyBDb25zdGFudHNcbmltcG9ydCB7IG5hdiwgc2VjdGlvbiB9IGZyb20gXCJAL2NvbW1vbi9jb25zdGFudHNcIlxuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBMb2dvIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpJztcbmltcG9ydCB7IFBhZ2VDb250cm9sIH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbXBvc2l0ZSdcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlLCBmdWxsc2l6ZSA9IGZhbHNlIH0pID0+IHtcbiAgY29uc3QgcGFnZVJlZiA9IHVzZVJlZigpXG4gIGNvbnN0IGFwcENvbnRleHQgPSB1c2VBcHBDb250ZXh0KClcbiAgY29uc3QgWyBtZW51VmlzaWJpbGl0eSwgc2V0TWVudVZpc2liaWxpdHkgXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBuYXZpZ2F0aW9uRWxlbWVudHMgPSBuYXYuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vINCX0LDQv9C40YHRi9Cy0LDQtdC8INGB0YHRi9C70LrRgyDQvdCwIFBvcHVwQ29udGFpbmVyINC00LvRjyDQtNC+0LHQsNCy0LvQtdC90LjRjyDQtNC+0L8g0Y3Qu9C10LzQtdC90YLQvtCyINGH0LXRgNC10Lcg0L/QvtGA0YLQsNC7XG4gICAgaWYgKHBhZ2VSZWYgJiYgIWFwcENvbnRleHQucGFnZVJlZikge1xuICAgICAgYXBwQ29udGV4dC5wYWdlUmVmID0gcGFnZVJlZlxuICAgIH1cbiAgfSwgWyBwYWdlUmVmIF0pXG4gIFxuICByZXR1cm4gKFxuICAgIDxQYWdlIHJlZj17cGFnZVJlZn0+XG4gICAgICA8SGVhZCB0aXRsZT17dGl0bGV9Lz5cbiAgICAgIFxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPExpbmsgaHJlZj17c2VjdGlvbi5ob21lfT5cbiAgICAgICAgICA8TG9nb0xpbms+XG4gICAgICAgICAgICA8TG9nby8+XG4gICAgICAgICAgPC9Mb2dvTGluaz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICBcbiAgICAgICAgPFBhZ2VUaXRsZT57dGl0bGV9PC9QYWdlVGl0bGU+XG4gICAgICAgIFxuICAgICAgICB7Lyogb25DbGljaz17KCkgPT4gc2V0TWVudVZpc2liaWxpdHkodHJ1ZSkgKi99XG4gICAgICAgIDxNZW51QnV0dG9uPlxuICAgICAgICAgINCY0L3RgtC10YDQsNC60YLQuNCy0L3Ri9C1INC/0YDQvtC10LrRgtGLXG4gICAgICAgIDwvTWVudUJ1dHRvbj5cbiAgICAgIDwvSGVhZGVyPlxuICAgICAgXG4gICAgICA8Q29udGVudCBmdWxsc2l6ZT17ZnVsbHNpemV9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0NvbnRlbnQ+XG4gIFxuICAgICAgPENvbnRyb2xXcmFwcGVyPlxuICAgICAgICA8UGFnZUNvbnRyb2wvPlxuICAgICAgPC9Db250cm9sV3JhcHBlcj5cbiAgXG4gICAgICB7LyogPE1lbnUgYWN0aXZlPXttZW51VmlzaWJpbGl0eX0+XG4gICAgICAgIDxDbG9zZU1lbnVCdXR0b24gb25DbGljaz17KCkgPT4gc2V0TWVudVZpc2liaWxpdHkoZmFsc2UpfS8+XG5cbiAgICAgICAgPE5hdkxpc3Q+XG4gICAgICAgICAge25hdmlnYXRpb25FbGVtZW50cy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxOYXZMaXN0SXRlbVxuICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgYWN0aXZlPXtpdGVtLnBhdGhuYW1lID09PSByb3V0ZXIucGF0aG5hbWV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake2l0ZW0ucGF0aG5hbWV9JHtpdGVtLnNlYXJjaCA/IGAvYCArIGl0ZW0uc2VhcmNoIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gc2V0TWVudVZpc2liaWxpdHkoZmFsc2UpfT57aXRlbS5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9OYXZMaXN0SXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9OYXZMaXN0PlxuICAgICAgPC9NZW51PiAqL31cbiAgICA8L1BhZ2U+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQoJ2RpdicpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIHotaW5kZXg6IDU7XG4gIGhlaWdodDogMTAwJTtcbiAgXG4gICR7KHsgZnVsbHNpemUgfSkgPT4gIWZ1bGxzaXplICYmIGNzc2BcbiAgICBwYWRkaW5nLXRvcDogODhweDtcbiAgYH1cbmBcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkKCdoZWFkZXInKWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREJEQkRCO1xuICBoZWlnaHQ6IDg4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5gXG5cbmNvbnN0IFBhZ2UgPSBzdHlsZWQoJ2RpdicpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmBcblxuY29uc3QgTG9nb0xpbmsgPSBzdHlsZWQoJ2EnKWBcbiAgbWFyZ2luOiAwIDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmBcblxuY29uc3QgUGFnZVRpdGxlID0gc3R5bGVkKCdkaXYnKWBcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI1ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1sZWZ0OiAxNzhweDtcbmBcblxuY29uc3QgTWVudUJ1dHRvbiA9IHN0eWxlZCgnYnV0dG9uJylgXG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMzhweCAxMDVweCAzN3B4IDM4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RUE0RDk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xM2VtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IC4xNXMgZWFzZS1pbi1vdXQgYmFja2dyb3VuZC1jb2xvcjtcbiAgXG4gICY6YWZ0ZXIsXG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogLTcycHg7XG4gICAgdG9wOiA1MCU7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICB9XG4gIFxuICAmOmFmdGVyIHtcbiAgICB3aWR0aDogMjZweDtcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICB9XG4gIFxuICAmOmJlZm9yZSB7XG4gICAgd2lkdGg6IDE5cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgfVxuICBcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENzRBRDtcbiAgfVxuICBcbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTU4OEI7XG4gIH1cbmBcblxuY29uc3QgQ2xvc2VNZW51QnV0dG9uID0gc3R5bGVkKE1lbnVCdXR0b24pYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogODhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgd2lkdGg6IDExNXB4O1xuICBcbiAgJjphZnRlciB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICBcbiAgJjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmBcblxuY29uc3QgTWVudSA9IHN0eWxlZCgnZGl2JylgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjM5NzM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMHZoKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dCAuMXM7XG4gIFxuICAkeyhwKSA9PiBwLmFjdGl2ZSAmJiBjc3NgXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XG4gIGB9XG5gXG5cbmNvbnN0IE5hdkxpc3QgPSBzdHlsZWQoJ3VsJylgXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjEyZW07XG4gIHdpZHRoOiA2NC4zNzYlO1xuYFxuXG5jb25zdCBhY3RpdmVJdGVtID0gY3NzYFxuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgZWFzZS1pbi1vdXQ7XG4gIFxuICAmOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQ7XG4gIH1cbmBcblxuY29uc3QgTmF2TGlzdEl0ZW0gPSBzdHlsZWQoJ2xpJylgXG4gICsgbGkge1xuICAgIG1hcmdpbi10b3A6IDExNHB4O1xuICB9XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgZWFzZS1pbi1vdXQgLjNzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMWVtO1xuICAgICAgcmlnaHQ6IDEwMCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgICB3aWR0aDogOTJweDtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQgLjNzO1xuICAgIH1cbiAgICBcbiAgICAkeyh7IGFjdGl2ZSB9KSA9PiBhY3RpdmUgJiYgY3NzYFxuICAgICAgJHthY3RpdmVJdGVtfVxuICAgIGB9XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICAke2FjdGl2ZUl0ZW19XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IENvbnRyb2xXcmFwcGVyID0gc3R5bGVkKCdkaXYnKWBcbiAgcGFkZGluZzogMCA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIHotaW5kZXg6IDEwOyAqL1xuICByaWdodDogMDtcbiAgYm90dG9tOiA0MHB4O1xuICBsZWZ0OiAwO1xuYFxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwic3R5bGVkIiwiY3NzIiwiTGluayIsInVzZVJvdXRlciIsIkhlYWQiLCJ1c2VBcHBDb250ZXh0IiwibmF2Iiwic2VjdGlvbiIsIkxvZ28iLCJQYWdlQ29udHJvbCIsIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJmdWxsc2l6ZSIsInBhZ2VSZWYiLCJhcHBDb250ZXh0IiwibWVudVZpc2liaWxpdHkiLCJzZXRNZW51VmlzaWJpbGl0eSIsIm5hdmlnYXRpb25FbGVtZW50cyIsInNvcnQiLCJhIiwiYiIsIm9yZGVyIiwicm91dGVyIiwiUGFnZSIsInJlZiIsIkhlYWRlciIsImhyZWYiLCJob21lIiwiTG9nb0xpbmsiLCJQYWdlVGl0bGUiLCJNZW51QnV0dG9uIiwiQ29udGVudCIsIkNvbnRyb2xXcmFwcGVyIiwiQ2xvc2VNZW51QnV0dG9uIiwiTWVudSIsInAiLCJhY3RpdmUiLCJOYXZMaXN0IiwiYWN0aXZlSXRlbSIsIk5hdkxpc3RJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/layout/general/index.tsx\n");

/***/ })

});