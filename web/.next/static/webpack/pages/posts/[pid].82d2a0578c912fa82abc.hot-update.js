webpackHotUpdate_N_E("pages/posts/[pid]",{

/***/ "./Components/PostWrapper.jsx":
/*!************************************!*\
  !*** ./Components/PostWrapper.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostWrapper.module.scss */ "./Components/PostWrapper.module.scss");
/* harmony import */ var _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\StevenDev\\Documents\\git\\Mhomepage\\web\\Components\\PostWrapper.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var PostWrapper = function PostWrapper(_ref) {
  var children = _ref.children,
      post = _ref.post;
  return __jsx("div", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_wrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, __jsx("img", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_main_image,
    src: post.mainImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_article_wrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("article", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_main,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_main_title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, post.title), children), __jsx("div", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_side_bar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_publish_date,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }, new Date(post.publishedAt).toDateString()), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 8
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 10
    }
  }, "Author"), __jsx("img", {
    src: post.authorImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 10
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 10
    }
  }, post.name)))));
};

_c = PostWrapper;
/* harmony default export */ __webpack_exports__["default"] = (PostWrapper);

var _c;

$RefreshReg$(_c, "PostWrapper");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0V3JhcHBlci5qc3giXSwibmFtZXMiOlsiUG9zdFdyYXBwZXIiLCJjaGlsZHJlbiIsInBvc3QiLCJzdHlsZXMiLCJwb3N0X3dyYXBwZXIiLCJwb3N0X21haW5faW1hZ2UiLCJtYWluSW1hZ2UiLCJwb3N0X2FydGljbGVfd3JhcHBlciIsInBvc3RfbWFpbiIsInBvc3RfbWFpbl90aXRsZSIsInRpdGxlIiwicG9zdF9zaWRlX2JhciIsInBvc3RfcHVibGlzaF9kYXRlIiwiRGF0ZSIsInB1Ymxpc2hlZEF0IiwidG9EYXRlU3RyaW5nIiwiYXV0aG9ySW1hZ2UiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXNCO0FBQUEsTUFBcEJDLFFBQW9CLFFBQXBCQSxRQUFvQjtBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTtBQUN4QyxTQUNBO0FBQUssYUFBUyxFQUFFQywrREFBTSxDQUFDQyxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVELCtEQUFNLENBQUNFLGVBQXZCO0FBQXdDLE9BQUcsRUFBRUgsSUFBSSxDQUFDSSxTQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBRUgsK0RBQU0sQ0FBQ0ksb0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFTLGFBQVMsRUFBRUosK0RBQU0sQ0FBQ0ssU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFHTCwrREFBTSxDQUFDTSxlQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlDUCxJQUFJLENBQUNRLEtBQTlDLENBREYsRUFFQ1QsUUFGRCxDQURGLEVBS0U7QUFBSyxhQUFTLEVBQUVFLCtEQUFNLENBQUNRLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSjtBQUFHLGFBQVMsRUFBRVIsK0RBQU0sQ0FBQ1MsaUJBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUMsSUFBSUMsSUFBSixDQUFTWCxJQUFJLENBQUNZLFdBQWQsRUFBMkJDLFlBQTNCLEVBQXpDLENBREksRUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUU7QUFBSyxPQUFHLEVBQUViLElBQUksQ0FBQ2MsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlkLElBQUksQ0FBQ2UsSUFBVCxDQUhGLENBRkQsQ0FMRixDQUZGLENBREE7QUFxQkQsQ0F0QkQ7O0tBQU1qQixXO0FBd0JTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bcGlkXS44MmQyYTA1NzhjOTEyZmE4MmFiYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Bvc3RXcmFwcGVyLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IFBvc3RXcmFwcGVyID0gKHtjaGlsZHJlbiwgcG9zdH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdF93cmFwcGVyfT5cclxuICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMucG9zdF9tYWluX2ltYWdlfSBzcmM9e3Bvc3QubWFpbkltYWdlfT48L2ltZz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdF9hcnRpY2xlX3dyYXBwZXJ9PlxyXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X21haW59PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWUgPXtzdHlsZXMucG9zdF9tYWluX3RpdGxlfT57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICA8L2FydGljbGU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdF9zaWRlX2Jhcn0+XHJcbiAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucG9zdF9wdWJsaXNoX2RhdGV9PntuZXcgRGF0ZShwb3N0LnB1Ymxpc2hlZEF0KS50b0RhdGVTdHJpbmcoKX08L3A+XHJcbiAgICAgICA8ZGl2PlxyXG4gICAgICAgICA8cD5BdXRob3I8L3A+XHJcbiAgICAgICAgIDxpbWcgc3JjPXtwb3N0LmF1dGhvckltYWdlfSAvPlxyXG4gICAgICAgICA8cD57cG9zdC5uYW1lfTwvcD5cclxuICAgICAgICAgXHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgXHJcbiAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0V3JhcHBlcjsiXSwic291cmNlUm9vdCI6IiJ9