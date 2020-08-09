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
    className: "bottom-bar-button ".concat(current == '' ? 'current' : ''),
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
      columnNumber: 85
    }
  }, "Book")), __jsx("button", {
    id: "home",
    className: "bottom-bar-button ".concat(current == 'home' ? 'current' : ''),
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
      columnNumber: 89
    }
  }, "Home")), __jsx("button", {
    id: "blog",
    className: "bottom-bar-button ".concat(current == 'blog' ? 'current' : ''),
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

/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./Components/Nav.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Components/Nav.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".Nav_nav__2Y9In {\n  cursor: default;\n  width: 100%;\n  text-align: center;\n  color: #353638;\n  display: flex;\n  flex-direction: column;\n  flex: 3 1;\n  margin-bottom: 1em;\n}\n\n.Nav_nav_wrapper__1p8Te {\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: space-around;\n}\n\n.Nav_current__xfpOj {\n  text-decoration: underline;\n}\n\n.Nav_bottom_bar_button__1ZGuo {\n  display: block;\n  cursor: pointer;\n  color: #353638;\n  background-color: transparent;\n  border: 1px solid transparent;\n  flex-basis: 30%;\n  transition: 0.3s ease-in;\n  outline: 0;\n}\n.Nav_bottom_bar_button__1ZGuo a {\n  font-size: 2em;\n  color: #353638;\n  text-decoration: none;\n  font-family: \"Grand Hotel\";\n}", "",{"version":3,"sources":["C:/Users/StevenDev/Documents/git/Mhomepage/web/Components/Nav.module.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,WAAA;EACA,kBAAA;EACA,cAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,kBAAA;AACF;;AAEA;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,yBAAA;AACF;;AAEA;EACE,0BAAA;AACF;;AAEA;EACE,cAAA;EACA,eAAA;EACA,cAAA;EACA,6BAAA;EACA,6BAAA;EACA,eAAA;EACA,wBAAA;EACA,UAAA;AACF;AAAE;EACE,cAAA;EACA,cAAA;EACA,qBAAA;EACA,0BAAA;AAEJ","file":"Nav.module.scss","sourcesContent":[".nav{\r\n  cursor: default;\r\n  width: 100%;\r\n  text-align: center;\r\n  color: #353638;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 3;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.nav_wrapper{\r\n  margin-top: 1rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: space-around;\r\n}\r\n\r\n.current {\r\n  text-decoration: underline;\r\n}\r\n\r\n.bottom_bar_button{\r\n  display: block;\r\n  cursor: pointer;\r\n  color: #353638;\r\n  background-color: transparent;\r\n  border: 1px solid transparent;\r\n  flex-basis: 30%;\r\n  transition: .3s ease-in;\r\n  outline:0;\r\n  a {\r\n    font-size: 2em;\r\n    color: #353638;\r\n    text-decoration: none;\r\n    font-family: 'Grand Hotel';\r\n  }\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"nav": "Nav_nav__2Y9In",
	"nav_wrapper": "Nav_nav_wrapper__1p8Te",
	"current": "Nav_current__xfpOj",
	"bottom_bar_button": "Nav_bottom_bar_button__1ZGuo"
};
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9OYXYuanN4Iiwid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL05hdi5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6WyJCb3R0b21CYXIiLCJwcm9wcyIsImN1cnJlbnQiLCJzdHlsZXMiLCJuYXYiLCJuYXZfd3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDcEJDLE9BRG9CLEdBQ1RELEtBRFMsQ0FDcEJDLE9BRG9CO0FBRTNCLFNBQ0E7QUFBSyxhQUFTLEVBQUdDLHVEQUFNLENBQUNDLEdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsdURBQU0sQ0FBQ0UsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQVEsTUFBRSxFQUFDLE1BQVg7QUFBa0IsYUFBUyw4QkFBdUJILE9BQU8sSUFBRSxFQUFULEdBQWEsU0FBYixHQUF3QixFQUEvQyxDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdGO0FBQUcsUUFBSSxFQUFDLHdFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBaEYsQ0FEQSxFQUVBO0FBQVEsTUFBRSxFQUFDLE1BQVg7QUFBa0IsYUFBUyw4QkFBdUJBLE9BQU8sSUFBRSxNQUFULEdBQWlCLFNBQWpCLEdBQTRCLEVBQW5ELENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0YsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBcEYsQ0FGQSxFQUdBO0FBQVEsTUFBRSxFQUFDLE1BQVg7QUFBa0IsYUFBUyw4QkFBdUJBLE9BQU8sSUFBRSxNQUFULEdBQWlCLFNBQWpCLEdBQTRCLEVBQW5ELENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0YsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBcEYsQ0FIQSxDQURGLENBREE7QUFTRCxDQVhEOztLQUFNRixTO0FBYVNBLHdFQUFmLEUsQ0FFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMseUlBQWtFO0FBQzVHO0FBQ0E7QUFDQSxjQUFjLFFBQVMsb0JBQW9CLG9CQUFvQixnQkFBZ0IsdUJBQXVCLG1CQUFtQixrQkFBa0IsMkJBQTJCLGNBQWMsdUJBQXVCLEdBQUcsNkJBQTZCLHFCQUFxQixrQkFBa0Isd0JBQXdCLDRCQUE0Qiw4QkFBOEIsR0FBRyx5QkFBeUIsK0JBQStCLEdBQUcsbUNBQW1DLG1CQUFtQixvQkFBb0IsbUJBQW1CLGtDQUFrQyxrQ0FBa0Msb0JBQW9CLDZCQUE2QixlQUFlLEdBQUcsbUNBQW1DLG1CQUFtQixtQkFBbUIsMEJBQTBCLGlDQUFpQyxHQUFHLE9BQU8sZ0lBQWdJLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsdURBQXVELHNCQUFzQixrQkFBa0IseUJBQXlCLHFCQUFxQixvQkFBb0IsNkJBQTZCLGNBQWMseUJBQXlCLEtBQUsscUJBQXFCLHVCQUF1QixvQkFBb0IsMEJBQTBCLDhCQUE4QixnQ0FBZ0MsS0FBSyxrQkFBa0IsaUNBQWlDLEtBQUssMkJBQTJCLHFCQUFxQixzQkFBc0IscUJBQXFCLG9DQUFvQyxvQ0FBb0Msc0JBQXNCLDhCQUE4QixnQkFBZ0IsU0FBUyx1QkFBdUIsdUJBQXVCLDhCQUE4QixtQ0FBbUMsT0FBTyxLQUFLLE9BQU87QUFDamdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuYzkwNzY2OTEwODAwNTk3MDY1YmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9OYXYubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IEJvdHRvbUJhciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtjdXJyZW50fSA9IHByb3BzO1xyXG4gIHJldHVybihcclxuICA8ZGl2IGNsYXNzTmFtZT0ge3N0eWxlcy5uYXZ9ID5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2X3dyYXBwZXJ9PlxyXG4gICAgPGJ1dHRvbiBpZD1cImJvb2tcIiBjbGFzc05hbWU9e2Bib3R0b20tYmFyLWJ1dHRvbiAke2N1cnJlbnQ9PScnPyAnY3VycmVudCc6ICcnfWB9PjxhIGhyZWY9J2h0dHA6Ly93d3cuc2VjdXJlLWJvb2tlci5jb20vYW5nZWxhbWljaGFlbC9NYWtlQXBwb2ludG1lbnQvU2VhcmNoLmFzcHgnPkJvb2s8L2E+PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGlkPVwiaG9tZVwiIGNsYXNzTmFtZT17YGJvdHRvbS1iYXItYnV0dG9uICR7Y3VycmVudD09J2hvbWUnPyAnY3VycmVudCc6ICcnfWB9PjxMaW5rIGhyZWY9Jy8nPkhvbWU8L0xpbms+PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGlkPVwiYmxvZ1wiIGNsYXNzTmFtZT17YGJvdHRvbS1iYXItYnV0dG9uICR7Y3VycmVudD09J2Jsb2cnPyAnY3VycmVudCc6ICcnfWB9PjxMaW5rIGhyZWY9Jy9wb3N0cyc+QmxvZzwvTGluaz48L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvdHRvbUJhcjtcclxuXHJcbi8vPGJ1dHRvbiBjbGFzc05hbWU9XCJib3R0b20tYmFyLWJ1dHRvblwib25DbGljaz17KCk9PnByb3BzLmhhbmRsZShcInJldmlld3NcIil9PlJldmlld3M8L2J1dHRvbj4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuTmF2X25hdl9fMlk5SW4ge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzM1MzYzODtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMyAxO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4uTmF2X25hdl93cmFwcGVyX18xcDhUZSB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5OYXZfY3VycmVudF9feGZwT2oge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5OYXZfYm90dG9tX2Jhcl9idXR0b25fXzFaR3VvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICMzNTM2Mzg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgZmxleC1iYXNpczogMzAlO1xcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluO1xcbiAgb3V0bGluZTogMDtcXG59XFxuLk5hdl9ib3R0b21fYmFyX2J1dHRvbl9fMVpHdW8gYSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGNvbG9yOiAjMzUzNjM4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmFuZCBIb3RlbFxcXCI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L1VzZXJzL1N0ZXZlbkRldi9Eb2N1bWVudHMvZ2l0L01ob21lcGFnZS93ZWIvQ29tcG9uZW50cy9OYXYubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7QUFDRjtBQUFFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0FBRUpcIixcImZpbGVcIjpcIk5hdi5tb2R1bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubmF2e1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogIzM1MzYzODtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleDogMztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdl93cmFwcGVye1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbV9iYXJfYnV0dG9ue1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogIzM1MzYzODtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBmbGV4LWJhc2lzOiAzMCU7XFxyXFxuICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbjtcXHJcXG4gIG91dGxpbmU6MDtcXHJcXG4gIGEge1xcclxcbiAgICBmb250LXNpemU6IDJlbTtcXHJcXG4gICAgY29sb3I6ICMzNTM2Mzg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdHcmFuZCBIb3RlbCc7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIm5hdlwiOiBcIk5hdl9uYXZfXzJZOUluXCIsXG5cdFwibmF2X3dyYXBwZXJcIjogXCJOYXZfbmF2X3dyYXBwZXJfXzFwOFRlXCIsXG5cdFwiY3VycmVudFwiOiBcIk5hdl9jdXJyZW50X194ZnBPalwiLFxuXHRcImJvdHRvbV9iYXJfYnV0dG9uXCI6IFwiTmF2X2JvdHRvbV9iYXJfYnV0dG9uX18xWkd1b1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==