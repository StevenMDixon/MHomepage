webpackHotUpdate_N_E("pages/index",{

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
    className: (_Nav_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nav_button, "".concat(current == 'blog' ? 'current' : '')),
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
      columnNumber: 89
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9OYXYuanN4Il0sIm5hbWVzIjpbIkJvdHRvbUJhciIsInByb3BzIiwiY3VycmVudCIsInN0eWxlcyIsIm5hdiIsIm5hdl93cmFwcGVyIiwibmF2X2J1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDcEJDLE9BRG9CLEdBQ1RELEtBRFMsQ0FDcEJDLE9BRG9CO0FBRTNCLFNBQ0E7QUFBSyxhQUFTLEVBQUdDLHVEQUFNLENBQUNDLEdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsdURBQU0sQ0FBQ0UsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQVEsTUFBRSxFQUFDLE1BQVg7QUFBa0IsYUFBUyxHQUFFRix1REFBTSxDQUFDRyxVQUFQLFlBQXNCSixPQUFPLElBQUUsRUFBVCxHQUFhLFNBQWIsR0FBd0IsRUFBOUMsQ0FBRixDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlGO0FBQUcsUUFBSSxFQUFDLHdFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBakYsQ0FEQSxFQUVBO0FBQVEsTUFBRSxFQUFDLE1BQVg7QUFBa0IsYUFBUyxHQUFFQyx1REFBTSxDQUFDRyxVQUFQLFlBQXNCSixPQUFPLElBQUUsTUFBVCxHQUFpQixTQUFqQixHQUE0QixFQUFsRCxDQUFGLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUYsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBckYsQ0FGQSxFQUdBO0FBQVEsTUFBRSxFQUFDLE1BQVg7QUFBa0IsYUFBUyxHQUFFQyx1REFBTSxDQUFDRyxVQUFQLFlBQXFCSixPQUFPLElBQUUsTUFBVCxHQUFpQixTQUFqQixHQUE0QixFQUFqRCxDQUFGLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0YsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBcEYsQ0FIQSxDQURGLENBREE7QUFTRCxDQVhEOztLQUFNRixTO0FBYVNBLHdFQUFmLEUsQ0FFQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMjJhNDMyODY2Y2ZiYTgyMTA4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL05hdi5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgQm90dG9tQmFyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge2N1cnJlbnR9ID0gcHJvcHM7XHJcbiAgcmV0dXJuKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSB7c3R5bGVzLm5hdn0gPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZfd3JhcHBlcn0+XHJcbiAgICA8YnV0dG9uIGlkPVwiYm9va1wiIGNsYXNzTmFtZT17c3R5bGVzLm5hdl9idXR0b24sIGAke2N1cnJlbnQ9PScnPyAnY3VycmVudCc6ICcnfWB9PjxhIGhyZWY9J2h0dHA6Ly93d3cuc2VjdXJlLWJvb2tlci5jb20vYW5nZWxhbWljaGFlbC9NYWtlQXBwb2ludG1lbnQvU2VhcmNoLmFzcHgnPkJvb2s8L2E+PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGlkPVwiaG9tZVwiIGNsYXNzTmFtZT17c3R5bGVzLm5hdl9idXR0b24gLGAke2N1cnJlbnQ9PSdob21lJz8gJ2N1cnJlbnQnOiAnJ31gfT48TGluayBocmVmPScvJz5Ib21lPC9MaW5rPjwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBpZD1cImJsb2dcIiBjbGFzc05hbWU9e3N0eWxlcy5uYXZfYnV0dG9uLGAke2N1cnJlbnQ9PSdibG9nJz8gJ2N1cnJlbnQnOiAnJ31gfT48TGluayBocmVmPScvcG9zdHMnPkJsb2c8L0xpbms+PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3R0b21CYXI7XHJcblxyXG4vLzxidXR0b24gY2xhc3NOYW1lPVwiYm90dG9tLWJhci1idXR0b25cIm9uQ2xpY2s9eygpPT5wcm9wcy5oYW5kbGUoXCJyZXZpZXdzXCIpfT5SZXZpZXdzPC9idXR0b24+Il0sInNvdXJjZVJvb3QiOiIifQ==