webpackHotUpdate_N_E("pages/posts",{

/***/ "./Components/Nav.jsx":
/*!****************************!*\
  !*** ./Components/Nav.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Nav_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav.module.scss */ "./Components/Nav.module.scss");
/* harmony import */ var _Nav_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Nav_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\StevenDev\\Documents\\git\\Mhomepage\\web\\Components\\Nav.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Nav = function Nav(props) {
  var current = props.current;
  console.log(current);
  return __jsx("div", {
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nav,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nav_wrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("button", {
    id: "book",
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nav_button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "http://www.secure-booker.com/angelamichael/MakeAppointment/Search.aspx",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 54
    }
  }, "Book")), __jsx("button", {
    id: "home",
    className: "".concat(_Nav_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nav_button, " ").concat(current === 'home' ? 'current' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "Home")), __jsx("button", {
    id: "blog",
    className: "".concat(_Nav_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nav_button, " ").concat(current === 'blog' ? 'current' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "/posts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "Blog"))));
};

_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav); //<button className="bottom-bar-button"onClick={()=>props.handle("reviews")}>Reviews</button>

var _c;

$RefreshReg$(_c, "Nav");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9OYXYuanN4Il0sIm5hbWVzIjpbIk5hdiIsInByb3BzIiwiY3VycmVudCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJuYXYiLCJuYXZfd3JhcHBlciIsIm5hdl9idXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ2RDLE9BRGMsR0FDSEQsS0FERyxDQUNkQyxPQURjO0FBRXJCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBLFNBQ0E7QUFBSyxhQUFTLEVBQUdHLHVEQUFNLENBQUNDLEdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsdURBQU0sQ0FBQ0UsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQVEsTUFBRSxFQUFDLE1BQVg7QUFBa0IsYUFBUyxFQUFFRix1REFBTSxDQUFDRyxVQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlEO0FBQUcsUUFBSSxFQUFDLHdFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBakQsQ0FEQSxFQUVBO0FBQVEsTUFBRSxFQUFDLE1BQVg7QUFBa0IsYUFBUyxZQUFLSCx1REFBTSxDQUFDRyxVQUFaLGNBQTBCTixPQUFPLEtBQUcsTUFBVixHQUFrQixTQUFsQixHQUE2QixFQUF2RCxDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FGQSxFQUlBO0FBQVEsTUFBRSxFQUFDLE1BQVg7QUFBa0IsYUFBUyxZQUFLRyx1REFBTSxDQUFDRyxVQUFaLGNBQTBCTixPQUFPLEtBQUcsTUFBVixHQUFrQixTQUFsQixHQUE2QixFQUF2RCxDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsUUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FKQSxDQURGLENBREE7QUFZRCxDQWZEOztLQUFNRixHO0FBaUJTQSxrRUFBZixFLENBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuZTRmMTE3NmIwNzhkZTkxMDdkYTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9OYXYubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IE5hdiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtjdXJyZW50fSA9IHByb3BzO1xyXG4gIGNvbnNvbGUubG9nKGN1cnJlbnQpXHJcbiAgcmV0dXJuKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSB7c3R5bGVzLm5hdn0gPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZfd3JhcHBlcn0+XHJcbiAgICA8YnV0dG9uIGlkPVwiYm9va1wiIGNsYXNzTmFtZT17c3R5bGVzLm5hdl9idXR0b24gfT48YSBocmVmPSdodHRwOi8vd3d3LnNlY3VyZS1ib29rZXIuY29tL2FuZ2VsYW1pY2hhZWwvTWFrZUFwcG9pbnRtZW50L1NlYXJjaC5hc3B4Jz5Cb29rPC9hPjwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBpZD1cImhvbWVcIiBjbGFzc05hbWU9e2Ake3N0eWxlcy5uYXZfYnV0dG9ufSAke2N1cnJlbnQ9PT0naG9tZSc/ICdjdXJyZW50JzogJyd9YH0+XHJcbiAgICAgIDxhIGhyZWY9Jy8nPkhvbWU8L2E+PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGlkPVwiYmxvZ1wiIGNsYXNzTmFtZT17YCR7c3R5bGVzLm5hdl9idXR0b259ICR7Y3VycmVudD09PSdibG9nJz8gJ2N1cnJlbnQnOiAnJ31gfT5cclxuICAgICAgPGEgaHJlZj0nL3Bvc3RzJz5CbG9nPC9hPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjtcclxuXHJcbi8vPGJ1dHRvbiBjbGFzc05hbWU9XCJib3R0b20tYmFyLWJ1dHRvblwib25DbGljaz17KCk9PnByb3BzLmhhbmRsZShcInJldmlld3NcIil9PlJldmlld3M8L2J1dHRvbj4iXSwic291cmNlUm9vdCI6IiJ9