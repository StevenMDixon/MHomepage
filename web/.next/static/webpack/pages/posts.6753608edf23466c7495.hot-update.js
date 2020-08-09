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



var BottomBar = function BottomBar(props) {
  var current = props.current;
  return __jsx("div", {
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nav,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nav_wrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("button", {
    id: "book",
    className: (_Nav_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nav_button, "".concat(current == '' ? 'current' : '')),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "http://www.secure-booker.com/angelamichael/MakeAppointment/Search.aspx",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 86
    }
  }, "Book")), __jsx("button", {
    id: "home",
    className: (_Nav_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nav_button, "".concat(current == 'home' ? 'current' : '')),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 90
    }
  }, "Home")), __jsx("button", {
    id: "blog",
    className: (_Nav_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nav_button, "bottom-bar-button ".concat(current == 'blog' ? 'current' : '')),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/posts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 107
    }
  }, "Blog"))));
};

_c = BottomBar;
/* harmony default export */ __webpack_exports__["default"] = (BottomBar); //<button className="bottom-bar-button"onClick={()=>props.handle("reviews")}>Reviews</button>

var _c;

$RefreshReg$(_c, "BottomBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9OYXYuanN4Il0sIm5hbWVzIjpbIkJvdHRvbUJhciIsInByb3BzIiwiY3VycmVudCIsInN0eWxlcyIsIm5hdiIsIm5hdl93cmFwcGVyIiwibmF2X2J1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDcEJDLE9BRG9CLEdBQ1RELEtBRFMsQ0FDcEJDLE9BRG9CO0FBRTNCLFNBQ0E7QUFBSyxhQUFTLEVBQUdDLHVEQUFNLENBQUNDLEdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsdURBQU0sQ0FBQ0UsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQVEsTUFBRSxFQUFDLE1BQVg7QUFBa0IsYUFBUyxHQUFFRix1REFBTSxDQUFDRyxVQUFQLFlBQXNCSixPQUFPLElBQUUsRUFBVCxHQUFhLFNBQWIsR0FBd0IsRUFBOUMsQ0FBRixDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlGO0FBQUcsUUFBSSxFQUFDLHdFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBakYsQ0FEQSxFQUVBO0FBQVEsTUFBRSxFQUFDLE1BQVg7QUFBa0IsYUFBUyxHQUFFQyx1REFBTSxDQUFDRyxVQUFQLFlBQXNCSixPQUFPLElBQUUsTUFBVCxHQUFpQixTQUFqQixHQUE0QixFQUFsRCxDQUFGLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUYsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBckYsQ0FGQSxFQUdBO0FBQVEsTUFBRSxFQUFDLE1BQVg7QUFBa0IsYUFBUyxHQUFFQyx1REFBTSxDQUFDRyxVQUFQLDhCQUF1Q0osT0FBTyxJQUFFLE1BQVQsR0FBaUIsU0FBakIsR0FBNEIsRUFBbkUsQ0FBRixDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNHLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXRHLENBSEEsQ0FERixDQURBO0FBU0QsQ0FYRDs7S0FBTUYsUztBQWFTQSx3RUFBZixFLENBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuNjc1MzYwOGVkZjIzNDY2Yzc0OTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9OYXYubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IEJvdHRvbUJhciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtjdXJyZW50fSA9IHByb3BzO1xyXG4gIHJldHVybihcclxuICA8ZGl2IGNsYXNzTmFtZT0ge3N0eWxlcy5uYXZ9ID5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2X3dyYXBwZXJ9PlxyXG4gICAgPGJ1dHRvbiBpZD1cImJvb2tcIiBjbGFzc05hbWU9e3N0eWxlcy5uYXZfYnV0dG9uLCBgJHtjdXJyZW50PT0nJz8gJ2N1cnJlbnQnOiAnJ31gfT48YSBocmVmPSdodHRwOi8vd3d3LnNlY3VyZS1ib29rZXIuY29tL2FuZ2VsYW1pY2hhZWwvTWFrZUFwcG9pbnRtZW50L1NlYXJjaC5hc3B4Jz5Cb29rPC9hPjwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBpZD1cImhvbWVcIiBjbGFzc05hbWU9e3N0eWxlcy5uYXZfYnV0dG9uICxgJHtjdXJyZW50PT0naG9tZSc/ICdjdXJyZW50JzogJyd9YH0+PExpbmsgaHJlZj0nLyc+SG9tZTwvTGluaz48L2J1dHRvbj5cclxuICAgIDxidXR0b24gaWQ9XCJibG9nXCIgY2xhc3NOYW1lPXtzdHlsZXMubmF2X2J1dHRvbixgYm90dG9tLWJhci1idXR0b24gJHtjdXJyZW50PT0nYmxvZyc/ICdjdXJyZW50JzogJyd9YH0+PExpbmsgaHJlZj0nL3Bvc3RzJz5CbG9nPC9MaW5rPjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm90dG9tQmFyO1xyXG5cclxuLy88YnV0dG9uIGNsYXNzTmFtZT1cImJvdHRvbS1iYXItYnV0dG9uXCJvbkNsaWNrPXsoKT0+cHJvcHMuaGFuZGxlKFwicmV2aWV3c1wiKX0+UmV2aWV3czwvYnV0dG9uPiJdLCJzb3VyY2VSb290IjoiIn0=