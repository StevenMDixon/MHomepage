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
    className: _TilebarItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card - title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, props.text), __jsx("div", {
    className: "lower-titles-wrapper",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9UaWxlQmFySXRlbS5qc3giXSwibmFtZXMiOlsiVGlsZUJhckl0ZW0iLCJwcm9wcyIsImlzTGluayIsImxpbmtUbyIsIml0ZW1zIiwic3R5bGVzIiwiY2FyZCIsInRpdGxlIiwidGV4dCIsIm1hcCIsIml0ZW0iLCJoYXNPd25Qcm9wZXJ0eSIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUV2QkMsTUFGdUIsR0FFRUQsS0FGRixDQUV2QkMsTUFGdUI7QUFBQSxNQUVmQyxNQUZlLEdBRUVGLEtBRkYsQ0FFZkUsTUFGZTtBQUFBLE1BRVBDLEtBRk8sR0FFRUgsS0FGRixDQUVQRyxLQUZPO0FBSTdCLFNBQ0E7QUFBSyxhQUFTLEVBQUVDLCtEQUFNLENBQUNDLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRUQsK0RBQU0sQ0FBQ0MsSUFBUCxHQUFZQyxLQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1DTixLQUFLLENBQUNPLElBQXpDLENBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NOLE1BQU0sR0FDUEUsS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLFdBQUc7QUFBRyxTQUFHLEVBQUVBLElBQUksR0FBQyxDQUFiO0FBQWdCLGVBQVMsRUFBQyxnQ0FBMUI7QUFBMkQsVUFBSSxFQUFFUCxNQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTBFTyxJQUExRSxDQUFIO0FBQUEsR0FBZCxDQURPLEdBRVBOLEtBQUssQ0FBQ0ssR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSxXQUFHO0FBQUcsU0FBRyxFQUFFQSxJQUFJLEdBQUMsQ0FBYjtBQUFnQixlQUFTLEVBQUMsY0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEwQ0EsSUFBMUMsQ0FBSDtBQUFBLEdBQWQsQ0FIQSxDQUZGLEVBT0dULEtBQUssQ0FBQ1UsY0FBTixDQUFxQixPQUFyQixJQUErQjtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQTRCLE9BQUcsRUFBRVYsS0FBSyxDQUFDVyxLQUF2QztBQUE4QyxPQUFHLEVBQUMsNEJBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBL0IsR0FBaUgsSUFQcEgsQ0FEQTtBQVVELENBZEQ7O0tBQU1aLFc7QUFnQlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNjMmQ5MWY1ODExNWYxYzRkNzYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVGlsZWJhckl0ZW0ubW9kdWxlLnNjc3NcIlxyXG5cclxuY29uc3QgVGlsZUJhckl0ZW0gPSAocHJvcHMpID0+IHtcclxuXHJcbiBjb25zdCB7aXNMaW5rLCBsaW5rVG8sIGl0ZW1zfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZC10aXRsZX0+e3Byb3BzLnRleHR9PC9oMj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG93ZXItdGl0bGVzLXdyYXBwZXJcIj5cclxuICAgIHtpc0xpbmsgPyBcclxuICAgIGl0ZW1zLm1hcChpdGVtPT4gPGEga2V5PXtpdGVtKzF9IGNsYXNzTmFtZT1cImxvd2VyLXRpdGxlcyBsb3dlci10aXRsZXMtbGlua1wiIGhyZWY9e2xpbmtUb30+e2l0ZW19PC9hPik6XHJcbiAgICBpdGVtcy5tYXAoaXRlbT0+IDxwIGtleT17aXRlbSsxfSBjbGFzc05hbWU9XCJsb3dlci10aXRsZXNcIj57aXRlbX08L3A+KX1cclxuICAgIDwvZGl2PlxyXG4gICAge3Byb3BzLmhhc093blByb3BlcnR5KCdpbWFnZScpPyA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIiBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9XCJ3b21hbiBlbmpveWluZyB0aW1lIGF0IHNwYVwiLz46IG51bGx9XHJcbiAgPC9kaXY+KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlsZUJhckl0ZW07Il0sInNvdXJjZVJvb3QiOiIifQ==