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
      className: "lower-titles lower-titles-link",
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
      className: "lower-titles",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 22
      }
    }, item);
  })), props.hasOwnProperty('image') ? __jsx("img", {
    className: "card-image",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9UaWxlQmFySXRlbS5qc3giXSwibmFtZXMiOlsiVGlsZUJhckl0ZW0iLCJwcm9wcyIsImlzTGluayIsImxpbmtUbyIsIml0ZW1zIiwic3R5bGVzIiwiY2FyZCIsImNhcmRfdGl0bGUiLCJ0ZXh0IiwibG93ZXJfdGl0bGVzX3dyYXBwZXIiLCJtYXAiLCJpdGVtIiwiaGFzT3duUHJvcGVydHkiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFFdkJDLE1BRnVCLEdBRUVELEtBRkYsQ0FFdkJDLE1BRnVCO0FBQUEsTUFFZkMsTUFGZSxHQUVFRixLQUZGLENBRWZFLE1BRmU7QUFBQSxNQUVQQyxLQUZPLEdBRUVILEtBRkYsQ0FFUEcsS0FGTztBQUk3QixTQUNBO0FBQUssYUFBUyxFQUFFQywrREFBTSxDQUFDQyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUVELCtEQUFNLENBQUNFLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUNOLEtBQUssQ0FBQ08sSUFBekMsQ0FERixFQUVFO0FBQUssYUFBUyxFQUFFSCwrREFBTSxDQUFDSSxvQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDUCxNQUFNLEdBQ1BFLEtBQUssQ0FBQ00sR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSxXQUFHO0FBQUcsU0FBRyxFQUFFQSxJQUFJLEdBQUMsQ0FBYjtBQUFnQixlQUFTLEVBQUMsZ0NBQTFCO0FBQTJELFVBQUksRUFBRVIsTUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEwRVEsSUFBMUUsQ0FBSDtBQUFBLEdBQWQsQ0FETyxHQUVQUCxLQUFLLENBQUNNLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsV0FBRztBQUFHLFNBQUcsRUFBRUEsSUFBSSxHQUFDLENBQWI7QUFBZ0IsZUFBUyxFQUFDLGNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMENBLElBQTFDLENBQUg7QUFBQSxHQUFkLENBSEEsQ0FGRixFQU9HVixLQUFLLENBQUNXLGNBQU4sQ0FBcUIsT0FBckIsSUFBK0I7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUE0QixPQUFHLEVBQUVYLEtBQUssQ0FBQ1ksS0FBdkM7QUFBOEMsT0FBRyxFQUFDLDRCQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQS9CLEdBQWlILElBUHBILENBREE7QUFVRCxDQWREOztLQUFNYixXO0FBZ0JTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42YWE4MDc3NDI5NmU1ZTFkOTk1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RpbGViYXJJdGVtLm1vZHVsZS5zY3NzXCJcclxuXHJcbmNvbnN0IFRpbGVCYXJJdGVtID0gKHByb3BzKSA9PiB7XHJcblxyXG4gY29uc3Qge2lzTGluaywgbGlua1RvLCBpdGVtc30gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRfdGl0bGV9Pntwcm9wcy50ZXh0fTwvaDI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvd2VyX3RpdGxlc193cmFwcGVyfT5cclxuICAgIHtpc0xpbmsgPyBcclxuICAgIGl0ZW1zLm1hcChpdGVtPT4gPGEga2V5PXtpdGVtKzF9IGNsYXNzTmFtZT1cImxvd2VyLXRpdGxlcyBsb3dlci10aXRsZXMtbGlua1wiIGhyZWY9e2xpbmtUb30+e2l0ZW19PC9hPik6XHJcbiAgICBpdGVtcy5tYXAoaXRlbT0+IDxwIGtleT17aXRlbSsxfSBjbGFzc05hbWU9XCJsb3dlci10aXRsZXNcIj57aXRlbX08L3A+KX1cclxuICAgIDwvZGl2PlxyXG4gICAge3Byb3BzLmhhc093blByb3BlcnR5KCdpbWFnZScpPyA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIiBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9XCJ3b21hbiBlbmpveWluZyB0aW1lIGF0IHNwYVwiLz46IG51bGx9XHJcbiAgPC9kaXY+KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlsZUJhckl0ZW07Il0sInNvdXJjZVJvb3QiOiIifQ==