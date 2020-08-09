webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/TileBarItem.jsx":
/*!************************************!*\
  !*** ./Components/TileBarItem.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TilebarItem_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TilebarItem.module.scss */ "./Components/TilebarItem.module.scss");
/* harmony import */ var _TilebarItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TilebarItem_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\StevenDev\\Documents\\git\\Mhomepage\\web\\Components\\TileBarItem.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var TileBarItem = function TileBarItem(props) {
  var isLink = props.isLink,
      linkTo = props.linkTo,
      items = props.items;
  return __jsx("div", {
    className: _TilebarItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, __jsx("h2", {
    className: _TilebarItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card_title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, props.text), __jsx("div", {
    className: _TilebarItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.lower_titles_wrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, isLink ? items.map(function (item) {
    return __jsx("a", {
      key: item + 1,
      className: (_TilebarItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.lower_titles, _TilebarItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.lower_titles_link),
      href: linkTo,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 22
      }
    }, item);
  }) : items.map(function (item) {
    return __jsx("p", {
      key: item + 1,
      className: _TilebarItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.lower_titles,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 22
      }
    }, item);
  })), props.hasOwnProperty('image') ? __jsx("img", {
    className: _TilebarItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card_image,
    src: props.image,
    alt: "woman enjoying time at spa",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 37
    }
  }) : null);
};

_c = TileBarItem;
/* harmony default export */ __webpack_exports__["default"] = (TileBarItem);

var _c;

$RefreshReg$(_c, "TileBarItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9UaWxlQmFySXRlbS5qc3giXSwibmFtZXMiOlsiVGlsZUJhckl0ZW0iLCJwcm9wcyIsImlzTGluayIsImxpbmtUbyIsIml0ZW1zIiwic3R5bGVzIiwiY2FyZCIsImNhcmRfdGl0bGUiLCJ0ZXh0IiwibG93ZXJfdGl0bGVzX3dyYXBwZXIiLCJtYXAiLCJpdGVtIiwibG93ZXJfdGl0bGVzIiwibG93ZXJfdGl0bGVzX2xpbmsiLCJoYXNPd25Qcm9wZXJ0eSIsImNhcmRfaW1hZ2UiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFFdkJDLE1BRnVCLEdBRUVELEtBRkYsQ0FFdkJDLE1BRnVCO0FBQUEsTUFFZkMsTUFGZSxHQUVFRixLQUZGLENBRWZFLE1BRmU7QUFBQSxNQUVQQyxLQUZPLEdBRUVILEtBRkYsQ0FFUEcsS0FGTztBQUk3QixTQUNBO0FBQUssYUFBUyxFQUFFQywrREFBTSxDQUFDQyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUVELCtEQUFNLENBQUNFLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUNOLEtBQUssQ0FBQ08sSUFBekMsQ0FERixFQUVFO0FBQUssYUFBUyxFQUFFSCwrREFBTSxDQUFDSSxvQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDUCxNQUFNLEdBQ1BFLEtBQUssQ0FBQ00sR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSxXQUFHO0FBQUcsU0FBRyxFQUFFQSxJQUFJLEdBQUMsQ0FBYjtBQUFnQixlQUFTLEdBQUVOLCtEQUFNLENBQUNPLFlBQVAsRUFBcUJQLCtEQUFNLENBQUNRLGlCQUE5QixDQUF6QjtBQUEwRSxVQUFJLEVBQUVWLE1BQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBeUZRLElBQXpGLENBQUg7QUFBQSxHQUFkLENBRE8sR0FFUFAsS0FBSyxDQUFDTSxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLFdBQUc7QUFBRyxTQUFHLEVBQUVBLElBQUksR0FBQyxDQUFiO0FBQWdCLGVBQVMsRUFBRU4sK0RBQU0sQ0FBQ08sWUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFpREQsSUFBakQsQ0FBSDtBQUFBLEdBQWQsQ0FIQSxDQUZGLEVBT0dWLEtBQUssQ0FBQ2EsY0FBTixDQUFxQixPQUFyQixJQUErQjtBQUFLLGFBQVMsRUFBRVQsK0RBQU0sQ0FBQ1UsVUFBdkI7QUFBbUMsT0FBRyxFQUFFZCxLQUFLLENBQUNlLEtBQTlDO0FBQXFELE9BQUcsRUFBQyw0QkFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUEvQixHQUF3SCxJQVAzSCxDQURBO0FBVUQsQ0FkRDs7S0FBTWhCLFc7QUFnQlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZmZjlmZWYyZWQ4N2M3ZDZhNjc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVGlsZWJhckl0ZW0ubW9kdWxlLnNjc3NcIlxyXG5cclxuY29uc3QgVGlsZUJhckl0ZW0gPSAocHJvcHMpID0+IHtcclxuXHJcbiBjb25zdCB7aXNMaW5rLCBsaW5rVG8sIGl0ZW1zfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZF90aXRsZX0+e3Byb3BzLnRleHR9PC9oMj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG93ZXJfdGl0bGVzX3dyYXBwZXJ9PlxyXG4gICAge2lzTGluayA/IFxyXG4gICAgaXRlbXMubWFwKGl0ZW09PiA8YSBrZXk9e2l0ZW0rMX0gY2xhc3NOYW1lPXtzdHlsZXMubG93ZXJfdGl0bGVzLCBzdHlsZXMubG93ZXJfdGl0bGVzX2xpbmt9IGhyZWY9e2xpbmtUb30+e2l0ZW19PC9hPik6XHJcbiAgICBpdGVtcy5tYXAoaXRlbT0+IDxwIGtleT17aXRlbSsxfSBjbGFzc05hbWU9e3N0eWxlcy5sb3dlcl90aXRsZXN9PntpdGVtfTwvcD4pfVxyXG4gICAgPC9kaXY+XHJcbiAgICB7cHJvcHMuaGFzT3duUHJvcGVydHkoJ2ltYWdlJyk/IDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZF9pbWFnZX0gc3JjPXtwcm9wcy5pbWFnZX0gYWx0PVwid29tYW4gZW5qb3lpbmcgdGltZSBhdCBzcGFcIi8+OiBudWxsfVxyXG4gIDwvZGl2PilcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbGVCYXJJdGVtOyJdLCJzb3VyY2VSb290IjoiIn0=