"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/ContactList/ContactList.js":
/*!***************************************************!*\
  !*** ./src/components/ContactList/ContactList.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/core/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ContactList() {\n    _s();\n    const fetcher = function() {\n        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n            args[_key] = arguments[_key];\n        }\n        return fetch(...args).then((res)=>res.json());\n    };\n    const { data, error, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"http://localhost:3000/api/contacts\", fetcher);\n    console.log(data);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to fetch data\"\n    }, void 0, false, {\n        fileName: \"/Users/z/Developer/Projects/NODE/addressbook/frontend/src/components/ContactList/ContactList.js\",\n        lineNumber: 16,\n        columnNumber: 21\n    }, this);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading data\"\n    }, void 0, false, {\n        fileName: \"/Users/z/Developer/Projects/NODE/addressbook/frontend/src/components/ContactList/ContactList.js\",\n        lineNumber: 17,\n        columnNumber: 25\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"First name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/z/Developer/Projects/NODE/addressbook/frontend/src/components/ContactList/ContactList.js\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"First name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/z/Developer/Projects/NODE/addressbook/frontend/src/components/ContactList/ContactList.js\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/z/Developer/Projects/NODE/addressbook/frontend/src/components/ContactList/ContactList.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/z/Developer/Projects/NODE/addressbook/frontend/src/components/ContactList/ContactList.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/z/Developer/Projects/NODE/addressbook/frontend/src/components/ContactList/ContactList.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data.map((param)=>{\n                    let { first_name } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"First_name: \",\n                            first_name,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/z/Developer/Projects/NODE/addressbook/frontend/src/components/ContactList/ContactList.js\",\n                        lineNumber: 31,\n                        columnNumber: 18\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/z/Developer/Projects/NODE/addressbook/frontend/src/components/ContactList/ContactList.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ContactList, \"3etLDUffADz62tD7g9gJKxYxEy4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = ContactList;\nvar _c;\n$RefreshReg$(_c, \"ContactList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3RMaXN0L0NvbnRhY3RMaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFMEI7QUFDRDtBQUVWLFNBQVNFOztJQUN0QixNQUFNQyxVQUFVO3lDQUFJQztZQUFBQTs7ZUFBU0MsU0FBU0QsTUFBTUUsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFBRTtJQUVwRSxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUUsR0FBR1YsK0NBQU1BLENBQ3ZDLHNDQUNBRTtJQUdGUyxRQUFRQyxHQUFHLENBQUNKO0lBRVosSUFBSUMsT0FBTyxxQkFBTyw4REFBQ0k7a0JBQUk7Ozs7OztJQUN2QixJQUFJSCxXQUFXLHFCQUFPLDhEQUFDRztrQkFBSTs7Ozs7O0lBRTNCLHFCQUNFOzswQkFDRSw4REFBQ0M7MEJBQ0MsNEVBQUNDOzhCQUNDLDRFQUFDQzs7MENBQ0MsOERBQUNDOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlWLDhEQUFDSjswQkFDRUwsS0FBS1UsR0FBRyxDQUFDO3dCQUFDLEVBQUVDLFVBQVUsRUFBRTtvQkFDdkIscUJBQU8sOERBQUNOOzs0QkFBSTs0QkFBYU07NEJBQVc7Ozs7Ozs7Z0JBQ3RDOzs7Ozs7OztBQUlSO0dBOUJ3QmxCOztRQUdhRCwyQ0FBTUE7OztLQUhuQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdExpc3QvQ29udGFjdExpc3QuanM/NTQxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RMaXN0KCkge1xuICBjb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VTV1IoXG4gICAgXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2NvbnRhY3RzXCIsXG4gICAgZmV0Y2hlclxuICApO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGZldGNoIGRhdGE8L2Rpdj47XG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcgZGF0YTwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+Rmlyc3QgbmFtZTwvdGg+XG4gICAgICAgICAgICA8dGg+Rmlyc3QgbmFtZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgIDwvdGFibGU+XG4gICAgICA8ZGl2PlxuICAgICAgICB7ZGF0YS5tYXAoKHsgZmlyc3RfbmFtZSB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxkaXY+Rmlyc3RfbmFtZToge2ZpcnN0X25hbWV9IDwvZGl2PjtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVNXUiIsIkNvbnRhY3RMaXN0IiwiZmV0Y2hlciIsImFyZ3MiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImVycm9yIiwiaXNMb2FkaW5nIiwiY29uc29sZSIsImxvZyIsImRpdiIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwibWFwIiwiZmlyc3RfbmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ContactList/ContactList.js\n"));

/***/ })

});